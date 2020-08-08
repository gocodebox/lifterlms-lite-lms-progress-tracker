import client from '../scss/client.scss'

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

	function getStorageKey() {
		const id = getPostId();
		return id ? `llms-lite-lms-${ id }` : null;
	}

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

		completeBtn.querySelector( 'a' ).addEventListener( 'click', event => {

			event.preventDefault();

			window.localStorage.setItem( getStorageKey(), Date.now() / 1000 );

			loadContent();

		} );

		incompleteBtn.querySelector( 'a' ).addEventListener( 'click', event => {

			event.preventDefault();
			window.localStorage.removeItem( getStorageKey() );
			loadContent();			

		} );

	}

} )();