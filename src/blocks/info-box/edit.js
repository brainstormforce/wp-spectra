/**
 * BLOCK: Info Box - Edit Class
 */
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import InfoBoxStyle from './inline-styles';

const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/render" */ './render' )
);
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/settings" */ './settings' )
);

const UAGBInfoBox = ( props ) => {
	useEffect( () => {

		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

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
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: ctaBtnVertPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: ctaBtnVertPadding } );
			}
		}
		if ( ctaBtnHrPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: ctaBtnHrPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
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

export default UAGBInfoBox;
