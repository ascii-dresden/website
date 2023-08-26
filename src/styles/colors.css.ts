/**
 * https://m3.material.io/styles/color/the-color-system/color-roles
 */

import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { THEME_ATTRIBUTE, THEME_DARK } from 'src/theme.ts';

const palette = createGlobalTheme(':root', {
	creme: '#e09b67',
	espresso: '#3f1a0d',
	teal: '#133038',
	milk: '#ffffff',

	green: '#26c485',
	red: '#ff3366',
});

export const colors = createThemeContract({
	background: null,
	on_background: null,

	surface: null,
	on_surface: null,

	success: null,
	on_success: null,

	error: null,
	on_error: null,
});

export const light = createGlobalTheme(`html`, colors, {
	background: palette.creme,
	on_background: palette.espresso,

	surface: palette.milk,
	on_surface: palette.espresso,

	success: palette.green,
	on_success: palette.milk,

	error: palette.red,
	on_error: palette.milk,
});

export const dark = createGlobalTheme(`html[${THEME_ATTRIBUTE}=${THEME_DARK}]`, colors, {
	background: palette.espresso,
	on_background: palette.creme,

	surface: palette.espresso,
	on_surface: palette.creme,

	success: palette.green,
	on_success: palette.espresso,

	error: palette.red,
	on_error: palette.milk,
});
