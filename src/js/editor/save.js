// Internal Deps.
import getClassNames from './get-class-names';

// Extenral Deps.
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Retrieve the classname for the bock based on current attributes
 *
 * @since 0.0.1
 *
 * @param {Object} attributes Block attributes.
 * @return {string} Classname list.
 */
export function getBlockClassName( attributes ) {
	const { allowReset, incompleteMsg, completeMsg } = attributes;

	const classNames = [];
	if ( allowReset ) {
		classNames.push( 'has-incomplete-btn' );
	}
	if ( incompleteMsg ) {
		classNames.push( 'has-incomplete-msg' );
	}
	if ( completeMsg ) {
		classNames.push( 'has-complete-msg' );
	}

	return classNames.join( ' ' );
}

/**
 * Ensure that the required classnames are present on all innerBlocks
 *
 * @since [version]
 *
 * @param {Object[]} innerBlocks List of inner block objects.
 * @return {Object[]} Inner blocks list.
 */
export function ensureInnerBlockClassNames( innerBlocks ) {
	const classes = getClassNames();
	innerBlocks.forEach( ( innerBlock, index ) => {
		if ( ! innerBlock.attributes.className.includes( classes[ index ] ) ) {
			innerBlocks[ index ].attributes.className = innerBlock.attributes.className ? ` ${ classes[ index ] }` : classes[ index ];
		}
	} );

	return innerBlocks;
}

/**
 * Save function for the block
 *
 * @since 0.0.1
 * @since [version] Moved `ensureInnerBlockClassNames()` to it's own function.
 *              Added an inner wrapper used to add a clearfix when buttons are aligned left or right.
 *
 * @param {Object}   options             Block params.
 * @param {Object}   options.attributes  Block attributes.
 * @param {Object[]} options.innerBlocks Array of child block objects.
 * @return {string} HTML string to save to the post content.
 */
export default function( { attributes, innerBlocks } ) {
	if ( innerBlocks && innerBlocks.length ) {
		innerBlocks = ensureInnerBlockClassNames( innerBlocks );
	}

	return (
		<div className={ getBlockClassName( attributes ) } data-post-id={ attributes.postId }>
			<div className="llms-lite-lms-progress-tracker--inner-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
