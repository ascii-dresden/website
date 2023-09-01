import { globalStyle, style } from '@vanilla-extract/css';

import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';

export const next_event = style({
	display: 'grid',
	gridTemplateColumns: `calc(${spacing['4']} - ${spacing['2']}) 1fr max-content`,
	gridTemplateRows: `repeat(5, max-content) calc(${spacing['4']} - ${spacing['2']})`,

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	position: 'relative',

	backgroundColor: colors.milk,

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
});

export const head = style({
	gridColumn: '2 / 4',
	gridRow: '1 / 2',

	paddingBottom: spacing['2'],

	color: colors.espresso,
});

export const card_background = style({
	gridColumn: '2 / 4',
	gridRow: '2 / 5',

	display: 'block',

	backgroundColor: colors.espresso,
	backgroundImage: `url(src/assets/grain.svg)`,
	backgroundBlendMode: 'soft-light',
	backgroundSize: '256px',

	borderRadius: border_radius,
});

export const card_title = style({
	gridColumn: '2 / 4',
	gridRow: '2 / 3',

	paddingTop: spacing['3'],
	paddingLeft: spacing['3'],
	paddingRight: spacing['3'],

	color: colors.milk,
});

export const card_summary = style({
	gridColumn: '2 / 4',
	gridRow: '3 / 4',

	paddingInline: spacing['3'],
	paddingBlock: spacing['2'],

	color: colors.milk,
	fontWeight: 400,
});

export const card_date = style({
	gridColumn: '3 / 4',
	gridRow: '4 / 5',

	textAlign: 'center',
	padding: spacing['2'],

	color: colors.milk,

	borderTopStyle: border_style,
	borderTopWidth: border_width,
	borderTopColor: colors.milk,
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

export const button_more = style({
	gridColumn: '3 / 4',
	gridRow: '5 / 6',
	alignSelf: 'start',

	padding: spacing['2'],
	textAlign: 'center',

	backgroundColor: colors.milk,
	color: colors.espresso,

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.espresso,
	borderTopLeftRadius: 0,
});
