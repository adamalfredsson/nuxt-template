import {
  and,
  isBoolean,
  isEither,
  isNull,
  isUndefined,
  matchSchema,
  or,
} from "./base";
import { isImage } from "./image";

const backgroundSchema = {
  color: or(
    isNull,
    isUndefined,
    isEither([
      "black",
      "white",
      "gray-lighter",
      "gray-light",
      "gray",
      "gray-dark",
      "primary",
      "primary-dark",
      "secondary",
      "secondary-dark",
    ])
  ),
  overlay: or(isNull, isUndefined, isEither(["shade", "gradient"])),
  blend: or(
    isNull,
    isUndefined,
    isEither(["lighten", "darken", "soft-light", "hard-light", "multiply"])
  ),
  image: or(
    isNull,
    isUndefined,
    and(
      isImage,
      matchSchema({
        parallax: or(isNull, isUndefined, isBoolean),
      })
    )
  ),
};

export const isBackground = matchSchema(backgroundSchema);
