import { style } from '@vanilla-extract/css';
import { colors } from 'src/styles/colors.css';
import { spacing } from 'src/styles/spacing.css';

const pattern_size = 2;

export const divider = style({
	height: spacing['2'],
	backgroundColor: colors.background,
	backgroundImage: repeating_linear_gradient(120, [
		'transparent',
		`transparent ${pattern_size * 2}px`,
		`${colors.surface} ${pattern_size * 2}px`,
		`${colors.surface} ${pattern_size * 3}px`,
	]),
});

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient}
 */
function repeating_linear_gradient(angle: number, stops: string[]) {
	return `repeating-linear-gradient(${angle}deg, ${stops.join(', ')})`;
}
