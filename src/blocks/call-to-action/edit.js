/**
 * BLOCK: Call To Action
 */

import CtaStyle from './inline-styles';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/call-to-action/render" */ './render' )
);
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/settings" */ './settings'
	)
);

const UAGBCallToAction = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		const {
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			ctaTopPadding,
			ctaRightPadding,
			ctaBottomPadding,
			ctaLeftPadding,
			ctaPosition,
			stack
		} = props.attributes;

		if( stack === 'tablet') {
			props.setAttributes({stack: 'tablet'});
		}else if ( stack === 'mobile') {
			props.setAttributes({stack: 'mobile'})
		} else if ( stack === 'none' && ctaPosition === 'right' ) {
			props.setAttributes({stack: 'none'})
		} else if ( stack === 'none' && 'below-title' === ctaPosition ) {
			props.setAttributes({ stack: 'desktop' });
		}

		if ( ctaBtnVertPadding ) {
			if ( undefined === ctaTopPadding ) {
				props.setAttributes( { ctaTopPadding: ctaBtnVertPadding } );
			}
			if ( undefined === ctaBottomPadding ) {
				props.setAttributes( { ctaBottomPadding: ctaBtnVertPadding } );
			}
		}
		if ( ctaBtnHrPadding ) {
			if ( undefined === ctaRightPadding ) {
				props.setAttributes( { ctaRightPadding: ctaBtnHrPadding } );
			}
			if ( undefined === ctaLeftPadding ) {
				props.setAttributes( { ctaLeftPadding: ctaBtnHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = CtaStyle( props );

		addBlockEditorDynamicStyles( 'uagb-cta-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = CtaStyle( props );

		addBlockEditorDynamicStyles( 'uagb-cta-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBCallToAction;
