import { z } from 'astro:content';
import { Temporal } from 'temporal-polyfill';
import 'temporal-polyfill/global';

export const PlainDateSchema = z.union([z.string(), z.date()]).transform((value, ctx) => {
	// convert `Date` to `Temporal.PlainDate`
	if (value instanceof Date) {
		const timeZone = Temporal.Now.timeZoneId();
		return value.toTemporalInstant().toZonedDateTimeISO(timeZone).toPlainDate();
	}

	// try to convert `string` to `Temporal.PlainDate`
	try {
		return Temporal.PlainDate.from(value);
	} catch (err) {
		ctx.addIssue({ code: z.ZodIssueCode.invalid_date });
		return z.NEVER;
	}
});

export const PlainDateTimeSchema = z.union([z.string(), z.date()]).transform((value, ctx) => {
	// convert `Date` to `Temporal.PlainDateTime`
	if (value instanceof Date) {
		const timeZone = Temporal.Now.timeZoneId();
		return value.toTemporalInstant().toZonedDateTimeISO(timeZone).toPlainDateTime();
	}

	// try to convert `string` to `Temporal.PlainDateTime`
	try {
		return Temporal.PlainDateTime.from(value);
	} catch (err) {
		ctx.addIssue({ code: z.ZodIssueCode.invalid_date });
		return z.NEVER;
	}
});
