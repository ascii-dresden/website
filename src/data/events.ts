import { Temporal } from 'temporal-polyfill';
import { getCollection, z } from 'astro:content';

import { checkTemporal } from 'src/check_temporal.ts';

export const eventSchema = z.object({
	date_time: z.coerce.string().refine((value) => checkTemporal(value, Temporal.PlainDateTime)),
	title: z.string(),
	image: z.string(),
	image_alt: z.string(),
	summary: z.string(),
});

export type Event = Omit<z.infer<typeof eventSchema>, 'date_time'> & {
	date_time: Temporal.PlainDateTime;
};

export async function fetchUpcomingEvents(): Promise<Event[]> {
	const events = await getCollection('events');

	return events.map(({ data }) => ({
		...data,
		date_time: Temporal.PlainDateTime.from(data.date_time),
	}));
}
