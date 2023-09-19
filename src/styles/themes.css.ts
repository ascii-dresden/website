const dark_selector = `html[${THEME_ATTRIBUTE}=${THEME_DARK}]`;

import { THEME_ATTRIBUTE, THEME_DARK } from 'src/theme.ts';

export function dark(selector?: string): string {
	if (!selector) {
		return `${dark_selector} &`;
	}

	return selector
		.split(',')
		.map((s) => `${dark_selector} ${s.trim()}`)
		.join(',');
}
