/**
 * BLOCK: Info Box - Edit Class
 */
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import InfoBoxStyle from './inline-styles';

import { withSelect } from '@wordpress/data';

const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/render" */ './render' )
);
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/settings" */ './settings' )
);

const UAGBInfoBox = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-info-box-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const {
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
		} = props.attributes;

		if ( ctaBtnVertPadding ) {
			if ( ! paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: ctaBtnVertPadding } );
			}
			if ( ! paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: ctaBtnVertPadding } );
			}
		}
		if ( ctaBtnHrPadding ) {
			if ( ! paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: ctaBtnHrPadding } );
			}
			if ( ! paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: ctaBtnHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-info-box-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = InfoBoxStyle( props );
		}
	}, [ props ] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};
export default withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( UAGBInfoBox );
