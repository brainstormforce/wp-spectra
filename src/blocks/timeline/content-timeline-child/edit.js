/**
 * BLOCK: Content Timeline child.
 */

import { useEffect } from '@wordpress/element';
import Settings from './settings';
import Render from './render';

const ContentTimelineChildComponent = ( props ) => {
	const { isSelected, setAttributes, deviceType, clientId } = props;

	useEffect( () => {
		// Replacement for componentDidMount.
		//Store client id.
		setAttributes( { block_id: clientId } );
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
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default ContentTimelineChildComponent;
