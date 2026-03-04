import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const drinks = defineCollection({
	loader: file("content/drinks.json"),
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
// export type Drink = z.output<ReturnTypeOrOriginal<Required<typeof drinks>["schema"]>>;
// ```

export const collections = { drinks };
