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

const hotDrinks = defineCollection({
	loader: file("content/hot_drinks.json"),
	schema: z.object({
		name: z.string(),
		price: z.number(),
		ingredients: z.array(
			z.object({
				amount: z.number(),
				type: z.union([
					z.literal("milk"),
					z.literal("water"),
					z.literal("espresso"),
					z.literal("coffee"),
					z.literal("dark_chocolate"),
					z.literal("white_chocolate"),
				]),
			})
		),
	}),
});

export const collections = { coldDrinks, hotDrinks };
