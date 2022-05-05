import React, {Suspense, useEffect} from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import { useViewportMatch } from '@wordpress/compose';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import Border from '@Components/border';
import UAGImage from '@Components/image';
import BoxShadowControl from '@Components/box-shadow';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import { useDeviceType } from '@Controls/getPreviewType';
import {
	store as blockEditorStore,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	RangeControl,
	TextControl,
	SelectControl,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
	Icon
} from '@wordpress/components';
import renderSVG from '@Controls/renderIcon';
import ImageSizeControl from '@Components/image-size-control'

import { store as coreStore } from '@wordpress/core-data';
// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';


export default function Settings( props ) {
	const deviceType = useDeviceType();
	props = props.parentProps;
	const { attributes, setAttributes, context, isSelected, clientId } = props;
	const {
		layout,
		id,
		width,
		widthTablet,
		widthMobile,
		height,
		heightTablet,
		heightMobile,
		align,
		alt,
		sizeSlug,
		sizeSlugTablet,
		sizeSlugMobile,
		// image
		imageTopMargin,
		imageRightMargin,
		imageLeftMargin,
		imageBottomMargin,
		imageTopMarginTablet,
		imageRightMarginTablet,
		imageLeftMarginTablet,
		imageBottomMarginTablet,
		imageTopMarginMobile,
		imageRightMarginMobile,
		imageLeftMarginMobile,
		imageBottomMarginMobile,
		imageMarginUnit,
		imageMarginUnitTablet,
		imageMarginUnitMobile,
		imageMarginLink,
		// caption
		captionShowOn,
		captionLoadGoogleFonts,
		captionAlign,
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionFontSize,
		captionColor,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSizeMobile,
		captionFontSizeTablet,
		captionLineHeight,
		captionLineHeightType,
		captionLineHeightMobile,
		captionLineHeightTablet,
		captionTopMargin,
		captionRightMargin,
		captionLeftMargin,
		captionBottomMargin,
		captionTopMarginTablet,
		captionRightMarginTablet,
		captionLeftMarginTablet,
		captionBottomMarginTablet,
		captionTopMarginMobile,
		captionRightMarginMobile,
		captionLeftMarginMobile,
		captionBottomMarginMobile,
		captionMarginUnit,
		captionMarginUnitTablet,
		captionMarginUnitMobile,
		captionMarginLink,
		// heading
		headingTag,
		headingShowOn,
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		headingMarginLink,
		// overlay
		overlayPositionFromEdge,
		overlayPositionFromEdgeUnit,
		overlayContentPosition,
		overlayBackground,
		overlayOpacity,
		overlayHoverOpacity,
		overlayBorderStyle,
		overlayBorderWidth,
		overlayBorderRadius,
		overlayBorderColor,
		overlayBorderHoverColor,
		// seperator
		seperatorShowOn,
		seperatorStyle,
		seperatorWidth,
		separatorWidthType,
		seperatorThickness,
		seperatorThicknessUnit,
		seperatorPosition,
		seperatorColor,
		seperatorTopMargin,
		seperatorRightMargin,
		seperatorLeftMargin,
		seperatorBottomMargin,
		seperatorTopMarginTablet,
		seperatorRightMarginTablet,
		seperatorLeftMarginTablet,
		seperatorBottomMarginTablet,
		seperatorTopMarginMobile,
		seperatorRightMarginMobile,
		seperatorLeftMarginMobile,
		seperatorBottomMarginMobile,
		seperatorMarginUnit,
		seperatorMarginUnitTablet,
		seperatorMarginUnitMobile,
		seperatorMarginLink,
		// effect
		imageHoverEffect,
		// border
		imageBorderWidth,
		imageBorderStyle,
		imageBorderRadius,
		imageBorderColor,
		imageBorderhoverColor,
		// shadow
		imageBoxShadowColor,
		imageBoxShadowHOffset,
		imageBoxShadowVOffset,
		imageBoxShadowBlur,
		imageBoxShadowSpread,
		imageBoxShadowPosition,
		// mask
		maskShape,
		maskCustomShape,
		maskSize,
		maskPosition,
		maskRepeat
	} = attributes;



	const {imageSizes} = useSelect(
		( select ) => {
			const {getSettings} = select( blockEditorStore );
			// eslint-disable-next-line no-shadow
			const {imageSizes} = getSettings()
			return {imageSizes};
		},
		[ clientId ]
	);

	const { image } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );
			return {
				image: id && isSelected ? getMedia( id ) : null
			};
		},
		[ id, isSelected ]
	);

	useEffect( () => {
		if( 'Tablet' === deviceType ){
			updateTabletImage( sizeSlugTablet )
		} else if( 'Mobile' === deviceType ) {
			updateMobileImage( sizeSlugMobile )
		} else {
			updateImage( sizeSlug )
		}
	}, [sizeSlug, sizeSlugTablet, sizeSlugMobile] )

	const { allowResize = true } = context;
	const isLargeViewport = useViewportMatch( 'medium' );
	const isWideAligned = [ 'wide', 'full' ].includes( align );
	const isResizable = allowResize && ! ( isWideAligned && isLargeViewport );
	const imageSizeOptions = imageSizes.reduce( ( acc, item ) => {
		acc.push( { value: item.slug, label: item.name } )
		return acc;
	}, [] );


	function updateImage( newSizeSlug ) {
		const newUrl = image?.media_details?.sizes[newSizeSlug]
		if ( ! newUrl ) {
			return null;
		}
		setAttributes( {
			url: newUrl?.source_url,
			width: newUrl?.width,
			height: newUrl?.height,
			sizeSlug: newSizeSlug,
		} );
	}

	function updateTabletImage( newSizeSlug ) {
		const newUrl = image?.media_details?.sizes[newSizeSlug]
		if ( ! newUrl ) {
			return null;
		}
		setAttributes( {
			urlTablet: newUrl?.source_url,
			widthTablet: newUrl?.width,
			heightTablet: newUrl?.height,
			sizeSlugTablet: newSizeSlug,
		} );
	}

	function updateMobileImage( newSizeSlug ) {
		const newUrl = image?.media_details?.sizes[newSizeSlug]
		if ( ! newUrl ) {
			return null;
		}
		setAttributes( {
			urlMobile: newUrl?.source_url,
			widthMobile: newUrl?.width,
			heightMobile: newUrl?.height,
			sizeSlugMobile: newSizeSlug,
		} );
	}

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectCustomMaskShape = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { maskCustomShape: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( { maskCustomShape: media } );
	};

	const onRemoveMaskCustomShape = () => {
		setAttributes( { maskCustomShape: null } );
	};



	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Layout',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: layout,
					label: 'layout',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'default',
						label: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'overlay',
						label: __(
							'Overlay',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
			{
				id && isSelected && (
					<>
						<ImageSizeControl
							onChangeImage={ updateImage }
							onChange={ ( value ) => setAttributes( value ) }
							sizeSlug={ sizeSlug }
							sizeSlugTablet={ sizeSlugTablet }
							sizeSlugMobile={ sizeSlugMobile }
							width={ width }
							widthTablet={widthTablet}
							widthMobile={widthMobile}
							height={ height }
							heightTablet={heightTablet}
							heightMobile={heightMobile}
							setAttributes={setAttributes}
							imageSizeOptions={ imageSizeOptions }
							isResizable={ isResizable }
							imageWidth={ image?.media_details?.width }
							imageHeight={ image?.media_details?.height }
						/>
						<TextControl
							label={ __( 'Alt Text', 'ultimate-addons-for-gutenberg' ) }
							value={ alt }
							onChange={ ( value ) => setAttributes( { alt: value } ) }
						/>
					</>
				)
			}
			<SelectControl
				label={ __(
					'On Hover Image',
					'ultimate-addons-for-gutenberg'
				) }
				value={ imageHoverEffect }
				onChange={ ( value ) =>
					setAttributes( { imageHoverEffect: value } )
				}
				options={ [
					{
						value: 'static',
						label: __(
							'Static',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'zoomin',
						label: __(
							'Zoom In',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'slide',
						label: __(
							'Slide',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'grayscale',
						label: __(
							'Gray Scale',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'blur',
						label: __(
							'Blur',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	// shape
	const shapeGeneralPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Mask', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<UAGSelectControl
				label={ __(
					'Mask Shape',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: maskShape,
					label: 'maskShape',
				} }
				setAttributes={ setAttributes }
				options={ [
					{
						value: 'none',
						label: __(
							'None',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'circle',
						label: __(
							'Circle',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'diamond',
						label: __(
							'Diamond',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'hexagon',
						label: __(
							'Hexagon',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'rounded',
						label: __(
							'Rounded',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'blob1',
						label: __(
							'Blob 1',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'blob2',
						label: __(
							'Blob 2',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'blob3',
						label: __(
							'Blob 3',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'blob4',
						label: __(
							'Blob 4',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'custom',
						label: __(
							'Custom',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
			{
				maskShape === 'custom' && (
					<UAGImage
						label={ __( 'Custom Mask Image', 'ultimate-addons-for-gutenberg' ) }
						onSelectImage={ onSelectCustomMaskShape }
						backgroundImage={ maskCustomShape }
						onRemoveImage={ onRemoveMaskCustomShape }
					/>
				)
			}
			{
				maskShape !== 'none' && (
					<>
						<UAGSelectControl
							label={ __(
								'Mask Size',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: maskSize,
								label: 'maskSize',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'auto',
									label: __(
										'Auto',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'contain',
									label: __(
										'Contain',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'cover',
									label: __(
										'Cover',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
						<UAGSelectControl
							label={ __(
								'Mask Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: maskPosition,
								label: 'maskPosition',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'center top',
									label: __(
										'Center Top',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'center center',
									label: __(
										'Center Center',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'center bottom',
									label: __(
										'Center Bottom',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'left top',
									label: __(
										'Left Top',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'left center',
									label: __(
										'Left Center',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'left bottom',
									label: __(
										'Left Bottom',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'right top',
									label: __(
										'Right Top',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'right center',
									label: __(
										'Right Center',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'right bottom',
									label: __(
										'Right Bottom',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
						<UAGSelectControl
							label={ __(
								'Mask Repeat',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: maskRepeat,
								label: 'maskRepeat',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'no-repeat',
									label: __(
										'No Repeat',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'repeat',
									label: __(
										'Repeat',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'repeat-x',
									label: __(
										'Repeat-X',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'repeat-y',
									label: __(
										'Repeat-Y',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
					</>
				)
			}

		</UAGAdvancedPanelBody>
	)

	// Separator settings.
	const seperatorGeneralPanel = (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{
					seperatorStyle !== 'none' && (
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Show On',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: seperatorShowOn,
								label: 'seperatorShowOn',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'always',
									label: __(
										'Always',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'hover',
									label: __(
										'Hover',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ false }
						/>
					)
				}
				<SelectControl
					label={ __( 'Style' ) }
					value={ seperatorStyle }
					onChange={ ( value ) =>
						setAttributes( { seperatorStyle: value } )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'none' !== seperatorStyle && (
					<SelectControl
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						value={ seperatorPosition }
						onChange={ ( value ) =>
							setAttributes( { seperatorPosition: value } )
						}
						options={ [
							{
								value: 'before_title',
								label: __(
									'Before Title',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'after_title',
								label: __(
									'After Title',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'after_sub_title',
								label: __(
									'After Sub Title',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
			</UAGAdvancedPanelBody>
	);

	const headingGeneralPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Show On',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: headingShowOn,
					label: 'headingShowOn',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'always',
						label: __(
							'Always',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'hover',
						label: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
		</UAGAdvancedPanelBody>
	);

	const descriptionGeneralPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Show On',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: captionShowOn,
					label: 'captionShowOn',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'always',
						label: __(
							'Always',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'hover',
						label: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
		</UAGAdvancedPanelBody>
	);



	const headingStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Heading Tag',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: headingTag,
					label: 'headingTag',
				} }
				options={ [
					{
						value: 'h1',
						label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'h2',
						label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'h3',
						label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'h4',
						label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'h5',
						label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'h6',
						label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
					},
				] }
			/>
			<Suspense fallback={ lazyLoader() }>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headingLoadGoogleFonts,
						label: 'headingLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headingFontFamily,
						label: 'headingFontFamily',
					} }
					fontWeight={ {
						value: headingFontWeight,
						label: 'headingFontWeight',
					} }
					fontStyle={ {
						value: headingFontStyle,
						label: 'headingFontStyle',
					} }
					transform={ {
						value: headingTransform,
						label: 'headingTransform',
					} }
					decoration={ {
						value: headingDecoration,
						label: 'headingDecoration',
					} }
					fontSizeType={ {
						value: headingFontSizeType,
						label: 'headingFontSizeType',
					} }
					fontSize={ {
						value: headingFontSize,
						label: 'headingFontSize',
					} }
					fontSizeMobile={ {
						value: headingFontSizeMobile,
						label: 'headingFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headingFontSizeTablet,
						label: 'headingFontSizeTablet',
					} }
					lineHeightType={ {
						value: headingLineHeightType,
						label: 'headingLineHeightType',
					} }
					lineHeight={ {
						value: headingLineHeight,
						label: 'headingLineHeight',
					} }
					lineHeightMobile={ {
						value: headingLineHeightMobile,
						label: 'headingLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headingLineHeightTablet,
						label: 'headingLineHeightTablet',
					} }
				/>
			</Suspense>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ headingColor ? headingColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { headingColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: headingTopMargin,
					label: 'headingTopMargin',
				} }
				valueRight={ {
					value: headingRightMargin,
					label: 'headingRightMargin',
				} }
				valueBottom={ {
					value: headingBottomMargin,
					label: 'headingBottomMargin',
				} }
				valueLeft={ {
					value: headingLeftMargin,
					label: 'headingLeftMargin',
				} }
				valueTopTablet={ {
					value: headingTopMarginTablet,
					label: 'headingTopMarginTablet',
				} }
				valueRightTablet={ {
					value: headingRightMarginTablet,
					label: 'headingRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: headingBottomMarginTablet,
					label: 'headingBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: headingLeftMarginTablet,
					label: 'headingLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: headingTopMarginMobile,
					label: 'headingTopMarginMobile',
				} }
				valueRightMobile={ {
					value: headingRightMarginMobile,
					label: 'headingRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: headingBottomMarginMobile,
					label: 'headingBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: headingLeftMarginMobile,
					label: 'headingLeftMarginMobile',
				} }
				unit={ {
					value: headingMarginUnit,
					label: 'headingMarginUnit',
				} }
				mUnit={ {
					value: headingMarginUnitMobile,
					label: 'headingMarginUnitMobile',
				} }
				tUnit={ {
					value: headingMarginUnitTablet,
					label: 'headingMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: headingMarginLink,
					label: 'headingMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const captionStylePanel =  (
		<UAGAdvancedPanelBody
			title={ layout === 'overlay' ?  __( 'Description', 'ultimate-addons-for-gutenberg' ) : __( 'Caption', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			{
				'default' === layout && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Alignment',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: captionAlign,
							label: 'captionAlign',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'left',
								icon: (
									<Icon
										icon={ renderSVG( 'fa fa-align-left' ) }
									/>
								),
								tooltip: __(
									'Left',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'center',
								icon: (
									<Icon
										icon={ renderSVG(
											'fa fa-align-center'
										) }
									/>
								),
								tooltip: __(
									'Center',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'right',
								icon: (
									<Icon
										icon={ renderSVG(
											'fa fa-align-right'
										) }
									/>
								),
								tooltip: __(
									'Right',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						showIcons={ true }
					/>
				)
			}
			<Suspense fallback={ lazyLoader() }>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: captionLoadGoogleFonts,
						label: 'captionLoadGoogleFonts',
					} }
					fontFamily={ {
						value: captionFontFamily,
						label: 'captionFontFamily',
					} }
					fontWeight={ {
						value: captionFontWeight,
						label: 'captionFontWeight',
					} }
					fontStyle={ {
						value: captionFontStyle,
						label: 'captionFontStyle',
					} }
					transform={ {
						value: captionTransform,
						label: 'captionTransform',
					} }
					decoration={ {
						value: captionDecoration,
						label: 'captionDecoration',
					} }
					fontSizeType={ {
						value: captionFontSizeType,
						label: 'captionFontSizeType',
					} }
					fontSize={ {
						value: captionFontSize,
						label: 'captionFontSize',
					} }
					fontSizeMobile={ {
						value: captionFontSizeMobile,
						label: 'captionFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: captionFontSizeTablet,
						label: 'captionFontSizeTablet',
					} }
					lineHeightType={ {
						value: captionLineHeightType,
						label: 'captionLineHeightType',
					} }
					lineHeight={ {
						value: captionLineHeight,
						label: 'captionLineHeight',
					} }
					lineHeightMobile={ {
						value: captionLineHeightMobile,
						label: 'captionLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: captionLineHeightTablet,
						label: 'captionLineHeightTablet',
					} }
				/>
			</Suspense>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ captionColor ? captionColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { captionColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: captionTopMargin,
					label: 'captionTopMargin',
				} }
				valueRight={ {
					value: captionRightMargin,
					label: 'captionRightMargin',
				} }
				valueBottom={ {
					value: captionBottomMargin,
					label: 'captionBottomMargin',
				} }
				valueLeft={ {
					value: captionLeftMargin,
					label: 'captionLeftMargin',
				} }
				valueTopTablet={ {
					value: captionTopMarginTablet,
					label: 'captionTopMarginTablet',
				} }
				valueRightTablet={ {
					value: captionRightMarginTablet,
					label: 'captionRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: captionBottomMarginTablet,
					label: 'captionBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: captionLeftMarginTablet,
					label: 'captionLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: captionTopMarginMobile,
					label: 'captionTopMarginMobile',
				} }
				valueRightMobile={ {
					value: captionRightMarginMobile,
					label: 'captionRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: captionBottomMarginMobile,
					label: 'captionBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: captionLeftMarginMobile,
					label: 'captionLeftMarginMobile',
				} }
				unit={ {
					value: captionMarginUnit,
					label: 'captionMarginUnit',
				} }
				mUnit={ {
					value: captionMarginUnitMobile,
					label: 'captionMarginUnitMobile',
				} }
				tUnit={ {
					value: captionMarginUnitTablet,
					label: 'captionMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: captionMarginLink,
					label: 'captionMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const ImageStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Alignment',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: align,
					label: 'align',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'left',
						icon: (
							<Icon
								icon={ renderSVG( 'fa fa-align-left' ) }
							/>
						),
						tooltip: __(
							'Left',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'center',
						icon: (
							<Icon
								icon={ renderSVG(
									'fa fa-align-center'
								) }
							/>
						),
						tooltip: __(
							'Center',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'right',
						icon: (
							<Icon
								icon={ renderSVG(
									'fa fa-align-right'
								) }
							/>
						),
						tooltip: __(
							'Right',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ true }
			/>
			{
				layout === 'default' && (
					<Border
						setAttributes={ setAttributes }
						borderStyle={ {
							value: imageBorderStyle,
							label: 'imageBorderStyle',
							title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
						} }
						borderWidth={ {
							value: imageBorderWidth,
							label: 'imageBorderWidth',
							title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
						} }
						borderRadius={ {
							value: imageBorderRadius,
							label: 'imageBorderRadius',
							title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
						} }
						borderColor={ {
							value: imageBorderColor,
							label: 'imageBorderColor',
							title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
						} }
						borderHoverColor={ {
							value: imageBorderhoverColor,
							label: 'imageBorderhoverColor',
							title: __(
								'Hover Color',
								'ultimate-addons-for-gutenberg'
							),
						} }
						disableBottomSeparator={ true }
					/>
				)
			}

			{layout === 'overlay' && (
				<>
					<label htmlFor='overlayContentAlign'>
						{__( 'Content Postion', 'ultimate-addons-for-gutenberg' )}
					</label>
					<AlignmentMatrixControl
						id="overlayContentAlign"
						value={ overlayContentPosition }
						onChange={ ( newAlignment ) =>  setAttributes( {overlayContentPosition: newAlignment} ) }
					/>
					<Border
						setAttributes={ setAttributes }
						borderStyle={ {
							value: overlayBorderStyle,
							label: 'overlayBorderStyle',
							title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
						} }
						borderWidth={ {
							value: overlayBorderWidth,
							label: 'overlayBorderWidth',
							title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
						} }
						borderRadius={ {
							value: overlayBorderRadius,
							label: 'overlayBorderRadius',
							title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
						} }
						borderColor={ {
							value: overlayBorderColor,
							label: 'overlayBorderColor',
							title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
						} }
						borderHoverColor={ {
							value: overlayBorderHoverColor,
							label: 'overlayBorderHoverColor',
							title: __(
								'Hover Color',
								'ultimate-addons-for-gutenberg'
							),
						} }
						disableBottomSeparator={ false }
					/>
					<Range
						label={ __(
							'Border Distance From EDGE',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ overlayPositionFromEdge }
						onChange={ ( value ) =>
							setAttributes( {
								overlayPositionFromEdge: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						unit={ {
							value: overlayPositionFromEdgeUnit,
							label: 'overlayPositionFromEdgeUnit',
						} }
					/>
				</>
			)}

			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: imageTopMargin,
					label: 'imageTopMargin',
				} }
				valueRight={ {
					value: imageRightMargin,
					label: 'imageRightMargin',
				} }
				valueBottom={ {
					value: imageBottomMargin,
					label: 'imageBottomMargin',
				} }
				valueLeft={ {
					value: imageLeftMargin,
					label: 'imageLeftMargin',
				} }
				valueTopTablet={ {
					value: imageTopMarginTablet,
					label: 'imageTopMarginTablet',
				} }
				valueRightTablet={ {
					value: imageRightMarginTablet,
					label: 'imageRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: imageBottomMarginTablet,
					label: 'imageBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: imageLeftMarginTablet,
					label: 'imageLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: imageTopMarginMobile,
					label: 'imageTopMarginMobile',
				} }
				valueRightMobile={ {
					value: imageRightMarginMobile,
					label: 'imageRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: imageBottomMarginMobile,
					label: 'imageBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: imageLeftMarginMobile,
					label: 'imageLeftMarginMobile',
				} }
				unit={ {
					value: imageMarginUnit,
					label: 'imageMarginUnit',
				} }
				mUnit={ {
					value: imageMarginUnitMobile,
					label: 'imageMarginUnitMobile',
				} }
				tUnit={ {
					value: imageMarginUnitTablet,
					label: 'imageMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: imageMarginLink,
					label: 'imageMarginLink',
				} }
			/>
			{
				'static' === imageHoverEffect && (
					<BoxShadowControl
						setAttributes={ setAttributes }
						label={ __(
							'Box Shadow',
							'ultimate-addons-for-gutenberg'
						) }
						boxShadowColor={ {
							value: imageBoxShadowColor,
							label: 'imageBoxShadowColor',
							title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowHOffset={ {
							value: imageBoxShadowHOffset,
							label: 'imageBoxShadowHOffset',
							title: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowVOffset={ {
							value: imageBoxShadowVOffset,
							label: 'imageBoxShadowVOffset',
							title: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowBlur={ {
							value: imageBoxShadowBlur,
							label: 'imageBoxShadowBlur',
							title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowSpread={ {
							value: imageBoxShadowSpread,
							label: 'imageBoxShadowSpread',
							title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowPosition={ {
							value: imageBoxShadowPosition,
							label: 'imageBoxShadowPosition',
							title: __(
								'Position',
								'ultimate-addons-for-gutenberg'
							),
						} }
					/>
				)
			}
		</UAGAdvancedPanelBody>
	)

	const overlayStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Overlay', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ overlayBackground ? overlayBackground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { overlayBackground: value } )
				}
			/>
			<RangeControl
				label={ __(
					'Overlay Opacity',
					'ultimate-addons-for-gutenberg'
				) }
				value={ overlayOpacity }
				onChange={ ( value ) =>
					setAttributes( {
						overlayOpacity: value,
					} )
				}
				min={ 0 }
				max={ 1 }
				step={0.1}
			/>
			<RangeControl
				label={ __(
					'Overlay Hover Opacity',
					'ultimate-addons-for-gutenberg'
				) }
				value={ overlayHoverOpacity }
				onChange={ ( value ) =>
					setAttributes( {
						overlayHoverOpacity: value,
					} )
				}
				min={ 0 }
				max={ 1 }
				step={0.1}
			/>
		</UAGAdvancedPanelBody>
	)

	const seperatorStylePanel = (
		<UAGAdvancedPanelBody title="Separator" initialOpen={ false }>
			<Range
				label={ __(
					'Width',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ seperatorWidth }
				onChange={ ( value ) =>
					setAttributes( {
						seperatorWidth: value,
					} )
				}
				min={ 0 }
				max={
					'%' === separatorWidthType
						? 100
						: 500
				}
				unit={ {
					value: separatorWidthType,
					label: 'separatorWidthType',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __(
							'Em',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'em',
					},
					{
						name: __(
							'%',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: '%',
					},
				] }
			/>
			<Range
				label={ __(
					'Thickness',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ seperatorThickness }
				onChange={ ( value ) =>
					setAttributes( {
						seperatorThickness: value,
					} )
				}
				min={ 0 }
				max={ 10 }
				unit={ {
					value: seperatorThicknessUnit,
					label: 'seperatorThicknessUnit',
				} }
			/>
			<AdvancedPopColorControl
				label={ __(
					'Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					seperatorColor ? seperatorColor : ''
				}
				onColorChange={ ( value ) =>
					setAttributes( { seperatorColor: value } )
				}
			/>
			<SpacingControl
				{ ...props }
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: seperatorTopMargin,
					label: 'seperatorTopMargin',
				} }
				valueRight={ {
					value: seperatorRightMargin,
					label: 'seperatorRightMargin',
				} }
				valueBottom={ {
					value: seperatorBottomMargin,
					label: 'seperatorBottomMargin',
				} }
				valueLeft={ {
					value: seperatorLeftMargin,
					label: 'seperatorLeftMargin',
				} }
				valueTopTablet={ {
					value: seperatorTopMarginTablet,
					label: 'seperatorTopMarginTablet',
				} }
				valueRightTablet={ {
					value: seperatorRightMarginTablet,
					label: 'seperatorRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: seperatorBottomMarginTablet,
					label: 'seperatorBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: seperatorLeftMarginTablet,
					label: 'seperatorLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: seperatorTopMarginMobile,
					label: 'seperatorTopMarginMobile',
				} }
				valueRightMobile={ {
					value: seperatorRightMarginMobile,
					label: 'seperatorRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: seperatorBottomMarginMobile,
					label: 'seperatorBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: seperatorLeftMarginMobile,
					label: 'seperatorLeftMarginMobile',
				} }
				unit={ {
					value: seperatorMarginUnit,
					label: 'seperatorMarginUnit',
				} }
				mUnit={ {
					value: seperatorMarginUnitMobile,
					label: 'seperatorMarginUnitMobile',
				} }
				tUnit={ {
					value: seperatorMarginUnitTablet,
					label: 'seperatorMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: seperatorMarginLink,
					label: 'seperatorMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	return (
		<React.Fragment>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
						{shapeGeneralPanel}
						{
							layout === 'overlay' && (
								<>
									{headingGeneralPanel}
									{descriptionGeneralPanel}
									{seperatorGeneralPanel}
								</>
							)
						}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ImageStylePanel}
						{
							layout === 'overlay' && (
								<>
									{overlayStylePanel}
									{headingStylePanel}

								</>
							)
						}
						{ captionStylePanel }
						{ 'none' !== seperatorStyle && layout === 'overlay' && seperatorStylePanel}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
