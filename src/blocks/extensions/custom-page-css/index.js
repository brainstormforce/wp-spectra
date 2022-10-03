import { select, dispatch } from '@wordpress/data';
import { useRef, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import editorStyles from './editor.lazy.scss';
import { useLayoutEffect } from 'react';

const PageCustomCSS = () => {

	const tabRef = useRef( null );

	useLayoutEffect( () => {
		editorStyles.use();
		return () => {
			editorStyles.unuse();
		};
	}, [] );

	useEffect( () => {
		return () => {
			const spectraCustomCSSPanel = document.querySelector( '.spectra-custom-css-panel' );
			const editors = spectraCustomCSSPanel?.querySelectorAll( '.CodeMirror-wrap' );

			if ( editors ) {
				editors?.forEach( editor => {
					editor?.remove();
				} );
			}
		};
	  }, [] );

	useEffect( () => {

		const spectraCustomCSSPanel = document.querySelector( '.spectra-custom-css-panel' );
		const editors = spectraCustomCSSPanel?.querySelectorAll( '.CodeMirror-wrap' );

		if ( editors ) {
			editors?.forEach( editor => {
				editor?.remove();
			} );
		}

		const editor = wp?.codeEditor?.initialize( tabRef?.current, wp.codeEditor.defaultSettings.codemirror );
		const codeMirrorEditor = document.querySelector( '.CodeMirror-code' );

		if ( codeMirrorEditor ) {
			codeMirrorEditor?.addEventListener( 'keyup', function () {
				editor?.codemirror?.save();
				const value = editor?.codemirror?.getValue();
				dispatch( 'core/editor' ).editPost( {meta: {_uag_custom_page_level_css: value}} )

			} );
		}
    }, [tabRef] );

	return (
		<>
		<p className='spectra-custom-css-notice'>
			{
				__( 'You can use this area to further customize any block. Any custom CSS added here will load on the frontend' )
			}
		</p>
		<textarea value={select( 'core/editor' ).getEditedPostAttribute( 'meta' )._uag_custom_page_level_css} ref={tabRef}></textarea>
		</>
	);
}

export default PageCustomCSS;
