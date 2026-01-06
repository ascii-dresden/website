import { pipe } from "@remeda/remeda";
import type { Component } from "solid-js";

import dither from "src/assets/dither.svg?no-inline";
// HACK: Inlined svg assets are broken in inline css styles
import grain from "src/assets/grain.svg?no-inline";
import { colors, lineThicknessPx, on } from "src/css.ts";

export const Page: Component = function () {
	return (
		<>
			<section
				style={pipe(
					{
						"background-blend-mode": "overlay",
						"background-color": colors.creme,
						"background-image": `url(${grain})`,
						"background-size": "256px",
						color: colors.espresso,
						display: "grid",
						gap: "16px",
					},
					on("@media (min-width: 1024px)", {
						gap: "32px",
						"grid-template-columns": "repeat(6, minmax(0, 1fr))",
						"grid-template-rows": "minmax(0, 1fr) max-content",
						"padding-bottom": "64px",
						"padding-inline": "64px",
					}),
					on("@media (min-width: 1280px)", {
						"grid-template-rows": "repeat(2, 1fr)",
						"padding-inline": "16px",
					})
				)}
			>
				<div
					style={pipe(
						{
							"aspect-ratio": "3 / 2",
							display: "grid",
							"grid-column": "1 / 2",
							"grid-row": "1 / 2",
							"grid-template-columns": "minmax(0, 1fr)",
							"grid-template-rows": "minmax(0, 1fr)",
							"padding-inline": "16px",
						},
						on("@media (min-width: 1024px)", {
							"align-self": "start",
							"grid-column": "3 / 7",
							"grid-row": "1 / 3",
							"padding-inline": 0,
							position: "relative",
						}),
						on("@media (min-width: 1280px)", {
							"align-self": "start",
							"grid-column": "4 / 7",
						})
					)}
				>
					<img
						style={pipe({
							"background-color": colors.milk,
							"border-color": colors.espresso,
							"border-radius": "8px",
							"border-style": "solid",
							"border-width": `${lineThicknessPx}px`,
							overflow: "hidden",
							"z-index": 1,
						})}
						// TODO: Populate
						src=""
						alt="Interior des „Ascii“ Cafés"
						sizes="100vw"
					/>

					{/* Dithered backdrop */}
					<div
						style={{
							"background-image": `url(${dither})`,
							"background-repeat": "repeat",
							"background-size": "8px 8px",
							bottom: "-8px",
							content: '""',
							display: "block",
							left: "-8px",
							position: "absolute",
							right: "8px",
							top: "8px",
						}}
					/>
				</div>
				<div
					style={pipe(
						{
							"grid-column": "1 / 2",
							"grid-row": "3 / 4",
							"margin-right": "16px",
							"padding-bottom": "32px",
							"padding-inline": "32px",
							"padding-top": "16px",
						},
						on("@media (min-width: 1024px)", {
							"grid-column": "1 / span 2",
							"grid-row": "2 / 3",
							padding: 0,
						}),
						on("@media (min-width: 1280px)", {
							"grid-column": "2 / 4",
							"grid-row": "2 / 3",
						})
					)}
				>
					<h1>Willkommen!</h1>
					<p>
						Wir sind ein studentisch geführtes Café in der Fakultät Informatik der TU
						Dresden. Bei uns gibt es Snacks, Kalt- und Heißgetränke, sowie Sofas als
						idealen Ort zum Verweilen und Austauschen mit anderen Studierenden.
					</p>
				</div>
			</section>
		</>
	);
};
