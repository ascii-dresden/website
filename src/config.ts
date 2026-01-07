import { object, optional, pipe, string, transform } from "@valibot/valibot";

import { mapSnakeToCamel } from "src/snake_to_camel.ts";
import { PlainDateTimeSchema, PlainTimeSchema, PlainYearMonthSchema } from "src/temporal.ts";

export const OpeningHoursDaySchema = optional(
	object({
		open: PlainTimeSchema,
		close: PlainTimeSchema,
	})
);

export const OpeningHoursSchema = object({
	monday: OpeningHoursDaySchema,
	tuesday: OpeningHoursDaySchema,
	wednesday: OpeningHoursDaySchema,
	thursday: OpeningHoursDaySchema,
	friday: OpeningHoursDaySchema,
	saturday: OpeningHoursDaySchema,
	sunday: OpeningHoursDaySchema,
});

export const SpecialSchema = pipe(
	object({
		title: string(),
		image: string(),
		image_alt: string(),
		description: string(),
		year_month: PlainYearMonthSchema,
	}),
	transform(mapSnakeToCamel)
);

export const EventSchema = pipe(
	object({
		date_time: PlainDateTimeSchema,
	}),
	transform(mapSnakeToCamel)
);

export const ConfigSchema = pipe(
	object({
		opening_hours: OpeningHoursSchema,
		special: SpecialSchema,
	}),
	transform(mapSnakeToCamel)
);
