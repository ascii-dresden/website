import { parse as parseToml } from "@std/toml";
import {
	array,
	type InferOutput,
	number,
	object,
	optional,
	parse,
	pipe,
	string,
	transform,
} from "@valibot/valibot";

import { mapSnakeKeysToCamel } from "src/snake_to_camel.ts";
import { PlainDateTimeSchema, PlainTimeSchema, PlainYearMonthSchema } from "src/temporal.ts";

// import config from "../ascii.toml?raw";

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
		title: string(),
		image: string(),
		image_alt: string(),
		summary: string(),
	}),
	transform(mapSnakeKeysToCamel)
);

export type Event = InferOutput<typeof EventSchema>;

export const DrinkSchema = pipe(
	object({
		name: string(),
		image: string(),
		size_litres: number(),
		price: number(),
	})
);

export type Drink = InferOutput<typeof DrinkSchema>;

export const ConfigSchema = pipe(
	object({
		opening_hours: OpeningHoursSchema,
		special: SpecialSchema,
		events: array(EventSchema),
		drinks: array(DrinkSchema),
	}),
	transform(mapSnakeKeysToCamel)
);

export type Config = InferOutput<typeof ConfigSchema>;

// export const CONFIG: Config = parse(ConfigSchema, parseToml(config));

export const CONFIG: Config = {
	drinks: [],
	events: [],
	openingHours: {},
	special: {
		title: "",
		image: "",
		imageAlt: "",
		description: "",
		yearMonth: new Temporal.PlainYearMonth(2000, 1),
	},
};
