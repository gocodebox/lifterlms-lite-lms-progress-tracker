/**
 * Main editor script
 *
 * @since [version]
 * @version [version]
 */

// Styles.
import '../scss/editor.scss'

// Block definition.
import block from '../../block.json';

// Internal Deps.
import edit from './editor/edit';
import save from './editor/save';

// External Deps.
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'llms-lite-lms/progress-tracker', {
	...block,
	edit,
	save,
} );
