import { createEffect, createSignal, onMount, type ParentComponent } from "solid-js";

import { Footer } from "src/components/footer.tsx";
import { Header } from "src/components/header.tsx";
import { colors } from "src/css.ts";
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
			<div
				style={{
					"background-color": colors.creme,
					"font-family": "Maple Mono",
					// See demo at <https://font.subf.dev/en/playground/>
					"font-feature-settings": [
						// Disable default ligatures
						'"calt" off',
						// Remove gaps
						'"cv01"',
						// Alternative a
						'"cv02"',
						// Alternative g
						'"cv05"',
						// Alternative r
						'"cv08"',
						// Alternative comma
						'"cv61"',
						// Alternative italic a
						'"cv31"',
						// Alternative italic i and j
						'"cv33"',
						// Alternative italic l
						'"cv35"',
						// Alternative italic g
						'"cv38"',
						// Alternative italic r
						'"cv41"',
					].join(", "),
				}}
			>
				<Header />
				<div>{props.children}</div>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
};
