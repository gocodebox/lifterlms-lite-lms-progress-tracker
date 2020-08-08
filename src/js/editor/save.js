import { InnerBlocks } from '@wordpress/block-editor';

import getClassNames from './get-class-names';

function getBlockClassName( attributes ) {

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

export default function ( { attributes, innerBlocks } ) {


	// Ensure that our "required" classes are not removed by a smart developer
	if ( innerBlocks.length ) {

		const classes = getClassNames();
		innerBlocks.forEach( ( innerBlock, index ) => {
			if ( ! innerBlock.attributes.className.includes( classes[ index ] ) ) {
				innerBlocks[ index ].attributes.className = innerBlock.attributes.className ? ` ${ classes[ index ] }` : classes[ index ];  
			}
		} );

	}

	return ( <div className={ getBlockClassName( attributes ) }><InnerBlocks.Content /></div> );

}