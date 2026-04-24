import { createRootRoute, HeadContent, Scripts } from "@tanstack/solid-router";
import type { ParentComponent } from "solid-js";
import { HydrationScript } from "solid-js/web";

import { Footer } from "src/components/footer.tsx";
import { Header } from "src/components/header.tsx";
import { styleSheet } from "src/css.ts";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "ascii Dresden" },
		],
	}),
	component: RootComponent,
});

function RootComponent(props: { children?: unknown }) {
	return (
		<RootDocument>
			<Header />
			{props.children}
			<Footer />
		</RootDocument>
	);
}

function RootDocument(props: { children?: unknown }) {
	return (
		<html lang="de">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>ascii Dresden</title>
				<link
					href="https://api.fontshare.com/v2/css?f[]=chubbo@1,2&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<style>{styleSheet()}</style>
				<HydrationScript />
			</head>
			<body>
				<HeadContent />
				{props.children}
				<Scripts />
			</body>
		</html>
	);
}
