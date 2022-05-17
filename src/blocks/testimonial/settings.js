import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import Background from '@Components/background';
import Border from '@Components/border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import UAGImage from '@Components/image';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import { SelectControl, ToggleControl, Icon } from '@wordpress/components';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const {
		test_item_count,
		test_block,
		headingAlign,
		headingAlignTablet,
		headingAlignMobile,
		companyColor,
		descColor,
		authorColor,
		nameFontSizeType,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameFontFamily,
		nameFontWeight,
		nameFontStyle,
		nameLineHeightType,
		nameLineHeight,
		nameLineHeightTablet,
		nameLineHeightMobile,
		nameLoadGoogleFonts,
		companyFontSizeType,
		companyFontSize,
		companyFontSizeTablet,
		companyFontSizeMobile,
		companyFontFamily,
		companyFontWeight,
		companyFontStyle,
		companyLineHeightType,
		companyLineHeight,
		companyLineHeightTablet,
		companyLineHeightMobile,
		companyLoadGoogleFonts,
		descFontSizeType,
		descFontSize,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descFontStyle,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descLoadGoogleFonts,
		descSpace,
		descSpaceTablet,
		descSpaceMobile,
		iconimgStyle,
		imagePosition,
		imageAlignment,
		nameSpace,
		nameSpaceTablet,
		nameSpaceMobile,
		imageSize,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		columns,
		tcolumns,
		mcolumns,
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderSizeUnit,
		arrowBorderRadius,
		arrowBorderRadiusUnit,
		autoplay,
		autoplaySpeed,
		arrowColor,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		backgroundType,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundImageColor,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		stack,

		imageWidthType,
		arrowSizeType,
		rowGapType,
		columnGapType,
		descSpaceType,
		nameSpaceType,
		borderHoverColor,
		overlayType,
		backgroundAttachment,
		gradientValue,
		descTransform,
		descDecoration,
		nameTransform,
		nameDecoration,
		companyTransform,
		companyDecoration,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTopTablet,
		paddingRightTablet,
		paddingBottomTablet,
		paddingLeftTablet,
		paddingTopMobile,
		paddingRightMobile,
		paddingBottomMobile,
		paddingLeftMobile,
		imgspacingLink,
		spacingLink,
		imgpaddingTop,
		imgpaddingRight,
		imgpaddingBottom,
		imgpaddingLeft,
		imgpaddingTopTablet,
		imgpaddingRightTablet,
		imgpaddingBottomTablet,
		imgpaddingLeftTablet,
		imgpaddingTopMobile,
		imgpaddingRightMobile,
		imgpaddingBottomMobile,
		imgpaddingLeftMobile,
		imgpaddingUnit,
		imgmobilePaddingUnit,
		imgtabletPaddingUnit,
		equalHeight
	} = attributes;

	let loadNameGoogleFonts;
	let loadCompanyGoogleFonts;
	let loadDescGoogleFonts;

	if ( nameLoadGoogleFonts === true ) {
		const nameconfig = {
			google: {
				families: [
					nameFontFamily +
						( nameFontWeight ? ':' + nameFontWeight : '' ),
				],
			},
		};

		loadNameGoogleFonts = (
			<WebfontLoader config={ nameconfig }></WebfontLoader>
		);
	}

	if ( companyLoadGoogleFonts === true ) {
		const companyconfig = {
			google: {
				families: [
					companyFontFamily +
						( companyFontWeight ? ':' + companyFontWeight : '' ),
				],
			},
		};

		loadCompanyGoogleFonts = (
			<WebfontLoader config={ companyconfig }></WebfontLoader>
		);
	}

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ descconfig }></WebfontLoader>
		);
	}

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectTestImage = ( media, index ) => {
		let imgUrl = null;
		if ( ! media || ! media.url ) {
			imgUrl = null;
		} else {
			imgUrl = media;
		}

		if ( ! media.type || 'image' !== media.type ) {
			imgUrl = null;
		}
		const newItems = test_block.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item.image = imgUrl;
			}
			return item;
		} );

		setAttributes( {
			test_block: newItems,
		} );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveTestImage = ( index ) => {
		const newItems = test_block.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item.image = null;
			}
			return item;
		} );

		setAttributes( {
			test_block: newItems,
		} );
	};

	const getImageData = () => {
		const getImages = [];
		for ( let i = 0; i < test_item_count; i++ ) {
			getImages.push( tmControls( i ) );
		}
		return getImages;
	};

	const togglePauseOnHover = () => {
		setAttributes( { pauseOnHover: ! pauseOnHover } );
	};

	const toggleInfiniteLoop = () => {
		setAttributes( { infiniteLoop: ! infiniteLoop } );
	};

	const toggleAutoplay = () => {
		setAttributes( { autoplay: ! autoplay } );
	};

	// Image sizes.
	const imageSizeOptions = [
		{
			value: 'thumbnail',
			label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'medium',
			label: __( 'Medium', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'full',
			label: __( 'Large', 'ultimate-addons-for-gutenberg' ),
		},
	];

	const carousalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Carousel', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Pause On Hover',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ pauseOnHover }
					onChange={ togglePauseOnHover }
				/>
				<ToggleControl
					label={ __( 'Autoplay' ) }
					checked={ autoplay }
					onChange={ toggleAutoplay }
				/>
				{ autoplay === true && (
					<Range
						label={ __(
							'Autoplay Speed (ms)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ autoplaySpeed }
						onChange={ ( value ) =>
							setAttributes( { autoplaySpeed: value } )
						}
						min={ 100 }
						max={ 10000 }
						displayUnit={ false }
					/>
				) }
				<ToggleControl
					label={ __(
						'Infinite Loop',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ infiniteLoop }
					onChange={ toggleInfiniteLoop }
				/>
				<Range
					label={ __(
						'Transition Speed (ms)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ transitionSpeed }
					onChange={ ( value ) =>
						setAttributes( { transitionSpeed: value } )
					}
					min={ 100 }
					max={ 5000 }
					displayUnit={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Show Arrows & Dots',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: arrowDots,
						label: 'arrowDots',
					} }
					options={ [
						{
							value: 'arrows',
							label: __(
								'Arrows',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dots',
							label: __(
								'Dots',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'arrows_dots',
							label: __(
								'Both',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	// Margin Settings.
	const carouselStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Arrow & Dots', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ 'dots' !== arrowDots && (
					<>
						<Range
							label={ __(
								'Arrow Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ arrowSize }
							onChange={ ( value ) =>
								setAttributes( { arrowSize: value } )
							}
							min={ 0 }
							max={ 50 }
							unit={ {
								value: arrowSizeType,
								label: 'arrowSizeType',
							} }
						/>
						<Range
							label={ __(
								'Arrow Border Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ arrowBorderSize }
							onChange={ ( value ) =>
								setAttributes( { arrowBorderSize: value } )
							}
							min={ 0 }
							max={ 50 }
							unit={ {
								value: arrowBorderSizeUnit,
								label:
									'arrowBorderSizeUnit',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
							] }
						/>
						<Range
							label={ __(
								'Arrow Border Radius',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ arrowBorderRadius }
							onChange={ ( value ) =>
								setAttributes( { arrowBorderRadius: value } )
							}
							min={ 0 }
							max={ 50 }
							unit={ {
								value: arrowBorderRadiusUnit,
								label:
									'arrowBorderRadiusUnit',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
							] }
						/>
					</>
				) }
				<ResponsiveSlider
					label={ __(
						'Gap Between Content & Dots',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: rowGap,
							label: 'rowGap',
						},
						tablet: {
							value: rowGapTablet,
							label: 'rowGapTablet',
						},
						mobile: {
							value: rowGapMobile,
							label: 'rowGapMobile',
						},
					} }
					min={ 1 }
					max={ 50 }
					unit={ {
						value: rowGapType,
						label: 'rowGapType',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ arrowColor ? arrowColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							arrowColor: value,
						} )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const borderSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					disabledBorderTitle= {true}
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __(
							'Style',
							'ultimate-addons-for-gutenberg'
						),
					} }
					borderWidth={ {
						value: borderWidth,
						label: 'borderWidth',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: borderRadius,
						label: 'borderRadius',
						title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					} }
					borderColor={ {
						value: borderColor,
						label: 'borderColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: borderHoverColor,
						label: 'borderHoverColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const backgroundStyle = () => {

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					overlayType={ {
						value: overlayType,
						label: 'overlayType',
					} }
					backgroundSize={ {
						value: backgroundSize,
						label: 'backgroundSize',
					} }
					backgroundRepeat={ {
						value: backgroundRepeat,
						label: 'backgroundRepeat',
					} }
					backgroundAttachment={ {
						value: backgroundAttachment,
						label: 'backgroundAttachment',
					} }
					backgroundPosition={ {
						value: backgroundPosition,
						label: 'backgroundPosition',
					} }
					backgroundImage={ {
						value: backgroundImage,
						label: 'backgroundImage',
					} }
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					backgroundVideoType={ {
						value: false,
					} }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const nameStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Name', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ authorColor ? authorColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							authorColor: value,
						} )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: nameLoadGoogleFonts,
						label: 'nameLoadGoogleFonts',
					} }
					fontFamily={ {
						value: nameFontFamily,
						label: 'nameFontFamily',
					} }
					fontWeight={ {
						value: nameFontWeight,
						label: 'nameFontWeight',
					} }
					fontStyle={ {
						value: nameFontStyle,
						label: 'nameFontStyle',
					} }
					fontSizeType={ {
						value: nameFontSizeType,
						label: 'nameFontSizeType',
					} }
					fontSize={ {
						value: nameFontSize,
						label: 'nameFontSize',
					} }
					fontSizeMobile={ {
						value: nameFontSizeMobile,
						label: 'nameFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: nameFontSizeTablet,
						label: 'nameFontSizeTablet',
					} }
					lineHeightType={ {
						value: nameLineHeightType,
						label: 'nameLineHeightType',
					} }
					lineHeight={ {
						value: nameLineHeight,
						label: 'nameLineHeight',
					} }
					lineHeightMobile={ {
						value: nameLineHeightMobile,
						label: 'nameLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: nameLineHeightTablet,
						label: 'nameLineHeightTablet',
					} }
					transform={ {
						value: nameTransform,
						label: 'nameTransform',
					} }
					decoration={ {
						value: nameDecoration,
						label: 'nameDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Margin',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: nameSpace,
							label: 'nameSpace',
						},
						tablet: {
							value: nameSpaceTablet,
							label: 'nameSpaceTablet',
						},
						mobile: {
							value: nameSpaceMobile,
							label: 'nameSpaceMobile',
						},
					} }
					min={ 1 }
					max={ 50 }
					unit={ {
						value: nameSpaceType,
						label: 'nameSpaceType',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const contentStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ descColor ? descColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							descColor: value,
						} )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: descLoadGoogleFonts,
						label: 'descLoadGoogleFonts',
					} }
					fontFamily={ {
						value: descFontFamily,
						label: 'descFontFamily',
					} }
					fontWeight={ {
						value: descFontWeight,
						label: 'descFontWeight',
					} }
					fontStyle={ {
						value: descFontStyle,
						label: 'descFontStyle',
					} }
					fontSizeType={ {
						value: descFontSizeType,
						label: 'descFontSizeType',
					} }
					fontSize={ {
						value: descFontSize,
						label: 'descFontSize',
					} }
					fontSizeMobile={ {
						value: descFontSizeMobile,
						label: 'descFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: descFontSizeTablet,
						label: 'descFontSizeTablet',
					} }
					lineHeightType={ {
						value: descLineHeightType,
						label: 'descLineHeightType',
					} }
					lineHeight={ {
						value: descLineHeight,
						label: 'descLineHeight',
					} }
					lineHeightMobile={ {
						value: descLineHeightMobile,
						label: 'descLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: descLineHeightTablet,
						label: 'descLineHeightTablet',
					} }
					transform={ {
						value: descTransform,
						label: 'descTransform',
					} }
					decoration={ {
						value: descDecoration,
						label: 'descDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Margin',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: descSpace,
							label: 'descSpace',
						},
						tablet: {
							value: descSpaceTablet,
							label: 'descSpaceTablet',
						},
						mobile: {
							value: descSpaceMobile,
							label: 'descSpaceMobile',
						},
					} }
					min={ 1 }
					max={ 50 }
					unit={ {
						value: descSpaceType,
						label: 'descSpaceType',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Column Gap',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: columnGap,
							label: 'columnGap',
						},
						tablet: {
							value: columnGapTablet,
							label: 'columnGapTablet',
						},
						mobile: {
							value: columnGapMobile,
							label: 'columnGapMobile',
						},
					} }
					min={ 1 }
					max={ 50 }
					unit={ {
						value: columnGapType,
						label: 'columnGapType',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: paddingTop,
						label: 'paddingTop',
					} }
					valueRight={ {
						value: paddingRight,
						label: 'paddingRight',
					} }
					valueBottom={ {
						value: paddingBottom,
						label: 'paddingBottom',
					} }
					valueLeft={ {
						value: paddingLeft,
						label: 'paddingLeft',
					} }
					valueTopTablet={ {
						value: paddingTopTablet,
						label: 'paddingTopTablet',
					} }
					valueRightTablet={ {
						value: paddingRightTablet,
						label: 'paddingRightTablet',
					} }
					valueBottomTablet={ {
						value: paddingBottomTablet,
						label: 'paddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: paddingLeftTablet,
						label: 'paddingLeftTablet',
					} }
					valueTopMobile={ {
						value: paddingTopMobile,
						label: 'paddingTopMobile',
					} }
					valueRightMobile={ {
						value: paddingRightMobile,
						label: 'paddingRightMobile',
					} }
					valueBottomMobile={ {
						value: paddingBottomMobile,
						label: 'paddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: paddingLeftMobile,
						label: 'paddingLeftMobile',
					} }
					unit={ {
						value: paddingUnit,
						label: 'paddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const companyStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Company', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ companyColor ? companyColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( {
							companyColor: value,
						} )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: companyLoadGoogleFonts,
						label: 'companyLoadGoogleFonts',
					} }
					fontFamily={ {
						value: companyFontFamily,
						label: 'companyFontFamily',
					} }
					fontWeight={ {
						value: companyFontWeight,
						label: 'companyFontWeight',
					} }
					fontStyle={ {
						value: companyFontStyle,
						label: 'companyFontStyle',
					} }
					fontSizeType={ {
						value: companyFontSizeType,
						label: 'companyFontSizeType',
					} }
					fontSize={ {
						value: companyFontSize,
						label: 'companyFontSize',
					} }
					fontSizeMobile={ {
						value: companyFontSizeMobile,
						label: 'companyFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: companyFontSizeTablet,
						label: 'companyFontSizeTablet',
					} }
					lineHeightType={ {
						value: companyLineHeightType,
						label: 'companyLineHeightType',
					} }
					lineHeight={ {
						value: companyLineHeight,
						label: 'companyLineHeight',
					} }
					lineHeightMobile={ {
						value: companyLineHeightMobile,
						label: 'companyLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: companyLineHeightTablet,
						label: 'companyLineHeightTablet',
					} }
					transform={ {
						value: companyTransform,
						label: 'companyTransform',
					} }
					decoration={ {
						value: companyDecoration,
						label: 'companyDecoration',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const imageStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: imgpaddingTop,
						label: 'imgpaddingTop',
					} }
					valueRight={ {
						value: imgpaddingRight,
						label: 'imgpaddingRight',
					} }
					valueBottom={ {
						value: imgpaddingBottom,
						label: 'imgpaddingBottom',
					} }
					valueLeft={ {
						value: imgpaddingLeft,
						label: 'imgpaddingLeft',
					} }
					valueTopTablet={ {
						value: imgpaddingTopTablet,
						label: 'imgpaddingTopTablet',
					} }
					valueRightTablet={ {
						value: imgpaddingRightTablet,
						label: 'imgpaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: imgpaddingBottomTablet,
						label: 'imgpaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: imgpaddingLeftTablet,
						label: 'imgpaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: imgpaddingTopMobile,
						label: 'imgpaddingTopMobile',
					} }
					valueRightMobile={ {
						value: imgpaddingRightMobile,
						label: 'imgpaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: imgpaddingBottomMobile,
						label: 'imgpaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: imgpaddingLeftMobile,
						label: 'imgpaddingLeftMobile',
					} }
					unit={ {
						value: imgpaddingUnit,
						label: 'imgpaddingUnit',
					} }
					mUnit={ {
						value: imgmobilePaddingUnit,
						label: 'imgmobilePaddingUnit',
					} }
					tUnit={ {
						value: imgtabletPaddingUnit,
						label: 'imgtabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: imgspacingLink,
						label: 'imgspacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	// Set testinomial image panel
	const tmControls = ( index ) => {
		let imageVal = null;
		if (
			test_block[ index ] &&
			typeof test_block[ index ] !== 'undefined'
		) {
			imageVal = test_block[ index ].image;
		}
		const labelIndex = index + 1;
		return (
			<UAGImage
				label={ 'Image ' + labelIndex }
				onSelectImage={ ( media ) => onSelectTestImage( media, index ) }
				backgroundImage={ imageVal }
				onRemoveImage={ () => onRemoveTestImage( index ) }
			/>
		);
	};

	let cnt = 0;
	test_block.map( ( item, thisIndex ) => { // eslint-disable-line array-callback-return
		const imageArray = test_block[ thisIndex ];
		if ( imageArray && typeof imageArray !== 'undefined' ) {
			const image = imageArray.image;
			if (
				typeof image !== 'undefined' &&
				image !== null &&
				image !== ''
			) {
				cnt++;
			}
		}
	} );

	// Global Controls.
	const inspectControl = () => {
		return (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						<UAGAdvancedPanelBody
							title={ __( 'General' ) }
							initialOpen={ true }
						>
							<Range
								label={ __(
									'Number of Testimonials',
									'ultimate-addons-for-gutenberg'
								) }
								value={ test_item_count }
								onChange={ ( newCount ) => {
									const cloneTest_block = [ ...test_block ];
									if ( cloneTest_block.length < newCount ) {
										const incAmount = Math.abs(
											newCount - cloneTest_block.length
										);
										for ( let i = 0; i < incAmount; i++ ) {
											cloneTest_block.push( {
												description:
													'I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!',
												name: 'John Doe',
												company:
													'Company' +
													( cloneTest_block.length +
														1 ),
												image: '',
											} );
										}
										setAttributes( {
											test_block: cloneTest_block,
										} );
									} else {
										const incAmount = Math.abs(
											newCount - cloneTest_block.length
										);
										const data_new = cloneTest_block;
										for ( let i = 0; i < incAmount; i++ ) {
											data_new.pop();
										}
										setAttributes( {
											test_block: data_new,
										} );
									}
									setAttributes( {
										test_item_count: newCount,
									} );
								} }
								min={ 0 }
								max={ 50 }
								setAttributes={ setAttributes }
								displayUnit={ false }
							/>
							<ResponsiveSlider
								label={ __(
									'Columns',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: columns,
										label: 'columns',
									},
									tablet: {
										value: tcolumns,
										label: 'tcolumns',
									},
									mobile: {
										value: mcolumns,
										label: 'mcolumns',
									},
								} }
								min={ 1 }
								max={ test_item_count }
								displayUnit={ false }
								setAttributes={ setAttributes }
							/>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __(
									'Alignment',
									'ultimate-addons-for-gutenberg'
								) }
								data={ {
									desktop: {
										value: headingAlign,
										label: 'headingAlign',
									},
									tablet: {
										value: headingAlignTablet,
										label: 'headingAlignTablet',
									},
									mobile: {
										value: headingAlignMobile,
										label: 'headingAlignMobile',
									},
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
								responsive={ true }
							/>
							{ columns > 1 && (
							<ToggleControl
								label={ __(
									'Equal Height',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ equalHeight }
								onChange={ () =>
									setAttributes( { equalHeight: ! equalHeight } )
								}
								help={ __(
									"Note: Above setting will only take effect once you are on the live page, and not while you're editing.",
									'ultimate-addons-for-gutenberg'
								) }
							/>
							) }
						</UAGAdvancedPanelBody>
						<UAGAdvancedPanelBody
							title={ __(
								'Image',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
						>
							{ getImageData() }
							{ cnt > 0 && (
								<>
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __(
											'Position',
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											value: imagePosition,
											label: 'imagePosition',
										} }
										options={ [
											{
												value: 'top',
												label: __(
													'Top',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value: 'bottom',
												label: __(
													'Bottom',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value: 'left',
												label: __(
													'Left',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value: 'right',
												label: __(
													'Right',
													'ultimate-addons-for-gutenberg'
												),
											},
										] }
									/>
									{ ( imagePosition === 'left' ||
										imagePosition === 'right' ) && (
										<>
											<MultiButtonsControl
												setAttributes={ setAttributes }
												label={ __(
													'Vertical ALignment',
													'ultimate-addons-for-gutenberg'
												) }
												data={ {
													value: imageAlignment,
													label: 'imageAlignment',
												} }
												options={ [
													{
														value: 'top',
														label: __(
															'Top',
															'ultimate-addons-for-gutenberg'
														),
													},
													{
														value: 'middle',
														label: __(
															'Middle',
															'ultimate-addons-for-gutenberg'
														),
													},
												] }
											/>
											<MultiButtonsControl
												setAttributes={ setAttributes }
												label={ __(
													'Stack On',
													'ultimate-addons-for-gutenberg'
												) }
												data={ {
													value: stack,
													label: 'stack',
												} }
												options={ [
													{
														value: 'none',
														label: __(
															'None',
															'ultimate-addons-for-gutenberg'
														),
													},
													{
														value: 'tablet',
														label: __(
															'Tablet',
															'ultimate-addons-for-gutenberg'
														),
													},
													{
														value: 'mobile',
														label: __(
															'Mobile',
															'ultimate-addons-for-gutenberg'
														),
													},
												] }
											/>
										</>
									) }
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __(
											'Style',
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											value: iconimgStyle,
											label: 'iconimgStyle',
										} }
										options={ [
											{
												value: 'normal',
												label: __(
													'Normal',
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
												value: 'square',
												label: __(
													'Square',
													'ultimate-addons-for-gutenberg'
												),
											},
										] }
									/>
									<SelectControl
										label={ __(
											'Size',
											'ultimate-addons-for-gutenberg'
										) }
										options={ imageSizeOptions }
										value={ imageSize }
										onChange={ ( value ) =>
											setAttributes( {
												imageSize: value,
											} )
										}
									/>
									<ResponsiveSlider
										label={ __(
											'Width',
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											desktop: {
												value: imageWidth,
												label: 'imageWidth',
											},
											tablet: {
												value: imageWidthTablet,
												label: 'imageWidthTablet',
											},
											mobile: {
												value: imageWidthMobile,
												label: 'imageWidthMobile',
											},
										} }
										min={ 1 }
										max={ 500 }
										unit={ {
											value: imageWidthType,
											label: 'imageWidthType',
										} }
										setAttributes={ setAttributes }
									/>
								</>
							) }
						</UAGAdvancedPanelBody>
						{ carousalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ nameStyle() }
						{ contentStyle() }
						{ companyStyle() }
						{ imageStyle() }
						{ carouselStyle() }
						{ borderSetting() }
						{ backgroundStyle() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ headingAlign }
					onChange={ ( value ) =>
						setAttributes( { headingAlign: value } )
					}
				/>
			</BlockControls>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			{ inspectControl() }
			{ loadNameGoogleFonts }
			{ loadCompanyGoogleFonts }
			{ loadDescGoogleFonts }
		</Suspense>
	);
};
export default React.memo( Settings );
