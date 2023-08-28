import { createGlobalTheme } from '@vanilla-extract/css';

export const spacing = createGlobalTheme(':root', {
	'1': '0.5rem',
	'2': '1rem',
	'3': '2rem',
	'4': '4rem',
} as const);
