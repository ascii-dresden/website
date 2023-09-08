import { assignVars, globalStyle, style } from '@vanilla-extract/css';

import { divider_colors } from 'src/components/divider.css';
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
				from: colors.black,
				to: colors.espresso,
				stroke: colors.espresso,
			}),
		},
	},
});

export const next_event = style({
	display: 'grid',
	gridTemplateColumns: `calc(${spacing['4']} - ${spacing['2']}) 1fr max-content`,
	gridTemplateRows: `repeat(5, max-content) calc(${spacing['4']} - ${spacing['2']})`,

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	position: 'relative',

	backgroundColor: colors.milk,

	'::before': {
		content: '""',
		display: 'block',

		gridColumn: '2 / 4',
		gridRow: '2 / 5',

		backgroundColor: colors.espresso,
		backgroundImage: 'url("../../assets/grain.svg")',
		backgroundBlendMode: 'soft-light',

		borderRadius: border_radius,
	},
	'::after': {
		content: '""',
		display: 'block',

		gridColumn: '2 / 3',
		gridRow: '4 / 5',

		borderTopWidth: border_width,
		borderTopStyle: border_style,
		borderTopColor: colors.milk,
		borderRightWidth: border_width,
		borderRightStyle: border_style,
		borderRightColor: colors.milk,
	},
	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},
		[dark('&::before')]: {
			backgroundColor: colors.creme,
			backgroundBlendMode: 'multiply',
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.espresso}`,
			borderWidth: border_width,
			borderStyle: border_style,
			borderColor: colors.creme,
		},
		[dark('&::after')]: {
			borderTopColor: colors.espresso,
			borderRightColor: colors.espresso,
			marginLeft: border_width,
			marginBottom: border_width,
		},
	},
});

export const head = style({
	gridColumn: '2 / 4',
	gridRow: '1 / 2',

	paddingBottom: spacing['2'],

	color: colors.espresso,

	selectors: {
		[dark()]: {
			color: colors.creme,
		},
	},
});

export const card_title = style({
	gridColumn: '2 / 4',
	gridRow: '2 / 3',

	paddingTop: spacing['3'],
	paddingLeft: spacing['3'],
	paddingRight: spacing['3'],

	color: colors.milk,

	selectors: {
		[dark()]: {
			color: colors.espresso,
		},
	},
});

export const card_summary = style({
	gridColumn: '2 / 4',
	gridRow: '3 / 4',

	paddingInline: spacing['3'],
	paddingBlock: spacing['2'],

	color: colors.milk,
	fontWeight: 400,

	selectors: {
		[dark()]: {
			color: colors.espresso,
		},
	},
});

export const card_date = style({
	gridColumn: '3 / 4',
	gridRow: '4 / 5',

	textAlign: 'center',
	padding: spacing['2'],
	paddingBottom: `calc(${spacing['2']} + ${border_width}px)`,
	paddingRight: `calc(${spacing['2']} + ${border_width}px)`,

	color: colors.milk,

	borderTopStyle: border_style,
	borderTopWidth: border_width,
	borderTopColor: colors.milk,

	selectors: {
		[dark()]: {
			padding: spacing['2'],
			marginBottom: border_width,
			marginRight: border_width,

			color: colors.espresso,
			borderTopColor: colors.espresso,
		},
	},
});

export const image = style({
	gridColumn: '1 / 3',
	gridRow: '4 / 7',

	display: 'flex',
	flexDirection: 'column',
});

globalStyle(`${image} img`, {
	flex: '1 0 0',
	height: 0,

	objectFit: 'cover',

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.espresso,
	borderTopRightRadius: 0,
});

globalStyle(dark(`${image} img`), {
	borderColor: colors.espresso,
	boxShadow: [
		`0 0 0 ${border_width}px ${colors.creme}`,
		`0 0 ${spacing['1']} 0 ${colors.black}`,
	].join(','),
});

export const button_more = style({
	gridColumn: '3 / 4',
	gridRow: '5 / 6',
	alignSelf: 'start',

	padding: spacing['2'],
	textAlign: 'center',

	color: colors.espresso,

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.espresso,
	borderTopLeftRadius: 0,

	selectors: {
		[dark()]: {
			color: colors.creme,
			borderColor: colors.creme,
		},
	},
});
