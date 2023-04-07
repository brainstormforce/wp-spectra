import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';

const blocksEditorSpacing = () => {
	const style = styling();
	addBlockEditorDynamicStyles( 'uagb-blocks-editor-spacing-style', style );
};

export default blocksEditorSpacing;
