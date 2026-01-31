// FIXME: This does not work at all.
// Try using vike's data hook to read the filesystem
// and do sharp transformations there.
// But is that possible in a hypothetical <Picture src="filepath"/> component?
// See how astro does it
export async function getImageUrl(path: string): Promise<string> {
	const i = path.lastIndexOf(".");
	const suffix = path.slice(i + 1);
	const pathWithoutSuffix = path.slice(0, i);
	switch (suffix) {
		case "avif": {
			return (await import(`${pathWithoutSuffix}.avif`)).default;
		}
		case "jpg": {
			return (await import(`${pathWithoutSuffix}.jpg`)).default;
		}
		case "jpeg": {
			return (await import(`${pathWithoutSuffix}.jpeg`)).default;
		}
		case "png": {
			return (await import(`${pathWithoutSuffix}.png`)).default;
		}
		case "svg": {
			return (await import(`${pathWithoutSuffix}.svg`)).default;
		}
		case "webp": {
			return (await import(`${pathWithoutSuffix}.webp`)).default;
		}
		default:
			throw new Error(
				`Unknown or unsupported image extension ${suffix}. Expected one of jpg, png, svg, webp`
			);
	}
}
