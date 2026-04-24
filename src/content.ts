import type { InferOutput } from "valibot";
import { object, parse, string, number, array, optional, pipe, transform } from "valibot";

import coldDrinksRaw from "../content/cold_drinks.json?raw";
import hotDrinkIngredientsRaw from "../content/hot_drink_ingredients.json?raw";
import hotDrinksRaw from "../content/hot_drinks.json?raw";

const IngredientSchema = object({
	g: optional(number()),
	ml: number(),
	type: string(),
});

export type Ingredient = InferOutput<typeof IngredientSchema>;

const IngredientTypeSchema = object({
	color: pipe(
		string(),
		transform(() => "transparent" as const),
	),
	dither: optional(
		object({
			intensity: pipe(
				string(),
				transform((v) => Number(v) as 1 | 2 | 3 | 4),
			),
			color: string(),
		}),
	),
	label: string(),
});

export type IngredientType = InferOutput<typeof IngredientTypeSchema>;

const HotDrinkSchema = object({
	ingredients: array(IngredientSchema),
	name: string(),
	price: number(),
});

export type HotDrink = InferOutput<typeof HotDrinkSchema>;

const ColdDrinkSchema = object({
	groups: array(
		pipe(
			string(),
			transform((v) => (v === "Special" ? "Special" : v)),
		),
	),
	image: optional(string()),
	name: string(),
	price: number(),
	size_litres: number(),
});

export type ColdDrink = InferOutput<typeof ColdDrinkSchema>;

const ColdDrinkListSchema = array(ColdDrinkSchema);
const HotDrinkListSchema = array(HotDrinkSchema);

export const coldDrinks: ColdDrink[] = parse(ColdDrinkListSchema, JSON.parse(coldDrinksRaw));

export const hotDrinks: HotDrink[] = parse(HotDrinkListSchema, JSON.parse(hotDrinksRaw));

const IngredientTypeWithIdSchema = object({
	id: string(),
	color: pipe(
		string(),
		transform(() => "transparent" as const),
	),
	dither: optional(
		object({
			intensity: pipe(
				string(),
				transform((v) => Number(v) as 1 | 2 | 3 | 4),
			),
			color: string(),
		}),
	),
	label: string(),
});

export const ingredientTypes: Map<string, IngredientType> = new Map(
	JSON.parse(hotDrinkIngredientsRaw).map((i: InferOutput<typeof IngredientTypeWithIdSchema>) => [
		i.id,
		i,
	]),
);
