/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling() {

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	selectors = {
		'.edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper > * + *, .edit-post-visual-editor .editor-styles-wrapper .block-editor-block-list__layout.is-root-container > * + *': {
			'margin-block-start' : uagb_blocks_info?.blocks_editor_spacing + 'px',
			'margin-top' : uagb_blocks_info?.blocks_editor_spacing + 'px',
		},

	};
	tabletSelectors = {
		'.editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block': {
			'margin-block-start' : uagb_blocks_info?.blocks_editor_spacing + 'px',
			'margin-top' : uagb_blocks_info?.blocks_editor_spacing + 'px',
		},

	};
	mobileSelectors = {
		'.editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block': {
			'margin-block-start' : uagb_blocks_info?.blocks_editor_spacing + 'px',
			'margin-top' : uagb_blocks_info?.blocks_editor_spacing + 'px',
		},

	};

	let stylingCss = '';

	stylingCss = generateCSS( selectors, '' );
	stylingCss += generateCSS(
		tabletSelectors,
		` `,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		` `,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
