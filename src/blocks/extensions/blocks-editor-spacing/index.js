import styling from './styling';

const getEditorDocument = () => {
	const editorIframe = document.querySelector( 'iframe[name="editor-canvas"]' );
	return editorIframe?.contentDocument || document;
};

const blocksEditorSpacing = () => {
	const editorDoc = getEditorDocument();
	if ( ! editorDoc?.head ) {
		return;
	}
	const style = styling();
	const node = editorDoc.createElement( 'style' );
	node.setAttribute( 'id', 'uagb-blocks-editor-spacing-style' );
	node.textContent = style;
	editorDoc.head.appendChild( node );
};

export default blocksEditorSpacing;