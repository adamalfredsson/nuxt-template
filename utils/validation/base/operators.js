/**
 * Validate functions
 * @param  {...Function} fns validator functions that return a boolean
 */
export function and(...fns) {
  return (target) => fns.every((fn) => fn(target));
}

/**
 * Validate functions
 * @param  {...Function} fns validator functions that return a boolean
 */
export function or(...fns) {
  return (target) => fns.some((fn) => fn(target));
}

export function not(fn) {
  return (target) => !fn(target);
}
