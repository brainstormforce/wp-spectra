/**
 * BLOCK: Forms - Edit
 */

import React, { useEffect, useCallback, Suspense, lazy } from 'react';
import styling from './styling';
import UAGB_Block_Icons from '@Controls/block-icons';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/form/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/form/render" */ './render' )
);

import { withSelect, useDispatch } from '@wordpress/data';

import { compose, createHigherOrderComponent } from '@wordpress/compose';

import { createBlock } from '@wordpress/blocks';

import { __experimentalBlockVariationPicker } from '@wordpress/block-editor';

import { withNotices } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import apiFetch from '@wordpress/api-fetch';

const UAGBFormsEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const {
			vPaddingSubmit,
			hPaddingSubmit,
			vPaddingField,
			hPaddingField,
			paddingFieldTop,
			paddingFieldRight,
			paddingFieldBottom,
			paddingFieldLeft,
			paddingBtnTop,
			paddingBtnRight,
			paddingBtnBottom,
			paddingBtnLeft,
			reCaptchaSiteKeyV2,
			reCaptchaSecretKeyV2,
			reCaptchaSiteKeyV3,
			reCaptchaSecretKeyV3,
			reCaptchaEnable
		} = props.attributes;

		if ( vPaddingSubmit ) {
			if ( undefined === paddingBtnTop ) {
				setAttributes( { paddingBtnTop: vPaddingSubmit } );
			}
			if ( undefined === paddingBtnBottom ) {
				setAttributes( { paddingBtnBottom: vPaddingSubmit } );
			}
		}
		if ( hPaddingSubmit ) {
			if ( undefined === paddingBtnRight ) {
				setAttributes( { paddingBtnRight: hPaddingSubmit } );
			}
			if ( undefined === paddingBtnLeft ) {
				setAttributes( { paddingBtnLeft: hPaddingSubmit } );
			}
		}
		if ( vPaddingField ) {
			if ( undefined === paddingFieldTop ) {
				setAttributes( { paddingFieldTop: vPaddingField } );
			}
			if ( undefined === paddingFieldBottom ) {
				setAttributes( { paddingFieldBottom: vPaddingField } );
			}
		}
		if ( hPaddingField ) {
			if ( undefined === paddingFieldRight ) {
				setAttributes( { paddingFieldRight: hPaddingField } );
			}
			if ( undefined === paddingFieldLeft ) {
				setAttributes( { paddingFieldLeft: hPaddingField } );
			}
		}

		const id = props.clientId;

		window.addEventListener( 'load', renderReadyClasses( id ) );

		if( reCaptchaEnable ) {

			const keys = {};
			if( '' === uagb_blocks_info.recaptcha_site_key_v2 && '' === uagb_blocks_info.recaptcha_secret_key_v2 && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 ) {

				keys.reCaptchaSiteKeyV2 = reCaptchaSiteKeyV2;
				keys.reCaptchaSecretKeyV2 = reCaptchaSecretKeyV2;
			}
			if( '' === uagb_blocks_info.recaptcha_site_key_v3 && '' === uagb_blocks_info.recaptcha_secret_key_v3 && reCaptchaSiteKeyV3 && reCaptchaSecretKeyV3 ) {

				keys.reCaptchaSiteKeyV3 = reCaptchaSiteKeyV3;
				keys.reCaptchaSecretKeyV3 = reCaptchaSecretKeyV3;
			}

			const formData = new window.FormData();

			formData.append( 'action', 'uagb_forms_recaptcha' );
			formData.append( 'nonce', uagb_blocks_info.uagb_ajax_nonce );
			formData.append( 'value', JSON.stringify( keys ) );

			if ( Object.keys( keys ).length !== 0 ) {

				apiFetch( {
					url: uagb_blocks_info.ajax_url,
					method: 'POST',
					body: formData,
				} ).then( () => {
				} );
			}
		}
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-forms-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-forms-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	const blockVariationPickerOnSelect = useCallback(
		( nextVariation = props.defaultVariation ) => {
			if ( nextVariation.attributes ) {
				props.setAttributes( nextVariation.attributes );
			}

			if ( nextVariation.innerBlocks ) {
				props.replaceInnerBlocks(
					props.clientId,
					createBlocksFromInnerBlocksTemplate(
						nextVariation.innerBlocks
					)
				);
			}
		}
	);
	const createBlocksFromInnerBlocksTemplate = useCallback(
		( innerBlocksTemplate ) => {
			return innerBlocksTemplate.map(
				( [ name, attributes, innerBlocks = [] ] ) =>
					createBlock(
						name,
						attributes,
						createBlocksFromInnerBlocksTemplate( innerBlocks )
					)
			);
		}
	);
	const { variations, hasInnerBlocks } = props;

	const renderReadyClasses = useCallback( ( id ) => {
		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let mainDiv;
		let formscope;
		if( iframeEl ){
			mainDiv = iframeEl.contentDocument.getElementById( 'block-' + id )
			formscope = mainDiv.getElementsByClassName( 'uagb-forms__outer-wrap' )
		} else {
			mainDiv = document.getElementById( 'block-' + id )
			formscope = mainDiv?.getElementsByClassName( 'uagb-forms__outer-wrap' )
		}

		if ( formscope && formscope[ 0 ] ) {
			const editorwrap = formscope[ 0 ].children;
			const formInnerWrap = editorwrap[ 0 ].children;
			const editorBlockWrap = formInnerWrap[ 0 ].getElementsByClassName(
				'block-editor-block-list__layout'
			);
			const sibling = editorBlockWrap[ 0 ].children;

			for ( let index = 0; index < sibling.length; index++ ) {
				if (
					sibling[ index ].classList.contains( 'uag-col-2' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-2' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-2-wrap uag-col-wrap-' + index;
					sibling[ index + 1 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName(
						'uag-col-wrap-' + index
					);
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				} else if (
					sibling[ index ].classList.contains( 'uag-col-3' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-3' ) &&
					sibling[ index + 2 ].classList.contains( 'uag-col-3' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-3-wrap uag-col-wrap-' + index;
					sibling[ index + 2 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName(
						'uag-col-wrap-' + index
					);
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				} else if (
					sibling[ index ].classList.contains( 'uag-col-4' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-4' ) &&
					sibling[ index + 2 ].classList.contains( 'uag-col-4' ) &&
					sibling[ index + 3 ].classList.contains( 'uag-col-4' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-4-wrap uag-col-wrap-' + index;
					sibling[ index + 3 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName(
						'uag-col-wrap-' + index
					);
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				}
			}
		}
	} );
const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/form.png`;
	if ( ! hasInnerBlocks ) {
		return (
			<>
			{ props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
				<__experimentalBlockVariationPicker
					icon={ UAGB_Block_Icons.forms }
					label={ uagb_blocks_info.blocks[ 'uagb/forms' ].title }
					instructions={ __(
						'Select a variation to start with.',
						'ultimate-addons-for-gutenberg'
					) }
					variations={ variations }
					allowSkip
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
					className="uagb-forms-variations"
				/>
	}
			</>
		);
	}

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => {
	const { getBlocks } = select( 'core/block-editor' );
	const {
		getBlockType,
		getBlockVariations,
		getDefaultBlockVariation,
	} = select( 'core/blocks' );

	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		hasInnerBlocks:
			select( 'core/block-editor' ).getBlocks( props.clientId ).length >
			0,

		blockType: getBlockType( props.name ),
		defaultVariation:
			typeof getDefaultBlockVariation === 'undefined'
				? null
				: getDefaultBlockVariation( props.name ),
		variations:
			typeof getBlockVariations === 'undefined'
				? null
				: getBlockVariations( props.name ),
		replaceInnerBlocks,
	};
} );

const addAdvancedClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		return (
			<BlockListBlock
				{ ...props }
				className={ props.attributes.className }
			/>
		);
	};
}, 'addAdvancedClasses' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'uagb/forms', addAdvancedClasses );

export default compose(
	withNotices,
	applyWithSelect,
	addAdvancedClasses
)( UAGBFormsEdit );
