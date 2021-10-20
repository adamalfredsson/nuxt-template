import { isEmail, matchRegex } from './string';

describe('matchRegex()', () => {
  function test(regex, input, expected) {
    it(`should return ${expected} for ${regex} when input is ${input}`, () => {
      expect(matchRegex(regex)(input)).toBe(expected);
    });
  }

  test(/^[a-zA-Z0-9]*$/, 'abc123', true);
  test(/^[a-zA-Z0-9]*$/, 'abc123@', false);
  test(/^[a-zA-Z0-9]*$/, {}, false);
  test(/^[a-zA-Z0-9]*$/, null, false);
});

describe('isEmail()', () => {
  function test(input, expected) {
    it(`should return ${expected} when input is ${input}`, () => {
      expect(isEmail(input)).toBe(expected);
    });
  }

  test('', false);
  test('abc', false);
  test('abc@', false);
  test('abc@abc', false);
  test('adam@zodiapps.com', true);
});
