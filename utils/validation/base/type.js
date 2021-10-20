export function isNumber(target) {
  return typeof target === 'number' && !isNaN(target);
}

export function isInteger(target) {
  return isNumber(target) && Number.isInteger(target);
}

export function isString(target) {
  return typeof target === 'string';
}

export function isObjectLiteral(target) {
  try {
    return !!target && target.constructor.name === 'Object';
  } catch {
    return false;
  }
}

export function isArray(target) {
  return Array.isArray(target);
}

export function isNull(target) {
  return target === null;
}

export function isUndefined(target) {
  return target === undefined;
}

export function isBoolean(target) {
  return typeof target === 'boolean';
}
