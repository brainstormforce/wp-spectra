/**
 * BLOCK: UAGB - Columns Edit
 */

import styling from './styling';
import { __ } from '@wordpress/i18n';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { useEffect, useLayoutEffect, useMemo } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import Settings from './settings';
import Render from './render';
import { useSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { withNotices } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import hexToRGBA from '@Controls/hexToRgba';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';
import styles from './editor.lazy.scss';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import AddStaticStyles from '@Controls/AddStaticStyles';

const ColumnsComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		attributes,
		attributes: {
			topMargin,
			bottomMargin,
			topMarginDesktop,
			bottomMarginDesktop,
			backgroundOpacity,
			align,
			vAlign,
			backgroundImageColor,
			backgroundType,
			gradientOverlayColor1,
			gradientOverlayColor2,
			overlayType,
			gradientOverlayAngle,
			gradientOverlayLocation1,
			gradientOverlayPosition,
			gradientOverlayLocation2,
			gradientOverlayType,
			backgroundVideoOpacity,
			backgroundVideoColor,
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		setAttributes,
		isSelected,
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
			// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
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
		if ( 'middle' === vAlign ) {
			setAttributes( { vAlign: 'center' } );
		}

		if ( undefined === align ) {
			setAttributes( { align: '' } );
		}

		if ( undefined === vAlign ) {
			setAttributes( { vAlign: '' } );
		}

		if ( 101 !== backgroundOpacity && 'image' === backgroundType && 'gradient' === overlayType ) {
			const color1 = hexToRGBA( maybeGetColorForVariable( gradientOverlayColor1 ), backgroundOpacity );
			const color2 = hexToRGBA( maybeGetColorForVariable( gradientOverlayColor2 ), backgroundOpacity );
			let gradientVal;
			if ( 'linear' === gradientOverlayType ) {
				gradientVal = `linear-gradient(${ gradientOverlayAngle }deg, ${ color1 } ${ gradientOverlayLocation1 }%, ${ color2 } ${ gradientOverlayLocation2 }%)`;
			} else {
				gradientVal = `radial-gradient( at ${ gradientOverlayPosition }, ${ color1 } ${ gradientOverlayLocation1 }%, ${ color2 } ${ gradientOverlayLocation2 }%)`;
			}
			setAttributes( { gradientValue: gradientVal } );
		}

		// Replacement for componentDidMount.
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		//Margin
		if ( topMargin ) {
			if ( ! topMarginDesktop ) {
				setAttributes( { topMarginDesktop: topMargin } );
			}
		}

		if ( bottomMargin ) {
			if ( ! bottomMarginDesktop ) {
				setAttributes( { bottomMarginDesktop: bottomMargin } );
			}
		}

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}

		if ( 'video' === backgroundType ) {
			if ( 101 !== backgroundVideoOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundVideoColor ), backgroundVideoOpacity );
				setAttributes( { backgroundVideoColor: color } );
			}
		}
		// border migration
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'columns',
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
	}, [] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map( (
			[ name, attributes, innerBlocks = [] ] // eslint-disable-line no-shadow
		) => createBlock( name, attributes, createBlocksFromInnerBlocksTemplate( innerBlocks ) ) );
	};

	if ( ! hasInnerBlocks ) {
		return (
			<div className="uagb-columns-variation-picker">
				<BlockVariationPicker
					icon={ '' }
					label={ __( 'Advanced Columns', 'ultimate-addons-for-gutenberg' ) }
					instructions={ __( 'Select a variation to start with.', 'ultimate-addons-for-gutenberg' ) }
					variations={ variations }
					onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
				/>
			</div>
		);
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } deviceType={ deviceType } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	withNotices,
	AddStaticStyles,
)( ColumnsComponent );
