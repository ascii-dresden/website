import { defineCollection, type ReturnTypeOrOriginal, reference } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

export type ColdDrink = z.output<ReturnTypeOrOriginal<Required<typeof coldDrinks>["schema"]>>;

const IngredientSchema = z.object({
	type: reference("ingredients"),
	ml: z.number(),
	g: z.optional(z.number()),
});

export type Ingredient = z.output<typeof IngredientSchema>;

const IngredientTypeSchema = z.object({
	label: z.string(),
	color: z.string().default("transparent"),
	dither: z.optional(
		z.object({
			intensity: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
			color: z.string().default("currentColor"),
		})
	),
});

export type IngredientType = z.output<typeof IngredientTypeSchema>;

const HotDrinkSchema = z.object({
	name: z.string(),
	price: z.number(),
	ingredients: z.array(IngredientSchema),
});

export type HotDrink = z.output<typeof HotDrinkSchema>;

const coldDrinks = defineCollection({
	loader: file("content/cold_drinks.json"),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			image: z.optional(image()),
			size_litres: z.number(),
			price: z.number(),
			groups: z.array(z.union([z.literal("Special"), z.string()])).default([]),
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
