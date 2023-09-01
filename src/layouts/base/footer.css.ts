import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const footer = style({
	padding: spacing['3'],
	textAlign: 'center',

	backgroundColor: colors.creme,
	color: colors.espresso,

	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
			color: colors.creme,
		},
	},
});
