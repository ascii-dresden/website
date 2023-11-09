import { assignVars, globalStyle, style } from '@vanilla-extract/css';
import { vars_button } from 'src/components/button.css';

import { colors } from 'src/styles/colors.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const footer = style({
	display: 'grid',

	position: 'relative',

	paddingInline: '1rem',
	paddingTop: '4rem',
	paddingBottom: '2rem',

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
	gap: '2rem',
});

export const text_link = style({
	display: 'flex',
	selectors: {
		[`${tree} > li > ul > li > &:hover`]: {
			textDecoration: 'underline',
			textUnderlineOffset: '0.25rem',
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
	gap: '0.5rem',
});

globalStyle(`${tree} > li > ul:not(${socials})`, {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	rowGap: '0.5rem',
});

globalStyle(`${tree} p:not(${text_link} > p), ${tree} ${text_link}`, {});
