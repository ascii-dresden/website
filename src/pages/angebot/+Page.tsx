import { type Component, For } from "solid-js";

import { Divider } from "src/components/divider.tsx";
import { H2 } from "src/components/heading.tsx";
import { CONFIG } from "src/config.ts" with { type: "macro" };
import { colors, lineThicknessPx } from "src/css.ts";

export const Page: Component = function () {
	return (
		<main>
			<section>
				<H2>Heißgetränke</H2>
			</section>
			<Divider lineColor={colors.dark_teal} backgroundColor={colors.light_teal} />
			<section
				style={{
					"background-color": colors.light_teal,
					color: colors.dark_teal,
				}}
			>
				<H2>Kaltgetränke</H2>
				<ul
					style={{
						display: "grid",
					}}
				>
					<For each={CONFIG.drinks}>
						{(drink) => (
							<li
								style={{
									"background-color": colors.milk,
									"border-width": `${lineThicknessPx}px`,
									"border-color": colors.espresso,
								}}
							>
								<h3>{drink.name}</h3>
								<img src={drink.image} alt="" />
							</li>
						)}
					</For>
				</ul>
			</section>
		</main>
	);
};
