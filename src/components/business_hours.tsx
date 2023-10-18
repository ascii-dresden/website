import { Component, For, JSX } from 'solid-js';

import { fetchOpeningHours, daysToLocaleString } from 'src/data/opening_hours.ts';
import { body_large } from 'src/styles/atomic/fonts.css.ts';

import { business_hours, business_hours_section, dd, dl, dt } from './business_hours.css.ts';

const openingHours = fetchOpeningHours();

export const BusinessHours: Component<JSX.HTMLAttributes<HTMLDivElement>> = function (props) {
	return (
		<div
			{...props}
			class={props.class ? `${props.class} ${business_hours}` : business_hours}
		>
			<div class={business_hours_section}>
				<h6>Während der Vorlesungszeit</h6>
				<dl class={dl}>
					<For each={openingHours}>
						{({ days, opens, closes }) => (
							<>
								<dt class={`${body_large} ${dt}`}>{daysToLocaleString(days)}</dt>
								<dd class={`${body_large} ${dd}`}>
									<time datetime={opens.toString()}>
										{opens.toLocaleString('de-DE', {
											hour: 'numeric',
											minute: 'numeric',
											second: undefined,
										})}
										<span> Uhr</span>
									</time>
									<span> bis </span>
									<time datetime={closes.toString()}>
										{closes.toLocaleString('de-DE', {
											hour: 'numeric',
											minute: 'numeric',
											second: undefined,
										})}
										<span> Uhr</span>
									</time>
								</dd>
							</>
						)}
					</For>
				</dl>
			</div>
			<div class={business_hours_section}>
				<h6>Vorlesungsfreie Zeit</h6>
				<p>It's open when it's open</p>
			</div>
		</div>
	);
};
