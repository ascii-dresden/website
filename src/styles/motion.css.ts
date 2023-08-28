/**
 * https://m3.material.io/styles/motion/easing-and-duration
 */

import { createGlobalTheme } from '@vanilla-extract/css';

export const durations = createGlobalTheme(':root', {
	short: '100ms',
	medium: '250ms',
	long: '500ms',
	extra_long: '1000ms',
});

export const ease = createGlobalTheme(':root', {
	standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
	standard_accelerate: 'cubic-bezier(0.3, 0, 1, 1)',
	standard_decelerate: 'cubic-bezier(0, 0, 0, 1)',
	emphasized_accelerate: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
	emphasize_decelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
});
