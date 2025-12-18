import { type ComplexStyleRule, createThemeContract } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { border_radius, border_style, border_width } from "src/styles/border.css.ts";
import { colors } from "src/styles/colors.css.ts";
import { spacing } from "src/styles/spacing.css.ts";
import { dark } from "src/styles/themes.css.ts";

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

export const featured = recipe<Omit<RecipeVariants, "preLine">>({
	base: {
		// negative border around the image
		"::after": {
			borderBottomStyle: "none",

			borderColor: vars_featured.color,
			borderWidth: border_width,
			content: '""',
			display: "block",
			gridColumn: "2 / 3",

			gridRow: "3 / 4",
			zIndex: 1,
		},

		// grainy background
		"::before": {
			backgroundBlendMode: "soft-light",

			backgroundColor: vars_featured.background_color,
			backgroundImage: 'url("../../assets/grain.svg")',
			backgroundSize: "256px",

			borderRadius: border_radius,
			content: '""',
			display: "block",

			gridRow: "1 / 4",
		},
		display: "grid",
		// gridTemplateColumns is set by the layout variant
		gap: spacing["2"],
		gridTemplateRows: `repeat(2, max-content) repeat(3, calc(${spacing["4"]} - ${spacing["2"]}))`,

		position: "relative",

		selectors: {
			[dark("&::before")]: {
				backgroundBlendMode: "multiply",
				borderColor: vars_featured.background_color,
				borderStyle: border_style,
				borderWidth: border_width,
				boxShadow: `inset 0 0 0 ${border_width}px ${vars_featured.color}`,
			},
			[dark("&::after")]: {
				display: "none",
			},
		},
	},
	variants: {
		layout: {
			center: {
				"::before": {
					gridColumn: "1 / 3",
				},
				gridTemplateColumns: `max-content 1fr`,
			},
			left: {
				"::after": {
					borderLeftStyle: "none",
					borderRightStyle: border_style,
					borderTopStyle: border_style,
				},
				"::before": {
					gridColumn: "2 / 4",
				},
				gridTemplateColumns: `calc(${spacing["4"]} - ${spacing["2"]}) 1fr max-content`,
			},
			right: {
				"::after": {
					borderLeftStyle: border_style,
					borderRightStyle: "none",
					borderTopStyle: border_style,
				},
				"::before": {
					gridColumn: "1 / 3",
				},
				gridTemplateColumns: `max-content 1fr calc(${spacing["4"]} - ${spacing["2"]})`,
			},
		},
		noImageBorder: {
			false: [],
			true: {
				"::after": {
					borderStyle: "none",
				},
			},
		},
		outline: {
			false: [],
			true: {
				"::before": {
					borderColor: vars_featured.color,
					borderStyle: border_style,
					borderWidth: border_width,
				},
			},
		},
	},
});

export const featured_title = recipe<Pick<RecipeVariants, "layout">>({
	base: {
		color: vars_featured.color,
		gridRow: "1 / 2",
		paddingLeft: spacing["3"],
		paddingRight: spacing["3"],

		paddingTop: spacing["3"],
	},
	variants: {
		layout: {
			center: {
				gridColumn: "1 / 3",
			},
			left: {
				gridColumn: "2 / 4",
			},
			right: {
				gridColumn: "1 / 3",
			},
		},
	},
});

export const featured_description = recipe<
	Pick<RecipeVariants, "layout" | "noImageBorder" | "preLine">
>({
	base: {
		color: vars_featured.color,
		gridRow: "2 / 3",
		paddingBlock: spacing["2"],

		paddingInline: spacing["3"],
	},

	variants: {
		layout: {
			center: {
				gridColumn: "1 / 3",
			},
			left: {
				gridColumn: "2 / 4",
			},
			right: {
				gridColumn: "1 / 3",
			},
		},
		noImageBorder: {
			false: [],
			true: {
				paddingBottom: 0,
			},
		},
		preLine: {
			false: [],
			true: {
				whiteSpace: "pre-line",
			},
		},
	},
});

export const featured_date = recipe<Pick<RecipeVariants, "layout">>({
	base: {
		borderTopColor: vars_featured.color,

		borderTopStyle: border_style,
		borderTopWidth: border_width,

		color: vars_featured.color,
		gridRow: "3 / 4",
		paddingBottom: `calc(${spacing["2"]} + ${border_width}px)`,
		paddingTop: spacing["2"],

		selectors: {
			[dark()]: {
				marginBottom: border_width,
				marginRight: border_width,
			},
		},

		textAlign: "center",
	},
	variants: {
		layout: {
			center: {
				gridColumn: "1 / 2",
			},
			left: {
				gridColumn: "3 / 4",
				paddingRight: `calc(${spacing["2"]} + ${border_width}px)`,
			},
			right: {
				gridColumn: "1 / 2",
				paddingLeft: spacing["3"],
				// paddingLeft: `calc(${spacing['2']} + ${border_width}px)`,
			},
		},
	},
});

export const featured_image = recipe<Pick<RecipeVariants, "noImageBorder" | "layout">>({
	base: {
		gridRow: "3 / 6",
		position: "relative",
	},
	variants: {
		layout: {
			center: {
				borderTopRightRadius: 0,
				gridColumn: "1 / 2",
			},
			left: {
				borderTopRightRadius: 0,
				gridColumn: "1 / 3",
			},
			right: {
				borderTopLeftRadius: 0,
				gridColumn: "2 / 4",
			},
		},
		noImageBorder: {
			false: {
				borderColor: vars_featured.background_color,

				borderRadius: border_radius,
				borderStyle: border_style,
				borderWidth: border_width,
				overflow: "hidden",

				selectors: {
					[dark()]: {
						boxShadow: `0 0 ${spacing["1"]} 0 ${colors.black}`,
					},
					[dark("&::after")]: {
						borderRadius: "inherit",
						borderStyle: border_style,
						borderWidth: border_width,
						boxShadow: `inset 0 0 0 ${border_width}px ${vars_featured.color}`,
						boxSizing: "content-box",
						content: '""',
						display: "block",
						height: "100%",
						left: -border_width,
						position: "absolute",
						top: -border_width,
						width: "100%",
					},
				},
			},
			true: [],
		},
	},
});

type RecipeVariantsButton = Pick<RecipeVariants, "layout" | "outline">;

export const featured_button = recipe<RecipeVariantsButton>({
	base: {
		alignSelf: "start",
		borderColor: vars_featured.background_color,

		borderStyle: border_style,
		borderWidth: border_width,

		color: vars_featured.background_color,
		gridRow: "4 / 5",

		// HACK: The animation might change the size of the button
		minWidth: 140,

		selectors: {
			"&:hover": {
				backgroundColor: vars_featured.background_color,
				color: vars_featured.color,
			},
		},

		transitionProperty: "color, background-color",
	},
	variants: {
		layout: {
			center: {
				gridColumn: "2 / 3",
			},
			left: {
				borderTopLeftRadius: 0,
				gridColumn: "3 / 4",
			},
			right: {
				borderTopRightRadius: 0,
				gridColumn: "1 / 2",
			},
		},
		outline: {
			false: [],
			true: {
				selectors: {
					[`&:not(${dark()})`]: {
						borderColor: vars_featured.color,
						color: vars_featured.color,
					},
				},
			},
		},
	},
});
