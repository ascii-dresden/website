import { getCollection, z } from 'astro:content';
import { Temporal } from 'temporal-polyfill';

import { PlainDateTimeSchema } from 'src/temporal_schema.ts';

export const EventSchema = z.object({
	date_time: PlainDateTimeSchema.transform((date) => date.toString()),
	title: z.string(),
	image: z.string(),
	image_alt: z.string(),
	summary: z.string(),
});

type Modify<TObject, TModify> = Omit<TObject, keyof TModify> & TModify;

export type Event = {
	id: string;
	slug: string;
	body: string;
	collection: string;
	data: Modify<z.output<typeof EventSchema>, { date_time: Temporal.PlainDateTime }>;
};

export async function fetchUpcomingEvents(): Promise<Event[]> {
	const now = Temporal.Now.plainDateTimeISO();
	const events = await getCollection('events', ({ data }) => {
		return Temporal.PlainDateTime.compare(data.date_time, now) <= 0;
	});

	// mutate the `date_time` field to be `Temporal.PlainDateTime`
	for (const event of events) {
		event.data.date_time = Temporal.PlainDateTime.from(event.data.date_time);
	}

	return events;
}
