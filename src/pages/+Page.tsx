import { pipe } from "@remeda/remeda";
import { type Component, For } from "solid-js";

import dither from "src/assets/dither.svg?no-inline";
// HACK: Inlined svg assets are broken in inline css styles
import grain from "src/assets/grain.svg?no-inline";
import { Divider } from "src/components/divider.tsx";
import { CONFIG } from "src/config.ts";
import { colors, lineThicknessPx, on, transitionTimingFunction } from "src/css.ts";

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
					<h1
						style={{
							"font-family": "Bonbance",
							"font-size": "3rem",
							// Half of the stroke width is covered by the fill color
							"-webkit-text-stroke-color": colors.espresso,
							"-webkit-text-stroke-width": `6px`,
							"paint-order": "markers stroke fill",
							color: colors.milk,
						}}
					>
						Willkommen!
					</h1>
					<p>
						Wir sind ein studentisch geführtes Café in der Fakultät Informatik der TU
						Dresden. Bei uns gibt es Snacks, Kalt- und Heißgetränke, sowie Sofas als
						idealen Ort zum Verweilen und Austauschen mit anderen Studierenden.
					</p>
				</div>
			</section>
			<Divider lineColor={colors.black} backgroundColor={colors.milk} />
			<section
				style={{
					"padding-top": "64px",
					"background-color": colors.milk,
				}}
			>
				<div
					style={pipe(
						{},
						on("@media (min-width: 1024px)", {
							"align-items": "end",
						})
					)}
				>
					{/* TODO: reconstruct interacive pager from solid primitives */}
					<ol
						style={pipe(
							{
								display: "flex",
								gap: "16px",
							},
							on("@media (min-width: 1024px)", {
								"grid-column": "1 / 3",
							})
						)}
					>
						<For each={CONFIG.events}>
							{(event, i) => (
								<li
									style={pipe(
										{
											height: "32px",
											width: "32px",
											"flex-grow": "1",
											"transition-duration": "100ms",
											"transition-timing-function": transitionTimingFunction,
											"transition-property": "flex-grow",
										},
										// TODO: This should query if pager item is selected
										on("&[data-state=open]", {
											"flex-grow": "3",
										})
									)}
								>
									<button
										type="button"
										style={{
											height: "100%",
											width: "100%",
											display: "flex",
											"align-items": "center",
											"justify-content": "center",

											"border-bottom-width": `${lineThicknessPx}px`,
											"border-bottom-style": "dotted",
											"border-bottom-color": colors.espresso,
										}}
									>
										{i() + 1}
									</button>
								</li>
							)}
						</For>
					</ol>
					<h2
						style={pipe(
							{
								"font-family": "Bonbance",
							},
							on("@media (min-width: 1024px)", {
								"grid-column": "3 / 7",
							})
						)}
					>
						Events
					</h2>
				</div>
			</section>
		</>
	);
};
