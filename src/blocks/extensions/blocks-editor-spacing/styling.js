/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling() {

	let selectors = {};

	selectors = {
		'.edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper > * + *, .edit-post-visual-editor .editor-styles-wrapper .block-editor-block-list__layout.is-root-container > * + *': {
			'margin-block-start' : uagb_blocks_info?.blocks_editor_spacing + 'px;',
			'margin-top' : uagb_blocks_info?.blocks_editor_spacing + 'px;',
		},

	};

	let stylingCss = '';

	stylingCss = generateCSS( selectors, '' );

	return stylingCss;
}

export default styling;
