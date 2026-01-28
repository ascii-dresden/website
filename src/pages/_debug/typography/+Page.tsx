import { pipe } from "@remeda/remeda";
import type { Component } from "solid-js";

import { H1, H2, H3, H4 } from "src/components/heading.tsx";
import { on } from "src/css.ts";

export const Page: Component = function () {
	return (
		<div
			style={pipe(
				{
					display: "flex",
					"row-gap": "16px",
					"flex-direction": "column",
					padding: "16px",
				},
				on("@media (min-width: 1024px)", {
					padding: "64px",
				})
			)}
		>
			<H1>Lorem ipsum</H1>
			<H2>Lorem ipsum</H2>
			<H3>Lorem ipsum</H3>
			<H4>Lorem ipsum</H4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum deleniti
				adipisci placeat odio? Recusandae ut, quas ipsam inventore in eaque error ratione
				eius vel nisi eum. Nobis, ratione consequatur.
			</p>
		</div>
	);
};
