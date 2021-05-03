/**
 * BLOCK: Content Timeline child.
 */

import { __ } from '@wordpress/i18n';
import contentTimelineChildSettings from './settings';
import renderContentTimelineChild from './render';
import React, { useEffect } from 'react';

const contentTimelineChildComponent = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.

		//Store client id.
		props.setAttributes( { block_id: props.clientId } );
	}, [] );

	return (
		<>
			{ contentTimelineChildSettings( props ) }
			{ renderContentTimelineChild( props ) }
		</>
	);
};
export default contentTimelineChildComponent;
