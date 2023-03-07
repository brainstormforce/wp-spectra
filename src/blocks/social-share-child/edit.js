/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes

import styling from './styling';
import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { select } from '@wordpress/data';
import Settings from './settings';
import Render from './render';

const SocialShareChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	const { isSelected, setAttributes, attributes, clientId } = props;
	
	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		if ( select( 'core/editor' ) ) {
			setAttributes( {
				current_url: select( 'core/editor' ).getPermalink(),
			} );
		}

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-child-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default SocialShareChildComponent;
