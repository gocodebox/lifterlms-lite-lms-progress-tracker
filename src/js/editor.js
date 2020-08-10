/**
 * Main editor script
 *
 * @package LifterLMS/LMS_Lite/scripts
 *
 * @since [version]
 * @version [version]
 */

// Styles.
import editor from '../scss/editor.scss'

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
