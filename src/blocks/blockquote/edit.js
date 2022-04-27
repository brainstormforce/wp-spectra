import styling from './styling';

import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/blockquote/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/blockquote/render" */ './render' )
);

const UAGBBlockQuote = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		props.setAttributes( { classMigrate: true } );
		const {
			tweetBtnVrPadding,
			tweetBtnHrPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			authorImageWidthUnit,
			authorImgBorderRadiusUnit,
		} = props.attributes;
		
		if( undefined ===  authorImageWidthUnit ){
			props.setAttributes( { authorImageWidthUnit: 'px' } );
		} 
		if( undefined ===  authorImgBorderRadiusUnit ){
			props.setAttributes( { authorImgBorderRadiusUnit: '%' } );
		} 

		if ( tweetBtnVrPadding ) {
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: tweetBtnVrPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: tweetBtnVrPadding } );
			}
		}
		if ( tweetBtnHrPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: tweetBtnHrPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: tweetBtnHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-blockquote-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-blockquote-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ deviceType ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBBlockQuote;
