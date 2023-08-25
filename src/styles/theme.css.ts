/**
 * https://m3.material.io/styles/color/the-color-system/color-roles
 */

import { createTheme, createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

const colors = createGlobalTheme(':root', {
	creme: '#e09b67',
	espresso: '#3f1a0d',
	teal: '#133038',
	milk: '#ffffff',

	green: '#26c485',
	red: '#ff3366',
});

export const theme = createThemeContract({
	background: null,
	on_background: null,

	surface: null,
	on_surface: null,

	success: null,
	on_success: null,

	error: null,
	on_error: null,
});

export const light = createTheme(theme, {
	background: colors.creme,
	on_background: colors.espresso,

	surface: colors.milk,
	on_surface: colors.espresso,

	success: colors.green,
	on_success: colors.milk,

	error: colors.red,
	on_error: colors.milk,
});

export const dark = createTheme(theme, {
	background: colors.espresso,
	on_background: colors.creme,

	surface: colors.creme,
	on_surface: colors.espresso,

	success: colors.green,
	on_success: colors.milk,

	error: colors.red,
	on_error: colors.milk,
});
