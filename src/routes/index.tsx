import { createFileRoute } from "@tanstack/solid-router";
import { pipe } from "remeda";

import cafeImg from "src/assets/cafe.webp";
import grainImg from "src/assets/grain.svg?no-inline";
import { A } from "src/components/a.tsx";
import { Dither } from "src/components/dither.tsx";
import { Divider } from "src/components/divider.tsx";
import { H1, H2, H3 } from "src/components/heading.tsx";
import { Paper } from "src/components/paper.tsx";
import { CONFIG } from "src/config.ts";
import { colors, lineThicknessPx, on } from "src/css.ts";

export const Route = createFileRoute("/")({
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
						color: colors.espresso,
						display: "grid",
						gap: "16px",
						"padding-bottom": "80px",
						"padding-inline": "16px",
					},
					on("@media (min-width: 480px)", {
						gap: "32px",
						"padding-bottom": "96px",
						"padding-inline": "64px",
					}),
					on("@media (min-width: 768px)", {
						"align-items": "center",
						"grid-template-columns": "repeat(4, [main] minmax(0, 1fr)) [main]",
					}),
					on("@media (min-width: 1024px)", {
						"align-items": "center",
						"grid-template-columns": "repeat(6, [main] minmax(0, 1fr)) [main]",
						"padding-bottom": "96px",
						"padding-inline": "64px",
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
				<div
					style={pipe(
						{
							"background-color": colors.light_teal,
							color: colors.dark_teal,
							padding: "16px",
							"margin-top": "16px",
							"border-radius": "8px",
							"border-width": `${lineThicknessPx}px`,
							"text-align": "center",
							"text-wrap": "balance",
						},
						on("@media (min-width: 768px)", {
							"grid-row": 1,
							"grid-column-start": "main 1",
							"grid-column-end": "main -1",
						}),
						on("@media (min-width: 1024px)", {
							gap: "16px",
						}),
					)}
				>
					Wir brauchen neue Mitglieder!
					<a href="/verein#mitglied-werden">
						{" "}
						{">>>"}Mach mit!{"<<<"}{" "}
					</a>
				</div>
				<div
					style={pipe(
						{
							"aspect-ratio": "3 / 2",
							position: "relative",
						},
						on("@media (min-width: 768px)", {
							"grid-row": 2,
							"grid-column-start": "span 2",
							"grid-column-end": "main -1",
						}),
						on("@media (min-width: 1024px)", {
							"grid-column-start": "span 4",
							"grid-column-end": "main -1",
						}),
					)}
				>
					<Dither
						style={{
							position: "absolute",
							translate: "-6px 6px",
							inset: 0,
						}}
					/>
					<img
						src={cafeImg}
						alt="Interior des ascii Cafés"
						style={{
							position: "relative",
							width: "100%",
							height: "100%",
							"background-color": colors.milk,
							"border-color": colors.espresso,
							"border-radius": "8px",
							"border-style": "solid",
							"border-width": `${lineThicknessPx}px`,
						}}
					/>
				</div>
				<div
					style={pipe(
						{
							display: "flex",
							"flex-direction": "column",
							"row-gap": "16px",
						},
						on("@media (min-width: 768px)", {
							"grid-row": 2,
							"grid-column-start": 1,
							"grid-column-end": "span 2",
						}),
						on("@media (min-width: 1024px)"),
						on("@media (min-width: 1280px)", {
							"grid-column-start": 2,
						}),
					)}
				>
					<H1
						style={{
							"font-size": "3rem",
							"line-height": "3rem",
							"-webkit-text-stroke-color": colors.espresso,
							"-webkit-text-stroke-width": "6px",
							"paint-order": "markers stroke fill",
							color: colors.milk,
						}}
					>
						Willkommen!
					</H1>
					<Paper style={{ padding: "16px" }}>
						<p>
							Wir sind das studentisch gef&shy;führte Café in der Fakultät Informatik der TU
							Dresden. Bei uns gibt es Snacks, Kalt- und Heiß&shy;getränke, und Sofas!
						</p>
					</Paper>
				</div>
			</section>
			<Divider lineColor={colors.black} backgroundColor={colors.milk} />
			<section
				style={pipe(
					{
						color: colors.espresso,
						"background-color": colors.milk,
						display: "grid",
						gap: "16px",
						"padding-block": "32px",
						"padding-inline": "32px",
					},
					on("@media (min-width: 480px)", {
						"padding-block": "64px",
						"padding-inline": "64px",
					}),
				)}
			>
				<H2
					style={pipe(
						{},
						on("@media (min-width: 1024px)", {
							"grid-column": "3 / 7",
						}),
					)}
				>
					Events
				</H2>
				<ol
					style={pipe(
						{
							display: "grid",
							gap: "16px",
						},
						on("@media (min-width: 1024px)", {
							"grid-column": "1 / 3",
						}),
					)}
				>
					{CONFIG.events.map((event) => (
						<li
							style={pipe({
								display: "grid",
							})}
						>
							<img src={event.image} alt={event.imageAlt} />
							<time datetime={event.dateTime.toString()}>
								{event.dateTime.toLocaleString("de-DE", {
									year: "2-digit",
									month: "2-digit",
									day: "2-digit",
								})}
								<span>&nbsp;/&nbsp;</span>
								{event.dateTime.toLocaleString("de-DE", {
									hour: "numeric",
									minute: "numeric",
								})}
							</time>
							<H3>{event.title}</H3>
						</li>
					))}
				</ol>
			</section>
		</main>
	);
}
