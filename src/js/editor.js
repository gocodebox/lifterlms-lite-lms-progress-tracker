/**
 * Main editor script
 *
 * @since 0.0.1
 * @version [version]
 */

// Styles.
import '../scss/editor.scss';

// Block definition.
import block from '../../block.json';

// Internal Deps.
import edit from './editor/edit';
import save from './editor/save';
import saveDeprecated from './editor/save-deprecated';

// External Deps.
import { registerBlockType } from '@wordpress/blocks';

const { icon } = block;

/**
 * Register the block.
 *
 * @since 0.0.1
 * @since [version] Added deprecatation of version 0.0.1.
 */
registerBlockType( 'llms-lite-lms/progress-tracker', {
	...block,
	icon: {
		foreground: '#466dd8',
		src: icon,
	},
	edit,
	save,
	deprecated: [
		{
			attributes: {
				...block.attributes,
			},
			save: saveDeprecated,
		},
	],
} );
