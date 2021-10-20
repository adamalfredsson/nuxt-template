import { and, isArray, isString, or } from ".";

export function minLength(min) {
  return and(or(isArray, isString), (target) => target.length >= min);
}

export function maxLength(max) {
  return and(or(isArray, isString), (target) => target.length <= max);
}

/**
 * Strict equality check
 * @returns Function that takes a value
 */
export function isEqualTo(comparator) {
  return (target) => target === comparator;
}

export function isEither(comparators) {
  return (target) => comparators.includes(target);
}
