import { createEffect, createSignal, onMount, type ParentComponent } from "solid-js";

import { Footer } from "src/components/footer.tsx";
import { loadTheme, saveTheme, type Theme, ThemeContext } from "src/theme.ts";

export const Layout: ParentComponent = function (props) {
	const [theme, setTheme] = createSignal<Theme>("system");

	onMount(() => {
		setTheme(loadTheme());
	});

	createEffect(() => {
		saveTheme(theme());
	});

	return (
		<ThemeContext.Provider value={theme()}>
			<div>{props.children}</div>
			<Footer />
		</ThemeContext.Provider>
	);
};
