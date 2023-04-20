import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const AddStaticStyles = ( ChildComponent )=> {
	const WrapWithStyle = ( props ) => {
		useEffect( () => {
			addBlockEditorDynamicStyles();
		}, [] );

		return <ChildComponent { ...props }/>
	}

    return WrapWithStyle;
}
export default AddStaticStyles;