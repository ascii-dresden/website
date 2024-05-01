import { ComplexStyleRule, createThemeContract } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { border_radius, border_style, border_width } from 'src/styles/border.css.ts';
import { colors } from 'src/styles/colors.css.ts';
import { spacing } from 'src/styles/spacing.css.ts';
import { dark } from 'src/styles/themes.css.ts';

export const vars_featured = createThemeContract({
	background_color: null,
	color: null,
});

type RecipeVariants = {
	layout: {
		left: ComplexStyleRule;
		right: ComplexStyleRule;
		center: ComplexStyleRule;
	};
	outline: {
		false: ComplexStyleRule;
		true: ComplexStyleRule;
	};
	noImageBorder: {
		false: ComplexStyleRule;
		true: ComplexStyleRule;
	};
	preLine: {
		false: ComplexStyleRule;
		true: ComplexStyleRule;
	};
};

export const featured = recipe<Omit<RecipeVariants, 'preLine'>>({
	base: {
		display: 'grid',
		gridTemplateRows: `repeat(2, max-content) repeat(3, calc(${spacing['4']} - ${spacing['2']}))`,
		// gridTemplateColumns is set by the layout variant
		gap: spacing['2'],

		position: 'relative',

		// grainy background
		'::before': {
			content: '""',
			display: 'block',

			gridRow: '1 / 4',

			backgroundColor: vars_featured.background_color,
			backgroundImage: 'url("../../assets/grain.svg")',
			backgroundSize: '256px',
			backgroundBlendMode: 'soft-light',

			borderRadius: border_radius,
		},

		// negative border around the image
		'::after': {
			content: '""',
			display: 'block',

			gridRow: '3 / 4',
			gridColumn: '2 / 3',

			borderColor: vars_featured.color,
			borderWidth: border_width,
			borderBottomStyle: 'none',
			zIndex: 1,
		},

		selectors: {
			[dark('&::before')]: {
				backgroundBlendMode: 'multiply',
				boxShadow: `inset 0 0 0 ${border_width}px ${vars_featured.color}`,
				borderWidth: border_width,
				borderStyle: border_style,
				borderColor: vars_featured.background_color,
			},
			[dark('&::after')]: {
				display: 'none',
			},
		},
	},
	variants: {
		layout: {
			left: {
				gridTemplateColumns: `calc(${spacing['4']} - ${spacing['2']}) 1fr max-content`,
				'::before': {
					gridColumn: '2 / 4',
				},
				'::after': {
					borderTopStyle: border_style,
					borderRightStyle: border_style,
					borderLeftStyle: 'none',
				},
			},
			right: {
				gridTemplateColumns: `max-content 1fr calc(${spacing['4']} - ${spacing['2']})`,
				'::before': {
					gridColumn: '1 / 3',
				},
				'::after': {
					borderTopStyle: border_style,
					borderRightStyle: 'none',
					borderLeftStyle: border_style,
				},
			},
			center: {
				gridTemplateColumns: `max-content 1fr`,
				'::before': {
					gridColumn: '1 / 3',
				},
			},
		},
		outline: {
			false: [],
			true: {
				'::before': {
					borderWidth: border_width,
					borderStyle: border_style,
					borderColor: vars_featured.color,
				},
			},
		},
		noImageBorder: {
			false: [],
			true: {
				'::after': {
					borderStyle: 'none',
				},
			},
		},
	},
});

export const featured_title = recipe<Pick<RecipeVariants, 'layout'>>({
	base: {
		gridRow: '1 / 2',

		paddingTop: spacing['3'],
		paddingLeft: spacing['3'],
		paddingRight: spacing['3'],

		color: vars_featured.color,
	},
	variants: {
		layout: {
			left: {
				gridColumn: '2 / 4',
			},
			right: {
				gridColumn: '1 / 3',
			},
			center: {
				gridColumn: '1 / 3',
			},
		},
	},
});

export const featured_description = recipe<
	Pick<RecipeVariants, 'layout' | 'noImageBorder' | 'preLine'>
