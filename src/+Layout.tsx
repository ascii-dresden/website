import { createEffect, createSignal, onMount, type ParentComponent } from "solid-js";

import { loadTheme, saveTheme, type Theme, ThemeContext } from "./theme.ts";

export const Layout: ParentComponent = function (props) {
	const [theme, setTheme] = createSignal<Theme>("system");

	onMount(() => {
		setTheme(loadTheme());
	});

	createEffect(() => {
		saveTheme(theme());
	});

	return <ThemeContext.Provider value={theme()}>{props.children}</ThemeContext.Provider>;
};
