import { globalStyle, style } from '@vanilla-extract/css';

import { border_radius, border_style, border_width } from 'src/styles/border.css';
import { colors } from 'src/styles/colors.css';
import { spacing } from 'src/styles/spacing.css';

export const angebot = style({
	display: 'grid',
	gridTemplateColumns: `max-content 1fr calc(${spacing['4']} - ${spacing['2']})`,
	gridTemplateRows: `repeat(5, max-content) calc(${spacing['4']} - ${spacing['2']})`,

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	'::before': {
		content: '""',
		display: 'block',

		gridColumn: '1 / 3',
		gridRow: '2 / 5',

		backgroundColor: colors.on_surface,

		borderRadius: border_radius,
		// borderStyle: border_style,
		// borderWidth: border_width,
		// borderColor: colors.on_surface,
	},

	'::after': {
		content: '""',
		display: 'block',

		gridColumn: '2 / 3',
		gridRow: '4 / 5',

		borderTopWidth: border_width,
		borderTopStyle: border_style,
		borderTopColor: colors.surface,
		borderLeftWidth: border_width,
		borderLeftStyle: border_style,
		borderLeftColor: colors.surface,
	},
});

export const head = style({
	gridColumn: '1 / 3',
	gridRow: '1 / 2',

	paddingBottom: spacing['2'],

	color: colors.on_surface,
});

export const title = style({
	gridColumn: '1 / 3',
	gridRow: '2 / 3',

	paddingTop: spacing['3'],
	paddingLeft: spacing['3'],
	paddingRight: spacing['3'],

	color: colors.surface,
});

export const summary = style({
	gridColumn: '1 / 3',
	gridRow: '3 / 4',

	paddingInline: spacing['3'],
	paddingBlock: spacing['2'],

	color: colors.surface,
	fontWeight: 400,
});

export const date = style({
	gridColumn: '1 / 2',
	gridRow: '4 / 5',

	textAlign: 'center',
	padding: spacing['2'],

	color: colors.surface,

	borderTopStyle: border_style,
	borderTopWidth: border_width,
	borderTopColor: colors.surface,
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
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.on_surface,
	borderTopLeftRadius: 0,
});

export const button_more = style({
	gridColumn: '1 / 2',
	gridRow: '5 / 6',
	alignSelf: 'start',

	padding: spacing['2'],
	textAlign: 'center',

	backgroundColor: colors.surface,
	color: colors.on_surface,

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.on_surface,
	borderTopRightRadius: 0,
});
