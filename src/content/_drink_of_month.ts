import { Temporal } from 'temporal-polyfill';
import { parse, object, string, coerce, transform, Output } from 'valibot';
import { load } from 'js-yaml';

import drinkOfMonthYaml from 'src/content/_drink_of_month.yaml?raw';

const drinkOfMonthSchema = transform(
	object({
		title: string(),
		description: string(),
		image: string(),
		image_alt: string(),
		year_month: coerce(string(), String),
	}),
	(drinkOfMonth) => ({
		...drinkOfMonth,
		year_month: Temporal.PlainYearMonth.from(drinkOfMonth.year_month),
	})
);

export type DrinkOfMonth = Output<typeof drinkOfMonthSchema>;

export const fetchDrinkOfMonth = function (): DrinkOfMonth {
	const drinkOfMonthRaw = load(drinkOfMonthYaml);
	return parse(drinkOfMonthSchema, drinkOfMonthRaw);
};
