import { Component } from 'solid-js';

import { status } from './status.css.ts';

export const Status: Component = function() {
	return (
		<div class={status}>
			<p>Geöffnet</p>
		</div>
	);
};
