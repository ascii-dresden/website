import { globalStyle, style } from '@vanilla-extract/css';

import { border_style, border_width } from 'src/styles/border.css';
import { colors } from 'src/styles/colors.css.ts';
import { durations, ease } from 'src/styles/motion.css';
import { lg, xl } from 'src/styles/screens.css.ts';
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
		backgroundImage: 'url("../../../../assets/grain.svg")',
		backgroundBlendMode: 'overlay',
		backgroundSize: '256px',

		color: colors.espresso,

		borderBottomStyle: border_style,
		borderBottomWidth: border_width,
		borderBottomColor: 'transparent',

		zIndex: 2,

		transitionProperty: 'background-color, color, border-bottom-color, grid-template-columns',
		transitionDuration: durations.medium,
		transitionTimingFunction: ease.standard,

		selectors: {
			[dark()]: {
				backgroundColor: colors.black,
			},
			[`&:not([${SETTLE}])`]: {
				backgroundImage: 'none',
				backgroundColor: `color-mix(in srgb, ${colors.creme}, transparent)`,
				backdropFilter: 'blur(0.5rem)',
				boxShadow: `0 0 ${spacing['1']} 0 rgba(0, 0, 0, 0.5)`,
				borderBottomColor: colors.espresso,
			},
			[dark(`&:not([${SETTLE}])`)]: {
				borderBottomColor: colors.creme,
			},
		},
	},
	lg({
		display: 'grid',
		gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 4.75fr) minmax(0, 1fr)',
		gridTemplateRows: 'minmax(0, 1fr)',
		paddingInline: spacing['4'],
		gap: spacing['3'],

		selectors: {
			[`&[${SETTLE}]`]: {
				gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
			},
		},
	}),
	xl({
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		gridTemplateRows: 'minmax(0, 1fr)',
		paddingInline: spacing['2'],
	}),
]);

export const header_logo = style([
	{
		height: '100%',
		padding: spacing['2'],
		justifySelf: 'start',
	},
	lg({
		gridColumn: '1 / 2',
		paddingLeft: 0,
	}),
	xl({
		gridColumn: '2 / 3',
		paddingLeft: 0,
	}),
]);

globalStyle(`${header_logo} svg`, {
	height: '100%',
	width: 'auto',
});

export const header_status = style([
	{
		flex: '1 0 0',
		height: `calc(${spacing['4']} - (2 * ${spacing['2']}))`,
		alignSelf: 'center',
	},
	lg({
		gridColumn: '2 / 3',
	}),
	xl({
		gridColumn: '4 / 6',
	}),
]);
