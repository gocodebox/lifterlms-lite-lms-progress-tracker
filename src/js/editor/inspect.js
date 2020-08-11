import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

/**
 * Inspector controls for use in the block editor
 *
 * @since 0.0.1
 * @since 0.0.1 Add unique className properties to each toggle.
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
			<PanelBody title={ __( 'User Messages', 'llms-lite-progress' ) }>

				<ToggleControl
					className="llms-lite-lms-toggle--incomplete-msg"
					label={ __( 'Incomplete message', 'llms-lite-progress' ) }
					help={ incompleteMsg ? __( 'Show a message when the content is not complete.', 'llms-lite-progress' ) : __( 'No message.', 'llms-lite-progress' ) }
					checked={ incompleteMsg }
					onChange={ () => setAttributes( { incompleteMsg: ! incompleteMsg } ) }
				/>

				<ToggleControl
					className="llms-lite-lms-toggle--complete-msg"
					label={ __( 'Completed message', 'llms-lite-progress' ) }
					help={ completeMsg ? __( 'Show a message when the content has been completed.', 'llms-lite-progress' ) : __( 'No message.', 'llms-lite-progress' ) }
					checked={ completeMsg }
					onChange={ () => setAttributes( { completeMsg: ! completeMsg } ) }
				/>

			</PanelBody>

			<PanelBody title={ __( 'User Progress Reset', 'llms-lite-progress' ) }>

				<ToggleControl
					className="llms-lite-lms-toggle--reset"
					label={ __( 'Progress Reset', 'llms-lite-progress' ) }
					help={ allowReset ? __( 'Completed content can be marked incomplete', 'llms-lite-progress' ) : __( 'Completed content cannot be marked incomplete', 'llms-lite-progress' ) }
					checked={ allowReset }
					onChange={ () => setAttributes( { allowReset: ! allowReset } ) }
				/>

			</PanelBody>
		</InspectorControls>
	);
}
