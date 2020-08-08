<?php
/**
 * Main LifterLMS Micro Course plugin file
 *
 * @package LifterLMS_Lite_LMS/Main
 *
 * @since 0.0.1
 * @version 0.0.1
 *
 * Plugin Name: Lite LMS by LifterLMS
 * Plugin URI: https://lifterlms.com/
 * Description: Easily track progress through simple online courses and other types of content on your WordPress website.
 * Version: 0.0.1
 * Author: LifterLMS
 * Author URI: https://lifterlms.com/
 * Text Domain: lifterlms-lite-lms
 * Domain Path: /languages
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Requires at least: 5.4
 * Tested up to: 5.5
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
 * @since [version]
 *
 * @return void
 */
function llms_lite_lms() {

	$dir  = dirname( __FILE__ );
	$url  = plugin_dir_url( __FILE__ );
	$slug = is_admin() ? 'editor' : 'client';

	$asset = include $dir . '/assets/js/llms-lite-' . $slug . '.asset.php';

	wp_enqueue_script(
		'llms-lite-editor',
		$url . 'assets/js/llms-lite-' . $slug . '.js',
		$asset['dependencies'],
		$asset['version'],
		true
	);

	wp_enqueue_style(
		'llms-lite-editor',
		$url . 'assets/css/llms-lite-' . $slug . '.css',
		array( 'wp-edit-blocks' ),
		$asset['version']
	);

}
add_action( 'init', 'llms_lite_lms' );