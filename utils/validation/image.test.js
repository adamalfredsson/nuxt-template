const { isImage } = require('./image');

describe('isImage()', () => {
  function test(input, expected) {
    expect(isImage(input)).toBe(expected);
  }

  const validImage = { url: '' };

  it('should return true if valid', () => {
    test(validImage, true);
  });

  it('should return false if no url', () => {
    test({ ...validImage, url: undefined }, false);
  });
});
