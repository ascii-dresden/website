import { ComplexStyleRule, globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { business_hours } from 'src/components/business_hours.css.ts';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { durations, ease } from 'src/styles/motion.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

import { Status } from './status.tsx';

const status_base = style({
	width: '100%',
	maxWidth: '16rem',
	alignSelf: 'center',
	height: spacing['3'],

	display: 'grid',
	gridTemplateColumns: `1fr ${spacing['3']}`,
	paddingLeft: spacing['2'],
	alignItems: 'center',
	justifyItems: 'center',

	color: colors.espresso,

	borderColor: colors.espresso,
	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,

	selectors: {
		[dark()]: {
			color: colors.black,
			borderColor: colors.creme,
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
		},
	},
});

export const status = styleVariants<Record<Status | 'fallback', ComplexStyleRule>>({
	on: [
		status_base,
		{
			backgroundColor: colors.green,
		},
	],
	off: [
		status_base,
		{
			backgroundColor: colors.red,
		},
	],
	fallback: [
		status_base,
		{
			color: colors.milk,
			backgroundColor: colors.espresso,
			boxShadow: `0 2px 4px 0 ${colors.espresso}`,

			selectors: {
				[dark()]: {
					color: colors.espresso,
					backgroundColor: colors.creme,
				},
			},
		},
	],
});

// TODO: Animations

export const status_dialog = style({
	width: '100%',
	padding: spacing['2'],

	backgroundColor: 'transparent',
});

globalStyle(`${status_dialog} ${business_hours}`, {
	borderColor: colors.milk,
	borderRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,

	boxShadow: `0 0 ${spacing['2']} 0 ${colors.espresso}`,
});

export const status_expand = style({
	height: '100%',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	borderTopRightRadius: border_radius,
	borderBottomRightRadius: border_radius,

	transitionProperty: 'background-color, color',
	transitionDuration: durations.short,
	transitionTimingFunction: ease.standard,

	selectors: {
		[`${status_base}:hover &`]: {
			backgroundColor: colors.espresso,
			color: colors.milk,
		},
	},
});

export const status_collapse = style({
	position: 'absolute',
	top: spacing['2'],
	right: spacing['2'],
	zIndex: 1,

	width: spacing['4'],
	height: spacing['3'],

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	color: colors.milk,

	borderColor: colors.milk,
	borderBottomLeftRadius: border_radius,
	borderTopRightRadius: border_radius,
	borderStyle: border_style,
	borderWidth: border_width,
});
