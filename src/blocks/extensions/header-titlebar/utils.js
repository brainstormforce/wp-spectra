import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

// CSS Styling to hide the default title, and to reduce the top spacing in the visual editor to match the default side margins.
const editorStyling = ( isDistractionFree ) => ( `.edit-post-visual-editor__post-title-wrapper, .edit-post-visual-editor__post-title-wrapper *.editor-post-title__input {
	display: none !important;
}
.edit-post-text-editor__body .wp-block-post-title.editor-post-title {
	display: none !important;
}
.edit-post-visual-editor__post-title-wrapper + .block-editor-block-list__layout.is-root-container {
	padding-top: ${ isDistractionFree ? '70px' : '10px' };
}
` );

// The ID for the style tag.
const editorAlteringStyleId = 'spectra-editor-top-titlebar-style';

// Hides the default title by applying CSS to the title and the wrapper.
export const alterEditorTitleStyling = ( isDistractionFree ) => {

	// If the style tag doesn't exist, create it.
	let styleTag = document.getElementById( editorAlteringStyleId );
	if ( ! styleTag ) {
		styleTag = document.createElement( 'style' );
		styleTag.setAttribute( 'id', editorAlteringStyleId );
		document.head.appendChild( styleTag );
	}

	// Replace the content of the style tag with the required editor CSS.
	styleTag.textContent = editorStyling( isDistractionFree );

	// If an iframe is present, append the style tag to the iframe head as well.
	const iframeCheckInterval = setInterval( () => {
		const getAllIframes = document.getElementsByTagName( 'iframe' );
		if ( ! getAllIframes?.length ) {
			return;
		}

		for ( const iterateIframes of getAllIframes ) {
			const iframeDocument = iterateIframes?.contentWindow.document || iterateIframes?.contentDocument;
			if ( ! iframeDocument?.head ) {
				continue;
			}

			clearInterval( iframeCheckInterval );
			const requiresDistractionFree = ! iframeDocument && isDistractionFree;

			const iframeStyleTag = iframeDocument.getElementById( editorAlteringStyleId );
			if ( ! iframeStyleTag ) {
				const node = document.createElement( 'style' );
				node.setAttribute( 'id', editorAlteringStyleId );
				node.textContent = editorStyling( requiresDistractionFree );
				iframeDocument.head.appendChild( node );
			} else {
				iframeStyleTag.textContent = editorStyling( requiresDistractionFree );
			}
		}
	}, 100 );
};

// Checks if the current post type supports Custom Fields.
export const checkCustomFieldsSupport = async ( postType ) => {
	const queryParams = {
		post_type: postType,
	}

	return await apiFetch( {
		path: addQueryArgs( '/spectra/v1/check-custom-fields-support', queryParams ),
	} )
};