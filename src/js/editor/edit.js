// Internal deps.
import Inspector from './inspect';
import getClassNames from './get-class-names';

// External deps.
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { select } from '@wordpress/data';

/**
 * Get a list of classnames for the block
 *
 * @since 0.0.2
 *
 * @param {string} className  Initial classname.
 * @param {Object} attributes Block attributes.
 * @return {string} Updated classnames.
 */
function getBlockClassName( className, attributes ) {
	const { allowReset, incompleteMsg, completeMsg } = attributes;

	if ( allowReset ) {
		className += ' has-incomplete-btn';
	}

	if ( incompleteMsg ) {
		className += ' has-incomplete-msg';
	}

	if ( completeMsg ) {
		className += ' has-complete-msg';
	}

	return className;
}

/**
 * Retrieve the inner block template
 *
 * @since 0.0.2
 *
 * @return {Array[]} Array of block arrays.
 */
function getTemplate() {
	const classes = getClassNames();

	return [
		[
			'core/paragraph',
			{
				className: classes[ 0 ],
				placeholder: __( 'Enter a message to display when this item is incomplete.', 'llms-lite-progress' ),
			},
		],
		[
			'core/button',
			{
				align: 'center',
				className: classes[ 1 ],
				text: __( 'Mark Complete', 'llms-lite-progress' ),
			},
		],
		[
			'core/paragraph',
			{
				className: classes[ 2 ],
				placeholder: __( 'Enter a message to display when this item is complete.', 'llms-lite-progress' ),
			},
		],
		[
			'core/button',
			{
				align: 'center',
				className: `${ classes[ 3 ] } is-style-outline`,
				text: __( 'Mark Incomplete', 'llms-lite-progress' ),
			},
		],
	];
}

/**
 * Edit function for the block
 *
 * @since 0.0.1
 * @since 0.0.2 Refactored for reduced complexity.
 *
 * @param {Object}   options               Initial block parameters.
 * @param {string}   options.className     Block CSS classname.
 * @param {Object}   options.attributes    Block attributes.
 * @param {Function} options.setAttributes Function used to set block attributes.
 * @return {Object} The edit component.
 */
export default function( { className, attributes, setAttributes } ) {
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
			<div className={ getBlockClassName( className, attributes ) }>
				<InnerBlocks
					template={ getTemplate() }
					templateLock="all"
				/>
			</div>
		</Fragment>
	);
}
