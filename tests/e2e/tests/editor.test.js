
import {
	createPost
} from '@lifterlms/llms-e2e-test-utils';

import {
	clickBlockAppender,
	publishPost,
} from '@wordpress/e2e-test-utils';

describe( 'Editor', () => {

	beforeAll( async () => {

		await createPost( 'page', 'A Completable Page' );

	} );

	it ( 'can add the block to a page', async () => {

		await clickBlockAppender();

	} );

} );
