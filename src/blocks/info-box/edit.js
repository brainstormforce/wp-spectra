/**
 * BLOCK: Info Box - Edit Class
 */
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import styling from './styling';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/render" */ './render' )
);
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/info-box/settings" */ './settings' )
);

const UAGBInfoBox = ( props ) => {
	const deviceType = useDeviceType();

	useEffect( () => {

		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );
		
		const {
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			ctaBorderStyle,
			ctaBorderWidth,
			ctaBorderRadius,
			ctaBorderColor,
			ctaBorderhoverColor 
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
		// Backward Border Migration
		if( ctaBorderWidth || ctaBorderRadius || ctaBorderColor || ctaBorderhoverColor || ctaBorderStyle ){
			
			const migrationAttributes = migrateBorderAttributes( 'btn', {
				label: 'ctaBorderWidth',
				value: ctaBorderWidth,
			}, {
				label: 'ctaBorderRadius',
				value: ctaBorderRadius
			}, {
				label: 'ctaBorderColor',
				value: ctaBorderColor
			}, {
				label: 'ctaBorderhoverColor',
				value: ctaBorderhoverColor
			},{
				label: 'ctaBorderStyle',
				value: ctaBorderStyle
			} );
			props.setAttributes( migrationAttributes )
		}
	}, [] );

	useEffect( () => {
	
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-info-box-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ deviceType ] );

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
