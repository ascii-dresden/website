import { assignVars, globalStyle, style } from '@vanilla-extract/css';

import { divider_colors } from 'src/components/divider.css.ts';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const divider = style({
	vars: assignVars(divider_colors, {
		from: colors.light_teal,
		to: colors.creme,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.teal,
				to: colors.espresso,
				stroke: colors.black,
			}),
		},
	},
});

export const become_member = style({
	display: 'grid',
	gridTemplateColumns: `calc(${spacing['4']} - ${spacing['2']}) 1fr max-content`,
	gridTemplateRows: `max-content max-content calc(${spacing['4']} - ${spacing['2']}) max-content calc(${spacing['4']} - ${spacing['2']})`,

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	position: 'relative',

	backgroundColor: colors.creme,

	'::before': {
		content: '""',
		display: 'block',

		gridColumn: '2 / 4',
		gridRow: '2 / 4',

		backgroundColor: colors.milk,

		borderRadius: border_radius,
		borderStyle: border_style,
		borderWidth: border_width,
		borderColor: colors.espresso,
	},
	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},

		[dark('&::before')]: {
			backgroundColor: colors.creme,
			backgroundImage: `url("../../assets/grain.svg")`,
			backgroundSize: '256px',
			backgroundBlendMode: 'multiply',

			borderColor: colors.creme,
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
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

export const card_background = style({});

export const card_summary = style({
	gridColumn: '2 / 4',
	gridRow: '2 / 3',

	padding: spacing['3'],
	paddingBottom: 0,

	color: colors.espresso,
});

export const image = style({
	gridColumn: '2 / 3',
	gridRow: '3 / 6',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
});

globalStyle(`${image} svg`, {
	flex: '1 0 0',
	width: 'auto',

	filter: `drop-shadow(0 1px 2px ${colors.espresso})`,
});

export const button_more = style({
	gridColumn: '3 / 4',
	gridRow: '4 / 5',
	alignSelf: 'start',

	// HACK: The animation might change the size of the button
	minWidth: 120,

	color: colors.espresso,

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.espresso,
	borderTopLeftRadius: 0,

	selectors: {
		['&:hover']: {
			color: colors.creme,
			backgroundColor: colors.espresso,
		},
		[dark()]: {
			color: colors.creme,
			borderColor: colors.creme,
		},
		[dark('&:hover')]: {
			color: colors.espresso,
			backgroundColor: colors.creme,
		},
	},
});
