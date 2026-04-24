import { createFileRoute } from "@tanstack/solid-router";
import { pipe } from "remeda";

import { H1, H2, H3 } from "src/components/heading.tsx";
import { colors, lineThicknessPx, on } from "src/css.ts";

export const Route = createFileRoute("/datenschutz")({
	component: Index,
});

function Index() {
	return (
		<main
			style={pipe(
				{
					"border-top-color": colors.black,
					"border-top-width": `${lineThicknessPx}px`,
					"background-color": colors.milk,
					display: "grid",
					"padding-inline": "16px",
					"padding-block": "32px",
				},
				on("@media (min-width: 1024px)", {
					"padding-inline": "64px",
					"padding-block": "64px",
				}),
				on("@media (min-width: 1280px)", {
					"grid-template-columns": "repeat(6, minmax(0, 1fr))",
					"column-gap": "32px",
				}),
			)}
		>
			<div
				style={pipe(
					{
						display: "flex",
						"flex-direction": "column",
						"row-gap": "32px",
						"text-wrap": "balance",
					},
					on("@media (min-width: 1280px)", {
						"grid-column": "2 / -2",
					}),
				)}
			>
				<H1>Datenschutz&shy;erklärung</H1>
				<H2>Datenschutz auf einen Blick</H2>
				<H3>Allgemeine Hinweise</H3>
				<p>
					Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
					personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
				</p>
			</div>
		</main>
	);
}
