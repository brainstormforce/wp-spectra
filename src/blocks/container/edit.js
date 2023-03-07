/**
 * BLOCK: Container
 */
import styling from './styling';
import { useEffect, useLayoutEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch, select } from '@wordpress/data';
import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import styles from './editor.lazy.scss';

const UAGBContainer = ( props ) => {

	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderColor,
			borderHoverColor,
			borderRadius,
			variationSelected,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob
		},
		clientId,
		setAttributes,
	} = props;

	const {
		innerBlocks, // eslint-disable-line no-unused-vars
		blockType, // eslint-disable-line no-unused-vars
		isParentOfSelectedBlock,
		variations,
		defaultVariation
	} = useSelect(
		( select ) => { // eslint-disable-line no-shadow
			const { getBlocks } = select( 'core/block-editor' );
			const {
				getBlockType,
				getBlockVariations,
				getDefaultBlockVariation,
			} = select( 'core/blocks' );

			return {
				innerBlocks: getBlocks( clientId ),
				blockType: getBlockType( props.name ),
				defaultVariation:
				typeof getDefaultBlockVariation === 'undefined'
					? null
					: getDefaultBlockVariation( props.name ),
			variations:
				typeof getBlockVariations === 'undefined'
					? null
					: getBlockVariations( props.name ),
				isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true )
			};
		},
	);
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		const isBlockRootParentID = select( 'core/block-editor' ).getBlockParents( clientId );

		const parentBlockName = select( 'core/block-editor' ).getBlocksByClientId( isBlockRootParentID );

		if ( parentBlockName[0] && 'uagb/container' !== parentBlockName[0].name || undefined === parentBlockName[0] ) {
			setAttributes( { isBlockRootParent: true } );
		}

		let hasSliderParent = false;
		const sliderBlocks = [ 'uagb/slider', 'uagb/slider-child' ];

		for ( let index = 0; index < parentBlockName.length; index++ ) {
			if( sliderBlocks.includes( parentBlockName[index].name ) ) {
				hasSliderParent = true;
				break;
			}
		}

		setAttributes( { hasSliderParent } );

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let element;
		if( iframeEl ){
			element = iframeEl.contentDocument.getElementById( 'block-' + clientId )
		} else {
			element = document.getElementById( 'block-' + clientId )
		}
		// Add Close Button for Variation Selector.
		const variationPicker = element?.querySelector( '.uagb-container-variation-picker .block-editor-block-variation-picker' );
		const closeButton = document.createElement( 'button' );
		closeButton.onclick = function() {
			if ( defaultVariation.attributes ) {
				setAttributes( defaultVariation.attributes );
			}
		};
		closeButton.setAttribute( 'class', 'uagb-variation-close' );
		closeButton.innerHTML = '×';
		if ( variationPicker ) {
			const variationPickerLabel = variationPicker.querySelector( '.components-placeholder__label' );
			variationPicker.insertBefore( closeButton,variationPickerLabel );
		}

		// border
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'container', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			setAttributes,
			attributes
			);
		}

		if( 0 !== select( 'core/block-editor' ).getBlockParents(  clientId ).length ){ // if there is no parent for container when child container moved outside root then do not show variations.
			setAttributes( { variationSelected: true } );
		}
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );
        addBlockEditorDynamicStyles( 'uagb-container-style-' + clientId.substr( 0, 8 ), blockStyling );

	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockVariationPickerOnSelect = (
		nextVariation = defaultVariation
	) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
			);
		}
	};

	const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map(
			( [ name, attributes, innerBlocks = [] ] ) => // eslint-disable-line no-shadow
				createBlock(
					name,
					attributes,
					createBlocksFromInnerBlocksTemplate( innerBlocks )
				)
		);
	};

	// const { variationSelected } = props.attributes;

	if ( ! variationSelected && 0 === select( 'core/block-editor' ).getBlockParents( clientId ).length ) {
		return (
			<div className='uagb-container-variation-picker'>
				<BlockVariationPicker
					icon={ '' }
					label={ __(
						'Select a Layout',
						'ultimate-addons-for-gutenberg'
					) }
					instructions={ false }
					variations={ variations }
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
				/>
			</div>
		);
	}

	return (
		<>
		{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBContainer;
