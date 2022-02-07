/**
 * BLOCK: Team
 */

import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/team/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/team/render" */ './render' )
);

const UAGBTeam = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-team-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );
	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-team-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ deviceType ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );

		const {
			imgLeftMargin,
			imgRightMargin,
			imgTopMargin,
			imgBottomMargin,
			imageLeftMargin,
			imageRightMargin,
			imageTopMargin,
			imageBottomMargin,
		} = props.attributes;

		if ( imgTopMargin ) {
			if ( ! imageTopMargin ) {
				props.setAttributes( { imageTopMargin: imgTopMargin } );
			}
		}
		if ( imgBottomMargin ) {
			if ( ! imageBottomMargin ) {
				props.setAttributes( { imageBottomMargin: imgBottomMargin } );
			}
		}

		if ( imgLeftMargin ) {
			if ( ! imageLeftMargin ) {
				props.setAttributes( { imageLeftMargin: imgLeftMargin } );
			}
		}
		if ( imgRightMargin ) {
			if ( ! imageRightMargin ) {
				props.setAttributes( { imageRightMargin: imgRightMargin } );
			}
		}

	}, [] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBTeam;
