import { assignVars, globalStyle, style } from '@vanilla-extract/css';
import { divider_colors } from 'src/components/divider.css';
import { border_style, border_width } from 'src/styles/border.css';

import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const divider = style({
	vars: assignVars(divider_colors, {
		from: colors.milk,
		to: colors.creme,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.black,
				to: colors.black,
				stroke: colors.espresso,
			}),
		},
	},
});

export const footer = style({
	display: 'grid',

	position: 'relative',

	paddingInline: spacing['2'],
	paddingTop: spacing['4'],
	paddingBottom: spacing['3'],

	backgroundColor: colors.creme,
	color: colors.espresso,

	selectors: {
		[dark()]: {
			backgroundColor: colors.black,
			color: colors.creme,
		},
	},
});

export const text_link = style({
	display: 'flex',
});

export const tree = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: spacing['3'],
});

export const sub_tree = style({});

globalStyle(`${sub_tree} > ul`, {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	gap: spacing['1'],
});

globalStyle(`${sub_tree} > ul > li > p, ${sub_tree} > ul > li > ${text_link}`, {
	paddingTop: spacing['1'],
	paddingBottom: spacing['1'],

	borderBlockWidth: border_width,
	borderBlockStyle: border_style,
	borderBlockColor: 'transparent',
});

globalStyle(`${sub_tree} > ul > li > ${text_link}:hover`, {
	borderBottomColor: colors.espresso,
});

globalStyle(dark(`${sub_tree} > ul > li > ${text_link}:hover`), {
	borderBottomColor: colors.creme,
});

export const contact = style([
	sub_tree,
	{
		gridColumn: '1 / 3',
	},
]);

export const location = style([
	sub_tree,
	{
		gridColumn: '1 / 3',
	},
]);

export const legal = style([sub_tree, {}]);

export const social = style([sub_tree]);

globalStyle(`${social} > ul`, {
	display: 'flex',
	flexDirection: 'row',
	gap: spacing['1'],
});

export const copyright = style({
	gridColumn: '1 / 3',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: spacing['1'],
});
