import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { select } from '@wordpress/data';

import Inspector from './inspect';
import getClassNames from './get-class-names';

/**
 * Edit function for the block
 *
 * @since [version]
 *
 * @param {string}   options.className     Block CSS classname.
 * @param {Object}   options.attributes    Block attributes.
 * @param {Function} options.setAttributes Function used to set block attributes.
 * @return {Object}
 */
export default function ( { className, attributes, setAttributes } ) {

	const
		classes = getClassNames(),
		{ allowReset, incompleteMsg, completeMsg } = attributes,
		template = [
			[
				'core/paragraph',
				{
					className: classes[0],
					placeholder: __( 'Enter a message to display when this item is incomplete.', 'lifterlms' ),
				}
			],
			[
				'core/button',
				{
					align: 'center',
					className: classes[1],
					text: __( 'Mark Complete', 'lifterlms-lite-lms' ),
				},
			],
			[
				'core/paragraph',
				{
					className: classes[2],
					placeholder: __( 'Enter a message to display when this item is complete.', 'lifterlms' ),
				}
			],
			[
				'core/button',
				{
					align: 'center',
					className: `${ classes[3] } is-style-outline`,
					text: __( 'Mark Incomplete', 'lifterlms-lite-lms' ),
				},
			],
		];

	if ( allowReset ) {
		className += ' has-incomplete-btn';
	}

	if ( incompleteMsg ) {
		className += ' has-incomplete-msg';
	}
	if ( completeMsg ) {
		className += ' has-complete-msg';
	}

	const postId = select( 'core/editor' ).getCurrentPostId();
	if ( postId && ( ! attributes.postId || attributes.postId !== postId ) ) {
		setAttributes( { postId } );
	}

	return (
		<Fragment>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div className={ className }>
				<InnerBlocks
					template={ template }
					templateLock="all"
				/>
			</div>
		</Fragment>
	);

}
