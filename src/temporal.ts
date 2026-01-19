import { date, pipe, string, transform, union } from "@valibot/valibot";
// TODO: Remove polyfill once Temporal API is baseline
// See: <https://caniuse.com/temporal>
import "temporal-polyfill/global";

export const LOCAL_TIME_ZONE = "Europe/Berlin";

export const PlainDateTimeSchema = pipe(
	union([string(), date()]),
	transform((input) => {
		if (typeof input === "string") {
			// TODO: Error handling (`Temporal.PlainDateTime.from` throws an error on invalid inputs)
			return Temporal.PlainDateTime.from(input);
		}
		return input.toTemporalInstant().toZonedDateTimeISO(LOCAL_TIME_ZONE).toPlainDateTime();
	})
);

export const PlainTimeSchema = pipe(
	string(),
	// TODO: Error handling (`Temporal.PlainTime.from` throws an error on invalid inputs)
	transform((input) => Temporal.PlainTime.from(input))
);

export const PlainYearMonthSchema = pipe(
	string(),
	// TODO: Error handling (`Temporal.PlainYearMonth.from` throws an error on invalid inputs)
	transform((input) => Temporal.PlainYearMonth.from(input))
);
