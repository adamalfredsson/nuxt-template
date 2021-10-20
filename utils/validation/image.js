import { isNull, isString, isUndefined, matchSchema, or } from "./base";

export const isImage = matchSchema({
  url: isString,
  alt: or(isNull, isUndefined, isString),
  sizes: or(
    isUndefined,
    matchSchema({
      thumbnail: or(isUndefined, isString),
      medium: or(isUndefined, isString),
      large: or(isUndefined, isString),
      full: or(isUndefined, isString),
    })
  ),
});
