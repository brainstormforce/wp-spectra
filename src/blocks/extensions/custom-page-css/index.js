import CodeMirror from 'react-codemirror';
import { select, dispatch } from '@wordpress/data';

const PageCustomCSS = (props) => {

	return (
		<CodeMirror
			options={{
				mode: 'css',
				lineNumbers: true,
				indentUnit: 2,
				tabSize: 2,
				height: 'auto',
				lineWrapping: true,
				scrollbarStyle: 'null',
			}}
			value={select('core/editor').getEditedPostAttribute('meta')['_uag_custom_page_level_css']}
			onChange={(newValue) => {
				dispatch('core/editor').editPost({meta: {_uag_custom_page_level_css: newValue}})
			}}
		/>
	);
}

export default PageCustomCSS;
