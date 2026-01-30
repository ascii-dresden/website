import { pipe } from "@remeda/remeda";
import type { Component } from "solid-js";

import { Divider } from "src/components/divider.tsx";
import { and, colors, dark, on, transitionTimingFunction } from "src/css.ts";

import { A } from "./a.tsx";
import ascii from "./footer_art.txt?raw";

export const Footer: Component = function () {
	return (
		<>
			<Divider lineColor={colors.black} backgroundColor={colors.espresso} />
			<footer
				style={pipe(
					{
						"background-color": colors.espresso,
						color: colors.creme,
						display: "grid",
						position: "relative",
						padding: "32px",
						"grid-template-columns": "repeat(2, [main] minmax(0, 1fr)) [main]",
						gap: "32px",
					},
					on("@media (min-width: 480px)", {}),
					on("@media (min-width: 1024px)", {
						"grid-template-columns": "repeat(6, [main] minmax(0, 1fr)) [main]",
						padding: "64px",
					}),
					on("@media (min-width: 1280px)", {
						"grid-template-columns": [
							"minmax(0, 1fr)",
							"repeat(4, [main] minmax(0, 1fr))",
							"[main] minmax(0, 1fr)",
						].join(" "),
					})
					// TODO: Dark theme
					// on(dark, {
					// 	"background-color": colors.black,
					// 	color: colors.creme,
					// })
				)}
			>
				<pre
					style={{
						"grid-column-start": "main",
						"grid-column-end": "main -1",
					}}
				>
					<code>{ascii}</code>
				</pre>
				<address
					style={pipe(
						{
							display: "grid",
							"grid-auto-rows": "max-content",
							"grid-column-end": "main -1",
							"grid-column-start": "main",
							"justify-items": "start",
							"row-gap": "16px",
						},
						on("@media (min-width: 1024px)", {
							"grid-column-end": "span 2",
						})
					)}
				>
					<A href="mailto:info@ascii-dresden.de">info@ascii-dresden.de</A>
					<A href="tel:+4935146342221">+49 351 46342221</A>
					<p>
						ascii&nbsp;Dresden&nbsp;e.V.
						<br />
						Andreas-Pfitzmann-Bau, Raum&nbsp;E016
						<br />
						Nöthnitzer&nbsp;Strasse&nbsp;46
						<br />
						01187&nbsp;Dresden
					</p>
				</address>
				<ul
					style={{
						display: "grid",
						"row-gap": "16px",
						"grid-auto-rows": "max-content",
						"justify-items": "start",
						"align-items": "start",
					}}
				>
					<li>
						<A href="/angebot">Angebot</A>
					</li>
					<li>
						<A href="/catering">Catering</A>
					</li>
					<li>
						<A href="/verein">Verein</A>
					</li>
				</ul>
				<ul
					style={{
						display: "grid",
						"row-gap": "16px",
						"grid-auto-rows": "max-content",
						"justify-items": "start",
						"align-items": "start",
					}}
				>
					<li>
						<A href="https://github.com/ascii-dresden">GitHub</A>
					</li>
					<li>
						<A href="https://www.instagram.com/asciidresden">Instagram</A>
					</li>
				</ul>
				<ul
					style={pipe({
						display: "grid",
						"row-gap": "16px",
						"grid-auto-rows": "max-content",
						"justify-items": "start",
						"align-items": "start",
					})}
				>
					<li>
						<A href="/datenschutz">Datenschutz</A>
					</li>
					<li>
						<A href="/impressum">Impressum</A>
					</li>
				</ul>
				<p
					style={pipe(
						{
							"grid-column-start": "main",
							"grid-column-end": "main -1",
						},
						on("@media (min-width: 1024px)", {
							"grid-column-end": "main 4",
						}),
						on("@media (min-width: 1280px)", {
							"grid-column-end": "main 3",
						})
					)}
				>
					&copy; ascii Dresden e.V. {new Date().getFullYear()}
				</p>
				<p
					style={pipe(
						{
							"grid-column-start": "main 1",
							"grid-column-end": "main -1",
						},
						on("@media (min-width: 1024px)", {
							"grid-column-start": "main 4",
						}),
						on("@media (min-width: 1280px)", {
							"grid-column-start": "main 3",
						})
					)}
				>
					Designed with {"<3"} by{" "}
					<A href="https://github.com/emonadeo">Emanuel&nbsp;Pilz</A>
				</p>
			</footer>
		</>
	);
};
