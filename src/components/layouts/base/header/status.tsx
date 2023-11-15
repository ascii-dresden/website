import { Collapsible } from '@kobalte/core';
import { Accessor, Component, Match, Switch, createSignal, onMount } from 'solid-js';
import { Output, object, picklist, safeParse, transform } from 'valibot';

import { STATUS_STREAM_URL } from 'ascii.config.ts';

import { BusinessHours } from 'src/components/business_hours.tsx';
import { SvgExpand } from 'src/components/svg/chevron.tsx';

import {
	STATUS,
	status_root,
	status_trigger,
	status_content,
	status_trigger_text as status_trigger_text,
	status_trigger_icon,
	status_trigger_icon_svg,
	status_business_hours,
	animation_in,
	animation_out,
} from './status.css.ts';
import { label_large } from 'src/styles/atomic/fonts.css.ts';

const StatusSchema = transform(
	object({
		Classification: picklist(['on', 'off']),
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

export const Status: Component = function() {
	const status = useStatus();

	const [forceMount, setForceMount] = createSignal<boolean>(false);

	function onAnimationEnd(e: AnimationEvent) {
		switch (e.animationName) {
			case animation_in: {
				setForceMount(true);
				break;
			}
			case animation_out: {
				setForceMount(false);
				break;
			}
		}
	}

	return (
		<Collapsible.Root
			class={status_root}
			forceMount={forceMount()}
			{...{ [STATUS]: status() }}
		>
			<Collapsible.Trigger class={status_trigger}>
				<div class={status_trigger_text}>
					<p class={label_large}>
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
				<BusinessHours
					class={status_business_hours}
					onAnimationEnd={onAnimationEnd}
				/>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};
