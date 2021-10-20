const { testWithCases } = require('~/test-utils/utils');
const { isArray, isObjectLiteral, isNumber } = require('./type');

describe('isArray()', () => {
  const testCases = [
    [undefined, false],
    [null, false],
    [0, false],
    [1, false],
    [true, false],
    ['', false],
    ['a', false],
    [{}, false],
    [{ a: 1 }, false],
    [[], true],
    [[1], true],
    [[{ a: 1 }], true],
    [new Date(), false],
    [[new Date()], true],
  ];

  testWithCases(isArray, testCases);
});

describe('isObjectLiteral()', () => {
  const testCases = [
    [undefined, false],
    [null, false],
    [0, false],
    [1, false],
    [true, false],
    ['', false],
    ['a', false],
    [{}, true],
    [{ a: 1 }, true],
    [[], false],
    [[1], false],
    [[{ a: 1 }], false],
    [new Date(), false],
    [[new Date()], false],
  ];

  testWithCases(isObjectLiteral, testCases);
});

describe('isNumber()', () => {
  const testCases = [
    [3, true],
    ['3', false],
    [undefined, false],
    [null, false],
    [NaN, false],
  ];

  testWithCases(isNumber, testCases);
});
