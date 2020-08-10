/**
 * Babel config
 *
 * The e2e test suite uses babel to transform utility functions
 * at runtime.
 *
 * @package LifterLMS_Groups/Scripts/Dev
 *
 * @since 1.0.0-beta.1
 * @version 1.0.0-beta.1
 */

const presets = [ [ "@babel/env", ] ];

module.exports = { presets };
