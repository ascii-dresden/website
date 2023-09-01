/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient}
 */
export function repeating_linear_gradient(angle: number, stops: string[]): string {
	return `repeating-linear-gradient(${angle}deg, ${stops.join(', ')})`;
}
