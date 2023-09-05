import { style } from '@vanilla-extract/css';

import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const status = style({
	flex: 1,
	maxWidth: '16rem',
	alignSelf: 'center',
	textAlign: 'center',

	padding: spacing['1'],

	backgroundColor: colors.green,
	color: colors.espresso,

	borderColor: colors.espresso,
	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,

	selectors: {
		[dark()]: {
			color: colors.black,
			borderColor: colors.creme,
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
		},
	},
});
