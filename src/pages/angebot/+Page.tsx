import { ResponsiveImage } from "@responsive-image/solid";
import { type Component, For } from "solid-js";
import { useData } from "vike-solid/useData";

import { Divider } from "src/components/divider.tsx";
import { H2 } from "src/components/heading.tsx";
import { colors, lineThicknessPx } from "src/css.ts";

import type { Data } from "./+data.ts";

export const Page: Component = function () {
	const data = useData<Data>();

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
					<For each={data.config.drinks}>
						{(drink) => (
							<li
								style={{
									"background-color": colors.milk,
									"border-width": `${lineThicknessPx}px`,
									"border-color": colors.espresso,
								}}
							>
								<h3>{drink.name}</h3>
								<ResponsiveImage src={drink.image} />
							</li>
						)}
					</For>
				</ul>
			</section>
		</main>
	);
};
