import styling from './styling';
import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { __ } from '@wordpress/i18n';
import { SelectControl, Placeholder } from '@wordpress/components';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/cf7-styler/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/cf7-styler/render" */ './render' )
);

import { withSelect } from '@wordpress/data';

const UAGBCF7 = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { isHtml: false } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-cf7-styler-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

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

		if (msgVrPadding) {
			if (!messageTopPaddingDesktop) {
				setAttributes({ messageTopPaddingDesktop: msgVrPadding });
			}
			if (!messageBottomPaddingDesktop) {
				setAttributes({ messageBottomPaddingDesktop: msgVrPadding });
			}
		}
		if (msgHrPadding) {
			if (!messageRightPaddingDesktop) {
				setAttributes({ messageRightPaddingDesktop: msgHrPadding });
			}
			if (!messageLeftPaddingDesktop) {
				setAttributes({ messageLeftPaddingDesktop: msgHrPadding });
			}
		}

		if (buttonVrPadding) {
			if (!buttonTopPaddingDesktop) {
				setAttributes({ buttonTopPaddingDesktop: buttonVrPadding });
			}
			if (!buttonBottomPaddingDesktop) {
				setAttributes({ buttonBottomPaddingDesktop: buttonVrPadding });
			}
		}
		if (buttonHrPadding) {
			if (!buttonRightPaddingDesktop) {
				setAttributes({ buttonRightPaddingDesktop: buttonHrPadding });
			}
			if (!buttonLeftPaddingDesktop) {
				setAttributes({ buttonLeftPaddingDesktop: buttonHrPadding });
			}
		}

		if (fieldVrPadding) {
			if (!fieldTopPaddingDesktop) {
				setAttributes({ fieldTopPaddingDesktop: fieldVrPadding });
			}
			if (!fieldBottomPaddingDesktop) {
				setAttributes({ fieldBottomPaddingDesktop: fieldVrPadding });
			}
		}
		if (fieldHrPadding) {
			if (!fieldRightPaddingDesktop) {
				setAttributes({ fieldRightPaddingDesktop: fieldHrPadding });
			}
			if (!fieldLeftPaddingDesktop) {
				setAttributes({ fieldLeftPaddingDesktop: fieldHrPadding });
			}
		}
	}, [] );

	useEffect( () => {
		jQuery( '.wpcf7-submit' ).click( function ( event ) {
			event.preventDefault();
		} );
		const element = document.getElementById(
			'uagb-cf7-styler-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	const { formId } = props.attributes;
	/*
	 * Event to set Image as while adding.
	 */
	const onSelectForm = ( id ) => {
		const { setAttributes } = props;
		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}

		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};
	if ( formId == 0 ) {
		return (
			<Placeholder
				icon="admin-post"
				label={ __( "Select a Contact Form 7",'ultimate-addons-for-gutenberg' ) }
			>
				<SelectControl				
					value={ formId }
					onChange={ onSelectForm }
					options={ uagb_blocks_info.cf7_forms }
				/>	
			</Placeholder>
		);
	}

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

	if ( formId && -1 != formId && 0 != formId && ! isHtml ) {
		jQuery.ajax( {
			url: uagb_blocks_info.ajax_url,
			data: {
				action: 'uagb_cf7_shortcode',
				formId,
				nonce: uagb_blocks_info.uagb_ajax_nonce,
			},
			dataType: 'json',
			type: 'POST',
			success( data ) {
				setAttributes( { isHtml: true } );
				setAttributes( { formJson: data } );
				jsonData = data;
			},
		} );
	}

	return {
		formHTML: jsonData,
	};
} )( UAGBCF7 );
