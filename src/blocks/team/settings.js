import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import Range from "../../components/range/Range.js";
import SpacingControl from "../../components/spacing-control";

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	Button,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { setAttributes, attributes, deviceType } = props;

	const {
		align,
		tag,
		titleColor,
		prefixColor,
		descColor,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightMobile,
		titleLineHeightTablet,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSubset,
		prefixFontSizeType,
		prefixFontSize,
		prefixFontSizeMobile,
		prefixFontSizeTablet,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightMobile,
		prefixLineHeightTablet,
		descFontFamily,
		descFontWeight,
		descFontSubset,
		descFontSizeType,
		descFontSize,
		descFontSizeMobile,
		descFontSizeTablet,
		descLineHeightType,
		descLineHeight,
		descLineHeightMobile,
		descLineHeightTablet,
		socialFontSize,
		socialFontSizeType,
		socialFontSizeMobile,
		socialFontSizeTablet,
		titleLoadGoogleFonts,
		prefixLoadGoogleFonts,
		descLoadGoogleFonts,
		image,
		imgStyle,
		imgAlign,
		imgSize,
		imgWidth,
		imgPosition,
		titleSpace,
		descSpace,
		prefixSpace,
		twitterIcon,
		fbIcon,
		linkedinIcon,
		pinIcon,
		twitterLink,
		fbLink,
		linkedinLink,
		pinLink,
		socialColor,
		socialHoverColor,
		socialSpace,
		socialTarget,
		socialEnable,
		stack,
		imageLeftMargin,
		imageRightMargin,
		imageTopMargin,
		imageBottomMargin,
		imageMarginTopTablet,
		imageMarginRightTablet,
		imageMarginBottomTablet,
		imageMarginLeftTablet,
		imageMarginTopMobile,
		imageMarginRightMobile,
		imageMarginBottomMobile,
		imageMarginLeftMobile,
		imageMarginUnit,
		spacingLink,
	} = attributes;

	if ( 'above' == imgPosition ) {
		if ( 'center' == align ) {
			setAttributes({ imageLeftMargin: '' });
			setAttributes({ imageRightMargin: '' });
			setAttributes({ imageMarginLeftMobile: '' });
			setAttributes({ imageMarginRightMobile: '' });
			setAttributes({ imageMarginLeftTablet: '' });
			setAttributes({ imageMarginRightTablet: '' });
		} else if ( 'left' == align ) {
			setAttributes({ imageRightMargin: '' });
			setAttributes({ imageMarginRightMobile: '' });
			setAttributes({ imageMarginRightTablet: '' });
		} else if ( 'right' == align ) {
			setAttributes({ imageLeftMargin: '' });
			setAttributes({ imageMarginLeftMobile: '' });
			setAttributes({ imageMarginLeftTablet: '' });
		}
	}

	const getImageSize = ( sizes ) => {
		const sizeArr = [];
		for ( const item in sizes ) {
			sizeArr.push( { value: item, label: item } );
		}
		return sizeArr;
	};

	if ( image && image.sizes ) {
		imageSizeOptions = getImageSize( image.sizes );
	}

	let loadTitleGoogleFonts;
	let loadPrefixGoogleFonts;
	let loadDescGoogleFonts;

	if ( titleLoadGoogleFonts == true ) {
		const tconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ tconfig }></WebfontLoader>
		);
	}

	if ( prefixLoadGoogleFonts == true ) {
		const pconfig = {
			google: {
				families: [
					prefixFontFamily +
						( prefixFontWeight ? ':' + prefixFontWeight : '' ),
				],
			},
		};

		loadPrefixGoogleFonts = (
			<WebfontLoader config={ pconfig }></WebfontLoader>
		);
	}

	if ( descLoadGoogleFonts == true ) {
		const dconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ dconfig }></WebfontLoader>
		);
	}

	const getBlockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => setAttributes( { align: value } ) }
				/>
			</BlockControls>
		);
	};

	const getImagePanelBody = () => {
		return (
			<PanelBody title={ __( 'Image' ) }>
				<div className="uagb-bg-image">
				<MediaUpload
					title={__(
						"Select Background Image",
						"ultimate-addons-for-gutenberg"
					)}
					onSelect={ ( value ) =>
						setAttributes( { image: value } )
					}
					allowedTypes={["image"]}
					value={image}
					render={ ( { open } ) => (
						<Button isSecondary onClick={ open }>
							{ ! image
								? __(
										'Select Image',
										'ultimate-addons-for-gutenberg'
									)
								: __(
										'Replace image',
										'ultimate-addons-for-gutenberg'
									) }
						</Button>
					) }
				/>
				{ image && (
					<Button
						className="uagb-rm-btn"
						onClick={ () =>
							setAttributes( { image: null } )
						}
						isLink
						isDestructive
					>
						{ __(
							'Remove Image',
							'ultimate-addons-for-gutenberg'
						) }
					</Button>
				) }
				</div>
				{ image && (
					<SelectControl
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgPosition }
						onChange={ ( value ) =>
							setAttributes( { imgPosition: value } )
						}
						options={ [
							{
								value: 'above',
								label: __(
									'Above',
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
				) }
				{ imgPosition != 'above' && image && (
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
							'Note: Choose on what breakpoint the Team will stack.'
						) }
						onChange={ ( value ) =>
							setAttributes( { stack: value } )
						}
					/>
				) }
				{ image && (
					<SelectControl
						label={ __(
							'Image Style',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgStyle }
						onChange={ ( value ) =>
							setAttributes( { imgStyle: value } )
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
				) }

				{ imgPosition && imgPosition !== 'above' && image && (
					<SelectControl
						label={ __(
							'Vertical Alignment',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgAlign }
						onChange={ ( value ) =>
							setAttributes( { imgAlign: value } )
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
				) }
				{ image && (
					<>
						<SelectControl
							label={ __(
								'Size',
								'ultimate-addons-for-gutenberg'
							) }
							options={ imageSizeOptions }
							value={ imgSize }
							onChange={ ( value ) =>
								setAttributes( { imgSize: value } )
							}
						/>
						<Range
							label={__(
								"Width",
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={imgWidth}
							onChange={(value) =>
								setAttributes({
									imgWidth: value,
								})
							}
							min={0}
							max={500}
							displayUnit={false}
						/>
					</>
				) }
			</PanelBody>
		);
	};

	const getSocialLinksPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Social Links', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Enable Social Links',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ socialEnable }
					onChange={ () =>
						setAttributes( { socialEnable: ! socialEnable } )
					}
				/>
				{ socialEnable && (
					<>
						<ToggleControl
							label={ __(
								'Open Links in New Window',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ socialTarget }
							onChange={ () =>
								setAttributes( {
									socialTarget: ! socialTarget,
								} )
							}
						/>
						<PanelBody
							title={ __(
								'Twitter',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
						>
							<p className="components-base-control__label">
								{ __(
									'Icon',
									'ultimate-addons-for-gutenberg'
								) }
							</p>
							<FontIconPicker
								icons={ wp.UAGBSvgIcons }
								renderFunc={ renderSVG }
								theme="default"
								value={ twitterIcon }
								onChange={ ( value ) =>
									setAttributes( { twitterIcon: value } )
								}
								isMulti={ false }
								noSelectedPlaceholder={ __(
									'Select Icon',
									'ultimate-addons-for-gutenberg'
								) }
							/>
							<p className="components-base-control__label">
								{ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<TextControl
								value={ twitterLink }
								onChange={ ( value ) =>
									setAttributes( { twitterLink: value } )
								}
								placeholder={ __(
									'Enter Twitter URL',
									'ultimate-addons-for-gutenberg'
								) }
							/>
						</PanelBody>
						<PanelBody
							title={ __(
								'Facebook',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
						>
							<p className="components-base-control__label">
								{ __(
									'Icon',
									'ultimate-addons-for-gutenberg'
								) }
							</p>
							<FontIconPicker
								icons={ wp.UAGBSvgIcons }
								renderFunc={ renderSVG }
								theme="default"
								value={ fbIcon }
								onChange={ ( value ) =>
									setAttributes( { fbIcon: value } )
								}
								isMulti={ false }
								noSelectedPlaceholder={ __(
									'Select Icon',
									'ultimate-addons-for-gutenberg'
								) }
							/>
							<p className="components-base-control__label">
								{ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<TextControl
								value={ fbLink }
								onChange={ ( value ) =>
									setAttributes( { fbLink: value } )
								}
								placeholder={ __(
									'Enter Facebook URL',
									'ultimate-addons-for-gutenberg'
								) }
							/>
						</PanelBody>
						<PanelBody
							title={ __(
								'LinkedIn',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
						>
							<p className="components-base-control__label">
								{ __(
									'Icon',
									'ultimate-addons-for-gutenberg'
								) }
							</p>
							<FontIconPicker
								icons={ wp.UAGBSvgIcons }
								renderFunc={ renderSVG }
								noSelectedPlaceholder={ __(
									'Select Icon',
									'ultimate-addons-for-gutenberg'
								) }
								theme="default"
								value={ linkedinIcon }
								onChange={ ( value ) =>
									setAttributes( { linkedinIcon: value } )
								}
								isMulti={ false }
							/>
							<p className="components-base-control__label">
								{ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<TextControl
								value={ linkedinLink }
								onChange={ ( value ) =>
									setAttributes( { linkedinLink: value } )
								}
								placeholder={ __(
									'Enter LinkedIn URL',
									'ultimate-addons-for-gutenberg'
								) }
							/>
						</PanelBody>
						<PanelBody
							title={ __(
								'Pinterest',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
						>
							<p className="components-base-control__label">
								{ __(
									'Icon',
									'ultimate-addons-for-gutenberg'
								) }
							</p>
							<FontIconPicker
								icons={ wp.UAGBSvgIcons }
								renderFunc={ renderSVG }
								noSelectedPlaceholder={ __(
									'Select Icon',
									'ultimate-addons-for-gutenberg'
								) }
								theme="default"
								value={ pinIcon }
								onChange={ ( value ) =>
									setAttributes( { pinIcon: value } )
								}
								isMulti={ false }
							/>
							<p className="components-base-control__label">
								{ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<TextControl
								value={ pinLink }
								onChange={ ( value ) =>
									setAttributes( { pinLink: value } )
								}
								placeholder={ __(
									'Enter Pinterest URL',
									'ultimate-addons-for-gutenberg'
								) }
							/>
						</PanelBody>
					</>
				) }
			</PanelBody>
		);
	};

	const getTitlePanelColorSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Title',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>	
				<SelectControl
					label={ __( 'Title Tag', 'ultimate-addons-for-gutenberg' ) }
					value={ tag }
					onChange={ ( value ) => setAttributes( { tag: value } ) }
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
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={titleColor ? titleColor : ""}
					onColorChange={(value) =>
						setAttributes({ titleColor: value })
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
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					} }
					fontFamily={ {
						value: titleFontFamily,
						label: 'titleFontFamily',
					} }
					fontWeight={ {
						value: titleFontWeight,
						label: 'titleFontWeight',
					} }
					fontSubset={ {
						value: titleFontSubset,
						label: 'titleFontSubset',
					} }
					fontSizeType={ {
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					} }
					fontSize={ {
						value: titleFontSize,
						label: 'titleFontSize',
					} }
					fontSizeMobile={ {
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					} }
					lineHeightType={ {
						value: titleLineHeightType,
						label: 'titleLineHeightType',
					} }
					lineHeight={ {
						value: titleLineHeight,
						label: 'titleLineHeight',
					} }
					lineHeightMobile={ {
						value: titleLineHeightMobile,
						label: 'titleLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: titleLineHeightTablet,
						label: 'titleLineHeightTablet',
					} }
				/>
				<Range
					label={__(
						"Bottom Spacing",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={titleSpace}
					onChange={(value) =>
						setAttributes({
							titleSpace: value,
						})
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
		</PanelBody>
		);
	};

	const getPrefixPanelColorSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Prefix',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={prefixColor ? prefixColor : ""}
					onColorChange={(value) =>
						setAttributes({ prefixColor: value })
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
						value: prefixLoadGoogleFonts,
						label: 'prefixLoadGoogleFonts',
					} }
					fontFamily={ {
						value: prefixFontFamily,
						label: 'prefixFontFamily',
					} }
					fontWeight={ {
						value: prefixFontWeight,
						label: 'prefixFontWeight',
					} }
					fontSubset={ {
						value: prefixFontSubset,
						label: 'prefixFontSubset',
					} }
					fontSizeType={ {
						value: prefixFontSizeType,
						label: 'prefixFontSizeType',
					} }
					fontSize={ {
						value: prefixFontSize,
						label: 'prefixFontSize',
					} }
					fontSizeMobile={ {
						value: prefixFontSizeMobile,
						label: 'prefixFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: prefixFontSizeTablet,
						label: 'prefixFontSizeTablet',
					} }
					lineHeightType={ {
						value: prefixLineHeightType,
						label: 'prefixLineHeightType',
					} }
					lineHeight={ {
						value: prefixLineHeight,
						label: 'prefixLineHeight',
					} }
					lineHeightMobile={ {
						value: prefixLineHeightMobile,
						label: 'prefixLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: prefixLineHeightTablet,
						label: 'prefixLineHeightTablet',
					} }
				/>
				<Range
					label={__(
						"Bottom Spacing",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={prefixSpace}
					onChange={(value) =>
						setAttributes({
							prefixSpace: value,
						})
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
		</PanelBody>
			);
		};

	const getDescriptionPanelColorSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Description',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={descColor ? descColor : ""}
					onColorChange={(value) =>
						setAttributes({ descColor: value })
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
				/>
				<Range
					label={__(
						"Bottom Spacing",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={descSpace}
					onChange={(value) =>
						setAttributes({
							descSpace: value,
						})
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
	</PanelBody>
		);
	};

	const getSocialIconPanelColorSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Social Icons',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={socialColor ? socialColor : ""}
					onColorChange={(value) =>
						setAttributes({ socialColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Hover",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={socialHoverColor ? socialHoverColor : ""}
					onColorChange={(value) =>
						setAttributes({ socialHoverColor: value })
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					fontSizeType={ {
						value: socialFontSizeType,
						label: 'socialFontSizeType',
					} }
					fontSize={ {
						value: socialFontSize,
						label: 'socialFontSize',
					} }
					fontSizeMobile={ {
						value: socialFontSizeMobile,
						label: 'socialFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: socialFontSizeTablet,
						label: 'socialFontSizeTablet',
					} }
					disableFontFamily={ true }
					disableLineHeight={ true }
				/>
				<Range
					label={__(
						"Inter Icon Spacing",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={socialSpace}
					onChange={(value) =>
						setAttributes({
							socialSpace: value,
						})
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};

	const getSpacingPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{...props}
					label={__(
						"Image Margin",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: imageTopMargin,
						label: "imageTopMargin",
					}}
					valueRight={{
						value: imageRightMargin,
						label: "imageRightMargin",
					}}
					valueBottom={{
						value: imageBottomMargin,
						label: "imageBottomMargin",
					}}
					valueLeft={{
						value: imageLeftMargin,
						label: "imageLeftMargin",
					}}
					valueTopTablet={{
						value: imageMarginTopTablet,
						label: "imageMarginTopTablet",
					}}
					valueRightTablet={{
						value: imageMarginRightTablet,
						label: "imageMarginRightTablet",
					}}
					valueBottomTablet={{
						value: imageMarginBottomTablet,
						label: "imageMarginBottomTablet",
					}}
					valueLeftTablet={{
						value: imageMarginLeftTablet,
						label: "imageMarginLeftTablet",
					}}
					valueTopMobile={{
						value: imageMarginTopMobile,
						label: "imageMarginTopMobile",
					}}
					valueRightMobile={{
						value: imageMarginRightMobile,
						label: "imageMarginRightMobile",
					}}
					valueBottomMobile={{
						value: imageMarginBottomMobile,
						label: "imageMarginBottomMobile",
					}}
					valueLeftMobile={{
						value: imageMarginLeftMobile,
						label: "imageMarginLeftMobile",
					}}
					unit={{
						value: imageMarginUnit,
						label: "imageMarginUnit",
					}}
					mUnit={{
						value: imageMarginUnit,
						label: "imageMarginUnit",
					}}
					tUnit={{
						value: imageMarginUnit,
						label: "imageMarginUnit",
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
		);
	};

	const getInspectorControls = () => {
		return (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
					{ getImagePanelBody() }
					{ getSocialLinksPanelBody() }
					</InspectorTab>
				<InspectorTab {...UAGTabs.style}>
					{ getTitlePanelColorSettings() }
					{ getPrefixPanelColorSettings() }
					{ getDescriptionPanelColorSettings() }
					{ getSocialIconPanelColorSettings() }
					{ image && ( getSpacingPanelBody() ) }
				</InspectorTab>
				<InspectorTab {...UAGTabs.advance}></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	};

	const getFontSettings = () => {
		return (
			<Suspense fallback={ lazyLoader() }>
				{ loadTitleGoogleFonts }
				{ loadPrefixGoogleFonts }
				{ loadDescGoogleFonts }
			</Suspense>
		);
	};

	return (
		<>
			{ imgPosition == 'above' && getBlockControls() }
			{ getInspectorControls() }
			{ getFontSettings() }
		</>
	);
};

export default React.memo( Settings );
