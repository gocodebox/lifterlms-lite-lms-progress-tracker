/**
 * Webpack config
 *
 * @package LifterLMS_Lite_LMS/Scripts/Dev
 *
 * @since 1.0.0-beta.1
 * @version 1.0.0-beta.6
 */

const generate = require( '@lifterlms/scripts/config/webpack.config' );

module.exports = generate( {
	css: [ 'client', 'editor' ],
	js: [ 'client', 'editor' ],
	prefix: 'llms-lite-',
} );
