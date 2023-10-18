import { assignVars, globalStyle, style } from '@vanilla-extract/css';

import { divider_colors } from 'src/components/divider.css.ts';
import { vars_featured } from 'src/components/patterns/featured.css.ts';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { bonbance } from 'src/styles/fonts.css';
import { FontRule } from 'src/styles/internal/font.css';
import { lg, lt_lg, xl } from 'src/styles/screens.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const hero = style([
	{
		display: 'grid',

		gap: spacing['2'],
		paddingBottom: spacing['4'],

		backgroundColor: colors.creme,
		backgroundImage: 'url("../assets/grain.svg")',
		backgroundBlendMode: 'overlay',
		backgroundSize: '256px',
		color: colors.espresso,

		selectors: {
			[dark()]: {
				backgroundColor: colors.black,
				color: colors.creme,
			},
		},
	},
	lt_lg({
		'::before': {
			display: 'block',
			content: '""',
			gridRow: '2 / 4',
			gridColumn: '1 / 2',
			marginRight: spacing['2'],

			backgroundColor: colors.milk,
			color: colors.espresso,

			borderTopRightRadius: border_radius,
			borderBottomRightRadius: border_radius,
			borderWidth: border_width,
			borderStyle: border_style,
			borderColor: colors.espresso,
			borderLeft: 'none',
		},
		selectors: {
			[dark('&::before')]: {
				marginLeft: `-${border_width}px`,
				paddingLeft: `calc(${spacing['3']} + ${border_width}px)`,

				backgroundColor: colors.espresso,
				color: colors.creme,
				borderColor: colors.espresso,
				boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
			},
		},
	}),
	lg({
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		gridTemplateRows: '1fr 1fr',
		paddingInline: spacing['4'],
		gap: spacing['3'],
	}),
	xl({
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		gridTemplateRows: '1fr 1fr',
		paddingInline: spacing['2'],
	}),
]);

export const hero_image = style([
	{
		display: 'grid',
		gridTemplateColumns: 'minmax(0, 1fr)',
		gridTemplateRows: 'minmax(0, 1fr)',

		aspectRatio: '3 / 2',
		overflow: 'hidden',

		borderRadius: border_radius,
		borderWidth: border_width,
		borderStyle: border_style,
		borderColor: colors.espresso,

		selectors: {
			[dark()]: {
				borderColor: colors.creme,
			},
		},
	},
	lt_lg({
		gridColumn: '1 / 2',
		gridRow: '1 / 2',
		marginInline: spacing['2'],
	}),
	lg({
		gridRow: '1 / 3',
		gridColumn: '3 / 7',
		alignSelf: 'start',
	}),
	xl({
		gridRow: '1 / 3',
		gridColumn: '4 / 7',
		alignSelf: 'start',
	}),
]);

globalStyle(`${hero_image} img`, {
	flexGrow: 1,
	objectFit: 'cover',
	width: '100%',
	height: '100%',
});

globalStyle(dark(`${hero_image} img`), {
	borderRadius: `calc(${border_radius} - ${border_width}px)`,
	borderWidth: border_width,
	borderStyle: border_style,
	borderColor: colors.black,
});

export const hero_title = style([
	lt_lg({
		gridColumn: '1 / 2',
		gridRow: '2 / 3',

		paddingTop: spacing['3'],
		paddingLeft: spacing['3'],
		paddingRight: spacing['3'],
	}),
	bonbance([
		lg<FontRule>({
			fontOptions: {
				capHeight: 80,
				lineGap: 16,
			},
			gridColumn: '1 / 7',
			gridRow: '1 / 2',
			justifySelf: 'start',
			alignSelf: 'end',

			color: colors.milk,

			WebkitTextStrokeWidth: border_width,
			WebkitTextStrokeColor: colors.espresso,
			textShadow: Array.from({ length: 3 })
				.map((_, i) => `-${border_width * i}px ${border_width * i}px 0 ${colors.espresso}`)
				.join(', '),
		}),
		xl<FontRule>({
			fontOptions: {
				capHeight: 96,
				lineGap: 16,
			},
			gridColumn: '2 / 6',
			gridRow: '1 / 2',
		}),
	]),
]);

