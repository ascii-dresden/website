import { style } from '@vanilla-extract/css';
import { border_radius, border_style, border_width } from 'src/styles/border.css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css';

export const status = style({
	flex: 1,
	maxWidth: '16rem',
	alignSelf: 'center',
	textAlign: 'center',

	padding: spacing['1'],

	backgroundColor: colors.green,
	color: colors.espresso,

	borderRadius: border_radius,
	borderColor: colors.espresso,
	borderStyle: border_style,
	borderWidth: border_width,
});
