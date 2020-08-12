// Internal deps.
import { getBlockClassName, ensureInnerBlockClassNames } from './save';

// Extenral Deps.
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Deprecated save function from version 0.0.1
 *
 * This save function does not contain an inner mask.
 *
 * @since 0.0.1
 * @deprecated [version]
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

	return ( <div className={ getBlockClassName( attributes ) } data-post-id={ attributes.postId }><InnerBlocks.Content /></div> );

}
