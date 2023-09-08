const dark_selector = `html[${THEME_ATTRIBUTE}=${THEME_DARK}]`;

import { THEME_ATTRIBUTE, THEME_DARK } from 'src/theme.ts';

export function dark(selector?: string): string {
	return `${dark_selector} ${selector ?? '&'}`;
}
