import { style } from '@vanilla-extract/css';

import { border_style, border_width } from 'src/styles/border.css.ts';
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

		backgroundColor: colors.creme,
		color: colors.espresso,

		borderBottomStyle: border_style,
		borderBottomWidth: border_width,
		borderBottomColor: 'transparent',

		zIndex: 2,

		transitionProperty: 'background-color, color, border-bottom-color',
		transitionDuration: durations.medium,
		transitionTimingFunction: ease.standard,

		selectors: {
			[dark()]: {
				backgroundColor: colors.black,
			},
			[`&:not([${SETTLE}])`]: {
				boxShadow: `0 0 ${spacing['1']} 0 rgba(0, 0, 0, 0.5)`,
				borderBottomColor: colors.espresso,
			},
			[dark(`&:not([${SETTLE}])`)]: {
				borderBottomColor: colors.creme,
			},
		},
	},
]);

export const header_logo = style({
	gridArea: 'logo',
	height: '100%',
	padding: spacing['2'],
});

export const header_status = style({
	flex: '1 0 0',
	gridArea: 'status',
	height: `calc(${spacing['4']} - (2 * ${spacing['2']}))`,
	alignSelf: 'center',
});
