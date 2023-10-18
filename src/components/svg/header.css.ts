import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const fill = style({
	fill: colors.milk,
	selectors: {
		[dark()]: {
			fill: colors.espresso,
		},
	},
});

export const stroke = style({
	fill: colors.espresso,
	selectors: {
		[dark()]: {
			fill: colors.creme,
		},
	},
});
