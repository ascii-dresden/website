import { defineCollection } from 'astro:content';

import { DrinkOfMonthSchema } from 'src/data/drink_of_month.ts';
import { EventSchema } from 'src/data/events.ts';

export const collections = {
	events: defineCollection({
		type: 'content',
		schema: EventSchema,
	}),
	drink_of_month: defineCollection({
		type: 'data',
		schema: DrinkOfMonthSchema,
	}),
};

// TODO: Documentation
// https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
