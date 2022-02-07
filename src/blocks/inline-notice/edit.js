/**
 * Inline Notice Block.
 */

// Import block dependencies and components.
import styling from './styling';
import lazyLoader from '@Controls/lazy-loader';
import React, { useEffect, Suspense, lazy } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/inline-notice/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/inline-notice/render" */ './render' )
);

const UAGBInlineNoticeEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes, clientId, attributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		const {
			contentVrPadding,
			contentHrPadding,
			titleVrPadding,
			titleHrPadding,
			titleTopPadding,
			titleRightPadding,
			titleBottomPadding,
			titleLeftPadding,
			contentTopPadding,
			contentRightPadding,
			contentBottomPadding,
			contentLeftPadding,
		} = attributes;

		if ( titleVrPadding ) {
			if ( undefined === titleTopPadding ) {
				setAttributes( { titleTopPadding: titleVrPadding } );
			}
			if ( undefined === titleBottomPadding ) {
				setAttributes( { titleBottomPadding: titleVrPadding } );
			}
		}
		if ( titleHrPadding ) {
			if ( undefined === titleRightPadding ) {
				setAttributes( { titleRightPadding: titleHrPadding } );
			}
			if ( undefined === titleLeftPadding ) {
				setAttributes( { titleLeftPadding: titleHrPadding } );
			}
		}

		if ( contentVrPadding ) {
			if ( undefined === contentTopPadding ) {
				setAttributes( { contentTopPadding: contentVrPadding } );
			}
			if ( undefined === contentBottomPadding ) {
				setAttributes( { contentBottomPadding: contentVrPadding } );
			}
		}
		if ( contentHrPadding ) {
			if ( undefined === contentRightPadding ) {
				setAttributes( { contentRightPadding: contentHrPadding } );
			}
			if ( undefined === contentLeftPadding ) {
				setAttributes( { contentLeftPadding: contentHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-inline-notice-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-inline-notice-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBInlineNoticeEdit;