>({
	base: {
		gridRow: '2 / 3',

		paddingInline: spacing['3'],
		paddingBlock: spacing['2'],

		color: vars_featured.color,
	},

	variants: {
		preLine: {
			false: [],
			true: {
				whiteSpace: 'pre-line',
			},
		},
		noImageBorder: {
			false: [],
			true: {
				paddingBottom: 0,
			},
		},
		layout: {
			left: {
				gridColumn: '2 / 4',
			},
			right: {
				gridColumn: '1 / 3',
			},
			center: {
				gridColumn: '1 / 3',
			},
		},
	},
});

export const featured_date = recipe<Pick<RecipeVariants, 'layout'>>({
	base: {
		gridRow: '3 / 4',

		textAlign: 'center',
		paddingTop: spacing['2'],
		paddingBottom: `calc(${spacing['2']} + ${border_width}px)`,

		color: vars_featured.color,

		borderTopStyle: border_style,
		borderTopWidth: border_width,
		borderTopColor: vars_featured.color,

		selectors: {
			[dark()]: {
				marginBottom: border_width,
				marginRight: border_width,
			},
		},
	},
	variants: {
		layout: {
			left: {
				gridColumn: '3 / 4',
				paddingRight: `calc(${spacing['2']} + ${border_width}px)`,
			},
			right: {
				gridColumn: '1 / 2',
				paddingLeft: spacing['3'],
				// paddingLeft: `calc(${spacing['2']} + ${border_width}px)`,
			},
			center: {
				gridColumn: '1 / 2',
			},
		},
	},
});

export const featured_image = recipe<Pick<RecipeVariants, 'noImageBorder' | 'layout'>>({
	base: {
		gridRow: '3 / 6',
		position: 'relative',
	},
	variants: {
		noImageBorder: {
			false: {
				overflow: 'hidden',

				borderRadius: border_radius,
				borderStyle: border_style,
				borderWidth: border_width,
				borderColor: vars_featured.background_color,

				selectors: {
					[dark()]: {
						boxShadow: `0 0 ${spacing['1']} 0 ${colors.black}`,
					},
					[dark('&::after')]: {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: -border_width,
						left: -border_width,
						width: '100%',
						height: '100%',
						boxSizing: 'content-box',
						boxShadow: `inset 0 0 0 ${border_width}px ${vars_featured.color}`,
						borderRadius: 'inherit',
						borderStyle: border_style,
						borderWidth: border_width,
					},
				},
			},
			true: [],
		},
		layout: {
			left: {
				gridColumn: '1 / 3',
				borderTopRightRadius: 0,
			},
			right: {
				gridColumn: '2 / 4',
				borderTopLeftRadius: 0,
			},
			center: {
				gridColumn: '1 / 2',
				borderTopRightRadius: 0,
			},
		},
	},
});

type RecipeVariantsButton = Pick<RecipeVariants, 'layout' | 'outline'>;

export const featured_button = recipe<RecipeVariantsButton>({
	base: {
		gridRow: '4 / 5',
		alignSelf: 'start',

		// HACK: The animation might change the size of the button
		minWidth: 140,

		color: vars_featured.background_color,

		borderStyle: border_style,
		borderWidth: border_width,
		borderColor: vars_featured.background_color,

		transitionProperty: 'color, background-color',

		selectors: {
			'&:hover': {
				color: vars_featured.color,
				backgroundColor: vars_featured.background_color,
			},
		},
	},
	variants: {
		layout: {
			left: {
				gridColumn: '3 / 4',
				borderTopLeftRadius: 0,
			},
			right: {
				gridColumn: '1 / 2',
				borderTopRightRadius: 0,
			},
			center: {
				gridColumn: '2 / 3',
			},
		},
		outline: {
			false: [],
			true: {
				selectors: {
					[`&:not(${dark()})`]: {
						color: vars_featured.color,
						borderColor: vars_featured.color,
					},
				},
			},
		},
	},
});
