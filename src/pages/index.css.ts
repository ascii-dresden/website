import { assignVars, globalStyle, style } from '@vanilla-extract/css';

import grain from 'src/assets/grain.svg';
import pattern from 'src/assets/pattern.svg';
import { divider_colors } from 'src/components/divider.css.ts';
import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { bonbance } from 'src/styles/fonts.css.ts';
import { FontRule } from 'src/styles/internal/font.css.ts';
import { lg, lt_lg, xl } from 'src/styles/screens.css.ts';
import { dark } from 'src/styles/themes.css.ts';
import { durations, ease } from 'src/styles/motion.css.ts';

export const EVENTS_PAGER_ITEM_SELECTED = 'data-events-pager-item-selected';

export const hero = style([
	{
		display: 'grid',

		gap: '1rem',
		paddingBottom: '4rem',

		backgroundColor: colors.creme,
		backgroundImage: `url(${grain})`,
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
			marginRight: '1rem',

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
				paddingLeft: `calc(2rem + ${border_width}px)`,

				backgroundColor: colors.espresso,
				color: colors.creme,
				borderColor: colors.espresso,
				boxShadow: `inset 0 0 0 ${border_width}px ${colors.black}`,
			},
		},
	}),
	lg({
		gridTemplateRows: 'repeat(2, 1fr)',
		paddingInline: '4rem',
		gap: '2rem',
	}),
	xl({
		gridTemplateRows: 'repeat(2, 1fr)',
		paddingInline: '1rem',
	}),
]);

