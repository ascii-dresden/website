import {
	type Component,
	type ComponentProps,
	createSignal,
	For,
	onMount,
	splitProps,
} from "solid-js";

import { colors, lineThicknessPx } from "src/css.ts";

type IngredientType =
	| "milk"
	| "milk_foam"
	| "water"
	| "espresso"
	| "coffee"
	| "dark_chocolate"
	| "white_chocolate";

type Ingredient = {
	type: IngredientType;
	amount: number;
};

function color(type: IngredientType): string {
	switch (type) {
		case "milk":
			return colors.milk;
		case "milk_foam":
			return colors.milk;
		case "water":
			return colors.light_teal;
		case "espresso":
			return colors.espresso;
		case "coffee":
			return colors.creme;
		case "dark_chocolate":
			return colors.espresso;
		case "white_chocolate":
			return colors.milk;
	}
}

function name(type: IngredientType): string {
	switch (type) {
		case "milk":
			return "Milk";
		case "milk_foam":
			return "Milk Foam";
		case "water":
			return "Water";
		case "espresso":
			return "Espresso";
		case "coffee":
			return "Coffee";
		case "dark_chocolate":
			return "Dark Chocolate";
		case "white_chocolate":
			return "White Chocolate";
	}
}

export type CoffeeProps = ComponentProps<"svg"> & {
	ingredients: Array<Ingredient>;
};

/**
 * Bottom left corner of where the fluid.
 */
const FLUID_BOTTOM = {
	x: 24,
	y: 113,
	width: 50,
};

/**
 * Vector pointing from the right corner of fluid bottom to the right corner of the fluid top.
 */
const FLUID_VECTOR = {
	x: 19,
	y: -104,
};

export const Coffee: Component<CoffeeProps> = function (props) {
	const [_, others] = splitProps(props, ["ingredients"]);

	function offsets(): number[] {
		const offsets = new Array(props.ingredients.length);
		let offset = 0;
		props.ingredients.forEach((ingredient, i) => {
			offsets[i] = offset;
			offset += ingredient.amount;
		});
		return offsets;
	}

	return (
		<svg viewBox="0 0 300 122" xmlns="http://www.w3.org/2000/svg" {...others}>
			<title>Coffee Diagram</title>
			<For each={props.ingredients}>
				{(ingredient, i) => (
					<CoffeeSegment offset={offsets()[i()]!} ingredient={ingredient} />
				)}
			</For>
			<path
				d="M93.276,45.681c-1.133,5.248 -2.43,9.939 -3.751,14.553c-3.748,13.094 -7.712,25.532 -8.406,49.154l-0.001,0.018c-0.219,6.466 -5.524,11.595 -11.993,11.595c-10.664,0 -29.587,-0 -40.249,-0.01c-6.467,0 -11.769,-5.129 -11.984,-11.593l-0.001,-0.016c-0.688,-23.682 -4.597,-36.205 -8.321,-49.327c-3.874,-13.653 -7.572,-27.927 -7.572,-55.053c0,-2.208 1.792,-4 4,-4c2.208,0 4,1.792 4,4c0,26.05 3.547,39.758 7.268,52.869c3.87,13.639 7.906,26.658 8.622,51.275c0.078,2.145 1.839,3.845 3.988,3.845l0.004,0c10.663,0.01 29.583,0.01 40.245,0.01c2.155,-0 3.922,-1.706 3.997,-3.859c0.722,-24.557 4.814,-37.495 8.711,-51.108c3.134,-10.951 6.125,-22.359 6.947,-41.164c0.003,-0.402 0.019,-0.799 0.049,-1.191c0.127,-3.314 0.187,-6.856 0.17,-10.66c-0,-0.006 -0,-0.012 -0,-0.018c-0,-2.201 1.782,-3.99 3.982,-4c0.006,-0 0.012,-0 0.018,-0l24,0c3.022,0 6.075,1.41 8.333,3.667c2.257,2.257 3.667,5.311 3.667,8.333c0,8.275 -0.389,16.445 -5.343,21.741c-3.426,3.662 -9.059,6.259 -18.657,6.259l-3.991,-0l-0.012,0c-4.374,0.001 -7.01,1.928 -7.721,4.681Zm3.543,-29.499c-0.125,3.241 -0.312,6.274 -0.55,9.129c-0.158,5.419 3.172,7.687 4.717,7.689l0.015,-0l4,0c6.509,0 10.492,-1.241 12.815,-3.724c1.616,-1.727 2.325,-3.979 2.72,-6.435c0.495,-3.077 0.465,-6.459 0.465,-9.841c0,-0.991 -0.584,-1.936 -1.324,-2.676c-0.74,-0.74 -1.685,-1.324 -2.676,-1.324l-12,0c-4.348,0 -7.785,2.982 -8.181,7.182Z"
				// fill="oklch(0.9 0.1 127.06)"
				fill={colors.light_green}
				stroke="currentColor"
				stroke-width={`${lineThicknessPx}px`}
			/>
		</svg>
	);
};

type CoffeeSegmentProps = {
	offset: number;
	ingredient: Ingredient;
};

const PADDING_PX = 8;

const CoffeeSegment: Component<CoffeeSegmentProps> = function (props) {
	const [textBbox, setTextBbox] = createSignal<DOMRect>();

	const segmentCenter = () => ({
		x: FLUID_BOTTOM.x + FLUID_BOTTOM.width / 2,
		y: FLUID_BOTTOM.y + FLUID_VECTOR.y * (props.offset + props.ingredient.amount / 2),
	});

	let text: SVGTextElement;

	onMount(() => {
		setTextBbox(text!.getBBox());
	});

	return (
		<>
			<path
				class={`ingredient-${props.offset}`}
				d={[
					`M${FLUID_BOTTOM.x - FLUID_VECTOR.x * props.offset},${FLUID_BOTTOM.y + FLUID_VECTOR.y * props.offset}`,
					`l${FLUID_BOTTOM.width + FLUID_VECTOR.x * props.offset * 2},0`,
					`l${FLUID_VECTOR.x * props.ingredient.amount},${FLUID_VECTOR.y * props.ingredient.amount}`,
					`l-${FLUID_BOTTOM.width + FLUID_VECTOR.x * (props.offset + props.ingredient.amount) * 2},0`,
					"Z",
				].join("")}
				fill={color(props.ingredient.type)}
				stroke="currentColor"
				stroke-width={`${lineThicknessPx}px`}
			/>
			<circle
				stroke-width={`${lineThicknessPx}px`}
				stroke="currentColor"
				fill="transparent"
				cx={segmentCenter().x}
				cy={segmentCenter().y}
				r={2}
			/>
			<line
				stroke-width={`${lineThicknessPx}px`}
				stroke="currentColor"
				x1={segmentCenter().x + 2}
				y1={segmentCenter().y}
				x2={138}
				y2={segmentCenter().y}
			/>
			<rect
				x={138}
				y={segmentCenter().y - 16 / 2 - PADDING_PX}
				width={textBbox()?.width + 2 * PADDING_PX}
				height={16 + 2 * PADDING_PX}
				fill={colors.milk}
				stroke-width={2}
				stroke="currentColor"
				rx={8}
				ry={8}
			/>
			<text
				ref={text!}
				x={138 + PADDING_PX}
				y={segmentCenter().y}
				fill="currentColor"
				dominant-baseline="central"
			>
				{name(props.ingredient.type)}
			</text>
		</>
	);
};
