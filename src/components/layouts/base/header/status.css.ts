import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { business_hours_section } from 'src/components/business_hours.css.ts';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { durations, ease } from 'src/styles/motion.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const EXPANDED = 'data-expanded';
export const STATUS = 'data-status';

export const status_root = style({
	minHeight: '100%',
	display: 'grid',
	gap: border_width,
});

export const animation_in = keyframes({
	from: {
		opacity: 0,
		rotate: 'x -90deg',
	},
	to: {
		opacity: 1,
		rotate: 'x 0',
	},
});

export const animation_out = keyframes({
	from: {
		opacity: 1,
		rotate: 'x 0deg',
	},
	to: {
		opacity: 0,
		rotate: 'x -90deg',
	},
});

export const status_content = style({
	position: 'absolute',
	left: 0,
	right: 0,
	top: `calc(100% - 0.5rem)`,
	paddingInline: '1rem',

	perspective: '32rem',
	perspectiveOrigin: 'center',
});

export const status_business_hours = style({
	transformOrigin: 'top center',

	animationName: animation_out,
	animationDuration: durations.medium,
	animationTimingFunction: ease.standard_accelerate,
	animationFillMode: 'forwards',

	selectors: {
		[`${status_root}[${EXPANDED}] &`]: {
			animationName: animation_in,
			animationDuration: durations.long,
			animationTimingFunction: ease.emphasize_decelerate,
		},
	},
});

globalStyle(`${status_business_hours} ${business_hours_section}`, {
	boxShadow: `0 0 1rem 0 ${colors.espresso}`,
});

export const status_trigger = style({
	height: '2rem',
	display: 'flex',
	alignItems: 'stretch',
	zIndex: 1,

	transitionProperty: 'height',
	transitionDuration: durations.long,
	transitionTimingFunction: ease.standard,
});

const status_trigger_child = style({
	height: '100%',
	display: 'grid',
	placeContent: 'center',

	color: colors.milk,
	backgroundColor: colors.espresso,

	borderColor: colors.espresso,
	borderStyle: border_style,
	borderWidth: border_width,

	transitionProperty: 'background-color, color, box-shadow, border-color',
	transitionDuration: durations.short,
	transitionTimingFunction: ease.standard,

	selectors: {
		// themes
		[dark()]: {
			color: colors.espresso,
			backgroundColor: colors.creme,
			borderColor: colors.creme,
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
		},
		// status
		[`${status_root}[${STATUS}="on"] &`]: {
			color: colors.espresso,
			backgroundColor: colors.green,
		},
		[`${status_root}[${STATUS}="off"] &`]: {
			color: colors.espresso,
			backgroundColor: colors.red,
		},
		// hover
		[`${status_trigger}:hover &`]: {
			backgroundColor: colors.espresso,
			color: colors.milk,
			boxShadow: `0 1px 4px 0 ${colors.espresso}`,
		},
		[dark(`${status_trigger}:hover &`)]: {
			color: colors.creme,
		},
	},
});

export const status_trigger_text = style([
	status_trigger_child,
	{
		// textTransform: 'uppercase',
		// fontWeight: 700,
		flex: '1 0 0',
		borderRightStyle: 'none',
		borderTopLeftRadius: border_radius,
		borderBottomLeftRadius: border_radius,
	},
]);

export const status_trigger_icon = style([
	status_trigger_child,
	{
		aspectRatio: '1',
		paddingRight: 1, // shift visual center

		borderTopRightRadius: border_radius,
		borderBottomRightRadius: border_radius,

		selectors: {
			[[
				`${status_trigger}:hover &`,
				`${status_root}:not([${STATUS}="on"], [${STATUS}="off"]) &`,
			].join(',')]: {
				borderLeftStyle: 'dotted',
				borderLeftColor: colors.creme,
			},
		},
	},
]);

export const status_trigger_icon_svg = style({
	transitionProperty: 'rotate',
	transitionDuration: durations.long,
	transitionTimingFunction: ease.standard,

	selectors: {
		[`${status_root}[${EXPANDED}] &`]: {
			rotate: '180deg',
		},
	},
});