export const hero_image = style([
	{
		display: 'grid',
		gridTemplateColumns: 'minmax(0, 1fr)',
		gridTemplateRows: 'minmax(0, 1fr)',
		aspectRatio: '3 / 2',
	},
	lt_lg({
		gridColumn: '1 / 2',
		gridRow: '1 / 2',
		marginInline: '1rem',
	}),
	lg({
		gridRow: '1 / 3',
		gridColumn: '3 / 7',
		alignSelf: 'start',
		position: 'relative',

		'::after': {
			display: 'block',
			content: '""',
			position: 'absolute',
			top: '0.5rem',
			left: `-0.5rem`,
			bottom: `-0.5rem`,
			right: '0.5rem',

			backgroundImage: `url(${pattern})`,
			backgroundRepeat: 'repeat',
			backgroundSize: '8px 8px',
		},
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
	backgroundColor: colors.creme,
});

globalStyle(dark(`${hero_image} img`), {
	borderRadius: `calc(${border_radius} - ${border_width}px)`,
	borderWidth: border_width,
	borderStyle: border_style,
	borderColor: colors.black,
});

export const hero_image_pic = style({
	overflow: 'hidden',
	borderRadius: border_radius,
	borderWidth: border_width,
	borderStyle: border_style,
	borderColor: colors.espresso,
	zIndex: 1,

	selectors: {
		[dark()]: {
			borderColor: colors.creme,
		},
	},
});

export const hero_title = style([
	lt_lg({
		gridColumn: '1 / 2',
		gridRow: '2 / 3',

		paddingTop: '2rem',
		paddingLeft: '2rem',
		paddingRight: '2rem',
	}),
	lg({
		gridColumn: '1 / 7',
		gridRow: '1 / 2',
		justifySelf: 'start',
		alignSelf: 'end',
		paddingBottom: border_width * 3,
		zIndex: 1,

		color: colors.milk,

		WebkitTextStrokeWidth: border_width,
		WebkitTextStrokeColor: colors.espresso,
		textShadow: Array.from({ length: 3 })
			.map((_, i) => `-${border_width * i}px ${border_width * i}px 0 ${colors.espresso}`)
			.join(', '),
	}),
	xl({
		gridColumn: '2 / 6',
		gridRow: '1 / 2',
	}),
	bonbance([
		lg<FontRule>({
			fontOptions: {
				capHeight: 80,
				lineGap: 16,
			},
		}),
		xl<FontRule>({
			fontOptions: {
				capHeight: 96,
				lineGap: 16,
			},
		}),
	]),
]);

export const hero_summary = style([
	lt_lg({
		gridColumn: '1 / 2',
		gridRow: '3 / 4',

		paddingLeft: '2rem',
		paddingRight: '2rem',
		paddingBottom: '2rem',
		paddingTop: '1rem',
		marginRight: '1rem',

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

export const events = style([
	{
		paddingTop: '4rem',
		backgroundColor: colors.milk,
		selectors: {
			[dark()]: {
				backgroundColor: colors.espresso,
			},
		},
	},
	lg({}),
]);

export const events_title = style([
	lg({
		gridColumn: '3 / 7',
	}),
]);

export const events_head = style([
	{},
	lg({
		alignItems: 'end',
	}),
]);

export const events_pager = style([
	{
		display: 'flex',
		gap: '1rem',
	},
	lg({
		gridColumn: '1 / 3',
	}),
]);

export const events_pager_item = style([
	{
		height: '2rem',
		width: '2rem',
		flexGrow: 1,

		transitionDuration: durations.short,
		transitionTimingFunction: ease.standard,
		transitionProperty: 'flex-grow',

		selectors: {
			[`&[${EVENTS_PAGER_ITEM_SELECTED}]`]: {
				flexGrow: 3,
			},
		},
	},
]);

export const events_pager_button = style([
	{
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		borderBottomWidth: border_width,
		borderBottomStyle: 'dotted',
		borderBottomColor: colors.espresso,

		selectors: {
			[`${events_pager_item}[${EVENTS_PAGER_ITEM_SELECTED}] &`]: {
				borderBottomStyle: border_style,
			},
		},
	},
	lg({}),
]);

export const events_carousel = style([
	{
		display: 'flex',
		overflowX: 'auto',
		overflowY: 'hidden',
		padding: '4rem',
		gap: '6rem',
		scrollSnapType: 'x mandatory',
		scrollSnapStop: 'normal',
	},
]);

export const event = style([
	{
		scrollSnapAlign: 'center',
	},
	lt_lg({
		// grainy background
		'::before': {
			content: '""',
			display: 'block',

			gridRow: '2 / 5',
			gridColumn: '3 / 6',

			backgroundColor: colors.espresso,
			backgroundImage: `url(${grain})`,
			backgroundSize: '256px',
			backgroundBlendMode: 'overlay',

			borderRadius: border_radius,
		},
	}),
	lg({
		flex: '0 0 calc(100% - 2 * ((100% - 10rem) / 6) - 4rem)',
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		alignItems: 'start',
		gap: '2rem',
		selectors: {
			'&:first-child': {
				marginLeft: 'calc(2rem + (100% - 10rem) / 6)',
			},
			'&:last-child': {
				marginRight: 'calc(2rem + (100% - 10rem) / 6)',
			},
		},
	}),
]);

export const event_column = style([
	lt_lg({
		display: 'contents',
	}),
	lg({
		display: 'grid',
		gap: '2rem',
		gridAutoRows: 'max-content',
		gridColumn: 'auto / span 2',

		selectors: {
			'&:last-child': {
				marginTop: '2rem',
				position: 'relative',
			},
			'&:last-child::before': {
				content: '""',
				display: 'block',

				position: 'absolute',
				top: '0',
				bottom: '0',
				right: '0',
				width: '2rem',
				borderTopStyle: border_style,
				borderTopWidth: border_width,
				borderTopColor: colors.espresso,
				borderRightStyle: border_style,
				borderRightWidth: border_width,
				borderRightColor: colors.espresso,
				borderTopRightRadius: border_radius,
			},
		},
	}),
]);

export const event_title = style([
	{
		paddingRight: '2rem',
	},
	lt_lg({
		paddingTop: '2rem',
		paddingLeft: '2rem',

		color: colors.milk,

		selectors: {
			[dark()]: {
				color: colors.creme,
			},
		},
	}),
]);

export const event_description = style([
	{
		paddingRight: '2rem',
	},
	lt_lg({
		paddingLeft: '2rem',

		color: colors.milk,

		selectors: {
			[dark()]: {
				color: colors.creme,
			},
		},
	}),
]);

export const event_date_time = style([
	{
		paddingRight: '2rem',
	},
	lt_lg({
		paddingBlock: '1rem',

		color: colors.milk,

		selectors: {
			[dark()]: {
				color: colors.creme,
			},
		},
	}),
]);

export const event_date_separator = style([
	{
		opacity: 0.5,
	},
]);

export const event_image = style([
	lg({
		position: 'relative',
		display: 'grid',
		gridTemplateColumns: 'minmax(0, 1fr)',
		gridTemplateRows: 'minmax(0, 1fr)',
		marginBottom: '0.5rem',

		borderTopRightRadius: 0,

		'::after': {
			display: 'block',
			content: '""',
			position: 'absolute',
			top: '0.5rem',
			left: `-0.5rem`,
			bottom: `-0.5rem`,
			right: '0.5rem',

			backgroundImage: `url(${pattern})`,
			backgroundRepeat: 'repeat',
			backgroundSize: '8px 8px',
		},
	}),
]);

export const event_image_picture = style([
	{
		overflow: 'hidden',
		borderRadius: border_radius,
		borderWidth: border_width,
		borderStyle: border_style,
		borderColor: colors.espresso,
		zIndex: 1,
	},
]);

export const event_button = style([
	{
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
		height: '3rem',
		overflow: 'hidden',
		position: 'relative',

		'::before': {
			display: 'block',
			content: '""',
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			translate: '-100%',
			borderTopStyle: border_style,
			borderTopWidth: border_width,
			borderTopColor: colors.espresso,

			transitionProperty: 'translate',
			transitionDuration: durations.medium,
			transitionTimingFunction: ease.standard_decelerate,
		},

		'::after': {
			display: 'block',
			content: '""',
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			borderTopStyle: 'dotted',
			borderTopWidth: border_width,
			borderTopColor: colors.espresso,
		},

		selectors: {
			'&:hover::before': {
				translate: 0,
			},
		},
	},
	lt_lg({
		gridRow: '5',
		gridColumn: '5 / 6',
	}),
	lg({
		justifySelf: 'end',
	}),
]);

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
	paddingBlock: '4rem',
	paddingInline: '1rem',

	backgroundColor: colors.light_teal,

	selectors: {
		[dark()]: {
			backgroundColor: colors.teal,
		},
	},
});

export const offer_head = style({
	paddingBottom: '2rem',

	color: colors.teal,

	selectors: {
		[dark()]: {
			color: colors.light_teal,
		},
	},
});

export const offer_featured = style({});

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
	paddingBlock: '4rem',
	paddingInline: '1rem',

	backgroundColor: colors.creme,

	selectors: {
		[dark()]: {
			backgroundColor: colors.espresso,
		},
	},
});

export const become_member_head = style({
	paddingBottom: '2rem',

	color: colors.espresso,

	selectors: {
		[dark()]: {
			color: colors.creme,
		},
	},
});

export const become_member_featured = style({
	gridColumn: '1 / 3',
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
	paddingBlock: '4rem',
	paddingInline: '1rem',

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
	paddingBottom: '2rem',
});

export const business_hours_footnote = style({
	paddingTop: '1rem',
	paddingLeft: '2rem',
});
