/**
 * Adds a set of utilities for the `text-decoration-color` property.
 *
 * @param {Object} context Plugin context
 */
module.exports = function ({ addUtilities, e, theme }) {
  const colors = theme('colors', {});

  const utility = Object.keys(colors).reduce((acc, key) => {
    if (typeof colors[key] === 'string') {
      return {
        ...acc,
        [`.decoration-${e(key)}`]: {
          'text-decoration-color': colors[key],
        },
      };
    }

    const variants = Object.keys(colors[key]);

    return {
      ...acc,
      ...variants.reduce((a, variant) => {
        const utilSuffix = variant === 'DEFAULT' ? '' : `-${variant}`;

        return {
          ...a,
          [`.decoration-${e(key)}${utilSuffix}`]: {
            'text-decoration-color': colors[key][variant],
          },
        };
      }, {}),
    };
  }, {});

  addUtilities(utility);
};
