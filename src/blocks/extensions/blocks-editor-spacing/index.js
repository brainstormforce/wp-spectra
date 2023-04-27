import styling from './styling';

const blocksEditorSpacing = () => {
	const style = styling();
	const node = document.createElement( 'style' )
	node.setAttribute( 'id', 'uagb-blocks-editor-spacing-style' );
	node.textContent = style;
	document.head.appendChild( node );
};

export default blocksEditorSpacing;