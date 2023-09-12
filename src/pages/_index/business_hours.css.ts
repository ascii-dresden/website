import { assignVars, style } from '@vanilla-extract/css';

import { divider_colors } from 'src/components/divider.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const divider = style({
	vars: assignVars(divider_colors, {
		from: colors.creme,
		to: colors.milk,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.espresso,
				to: colors.black,
				stroke: colors.espresso,
			}),
		},
	},
});

export const business_hours = style({
	display: 'grid',

	position: 'relative',

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	color: colors.espresso,
	backgroundColor: colors.milk,

	selectors: {
		[dark()]: {
			color: colors.creme,
			backgroundColor: colors.black,
		},
	},
});

export const head = style({
	paddingBottom: spacing['2'],
});

export const footnote = style({
	marginLeft: spacing['3'],
});
