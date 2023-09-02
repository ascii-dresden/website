import { style } from '@vanilla-extract/css';

import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const hero = style({
	display: 'flex',
	flexDirection: 'column',

	gap: spacing['2'],
	paddingTop: spacing['2'],
	paddingBottom: spacing['4'],

	backgroundColor: colors.creme,
	color: colors.espresso,

	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
			color: colors.creme,
		},
	},
});

export const hero_image = style({
	objectFit: 'cover',
	aspectRatio: '1.5',
	marginInline: spacing['2'],
	zIndex: 1,

	borderRadius: border_radius,
	borderWidth: border_width,
	borderStyle: border_style,
	borderColor: colors.espresso,

	selectors: {
		[dark()]: {
			borderColor: colors.creme,
		},
	},
});

export const hero_summary = style({
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',

	gap: spacing['3'],
	padding: spacing['3'],
	marginRight: spacing['2'],

	backgroundColor: colors.milk,
	color: colors.espresso,

	borderTopRightRadius: border_radius,
	borderBottomRightRadius: border_radius,
	borderWidth: border_width,
	borderStyle: border_style,
	borderColor: colors.espresso,
	borderLeft: 'none',

	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
			color: colors.creme,
			borderColor: colors.creme,
		},
	},
});
