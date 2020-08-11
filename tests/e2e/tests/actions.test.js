/**
 * Run tests on all the possible actions available for the block.
 *
 * @since [version]
 * @version [version]
 */

import {
	createPost,
	fillField,
	clickAndWait,
} from '@lifterlms/llms-e2e-test-utils';

import {
	insertBlock,
	getAllBlocks,
	publishPostWithPrePublishChecksDisabled,
	selectBlockByClientId,
} from '@wordpress/e2e-test-utils';

/**
 * Utility to run expectations on the visibility of the various elements created by the block.
 *
 * @since [version]
 *
 * @param {string} incompleteMsg Expected css `display` value of the element.
 * @param {string} incompleteBtn Expected css `display` value of the element.
 * @param {string} completeMsg   Expected css `display` value of the element.
 * @param {string} completeBtn   Expected css `display` value of the element.
 * @return {void}
 */
async function doVisibilityTests( incompleteMsg, incompleteBtn, completeMsg, completeBtn ) {

	expect( await page.$eval( '.llms-lite-lms-msg--incomplete', el => window.getComputedStyle( el ).display ) ).toBe( incompleteMsg );
	expect( await page.$eval( '.llms-lite-lms-btn--incomplete', el => window.getComputedStyle( el ).display ) ).toBe( incompleteBtn );
	expect( await page.$eval( '.llms-lite-lms-msg--complete', el => window.getComputedStyle( el ).display ) ).toBe( completeMsg );
	expect( await page.$eval( '.llms-lite-lms-btn--complete', el => window.getComputedStyle( el ).display ) ).toBe( completeBtn );

}

/**
 * Open the block inspector for the tested block
 *
 * @since [version]
 *
 * @return {void}
 */
async function openBlockInspector() {
	const blocks = await getAllBlocks();
	await selectBlockByClientId( blocks[0].clientId );
	await page.waitFor( 500 );
}

/**
 * Updates the post and navigates to the frontend of the site.
 *
 * @since [version]
 *
 * @return {void}
 */
async function savePostAndVisitFrontend() {
	await publishPostWithPrePublishChecksDisabled();
	await clickAndWait( '.components-snackbar a' );
	await page.waitFor( 500 );
}

describe( 'Editor', () => {

	beforeAll( async () => {
		await createPost( 'page', 'A Completable Page' );
	} );

	it ( 'can do all of the things it is supposed to be able to do', async () => {

		await insertBlock( 'Lite LMS Progress Tracker' );

		await fillField( 'p.llms-lite-lms-msg--incomplete', 'Incomplete' );
		await fillField( 'p.llms-lite-lms-msg--complete', 'Complete' );

		await savePostAndVisitFrontend();

		// Text should be customized.
		expect( await page.$eval( '.llms-lite-lms-msg--incomplete', el => el.textContent ) ).toBe( 'Incomplete' );
		expect( await page.$eval( '.llms-lite-lms-msg--complete', el => el.textContent ) ).toBe( 'Complete' );

		// Incomplete message & complete button visible.
		await doVisibilityTests( 'block', 'none', 'none', 'block' );

		// Complete the page.
		await page.click( '.llms-lite-lms-btn--complete' );
		await page.waitFor( 500 );

		// Complete Message is visible.
		await doVisibilityTests( 'none', 'none', 'block', 'none' );

		// Back to admin panel.
		await clickAndWait( '#wp-admin-bar-edit a' );

		await openBlockInspector();

		// Enable progress reset.
		await page.click( '.llms-lite-lms-toggle--reset label' );
		await savePostAndVisitFrontend();

		// Complete message & incomplete button.
		await doVisibilityTests( 'none', 'block', 'block', 'none' );

		// Incomplete the page.
		await page.click( '.llms-lite-lms-btn--incomplete' );
		await page.waitFor( 500 );

		// Incomplete message & complete button visible.
		await doVisibilityTests( 'block', 'none', 'none', 'block' );

		// Back to admin panel.
		await clickAndWait( '#wp-admin-bar-edit a' );

		await openBlockInspector();

		// Hide both messages.
		await page.click( '.llms-lite-lms-toggle--incomplete-msg label' );
		await page.click( '.llms-lite-lms-toggle--complete-msg label' );

		await savePostAndVisitFrontend();

		await doVisibilityTests( 'none', 'none', 'none', 'block' );

		// Complete the page.
		await page.click( '.llms-lite-lms-btn--complete' );
		await page.waitFor( 500 );

		await doVisibilityTests( 'none', 'block', 'none', 'none' );

	} );


} );
