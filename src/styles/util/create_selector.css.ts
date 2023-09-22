export function create_selector(sel: string): (selector?: string) => string {
	return function (selector?: string): string {
		if (!selector) {
			return `&${sel}`;
		}

		return selector
			.split(',')
			.map((s) => `${s.trim()}${sel} &`)
			.join(',');
	};
}
