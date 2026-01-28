import { pipe } from "@remeda/remeda";
import { type Component, For } from "solid-js";

import assetCafe from "src/assets/cafe.webp";
// HACK: Inlined svg assets are broken in inline css styles
import assetDither from "src/assets/dither.svg?no-inline";
import assetGrain from "src/assets/grain.svg?no-inline";
import { Divider } from "src/components/divider.tsx";
import { H1, H2 } from "src/components/heading.tsx";
import { CONFIG } from "src/config.ts";
import { colors, lineThicknessPx, on, transitionTimingFunction } from "src/css.ts";

export const Page: Component = function () {
	return (
		<main>
			<section
				style={pipe(
					{
						"background-blend-mode": "overlay",
						"background-color": colors.creme,
						"background-image": `url(${assetGrain})`,
						"background-size": "256px",
						color: colors.espresso,
						display: "grid",
						gap: "16px",
						"padding-inline": "16px",
					},
					on("@media (min-width: 1024px)", {
						gap: "32px",
						"align-items": "center",
						"grid-template-columns": "repeat(6, minmax(0, 1fr))",
						"padding-bottom": "64px",
						"padding-inline": "64px",
					})
				)}
			>
				<div
					style={pipe(
						{
							"aspect-ratio": "3 / 2",
							position: "relative",
						},
						on("@media (min-width: 1024px)", {
							"grid-row": 1,
							"grid-column-start": 3,
							"grid-column-end": -1,
						}),
						on("@media (min-width: 1280px)", {
							"grid-column-start": 4,
							"grid-column-end": -1,
						})
					)}
				>
					{/* Dithered backdrop */}
					<div
						style={{
							"background-image": `url(${assetDither})`,
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
					<img
						style={pipe({
							position: "relative",
							width: "100%",
							height: "100%",
							"background-color": colors.milk,
							"border-color": colors.espresso,
							"border-radius": "8px",
							"border-style": "solid",
							"border-width": `${lineThicknessPx}px`,
							overflow: "hidden",
						})}
						// TODO: Optimize
						src={assetCafe}
						alt="Interior des „Ascii“ Cafés"
						sizes="100vw"
					/>
				</div>
				<div
					style={pipe(
						{
							display: "flex",
							"flex-direction": "column",
							"row-gap": "16px",
							"padding-bottom": "32px",
							"padding-inline": "32px",
							"padding-top": "16px",
						},
						on("@media (min-width: 1024px)", {
							"grid-row": 1,
							"grid-column-start": 1,
							"grid-column-end": "span 2",
							padding: 0,
						}),
						on("@media (min-width: 1280px)", {
							"grid-column-start": 2,
						})
					)}
				>
					<H1
						style={{
							"font-size": "3rem",
							"line-height": "3rem",
							// Half of the stroke width is covered by the fill color
							"-webkit-text-stroke-color": colors.espresso,
							"-webkit-text-stroke-width": `6px`,
							"paint-order": "markers stroke fill",
							color: colors.milk,
						}}
					>
						Willkommen!
					</H1>
					<p>
						Wir sind ein studentisch ge&shy;führtes Café in der Fakultät Informatik der
						TU Dresden. Bei uns gibt es Snacks, Kalt- und Heiß&shy;getränke, sowie Sofas
						als idealen Ort zum Verweilen und Aus&shy;tauschen mit anderen Studierenden.
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
					{/* TODO: reconstruct interactive pager from solid primitives */}
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
					<H2
						style={pipe(
							{},
							on("@media (min-width: 1024px)", {
								"grid-column": "3 / 7",
							})
						)}
					>
						Events
					</H2>
				</div>
			</section>
		</main>
	);
};
