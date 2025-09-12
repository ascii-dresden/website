import { assignVars, globalStyle, style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { divider_colors } from 'src/components/divider.css.ts';
import { dark } from 'src/styles/themes.css.ts';

globalStyle('html', {
	scrollPaddingTop: '4rem',
});

export const body = style({
	backgroundColor: colors.creme,
	color: colors.espresso,
	selectors: {
		[dark()]: {
			backgroundColor: colors.black,
			color: colors.milk,
		},
	},
});

export const main = style({});

export const divider = style({
	vars: assignVars(divider_colors, {
		from: colors.milk,
		to: colors.creme,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.black,
				to: colors.black,
				stroke: colors.espresso,
			}),
		},
	},
});
