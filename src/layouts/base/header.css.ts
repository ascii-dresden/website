import { style } from '@vanilla-extract/css';

import { border_style, border_width } from 'src/styles/border.css';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';

export const header = style([
	{
		position: 'sticky',
		top: 0,
		height: spacing['4'],

		display: 'flex',
		justifyContent: 'space-between',
		gap: spacing['1'],

		backgroundColor: colors.surface,
		color: colors.on_surface,
		boxShadow: `0 0 ${spacing['1']} 0 rgba(0, 0, 0, 0.5)`,
		borderBottomStyle: border_style,
		borderBottomWidth: border_width,
		borderBottomColor: colors.on_surface,

		zIndex: 2,
	},
]);

export const header_logo = style({
	display: 'flex',
	alignSelf: 'center',
	padding: spacing['2'],
	height: '100%',
});
