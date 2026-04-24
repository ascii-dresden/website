import { createFileRoute } from "@tanstack/solid-router";
import { pipe } from "remeda";

import grainImg from "src/assets/grain.svg?no-inline";
import { Divider } from "src/components/divider.tsx";
import { H2, H4 } from "src/components/heading.tsx";
import { Paper } from "src/components/paper.tsx";
import { coldDrinks, hotDrinks } from "src/content.ts";
import { colors, lineThicknessPx, on } from "src/css.ts";
import { prng } from "src/prng.ts";

const random = prng(-1.5, 1.5, 0.75);

export const Route = createFileRoute("/angebot")({
	component: Index,
});

function Index() {
	return (
		<main>
			<section
				style={pipe(
					{
						"background-blend-mode": "overlay",
						"background-color": colors.creme,
						"background-image": `url(${grainImg})`,
						"background-size": "256px",
						display: "grid",
						"grid-template-columns": "[main] minmax(0, 1fr) [main]",
						gap: "32px",
						"padding-inline": "32px",
						"padding-top": "32px",
						"padding-bottom": "80px",
					},
					on("@media (min-width: 480px)", {
						"padding-inline": "64px",
						"padding-bottom": "96px",
					}),
					on("@media (min-width: 768px)", {
						"grid-template-columns": "repeat(4, [main] minmax(0, 1fr)) [main]",
					}),
					on("@media (min-width: 1024px)", {
						gap: "32px",
						"align-items": "center",
						"grid-template-columns": "repeat(6, [main] minmax(0, 1fr)) [main]",
						"padding-top": "64px",
					}),
					on("@media (min-width: 1280px)", {
						"grid-template-columns": [
							"minmax(0, 1fr)",
							"repeat(6, [main] minmax(0, 1fr))",
							"[main] minmax(0, 1fr)",
						].join(" "),
						"padding-inline": 0,
					}),
				)}
			>
				<H2
					style={pipe(
						{
							"font-size": "64px",
							"grid-column-start": "main 1",
							"grid-column-end": "main -1",
							"justify-self": "start",
							"-webkit-text-stroke-color": colors.espresso,
							"-webkit-text-stroke-width": "8px",
							"paint-order": "markers stroke fill",
							color: colors.milk,
							rotate: "1deg",
						},
						on("@media (min-width: 1024px)", {
							"font-size": "96px",
							"-webkit-text-stroke-width": "10px",
						}),
					)}
				>
					Heiß&shy;getränke
				</H2>
				<ul
					style={{
						display: "grid",
						"align-items": "center",
						"grid-template-columns": "subgrid",
						"grid-column-start": "main 1",
						"grid-column-end": "main -1",
						"row-gap": "32px",
					}}
				>
					{hotDrinks.map((hotDrink) => (
						<li
							style={pipe(
								{
									display: "grid",
									gap: "16px",
									"grid-template-columns": "minmax(0, 1fr)",
									"grid-template-rows": "max-content max-content",
									rotate: `${random()}deg`,
								},
								on("@media (min-width: 768px)", {
									"grid-column-end": "span 2",
								}),
							)}
						>
							<Paper
								style={{
									"grid-column-start": "1",
									"grid-column-end": "-1",
									"grid-row-start": "1",
									"grid-row-end": "-1",
								}}
							/>
							<div
								style={{
									"grid-column-start": "1",
									"grid-row-start": "1",
									"z-index": "1",
									padding: "16px",
									"border-bottom-style": "dotted",
									"border-bottom-width": `${lineThicknessPx + 1}px`,
								}}
							>
								<H4>{hotDrink.name}</H4>
								<p>
									{new Intl.NumberFormat(undefined, {
										style: "currency",
										currency: "EUR",
									}).format(hotDrink.price)}
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>
			<Divider lineColor={colors.dark_teal} backgroundColor={colors.light_teal} />
			<section
				style={pipe(
					{
						"background-color": colors.light_teal,
						color: colors.dark_teal,
						display: "grid",
						gap: "32px",
						"padding-inline": "32px",
						"padding-top": "32px",
						"padding-bottom": "80px",
					},
					on("@media (min-width: 480px)", {
						"padding-inline": "64px",
						"padding-top": "64px",
						"padding-bottom": "96px",
					}),
					on("@media (min-width: 768px)", {
						"grid-template-columns": "repeat(4, [main] minmax(0, 1fr)) [main]",
					}),
					on("@media (min-width: 1024px)", {
						"align-items": "center",
						"grid-template-columns": "repeat(6, [main] minmax(0, 1fr)) [main]",
					}),
					on("@media (min-width: 1280px)", {
						"grid-template-columns": [
							"minmax(0, 1fr)",
							"repeat(6, [main] minmax(0, 1fr))",
							"[main] minmax(0, 1fr)",
						].join(" "),
						"padding-inline": 0,
					}),
				)}
			>
				<H2
					style={pipe(
						{
							"font-size": "64px",
							"grid-column-start": "main 1",
							"grid-column-end": "main -1",
							"justify-self": "start",
							"-webkit-text-stroke-color": colors.dark_teal,
							"-webkit-text-stroke-width": "8px",
							"paint-order": "markers stroke fill",
							color: colors.milk,
							rotate: "-1.5deg",
						},
						on("@media (min-width: 1024px)", {
							"font-size": "96px",
							"-webkit-text-stroke-width": "10px",
						}),
					)}
				>
					Kalt&shy;getränke
				</H2>
				{coldDrinks.map((drink) => (
					<Paper
						as="li"
						style={{
							"grid-column-end": "span 2",
							position: "relative",
							"padding-block": "16px",
							"padding-right": "16px",
							"padding-left": "32px",
							rotate: `${random()}deg`,
						}}
					>
						<H4>{drink.name}</H4>
						{/* TODO: Image with imagetools */}
						<p>
							{new Intl.NumberFormat(undefined, {
								style: "currency",
								currency: "EUR",
							}).format(drink.price)}
						</p>
						<p>{drink.size_litres}L</p>
					</Paper>
				))}
			</section>
		</main>
	);
}
