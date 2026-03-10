import { parse as parseToml } from "@std/toml";
import type { InferOutput } from "valibot";
import { array, object, optional, parse, pipe, string, transform } from "valibot";

import { mapSnakeKeysToCamel } from "src/snake_to_camel.ts";
import { PlainDateTimeSchema, PlainTimeSchema, PlainYearMonthSchema } from "src/temporal.ts";

import config from "../content/ascii.toml?raw";

export const OpeningHoursDaySchema = optional(
	object({
		close: PlainTimeSchema,
		open: PlainTimeSchema,
	}),
);

export const OpeningHoursSchema = object({
	friday: OpeningHoursDaySchema,
	monday: OpeningHoursDaySchema,
	saturday: OpeningHoursDaySchema,
	sunday: OpeningHoursDaySchema,
	thursday: OpeningHoursDaySchema,
	tuesday: OpeningHoursDaySchema,
	wednesday: OpeningHoursDaySchema,
});

export type OpeningHours = InferOutput<typeof OpeningHoursSchema>;

export const SpecialSchema = pipe(
	object({
		description: string(),
		image: string(),
		image_alt: string(),
		title: string(),
		year_month: PlainYearMonthSchema,
	}),
	transform(mapSnakeKeysToCamel),
);

export type Special = InferOutput<typeof SpecialSchema>;

export const EventSchema = pipe(
	object({
		date_time: PlainDateTimeSchema,
		image: string(),
		image_alt: string(),
		summary: string(),
		title: string(),
	}),
	transform(mapSnakeKeysToCamel),
);

export type Event = InferOutput<typeof EventSchema>;

export const ConfigSchema = pipe(
	object({
		events: array(EventSchema),
		opening_hours: OpeningHoursSchema,
		special: SpecialSchema,
	}),
	transform(mapSnakeKeysToCamel),
);

export type Config = InferOutput<typeof ConfigSchema>;

export const CONFIG: Config = parse(ConfigSchema, parseToml(config));
