import { maxLength } from '.';
import { minLength } from './common';

describe('minLength()', () => {
  function test(min, input, expected) {
    it(`should return ${expected} for ${input} if min is ${min}`, () => {
      expect(minLength(min)(input)).toBe(expected);
    });
  }

  test(2, ['1', '2'], true);
  test(2, [1], false);
  test(1, [], false);
  test(0, [], true);

  test(3, 'abc', true);
  test(3, 'ab', false);
  test(0, '', true);

  test(3, {}, false);
  test(3, null, false);
  test(3, undefined, false);
});

describe('maxLength()', () => {
  function test(max, input, expected) {
    it(`should return ${expected} for ${input} if max is ${max}`, () => {
      expect(maxLength(max)(input)).toBe(expected);
    });
  }

  test(1, ['1', '2'], false);
  test(1, [1], true);
  test(1, [], true);
  test(0, [], true);

  test(2, 'abc', false);
  test(2, 'ab', true);
  test(0, '', true);

  test(3, {}, false);
  test(3, null, false);
  test(3, undefined, false);
});
