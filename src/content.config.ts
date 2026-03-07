import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

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

// NOTE: This is how to get the ouput type of a schema
// ```ts
// export type ColdDrink = z.output<ReturnTypeOrOriginal<Required<typeof coldDrinks>["schema"]>>;
// ```

const IngredientSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("espresso"),
		g: z.number().nonnegative(),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("coffee"),
		g: z.number().nonnegative(),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("chocolate"),
		g: z.number().nonnegative(),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("white_chocolate"),
		g: z.number().nonnegative(),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("milk"),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("foam_liquid"),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("foam_creamy"),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("foam_fluffy"),
		ml: z.number().nonnegative(),
	}),
	z.object({
		type: z.literal("foam_firm"),
		ml: z.number().nonnegative(),
	}),
]);

export type Ingredient = z.output<typeof IngredientSchema>;

export type IngredientType = Ingredient["type"];

const hotDrinks = defineCollection({
	loader: file("content/hot_drinks.json"),
	schema: z.object({
		name: z.string(),
		price: z.number(),
		ingredients: z.array(IngredientSchema),
	}),
});

export const collections = { coldDrinks, hotDrinks };
