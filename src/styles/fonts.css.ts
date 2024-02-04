import { FontMetrics } from '@capsizecss/core';
import { fontFace } from '@vanilla-extract/css';

import { FontRule, createFont } from 'src/styles/internal/font.css.ts';

import { lg, md, sm, xl } from './screens.css.ts';

const font_face_bonbance = fontFace({
	src: 'url("../assets/fonts/Bonbance-BoldCondensed.woff2") format("woff2")',
	fontWeight: 'bold',
	fontStyle: 'normal',
});

const font_face_chubbo = fontFace({
	src: 'url("../assets/fonts/Chubbo-Variable.woff2") format("woff2")',
	fontWeight: '200 700',
	fontStyle: 'normal',
});

const font_face_maple = fontFace([
	{
		src: 'url("../assets/fonts/MapleMono/MapleMono-Regular.woff2") format("woff2")',
		fontWeight: '400',
		fontStyle: 'normal',
	},
	{
		src: 'url("../assets/fonts/MapleMono/MapleMono-Italic.woff2") format("woff2")',
		fontWeight: '400',
		fontStyle: 'italic',
	},
	{
		src: 'url("../assets/fonts/MapleMono/MapleMono-Bold.woff2") format("woff2")',
		fontWeight: '700',
		fontStyle: 'normal',
	},
	{
		src: 'url("../assets/fonts/MapleMono/MapleMono-BoldItalic.woff2") format("woff2")',
		fontWeight: '700',
		fontStyle: 'italic',
	},
	{
		src: 'url("../assets/fonts/MapleMono/MapleMono-Light.woff2") format("woff2")',
		fontWeight: '200',
		fontStyle: 'normal',
	},
	{
		src: 'url("../assets/fonts/MapleMono/MapleMono-LightItalic.woff2") format("woff2")',
		fontWeight: '200',
		fontStyle: 'italic',
	},
]);

const metrics_bonbance: FontMetrics = {
	familyName: font_face_bonbance.slice(1, -1),
	category: 'sans-serif',
	capHeight: 700,
	ascent: 1000,
	descent: -200,
	lineGap: 300,
	unitsPerEm: 1000,
	xHeight: 500,
	xWidthAvg: 346,
};

const metrics_chubbo: FontMetrics = {
	familyName: font_face_chubbo.slice(1, -1),
	capHeight: 706,
	ascent: 1050,
	descent: -320,
	lineGap: 100,
	unitsPerEm: 1000,
	xHeight: 484,
	xWidthAvg: 444,
};

const metrics_maple: FontMetrics = {
	familyName: font_face_maple.slice(1, -1),
	capHeight: 1400,
	ascent: 2000,
	descent: -600,
	lineGap: 0,
	unitsPerEm: 2000,
	xHeight: 1050,
	xWidthAvg: 1200,
};

export const bonbance = createFont(metrics_bonbance);
export const chubbo = createFont(metrics_chubbo);
export const maple = createFont(metrics_maple);

export const display_large_rule = bonbance([
	{
		letterSpacing: -0.5,
		fontOptions: {
			capHeight: 40,
			lineGap: 16,
		},
	},
	md<FontRule>({
		fontOptions: {
			capHeight: 52,
			lineGap: 16,
		},
	}),
	lg<FontRule>({
		fontOptions: {
			capHeight: 64,
			lineGap: 24,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 86,
			lineGap: 16,
		},
	}),
]);

export const display_medium_rule = bonbance([
	{
		fontOptions: {
			capHeight: 32,
			lineGap: 16,
		},
	},
	md<FontRule>({
		fontOptions: {
			capHeight: 40,
			lineGap: 16,
		},
	}),
	lg<FontRule>({
		fontOptions: {
			capHeight: 48,
			lineGap: 24,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 64,
			lineGap: 32,
		},
	}),
]);

export const display_small_rule = bonbance([
	{
		fontOptions: {
			capHeight: 24,
			lineGap: 16,
		},
	},
	md<FontRule>({
		fontOptions: {
			capHeight: 28,
			lineGap: 16,
		},
	}),
	lg<FontRule>({
		fontOptions: {
			capHeight: 32,
			lineGap: 16,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 48,
			lineGap: 16,
		},
	}),
]);

export const title_large_rule = chubbo([
	{
		fontWeight: 600,
		fontOptions: {
			capHeight: 18,
			lineGap: 12,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 18,
			lineGap: 12,
		},
	}),
]);

export const title_medium_rule = chubbo([
	{
		letterSpacing: 0.5,
		fontWeight: 620,
		fontOptions: {
			capHeight: 16,
			lineGap: 12,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 16,
			lineGap: 12,
		},
	}),
]);

export const title_small_rule = chubbo([
	{
		letterSpacing: 1,
		fontWeight: 640,
		fontOptions: {
			capHeight: 14,
			lineGap: 12,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 14,
			lineGap: 12,
		},
	}),
]);

export const label_large_rule = maple([
	{
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontWeight: 700,
		fontOptions: {
			capHeight: 10,
			lineGap: 10,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 11,
			lineGap: 11,
		},
	}),
]);

export const label_medium_rule = maple([
	{
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontWeight: 700,
		fontOptions: {
			capHeight: 9,
			lineGap: 9,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 10,
			lineGap: 10,
		},
	}),
]);

export const label_small_rule = maple([
	{
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontWeight: 700,
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 9,
			lineGap: 9,
		},
	}),
]);

export const body_large_rule = maple([
	{
		fontOptions: {
			capHeight: 11,
			lineGap: 11,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 12,
			lineGap: 12,
		},
	}),
]);

export const body_medium_rule = maple([
	{
		fontOptions: {
			capHeight: 10,
			lineGap: 10,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 11,
			lineGap: 11,
		},
	}),
]);

export const body_small_rule = maple([
	{
		fontOptions: {
			capHeight: 9,
			lineGap: 9,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 10,
			lineGap: 10,
		},
	}),
]);
