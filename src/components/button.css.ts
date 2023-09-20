import { keyframes, style } from '@vanilla-extract/css';

import { border_radius } from 'src/styles/border.css.ts';
import { components } from 'src/styles/internal/layers.css.ts';
import { durations, ease } from 'src/styles/motion.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';

export const ANIMATION_OUT_ACTIVE = 'data-animation-out-active';
const ANIMATION_DURATION = durations.medium;
const ICON_GAP = spacing['2'];

export const animation_in = keyframes({
	from: {
		gap: 0,
	},
	to: {
		gap: ICON_GAP,
	},
});

export const animation_out = keyframes({
	from: {
		gap: ICON_GAP,
	},
	to: {
		gap: 0,
	},
});

export const button_more = style({
	'@layer': {
		[components]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			gap: ICON_GAP,
			paddingInline: spacing['2'],

			borderRadius: border_radius,

			transitionDuration: ANIMATION_DURATION,
			transitionTimingFunction: ease.standard,

			selectors: {
				'&:hover': {
					animationName: animation_in,
					animationDuration: ANIMATION_DURATION,
					animationTimingFunction: ease.standard,
				},
				[`&[${ANIMATION_OUT_ACTIVE}]:not(:hover)`]: {
					animationName: animation_out,
					animationDuration: ANIMATION_DURATION,
					animationTimingFunction: ease.standard_accelerate,
				},
			},
		},
	},
});

const animation_icon_in = keyframes({
	from: {
		width: 0,
		opacity: 0,
		translate: '-100%',
	},
	to: {
		width: 24,
		opacity: 1,
		translate: 0,
	},
});

const animation_icon_out = keyframes({
	from: {
		width: 24,
		opacity: 1,
		translate: 0,
	},
	to: {
		width: 0,
		opacity: 0,
		translate: '-100%',
	},
});

export const icon = style({
	'@layer': {
		[components]: {
			overflow: 'hidden',
			selectors: {
				[`${button_more}:hover &`]: {
					animationName: animation_icon_in,
					animationDuration: ANIMATION_DURATION,
					animationTimingFunction: ease.standard,
				},

				[`${button_more}[${ANIMATION_OUT_ACTIVE}]:not(:hover) &`]: {
					animationName: animation_icon_out,
					animationDuration: ANIMATION_DURATION,
					animationTimingFunction: ease.standard_accelerate,
				},
				[`${button_more}:not([${ANIMATION_OUT_ACTIVE}]):not(:hover) &`]: {
					display: 'none',
				},
			},
		},
	},
});

const animation_text_in = keyframes({
	from: {
		flexGrow: 1,
	},
	to: {
		flexGrow: 0,
	},
});

const animation_text_out = keyframes({
	from: {
		flexGrow: 0,
	},
	to: {
		flexGrow: 1,
	},
});

export const text = style({
	'@layer': {
		[components]: {
			marginBlock: spacing['2'],
			textAlign: 'center',
			selectors: {
				[`${button_more}:hover &`]: {
					animationName: animation_text_in,
					animationDuration: ANIMATION_DURATION,
					animationTimingFunction: ease.standard,
				},

				[`${button_more}[${ANIMATION_OUT_ACTIVE}]:not(:hover) &`]: {
					animationName: animation_text_out,
					animationDuration: ANIMATION_DURATION,
					animationTimingFunction: ease.standard_accelerate,
				},
				[`${button_more}:not([${ANIMATION_OUT_ACTIVE}]):not(:hover) &`]: {
					flexGrow: 1,
				},
			},
		},
	},
});
