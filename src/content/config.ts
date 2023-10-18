import { defineCollection } from 'astro:content';

import { eventSchema } from 'src/data/events.ts';
import { drinkOfMonthSchema } from 'src/data/drink_of_month.ts';

export const collections = {
	events: defineCollection({
		type: 'content',
		schema: eventSchema,
	}),
	drink_of_month: defineCollection({
		type: 'data',
		schema: drinkOfMonthSchema,
	}),
};

// TODO: Documentation
// https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
