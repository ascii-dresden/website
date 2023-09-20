import { ComplexStyleRule, createThemeContract, globalStyle } from '@vanilla-extract/css';
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
	mirror: {
		false: ComplexStyleRule;
		true: ComplexStyleRule;
	};
	outline: {
		false: ComplexStyleRule;
		true: ComplexStyleRule;
	};
	noImageBorder: {
		false: ComplexStyleRule;
		true: ComplexStyleRule;
	};
};

type RecipeVariantsOnlyMirror = Pick<RecipeVariants, 'mirror'>;

type RecipeVariantsOnlyMirrorAndNoImageBorder = Pick<RecipeVariants, 'mirror' | 'noImageBorder'>;

export const featured = recipe<RecipeVariants>({
	base: {
		display: 'grid',
		gridTemplateRows: `repeat(2, max-content) repeat(3, calc(${spacing['4']} - ${spacing['2']}))`,
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
		mirror: {
			false: {
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
			true: {
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

export const featured_title = recipe<RecipeVariantsOnlyMirror>({
	base: {
		gridRow: '1 / 2',

		paddingTop: spacing['3'],
		paddingLeft: spacing['3'],
		paddingRight: spacing['3'],

		color: vars_featured.color,
	},
	variants: {
		mirror: {
			false: {
				gridColumn: '2 / 4',
			},
			true: {
				gridColumn: '1 / 3',
			},
		},
	},
});

export const featured_description = recipe<RecipeVariantsOnlyMirrorAndNoImageBorder>({
	base: {
		gridRow: '2 / 3',

		paddingInline: spacing['3'],
		paddingBlock: spacing['2'],

		color: vars_featured.color,
	},

	variants: {
		noImageBorder: {
			false: [],
			true: {
				paddingBottom: 0,
			},
		},
		mirror: {
			false: {
				gridColumn: '2 / 4',
			},
			true: {
				gridColumn: '1 / 3',
			},
		},
	},
});

export const featured_date = recipe<RecipeVariantsOnlyMirror>({
	base: {
		gridRow: '3 / 4',

		textAlign: 'center',
		padding: spacing['2'],
		paddingBottom: `calc(${spacing['2']} + ${border_width}px)`,
		paddingRight: `calc(${spacing['2']} + ${border_width}px)`,

		color: vars_featured.color,

		borderTopStyle: border_style,
		borderTopWidth: border_width,
		borderTopColor: vars_featured.color,

		selectors: {
			[dark()]: {
				padding: spacing['2'],
				marginBottom: border_width,
				marginRight: border_width,
			},
		},
	},
	variants: {
		mirror: {
			false: {
				gridColumn: '3 / 4',
			},
			true: {
				gridColumn: '1 / 2',
			},
		},
	},
});

export const featured_image = recipe<RecipeVariantsOnlyMirrorAndNoImageBorder>({
	base: {
		gridRow: '3 / 6',
		display: 'flex',
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
				boxShadow: `0 0 ${spacing['1']} 0 ${colors.black}`,

				selectors: {
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
			true: {
				// HACK: take priority over `mirror` variant
				gridColumn: '2 / 3 !important',
			},
		},
		mirror: {
			false: {
				gridColumn: '1 / 3',
				borderTopRightRadius: 0,
			},
			true: {
				gridColumn: '2 / 4',
				borderTopLeftRadius: 0,
			},
		},
	},
});

globalStyle(
	['img', 'svg']
		.map((tag) => `${featured_image.classNames.variants.noImageBorder.false} ${tag}`)
		.join(','),
	{
		flex: '1 0 0',
		objectFit: 'cover',
	}
);

globalStyle(
	['img', 'svg']
		.map((tag) => `${featured_image.classNames.variants.noImageBorder.true} ${tag}`)
		.join(','),
	{
		filter: `drop-shadow(0 1px 2px ${colors.black})`,
	}
);

type RecipeVariantsButton = Pick<RecipeVariants, 'mirror' | 'outline'>;

export const featured_button = recipe<RecipeVariantsButton>({
	base: {
		gridRow: '4 / 5',
		alignSelf: 'start',

		// HACK: The animation might change the size of the button
		minWidth: 136,

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
		mirror: {
			false: {
				gridColumn: '3 / 4',
				borderTopLeftRadius: 0,
			},
			true: {
				gridColumn: '1 / 2',
				borderTopRightRadius: 0,
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
