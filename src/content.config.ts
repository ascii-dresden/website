import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";
import type { ReturnTypeOrOriginal } from "astro:content";

export type ColdDrink = z.output<ReturnTypeOrOriginal<Required<typeof coldDrinks>["schema"]>>;

const IngredientSchema = z.object({
	g: z.optional(z.number()),
	ml: z.number(),
	type: reference("ingredients"),
});

export type Ingredient = z.output<typeof IngredientSchema>;

const IngredientTypeSchema = z.object({
	color: z.string().default("transparent"),
	dither: z.optional(
		z.object({
			intensity: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
			color: z.string().default("currentColor"),
		}),
	),
	label: z.string(),
});

export type IngredientType = z.output<typeof IngredientTypeSchema>;

const HotDrinkSchema = z.object({
	ingredients: z.array(IngredientSchema),
	name: z.string(),
	price: z.number(),
});

export type HotDrink = z.output<typeof HotDrinkSchema>;

const coldDrinks = defineCollection({
	loader: file("content/cold_drinks.json"),
	schema: ({ image }) =>
		z.object({
			groups: z.array(z.union([z.literal("Special"), z.string()])).default([]),
			image: z.optional(image()),
			name: z.string(),
			price: z.number(),
			size_litres: z.number(),
		}),
});

const hotDrinks = defineCollection({
	loader: file("content/hot_drinks.json"),
	schema: HotDrinkSchema,
});

const ingredients = defineCollection({
	loader: file("content/hot_drink_ingredients.json"),
	schema: IngredientTypeSchema,
});

export const collections = { coldDrinks, hotDrinks, ingredients };
