import CodeMirror from 'react-codemirror';
import { select, dispatch } from '@wordpress/data';
import { useRef, useEffect, useState } from '@wordpress/element';

const PageCustomCSS = (props) => {

	const [customCSS, setCustomCSS] = useState(select('core/editor').getEditedPostAttribute('meta')['_uag_custom_page_level_css']);

	const tabRef = useRef( null );
	useEffect( () => {
		console.log(tabRef.current);
		wp.codeEditor.initialize(tabRef.current);
    }, [tabRef] );
	return (
		<textarea
			ref={tabRef}
			value={customCSS}
			onChange={(event) => {
				console.log(event);
				setCustomCSS(event.target.value)
				dispatch('core/editor').editPost({meta: {_uag_custom_page_level_css: event.target.value}})
			}}
		></textarea>
	);
}

export default PageCustomCSS;
