import { Accessor, Component, Match, Switch, createSignal, onMount } from 'solid-js';
import { Output, enumType, object, safeParse, transform } from 'valibot';

import { BusinessHours } from 'src/components/business_hours.tsx';
import { SvgCollapse, SvgExpand } from 'src/svg/chevron.tsx';

import { status as _status, status_collapse, status_dialog, status_expand } from './status.css.ts';

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

	let dialog: HTMLDialogElement;

	function open() {
		dialog.showModal();
	}

	function close() {
		dialog.close();
	}

	return (
		<>
			<dialog class={status_dialog} ref={dialog!} onCancel={close}>
				<button class={status_collapse} onClick={close}>
					<SvgCollapse />
				</button>
				<BusinessHours />
			</dialog>
			<button class={_status[status() ?? 'fallback']} onClick={open}>
				<p>
					<Switch fallback="Öffnungszeiten">
						<Match when={status() === 'on'}>Geöffnet</Match>
						<Match when={status() === 'off'}>Geschlossen</Match>
					</Switch>
				</p>
				<div class={status_expand}>
					<SvgExpand />
				</div>
			</button>
		</>
	);
};
