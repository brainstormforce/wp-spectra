import { select, dispatch } from '@wordpress/data';
import { useRef, useEffect, useState, useLayoutEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import editorStyles from './editor.lazy.scss';

const PageCustomCSS = () => {
	const tabRef = useRef( null );
	const [ customCSS, setCustomCSS ] = useState(
		select( 'core/editor' ).getEditedPostAttribute( 'meta' )?._uag_custom_page_level_css
	);

	useLayoutEffect( () => {
		editorStyles.use();
		return () => {
			editorStyles.unuse();
		};
	}, [] );

	useEffect( () => {
		const isExistStyle = document.getElementById(
			'uagb-blocks-editor-custom-css'
		);
		if( ! isExistStyle ){
			const node = document.createElement( 'style' )
			node.setAttribute( 'id', 'uagb-blocks-editor-custom-css' );
			node.textContent = customCSS;
			document.head.appendChild( node )
		}else{
			isExistStyle.textContent = customCSS
		}
	}, [ customCSS ] );

	useEffect( () => {
		return () => {
			const spectraCustomCSSPanel = document.querySelector( '.spectra-custom-css-panel' );
			const editors = spectraCustomCSSPanel?.querySelectorAll( '.CodeMirror-wrap' );

			if ( editors ) {
				editors?.forEach( ( editor ) => {
					editor?.remove();
				} );
			}
		};
	}, [] );

	useEffect( () => {
		const spectraCustomCSSPanel = document.querySelector( '.spectra-custom-css-panel' );
		const editors = spectraCustomCSSPanel?.querySelectorAll( '.CodeMirror-wrap' );

		if ( editors ) {
			editors?.forEach( ( editor ) => {
				editor?.remove();
			} );
		}

		const editor = wp?.codeEditor?.initialize( tabRef?.current, {
			...wp.codeEditor.defaultSettings.codemirror,
			scrollbarStyle: null,
		} );
		const codeMirrorEditor = document.querySelector( '.CodeMirror-code' );

		if ( codeMirrorEditor ) {
			codeMirrorEditor?.addEventListener( 'keyup', function () {
				editor?.codemirror?.save();
				const value = editor?.codemirror?.getValue();
				setCustomCSS( value );
				dispatch( 'core/editor' ).editPost( { meta: { _uag_custom_page_level_css: value } } );
			} );
		}
	}, [ tabRef ] );

	return (
		<>
			<p className="spectra-custom-css-notice">
				{ __( 'Add your own CSS code here to customize the page as per your expectations.', 'ultimate-addons-for-gutenberg' ) }
			</p>
			<hr></hr>
			<p className="spectra-custom-css-example spectra-custom-css-notice">
				{ uagb_blocks_info.spectra_custom_css_example }
			</p>

			<textarea value={ customCSS } ref={ tabRef }></textarea>
		</>
	);
};

export default PageCustomCSS;
