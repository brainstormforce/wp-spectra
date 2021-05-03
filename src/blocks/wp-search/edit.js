/**
 * BLOCK: WP Search
 */

import styling from './styling';
import React, { useState, useEffect } from 'react';
import Settings from './settings';
import Render from './render';

const { select, withSelect } = wp.data;

const UAGBWpSearchEdit = ( props ) => {
	const initState = {
		isFocused: 'false',
	};

	const [ state, setState ] = useState( initState );

	// componentDidMount.
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} ); // Pushing Style tag for this block css.

		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-wp-search-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [ props ] );

	// componentDidUpdate.
	useEffect( () => {
		if ( ! props.isSelected && state.isFocused ) {
			setState( {
				isFocused: 'false',
			} );
		}
		if ( props.isSelected ) {
			setState( {
				isFocused: true,
			} );
		}

		const element = document.getElementById(
			'uagb-style-wp-search-' + props.clientId.substr( 0, 8 )
		);

		if ( null != element && 'undefined' !== typeof element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
};

export default withSelect( ( select, props ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);

	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( UAGBWpSearchEdit );
