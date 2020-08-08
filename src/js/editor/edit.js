import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

import Inspector from './inspect';
import getClassNames from './get-class-names';

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