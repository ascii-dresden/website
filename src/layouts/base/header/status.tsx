import { Collapsible } from '@kobalte/core';
import { Accessor, Component, Match, Switch, createSignal, onMount } from 'solid-js';
import { Output, enumType, object, safeParse, transform } from 'valibot';

import { BusinessHours } from 'src/components/business_hours.tsx';
import { SvgExpand } from 'src/svg/chevron.tsx';

import {
	STATUS,
	status_root,
	status_trigger,
	status_content,
	status_trigger_text as status_trigger_text,
	status_trigger_icon,
	status_trigger_icon_svg,
} from './status.css.ts';

const STATUS_STREAM_URL = 'https://status.ascii.coffee/api/stream/status';

const StatusSchema = transform(
	object({
		Classification: enumType(['on', 'off']),
	}),
	(input) => input.Classification
);

export type Status = Output<typeof StatusSchema>;

function useStatus(): Accessor<Status | undefined> {
	const [status, setStatus] = createSignal<Status>();

	onMount(() => {
		const eventSource = new EventSource(STATUS_STREAM_URL);

		eventSource.addEventListener('message', (message) => {
			const status = safeParse(StatusSchema, JSON.parse(message.data));

			if (status.success) {
				setStatus(status.output);
				return;
			}

			setStatus();
		});

		eventSource.addEventListener('error', () => {
			eventSource.close();
		});
	});

	return status;
}

export const Status: Component = function () {
	const status = useStatus();

	return (
		<Collapsible.Root class={status_root} {...{ [STATUS]: status() }}>
			<Collapsible.Trigger class={status_trigger}>
				<div class={status_trigger_text}>
					<p>
						<Switch fallback="Öffnungszeiten">
							<Match when={status() === 'on'}>Geöffnet</Match>
							<Match when={status() === 'off'}>Geschlossen</Match>
						</Switch>
					</p>
				</div>
				<div class={status_trigger_icon}>
					<SvgExpand class={status_trigger_icon_svg} />
				</div>
			</Collapsible.Trigger>
			<Collapsible.Content class={status_content}>
				<BusinessHours />
			</Collapsible.Content>
		</Collapsible.Root>
	);
};
