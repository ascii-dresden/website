import { FontMetrics } from '@capsizecss/core';

import { FontRule, createFont } from 'src/styles/internal/font.css.ts';

import { sm, xl } from './screens.css.ts';

const metrics_jetbrains_mono: FontMetrics = {
	familyName: 'JetBrains Mono Variable',
	category: 'monospace',
	capHeight: 730,
	ascent: 1020,
	descent: 300,
	lineGap: 0,
	unitsPerEm: 1000,
	xHeight: 550,
	xWidthAvg: 600,
};

const metrics_pilcrow_rounded: FontMetrics = {
	familyName: 'Pilcrow Rounded',
	category: 'sans-serif',
	capHeight: 668,
	ascent: 880,
	descent: 220,
	lineGap: 0,
	unitsPerEm: 1000,
	xHeight: 532,
	xWidthAvg: 532,
};

const pilcrow_rounded = createFont(metrics_pilcrow_rounded);
const jetbrains_mono = createFont(metrics_jetbrains_mono);

export const display_large_rule = pilcrow_rounded([
	{
		fontWeight: 700,
		letterSpacing: '-0.05em',
		fontOptions: {
			capHeight: 40,
			lineGap: 20,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 40,
			lineGap: 40,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 40,
			lineGap: 40,
		},
	}),
]);

export const display_medium_rule = pilcrow_rounded([
	{
		fontWeight: 800,
		letterSpacing: '-0.025em',
		fontOptions: {
			capHeight: 30,
			lineGap: 16,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 30,
			lineGap: 16,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 30,
			lineGap: 16,
		},
	}),
]);

export const display_small_rule = pilcrow_rounded([
	{
		fontWeight: 700,
		letterSpacing: '-0.025em',
		fontOptions: {
			capHeight: 24,
			lineGap: 12,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 24,
			lineGap: 12,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 24,
			lineGap: 12,
		},
	}),
]);

export const title_large_rule = pilcrow_rounded([
	{
		fontWeight: 700,
		fontOptions: {
			capHeight: 18,
			lineGap: 18,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 18,
			lineGap: 18,
		},
	}),
]);

export const titleMediumRule = pilcrow_rounded([
	{
		fontWeight: 700,
		fontOptions: {
			capHeight: 14,
			lineGap: 14,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 14,
			lineGap: 14,
		},
	}),
]);

export const title_small_rule = pilcrow_rounded([
	{
		fontWeight: 900,
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

export const label_large_rule = jetbrains_mono([
	{
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
		fontWeight: 500,
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	},
]);

export const label_small_rule = jetbrains_mono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	},
]);

export const body_large_rule = jetbrains_mono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 12,
			lineGap: 12,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 12,
			lineGap: 8,
		},
	}),
]);

export const body_medium_rule = jetbrains_mono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	}),
]);

export const body_small_rule = jetbrains_mono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	}),
]);
