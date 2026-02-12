import { pipe } from "remeda";
import { type Component, For } from "solid-js";

import assetCafe from "src/assets/cafe.webp";
// HACK: Inlined svg assets are broken in inline css styles
import assetGrain from "src/assets/grain.svg?no-inline";
import { Divider, dividerHeightPx } from "src/components/divider.tsx";
import { H1, H2 } from "src/components/heading.tsx";
import { Surface } from "src/components/surface.tsx";
import { CONFIG } from "src/config.ts" with { type: "macro" };
import { colors, lineThicknessPx, on, transitionTimingFunction } from "src/css.ts";

import { Paper } from "../components/paper.tsx";

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
						"padding-bottom": `${16 + dividerHeightPx}px`,
						"padding-inline": "16px",
					},
					on("@media (min-width: 1024px)", {
						gap: "32px",
						"align-items": "center",
						"grid-template-columns": "repeat(6, [main] minmax(0, 1fr)) [main]",
						"padding-bottom": `${64 + dividerHeightPx}px`,
						"padding-inline": "64px",
					}),
					on("@media (min-width: 1280px)", {
						"grid-template-columns": [
							"minmax(0, 1fr)",
							"repeat(6, [main] minmax(0, 1fr))",
							"[main] minmax(0, 1fr)",
						].join(" "),
						"padding-inline": 0,
					})
				)}
			>
				<div
					style={pipe(
						{
							"aspect-ratio": "3 / 2",
						},
						on("@media (min-width: 1024px)", {
							"grid-row": 1,
							"grid-column-start": "main 3",
							"grid-column-end": "main -1",
						})
					)}
				>
					<Surface
						as="img"
						// TODO: Optimize
						src={assetCafe}
						alt="Interior des „Ascii“ Cafés"
						sizes="100vw"
					></Surface>
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
					<Paper style={{ padding: "16px" }}>
						<p>
							Wir sind ein studentisch ge&shy;führtes Café in der Fakultät Informatik
							der TU Dresden. Bei uns gibt es Snacks, Kalt- und Heiß&shy;getränke,
							so&shy;wie Sofas als idealen Ort zum Ver&shy;weilen und Aus&shy;tauschen
							mit anderen Studie&shy;renden.
						</p>
					</Paper>
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
										on('&[data-state="open"]', {
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
