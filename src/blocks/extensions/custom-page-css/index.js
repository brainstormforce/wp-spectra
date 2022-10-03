import { select, dispatch } from '@wordpress/data';
import { useRef, useEffect } from '@wordpress/element';

const PageCustomCSS = (props) => {

	const tabRef = useRef( null );

	useEffect( () => {
		const editor = wp?.codeEditor?.initialize(tabRef?.current);
		const codeMirrorEditor = document.querySelector('.CodeMirror-code');

		if ( codeMirrorEditor ) {
			codeMirrorEditor?.addEventListener( 'keyup', function () {
				editor?.codemirror?.save();
				const value = editor?.codemirror?.getValue();
				dispatch('core/editor').editPost({meta: {_uag_custom_page_level_css: value}})

			});
		}
    }, [tabRef] );

	return (
		<textarea value={select('core/editor').getEditedPostAttribute('meta')['_uag_custom_page_level_css']} ref={tabRef}></textarea>
	);
}

export default PageCustomCSS;
