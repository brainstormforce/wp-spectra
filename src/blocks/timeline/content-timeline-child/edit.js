/**
 * BLOCK: Content Timeline child.
 */

import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';

const ContentTimelineChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	const { isSelected, setAttributes } = props;

	useEffect( () => {
		// Replacement for componentDidMount.
		//Store client id.
		setAttributes( { block_id: props.clientId } );
	}, [] );

	useEffect( () => {
		const loadContentTimelineEditor = new CustomEvent( 'UAGTimelineEditor', {
			// eslint-disable-line no-undef
			detail: {},
		} );
		document.dispatchEvent( loadContentTimelineEditor );
	}, [ props, deviceType ] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default ContentTimelineChildComponent;
