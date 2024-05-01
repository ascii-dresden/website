import { assignVars, globalStyle, style } from '@vanilla-extract/css';
import { vars_button } from 'src/components/button.css';
import { border_style, border_width } from 'src/styles/border.css.ts';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const footer = style({
	display: 'grid',

	position: 'relative',

	paddingInline: spacing['2'],
	paddingTop: spacing['4'],
	paddingBottom: spacing['3'],

	backgroundColor: colors.creme,
	color: colors.espresso,

	selectors: {
		[dark()]: {
			backgroundColor: colors.black,
			color: colors.creme,
		},
	},
});

export const tree = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: spacing['3'],
});

export const text_link = style({
	display: 'flex',
	selectors: {
		[`${tree} > li > ul > li > &:hover`]: {
			borderBottomColor: colors.espresso,
		},
		[dark(`${tree} > li > ul > li > &:hover`)]: {
			borderBottomColor: colors.creme,
		},
	},
});

export const contact = style({
	gridColumn: '1 / 3',
});

export const socials = style({
	display: 'flex',
	flexDirection: 'row',
});

export const social_button = style({
	vars: assignVars(vars_button, {
		color: colors.espresso,
		backgroundColor: colors.creme,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(vars_button, {
				color: colors.creme,
				backgroundColor: colors.espresso,
			}),
		},
	},
});

export const copyright = style({
	gridColumn: '1 / 3',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: spacing['1'],
});

globalStyle(`${tree} > li > ul:not(${socials})`, {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	rowGap: spacing['1'],
});

globalStyle(`${tree} p:not(${text_link} > p), ${tree} ${text_link}`, {
	paddingTop: spacing['1'],
	paddingBottom: spacing['1'],

	borderBlockWidth: border_width,
	borderBlockStyle: border_style,
	borderBlockColor: 'transparent',
});
