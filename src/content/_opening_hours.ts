import { Intl, Temporal } from 'temporal-polyfill';
import { parse, object, string, array, coerce, regex, transform, Output } from 'valibot';
import { load } from 'js-yaml';

import openingHoursYaml from 'src/content/_opening_hours.yaml?raw';

type Day = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

type OpeningHoursDays = Day | Day[] | { from: Day; to: Day };

const dayRegex = '(?:Mo|Tu|We|Th|Fr|Sa|Su)';
const daysRegex = new RegExp(`^${dayRegex}(?:-${dayRegex}|(?:,${dayRegex})*)?$`);

function parseDays(days: string): OpeningHoursDays {
	if (days.includes(',')) {
		return days.split(',') as Day[];
	}

	if (days.includes('-')) {
		const [from, to] = days.split('-') as [Day, Day];
		return { from, to };
	}

	return days as Day;
}

const openingHoursSchema = array(
	transform(
		object({
			days: string([regex(daysRegex)]),
			opens: coerce(string(), String),
			closes: coerce(string(), String),
		}),
		({ days, opens, closes }) => ({
			days: parseDays(days),
			opens: Temporal.PlainTime.from(opens),
			closes: Temporal.PlainTime.from(closes),
		})
	)
);

export type OpeningHours = Output<typeof openingHoursSchema>;

const dayToLocale: Record<Day, string> = {
	Mo: 'Montag',
	Tu: 'Dienstag',
	We: 'Mittwoch',
	Th: 'Donnerstag',
	Fr: 'Freitag',
	Sa: 'Samstag',
	Su: 'Sonntag',
};

export function daysToLocaleString(days: OpeningHoursDays): string {
	if (typeof days === 'string') {
		return dayToLocale[days];
	}

	if (Array.isArray(days)) {
		return days.map((day) => dayToLocale[day]).join(', ');
	}

	return `${dayToLocale[days.from]} bis ${dayToLocale[days.to]}`;
}

export const fetchOpeningHours = function (): OpeningHours {
	const drinkOfMonthRaw = load(openingHoursYaml);
	return parse(openingHoursSchema, drinkOfMonthRaw);
};
