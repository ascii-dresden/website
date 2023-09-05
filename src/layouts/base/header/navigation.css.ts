import { keyframes, style } from '@vanilla-extract/css';

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
		'::backdrop': {
			backgroundColor: 'transparent',
		},
		selectors: {
			'&[open]': {
				height: '100%',
				width: '100%',

				display: 'grid',
				gridTemplateColumns: `1fr max-content`,
				gridTemplateRows: `${spacing['4']} 1fr`,
				gridTemplateAreas: `". button" "links links" "socials theme"`,

				backgroundColor: colors.milk,
				color: colors.espresso,
			},
			[dark('&[open]')]: {
				backgroundColor: colors.espresso,
				color: colors.creme,
			},
			[`&[open]:not([${ANIMATION_OUT_ACTIVE}])`]: {
				animationName: animation_in,
				animationDuration: durations.long,
				animationTimingFunction: ease.standard,
			},
			[`&[${ANIMATION_OUT_ACTIVE}]`]: {
				animationName: animation_out,
				animationDuration: durations.long,
				animationTimingFunction: ease.standard,
				pointerEvents: 'none',
			},
		},
	},
]);

export const navigation_button = style({
	gridArea: 'button',

	aspectRatio: '1',
	display: 'grid',
	placeItems: 'center',

	transitionProperty: 'transform',
	transitionDuration: durations.medium,
	transitionTimingFunction: ease.standard,
	':hover': {
		transform: 'rotate(180deg)',
	},
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
	// TODO: fixed height conflicts with the hover effect
	// height: spacing['4'],
	paddingBlock: spacing['2'],
	marginInline: spacing['2'],
	textAlign: 'end',
	borderBottomWidth: 2,
	borderBottomColor: colors.espresso,
	selectors: {
		[dark()]: {
			borderBottomColor: colors.creme,
		},
		...enumerate(5, (i) => [
			`${navigation}[open]:not([${ANIMATION_OUT_ACTIVE}]) ul li:nth-child(${i + 1}) &`,
			{
				animationName: animation_link_in,
				animationDelay: `${i * 0.1}s`,
				animationDuration: durations.long,
				animationTimingFunction: ease.standard,
				animationFillMode: 'both',
			},
		]),
	},
});

const animation_link_label_in = keyframes({
	'0%': {
		transform: 'translateY(100%)',
		clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
	},
	'100%': {
		transform: 'translateY(0%)',
		clipPath: 'polygon(0 -100%, 100% -100%, 100% 200%, 0 200%)',
	},
});

export const navigation_link_label = style({
	transitionProperty: 'font-size, font-weight, line-height',
	transitionDuration: durations.short,
	transitionTimingFunction: ease.standard,
	selectors: {
		[`${navigation_link}:hover &`]: {
			fontSize: '2rem',
			fontWeight: 300,
			lineHeight: '2em',
		},
		...enumerate(5, (i) => [
			`${navigation}[open]:not([${ANIMATION_OUT_ACTIVE}]) ul li:nth-child(${
				i + 1
			}) ${navigation_link} &`,
			{
				animationName: animation_link_label_in,
				animationDelay: `${i * 0.1 + 0.25}s`,
				animationDuration: durations.medium,
				animationTimingFunction: ease.standard,
				animationFillMode: 'both',
			},
		]),
	},
});

export const navigation_link_label_hover = style({
	width: '0rem',
	transitionProperty: 'font-size, font-weight, line-height, width',
	transitionDuration: durations.medium,
	transitionTimingFunction: ease.standard,
	textAlign: 'center',
	opacity: 0.3,
	overflow: 'hidden',
	selectors: {
		[`${navigation_link}:hover &`]: {
			fontSize: '2rem',
			fontWeight: 300,
			lineHeight: '2em',
			width: spacing['3'],
		},
	},
});

export const navigation_theme = style({
	gridArea: 'theme',
	margin: spacing['2'],
});

export const navigation_socials = style({
	gridArea: 'socials',
	display: 'flex',
	gap: spacing['2'],
	padding: spacing['2'],
});

export const navigation_social = style({
	display: 'grid',
	aspectRatio: '1',
	placeItems: 'center',
});
