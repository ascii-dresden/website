import { style } from '@vanilla-extract/css';

import grain from 'src/assets/grain.svg';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const business_hours = style({
	position: 'relative',
	display: 'grid',
	gap: border_width,
});

export const business_hours_section = style({
	display: 'grid',
	gap: '2rem',

	padding: '2rem',

	backgroundColor: colors.espresso,
	backgroundImage: `url(${grain})`,
	backgroundSize: '256px',
	backgroundBlendMode: 'overlay',
	color: colors.milk,

	borderRadius: border_radius,

	selectors: {
		[dark()]: {
			color: colors.black,
			backgroundColor: colors.creme,
			borderStyle: border_style,
			borderWidth: border_width,
			borderColor: colors.creme,
			boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
		},
	},
});

export const hr = style({
	marginInline: '-2rem',
	borderTopWidth: border_width,
	borderTopStyle: border_style,
	borderTopColor: colors.milk,

	selectors: {
		[dark()]: {
			borderTopColor: colors.black,
		},
	},
});

export const dl = style({
	display: 'grid',
	gap: '1rem',
});

export const dt = style({
	fontWeight: 800,
});

export const dd = style({
	selectors: {
		'&:not(:last-child)': {
			marginBottom: '1rem',
		},
	},
});
