import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import Range from "../../components/range/Range.js";
import ResponsiveSlider from "../../components/responsive-slider";
import Background from "../../components/background";
import Border from "../../components/border";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import SpacingControl from "../../components/spacing-control";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import UAGImage from "../../components/image";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	BaseControl,
	Button,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const {
		test_item_count,
		test_block,
		headingAlign,
		companyColor,
		descColor,
		authorColor,
		nameFontSizeType,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameFontFamily,
		nameFontWeight,
		nameFontSubset,
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
		companyFontSubset,
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
		descFontSubset,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descLoadGoogleFonts,
		descSpace,
		iconimgStyle,
		imagePosition,
		imageAlignment,
		nameSpace,
		imgHrPadding,
		imgVrPadding,
		imageSize,
		imageWidth,
		columns,
		tcolumns,
		mcolumns,
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		autoplay,
		autoplaySpeed,
		arrowColor,
		rowGap,
		columnGap,
		contentPadding,
		backgroundType,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundImageColor,
		backgroundOpacity,
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
	} = attributes;

	let loadNameGoogleFonts;
	let loadCompanyGoogleFonts;
	let loadDescGoogleFonts;

	if ( nameLoadGoogleFonts == true ) {
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

	if ( companyLoadGoogleFonts == true ) {
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

	if ( descLoadGoogleFonts == true ) {
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

	/*
	 * Event to set Image selectot label.
	 */
	const getImageName = ( image ) => {
		let imageName = __( 'Select Image', 'ultimate-addons-for-gutenberg' );
		if ( image ) {
			if ( image.url == null || image.url == '' ) {
				imageName = __(
					'Select Image',
					'ultimate-addons-for-gutenberg'
				);
			} else {
				imageName = __(
					'Replace Image',
					'ultimate-addons-for-gutenberg'
				);
			}
		}
		return imageName;
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
			<PanelBody
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
				{ autoplay == true && (
					<Range
						label={ __(
							'Autoplay Speed (ms)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={setAttributes}
						value={ autoplaySpeed }
						onChange={ ( value ) =>
							setAttributes( { autoplaySpeed: value } )
						}
						min={ 100 }
						max={ 10000 }
						displayUnit = {false}
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
					setAttributes={setAttributes}
					value={ transitionSpeed }
					onChange={ ( value ) =>
						setAttributes( { transitionSpeed: value } )
					}
					min={ 100 }
					max={ 5000 }
					displayUnit = {false}
				/>
				<SelectControl
					label={ __(
						'Show Arrows & Dots',
						'ultimate-addons-for-gutenberg'
					) }
					value={ arrowDots }
					onChange={ ( value ) =>
						setAttributes( { arrowDots: value } )
					}
					options={ [
						{
							value: 'arrows',
							label: __(
								'Only Arrows',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dots',
							label: __(
								'Only Dots',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'arrows_dots',
							label: __(
								'Both Arrows & Dots',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</PanelBody>
		);
	};

	// Margin Settings.
	const carouselStyle = () => {
		return (
			<PanelBody
				title={ __( 'Arrow & Dots', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ 'dots' != arrowDots && (
					<>
						<Range
							label={ __(
								'Arrow Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={setAttributes}
							value={ arrowSize }
							onChange={ ( value ) =>
								setAttributes( { arrowSize: value } )
							}
							min={ 0 }
							max={ 50 }
							unit={{
								value: arrowSizeType,
								label: "arrowSizeType",
							}}
						/>
						<Range
							label={ __(
								'Arrow Border Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={setAttributes}
							value={ arrowBorderSize }
							onChange={ ( value ) =>
								setAttributes( { arrowBorderSize: value } )
							}
							min={ 0 }
							max={ 50 }
							displayUnit= {false}
						/>
						<Range
							label={ __(
								'Arrow Border Radius',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={setAttributes}
							value={ arrowBorderRadius }
							onChange={ ( value ) =>
								setAttributes( { arrowBorderRadius: value } )
							}
							min={ 0 }
							max={ 50 }
							displayUnit = {false}
						/>
					</>
				) }
				<Range
					label={ __(
						'Gap Between Content & Dots',
						'ultimate-addons-for-gutenberg'
					) }
					value={ rowGap }
					setAttributes={setAttributes}
					onChange={ ( value ) => setAttributes( { rowGap: value } ) }
					min={ 0 }
					max={ 50 }
					unit={{
						value: rowGapType,
						label: "rowGapType",
					}}
				/>
				<AdvancedPopColorControl
					label={__('Color', "ultimate-addons-for-gutenberg")}
					colorValue={arrowColor ? arrowColor : ""}
					onColorChange={(value) =>
						setAttributes({
							arrowColor: value,
						})
					}
				/>
			</PanelBody>
		);
	};
	const borderSetting = () => {
		return <PanelBody
					title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: "borderStyle",
						title: __("Border Style", "ultimate-addons-for-gutenberg"),
					}}
					borderWidth={{
						value: borderWidth,
						label: "borderWidth",
						title: __("Width", "ultimate-addons-for-gutenberg"),
					}}
					borderRadius={{
						value: borderRadius,
						label: "borderRadius",
						title: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: borderColor,
						label: "borderColor",
						title: __("Color", "ultimate-addons-for-gutenberg"),
					}}
					borderHoverColor={{
						value: borderHoverColor,
						label: "borderHoverColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
				</PanelBody>
	}
	const backgroundStyle = () => {
		return <PanelBody
					title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
				<Background
					setAttributes={setAttributes}
					backgroundGradient={{
						value: gradientValue,
						label: "gradientValue",
					}}
					backgroundImageColor={{
						value: backgroundImageColor,
						label: "backgroundImageColor",
					}}
					overlayType={{
						value: overlayType,
						label: "overlayType",
					}}
					backgroundSize={{
						value: backgroundSize,
						label: "backgroundSize",
					}}
					backgroundRepeat={{
						value: backgroundRepeat,
						label: "backgroundRepeat",
					}}
					backgroundAttachment={{
						value: backgroundAttachment,
						label: "backgroundAttachment",
					}}
					backgroundPosition={{
						value: backgroundPosition,
						label: "backgroundPosition",
					}}
					backgroundImage={{
						value: backgroundImage,
						label: "backgroundImage",
					}}
					backgroundColor={{
						value: backgroundColor,
						label: "backgroundColor",
					}}
					backgroundType={{
						value: backgroundType,
						label: "backgroundType",
					}}
					backgroundOpacity={{
						value: backgroundOpacity,
						label: "backgroundOpacity",
					}}
					backgroundVideoType={{
						value: false,
					}}
					{...props}
				/>
				</PanelBody>
	}
	const nameStyle = () => {
		return <PanelBody
				title={ __(
					'Name',
					'ultimate-addons-for-gutenberg'
				) } initialOpen={false}
				>
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
					fontSubset={ {
						value: nameFontSubset,
						label: 'nameFontSubset',
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
					transform={{
						value: nameTransform,
						label: "nameTransform",
					}}
					decoration={{
						value: nameDecoration,
						label: "nameDecoration",
					}}
				/>
				<AdvancedPopColorControl
						label={__("Color", "ultimate-addons-for-gutenberg")}
						colorValue={authorColor ? authorColor : ""}
						onColorChange={(value) =>
							setAttributes({
								authorColor: value,
							})
						}
					/>
				<Range
					label={ __(
						'Bottom Margin',
						'ultimate-addons-for-gutenberg'
					) }
					value={ nameSpace }
					onChange={ ( value ) =>
						setAttributes( { nameSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={{
						value: nameSpaceType,
						label: "nameSpaceType",
					}}
					setAttributes={setAttributes}
				/>
				</PanelBody>
	};
	const contentStyle = () => {
		return <PanelBody
				title={ __(
					'Content',
					'ultimate-addons-for-gutenberg'
				) } initialOpen={false}>
				<AdvancedPopColorControl
					label={__("Color", "ultimate-addons-for-gutenberg")}
					colorValue={descColor ? descColor : ""}
					onColorChange={(value) =>
						setAttributes({
							descColor: value,
						})
					}
				/>
				<Range
					label={ __(
						'Bottom Margin',
						'ultimate-addons-for-gutenberg'
					) }
					value={ descSpace }
					onChange={ ( value ) =>
						setAttributes( { descSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={{
						value: descSpaceType,
						label: "descSpaceType",
					}}
					setAttributes={setAttributes}
				/>
				<Range
					label={ __( 'Column Gap', 'ultimate-addons-for-gutenberg' ) }
					value={ columnGap }
					onChange={ ( value ) =>
						setAttributes( { columnGap: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={{
						value: columnGapType,
						label: "columnGapType",
					}}
					setAttributes={setAttributes}
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
					fontSubset={ {
						value: descFontSubset,
						label: 'descFontSubset',
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
					transform={{
						value: descTransform,
						label: "descTransform",
					}}
					decoration={{
						value: descDecoration,
						label: "descDecoration",
					}}
				/>
				<SpacingControl
					{...props}
					label={__(
						"Padding",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: paddingTop,
						label: "paddingTop",
					}}
					valueRight={{
						value: paddingRight,
						label: "paddingRight",
					}}
					valueBottom={{
						value: paddingBottom,
						label: "paddingBottom",
					}}
					valueLeft={{
						value: paddingLeft,
						label: "paddingLeft",
					}}
					valueTopTablet={{
						value: paddingTopTablet,
						label: "paddingTopTablet",
					}}
					valueRightTablet={{
						value: paddingRightTablet,
						label: "paddingRightTablet",
					}}
					valueBottomTablet={{
						value: paddingBottomTablet,
						label: "paddingBottomTablet",
					}}
					valueLeftTablet={{
						value: paddingLeftTablet,
						label: "paddingLeftTablet",
					}}
					valueTopMobile={{
						value: paddingTopMobile,
						label: "paddingTopMobile",
					}}
					valueRightMobile={{
						value: paddingRightMobile,
						label: "paddingRightMobile",
					}}
					valueBottomMobile={{
						value: paddingBottomMobile,
						label: "paddingBottomMobile",
					}}
					valueLeftMobile={{
						value: paddingLeftMobile,
						label: "paddingLeftMobile",
					}}
					unit={{
						value: paddingUnit,
						label: "paddingUnit",
					}}
					mUnit={{
						value: mobilePaddingUnit,
						label: "mobilePaddingUnit",
					}}
					tUnit={{
						value: tabletPaddingUnit,
						label: "tabletPaddingUnit",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: spacingLink,
						label: "spacingLink",
					}}
				/>
				
				</PanelBody>
	};
	const companyStyle = () => {
		return <PanelBody
				title={ __(
					'Company',
					'ultimate-addons-for-gutenberg'
				) } initialOpen={false}>
				<AdvancedPopColorControl
						label={__("Company Color", "ultimate-addons-for-gutenberg")}
						colorValue={companyColor ? companyColor : ""}
						onColorChange={(value) =>
							setAttributes({
								companyColor: value,
							})
						}
					/>
				<TypographyControl
						label={ __(
							'Company Typography',
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
						fontSubset={ {
							value: companyFontSubset,
							label: 'companyFontSubset',
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
						transform={{
							value: companyTransform,
							label: "companyTransform",
						}}
						decoration={{
							value: companyDecoration,
							label: "companyDecoration",
						}}
					/>
				
				</PanelBody>
	}
	const imageStyle = () => {
		return <PanelBody
				title={ __(
					'Image',
					'ultimate-addons-for-gutenberg'
				) } initialOpen={false}>
					<SpacingControl
						{...props}
						label={__(
							"Image Padding",
							"ultimate-addons-for-gutenberg"
						)}
						valueTop={{
							value: imgpaddingTop,
							label: "imgpaddingTop",
						}}
						valueRight={{
							value: imgpaddingRight,
							label: "imgpaddingRight",
						}}
						valueBottom={{
							value: imgpaddingBottom,
							label: "imgpaddingBottom",
						}}
						valueLeft={{
							value: imgpaddingLeft,
							label: "imgpaddingLeft",
						}}
						valueTopTablet={{
							value: imgpaddingTopTablet,
							label: "imgpaddingTopTablet",
						}}
						valueRightTablet={{
							value: imgpaddingRightTablet,
							label: "imgpaddingRightTablet",
						}}
						valueBottomTablet={{
							value: imgpaddingBottomTablet,
							label: "imgpaddingBottomTablet",
						}}
						valueLeftTablet={{
							value: imgpaddingLeftTablet,
							label: "imgpaddingLeftTablet",
						}}
						valueTopMobile={{
							value: imgpaddingTopMobile,
							label: "imgpaddingTopMobile",
						}}
						valueRightMobile={{
							value: imgpaddingRightMobile,
							label: "imgpaddingRightMobile",
						}}
						valueBottomMobile={{
							value: imgpaddingBottomMobile,
							label: "imgpaddingBottomMobile",
						}}
						valueLeftMobile={{
							value: imgpaddingLeftMobile,
							label: "imgpaddingLeftMobile",
						}}
						unit={{
							value: imgpaddingUnit,
							label: "imgpaddingUnit",
						}}
						mUnit={{
							value: imgmobilePaddingUnit,
							label: "imgmobilePaddingUnit",
						}}
						tUnit={{
							value: imgtabletPaddingUnit,
							label: "imgtabletPaddingUnit",
						}}
						deviceType={deviceType}
						attributes={attributes}
						setAttributes={setAttributes}
						link={{
							value: imgspacingLink,
							label: "imgspacingLink",
						}}
					/>	
				</PanelBody>
	}
	// Set testinomial image panel
	const tmControls = ( index ) => {
		let imageVal = null;
		if (
			test_block[ index ] &&
			typeof test_block[ index ] !== 'undefined'
		) {
			imageVal = test_block[ index ].image;
		}
		return (	
					<UAGImage
						label = {'Image'+index}
						onSelectImage={() => onRemoveTestImage(imageVal, index )}
						backgroundImage={imageVal}
						onRemoveImage={ imageVal && (
							test_block[ index ].image.url !== null &&
							test_block[ index ].image.url !== '' && (
								onRemoveTestImage( index )
							))}
					/>
				)
	};

	let cnt = 0;
	test_block.map( ( item, thisIndex ) => {
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
					<InspectorTab {...UAGTabs.general}>
					<PanelBody title={ __( 'General' ) } initialOpen={ true }>
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
												( cloneTest_block.length + 1 ),
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
									setAttributes( { test_block: data_new } );
								}
								setAttributes( { test_item_count: newCount } );
							} }
							min={ 0 }
							max={ 50 }
							setAttributes={setAttributes}
							displayUnit = {false}
						/>
						<ResponsiveSlider
							label={__(
								"Columns",
								"ultimate-addons-for-gutenberg"
							)}
							data={{
								desktop: {
									value: columns,
									label: "columns",
								},
								tablet: {
									value: tcolumns,
									label: "tcolumns",
								},
								mobile: {
									value: mcolumns,
									label: "mcolumns",
								},
							}}
							min={1}
							max={test_item_count}
							displayUnit= {false}
							setAttributes={setAttributes}
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ false }
					>
						{ getImageData() }
						{ cnt > 0 && (
							<>
								<SelectControl
									label={ __( 'Image Position' ) }
									value={ imagePosition }
									onChange={ ( value ) =>
										setAttributes( { imagePosition: value } )
									}
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
								{ ( imagePosition == 'left' ||
									imagePosition == 'right' ) && (
									<>
										<SelectControl
											label={ __(
												'Vertical ALignment',
												'ultimate-addons-for-gutenberg'
											) }
											value={ imageAlignment }
											onChange={ ( value ) =>
												setAttributes( {
													imageAlignment: value,
												} )
											}
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
										<SelectControl
											label={ __(
												'Stack on',
												'ultimate-addons-for-gutenberg'
											) }
											value={ stack }
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
											help={ __(
												'Note: Choose on what breakpoint the Info Box will stack.',
												'ultimate-addons-for-gutenberg'
											) }
											onChange={ ( value ) =>
												setAttributes( { stack: value } )
											}
										/>
									</>
								) }
								<SelectControl
									label={ __(
										'Image Style',
										'ultimate-addons-for-gutenberg'
									) }
									value={ iconimgStyle }
									onChange={ ( value ) =>
										setAttributes( { iconimgStyle: value } )
									}
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
										'Image Size',
										'ultimate-addons-for-gutenberg'
									) }
									options={ imageSizeOptions }
									value={ imageSize }
									onChange={ ( value ) =>
										setAttributes( { imageSize: value } )
									}
								/>
								<Range
									label={ __(
										'Width',
										'ultimate-addons-for-gutenberg'
									) }
									setAttributes={setAttributes}
									value={ imageWidth }
									onChange={ ( value ) =>
										setAttributes( { imageWidth: value } )
									}
									min={ 0 }
									max={ 500 }
									unit={{
										value: imageWidthType,
										label: "imageWidthType",
									}}
								/>
							</>
						) }
					</PanelBody>
					{ carousalSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
						{ nameStyle() }
						{ contentStyle() }
						{ companyStyle() }
						{ imageStyle() }
						{ carouselStyle() }
						{ borderSetting() }
						{ backgroundStyle() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
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
