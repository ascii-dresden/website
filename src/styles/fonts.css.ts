import { FontMetrics } from '@capsizecss/core';
import { fontFace } from '@vanilla-extract/css';

import { FontRule, createFont } from 'src/styles/internal/font.css.ts';

import { sm, xl } from './screens.css.ts';

const font_face_jetbrains_mono = fontFace({
	src: `url("../assets/fonts/jetbrains_mono/JetBrainsMono[wght].woff2") format("woff2")`,
	fontWeight: '100 800',
	fontStyle: 'normal',
});

const font_face_bonbance = fontFace({
	src: `url("../assets/fonts/bonbance/Bonbance-BoldCondensed.woff2") format("woff2")`,
	fontWeight: 'bold',
	fontStyle: 'normal',
});

const metrics_jetbrains_mono: FontMetrics = {
	familyName: font_face_jetbrains_mono.slice(1, -1),
	category: 'monospace',
	capHeight: 730,
	ascent: 1020,
	descent: 300,
	lineGap: 0,
	unitsPerEm: 1000,
	xHeight: 550,
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

const bonbance = createFont(metrics_bonbance);
const jetbrains_mono = createFont(metrics_jetbrains_mono);

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

export const title_large_rule = bonbance([
	{
		letterSpacing: 0.6,
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

export const title_medium_rule = bonbance([
	{
		letterSpacing: 0.8,
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

export const title_small_rule = bonbance([
	{
		letterSpacing: 1,
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

export const label_large_rule = jetbrains_mono([
	{
		fontVariantNumeric: 'slashed-zero',
		fontWeight: 500,
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

export const label_medium_rule = jetbrains_mono([
	{
		fontVariantNumeric: 'slashed-zero',
		fontWeight: 500,
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	},
]);

export const label_small_rule = jetbrains_mono([
	{
		fontVariantNumeric: 'slashed-zero',
		fontWeight: 500,
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	},
]);

export const body_large_rule = jetbrains_mono([
	{
		fontVariantNumeric: 'slashed-zero',
		fontFeatureSettings: '"zero"',
		fontWeight: 500,
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

export const body_medium_rule = jetbrains_mono([
	{
		fontVariantNumeric: 'slashed-zero',
		fontWeight: 500,
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

export const body_small_rule = jetbrains_mono([
	{
		fontVariantNumeric: 'slashed-zero',
		fontWeight: 500,
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
