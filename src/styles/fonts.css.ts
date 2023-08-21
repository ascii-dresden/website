import { FontMetrics } from '@capsizecss/core';

import { FontRule, createFont } from 'src/styles/internal/font.css.ts';

import { sm, xl } from './screens.css.ts';

const metricsJetBrainsMono: FontMetrics = {
	familyName: 'JetBrains Mono Variable',
	category: 'monospace',
	capHeight: 730,
	ascent: 1020,
	descent: -300,
	lineGap: 0,
	unitsPerEm: 1000,
	xHeight: 550,
	xWidthAvg: 600,
};

const metricsConcertOne: FontMetrics = {
	familyName: 'Concert One',
	category: 'display',
	capHeight: 1470,
	ascent: 2100,
	descent: -450,
	lineGap: 0,
	unitsPerEm: 2048,
	xHeight: 1004,
	xWidthAvg: 930,
};

const concertOne = createFont(metricsConcertOne);
const jetBrainsMono = createFont(metricsJetBrainsMono);

export const displayLargeRule = concertOne([
	{
		letterSpacing: '-0.0625em',
		fontOptions: {
			capHeight: 44,
			lineGap: 24,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 56,
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

export const displayMediumRule = concertOne([
	{
		letterSpacing: '-0.0625em',
		fontOptions: {
			capHeight: 28,
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
			capHeight: 40,
			lineGap: 16,
		},
	}),
]);

export const displaySmallRule = concertOne([
	{
		letterSpacing: '-0.0625em',
		fontOptions: {
			capHeight: 20,
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
			capHeight: 28,
			lineGap: 12,
		},
	}),
]);

export const titleLargeRule = concertOne([
	{
		fontOptions: {
			capHeight: 14,
			lineGap: 8,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 16,
			lineGap: 8,
		},
	}),
]);

export const titleMediumRule = concertOne([
	{
		fontOptions: {
			capHeight: 10,
			lineGap: 8,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 12,
			lineGap: 8,
		},
	}),
]);

export const titleSmallRule = concertOne([
	{
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

export const labelLargeRule = jetBrainsMono([
	{
		fontWeight: 500,
		fontOptions: {
			capHeight: 12,
			lineGap: 8,
		},
	},
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
			capHeight: 10,
			lineGap: 8,
		},
	},
	sm<FontRule>({
		fontOptions: {
			capHeight: 12,
			lineGap: 12,
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
