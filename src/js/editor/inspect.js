import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

/**
 * Inspector controls for use in the block editor
 *
 * @since [version]
 *
 * @param {Object}   options               Initial block parameters.
 * @param {Object}   options.attributes    Block attributes.
 * @param {Function} options.setAttributes Function used to store block attributes.
 * @return {Object} Inspector component.
 */
export default function( { attributes, setAttributes } ) {
	const
		{
			incompleteMsg,
			completeMsg,
			allowReset,
		} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'User Messages', 'lifterlms' ) }>

				<ToggleControl
					label={ __( 'Incomplete message', 'lifterlms' ) }
					help={ incompleteMsg ? __( 'Show a message when the content is not complete.', 'lifterlms' ) : __( 'No message.', 'lifterlms' ) }
					checked={ incompleteMsg }
					onChange={ () => setAttributes( { incompleteMsg: ! incompleteMsg } ) }
				/>

				<ToggleControl
					label={ __( 'Completed message', 'lifterlms' ) }
					help={ completeMsg ? __( 'Show a message when the content has been completed.', 'lifterlms' ) : __( 'No message.', 'lifterlms' ) }
					checked={ completeMsg }
					onChange={ () => setAttributes( { completeMsg: ! completeMsg } ) }
				/>

			</PanelBody>

			<PanelBody title={ __( 'User Progress Reset', 'lifterlms' ) }>

				<ToggleControl
					label={ __( 'Progress Reset', 'lifterlms' ) }
					help={ allowReset ? __( 'Completed content can be marked incomplete', 'lifterlms' ) : __( 'Completed content cannot be marked incomplete', 'lifterlms' ) }
					checked={ allowReset }
					onChange={ () => setAttributes( { allowReset: ! allowReset } ) }
				/>

			</PanelBody>
		</InspectorControls>
	);
}
