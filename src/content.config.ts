import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const drinks = defineCollection({
	loader: file("content/drinks.json"),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			image: image(),
			size_litres: z.number(),
			price: z.number(),
		}),
});

export const collections = { drinks };
