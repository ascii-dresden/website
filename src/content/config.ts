import { defineCollection, z } from 'astro:content';

export const collections = {
	events: defineCollection({
		type: 'content',
		schema: z.object({
			datetime: z.date(),
			title: z.string(),
			summary: z.string(),
		}),
	}),
};

// TODO: Documentation
// https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
