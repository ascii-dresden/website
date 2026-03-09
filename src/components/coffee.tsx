// Cup sizes:
// 6cl, 25cl, 35cl

import type { DataType, Globals } from "csstype";
import {
	type Component,
	type ComponentProps,
	createMemo,
	For,
	Match,
	Switch,
	splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

import type { Ingredient, IngredientType } from "src/content.config.ts";
import { colors, lineThicknessPx } from "src/css.ts";

type IngredientData = {
	color: Globals | DataType.Color;
	dither?: {
		intensity: 1 | 2 | 3 | 4;
		color?: Globals | DataType.Color;
	};
	label: Component;

	/**
	 * Height of the label component
	 */
	labelHeight: number;
};

const INGREDIENTS: Record<IngredientType, IngredientData> = {
	milk: {
		color: colors.milk,
		labelHeight: 36,
		label: () => (
			<g>
				<text dominant-baseline="central">Milk</text>
				<text dominant-baseline="central" y={20}>
					Oat milk
				</text>
			</g>
		),
	},
	chocolate: {
		color: colors.espresso,
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Chocolate</text>,
	},
	espresso: {
		color: colors.espresso,
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Espresso</text>,
	},
	coffee: {
		color: colors.espresso,
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Coffee</text>,
	},
	white_chocolate: {
		color: colors.creme,
		labelHeight: 16,
		label: () => <text dominant-baseline="central">White Chocolate</text>,
	},
	foam_liquid: {
		color: colors.milk,
		dither: {
			intensity: 1,
			color: "oklch(0.5 0 0)",
		},
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Liquid Foam</text>,
	},
	foam_creamy: {
		color: colors.espresso,
		dither: {
			intensity: 2,
			color: "oklch(0.5 0 0)",
		},
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Creamy Foam</text>,
	},
	foam_fluffy: {
		color: colors.espresso,
		dither: {
			intensity: 3,
			color: "oklch(0.5 0 0)",
		},
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Fluffy Foam</text>,
	},
	foam_firm: {
		color: colors.espresso,
		dither: {
			intensity: 4,
			color: "oklch(0.5 0 0)",
		},
		labelHeight: 16,
		label: () => <text dominant-baseline="central">Firm Foam</text>,
	},
};

export type CupProps = ComponentProps<"svg"> & {
	ingredients: Ingredient[];
};

export const Cup: Component<CupProps> = function (props) {
	const totalSizeMl = () => props.ingredients.reduce((sum, ingredient) => sum + ingredient.ml, 0);

	return (
		// TODO: Fallback for > 350ml
		<Switch>
			<Match when={totalSizeMl() <= 60}>
				<SmallCup {...props} />
			</Match>
			<Match when={totalSizeMl() <= 250}>
				<MediumCup {...props} />
			</Match>
			<Match when={totalSizeMl() <= 350}>
				<LargeCup {...props} />
			</Match>
		</Switch>
	);
};

type CupMetrics = {
	width: number;
	height: number;
	bottomX: number;
	bottomY: number;
	bottomWidth: number;
	dX: number;
	dY: number;
};

type CupIngredientsProps = {
	/**
	 * This can technically be [`Ingredient[]`], since `offsetMl` can be derived
	 * from the ingredient list, but compute outside and pass it in to avoid
	 * redundant computations.
	 */
	ingredients: OffsetIngredient[];

	metrics: CupMetrics;
};

const CupIngredients: Component<CupIngredientsProps> = function (props) {
	return (
		<For each={props.ingredients}>
			{(i) => (
				<path
					class={`ingredient-${i.offsetMl}`}
					d={[
						`M${props.metrics.bottomX - props.metrics.dX * i.offsetMl},${props.metrics.bottomY + props.metrics.dY * i.offsetMl}`,
						`l${props.metrics.bottomWidth + props.metrics.dX * i.offsetMl * 2},0`,
						`l${props.metrics.dX * i.ingredient.ml},${props.metrics.dY * i.ingredient.ml}`,
						`l-${props.metrics.bottomWidth + props.metrics.dX * (i.offsetMl + i.ingredient.ml) * 2},0`,
						"Z",
					].join("")}
					fill={
						INGREDIENTS[i.ingredient.type].dither
							? `url(#dither${INGREDIENTS[i.ingredient.type].dither?.intensity})`
							: INGREDIENTS[i.ingredient.type].color
					}
					stroke="currentColor"
					stroke-width={`${lineThicknessPx}px`}
				/>
			)}
		</For>
	);
};

type OffsetIngredient = {
	ingredient: Ingredient;

	/**
	 * Offset from the bottom of the cup in milliliters.
	 */
	offsetMl: number;
};

/**
 * Compute the offset of each ingredient from the bottom of the cup, in milliliters.
 *
 * @returns Array of same length as `ingredients` argument.
 */
function computeOffsets(ingredients: Ingredient[]): OffsetIngredient[] {
	const v = new Array<OffsetIngredient>(ingredients.length);
	let offsetMl = 0;
	ingredients.forEach((ingredient, i) => {
		v[i] = { ingredient, offsetMl };
		offsetMl += ingredient.ml;
	});
	return v;
}

type LabeledOffsetIngredient = {
	ingredient: OffsetIngredient;
	labelY: number;
};

const LABEL_FONT_SIZE = 16;

/**
 * Gap between ingredient labels in SVG pixels.
 */
const LABEL_GAP = 12;

const CupIngredientLabels: Component<CupIngredientsProps> = function (props) {
	const labeledOffsetIngredients = createMemo(() => {
		let totalHeight = 0;
		for (let i = props.ingredients.length - 1; i >= 0; i--) {
			totalHeight += INGREDIENTS[props.ingredients[i]!.ingredient.type].labelHeight;
			if (i < props.ingredients.length - 1) {
				totalHeight += LABEL_GAP;
			}
		}

		const v = new Array<LabeledOffsetIngredient>(props.ingredients.length);
		let labelY = Math.max((props.metrics.height - totalHeight) / 2, 8);
		for (let i = props.ingredients.length - 1; i >= 0; i--) {
			const ingredient = props.ingredients[i]!;
			v[i] = { ingredient, labelY };
			labelY += INGREDIENTS[ingredient.ingredient.type].labelHeight + LABEL_GAP;
		}
		return v;
	});

	return (
		<For each={labeledOffsetIngredients()}>
			{(label) => {
				const ingredientCenterX = props.metrics.bottomX + props.metrics.bottomWidth / 2;
				const ingredientCenterY =
					props.metrics.bottomY +
					props.metrics.dY *
						(label.ingredient.offsetMl + label.ingredient.ingredient.ml / 2);

				const labelAnchorY =
					label.labelY +
					(INGREDIENTS[label.ingredient.ingredient.type].labelHeight - LABEL_FONT_SIZE) /
						2;

				return (
					<>
						<circle
							stroke-width={`${lineThicknessPx * 3}px`}
							stroke={colors.milk}
							fill="transparent"
							cx={ingredientCenterX}
							cy={ingredientCenterY}
							r={2}
						/>
						<path
							fill="none"
							stroke-width={`${lineThicknessPx * 3}px`}
							stroke={colors.milk}
							d={`M${ingredientCenterX + 2},${ingredientCenterY} h8 L${props.metrics.width},${labelAnchorY} h8`}
						/>
						<circle
							stroke-width={`${lineThicknessPx}px`}
							stroke="currentColor"
							fill="transparent"
							cx={ingredientCenterX}
							cy={ingredientCenterY}
							r={2}
						/>
						<path
							fill="none"
							stroke-width={`${lineThicknessPx}px`}
							stroke="currentColor"
							d={`M${ingredientCenterX + 2},${ingredientCenterY} h8 L${props.metrics.width},${labelAnchorY} h8`}
						/>
						<g
							transform={`translate(${props.metrics.width + 12} ${label.labelY})`}
							fill="currentColor"
						>
							<Dynamic
								component={INGREDIENTS[label.ingredient.ingredient.type].label}
							/>
						</g>
					</>
				);
			}}
		</For>
	);
};

const SMALL_CUP_METRICS: CupMetrics = {
	width: 110,
	height: 74,
	bottomX: 42,
	bottomY: 65,
	bottomWidth: 54,
	dX: 7.5 / 60,
	dY: -1, // -60 / 60,
};

export const SmallCup: Component<CupProps> = function (props) {
	const [_, others] = splitProps(props, ["ingredients"]);

	const offsetIngredients = createMemo(() => computeOffsets(props.ingredients));

	return (
		<svg
			viewBox={`0 0 300 ${SMALL_CUP_METRICS.height}`}
			height={SMALL_CUP_METRICS.height}
			xmlns="http://www.w3.org/2000/svg"
			{...others}
		>
			<title>Coffee diagram</title>
			<CupIngredients ingredients={offsetIngredients()} metrics={SMALL_CUP_METRICS} />
			<path
				d="M34.967,53.006l-24.967,-14.415c-4.134,-2.387 -7.151,-6.318 -8.387,-10.93c-1.236,-4.611 -0.589,-9.524 1.798,-13.659c4.971,-8.609 15.979,-11.559 24.588,-6.588l1.367,0.789l-0.338,-2.707c-0.274,-2.191 1.282,-4.191 3.473,-4.465c2.191,-0.274 4.191,1.282 4.465,3.473l7.343,58.744c0.125,1.001 0.976,1.752 1.985,1.752l45.407,0c1.009,0 1.859,-0.751 1.985,-1.752l7.343,-58.744c0.274,-2.191 2.275,-3.747 4.465,-3.473c2.191,0.274 3.747,2.275 3.473,4.465l-7.343,58.744c-0.626,5.004 -4.88,8.76 -9.923,8.76l-45.407,-0c-5.043,0 -9.297,-3.755 -9.923,-8.76l-1.404,-11.235Zm-4.356,-34.846l-6.611,-3.817c-4.783,-2.761 -10.899,-1.123 -13.66,3.66c-1.326,2.297 -1.685,5.026 -0.999,7.588c0.686,2.562 2.362,4.746 4.659,6.072l19.723,11.387l-3.111,-24.89Z"
				fill={colors.milk}
				stroke="currentColor"
				stroke-width={`${lineThicknessPx}px`}
			/>
			<CupIngredientLabels ingredients={offsetIngredients()} metrics={SMALL_CUP_METRICS} />
		</svg>
	);
};

const MEDIUM_CUP_METRICS: CupMetrics = {
	width: 130,
	height: 122,
	bottomX: 57,
	bottomY: 113,
	bottomWidth: 50,
	dX: 19 / 250,
	dY: -104 / 250,
};

export const MediumCup: Component<CupProps> = function (props) {
	const [_, others] = splitProps(props, ["ingredients"]);

	const offsetIngredients = createMemo(() => computeOffsets(props.ingredients));

	return (
		<svg
			viewBox={`0 0 300 ${MEDIUM_CUP_METRICS.height}`}
			height={MEDIUM_CUP_METRICS.height}
			xmlns="http://www.w3.org/2000/svg"
			{...others}
		>
			<title>Coffee Diagram</title>
			<CupIngredients ingredients={offsetIngredients()} metrics={MEDIUM_CUP_METRICS} />
			<path
				d="M36.724,45.681c1.133,5.248 2.43,9.939 3.751,14.553c3.748,13.094 7.712,25.532 8.406,49.154l0.001,0.018c0.219,6.466 5.524,11.595 11.993,11.595c10.664,0 29.587,-0 40.249,-0.01c6.467,0 11.769,-5.129 11.984,-11.593l0.001,-0.016c0.688,-23.682 4.597,-36.205 8.321,-49.327c3.874,-13.653 7.572,-27.927 7.572,-55.053c0,-2.208 -1.792,-4 -4,-4c-2.208,0 -4,1.792 -4,4c0,26.05 -3.547,39.758 -7.268,52.869c-3.87,13.639 -7.906,26.658 -8.622,51.275c-0.078,2.145 -1.839,3.845 -3.988,3.845l-0.004,0c-10.663,0.01 -29.583,0.01 -40.245,0.01c-2.155,-0 -3.922,-1.706 -3.997,-3.859c-0.722,-24.557 -4.814,-37.495 -8.711,-51.108c-3.134,-10.951 -6.125,-22.359 -6.947,-41.164c-0.003,-0.402 -0.019,-0.799 -0.049,-1.191c-0.127,-3.314 -0.187,-6.856 -0.17,-10.66c0,-0.006 0,-0.012 0,-0.018c0,-2.201 -1.782,-3.99 -3.982,-4c-0.006,-0 -0.012,-0 -0.018,-0l-24,0c-3.022,0 -6.075,1.41 -8.333,3.667c-2.257,2.257 -3.667,5.311 -3.667,8.333c0,8.275 0.389,16.445 5.343,21.741c3.426,3.662 9.059,6.259 18.657,6.259l3.991,-0l0.012,0c4.374,0.001 7.01,1.928 7.721,4.681Zm-3.543,-29.499c0.125,3.241 0.312,6.274 0.55,9.129c0.158,5.419 -3.172,7.687 -4.717,7.689l-0.015,-0l-4,0c-6.509,0 -10.492,-1.241 -12.815,-3.724c-1.616,-1.727 -2.325,-3.979 -2.72,-6.435c-0.495,-3.077 -0.465,-6.459 -0.465,-9.841c0,-0.991 0.584,-1.936 1.324,-2.676c0.74,-0.74 1.685,-1.324 2.676,-1.324l12,0c4.348,0 7.785,2.982 8.181,7.182Z"
				// fill="oklch(0.9 0.1 127.06)"
				fill={colors.light_green}
				stroke="currentColor"
				stroke-width={`${lineThicknessPx}px`}
			/>
			<CupIngredientLabels ingredients={offsetIngredients()} metrics={MEDIUM_CUP_METRICS} />
		</svg>
	);
};

const LARGE_CUP_METRICS: CupMetrics = {
	width: 114,
	height: 162,
	bottomX: 24,
	bottomY: 149,
	bottomWidth: 66,
	dX: 20 / 350,
	dY: -145 / 350,
};

export const LargeCup: Component<CupProps> = function (props) {
	const [_, others] = splitProps(props, ["ingredients"]);

	const offsetIngredients = createMemo(() => computeOffsets(props.ingredients));

	return (
		<svg
			viewBox={`0 0 300 ${LARGE_CUP_METRICS.height}`}
			height={LARGE_CUP_METRICS.height}
			xmlns="http://www.w3.org/2000/svg"
			{...others}
		>
			<title>Coffee Diagram</title>
			<defs>
				{/* TODO: Do not hardcode colors */}
				<DitherPattern intensity={1} color="currentColor" />
				<DitherPattern intensity={2} color="currentColor" />
				<DitherPattern intensity={3} color="currentColor" />
				<DitherPattern intensity={4} color="currentColor" />
				<linearGradient id="largeCupGradient" gradientTransform="rotate(110)">
					<stop offset="20%" stop-color="oklch(1 0 0)" />
					<stop offset="100%" stop-color="oklch(0.7 0 0)" />
				</linearGradient>
			</defs>
			<CupIngredients ingredients={offsetIngredients()} metrics={LARGE_CUP_METRICS} />
			<path
				d="M3.39,1c0.929,0 1.721,0.671 1.874,1.588c1.205,7.23 6.169,37.016 7.439,44.633c0.197,1.18 0.569,2.324 1.104,3.394c0.736,1.472 1.812,3.623 2.507,5.014c0.454,0.908 0.753,1.886 0.884,2.893c1.363,10.449 9.347,71.661 11.347,86.997c0.26,1.992 1.957,3.483 3.966,3.483c10.062,0 38.914,0 48.976,0c2.009,0 3.707,-1.49 3.966,-3.483c1.971,-15.114 9.755,-74.787 11.284,-86.512c0.173,-1.328 0.567,-2.617 1.166,-3.814c0.759,-1.517 1.821,-3.643 2.484,-4.967c0.406,-0.811 0.688,-1.679 0.837,-2.574c1.135,-6.81 6.228,-37.368 7.491,-44.946c0.164,-0.984 1.015,-1.705 2.012,-1.705c0.001,0 0.001,0 0.002,0c0.58,0 1.134,0.245 1.523,0.676c0.389,0.43 0.579,1.005 0.521,1.583c-1.676,16.757 -12.189,121.886 -15.054,150.538c-0.409,4.09 -3.85,7.204 -7.96,7.204c-15.206,-0 -50.314,-0 -65.52,-0c-4.11,0 -7.551,-3.114 -7.96,-7.204c-2.865,-28.648 -13.375,-133.753 -15.053,-150.531c-0.058,-0.579 0.132,-1.156 0.522,-1.587c0.391,-0.432 0.945,-0.678 1.527,-0.678c0.038,-0 0.076,-0 0.114,-0Z"
				fill="url(#largeCupGradient)"
				stroke="currentColor"
				stroke-width={`${lineThicknessPx}px`}
			/>
			<CupIngredientLabels ingredients={offsetIngredients()} metrics={LARGE_CUP_METRICS} />
		</svg>
	);
};

// TODO: Cleanup
export const DitherPattern: Component<{
	intensity: 1 | 2 | 3 | 4;
	color: Globals | DataType.Color;
}> = function (props) {
	return (
		<pattern
			id={`dither${props.intensity}`}
			viewBox="0 0 8 8"
			width="8"
			height="8"
			patternUnits="userSpaceOnUse"
		>
			<rect fill={props.color} x="6" y="0" width="2" height="2" />
			<rect fill={props.color} x="0" y="2" width="2" height="2" />
			<rect fill={props.color} x="4" y="2" width="2" height="2" />
			<rect fill={props.color} x="2" y="4" width="2" height="2" />
			<rect fill={props.color} x="0" y="6" width="2" height="2" />
			<rect fill={props.color} x="4" y="6" width="2" height="2" />
		</pattern>
	);
};
