// Import all of our Text Options requirements.
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import React, { Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import getMatrixAlignment from '@Controls/getMatrixAlignment';
import { useDeviceType } from '@Controls/getPreviewType';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveBorder from '@Components/responsive-border';
import MultiMediaSelector from '@Components/multimedia-select';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import UAGSelectControl from '@Components/select-control';
import {
	InspectorControls,
	__experimentalLinkControl,
} from '@wordpress/block-editor';
import {
	ToggleControl,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
	TextControl,
	Icon,
	Button,
} from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const MAX_IMAGE_COLUMNS = 8;

const Settings = ( props ) => {
	const deviceType = useDeviceType();
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		readyToRender,

		mediaGallery,
		mediaIDs,
		feedLayout,
		imageDisplayCaption,
		
		columnsDesk,
		columnsTab,
		columnsMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,

		imageCaptionLength,
		captionVisibility,
		captionDisplayType,
		imageCaptionAlignment,
		imageCaptionAlignment01,
		imageCaptionAlignment02,
		imageDefaultCaption,
		captionPaddingTop,
		captionPaddingRight,
		captionPaddingBottom,
		captionPaddingLeft,
		captionPaddingTopTab,
		captionPaddingRightTab,
		captionPaddingBottomTab,
		captionPaddingLeftTab,
		captionPaddingTopMob,
		captionPaddingRightMob,
		captionPaddingBottomMob,
		captionPaddingLeftMob,
		captionPaddingUnit,
		captionPaddingUnitTab,
		captionPaddingUnitMob,
		captionPaddingUnitLink,
		captionGap,
		captionGapUnit,

		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		feedMarginUnitLink,
		
		carouselStartAt,
		carouselSquares,
		carouselLoop,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselPauseOnHover,
		carouselTransitionSpeed,
		generateSpecialTiles,

		feedPagination,
		paginateUseArrows,
		paginateUseDots,
		paginateUseLoader,
		paginateLimit,
		paginateButtonAlign,
		paginateButtonText,
		paginateButtonPaddingTop,
		paginateButtonPaddingRight,
		paginateButtonPaddingBottom,
		paginateButtonPaddingLeft,
		paginateButtonPaddingTopTab,
		paginateButtonPaddingRightTab,
		paginateButtonPaddingBottomTab,
		paginateButtonPaddingLeftTab,
		paginateButtonPaddingTopMob,
		paginateButtonPaddingRightMob,
		paginateButtonPaddingBottomMob,
		paginateButtonPaddingLeftMob,
		paginateButtonPaddingUnit,
		paginateButtonPaddingUnitTab,
		paginateButtonPaddingUnitMob,
		paginateButtonPaddingUnitLink,
		
		imageBorderTopLeftRadius,
		imageBorderTopRightRadius,
		imageBorderBottomRightRadius,
		imageBorderBottomLeftRadius,
		imageBorderTopLeftRadiusTablet,
		imageBorderTopRightRadiusTablet,
		imageBorderBottomRightRadiusTablet,
		imageBorderBottomLeftRadiusTablet,
		imageBorderTopLeftRadiusMobile,
		imageBorderTopRightRadiusMobile,
		imageBorderBottomRightRadiusMobile,
		imageBorderBottomLeftRadiusMobile,
		imageBorderRadiusUnit,
		imageBorderRadiusUnitTablet,
		imageBorderRadiusUnitMobile,
		imageBorderRadiusUnitLink,
		imageEnableZoom,
		imageZoomType,
		captionBackgroundEnableBlur,
		captionBackgroundBlurAmount,

		captionLoadGoogleFonts,
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSize,
		captionFontSizeMob,
		captionFontSizeTab,
		captionLineHeightType,
		captionLineHeight,
		captionLineHeightMob,
		captionLineHeightTab,

		loadMoreLoadGoogleFonts,
		loadMoreFontFamily,
		loadMoreFontWeight,
		loadMoreFontStyle,
		loadMoreTransform,
		loadMoreDecoration,
		loadMoreFontSizeType,
		loadMoreFontSize,
		loadMoreFontSizeMob,
		loadMoreFontSizeTab,
		loadMoreLineHeightType,
		loadMoreLineHeight,
		loadMoreLineHeightMob,
		loadMoreLineHeightTab,

		captionBackgroundBlurOpacity,
		captionBackgroundBlurOpacityHover,
		captionBackgroundEffect,
		captionBackgroundEffectHover,
		captionBackgroundEffectAmount,
		captionBackgroundEffectAmountHover,
		captionColor,
		captionColorHover,
		captionBackgroundColor,
		captionBackgroundColorHover,
		overlayColor,
		overlayColorHover,
		captionSeparateColors,

		paginateArrowDistance,
		paginateArrowDistanceUnit,
		paginateLoaderSize,
		paginateButtonTextColor,
		paginateButtonTextColorHover,
		paginateColor,
		paginateColorHover,
	} = attributes;

	// Helpers

	const getVisibleColors = () => {
		// Skip to hover color if any of the following are true:
		// For Text: captionColor.toLowerCase() === 'transparent'
		// For Hex: captionColor.charAt( 0 ) === "#" && captionColor.length === 9 && captionColor.slice(-2) === "00"
		// For RGBA: captionColor.slice(0,4) === "rgba" && parseFloat( captionColor.slice( captionColor.lastIndexOf( ',' ) ).slice( 1, -1 ) ) === 0.0
		if (
			captionColor.toLowerCase() === 'transparent' || (
				captionColor.charAt( 0 ) === "#" && captionColor.length === 9 && captionColor.slice(-2) === "00"
			) || (
				captionColor.slice(0,4) === "rgba" && parseFloat( captionColor.slice( captionColor.lastIndexOf( ',' ) ).slice( 1, -1 ) ) === 0.0
			)
		){
			// Use Hover Colors.
		}
	};
	
	// Loading Google Fonts.
	let loadCaptionGoogleFonts;
	let loadLoadMoreGoogleFonts;

	if ( captionLoadGoogleFonts === true ) {
		const captionConfig = {
			google: {
				families: [
					captionFontFamily +
						( captionFontWeight ? ':' + captionFontWeight : '' ),
				],
			},
		};

		loadCaptionGoogleFonts = (
			<WebfontLoader config={ captionConfig }></WebfontLoader>
		);
	}

	if ( loadMoreLoadGoogleFonts === true ) {
		const loadMoreConfig = {
			google: {
				families: [
					loadMoreFontFamily + ( loadMoreFontWeight ? ':' + loadMoreFontWeight : '' ),
				],
			},
		};

		loadLoadMoreGoogleFonts = (
			<WebfontLoader config={ loadMoreConfig }></WebfontLoader>
		);
	}

	// Get the Capitalized Title from the Word.
	const titleFromValue = ( wordString ) => {
		let newWords = '';
		wordString = wordString.replaceAll( '-', ' ' )
		wordString.split( ' ' ).forEach( ( word ) => {
			newWords += ` ${ word.charAt( 0 ).toUpperCase() + word.slice( 1 ) }`;
		});
		return newWords.slice( 1 );
	};

	// Combine Alignment to Matrix.
	useEffect( () => {
		setAttributes( { imageCaptionAlignment: `${ imageCaptionAlignment01 } ${ imageCaptionAlignment02 }` } );
	},  [ imageCaptionAlignment01, imageCaptionAlignment02 ] );

	// Update the Media Gallery.
	const updateMediaGallery = ( media ) => {
        let goodToGo = true;
		let updatedIDs = [];
        media.forEach( ( image ) => {
            if ( ! image || ! image.url || ! image.type || 'image' !== image.type ) {
                goodToGo = false;
            }    
            else {
                updatedIDs.push( image.id );
            }            
        } );
        goodToGo
			? setAttributes( { mediaGallery: media, mediaIDs: updatedIDs, readyToRender: true } )
			: setAttributes( { mediaGallery: mediaGallery, mediaIDs: mediaIDs,  readyToRender: mediaIDs ? true : false } );
	};

	// Split Up Alignment Matrix.
	const updateSplitAlignments = ( matrixValue ) => {
		setAttributes( {
			// imageCaptionAlignment: matrixValue,
			imageCaptionAlignment01: getMatrixAlignment( matrixValue, 1 ),
			imageCaptionAlignment02: getMatrixAlignment( matrixValue, 2 ),
		} );
	};

	// Reset the Gaps when Switching Layouts from Grid to Masonry.
	const resetGaps = ( layoutType ) => {
		// First Default the Pagination for Carousel Only...
		layoutType === 'carousel'
			? setAttributes( { feedPagination: true, paginateUseArrows: true, paginateUseDots: true } )
			: setAttributes( { feedPagination: false, gridPageNumber: 1 } );
		setAttributes( { feedLayout: layoutType } );
		// Next Disable Bar Outside Image for Grid, Tiles and Squared Carousel...
		switch ( layoutType ){
			case 'grid':
			case 'tiled':
				if ( captionDisplayType === 'bar-outside' ){
					setAttributes( { captionDisplayType: 'bar-inside' } );
				}
				break;
			case 'carousel':
				if ( carouselSquares && captionDisplayType === 'bar-outside' ){
					setAttributes( { captionDisplayType: 'bar-inside' } );
				}
				break;
		}
	};

	// Update Caption Visibility when Bar is Outside.
	useEffect( () => {
		( captionDisplayType === 'bar-outside' ) && setAttributes( { captionVisibility: 'always' } ) 
	}, [ captionDisplayType ] );

	// Bar Option Generation.
	const generateBarOptions = () => (
		( feedLayout === 'grid' || feedLayout === 'tiled' )
			? ( [
				{
					label: __( 'Overlay', 'ultimate-addons-for-gutenberg' ),
					value: 'overlay',
				},
				{
					label: __( 'Bar Over Image', 'ultimate-addons-for-gutenberg' ),
					value: 'bar-inside',
				}
			] )
			: ( [
				{
					label: __( 'Overlay', 'ultimate-addons-for-gutenberg' ),
					value: 'overlay',
				},
				{
					label: __( 'Bar Over Image', 'ultimate-addons-for-gutenberg' ),
					value: 'bar-inside',
				},
				{
					label: __( 'Bar Outside Image', 'ultimate-addons-for-gutenberg' ),
					value: 'bar-outside',
				}
			] )
	);

	const renderCaptionDisplay = ( isHover ) => (
		<>
			<AdvancedPopColorControl
				label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={
					isHover
					? captionColorHover
						? captionColorHover
						: 'rgba(0,0,0,0)'
					: captionColor
						? captionColor
						: 'rgba(0,0,0,0)'
				}
				onColorChange={ ( value ) =>
					isHover
					? setAttributes( { captionColorHover: value } )
					: setAttributes( { captionColor: value } )
				}
			/>
			<AdvancedPopColorControl
				label={ __(
					`${
						imageDisplayCaption
						? titleFromValue( captionDisplayType ).split( ' ' )[ 0 ]
						: 'Overlay'
					} Color`,
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					isHover
					? captionBackgroundColorHover
						? captionBackgroundColorHover
						: 'rgba(0,0,0,0)'
					: captionBackgroundColor
						? captionBackgroundColor
						: 'rgba(0,0,0,0)'
				}
				onColorChange={ ( value ) =>
					isHover
					? setAttributes( { captionBackgroundColorHover: value } )
					: setAttributes( { captionBackgroundColor: value } )
				}
			/>
		</>
	);

	const renderOverlayDisplay = ( isHover ) => (
		<>
			{/* The entire section below can be created into a component if required in the future */}
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					`Effect`,
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: isHover ? captionBackgroundEffectHover : captionBackgroundEffect,
					label:  isHover ? 'captionBackgroundEffectHover' : 'captionBackgroundEffect',
				} }
				options={ [
					{
						value: 'none',
						label: __( 'None', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'grayscale',
						label: __( 'Grayscale', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'sepia',
						label: __( 'Sepia', 'ultimate-addons-for-gutenberg' ),
					},
				] }
			/>
			{ renderBackgroundEffectSettings(
				isHover ? captionBackgroundEffectHover : captionBackgroundEffect,
				isHover
			) }
			{/* The entire section above can be created into a component  if required in the future */}
			{ ! imageDisplayCaption && (
				<AdvancedPopColorControl
					label={ __( 'Overlay Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={
						isHover
						? overlayColorHover
							? overlayColorHover
							: 'rgba(0,0,0,0)'
						: overlayColor
							? overlayColor
							: 'rgba(0,0,0,0)'
					}
					onColorChange={ ( value ) =>
						isHover
						? setAttributes( { overlayColorHover: value } )
						: setAttributes( { overlayColor: value } )
					}
				/>
			) }
			{ captionBackgroundEnableBlur && (
				<Range
					label={ __( `Blur Opacity`, 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ 
						isHover
						? captionBackgroundBlurOpacityHover
						: captionBackgroundBlurOpacity
					}
					data={ {
						value: isHover
							? captionBackgroundBlurOpacityHover
							: captionBackgroundBlurOpacity,
						label: isHover
							? 'captionBackgroundBlurOpacityHover'
							: 'captionBackgroundBlurOpacity',
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				/>
			) }
		</>
	);

	const renderBackgroundEffectSettings = ( bgEffect, isHover ) => {
		switch ( bgEffect ) {
			case 'grayscale':
			case 'sepia':
				return (
					<Range
						label={ __( `${ titleFromValue( bgEffect ) } Amount`, 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ 
							isHover
							? captionBackgroundEffectAmountHover
							: captionBackgroundEffectAmount
						}
						data={ {
							value: isHover
								? captionBackgroundEffectAmountHover
								: captionBackgroundEffectAmount,
							label: isHover
								? 'captionBackgroundEffectAmountHover'
								: 'captionBackgroundEffectAmount',
						} }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>
				);
		}
	};

	const renderPaginationColors = ( isHover ) => (
		<>
			<AdvancedPopColorControl
				label={ __( `${  ! paginateUseLoader ? 'Background ' : '' }Color`, 'ultimate-addons-for-gutenberg' ) }
				colorValue={
					isHover
					? paginateColorHover
						? paginateColorHover
						: 'rgba(0,0,0,0)'
					: paginateColor
						? paginateColor
						: 'rgba(0,0,0,0)'
				}
				onColorChange={ ( value ) =>
					isHover
					? setAttributes( { paginateColorHover: value } )
					: setAttributes( { paginateColor: value } )
				}
			/>
			{ ! paginateUseLoader && (
				<>
					<AdvancedPopColorControl
						label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={
							isHover
							? paginateButtonTextColorHover
								? paginateButtonTextColorHover
								: 'rgba(0,0,0,0)'
							: paginateButtonTextColor
								? paginateButtonTextColor
								: 'rgba(0,0,0,0)'
						}
						onColorChange={ ( value ) =>
							isHover
							? setAttributes( { paginateButtonTextColorHover: value } )
							: setAttributes( { paginateButtonTextColor: value } )
						}
					/>
				</>
			) }
		</>
	);

	// Panel Component Renders

	const initialSettings = () => (
		<p style={ { 'padding': '16px' } }>{ __( 'Create a gallery to enable settings.', 'ultimate-addons-for-gutenberg' ) }</p>
	);

	const gallerySettings = () => (
		<>
			<UAGAdvancedPanelBody title={ __( 'Gallery', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<MultiMediaSelector
					componentLabel={ 'Update Gallery' }
					mediaTypeLabel={ 'Images' }
					onSelectMedia={ updateMediaGallery }
					mediaGallery={ mediaGallery }
					mediaIDs={ mediaIDs }
					allowedTypes={ ['image'] }
					createGallery={ true }
				/>
			</UAGAdvancedPanelBody>
			{/* <ResponsiveSelectControl
				label={ __( 'Image Size', 'ultimate-addons-for-gutenberg' ) }
				options={ {
					desktop: imageSizeOptions,
					tablet: imageSizeOptions,
					mobile: imageSizeOptions,
				} }
				data={ {
					desktop: {
						value: sizeSlug,
						label: 'sizeSlug'
					},
					tablet: {
						value: sizeSlugTablet,
						label: 'sizeSlugTablet'
					},
					mobile: {
						value: sizeSlugMobile,
						label: 'sizeSlugMobile'
					},
				} }
				setAttributes={ setAttributes }
			/> */}
		</>
	);

	const captionSettings = () => (
		<UAGAdvancedPanelBody title={ __( 'Caption', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Display Captions', 'ultimate-addons-for-gutenberg' ) }
				checked={ imageDisplayCaption }
				onChange={ () =>
					setAttributes( { imageDisplayCaption: ! imageDisplayCaption } )
				}
			/>
			{ imageDisplayCaption && (
				<>
					<TextControl
						autoComplete="off"
						label={ __(
							`Default Caption`,
							'ultimate-addons-for-gutenberg'
						) }
						value={ imageDefaultCaption }
						onChange={ ( value ) => setAttributes( { imageDefaultCaption: value } ) }
					/>
					<Range
						label={ __( 'Max Caption Length (Characters)', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ imageCaptionLength }
						data={ {
							value: imageCaptionLength,
							label: 'imageCaptionLength',
						} }
						min={ 1 }
						max={ 100 }
						displayUnit={ false }
					/>
					<UAGSelectControl
						label={ __( 'Caption Type', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: captionDisplayType,
							label: 'captionDisplayType',
						} }
						setAttributes={ setAttributes }
						options={ generateBarOptions() }
					/>
					{
						captionDisplayType !== 'bar-outside'
							? (
								<>
									<UAGSelectControl
										label={ __( 'Visibility', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											value: captionVisibility,
											label: 'captionVisibility',
										} }
										setAttributes={ setAttributes }
									>
										<option value="hover">Show on hover</option>
										<option value="antiHover">Hide on hover</option>
										<option value="always">Always Visible</option>
									</UAGSelectControl>
									<span className='uag-control-label'>
										{ __( 'Caption Alignment', 'ultimate-addons-for-gutenberg' ) }
									</span>
									<AlignmentMatrixControl
										label={ __( 'Caption Alignment', 'ultimate-addons-for-gutenberg' ) }
										value={ imageCaptionAlignment }
										onChange={ ( value ) => updateSplitAlignments( value ) }
									/>
								</>
							) 
							: (
								<>
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __(
											'Bar Position',
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											value: imageCaptionAlignment01,
											label: 'imageCaptionAlignment01',
										} }
										options={ [
											{
												value: 'top',
												label: __( 'Above', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'bottom',
												label: __( 'Below', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'center',
												label: __( 'Separated', 'ultimate-addons-for-gutenberg' ),
											},
										] }
										showIcons={ false }
									/>
									{ ( ( captionDisplayType === 'bar-outside' ) && ( getMatrixAlignment( imageCaptionAlignment, 1 ) === 'center' ) ) && (
										<Range
											label={ __( 'Caption Gap', 'ultimate-addons-for-gutenberg' ) }
											setAttributes={ setAttributes }
											value={ captionGap }
											data={ {
												value: captionGap,
												label: 'captionGap',
											} }
											min={ 0 }
											max={ 100 }
											unit={ {
												value: captionGapUnit,
												label: 'captionGapUnit',
											} }
											units={ [
												{
													name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'em',
												},
												{
													name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'px',
												},
											] }
										/>
									) }
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __(
											'Caption Alignment',
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											value: imageCaptionAlignment02,
											label: 'imageCaptionAlignment02',
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
												tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'center',
												icon: (
													<Icon
														icon={ renderSVG( 'fa fa-align-center' ) }
													/>
												),
												tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'right',
												icon: (
													<Icon
														icon={ renderSVG( 'fa fa-align-right' ) }
													/>
												),
												tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
											},
										] }
										showIcons={ true }
									/>
								</>
							)
					}
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	const layoutSettings = () => (
		<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<UAGSelectControl
				label={ __( 'Layout Type', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: feedLayout,
					label: 'feedLayout',
				} }
				setAttributes={ setAttributes }
				options = { [
					{
						label: __( 'Grid', 'ultimate-addons-for-gutenberg' ),
						value: 'grid',
					},
					{
						label: __( 'Masonry', 'ultimate-addons-for-gutenberg' ),
						value: 'masonry',
					},
					{
						label: __( 'Carousel', 'ultimate-addons-for-gutenberg' ),
						value: 'carousel',
					},
					{
						label: __( 'Tiled', 'ultimate-addons-for-gutenberg' ),
						value: 'tiled',
					},
				] }
			/>
			<ResponsiveSlider
				label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: columnsDesk,
						label: 'columnsDesk',
					},
					tablet: {
						value: columnsTab,
						label: 'columnsTab',
					},
					mobile: {
						value: columnsMob,
						label: 'columnsMob',
					},
				} }
				min={ 1 }
				max={ Math.min( MAX_IMAGE_COLUMNS, mediaGallery.length ) }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<SpacingControl
				{ ...props }
				label={ __( 'Feed Margin', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: feedMarginTop,
					label: 'feedMarginTop',
				} }
				valueRight={ {
					value: feedMarginRight,
					label: 'feedMarginRight',
				} }
				valueBottom={ {
					value: feedMarginBottom,
					label: 'feedMarginBottom',
				} }
				valueLeft={ {
					value: feedMarginLeft,
					label: 'feedMarginLeft',
				} }
				valueTopTablet={ {
					value: feedMarginTopTab,
					label: 'feedMarginTopTab',
				} }
				valueRightTablet={ {
					value: feedMarginRightTab,
					label: 'feedMarginRightTab',
				} }
				valueBottomTablet={ {
					value: feedMarginBottomTab,
					label: 'feedMarginBottomTab',
				} }
				valueLeftTablet={ {
					value: feedMarginLeftTab,
					label: 'feedMarginLeftTab',
				} }
				valueTopMobile={ {
					value: feedMarginTopMob,
					label: 'feedMarginTopMob',
				} }
				valueRightMobile={ {
					value: feedMarginRightMob,
					label: 'feedMarginRightMob',
				} }
				valueBottomMobile={ {
					value: feedMarginBottomMob,
					label: 'feedMarginBottomMob',
				} }
				valueLeftMobile={ {
					value: feedMarginLeftMob,
					label: 'feedMarginLeftMob',
				} }
				unit={ {
					value: feedMarginUnit,
					label: 'feedMarginUnit',
				} }
				tUnit={ {
					value: feedMarginUnitTab,
					label: 'feedMarginUnitTab',
				} }
				mUnit={ {
					value: feedMarginUnitMob,
					label: 'feedMarginUnitMob',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: feedMarginUnitLink,
					label: 'feedMarginUnitLink',
				} }
				units={ [
					{
						name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'em',
					},
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/>
			<ResponsiveSlider
				label={ __( `Gap ${ feedLayout === 'grid' ? 'Between' : 'Around' } Images`, 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: gridImageGap,
						label: 'gridImageGap',
						unit: {
							value: gridImageGapUnit,
							label: 'gridImageGapUnit',
						},
					},
					tablet: {
						value: gridImageGapTab,
						label: 'gridImageGapTab',
						unit: {
							value: gridImageGapUnitTab,
							label: 'gridImageGapUnitTab',
						},
					},
					mobile: {
						value: gridImageGapMob,
						label: 'gridImageGapMob',
						unit: {
							value: gridImageGapUnitMob,
							label: 'gridImageGapUnitMob',
						},
					},
				} }
				min={ 0 }
				max={ 100 }
				units={ [
					{
						name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'em',
					},
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
				] }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	);
	
	const layoutSpecificSettings = () => (
		<UAGAdvancedPanelBody title={ __(
			`${ ( feedLayout === 'carousel' || feedLayout === 'tiled' ) ? titleFromValue( feedLayout ) : 'Pagination' }`,
			'ultimate-addons-for-gutenberg' 
		) } initialOpen={ false }>
			{ ( feedLayout === 'carousel' ) && (
				<>
					<Range
						label={ __( `Starting Image`, 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ carouselStartAt + 1 }
						data={ {
							value: carouselStartAt,
							label: 'carouselStartAt',
						} }
						onChange={ ( value ) => setAttributes( { carouselStartAt: value - 1 } ) }
						min={ 1 }
						max={ mediaGallery.length }
						displayUnit={ false }
					/>
					<Range
						label={ __( `Transition Speed (ms)`, 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ carouselTransitionSpeed }
						data={ {
							value: carouselTransitionSpeed,
							label: 'carouselTransitionSpeed',
						} }
						min={ 0 }
						max={ 5000 }
						displayUnit={ false }
					/>
					<ToggleControl
						label={ __(
							`Crop Images to Squares`,
							'ultimate-addons-for-gutenberg'
						) }
						checked={ carouselSquares }
						onChange={ () => 
							setAttributes( { carouselSquares: ! carouselSquares } )
						}
					/>
					<ToggleControl
						label={ __(
							`Infinite Carousel`,
							'ultimate-addons-for-gutenberg'
						) }
						checked={ carouselLoop }
						onChange={ () => 
							setAttributes( { carouselLoop: ! carouselLoop } )
						}
					/>
					<ToggleControl
						label={ __(
							`Display Dots`,
							'ultimate-addons-for-gutenberg'
						) }
						checked={ paginateUseDots }
						onChange={ () => 
							setAttributes( { paginateUseDots: ! paginateUseDots } )
						}
					/>
					<ToggleControl
						label={ __(
							`Display Arrows`,
							'ultimate-addons-for-gutenberg'
						) }
						checked={ paginateUseArrows }
						onChange={ () => 
							setAttributes( { paginateUseArrows: ! paginateUseArrows } )
						}
					/>
					<ToggleControl
						label={ __(
							`Autoplay`,
							'ultimate-addons-for-gutenberg'
						) }
						checked={ carouselAutoplay }
						onChange={ () => 
							setAttributes( { carouselAutoplay: ! carouselAutoplay } )
						}
					/>
					{ carouselAutoplay && (
						<>
							<Range
								label={ __( `Autoplay Speed (ms)`, 'ultimate-addons-for-gutenberg' ) }
								setAttributes={ setAttributes }
								value={ carouselAutoplaySpeed }
								data={ {
									value: carouselAutoplaySpeed,
									label: 'carouselAutoplaySpeed',
								} }
								min={ 0 }
								max={ 5000 }
								displayUnit={ false }
							/>
							<ToggleControl
								label={ __(
									`Pause on Hover`,
									'ultimate-addons-for-gutenberg'
								) }
								checked={ carouselPauseOnHover }
								onChange={ () => 
									setAttributes( { carouselPauseOnHover: ! carouselPauseOnHover } )
								}
							/>
						</>
					) }
				</>
			) }
			{ ( feedLayout === 'grid' || feedLayout === 'masonry' ) && (
				<>
					<ToggleControl
						label={ __(
							`Pagination`,
							'ultimate-addons-for-gutenberg'
						) }
						checked={ feedPagination }
						onChange={ () => { switch ( feedLayout ) {
							case 'grid':
								return setAttributes( {
									paginateUseArrows: ! feedPagination,
									paginateUseDots: ! feedPagination,
									feedPagination: ! feedPagination,
								} );
							case 'masonry':
								return setAttributes( {
									paginateUseLoader: ! feedPagination,
									feedPagination: ! feedPagination,
								} );
						} } }
					/>
					{ feedPagination && (
						<>
							<Range
								label={ __( `Page Limit`, 'ultimate-addons-for-gutenberg' ) }
								setAttributes={ setAttributes }
								value={ paginateLimit }
								data={ {
									value: paginateLimit,
									label: 'paginateLimit',
								} }
								min={ 1 }
								max={ 100 }
								displayUnit={ false }
							/>				
							{ feedLayout === 'masonry' && (
								<>
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __(
											`Pagination Type`,
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											value: paginateUseLoader,
											label:  'paginateUseLoader',
										} }
										options={ [
											{
												value: true,
												label: __( 'Loader', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: false,
												label: __( 'Button', 'ultimate-addons-for-gutenberg' ),
											},
										] }
									/>
									{ ! paginateUseLoader && (
										<>
											<TextControl
												autoComplete="off"
												label={ __(
													'Button Text',
													'ultimate-addons-for-gutenberg'
												) }
												value={ paginateButtonText }
												onChange={ ( value ) => setAttributes( { paginateButtonText: value } ) }
											/>
											<MultiButtonsControl
												setAttributes={ setAttributes }
												label={ __(
													'Button Alignment',
													'ultimate-addons-for-gutenberg'
												) }
												data={ {
													value: paginateButtonAlign,
													label: 'paginateButtonAlign',
												} }
												className="uagb-multi-button-alignment-control"
												options={ [
													{
														value: 'flex-start',
														icon: (
															<Icon
																icon={ renderSVG( 'fa fa-align-left' ) }
															/>
														),
														tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
													},
													{
														value: 'center',
														icon: (
															<Icon
																icon={ renderSVG( 'fa fa-align-center' ) }
															/>
														),
														tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
													},
													{
														value: 'flex-end',
														icon: (
															<Icon
																icon={ renderSVG( 'fa fa-align-right' ) }
															/>
														),
														tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
													},
												] }
												showIcons={ true }
											/>
											<SpacingControl
												{ ...props }
												label={ __( 'Button Padding', 'ultimate-addons-for-gutenberg' ) }
												valueTop={ {
													value: paginateButtonPaddingTop,
													label: 'paginateButtonPaddingTop',
												} }
												valueRight={ {
													value: paginateButtonPaddingRight,
													label: 'paginateButtonPaddingRight',
												} }
												valueBottom={ {
													value: paginateButtonPaddingBottom,
													label: 'paginateButtonPaddingBottom',
												} }
												valueLeft={ {
													value: paginateButtonPaddingLeft,
													label: 'paginateButtonPaddingLeft',
												} }
												valueTopTablet={ {
													value: paginateButtonPaddingTopTab,
													label: 'paginateButtonPaddingTopTab',
												} }
												valueRightTablet={ {
													value: paginateButtonPaddingRightTab,
													label: 'paginateButtonPaddingRightTab',
												} }
												valueBottomTablet={ {
													value: paginateButtonPaddingBottomTab,
													label: 'paginateButtonPaddingBottomTab',
												} }
												valueLeftTablet={ {
													value: paginateButtonPaddingLeftTab,
													label: 'paginateButtonPaddingLeftTab',
												} }
												valueTopMobile={ {
													value: paginateButtonPaddingTopMob,
													label: 'paginateButtonPaddingTopMob',
												} }
												valueRightMobile={ {
													value: paginateButtonPaddingRightMob,
													label: 'paginateButtonPaddingRightMob',
												} }
												valueBottomMobile={ {
													value: paginateButtonPaddingBottomMob,
													label: 'paginateButtonPaddingBottomMob',
												} }
												valueLeftMobile={ {
													value: paginateButtonPaddingLeftMob,
													label: 'paginateButtonPaddingLeftMob',
												} }
												unit={ {
													value: paginateButtonPaddingUnit,
													label: 'paginateButtonPaddingUnit',
												} }
												tUnit={ {
													value: paginateButtonPaddingUnitTab,
													label: 'paginateButtonPaddingUnitTab',
												} }
												mUnit={ {
													value: paginateButtonPaddingUnitMob,
													label: 'paginateButtonPaddingUnitMob',
												} }
												attributes={ attributes }
												setAttributes={ setAttributes }
												link={ {
													value: paginateButtonPaddingUnitLink,
													label: 'paginateButtonPaddingUnitLink',
												} }
												units={ [
													{
														name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
														unitValue: 'em',
													},
													{
														name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
														unitValue: 'px',
													},
												] }
											/>
										</>
									) }
								</>
							) }
						</>
					) }
				</>
			) }
			{ ( feedLayout === 'tiled' ) && (
				<ToggleControl
					label={ __(
						`Generate Special Tiles`,
						'ultimate-addons-for-gutenberg'
					) }
					checked={ generateSpecialTiles }
					onChange={ () => setAttributes( {
						generateSpecialTiles: ! generateSpecialTiles,
					} ) }
					help={
						generateSpecialTiles
						? __(
							`\"Wide\" and \"Tall\" tiles will be automatically generated.`,
							'ultimate-addons-for-gutenberg'
						)
						: __(
							`\"Wide\", \"Tall\", and \"Focus\" tiles will be set from the image\'s alt text.`,
							'ultimate-addons-for-gutenberg'
						)
					}
				/>
			) }
		</UAGAdvancedPanelBody>
	);

	const imageStyling = () => (
		<UAGAdvancedPanelBody title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
			<SpacingControl
				{ ...props }
				label={ __( 'Border Radius', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: imageBorderTopLeftRadius,
					label: 'imageBorderTopLeftRadius',
				} }
				valueRight={ {
					value: imageBorderTopRightRadius,
					label: 'imageBorderTopRightRadius',
				} }
				valueBottom={ {
					value: imageBorderBottomRightRadius,
					label: 'imageBorderBottomRightRadius',
				} }
				valueLeft={ {
					value: imageBorderBottomLeftRadius,
					label: 'imageBorderBottomLeftRadius',
				} }
				valueTopTablet={ {
					value: imageBorderTopLeftRadiusTablet,
					label: 'imageBorderTopLeftRadiusTablet',
				} }
				valueRightTablet={ {
					value: imageBorderTopRightRadiusTablet,
					label: 'imageBorderTopRightRadiusTablet',
				} }
				valueBottomTablet={ {
					value: imageBorderBottomRightRadiusTablet,
					label: 'imageBorderBottomRightRadiusTablet',
				} }
				valueLeftTablet={ {
					value: imageBorderBottomLeftRadiusTablet,
					label: 'imageBorderBottomLeftRadiusTablet',
				} }
				valueTopMobile={ {
					value: imageBorderTopLeftRadiusMobile,
					label: 'imageBorderTopLeftRadiusMobile',
				} }
				valueRightMobile={ {
					value: imageBorderTopRightRadiusMobile,
					label: 'imageBorderTopRightRadiusMobile',
				} }
				valueBottomMobile={ {
					value: imageBorderBottomRightRadiusMobile,
					label: 'imageBorderBottomRightRadiusMobile',
				} }
				valueLeftMobile={ {
					value: imageBorderBottomLeftRadiusMobile,
					label: 'imageBorderBottomLeftRadiusMobile',
				} }
				unit={ {
					value: imageBorderRadiusUnit,
					label: 'imageBorderRadiusUnit',
				} }
				tUnit={ {
					value: imageBorderRadiusUnitTablet,
					label: 'imageBorderRadiusUnitTablet',
				} }
				mUnit={ {
					value: imageBorderRadiusUnitMobile,
					label: 'imageBorderRadiusUnitMobile',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: imageBorderRadiusUnitLink,
					label: 'imageBorderRadiusUnitLink',
				} }
				units={ [
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/>
			<ToggleControl
				label={ __(
					`Enable Hover Zoom`,
					'ultimate-addons-for-gutenberg'
				) }
				checked={ imageEnableZoom }
				onChange={ () => 
					setAttributes( { imageEnableZoom: ! imageEnableZoom } )
				}
			/>
			<ToggleControl
				label={ __(
					`Enable Blur Overlay`,
					'ultimate-addons-for-gutenberg'
				) }
				help={
					captionBackgroundEnableBlur
					? __(
						'Blur Overlay may not be visible on some browsers',
						'ultimate-addons-for-gutenberg'
					)
					: __(
						'Blur Opacity can be edited for Normal and Hover.',
						'ultimate-addons-for-gutenberg'
					)
				}
				checked={ captionBackgroundEnableBlur }
				onChange={ () => 
					setAttributes( { captionBackgroundEnableBlur: ! captionBackgroundEnableBlur } )
				}
			/>
			{ imageEnableZoom && (
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						`Zoom Type`,
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: imageZoomType,
						label: 'imageZoomType',
					} }
					options={ [
						{
							value: 'zoom-in',
							label: __( 'Zoom In', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'zoom-out',
							label: __( 'Zoom Out', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			) }
			{ captionBackgroundEnableBlur && (
				<Range
					label={ __( `Blur Amount`, 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ captionBackgroundBlurAmount }
					data={ {
						value: captionBackgroundBlurAmount,
						label: 'captionBackgroundBlurAmount',
					} }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
			) }
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
					},
					{
						name: 'hover',
						title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				normal={ renderOverlayDisplay( false ) }
				hover={ renderOverlayDisplay( true ) }
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);



	const captionStyling = () => (
		<UAGAdvancedPanelBody title={ __( 'Caption', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<Suspense fallback={ lazyLoader() }>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
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
						value: captionFontSizeMob,
						label: 'captionFontSizeMob',
					} }
					fontSizeTablet={ {
						value: captionFontSizeTab,
						label: 'captionFontSizeTab',
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
						value: captionLineHeightMob,
						label: 'captionLineHeightMob',
					} }
					lineHeightTablet={ {
						value: captionLineHeightTab,
						label: 'captionLineHeightTab',
					} }
				/>
			</Suspense>
			<SpacingControl
				{ ...props }
				label={ __( 'Caption Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: captionPaddingTop,
					label: 'captionPaddingTop',
				} }
				valueRight={ {
					value: captionPaddingRight,
					label: 'captionPaddingRight',
				} }
				valueBottom={ {
					value: captionPaddingBottom,
					label: 'captionPaddingBottom',
				} }
				valueLeft={ {
					value: captionPaddingLeft,
					label: 'captionPaddingLeft',
				} }
				valueTopTablet={ {
					value: captionPaddingTopTab,
					label: 'captionPaddingTopTab',
				} }
				valueRightTablet={ {
					value: captionPaddingRightTab,
					label: 'captionPaddingRightTab',
				} }
				valueBottomTablet={ {
					value: captionPaddingBottomTab,
					label: 'captionPaddingBottomTab',
				} }
				valueLeftTablet={ {
					value: captionPaddingLeftTab,
					label: 'captionPaddingLeftTab',
				} }
				valueTopMobile={ {
					value: captionPaddingTopMob,
					label: 'captionPaddingTopMob',
				} }
				valueRightMobile={ {
					value: captionPaddingRightMob,
					label: 'captionPaddingRightMob',
				} }
				valueBottomMobile={ {
					value: captionPaddingBottomMob,
					label: 'captionPaddingBottomMob',
				} }
				valueLeftMobile={ {
					value: captionPaddingLeftMob,
					label: 'captionPaddingLeftMob',
				} }
				unit={ {
					value: captionPaddingUnit,
					label: 'captionPaddingUnit',
				} }
				tUnit={ {
					value: captionPaddingUnitTab,
					label: 'captionPaddingUnitTab',
				} }
				mUnit={ {
					value: captionPaddingUnitMob,
					label: 'captionPaddingUnitMob',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: captionPaddingUnitLink,
					label: 'captionPaddingUnitLink',
				} }
				units={ [
					{
						name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'em',
					},
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/>
			{ captionVisibility === 'always' && (
				<ToggleControl
					label={ __(
						'Separate Hover Colors',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ captionSeparateColors }
					onChange={ () => setAttributes( { captionSeparateColors: ! captionSeparateColors } ) }
				/>
			) }
			{ ( captionVisibility === 'always' && captionSeparateColors )
				? (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={ renderCaptionDisplay( false ) }
						hover={ renderCaptionDisplay( true ) }
						disableBottomSeparator={ true }
					/>
				)
				: (
					<>
						<AdvancedPopColorControl
							label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={
								captionColor
								? captionColor
								: 'rgba(0,0,0,0)'
							}
							onColorChange={ ( value ) => setAttributes( { captionColor: value } ) }
						/>
						<AdvancedPopColorControl
							label={ __(
								`${
									imageDisplayCaption
									? titleFromValue( captionDisplayType ).split( ' ' )[ 0 ]
									: 'Overlay'
								} Color`,
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								captionBackgroundColor
								? captionBackgroundColor
								: 'rgba(0,0,0,0)'
							}
							onColorChange={ ( value ) => setAttributes( { captionBackgroundColor: value } ) }
						/>
					</>
				)
			}
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={ 'mainTitle' }
				attributes={ attributes }
				deviceType={ deviceType }
			/>
		</UAGAdvancedPanelBody>
	);

	const paginationStyling = () => (
		<UAGAdvancedPanelBody title={ __( 'Pagination', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			{/* Grid Pagination */}
			{ 'grid' === feedLayout && (
				<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
					},
					{
						name: 'hover',
						title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				normal={ renderPaginationColors( false ) }
				hover={ renderPaginationColors( true ) }
				disableBottomSeparator={ true }
				/>
			) }
			{/* Carousel Pagination */}
			{ ( paginateUseArrows && feedLayout === 'carousel' ) && (
				<>
					<Range
						label={ __( 'Arrow Distance from Edge', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ paginateArrowDistance }
						data={ {
							value: paginateArrowDistance,
							label: 'paginateArrowDistance',
						} }
						min={ -50 }
						max={ 50 }
						unit={ {
							value: paginateArrowDistanceUnit,
							label: 'paginateArrowDistanceUnit',
						} }
						units={ [
							{
								name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'px',
							},
							{
								name: __( '%', 'ultimate-addons-for-gutenberg' ),
								unitValue: '%',
							},
						] }
					/>
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={ renderPaginationColors( false ) }
						hover={ renderPaginationColors( true ) }
					/>
					<ResponsiveBorder
						setAttributes={ setAttributes }
						prefix={ 'arrow' }
						attributes={ attributes }
						deviceType={ deviceType }
					/>
				</>
			) }			
			{/* Masonry Pagination */}
			{ ( feedLayout === 'masonry' ) && (
				<>
					{ paginateUseLoader
						? (
							<>
								<Range
									label={ __( `Loader Size`, 'ultimate-addons-for-gutenberg' ) }
									setAttributes={ setAttributes }
									value={ paginateLoaderSize }
									data={ {
										value: paginateLoaderSize,
										label: 'paginateLoaderSize',
									} }
									min={ 0 }
									max={ 50 }
									displayUnit={ false }
								/>
								{ renderPaginationColors( false ) }
							</>
						)
						: (
							<>
								<Suspense fallback={ lazyLoader() }>
									<TypographyControl
										label={ __(
											'Typography',
											'ultimate-addons-for-gutenberg'
										) }
										attributes={ attributes }
										setAttributes={ setAttributes }
										loadGoogleFonts={ {
											value: loadMoreLoadGoogleFonts,
											label: 'loadMoreLoadGoogleFonts',
										} }
										fontFamily={ {
											value: loadMoreFontFamily,
											label: 'loadMoreFontFamily',
										} }
										fontWeight={ {
											value: loadMoreFontWeight,
											label: 'loadMoreFontWeight',
										} }
										fontStyle={ {
											value: loadMoreFontStyle,
											label: 'loadMoreFontStyle',
										} }
										transform={ {
											value: loadMoreTransform,
											label: 'loadMoreTransform',
										} }
										decoration={ {
											value: loadMoreDecoration,
											label: 'loadMoreDecoration',
										} }
										fontSizeType={ {
											value: loadMoreFontSizeType,
											label: 'loadMoreFontSizeType',
										} }
										fontSize={ {
											value: loadMoreFontSize,
											label: 'loadMoreFontSize',
										} }
										fontSizeMobile={ {
											value: loadMoreFontSizeMob,
											label: 'loadMoreFontSizeMob',
										} }
										fontSizeTablet={ {
											value: loadMoreFontSizeTab,
											label: 'loadMoreFontSizeTab',
										} }
										lineHeightType={ {
											value: loadMoreLineHeightType,
											label: 'loadMoreLineHeightType',
										} }
										lineHeight={ {
											value: loadMoreLineHeight,
											label: 'loadMoreLineHeight',
										} }
										lineHeightMobile={ {
											value: loadMoreLineHeightMob,
											label: 'loadMoreLineHeightMob',
										} }
										lineHeightTablet={ {
											value: loadMoreLineHeightTab,
											label: 'loadMoreLineHeightTab',
										} }
									/>
								</Suspense>
								<UAGTabsControl
									tabs={ [
										{
											name: 'normal',
											title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
										},
										{
											name: 'hover',
											title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
										},
									] }
									normal={ renderPaginationColors( false ) }
									hover={ renderPaginationColors( true ) }
								/>
								<ResponsiveBorder
									setAttributes={ setAttributes }
									prefix={ 'button' }
									attributes={ attributes }
									deviceType={ deviceType }
								/>
							</>
						) 
					}
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	return (
		<Suspense fallback={ lazyLoader() }>
			{/* { blockControls() } */}
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ ! readyToRender && initialSettings() }
						{ readyToRender && gallerySettings() }
						{ readyToRender && layoutSettings() }
						{ ( readyToRender && feedLayout !== 'tiled' ) && layoutSpecificSettings() }
						{ readyToRender && captionSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ ! readyToRender && initialSettings() }
						{ readyToRender && imageStyling() }
						{ ( readyToRender && imageDisplayCaption ) && captionStyling() }
						{ ( readyToRender && feedPagination ) && paginationStyling() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadCaptionGoogleFonts }
			{ loadLoadMoreGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
