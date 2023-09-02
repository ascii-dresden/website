import { globalStyle, style } from '@vanilla-extract/css';

import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';

export const become_member = style({
	display: 'grid',
	gridTemplateColumns: `calc(${spacing['4']} - ${spacing['2']}) 1fr max-content`,
	gridTemplateRows: `max-content max-content calc(${spacing['4']} - ${spacing['2']}) max-content calc(${spacing['4']} - ${spacing['2']})`,

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	position: 'relative',

	backgroundColor: colors.creme,
});

export const head = style({
	gridColumn: '2 / 4',
	gridRow: '1 / 2',

	paddingBottom: spacing['2'],

	color: colors.espresso,
});

export const card_background = style({
	gridColumn: '2 / 4',
	gridRow: '2 / 4',

	display: 'block',

	backgroundColor: colors.milk,

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.espresso,
});

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
	height: 0,
	width: 'auto',

	filter: `drop-shadow(0 1px 2px ${colors.espresso})`,
});

export const button_more = style({
	gridColumn: '3 / 4',
	gridRow: '4 / 5',
	alignSelf: 'start',

	padding: spacing['2'],
	textAlign: 'center',

	color: colors.espresso,

	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
	borderColor: colors.espresso,
	borderTopLeftRadius: 0,
});
