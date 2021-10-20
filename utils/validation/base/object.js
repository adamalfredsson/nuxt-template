import { and } from "./operators";
import { isObjectLiteral } from "./type";

export function hasEveryProperty(properties) {
  return and(isObjectLiteral, (target) =>
    properties.every((property) => target[property] != null)
  );
}

export function hasSomeProperty(properties) {
  return and(isObjectLiteral, (target) =>
    properties.some((property) => target[property] != null)
  );
}

export function matchSchema(schema) {
  return and(isObjectLiteral, (target) =>
    Object.entries(schema).every(([key, validator]) => validator(target[key]))
  );
}
