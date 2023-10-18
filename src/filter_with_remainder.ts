export function filterWithRemainder<T>(
	array: T[],
	filterFn: (element: T) => boolean
): {
	filtered: T[];
	remainder: T[];
} {
	const filtered = [];
	const remainder = [];
	for (const element of array) {
		if (filterFn(element)) {
			filtered.push(element);
		} else {
			remainder.push(element);
		}
	}
	return { filtered, remainder };
}
