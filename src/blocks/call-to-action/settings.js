import UAGIconPicker from "../../components/icon-picker";
import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import Range from "../../components/range/Range.js";
import MultiButtonsControl from "../../components/multi-buttons-control";
import Border from "../../components/border";
import SpacingControl from "../../components/spacing-control";
import UAGTabsControl from "../../components/tabs";

import {
	PanelBody,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes } = props;

	// Setup the attributes.
	const {
		textAlign,
		titleColor,
		descColor,
		titleTag,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		descFontFamily,
		descFontWeight,
		descFontSubset,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descLoadGoogleFonts,
		titleSpace,
		descSpace,
		ctaPosition,
		buttonAlign,
		ctaType,
		ctaText,
		ctaLink,
		ctaTarget,
		ctaIcon,
		ctaIconPosition,
		ctaIconSpace,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontSubset,
		ctaLoadGoogleFonts,
		contentWidth,
		ctaBtnLinkColor,
		ctaBgHoverColor,
		ctaBgColor,
		ctaTopPadding,
		ctaRightPadding,
		ctaBottomPadding,
		ctaLeftPadding,
		ctaTopPaddingTablet,
		ctaRightPaddingTablet,
		ctaBottomPaddingTablet,
		ctaLeftPaddingTablet,
		ctaTopPaddingMobile,
		ctaRightPaddingMobile,
		ctaBottomPaddingMobile,
		ctaLeftPaddingMobile,
		ctaPaddingUnit,
		mobileCTAPaddingUnit,
		tabletCTAPaddingUnit,
		ctaPaddingLink,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderhoverColor,
		ctaBorderWidth,
		ctaBorderRadius,
		stack,
		ctaLeftSpace,
		ctaRightSpace,
		ctaLinkHoverColor,
		inheritFromTheme,
	} = attributes;

	let loadCtaGoogleFonts;
	let loadTitleGoogleFonts;
	let loadDescGoogleFonts;

	if ( ctaLoadGoogleFonts == true ) {
		const ctaconfig = {
			google: {
				families: [
					ctaFontFamily +
						( ctaFontWeight ? ':' + ctaFontWeight : '' ),
				],
			},
		};

		loadCtaGoogleFonts = (
			<WebfontLoader config={ ctaconfig }></WebfontLoader>
		);
	}

	if ( titleLoadGoogleFonts == true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
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

	const ctaBorderSettings = () => {
		return (
			<PanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: ctaBorderStyle,
						label: "ctaBorderStyle",
						title: __(
							"Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: ctaBorderWidth,
						label: "ctaBorderWidth",
						title: __(
							"Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: ctaBorderRadius,
						label: "ctaBorderRadius",
						title: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: ctaBorderColor,
						label: "ctaBorderColor",
						title: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: ctaBorderhoverColor,
						label: "ctaBorderhoverColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					disableBottomSeparator={true}
				/>
			</PanelBody>
		)
	}

	// CTA settings.
	const ctaSettings = () => {
		return (
			<PanelBody
				title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Type",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: ctaType,
						label: "ctaType",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'text',
							label: __(
								'Text',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Text',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'button',
							label: __(
								'Button',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Button',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'all',
							label: __(
								'Complete Box',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Complete Box',
								'ultimate-addons-for-gutenberg'
							),
						}
					]}
					showIcons={false}
				/>
				{ ( ctaType === 'text' || ctaType === 'button' ) && (
					<>
						<TextControl
							label={ __(
								'Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaText }
							onChange={ ( value ) =>
								setAttributes( { ctaText: value } )
							}
						/>
					</>
				) }
				{ ctaType !== 'none' && (
					<>
						<TextControl
							label={ __(
								'Link',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaLink }
							onChange={ ( value ) =>
								setAttributes( { ctaLink: value } )
							}
						/>
						<ToggleControl
							label={ __(
								'Open in new Window',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ ctaTarget }
							onChange={ () =>
								setAttributes( { ctaTarget: ! ctaTarget } )
							}
						/>
					</>
				) }
				{ ( ctaType === 'button' ) && (
					<>
						<ToggleControl
							label={ __(
								'Inherit from Theme',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ inheritFromTheme }
							onChange={ () =>
								setAttributes( {
									inheritFromTheme: ! inheritFromTheme,
								} )
							}
						/>
					</>
				) }
				{ ctaType !== 'all' && ctaType !== 'none' && (
					<>

						<UAGIconPicker
							label={__("Icon", "ultimate-addons-for-gutenberg")}
							value={ctaIcon}
							onChange={(value) => setAttributes({ ctaIcon: value })}
						/>
						{ ctaIcon !== '' && (
							<>
								<MultiButtonsControl
									setAttributes={setAttributes}
									label={__(
										"Icon Position",
										"ultimate-addons-for-gutenberg"
									)}
									data={{
										value: ctaIconPosition,
										label: "ctaIconPosition",
									}}
									className="uagb-multi-button-alignment-control"
									options={[
										{
											value: 'before',
											label: __(
												'Before Text',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												"Before Text",
												"ultimate-addons-for-gutenberg"
											),
										},
										{
											value: 'after',
											label: __(
												'After Text',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												"After Text",
												"ultimate-addons-for-gutenberg"
											),
										},
									]}
									showIcons={false}
								/>
								{
								<Range
									label={__(
										"Icon Spacing",
										"ultimate-addons-for-gutenberg"
									)}
									setAttributes={setAttributes}
									value={ctaIconSpace}
									onChange={(value) =>
										setAttributes({ ctaIconSpace: value })
									}
									min={0}
									max={50}
									displayUnit={false}
								/>
								}
							</>
						) }
					</>
				) }
			</PanelBody>
		);
	};

	const ctaStyleSettings = () => {
		return (
			<PanelBody
				title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ ( ctaType === 'text' || ctaType === 'button' ) && (
					<>
						{ ( ! inheritFromTheme && ctaType === 'button' ) ||
							( ctaType === 'text' && (
								<TypographyControl
									label={ __(
										'Typography',
										'ultimate-addons-for-gutenberg'
									) }
									attributes={ attributes }
									setAttributes={ setAttributes }
									loadGoogleFonts={ {
										value: ctaLoadGoogleFonts,
										label: 'ctaLoadGoogleFonts',
									} }
									fontFamily={ {
										value: ctaFontFamily,
										label: 'ctaFontFamily',
									} }
									fontWeight={ {
										value: ctaFontWeight,
										label: 'ctaFontWeight',
									} }
									fontSubset={ {
										value: ctaFontSubset,
										label: 'ctaFontSubset',
									} }
									fontSizeType={ {
										value: ctaFontSizeType,
										label: 'ctaFontSizeType',
									} }
									fontSize={ {
										value: ctaFontSize,
										label: 'ctaFontSize',
									} }
									fontSizeMobile={ {
										value: ctaFontSizeMobile,
										label: 'ctaFontSizeMobile',
									} }
									fontSizeTablet={ {
										value: ctaFontSizeTablet,
										label: 'ctaFontSizeTablet',
									} }
									disableLineHeight={ true }
								/>
							) ) }
					</>
				) }
				{ ctaType === 'text' && (
					<UAGTabsControl
						tabs={[
							{
								name: "normal",
								title: __(
									"Normal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								name: "hover",
								title: __(
									"Hover",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						normal={ctaTextColor()}
						hover={ctaTxtHoverColor()}
						disableBottomSeparator={true}
					/>
				) }
				{ ctaType === 'button' && ! inheritFromTheme && (
					<UAGTabsControl
						tabs={[
							{
								name: "normal",
								title: __(
									"Normal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								name: "hover",
								title: __(
									"Hover",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						normal={ctaNormalSettings()}
						hover={ctaHoverSettings()}
						disableBottomSeparator={true}
					/>
				) }
			</PanelBody>
		);
	};

	const ctaNormalSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={__(
						"Text Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaBtnLinkColor ? ctaBtnLinkColor : ""}
					onColorChange={(value) =>
						setAttributes({ ctaBtnLinkColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaBgColor ? ctaBgColor : ""}
					onColorChange={(value) =>
						setAttributes({ ctaBgColor: value })
					}
				/>
			</>
		);
	};
	const ctaHoverSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={__(
						"Text Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaLinkHoverColor ? ctaLinkHoverColor : ""}
					onColorChange={(value) =>
						setAttributes({ ctaLinkHoverColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaBgHoverColor ? ctaBgHoverColor : ""}
					onColorChange={(value) =>
						setAttributes({ ctaBgHoverColor: value })
					}
				/>
			</>
		);
	};

	const ctaTextColor = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={__(
						"Text Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaBtnLinkColor ? ctaBtnLinkColor : ""}
					onColorChange={(value) =>
						setAttributes({ ctaBtnLinkColor: value })
					}
				/>
			</>
		);
	};
	const ctaTxtHoverColor = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={__(
						"Text Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaLinkHoverColor ? ctaLinkHoverColor : ""}
					onColorChange={(value) =>
						setAttributes({ ctaLinkHoverColor: value })
					}
				/>
			</>
		);
	};

	const headingSettings = () => {
		return (
			<PanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
				</PanelBody>
		);
	};
	const descriptionSettings = () => {
		return (
			<PanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
			</PanelBody>
		);
	};
	// Margin Settings.
	const marginSettings = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Range
					label={__(
						"Heading Bottom Margin (px)",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={titleSpace}
					onChange={(value) =>
						setAttributes({ titleSpace: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Description Bottom Margin (px)",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={descSpace}
					onChange={(value) =>
						setAttributes({ descSpace: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>

				{ textAlign === 'left' && ctaPosition === 'right' && (
					<Range
						label={__(
							"Content Left Margin (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={ctaLeftSpace}
						onChange={(value) =>
							setAttributes({ ctaLeftSpace: value })
						}
						min={0}
						max={500}
						displayUnit={false}
					/>
				) }
				{ textAlign === 'right' && ctaPosition === 'right' && (
					<Range
						label={__(
							"Content Right Margin (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={ctaRightSpace}
						onChange={(value) =>
							setAttributes({ ctaRightSpace: value })
						}
						min={0}
						max={500}
						displayUnit={false}
					/>
				) }
				{ ctaType == 'button' && ! inheritFromTheme && (
					<>
						<SpacingControl
							{...props}
							label={__("Button Padding", "ultimate-addons-for-gutenberg")}
							valueTop={{
								value: ctaTopPadding,
								label: "ctaTopPadding",
							}}
							valueRight={{
								value: ctaRightPadding,
								label: "ctaRightPadding",
							}}
							valueBottom={{
								value: ctaBottomPadding,
								label: "ctaBottomPadding",
							}}
							valueLeft={{
								value: ctaLeftPadding,
								label: "ctaLeftPadding",
							}}
							valueTopTablet={{
								value: ctaTopPaddingTablet,
								label: "ctaTopPaddingTablet",
							}}
							valueRightTablet={{
								value: ctaRightPaddingTablet,
								label: "ctaRightPaddingTablet",
							}}
							valueBottomTablet={{
								value: ctaBottomPaddingTablet,
								label: "ctaBottomPaddingTablet",
							}}
							valueLeftTablet={{
								value: ctaLeftPaddingTablet,
								label: "ctaLeftPaddingTablet",
							}}
							valueTopMobile={{
								value: ctaTopPaddingMobile,
								label: "ctaTopPaddingMobile",
							}}
							valueRightMobile={{
								value: ctaRightPaddingMobile,
								label: "ctaRightPaddingMobile",
							}}
							valueBottomMobile={{
								value: ctaBottomPaddingMobile,
								label: "ctaBottomPaddingMobile",
							}}
							valueLeftMobile={{
								value: ctaLeftPaddingMobile,
								label: "ctaLeftPaddingMobile",
							}}
							unit={{
								value: ctaPaddingUnit,
								label: "ctaPaddingUnit",
							}}
							mUnit={{
								value: mobileCTAPaddingUnit,
								label: "mobileCTAPaddingUnit",
							}}
							tUnit={{
								value: tabletCTAPaddingUnit,
								label: "tabletCTAPaddingUnit",
							}}
							attributes={attributes}
							setAttributes={setAttributes}
							link={{
								value: ctaPaddingLink,
								label: "ctaPaddingLink",
							}}
						/>
					</>
				) }
			</PanelBody>
		);
	};
	const layouts = () => {
		return (
			<PanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Heading Tag",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: titleTag,
						label: "titleTag",
					}}
					options={[
						{ value: "h1", label: __("H1", "ultimate-addons-for-gutenberg") },
						{ value: "h2", label: __("H2", "ultimate-addons-for-gutenberg") },
						{ value: "h3", label: __("H3", "ultimate-addons-for-gutenberg") },
						{ value: "h4", label: __("H4", "ultimate-addons-for-gutenberg") },
						{ value: "h5", label: __("H5", "ultimate-addons-for-gutenberg") },
						{ value: "h6", label: __("H6", "ultimate-addons-for-gutenberg") },
					]}
				/>
				{ ctaType !== 'all' && ctaType !== 'none' && (
					<>	
						{ ( ctaType === 'text' || ctaType === 'button' ) && (
							<>
								{ ctaPosition === 'right' && (
									<Range
										label={__(
											"Content Width (%)",
											"ultimate-addons-for-gutenberg"
										)}
										setAttributes={setAttributes}
										value={contentWidth}
										onChange={(value) =>
											setAttributes({ contentWidth: value })
										}
										min={0}
										max={100}
										displayUnit={false}
									/>
								) }
							</>
						) }
						<MultiButtonsControl
							setAttributes={setAttributes}
							label={__(
								"Button Position",
								"ultimate-addons-for-gutenberg"
							)}
							data={{
								value: ctaPosition,
								label: "ctaPosition",
							}}
							className="uagb-multi-button-alignment-control"
							options={[
								{
									value: 'right',
									label: __(
										'Normal',
										'ultimate-addons-for-gutenberg'
									),
									tooltip: __(
										"Normal",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									value: 'below-title',
									label: __(
										'Stack',
										'ultimate-addons-for-gutenberg'
									),
									tooltip: __(
										"Stack",
										"ultimate-addons-for-gutenberg"
									),
								},
							]}
							showIcons={false}
						/>
						{ ctaPosition && ctaPosition === 'right' && (
							<>
							<MultiButtonsControl
								setAttributes={setAttributes}
								label={__(
									"Vertical Alignment",
									"ultimate-addons-for-gutenberg"
								)}
								data={{
									value: buttonAlign,
									label: "buttonAlign",
								}}
								className="uagb-multi-button-alignment-control"
								options={[
									{
										value: 'top',
										label: __(
											'Top',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"Top",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: 'middle',
										label: __(
											'Middle',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"Middle",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
								showIcons={false}
							/>
							<MultiButtonsControl
								setAttributes={setAttributes}
								label={__(
									"Stack On",
									"ultimate-addons-for-gutenberg"
								)}
								data={{
									value: stack,
									label: "stack",
								}}
								className="uagb-multi-button-alignment-control"
								options={[
									{
										value: 'none',
										label: __(
											'None',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"None",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: 'tablet',
										label: __(
											'Tablet',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"Tablet",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: 'mobile',
										label: __(
											'Mobile',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"Mobile",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
								showIcons={false}
								help={ __(
									'Note: Choose on what breakpoint the CTA button will stack.',
									'ultimate-addons-for-gutenberg'
								) }
							/>
							</>
						) }
					</>
				)}			
			</PanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) =>
						setAttributes( { textAlign: value } )
					}
				/>
			</BlockControls>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
					{ layouts() }
					{ ctaSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
					{ headingSettings() }
					{ descriptionSettings() }
					{ ! inheritFromTheme && ctaType !== 'all' && ctaType !== 'none' && ( ctaStyleSettings() ) }
					{ ctaType == 'button' && ! inheritFromTheme && ( ctaBorderSettings())}
					{ marginSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadCtaGoogleFonts }
			{ loadTitleGoogleFonts }
			{ loadDescGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
