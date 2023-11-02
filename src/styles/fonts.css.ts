import { FontMetrics } from '@capsizecss/core';
import { fontFace } from '@vanilla-extract/css';

import { FontRule, createFont } from 'src/styles/internal/font.css.ts';

import { sm, xl } from './screens.css.ts';

const font_face_geist_mono = fontFace({
	src: 'url("../assets/fonts/GeistMono-Variable.woff2") format("woff2")',
	fontWeight: '100 900',
	fontStyle: 'normal',
});

const font_face_bonbance = fontFace({
	src: 'url("../assets/fonts/Bonbance-BoldCondensed.woff2") format("woff2")',
	fontWeight: 'bold',
	fontStyle: 'normal',
});

const font_face_array = fontFace({
	src: 'url("../assets/fonts/Array-Regular.woff2") format("woff2")',
	fontWeight: 'normal',
	fontStyle: 'normal',
});

const metrics_geist_mono: FontMetrics = {
	familyName: font_face_geist_mono.slice(1, -1),
	category: 'monospace',
	capHeight: 710,
	ascent: 920,
	descent: -220,
	lineGap: 100,
	unitsPerEm: 1000,
	xHeight: 530,
	xWidthAvg: 600,
};

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

const metrics_array: FontMetrics = {
	familyName: font_face_array.slice(1, -1),
	capHeight: 1000,
	ascent: 1400,
	descent: -300,
	lineGap: 140,
	unitsPerEm: 1600,
	xHeight: 800,
	xWidthAvg: 666,
};

export const bonbance = createFont(metrics_bonbance);
export const array = createFont(metrics_array);
export const geist_mono = createFont(metrics_geist_mono);

export const display_large_rule = bonbance([
	{
		letterSpacing: -0.5,
		fontOptions: {
			capHeight: 40,
			lineGap: 16,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 40,
			lineGap: 16,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 40,
			lineGap: 16,
		},
	}),
]);

export const display_medium_rule = bonbance([
	{
		fontOptions: {
			capHeight: 30,
			lineGap: 16,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 32,
			lineGap: 16,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 32,
			lineGap: 16,
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
	sm<FontRule>({
		fontOptions: {
			capHeight: 24,
			lineGap: 16,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 24,
			lineGap: 16,
		},
	}),
]);

export const title_large_rule = array([
	{
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

export const title_medium_rule = array([
	{
		fontOptions: {
			capHeight: 15,
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

export const title_small_rule = array([
	{
		fontOptions: {
			capHeight: 13,
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

export const label_large_rule = geist_mono([
	{
		fontWeight: 500,
		fontFeatureSettings: '"ss09"',
		fontOptions: {
			capHeight: 12,
			lineGap: 12,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 12,
			lineGap: 12,
		},
	}),
]);

export const label_medium_rule = geist_mono([
	{
		fontWeight: 500,
		fontFeatureSettings: '"ss09"',
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	},
]);

export const label_small_rule = geist_mono([
	{
		fontWeight: 500,
		fontFeatureSettings: '"ss09"',
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	},
]);

export const body_large_rule = geist_mono([
	{
		fontWeight: 500,
		fontFeatureSettings: '"ss09"',
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

export const body_medium_rule = geist_mono([
	{
		fontWeight: 500,
		fontFeatureSettings: '"ss09"',
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

export const body_small_rule = geist_mono([
	{
		fontWeight: 500,
		fontFeatureSettings: '"ss09"',
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
