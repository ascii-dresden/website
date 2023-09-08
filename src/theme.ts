export type Theme = 'light' | 'dark';

export const THEME_DARK: Theme = 'dark';

export const THEME_ATTRIBUTE = 'data-theme';
export const THEME_LOCAL_STORAGE = 'theme';

export function loadTheme(): Theme {
	// highest priority: user stored theme
	const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE);
	if (storedTheme !== null) {
		return storedTheme as Theme;
	}

	// lower priority: browser
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}

	// fallback
	return 'light';
}

// TODO: Is it possible to make this work in pure CSS?
export function onPreferenceChange(callback: (theme: Theme) => void) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
		callback(matches ? 'dark' : 'light');
	});
}

export function setTheme(theme: Theme) {
	const html = document.documentElement;
	html.setAttribute(THEME_ATTRIBUTE, theme);
	localStorage.setItem(THEME_LOCAL_STORAGE, theme);
}

export function getTheme(): Theme {
	const html = document.documentElement;
	return (html.getAttribute(THEME_ATTRIBUTE) as Theme | null) ?? 'light';
}
