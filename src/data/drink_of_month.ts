import { getCollection, z } from 'astro:content';
import { checkTemporal } from 'src/check_temporal';
import { Temporal } from 'temporal-polyfill';

export const drinkOfMonthSchema = z.object({
	title: z.string(),
	description: z.string(),
	image: z.string(),
	image_alt: z.string(),
	year_month: z.coerce.string().refine((value) => checkTemporal(value, Temporal.PlainYearMonth)),
});

export type DrinkOfMonth = Omit<z.infer<typeof drinkOfMonthSchema>, 'year_month'> & {
	year_month: Temporal.PlainYearMonth;
};

export async function fetchCurrentDrinkOfMonth(): Promise<DrinkOfMonth | undefined> {
	const drinkOfMonths = await getCollection('drink_of_month');

	const currentDrinkOfMonth = drinkOfMonths.at(0)?.data;

	return (
		currentDrinkOfMonth && {
			...currentDrinkOfMonth,
			year_month: Temporal.PlainYearMonth.from(currentDrinkOfMonth.year_month),
		}
	);
}
