<?php
/**
 * Main plugin file
 *
 * @package LifterLMS_Lite_LMS/Main
 *
 * @since 0.0.1
 * @version 0.1.1
 *
 * Plugin Name: Lite LMS Progress Tracker by LifterLMS
 * Plugin URI: https://github.com/gocodebox/lifterlms-lite-lms-progress-tracker
 * Description: Easily track progress through simple online courses and other types of public or membership-protected content on your WordPress website.
 * Version: 0.1.1
 * Author: LifterLMS
 * Author URI: https://lifterlms.com/
 * Text Domain: llms-lite-progress
 * Domain Path: /languages
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Requires at least: 5.4
 * Tested up to: 6.1
 *
 * * * * * * * * * * * * * * * * * * * * * *
 *                                         *
 * Reporting a Security Vulnerability      *
 *                                         *
 * Please disclose any security issues or  *
 * vulnerabilities to team@lifterlms.com   *
 *                                         *
 * See our full Security Policy at         *
 * https://lifterlms.com/security          *
 *                                         *
 * * * * * * * * * * * * * * * * * * * * * *
 */

defined( 'ABSPATH' ) || exit;

/**
 * Initialize
 *
 * @since 0.0.1
 *
 * @return void
 */
function llms_lite_lms() {
	llms_lite_lms_scripts();
	llms_lite_lms_i18n();
}
add_action( 'init', 'llms_lite_lms' );

/**
 * Register & Enqueue scripts.
 *
 * @since 0.0.1
 * @since 0.1.1 Only add `wp-edit-blocks` as a dependency of the editor styles.
 *
 * @return void
 */
function llms_lite_lms_scripts() {

	$dir    = dirname( __FILE__ );
	$url    = plugin_dir_url( __FILE__ );
	$slug   = is_admin() ? 'editor' : 'client';
	$handle = sprintf( 'llms-lite-%s', $slug );

	$asset = include $dir . '/assets/js/llms-lite-' . $slug . '.asset.php';

	wp_enqueue_script(
		$handle,
		$url . 'assets/js/llms-lite-' . $slug . '.js',
		$asset['dependencies'],
		$asset['version'],
		true
	);

	wp_enqueue_style(
		'llms-lite-editor',
		$url . 'assets/css/llms-lite-' . $slug . '.css',
		'editor' === $slug ? array( 'wp-edit-blocks' ) : array(),
		$asset['version']
	);

	// JS translations.
	if ( 'editor' === $slug ) {
		wp_set_script_translations( $handle, 'llms-lite-progress' );
	}

}

/**
 * Load textdomain
 *
 * @since 0.0.1
 *
 * @return void
 */
function llms_lite_lms_i18n() {

	$locale = apply_filters( 'plugin_locale', determine_locale(), 'lifterlms' );

	unload_textdomain( 'llms-lite-progress' );
	load_textdomain( 'llms-lite-progress', WP_LANG_DIR . '/lifterlms/lifterlms-' . $locale . '.mo' );
	load_plugin_textdomain( 'lifterlms', false, dirname( plugin_basename( __FILE__ ) ) . '/i18n' );

}
