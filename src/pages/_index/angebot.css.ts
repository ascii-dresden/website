import { globalStyle, style } from '@vanilla-extract/css';

import { border_radius, border_style, border_width } from 'src/styles/border.css';
import { colors } from 'src/styles/colors.css';
import { spacing } from 'src/styles/spacing.css';

export const angebot = style({
	display: 'grid',
	gridTemplateColumns: `max-content 1fr calc(${spacing['4']} - ${spacing['2']})`,
	gridTemplateRows: `repeat(5, max-content) calc(${spacing['4']} - ${spacing['2']})`,

	position: 'relative',

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	backgroundColor: colors.light_teal,

	'::before': {
		content: '""',
		display: 'block',

		gridColumn: '1 / 3',
		gridRow: '2 / 5',

		backgroundColor: colors.teal,
		backgroundImage: `url(src/assets/grain.svg)`,
		backgroundBlendMode: 'soft-light',
		backgroundSize: '256px',

		borderRadius: border_radius,
	},

	'::after': {
		content: '""',
		display: 'block',

		gridColumn: '2 / 3',
		gridRow: '4 / 5',

		borderTopWidth: border_width,
		borderTopStyle: border_style,
		borderTopColor: colors.light_teal,
		borderLeftWidth: border_width,
		borderLeftStyle: border_style,
		borderLeftColor: colors.light_teal,
	},
});

export const head = style({
	gridColumn: '1 / 3',
	gridRow: '1 / 2',

	paddingBottom: spacing['2'],

	color: colors.teal,
});

export const title = style({
	gridColumn: '1 / 3',
	gridRow: '2 / 3',

	paddingTop: spacing['3'],
	paddingLeft: spacing['3'],
	paddingRight: spacing['3'],

	color: colors.light_teal,
});

export const summary = style({
	gridColumn: '1 / 3',
	gridRow: '3 / 4',

	paddingInline: spacing['3'],
	paddingBlock: spacing['2'],

	color: colors.light_teal,
	fontWeight: 400,
});

export const date = style({
	gridColumn: '1 / 2',
	gridRow: '4 / 5',

	textAlign: 'center',
	padding: spacing['2'],

	color: colors.light_teal,

	borderTopStyle: border_style,
	borderTopWidth: border_width,
	borderTopColor: colors.light_teal,
});

export const image = style({
	gridColumn: '2 / 4',
	gridRow: '4 / 7',

	display: 'flex',
	flexDirection: 'column',
});

globalStyle(`${image} img`, {
	flex: '1 0 0',
	height: 0,

	objectFit: 'cover',

	borderRadius: border_radius,
	borderTopLeftRadius: 0,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.teal,
});

export const button_more = style({
	gridColumn: '1 / 2',
	gridRow: '5 / 6',
	alignSelf: 'start',

	padding: spacing['2'],
	textAlign: 'center',

	backgroundColor: colors.light_teal,
	color: colors.teal,

	borderRadius: border_radius,
	borderTopRightRadius: 0,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.teal,
});
