/**
 * BLOCK: Popup Builder - Edit with Variant Picker and Meta Updates.
 */

import { useEffect, useLayoutEffect, useMemo } from '@wordpress/element';
import { select, useSelect, useDispatch, withDispatch } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { useEntityProp } from '@wordpress/core-data';
import { compose } from '@wordpress/compose';
import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import AddStaticStyles from '@Controls/AddStaticStyles';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import UAGB_Block_Icons from '@Controls/block-icons';
import Render from './render';
import Settings from './settings';
import styling from './styling';
import styles from './editor.lazy.scss';

const SpectraPopupBuilderEdit = ( props ) => {

	const {
		clientId,
		name,
		attributes,
		setAttributes,
		isSelected,
		deviceType
	} = props;

	const {
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
		variationSelected,
		variantType,
	} = attributes;

	const {
		isParentOfSelectedBlock,
		variations,
		defaultVariation,
	} = useSelect( ( selector ) => {
		const {
			getBlockVariations,
			getDefaultBlockVariation,
		} = selector( 'core/blocks' );

		return {
			defaultVariation:
			typeof getDefaultBlockVariation === 'undefined'
				? null
				: getDefaultBlockVariation( name ),
			variations:
			typeof getBlockVariations === 'undefined'
				? null
				: getBlockVariations( name ),
			isParentOfSelectedBlock: selector( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ),
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
	}, [] );

	// Add Dynamic Block Styling.
	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	const blockVariationPickerOnSelect = (
		nextVariation = defaultVariation
	) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ),
			);
		}
	};

	const postType = useSelect( ( selector ) => selector( 'core/editor' ).getCurrentPostType() );
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	useEffect( () => {
		if ( 'spectra-popup' !== postType ) {
			return;
		}
		setMeta(
			( ! variationSelected ) ? {
				...meta,
				'spectra-popup-type': 'unset',
				'spectra-popup-enabled': false,
			} : {
				...meta,
				'spectra-popup-type': variantType,
				'spectra-popup-enabled': true,
			}
		);
	}, [
		variationSelected,
		variantType,
	] );


	if ( ! variationSelected && 0 === select( 'core/block-editor' ).getBlockParents( clientId ).length ) {
		return (
			<div className='uagb-variation-picker'>
				<BlockVariationPicker
					icon={ UAGB_Block_Icons.popup_builder }
					label={ __(
						'Spectra Popup Builder',
						'ultimate-addons-for-gutenberg'
					) }
					instructions={ ReactHtmlParser(
						sprintf(
							// translators: %s: break tag.
							__(
								'Display Site-Wide popups on your website.%sSelect a Popup type to start with.',
								'ultimate-addons-for-gutenberg'
							),
							'</br>',
						)
					) }
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
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
}

export default compose(
	withDispatch( ( dispatch ) => {
		dispatch( 'core/block-editor' ).setTemplateValidity( true );
	} ),
	AddStaticStyles,
)( SpectraPopupBuilderEdit );
