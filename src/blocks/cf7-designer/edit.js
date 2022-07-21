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

			fieldBorderStyle,
			fieldBorderWidth,
			fieldBorderColor,
			fieldBorderHColor,
			fieldBorderRadius,
			inputBorderTopWidth,
			inputBorderLeftWidth,
			inputBorderRightWidth,
			inputBorderBottomWidth,
			inputBorderTopLeftRadius,
			inputBorderTopRightRadius,
			inputBorderBottomLeftRadius,
			inputBorderBottomRightRadius,
			inputBorderColor,
			inputBorderHColor,
			inputBorderStyle,

			buttonBorderWidth,
			buttonBorderRadius,
			buttonBorderColor,
			buttonBorderHColor,
			buttonBorderStyle,
			btnBorderTopWidth,
			btnBorderLeftWidth,
			btnBorderRightWidth,
			btnBorderBottomWidth,
			btnBorderTopLeftRadius,
			btnBorderTopRightRadius,
			btnBorderBottomLeftRadius,
			btnBorderBottomRightRadius,
			btnBorderColor,
			btnBorderHColor,
			btnBorderStyle,
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

		if( fieldBorderWidth ){
			if( undefined === inputBorderTopWidth ) {
				props.setAttributes( {
					inputBorderTopWidth: fieldBorderWidth,
				} );
			}
			if( undefined === inputBorderLeftWidth ) {
				props.setAttributes( { inputBorderLeftWidth : fieldBorderWidth} );
			}
			if( undefined === inputBorderRightWidth ) {
				props.setAttributes( { inputBorderRightWidth : fieldBorderWidth} );
			}
			if( undefined === inputBorderBottomWidth ) {
				props.setAttributes( { inputBorderBottomWidth : fieldBorderWidth} );
			}
		}

		if( fieldBorderRadius ){

			if( undefined === inputBorderTopLeftRadius ) {
				props.setAttributes( { inputBorderTopLeftRadius : fieldBorderRadius} );
			}
			if( undefined === inputBorderTopRightRadius ) {
				props.setAttributes( { inputBorderTopRightRadius : fieldBorderRadius} );
			}
			if( undefined === inputBorderBottomLeftRadius ) {
				props.setAttributes( { inputBorderBottomLeftRadius : fieldBorderRadius} );
			}
			if( undefined === inputBorderBottomRightRadius ) {
				props.setAttributes( { inputBorderBottomRightRadius : fieldBorderRadius} );
			}
		}

		if( fieldBorderColor ){
			if( undefined === inputBorderColor ) {
				props.setAttributes( { inputBorderColor : fieldBorderColor} );
			}
		}

		if( fieldBorderHColor ){
			if( undefined === inputBorderHColor ) {
				props.setAttributes( { inputBorderHColor : fieldBorderHColor} );
			}
		}

		if( fieldBorderStyle ){
			if( undefined === inputBorderStyle ) {
				props.setAttributes( { inputBorderStyle : fieldBorderStyle} );
			}
		}


		if( buttonBorderWidth ){
			if( undefined === btnBorderTopWidth ) {
				props.setAttributes( {
					btnBorderTopWidth: buttonBorderWidth,
				} );
			}
			if( undefined === btnBorderLeftWidth ) {
				props.setAttributes( { btnBorderLeftWidth : buttonBorderWidth} );
			}
			if( undefined === btnBorderRightWidth ) {
				props.setAttributes( { btnBorderRightWidth : buttonBorderWidth} );
			}
			if( undefined === btnBorderBottomWidth ) {
				props.setAttributes( { btnBorderBottomWidth : buttonBorderWidth} );
			}
		}

		if( buttonBorderRadius ){

			if( undefined === btnBorderTopLeftRadius ) {
				props.setAttributes( { btnBorderTopLeftRadius : buttonBorderRadius} );
			}
			if( undefined === btnBorderTopRightRadius ) {
				props.setAttributes( { btnBorderTopRightRadius : buttonBorderRadius} );
			}
			if( undefined === btnBorderBottomLeftRadius ) {
				props.setAttributes( { btnBorderBottomLeftRadius : buttonBorderRadius} );
			}
			if( undefined === btnBorderBottomRightRadius ) {
				props.setAttributes( { btnBorderBottomRightRadius : buttonBorderRadius} );
			}
		}

		if( buttonBorderColor ){
			if( undefined === btnBorderColor ) {
				props.setAttributes( { btnBorderColor : buttonBorderColor} );
			}
		}

		if( buttonBorderHColor ){
			if( undefined === btnBorderHColor ) {
				props.setAttributes( { btnBorderHColor : buttonBorderHColor} );
			}
		}

		if( buttonBorderStyle ){
			if( undefined === btnBorderStyle ) {
				props.setAttributes( { btnBorderStyle : buttonBorderStyle} );
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
			<Settings parentProps={ props } deviceType = { deviceType }/>
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
