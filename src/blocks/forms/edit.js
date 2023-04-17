/**
 * BLOCK: Forms - Edit
 */
import { useLayoutEffect, useEffect, useCallback, useMemo } from '@wordpress/element';
import styling from './styling';
import UAGB_Block_Icons from '@Controls/block-icons';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { useSelect, useDispatch } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { createBlock } from '@wordpress/blocks';
import { __experimentalBlockVariationPicker } from '@wordpress/block-editor';
import { withNotices } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import styles from './editor.lazy.scss';
import { addFilter } from '@wordpress/hooks';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';

const UAGBFormsEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			reCaptchaSiteKeyV2,
			reCaptchaSecretKeyV2,
			reCaptchaSiteKeyV3,
			reCaptchaSecretKeyV3,
			reCaptchaEnable,
			toggleColor,
			bgColor,
			inputborderStyle,
			inputborderWidth,
			inputborderColor,
			inputborderHoverColor,
			inputborderRadius,
			submitborderWidth,
			submitborderRadius,
			submitborderColor,
			submitborderHoverColor,
			submitborderStyle,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		setAttributes,
		clientId,
		name,
	} = props;

	const {
		innerBlocks, // eslint-disable-line no-unused-vars
		blockType, // eslint-disable-line no-unused-vars
		variations,
		hasInnerBlocks,
		defaultVariation,
	} = useSelect( ( select ) => {
		const { getBlocks } = select( 'core/block-editor' );
		const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

		return {
			innerBlocks: getBlocks( clientId ),
			hasInnerBlocks: select( 'core/block-editor' ).getBlocks( clientId ).length > 0,

			blockType: getBlockType( props.name ),
			defaultVariation:
				typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name ),
			variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( props.name ),
		};
	} );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		if ( bgColor ) {
			if ( undefined === toggleColor ) {
				setAttributes( { toggleColor: bgColor } );
			}
		}

		const id = clientId;

		window.addEventListener( 'load', renderReadyClasses( id ) );

		if ( reCaptchaEnable ) {
			const keys = {};
			if (
				'' === uagb_blocks_info.recaptcha_site_key_v2 &&
				'' === uagb_blocks_info.recaptcha_secret_key_v2 &&
				reCaptchaSiteKeyV2 &&
				reCaptchaSecretKeyV2
			) {
				keys.reCaptchaSiteKeyV2 = reCaptchaSiteKeyV2;
				keys.reCaptchaSecretKeyV2 = reCaptchaSecretKeyV2;
			}
			if (
				'' === uagb_blocks_info.recaptcha_site_key_v3 &&
				'' === uagb_blocks_info.recaptcha_secret_key_v3 &&
				reCaptchaSiteKeyV3 &&
				reCaptchaSecretKeyV3
			) {
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
				} ).then( () => {} );
			}
		}

		// inputborder
		if ( inputborderWidth || inputborderRadius || inputborderColor || inputborderHoverColor || inputborderStyle ) {
			migrateBorderAttributes(
				'field',
				{
					label: 'inputborderWidth',
					value: inputborderWidth,
				},
				{
					label: 'inputborderRadius',
					value: inputborderRadius,
				},
				{
					label: 'inputborderColor',
					value: inputborderColor,
				},
				{
					label: 'inputborderHoverColor',
					value: inputborderHoverColor,
				},
				{
					label: 'inputborderStyle',
					value: inputborderStyle,
				},
				setAttributes,
				attributes
			);
			migrateBorderAttributes(
				'checkBoxToggle',
				{
					label: 'inputborderWidth',
					value: inputborderWidth,
				},
				{
					label: 'inputborderRadius',
					value: inputborderRadius,
				},
				{
					label: 'inputborderColor',
					value: inputborderColor,
				},
				{
					label: 'inputborderHoverColor',
					value: inputborderHoverColor,
				},
				{
					label: 'inputborderStyle',
					value: inputborderStyle,
				},
				setAttributes,
				attributes
			);
		}
		if (
			submitborderWidth ||
			submitborderRadius ||
			submitborderColor ||
			submitborderHoverColor ||
			submitborderStyle
		) {
			migrateBorderAttributes(
				'btn',
				{
					label: 'submitborderWidth',
					value: submitborderWidth,
				},
				{
					label: 'submitborderRadius',
					value: submitborderRadius,
				},
				{
					label: 'submitborderColor',
					value: submitborderColor,
				},
				{
					label: 'submitborderHoverColor',
					value: submitborderHoverColor,
				},
				{
					label: 'submitborderStyle',
					value: submitborderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [] );

	useEffect( () => {
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
		const id = clientId;
		window.addEventListener( 'load', renderReadyClasses( id ) );
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockVariationPickerOnSelect = useCallback( ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	} );
	const createBlocksFromInnerBlocksTemplate = useCallback( ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map( (
			[ name, attributes, innerBlocks = [] ] // eslint-disable-line no-shadow
		) => createBlock( name, attributes, createBlocksFromInnerBlocksTemplate( innerBlocks ) ) );
	} );

	const renderReadyClasses = useCallback( ( id ) => {
		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let mainDiv;
		let formscope;
		if ( iframeEl ) {
			mainDiv = iframeEl.contentDocument.getElementById( 'block-' + id );
			formscope = mainDiv.getElementsByClassName( 'uagb-forms__outer-wrap' );
		} else {
			mainDiv = document.getElementById( 'block-' + id );
			formscope = mainDiv?.getElementsByClassName( 'uagb-forms__outer-wrap' );
		}

		if ( formscope && formscope[ 0 ] ) {
			const editorwrap = formscope[ 0 ].children;
			const formInnerWrap = editorwrap[ 0 ].children;
			const editorBlockWrap = formInnerWrap[ 0 ].getElementsByClassName( 'block-editor-block-list__layout' );
			const sibling = editorBlockWrap[ 0 ].children;

			for ( let index = 0; index < sibling.length; index++ ) {
				if (
					sibling[ index ].classList.contains( 'uag-col-2' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-2' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-2-wrap uag-col-wrap-' + index;
					sibling[ index + 1 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName( 'uag-col-wrap-' + index );
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
					const wrapper_div = formscope[ 0 ].getElementsByClassName( 'uag-col-wrap-' + index );
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
					const wrapper_div = formscope[ 0 ].getElementsByClassName( 'uag-col-wrap-' + index );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				}
			}
		}
	} );

	if ( ! hasInnerBlocks ) {
		return (
			<div className="uagb-forms-variations">
				<__experimentalBlockVariationPicker
					icon={ UAGB_Block_Icons.forms }
					label={ __( 'Forms', 'ultimate-addons-for-gutenberg' ) }
					instructions={ __( 'Select a variation to start with.', 'ultimate-addons-for-gutenberg' ) }
					variations={ variations }
					allowSkip
					onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
				/>
			</div>
		);
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

const addAdvancedClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		return <BlockListBlock { ...props } className={ props.attributes.className } />;
	};
}, 'addAdvancedClasses' );

addFilter( 'editor.BlockListBlock', 'uagb/forms', addAdvancedClasses );

export default compose( withNotices, addAdvancedClasses )( UAGBFormsEdit );
