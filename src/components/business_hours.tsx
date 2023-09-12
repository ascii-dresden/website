import { Component } from 'solid-js';

import { body_large } from 'src/styles/atomic/fonts.css.ts';

import { business_hours, dd, dl, dt, hr } from './business_hours.css.ts';

export const BusinessHours: Component = function () {
	return (
		<div class={business_hours}>
			<h6>Während der Vorlesungszeit</h6>
			<dl class={dl}>
				<dt class={`${body_large} ${dt}`}>Montag bis Donnerstag</dt>
				<dd class={`${body_large} ${dd}`}>
					<time datetime="9:00">9:00 Uhr</time> bis <time datetime="17:00">17:00 Uhr</time>
				</dd>
				<dt class={`${body_large} ${dt}`}>Freitag</dt>
				<dd class={`${body_large} ${dd}`}>
					<time datetime="9:00">9:00 Uhr</time> bis <time datetime="15:00">15:00 Uhr</time>
				</dd>
				<dt class={`${body_large} ${dt}`}>Wochenende</dt>
				<dd class={`${body_large} ${dd}`}>Geschlossen</dd>
			</dl>
			<hr class={hr} />
			<h6>Vorlesungsfreie Zeit</h6>
			<p>It's open when it's open</p>
		</div>
	);
};
