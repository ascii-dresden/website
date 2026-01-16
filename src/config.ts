import { type InferOutput, object, optional, pipe, string, transform } from "@valibot/valibot";

import { mapSnakeKeysToCamel } from "src/snake_to_camel.ts";
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

export type OpeningHours = InferOutput<typeof OpeningHoursSchema>;

export const SpecialSchema = pipe(
	object({
		title: string(),
		image: string(),
		image_alt: string(),
		description: string(),
		year_month: PlainYearMonthSchema,
	}),
	transform(mapSnakeKeysToCamel)
);

export type Special = InferOutput<typeof SpecialSchema>;

export const EventSchema = pipe(
	object({
		date_time: PlainDateTimeSchema,
	}),
	transform(mapSnakeKeysToCamel)
);

export type Event = InferOutput<typeof EventSchema>;

export const ConfigSchema = pipe(
	object({
		opening_hours: OpeningHoursSchema,
		special: SpecialSchema,
	}),
	transform(mapSnakeKeysToCamel)
);

export type Config = InferOutput<typeof ConfigSchema>;
