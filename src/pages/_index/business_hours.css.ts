import { assignVars, style } from '@vanilla-extract/css';

import { divider_colors } from 'src/components/divider.css.ts';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const divider = style({
	vars: assignVars(divider_colors, {
		from: colors.creme,
		to: colors.milk,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.espresso,
				to: colors.black,
				stroke: colors.espresso,
			}),
		},
	},
});

export const business_hours = style({
	display: 'grid',

	position: 'relative',

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	color: colors.espresso,
	backgroundColor: colors.milk,

	selectors: {
		[dark()]: {
			color: colors.creme,
			backgroundColor: colors.black,
		},
	},
});

export const head = style({
	paddingBottom: spacing['2'],
});

export const card = style({
	display: 'grid',
	gap: spacing['3'],

	padding: spacing['3'],

	color: colors.milk,
	backgroundColor: colors.espresso,
	backgroundImage: 'url("src/assets/grain.svg")',
	backgroundBlendMode: 'soft-light',

	borderRadius: border_radius,

	selectors: {
		[dark()]: {
			color: colors.black,
			backgroundColor: colors.creme,
			backgroundBlendMode: 'multiply',
			borderStyle: border_style,
			borderWidth: border_width,
			borderColor: colors.creme,
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
		},
	},
});

export const hr = style({
	marginInline: `calc(-1 * ${spacing['3']})`,
	borderTopWidth: border_width,
	borderTopStyle: border_style,
	borderTopColor: colors.milk,

	selectors: {
		[dark()]: {
			borderTopColor: colors.black,
		},
	},
});

export const dl = style({
	display: 'grid',
	gap: spacing['2'],
});

export const dt = style({
	fontWeight: 800,
});

export const dd = style({
	selectors: {
		'&:not(:last-child)': {
			marginBottom: spacing['2'],
		},
	},
});

export const footnote = style({
	marginLeft: spacing['3'],
});