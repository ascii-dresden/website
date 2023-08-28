import { style } from '@vanilla-extract/css';
import { border_radius, border_style, border_width } from 'src/styles/border.css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css';

export const status = style({
	alignSelf: 'center',
	backgroundColor: colors.success,
	color: colors.on_success,
	flex: 1,
	maxWidth: '16rem',
	padding: spacing['1'],
	textAlign: 'center',

	borderRadius: border_radius,
	borderColor: colors.on_success,
	borderStyle: border_style,
	borderWidth: border_width,
});
