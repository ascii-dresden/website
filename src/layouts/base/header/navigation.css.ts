import { keyframes, style } from '@vanilla-extract/css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css';
import { repeat } from 'src/styles/util/repeat.css';

const animation_duration = 0.5;

const slide_in = keyframes({
	'0%': {
		clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 200% 100%)',
	},
	'100%': {
		clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	},
});

const slide_out = keyframes({
	'0%': {
		clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	},
	'100%': {
		clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 200% 100%)',
	},
});

const slide_in_letter = keyframes({
	'0%': {
		transform: 'translateY(100%)',
		clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
	},
	'100%': {
		transform: 'translateY(0%)',
		clipPath: 'polygon(0 -100%, 100% -100%, 100% 200%, 0 200%)',
	},
});

export const navigation = style({
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
			gridTemplateAreas: `"button button" "links links" "socials theme"`,
			backgroundColor: colors.surface,
			color: colors.on_surface,
			animationName: slide_in,
			animationDuration: `${animation_duration}s`,
			animationTimingFunction: 'cubic-bezier(0,0,.3,1)',
		},
		'&.hide': {
			animationName: slide_out,
			animationDuration: `${animation_duration}s`,
			animationTimingFunction: 'ease-in-out',
		},
	},
});

export const navigation_button = style({
	gridArea: 'button',
	aspectRatio: '1',
	display: 'grid',
	placeItems: 'center',
	justifySelf: 'end',
});

export const navigation_links = style({
	gridArea: 'links',
	flex: 1,
});

export const navigation_link = style({
	display: 'block',
	// TODO: fixed height conflicts with the hover effect
	// height: spacing['4'],
	paddingBlock: spacing['2'],
	marginInline: spacing['2'],
	textAlign: 'end',
	borderBottomWidth: 2,
	borderBottomColor: colors.on_surface,
	selectors: repeat(5, (i) => [
		`${navigation}[open] ul li:nth-child(${i + 1}) &`,
		{
			animationName: slide_in,
			animationDelay: `${i * 0.1}s`,
			animationDuration: `${animation_duration}s`,
			animationTimingFunction: 'cubic-bezier(0,0,.3,1)',
			animationFillMode: 'both',
		},
	]),
});

export const navigation_link_label = style({
	transitionProperty: 'font-size, font-weight, line-height',
	transitionDuration: '100ms',
	transitionTimingFunction: 'ease',
	selectors: {
		[`${navigation_link}:hover &`]: {
			fontSize: '2rem',
			fontWeight: 200,
			lineHeight: '2em',
		},
		...repeat(5, (i) => [
			`${navigation}[open] ul li:nth-child(${i + 1}) &`,
			{
				animationName: slide_in_letter,
				animationDelay: `${i * 0.1}s`,
				animationDuration: `${animation_duration * 0.5}s`,
				animationTimingFunction: 'cubic-bezier(0,0,.3,1)',
				animationFillMode: 'both',
			},
		]),
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
