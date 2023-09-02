import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const body = style({
	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},
	},
});

export const main = style({});
