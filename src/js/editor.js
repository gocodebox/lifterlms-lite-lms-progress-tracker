import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './editor/edit';
import save from './editor/save';

import editor from '../scss/editor.scss'

registerBlockType( 'llms-lite-lms/progress-tracker', {
	title: __( 'Lite LMS Progress Tracker by LifterLMS', 'lifterlms' ),
	description: __( 'A simple way to turn any WordPress post or page into a completable course.', 'lifterlms' ),
	category: 'common',
	icon: {
		foreground: '#466dd8',
		src: 'yes-alt'
	},
	attributes: {
		completeMsg: {
			type: 'boolean',
			default: true,
		},
		incompleteMsg: {
			type: 'boolean',
			default: true,
		},
		allowReset: {
			type: 'boolean',
			default: false,
		},
		postId: {
			type: 'integer',
		},
	},
	multiple: false,
	edit,
	save,
} );
