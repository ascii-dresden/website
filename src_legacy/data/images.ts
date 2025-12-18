import { ImageMetadata } from 'astro';

const files: Record<string, () => Promise<{ default: ImageMetadata }>> = await import.meta.glob(
	'/src/content/_images/*.{webp,avif,png,jpg,jpeg}'
);

export async function fetchImage(file: string): Promise<{ default: ImageMetadata }> {
	const imageMetadata = files[`/src/content/_images/${file}`];
	if (!imageMetadata) {
		throw new Error(`Image "${file}" not found.`);
	}
	return await imageMetadata();
}
