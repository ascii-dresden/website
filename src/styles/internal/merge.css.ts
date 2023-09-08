import { StyleRule } from '@vanilla-extract/css';
import deepmerge from 'deepmerge';

/**
 * Merges multiple style rules into one
 */
export function merge(styles: StyleRule[]): StyleRule {
	return deepmerge.all(styles);
}
