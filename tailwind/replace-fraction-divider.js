// https://github.com/tailwindlabs/tailwindcss/issues/1595#issuecomment-617131891
const resolveConfig = require('tailwindcss/resolveConfig');

function mapObject(fn, obj) {
  if (typeof Object.fromEntries === 'function')
    return Object.fromEntries(Object.entries(obj).map(fn));

  return Object.entries(obj).reduce((acc, [key, val], idx, entries) => {
    const [newKey, newVal] = fn([key, val], idx, entries);
    return { ...acc, [newKey]: newVal };
  }, {});
}

function replaceWith(divider) {
  return ([modifier, value]) => [modifier.replace('/', divider), value];
}

function replaceForEachWith(divider, keys) {
  return ([plugin, values]) => {
    if (!keys.includes(plugin)) return [plugin, values];

    return [plugin, mapObject(replaceWith(divider), values)];
  };
}

/**
 * By default, tailwind classes will look like `w-1/2` or `w-1/3`.
 * However, the default `/` fraction divider is not compatible with pug-syntax.
 * This function replaces the default `/` with another divider (e.g. `_`) and returns a new config object.
 *
 * @param {string} divider New divider to replace the default one
 * @param {Object} userConfig Tailwind configuration
 * @param {string[]} keys Which tailwind utilities to replace
 * @returns {Object} Tailwind configuration with replaced fraction divider
 */
module.exports = function (divider = '_', userConfig, keys = []) {
  const { theme, ...config } = resolveConfig(userConfig);
  return {
    theme: mapObject(replaceForEachWith(divider, keys), theme),
    ...config,
  };
};
