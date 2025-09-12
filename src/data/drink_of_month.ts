import { getCollection, z } from 'astro:content';

import { PlainDateSchema } from 'src/temporal_schema.ts';

export const DrinkOfMonthSchema = z.object({
	title: z.string(),
	description: z.string(),
	image: z.string(),
	image_alt: z.string(),
	starts: PlainDateSchema.transform((date) => date.toString()),
	ends: PlainDateSchema.transform((date) => date.toString()),
});

export type DrinkOfMonth = z.output<typeof DrinkOfMonthSchema>;

export async function fetchCurrentDrinkOfMonth(): Promise<DrinkOfMonth | undefined> {
	const drinkOfMonths = await getCollection('drink_of_month');
	// TODO: filter by current date instead of just taking the first one
	const currentDrinkOfMonth = drinkOfMonths.at(0)?.data;
	return currentDrinkOfMonth;
}
