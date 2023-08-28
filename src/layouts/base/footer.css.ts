import { style } from '@vanilla-extract/css';
import { colors } from 'src/styles/colors.css';
import { spacing } from 'src/styles/spacing.css';

export const footer = style({
	padding: spacing['3'],
	textAlign: 'center',

	backgroundColor: colors.background,
	color: colors.surface,
});
