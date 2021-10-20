import { and } from "./operators";
import { isArray } from "./type";

/**
 * Validate each item in an array
 *
 * @returns Function that takes an array
 */
export function each(fn) {
  return and(isArray, (items) => items.every(fn));
}

/**
 * Check if at least one item in the array validates
 *
 * @returns Function that takes an array
 */
export function any(fn) {
  return and(isArray, (items) => items.some(fn));
}
