import { style } from '@vanilla-extract/css';

import { border_radius } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';

export const business_hours = style({
	display: 'grid',

	position: 'relative',

	gap: spacing['2'],
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	color: colors.espresso,
	backgroundColor: colors.milk,
});

export const head = style({
	paddingBottom: spacing['2'],
});

export const card = style({
	display: 'grid',
	gap: spacing['3'],

	padding: spacing['3'],

	color: colors.milk,
	backgroundColor: colors.espresso,
	backgroundImage: `url(src/assets/grain.svg)`,
	backgroundBlendMode: 'soft-light',
	backgroundSize: '256px',

	borderRadius: border_radius,
});

export const dl = style({
	display: 'grid',
	gap: spacing['2'],
});

export const dt = style({
	fontWeight: 800,
});

export const dd = style({
	marginBottom: spacing['2'],
});
