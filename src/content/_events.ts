import { Temporal } from 'temporal-polyfill';
import { getCollection, z } from 'astro:content';

export const eventSchema = z.object({
	date_time: z.string(),
	title: z.string(),
	image: z.string(),
	image_alt: z.string(),
	summary: z.string(),
});

export type Event = Omit<z.infer<typeof eventSchema>, 'date_time'> & {
	date_time: Temporal.PlainDateTime;
};

export async function fetchNextEvent(): Promise<Event | undefined> {
	const events = await getCollection('events');

	const nextEvent = events.at(0)?.data;

	if (!nextEvent) {
		// throw new Error('No events found');
		return undefined;
	}

	return {
		...nextEvent,
		date_time: Temporal.PlainDateTime.from(nextEvent.date_time),
	};
}
