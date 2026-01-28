import { pipe } from "@remeda/remeda";
import type { Component } from "solid-js";

import { and, colors, dark, on, transitionTimingFunction } from "src/css.ts";

import { Divider } from "./divider.tsx";

export const Footer: Component = function () {
	return (
		<footer
			style={pipe(
				{
					"background-color": colors.creme,
					color: colors.espresso,
					display: "grid",
					position: "relative",
				}
				// TODO: Dark theme
				// on(dark, {
				// 	"background-color": colors.black,
				// 	color: colors.creme,
				// })
			)}
		>
			<Divider lineColor={colors.espresso} backgroundColor={colors.creme} />
			<ul
				style={pipe(
					{
						display: "grid",
						gap: "32px",
						"grid-template-columns": "1fr 2fr",
						"padding-bottom": "32px",
						"padding-inline": "16px",
						"padding-top": "64px",
					},
					on("@media (min-width: 1024px)", {
						"padding-inline": "64px",
						"grid-template-columns": "repeat(6, minmax(0, 1fr))",
					})
				)}
			>
				<li
					style={{
						"grid-column": "1 / 3",
					}}
				>
					<ul>
						<li>
							<a
								href="mailto:info@ascii-dresden.de"
								style={pipe(
									{
										display: "flex",
									},
									on("&:is(:hover, :focus-visible)", {
										"text-decoration": "underline",
										"text-underline-offset": "0.25rem",
									})
								)}
							>
								info@ascii-dresden.de
							</a>
						</li>
						<li>
							<a
								href="tel:+4935146342221"
								style={pipe(
									{
										display: "flex",
									},
									on("&:is(:hover, :focus-visible)", {
										"text-decoration": "underline",
										"text-underline-offset": "0.25rem",
									})
								)}
							>
								+49 351 46342221
							</a>
						</li>
						<li>
							<p>
								Studentencafé ASCII
								<br />
								Andreas-Pfitzmann-Bau, Raum E016
								<br />
								Nöthnitzer Strasse 46
								<br />
								01187 Dresden
							</p>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<a
								href="/datenschutz"
								style={pipe(
									{
										display: "flex",
									},
									on("&:is(:hover, :focus-visible)", {
										"text-decoration": "underline",
										"text-underline-offset": "0.25rem",
									})
								)}
							>
								Datenschutz
							</a>
						</li>
						<li>
							<a
								href="/impressum"
								style={pipe(
									{
										display: "flex",
									},
									on("&:is(:hover, :focus-visible)", {
										"text-decoration": "underline",
										"text-underline-offset": "0.25rem",
									})
								)}
							>
								Impressum
							</a>
						</li>
					</ul>
				</li>
				<li>
					<ul
						style={{
							display: "flex",
							"flex-direction": "row",
							gap: "16px",
						}}
					>
						<li>
							<a
								href="https://www.instagram.com/asciidresden/"
								style={pipe(
									{
										"border-radius": "8px",
										color: colors.espresso,
										display: "grid",
										height: "3rem",
										"place-items": "center",
										"transition-duration": "100ms",
										"transition-property": "background-color, color",
										"transition-timing-function": transitionTimingFunction,
										width: "3rem",
									},
									on("&:is(:hover, :focus-visible)", {
										"background-color": colors.creme,
									}),
									on(dark, {
										color: colors.creme,
									}),
									on(and(dark, "&:is(:hover, :focus-visible)"), {
										"background-color": colors.espresso,
									})
								)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<title>Instagram icon</title>
									<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
									<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
									<path d="M16.5 7.5v.01" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/ascii-dresden"
								style={pipe(
									{
										"border-radius": "8px",
										color: colors.espresso,
										display: "grid",
										height: "3rem",
										"place-items": "center",
										"transition-duration": "100ms",
										"transition-property": "background-color, color",
										"transition-timing-function": transitionTimingFunction,
										width: "3rem",
									},
									on("&:is(:hover, :focus-visible)", {
										"background-color": colors.creme,
									}),
									on(dark, {
										color: colors.creme,
									}),
									on(and(dark, "&:is(:hover, :focus-visible)"), {
										"background-color": colors.espresso,
									})
								)}
							>
								<svg
									width="32"
									height="32"
									viewBox="0 0 98 98"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>GitHub icon</title>
									<path
										fill="currentColor"
										d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</li>
				<li style={{ "grid-column": "1 / 3" }}>
					&copy; ascii Dresden e.V. {new Date().getFullYear()}
				</li>
			</ul>
		</footer>
	);
};
