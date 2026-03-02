import type { Config } from "vike/types";
import solid from "vike-solid/config";

export default {
	extends: solid,
	prerender: true,
	title: "ascii Dresden",
	passToClient: [],
} satisfies Config;
