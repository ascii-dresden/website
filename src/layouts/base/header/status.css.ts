import { style } from '@vanilla-extract/css';
import { border_radius } from 'src/styles/border.css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css';

export const status = style({
	alignSelf: 'center',
	backgroundColor: colors.success,
	borderRadius: border_radius,
	color: colors.on_success,
	flex: 1,
	maxWidth: '16rem',
	padding: spacing['1'],
	textAlign: 'center',
});
