/**
 * Seeded pseudorandom number generator based on SplitMix32.
 * See {@link https://github.com/bryc/code/blob/master/jshash/PRNGs.md#splitmix32}
 */
export function splitmix32(seed: number): () => number {
	let s = seed;
	return function () {
		s |= 0;
		s = (s + 0x9e3779b9) | 0;
		let t = s ^ (s >>> 16);
		t = Math.imul(t, 0x21f0aaad);
		t ^= t >>> 15;
		t = Math.imul(t, 0x735a2d97);
		return ((t ^ (t >>> 15)) >>> 0) / 4_294_967_296;
	};
}

/**
 * Randomly generate a multiple of `stepSize` between `min` and `max` (inclusive).
 * Two consecutive generations are never the same value.
 *
 * @example
 * const value = prng(-1, 2, 0.5)
 * // value is one of [-1, -0.5, 0, 0.5, 1, 1.5, 2]
 */
export function prng(min: number, max: number, stepSize: number): () => number {
	const random = splitmix32(2);
	let lastValue = Number.NaN;
	return function (): number {
		while (true) {
			const value =
				Math.trunc(random() * (Math.trunc((max - min) / stepSize) + 1)) * stepSize + min;
			if (value !== lastValue) {
				lastValue = value;
				return value;
			}
			lastValue = value;
		}
	};
}
