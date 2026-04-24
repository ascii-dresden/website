import { createRouter } from "@tanstack/solid-router";

import { routeTree } from "./routeTree.gen.ts";

export function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		pageComponentWrapper: ({ children }) => children,
	});
}
