/**
 * Main client script
 *
 * @package LifterLMS/LMS_Lite/scripts
 *
 * @since [version]
 * @version [version]
 */

import '../scss/client.scss'

( () => {

	const
		block         = document.querySelector( '.wp-block-llms-lite-lms-progress-tracker' ),
		completeBtn   = block ? block.querySelector( '.llms-lite-lms-btn--complete' ) : null,
		incompleteBtn = block ? block.querySelector( '.llms-lite-lms-btn--incomplete' ) : null,
		completeMsg   = block ? block.querySelector( '.llms-lite-lms-msg--complete' ) : null,
		incompleteMsg = block ? block.querySelector( '.llms-lite-lms-msg--incomplete' ) : null;

	/**
	 * Retrieves the current WP_Post ID
	 *
	 * @since [version]
	 *
	 * @return {Integer|null} The WP_Post ID or `null` if none found.
	 */
	function getPostId() {
		return block ? block.dataset.postId : null;
	}

	/**
	 * Retrieve a key used for storing completion data in localStorage
	 *
	 * @since [version]
	 *
	 * @return {String} A unique storage key for the current post.
	 */
	function getStorageKey() {
		const id = getPostId();
		return id ? `llms-lite-lms-${ id }` : null;
	}

	/**
	 * Deteremine if the current post has been completed.
	 *
	 * @since [version]
	 *
	 * @return {Boolean}
	 */
	function isComplete() {
		return window.localStorage.getItem( getStorageKey() ) ? true : false;
	}

	function loadContent() {

		if ( isComplete() ) {

			incompleteMsg.style.display = 'none';
			completeBtn.style.display = 'none';

			completeMsg.style.display = null;
			incompleteBtn.style.display = null;

		} else {

			incompleteMsg.style.display = null;
			completeBtn.style.display = null;

			completeMsg.style.display = 'none';
			incompleteBtn.style.display = 'none';

		}

	}

	if ( block ) {

		loadContent();
		block.classList.add( 'ready' );

		/**
		 * Click event for the complete button.
		 *
		 * Stores the current timestamp in localStorage and reloads the button
		 * content based on the new progress state.
		 *
		 * @since [version]
		 *
		 * @return {Void}
		 */
		completeBtn.querySelector( 'a' ).addEventListener( 'click', () => {

			window.localStorage.setItem( getStorageKey(), Date.now() / 1000 );
			loadContent();

		} );

		/**
		 * Click event for the complete button.
		 *
		 * Deletes storage data from localStorage and reloads the button
		 * content based on the new progress state.
		 *
		 * @since [version]
		 *
		 * @return {Void}
		 */
		incompleteBtn.querySelector( 'a' ).addEventListener( 'click', () => {

			window.localStorage.removeItem( getStorageKey() );
			loadContent();

		} );

	}

} )();
