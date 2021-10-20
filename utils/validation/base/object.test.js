import { matchSchema } from "./object";

describe("matchSchema()", () => {
  function test(schema, input, expected) {
    expect(matchSchema(schema)(input)).toBe(expected);
  }

  it("should return false for non-object input", () => {
    test({}, null, false);
    test({}, undefined, false);
    test({}, [], false);
    test({}, new Date(), false);
  });

  it("should return true for empty object and schema", () => {
    test({}, {}, true);
  });

  it("should return true when input matches schema", () => {
    test({ id: (val) => val === 1 }, { id: 1 }, true);
  });

  it("should return false when input does not match schema", () => {
    test({ id: (val) => val === 1 }, { id: 2 }, false);
  });
});