export const hero_summary = style([
	lt_lg({
		gridColumn: '1 / 2',
		gridRow: '3 / 4',

		paddingLeft: spacing['3'],
		paddingRight: spacing['3'],
		paddingBottom: spacing['3'],
		paddingTop: spacing['2'],
		marginRight: spacing['2'],

		selectors: {
			[dark()]: {},
		},
	}),
	lg({
		gridColumn: '1 / span 2',
		gridRow: '2 / 3',
	}),
	xl({
		gridColumn: '2 / 4',
		gridRow: '2 / 3',
	}),
]);

export const divider_1 = style({
	vars: assignVars(divider_colors, {
		from: colors.creme,
		to: colors.milk,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.black,
				to: colors.espresso,
				stroke: colors.espresso,
			}),
		},
	},
});

export const next_event = style({
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	backgroundColor: colors.milk,
	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},
	},
});

export const next_event_head = style({
	paddingLeft: spacing['4'],
	paddingBottom: spacing['3'],

	color: colors.espresso,

	selectors: {
		[dark()]: {
			color: colors.creme,
		},
	},
});

export const next_event_featured = style({
	gridColumn: '1 / 3',
	vars: assignVars(vars_featured, {
		background_color: colors.espresso,
		color: colors.milk,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(vars_featured, {
				background_color: colors.creme,
				color: colors.espresso,
			}),
		},
	},
});

export const next_event_date_separator = style({
	opacity: 0.5,
});

export const divider_2 = style({
	vars: assignVars(divider_colors, {
		from: colors.milk,
		to: colors.light_teal,
		stroke: colors.teal,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.espresso,
				to: colors.teal,
				stroke: colors.black,
			}),
		},
	},
});

export const offer = style({
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	backgroundColor: colors.light_teal,

	selectors: {
		[dark()]: {
			backgroundColor: colors.teal,
		},
	},
});

export const offer_head = style({
	paddingBottom: spacing['3'],

	color: colors.teal,

	selectors: {
		[dark()]: {
			color: colors.light_teal,
		},
	},
});

export const offer_featured = style({
	vars: assignVars(vars_featured, {
		background_color: colors.teal,
		color: colors.light_teal,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(vars_featured, {
				background_color: colors.light_teal,
				color: colors.teal,
			}),
		},
	},
});

export const divider_3 = style({
	vars: assignVars(divider_colors, {
		from: colors.light_teal,
		to: colors.creme,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.teal,
				to: colors.espresso,
				stroke: colors.black,
			}),
		},
	},
});

export const become_member = style({
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	backgroundColor: colors.creme,

	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},
	},
});

export const become_member_head = style({
	paddingBottom: spacing['3'],

	color: colors.espresso,

	selectors: {
		[dark()]: {
			color: colors.creme,
		},
	},
});

export const become_member_featured = style({
	gridColumn: '1 / 3',
	vars: assignVars(vars_featured, {
		background_color: colors.milk,
		color: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(vars_featured, {
				background_color: colors.creme,
				color: colors.espresso,
			}),
		},
	},
});

export const become_member_sticker = style({
	filter: `drop-shadow(0 1px 2px ${colors.black})`,
});

export const divider_4 = style({
	vars: assignVars(divider_colors, {
		from: colors.creme,
		to: colors.milk,
		stroke: colors.espresso,
	}),
	selectors: {
		[dark()]: {
			vars: assignVars(divider_colors, {
				from: colors.espresso,
				to: colors.black,
				stroke: colors.espresso,
			}),
		},
	},
});

export const business_hours = style({
	paddingBlock: spacing['4'],
	paddingInline: spacing['2'],

	color: colors.espresso,
	backgroundColor: colors.milk,

	selectors: {
		[dark()]: {
			color: colors.creme,
			backgroundColor: colors.black,
		},
	},
});

export const business_hours_head = style({
	paddingBottom: spacing['3'],
});

export const business_hours_footnote = style({
	paddingTop: spacing['2'],
	paddingLeft: spacing['3'],
});
