/**
 * BLOCK: Container
 */
import styling from './styling';
import { useEffect, useLayoutEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect, useDispatch, select } from '@wordpress/data';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import styles from './editor.lazy.scss';
import UAGB_Block_Icons from '@Controls/block-icons';
import ReactHtmlParser from 'react-html-parser';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { containerWrapper } from './containerWrapper';

const UAGBContainer = ( props ) => {
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
			UAGHideMob,
			backgroundType,
			backgroundVideoOpacity,
		},
		clientId,
		setAttributes,
		name,
		deviceType,
		context,
	} = props;

	const {
		innerBlocks, // eslint-disable-line no-unused-vars
		blockType, // eslint-disable-line no-unused-vars
		isParentOfSelectedBlock,
		variations,
		defaultVariation,
		// eslint-disable-next-line no-shadow
	} = useSelect( ( select ) => {
		const { getBlocks } = select( 'core/block-editor' );
		const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

		return {
			innerBlocks: getBlocks( clientId ),
			blockType: getBlockType( name ),
			defaultVariation:
				typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( name ),
			variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( name ),
			isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ),
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

	if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		const isBlockRootParentID = select( 'core/block-editor' ).getBlockParents( clientId );

		const parentBlocks = select( 'core/block-editor' ).getBlocksByClientId( isBlockRootParentID );

		// Check if a parent of this container is one of these special blocks.
		const blockParents = {
			hasSliderParent: false,
			hasPopupParent: false,
		};

		// Add the lists of special block cases.
		const specialBlocks = {
			sliderBlocks: [ 'uagb/slider', 'uagb/slider-child' ],
			popupBlocks: [ 'uagb/modal', 'uagb/popup-builder' ],
		};

		const parentBlocksNames = [];

		if ( parentBlocks?.length ) {

			for ( const parent in parentBlocks ) {
				const parentName = parentBlocks[parent]?.name;
				// For Slider.
				if ( specialBlocks.sliderBlocks.includes( parentName ) ) {
					blockParents.hasSliderParent = true;
				}

				// For Modal and Popup Builder.
				if ( specialBlocks.popupBlocks.includes( parentName ) ) {
					blockParents.hasPopupParent = true;
				}

				// For Container Root.
				parentBlocksNames.push( parentName );
			}
		} 

		const attributesToUpdate = {
			hasSliderParent: blockParents.hasSliderParent,
			hasPopupParent: blockParents.hasPopupParent,
		};

		// Conditionally set the isBlockRootParent attribute
		if ( !parentBlocks || parentBlocks.length === 0 || !parentBlocks.some( parent => parent.name === 'uagb/container' ) ) {
			attributesToUpdate.isBlockRootParent = true;
		}

		setAttributes( attributesToUpdate );

		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let element;
		if ( iframeEl ) {
			element = iframeEl.contentDocument.getElementById( 'block-' + clientId );
		} else {
			element = document.getElementById( 'block-' + clientId );
		}
		// Add Close Button for Variation Selector.
		const variationPicker = element?.querySelector(
			'.uagb-container-variation-picker .block-editor-block-variation-picker'
		);
		const closeButton = document.createElement( 'button' );
		closeButton.onclick = function () {
			if ( defaultVariation.attributes ) {
				setAttributes( defaultVariation.attributes );
			}
		};
		closeButton.setAttribute( 'class', 'uagb-variation-close' );
		closeButton.innerHTML = '×';
		if ( variationPicker ) {
			const variationPickerLabel = variationPicker.querySelector( '.components-placeholder__label' );
			variationPicker.insertBefore( closeButton, variationPickerLabel );
		}

		// border
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'container',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}

		// If the legacy video overlay opacity for video background was set, migrate it.
		if ( 'video' === backgroundType && backgroundVideoOpacity ) {
			setAttributes( {
				overlayOpacity: backgroundVideoOpacity,
				backgroundVideoOpacity: 0,
			} );
		}

		if ( 0 !== select( 'core/block-editor' ).getBlockParents( clientId ).length ) {
			// if there is no parent for container when child container moved outside root then do not show variations.
			setAttributes( { variationSelected: true } );
		}
	}, [] );

	useEffect( () => {
		if ( !attributes?.context ) {
			setAttributes( { context } );
		}
	}, [ context ] )

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map(
			(
				[ name, attributes, innerBlocks = [] ] // eslint-disable-line no-shadow
			) => createBlock( name, attributes, createBlocksFromInnerBlocksTemplate( innerBlocks ) )
		);
	};

	if ( ! variationSelected && 0 === select( 'core/block-editor' ).getBlockParents( clientId ).length ) {
		return (
			<div className="uagb-container-variation-picker">
				<BlockVariationPicker
					icon={ UAGB_Block_Icons.container }
					label={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
					instructions={ ReactHtmlParser(
						sprintf(
							// translators: %s: closing </br> tag.
							__(
								'Customizable containers with endless creation possibilities.%sSelect a container layout to start with.',
								'ultimate-addons-for-gutenberg'
							),
							`</br>` 
						)
					) }
					variations={ variations }
					onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
				/>
			</div>
		);
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	containerWrapper,
	addInitialAttr,
	AddStaticStyles,
)( UAGBContainer );
