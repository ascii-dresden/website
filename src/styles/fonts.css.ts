import { FontMetrics } from '@capsizecss/core';

import { FontRule, createFont } from 'src/styles/internal/font.css.ts';

import { sm, xl } from './screens.css.ts';

const metricsJetBrainsMono: FontMetrics = {
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

const metricsConcertOne: FontMetrics = {
	familyName: 'Concert One',
	category: 'display',
	capHeight: 1400, // 1470
	ascent: 2005, // 2100
	descent: 410, // 450
	lineGap: 0,
	unitsPerEm: 2048,
	xHeight: 1004,
	xWidthAvg: 930,
};

const metricsNunito: FontMetrics = {
	familyName: 'Nunito Variable',
	category: 'sans-serif',
	capHeight: 705,
	ascent: 1011,
	descent: 353,
	lineGap: 0,
	unitsPerEm: 1000,
	xHeight: 484,
	xWidthAvg: 449,
};

const metricsPilcrowRounded: FontMetrics = {
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

// const concertOne = createFont(metricsConcertOne);
// const concertOne = createFont(metricsNunito);
const concertOne = createFont(metricsPilcrowRounded);
const jetBrainsMono = createFont(metricsJetBrainsMono);

export const displayLargeRule = concertOne([
	{
		// fontWeight: 900,
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

export const displayMediumRule = concertOne([
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

export const displaySmallRule = concertOne([
	{
		// fontWeight: 700,
		letterSpacing: '-0.025em',
		fontOptions: {
			capHeight: 24,
			lineGap: 24,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 22,
			lineGap: 22,
		},
	}),
	xl<FontRule>({
		fontOptions: {
			capHeight: 22,
			lineGap: 22,
		},
	}),
]);

export const titleLargeRule = concertOne([
	{
		// fontWeight: 900,
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

export const titleMediumRule = concertOne([
	{
		// fontWeight: 900,
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

export const titleSmallRule = concertOne([
	{
		// fontWeight: 900,
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

export const labelLargeRule = jetBrainsMono([
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

export const labelMediumRule = jetBrainsMono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	},
]);

export const labelSmallRule = jetBrainsMono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 8,
			lineGap: 8,
		},
	},
]);

export const bodyLargeRule = jetBrainsMono([
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

export const bodyMediumRule = jetBrainsMono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 8,
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

export const bodySmallRule = jetBrainsMono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 6,
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
