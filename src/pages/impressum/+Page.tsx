import { pipe } from "@remeda/remeda";
import type { Component } from "solid-js";

import { H1, H2 } from "src/components/heading.tsx";
import { colors, lineThicknessPx, on } from "src/css.ts";

export const Page: Component = function () {
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
				})
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
					})
				)}
			>
				<H1>Impressum</H1>
				<H2>Adresse</H2>
				<p>
					Studentencafé ASCII
					<br />
					Andreas-Pfitzmann-Bau, Raum E016
					<br />
					Nöthnitzer Strasse 46
					<br />
					01187 Dresden
				</p>
				<H2>E-Mail-Adresse</H2>
				<a href="mailto:info@ascii-dresden.de">
					<p>info@ascii-dresden.de</p>
				</a>
				<H2>Telefonnummer</H2>
				<a href="tel:+4935146342221">
					<p>+49 351 46342221</p>
				</a>
				<H2>GitHub</H2>
				<a href="https://github.com/ascii-dresden">
					<p>ascii-dresden</p>
				</a>
				<H2>Instagram</H2>
				<a href="https://www.instagram.com/asciidresden/">
					<p>@asciidresden</p>
				</a>
			</div>
		</main>
	);
};
