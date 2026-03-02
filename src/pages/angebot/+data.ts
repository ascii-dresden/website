import { CONFIG, type Config } from "src/config.ts";

export type Data = {
	config: Config;
};

export function data(): Data {
	return {
		// FIXME: Images are not serializable and Vike does not support server components. Move to Astro?
		config: CONFIG,
	};
}
