import styling from './styling';
import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import apiFetch from '@wordpress/api-fetch';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/cf7-styler/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/cf7-styler/render" */ './render' )
);

import { withSelect } from '@wordpress/data';

const UAGBCF7 = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { isHtml: false } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const { attributes, setAttributes } = props;
		const {
			msgVrPadding,
			msgHrPadding,
			messageTopPaddingDesktop,
			messageBottomPaddingDesktop,
			messageRightPaddingDesktop,
			messageLeftPaddingDesktop,
			buttonVrPadding,
			buttonHrPadding,
			buttonTopPaddingDesktop,
			buttonBottomPaddingDesktop,
			buttonRightPaddingDesktop,
			buttonLeftPaddingDesktop,
			fieldVrPadding,
			fieldHrPadding,
			fieldTopPaddingDesktop,
			fieldBottomPaddingDesktop,
			fieldRightPaddingDesktop,
			fieldLeftPaddingDesktop,
		} = attributes;

		if ( msgVrPadding ) {
			if ( ! messageTopPaddingDesktop ) {
				setAttributes( { messageTopPaddingDesktop: msgVrPadding } );
			}
			if ( ! messageBottomPaddingDesktop ) {
				setAttributes( { messageBottomPaddingDesktop: msgVrPadding } );
			}
		}
		if ( msgHrPadding ) {
			if ( ! messageRightPaddingDesktop ) {
				setAttributes( { messageRightPaddingDesktop: msgHrPadding } );
			}
			if ( ! messageLeftPaddingDesktop ) {
				setAttributes( { messageLeftPaddingDesktop: msgHrPadding } );
			}
		}

		if ( buttonVrPadding ) {
			if ( undefined === buttonTopPaddingDesktop ) {
				setAttributes( { buttonTopPaddingDesktop: buttonVrPadding } );
			}
			if ( undefined === buttonBottomPaddingDesktop ) {
				setAttributes( {
					buttonBottomPaddingDesktop: buttonVrPadding,
				} );
			}
		}
		if ( buttonHrPadding ) {
			if ( undefined === buttonRightPaddingDesktop ) {
				setAttributes( { buttonRightPaddingDesktop: buttonHrPadding } );
			}
			if ( undefined === buttonLeftPaddingDesktop ) {
				setAttributes( { buttonLeftPaddingDesktop: buttonHrPadding } );
			}
		}

		if ( fieldVrPadding ) {
			if ( undefined === fieldTopPaddingDesktop ) {
				setAttributes( { fieldTopPaddingDesktop: fieldVrPadding } );
			}
			if ( undefined === fieldBottomPaddingDesktop ) {
				setAttributes( { fieldBottomPaddingDesktop: fieldVrPadding } );
			}
		}
		if ( fieldHrPadding ) {
			if ( undefined === fieldRightPaddingDesktop ) {
				setAttributes( { fieldRightPaddingDesktop: fieldHrPadding } );
			}
			if ( undefined === fieldLeftPaddingDesktop ) {
				setAttributes( { fieldLeftPaddingDesktop: fieldHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		const submitButton = document.querySelector( '.wpcf7-submit' );
		if( submitButton !== null ){
			submitButton.addEventListener( 'click', function ( event ) {
				event.preventDefault();
			} );
		}

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-cf7-styler-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-cf7-styler-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default withSelect( ( select, props ) => {
	const { setAttributes } = props;
	const { formId, isHtml } = props.attributes;
	let jsonData = '';

	if ( formId && -1 !== formId && 0 !== formId && ! isHtml ) {
		const formData = new window.FormData();

		formData.append( 'action', 'uagb_cf7_shortcode' );
		formData.append(
			'nonce',
			uagb_blocks_info.uagb_ajax_nonce
		);
		formData.append( 'formId', formId );

		apiFetch( {
			url: uagb_blocks_info.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setAttributes( { isHtml: true } );
			setAttributes( { formJson: data } );
			jsonData = data;
		} );
	}

	return {
		formHTML: jsonData,
	};
} )( UAGBCF7 );
