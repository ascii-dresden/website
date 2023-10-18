import { Temporal } from 'temporal-polyfill';

type Temporals =
	| Temporal.Duration
	| Temporal.Instant
	| Temporal.Calendar
	| Temporal.PlainDate
	| Temporal.PlainDateTime
	| Temporal.PlainMonthDay
	| Temporal.PlainTime
	| Temporal.TimeZone
	| Temporal.PlainYearMonth
	| Temporal.ZonedDateTime;

type TemporalParsable<T extends Temporals> = {
	from: (item: T | string) => T;
};

export function checkTemporal<T extends Temporals>(
	value: string,
	temporal: TemporalParsable<T>
): boolean {
	try {
		temporal.from(value);
		return true;
	} catch {
		return false;
	}
}
