import { style } from '@vanilla-extract/css';

import { border_style, border_width } from 'src/styles/border.css';
import { colors } from 'src/styles/colors.css.ts';
import { durations, ease } from 'src/styles/motion.css';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const SETTLE = 'data-settle';

export const header = style([
	{
		position: 'sticky',
		top: 0,
		height: spacing['4'],

		display: 'flex',
		justifyContent: 'space-between',
		gap: spacing['1'],

		backgroundColor: colors.milk,
		color: colors.espresso,
		boxShadow: `0 0 ${spacing['1']} 0 rgba(0, 0, 0, 0.5)`,

		borderBottomStyle: border_style,
		borderBottomWidth: border_width,
		borderBottomColor: colors.espresso,

		zIndex: 2,

		transitionProperty: 'background-color, color, border-bottom-color',
		transitionDuration: durations.medium,
		transitionTimingFunction: ease.standard,

		selectors: {
			[dark()]: {
				backgroundColor: colors.black,
				borderBottomColor: colors.creme,
			},
			[`&[${SETTLE}]`]: {
				backgroundColor: 'transparent',
				borderBottomColor: 'transparent',
				boxShadow: 'none',
			},
			[dark(`&[${SETTLE}]`)]: {
				backgroundColor: 'transparent',
				borderBottomColor: 'transparent',
			},
		},
	},
]);

export const header_logo = style({
	alignSelf: 'center',
	height: '100%',

	display: 'flex',

	padding: spacing['2'],
});
