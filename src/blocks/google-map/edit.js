import React, { useEffect } from 'react';
import Settings from './settings';
import Render from './render';

const UAGBGoogleMap = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} );
	}, [] );

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBGoogleMap;
