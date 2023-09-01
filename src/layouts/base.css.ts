import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const body = style({
	backgroundColor: colors.creme,
	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},
	},
});

export const main = style({});
