import { assignVars, globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars_button } from 'src/components/button.css';

import { colors } from 'src/styles/colors.css.ts';
import { durations, ease } from 'src/styles/motion.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';
import { enumerate } from 'src/styles/util/enumerate.css.ts';

export const ANIMATION_OUT_ACTIVE = 'data-animation-out-active';

const animation_in = keyframes({
	'0%': { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 200% 100%)' },
	'100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
});

const animation_out = keyframes({
	'0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
	'100%': { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 200% 100%)' },
});

export const navigation = style([
	{
		height: '100%',
		width: '100%',

		gridTemplateColumns: `1fr ${spacing['4']} ${spacing['2']}`,
		gridTemplateRows: `${spacing['4']} 1fr ${spacing['4']}`,
		gridTemplateAreas: `". . toggle" "links links links" "socials theme theme"`,
		paddingBottom: spacing['2'],

		backgroundColor: colors.milk,
		color: colors.espresso,

		'::backdrop': {
			backgroundColor: 'transparent',
		},

		selectors: {
			[dark()]: {
				backgroundColor: colors.espresso,
				color: colors.creme,
			},
			'&[open]': {
				display: 'grid',
			},
			[`&[open]:not([${ANIMATION_OUT_ACTIVE}])`]: {
				animationName: animation_in,
				animationDuration: durations.long,
				animationTimingFunction: ease.standard,
				willChange: 'clip-path',
			},
			[`&[${ANIMATION_OUT_ACTIVE}]`]: {
				animationName: animation_out,
				animationDuration: durations.long,
				animationTimingFunction: ease.standard,
				pointerEvents: 'none',
				willChange: 'clip-path',
			},
		},
	},
]);

export const navigation_toggle = style({
	gridArea: 'toggle',
	justifySelf: 'end',
	height: '100%',

	aspectRatio: '1',
	display: 'grid',
	placeContent: 'center',
});

globalStyle(`${navigation_toggle} > svg`, {
	transitionProperty: 'rotate',
	transitionDuration: durations.medium,
	transitionTimingFunction: ease.standard,
});

globalStyle(`${navigation_toggle}:hover > svg`, {
	willChange: 'rotate',
	rotate: '180deg',
});

export const navigation_links = style({
	gridArea: 'links',
	flex: 1,
});

const animation_link_in = keyframes({
	'0%': { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
	'100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
});

export const navigation_link = style({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	textAlign: 'end',

	height: spacing['4'],
	marginInline: spacing['2'],

	borderBottomWidth: 2,
	borderBottomColor: colors.espresso,

	transitionProperty: 'background-color, color',
	transitionDuration: durations.short,
	transitionTimingFunction: ease.standard,

	selectors: {
		'&:hover': {
			backgroundColor: colors.espresso,
			color: colors.milk,
		},
		[dark()]: {
			borderBottomColor: colors.creme,
		},
		[dark('&:hover')]: {
			backgroundColor: colors.creme,
			color: colors.espresso,
		},
		...enumerate(5, (i) => [
			`${navigation}[open]:not([${ANIMATION_OUT_ACTIVE}]) ul li:nth-child(${i + 1}) &`,
			{
				animationName: animation_link_in,
				animationDelay: `${i * 0.1}s`,
				animationDuration: durations.long,
				animationTimingFunction: ease.standard,
				animationFillMode: 'both',
				willChange: 'clip-path',
			},
		]),
	},
});

const animation_link_label_in = keyframes({
	'0%': {
		translate: '0 100%',
		clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
	},
	'100%': {
		translate: '0 0',
		clipPath: 'polygon(0 -100%, 100% -100%, 100% 200%, 0 200%)',
	},
});

export const navigation_link_label = style({
	selectors: enumerate(5, (i) => [
		`${navigation}[open]:not([${ANIMATION_OUT_ACTIVE}]) ul li:nth-child(${
			i + 1
		}) ${navigation_link} &`,
		{
			animationName: animation_link_label_in,
			animationDelay: `${i * 0.1 + 0.25}s`,
			animationDuration: durations.medium,
			animationTimingFunction: ease.standard,
			animationFillMode: 'both',
			willChange: 'translate, clip-path',
		},
	]),
});

export const navigation_link_label_slash = style({
	width: '0rem',
	transitionProperty: 'width',
	transitionDuration: durations.medium,
	transitionTimingFunction: ease.standard,
	textAlign: 'center',
	opacity: 0.5,
	overflow: 'hidden',
	selectors: {
		[`${navigation_link}:hover &`]: {
			width: spacing['3'],
		},
	},
});

const navigation_button = style({
	// override button.css.ts
	height: '100%',
	width: 'auto',
	borderRadius: 0,

	vars: assignVars(vars_button, {
		backgroundColor: colors.milk,
		color: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(vars_button, {
				backgroundColor: colors.espresso,
				color: colors.creme,
			}),
		},
	},
});

export const navigation_button_theme = style([
	navigation_button,
	{
		gridArea: 'theme',
		marginRight: spacing['2'],
	},
]);

export const navigation_socials = style({
	gridArea: 'socials',
	display: 'flex',
	paddingLeft: spacing['2'],
});

export const navigation_button_social = style([
	navigation_button,
	{
		display: 'grid',
		placeItems: 'center',

		// override button.css.ts
		height: '100%',
		width: '4rem',
		borderRadius: 0,
	},
]);
