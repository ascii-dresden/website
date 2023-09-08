import { style } from '@vanilla-extract/css';
import { THEME_ATTRIBUTE, THEME_DARK } from 'src/theme.ts';

const SELECTOR = `[${THEME_ATTRIBUTE}=${THEME_DARK}]`;

export const dark_mode = style({
	selectors: {
		[`html${SELECTOR} &`]: {
			display: 'none',
		},
	},
});

export const light_mode = style({
	selectors: {
		[`html:not(${SELECTOR}) &`]: {
			display: 'none',
		},
	},
});
