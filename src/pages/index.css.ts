import { style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { repeating_linear_gradient } from 'src/styles/util/repeating_linear_gradient.css.ts';

const pattern_size = 2;

export const divider = style({
	height: spacing['2'],
	backgroundColor: colors.creme,
	backgroundImage: repeating_linear_gradient(120, [
		'transparent',
		`transparent ${pattern_size * 2}px`,
		`${colors.milk} ${pattern_size * 2}px`,
		`${colors.milk} ${pattern_size * 3}px`,
	]),
});
