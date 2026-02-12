import { merge, pipe } from "remeda";
import type { ComponentProps, ParentComponent } from "solid-js";

import { on } from "src/css.ts";

// TODO: Polish typography

export const H1: ParentComponent<ComponentProps<"h1">> = function (props) {
	return (
		<h1
			{...props}
			style={pipe(
				{
					"font-family": '"Bonbance", sans-serif',
					"font-size": "48px",
					"letter-spacing": "-0.5px",
					"line-height": "48px",
				},
				on("@media (min-width: 768px)", {
					"font-size": "52px",
					"line-height": "52px",
				}),
				on("@media (min-width: 1024px)", {
					"font-size": "64px",
					"line-height": "64px",
				}),
				on("@media (min-width: 1280px)", {
					"font-size": "86px",
					"line-height": "86px",
				}),
				merge(props.style)
			)}
		>
			{props.children}
		</h1>
	);
};

export const H2: ParentComponent<ComponentProps<"h2">> = function (props) {
	return (
		<h2
			{...props}
			style={pipe(
				{
					"font-family": '"Bonbance", sans-serif',
					"font-size": "36px",
					"line-height": "36px",
				},
				on("@media (min-width: 768px)", {
					"font-size": "40px",
					"line-height": "40px",
				}),
				on("@media (min-width: 1024px)", {
					"font-size": "48px",
					"line-height": "48px",
				}),
				on("@media (min-width: 1280px)", {
					"font-size": "64px",
					"line-height": "64px",
				}),
				merge(props.style)
			)}
		>
			{props.children}
		</h2>
	);
};

export const H3: ParentComponent<ComponentProps<"h3">> = function (props) {
	return (
		<h3
			{...props}
			style={pipe(
				{
					"font-family": '"Bonbance", sans-serif',
					"font-size": "24px",
					"line-height": "24px",
				},
				on("@media (min-width: 768px)", {
					"font-size": "28px",
					"line-height": "28px",
				}),
				on("@media (min-width: 1024px)", {
					"font-size": "32px",
					"line-height": "32px",
				}),
				on("@media (min-width: 1280px)", {
					"font-size": "48px",
					"line-height": "48px",
				}),
				merge(props.style)
			)}
		>
			{props.children}
		</h3>
	);
};

export const H4: ParentComponent<ComponentProps<"h4">> = function (props) {
	return (
		<h4
			{...props}
			style={pipe(
				{
					"font-family": '"Chubbo", sans-serif',
					"font-weight": "bold",
					"font-size": "18px",
					"line-height": "18px",
				},
				merge(props.style)
			)}
		>
			{props.children}
		</h4>
	);
};

// TODO: H5, H6
