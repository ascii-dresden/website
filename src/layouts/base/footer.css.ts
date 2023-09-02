import { globalStyle, style } from '@vanilla-extract/css';
import { border_style, border_width } from 'src/styles/border.css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const footer = style({
	display: 'grid',

	position: 'relative',

	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	backgroundColor: colors.milk,
	color: colors.espresso,

	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
			color: colors.creme,
		},
	},
});

export const text_link = style({
	display: 'flex',
});

export const tree = style({
	display: 'grid',
	gap: spacing['3'],
});

export const sub_tree = style({
	display: 'grid',
	justifyItems: 'start',

	gap: spacing['1'],
});

globalStyle(`${sub_tree} > li > p, ${sub_tree} > li > ${text_link}`, {
	paddingTop: spacing['1'],
	paddingBottom: spacing['1'],

	borderBlockWidth: border_width,
	borderBlockStyle: border_style,
	borderBlockColor: 'transparent',
});

globalStyle(`${sub_tree} > li > ${text_link}:hover`, {
	borderBottomColor: colors.espresso,
});

export const contact = style([sub_tree, {}]);

export const location = style([sub_tree, {}]);

export const legal = style([sub_tree, {}]);

export const social = style([
	sub_tree,
	{
		display: 'flex',
		gap: spacing['1'],
	},
]);
