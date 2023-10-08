import { defineCollection } from 'astro:content';

import { eventSchema } from './_events.ts';

export const collections = {
	events: defineCollection({
		type: 'content',
		schema: eventSchema,
	}),
};

// TODO: Documentation
// https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format
