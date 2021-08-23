/**
 * BLOCK: Content Timeline.
 */

// import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
// import renderSVG from '@Controls/renderIcon';
import UAGIconPicker from "../../../components/icon-picker";
import React from 'react';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "@Components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "@Components/color-control/advanced-pop-color-control.js";
import Range from "@Components/range/Range.js";
import SpacingControl from "../../../components/spacing-control";
import UAGTabsControl from "../../../components/tabs";

import { __ } from '@wordpress/i18n';

import { dateI18n } from '@wordpress/date';
import {
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';

import { select } from '@wordpress/data';

const Settings = ( props ) => {
	props = props.parentProps;

	// Setup the attributes.
	const {
		setAttributes,
		attributes: {
			headSpace,
			headingColor,
			subHeadingColor,
			backgroundColor,
			separatorColor,
			separatorFillColor,
			separatorBg,
			separatorBorder,
			borderFocus,
			headingTag,
			headFontSizeType,
			headFontSize,
			headFontSizeTablet,
			headFontSizeMobile,
			headFontFamily,
			headFontWeight,
			headFontSubset,
			headLineHeightType,
			headLineHeight,
			headLineHeightTablet,
			headLineHeightMobile,
			headLoadGoogleFonts,
			timelinAlignment,
			arrowlinAlignment,
			subHeadFontSizeType,
			subHeadFontSize,
			subHeadFontSizeTablet,
			subHeadFontSizeMobile,
			subHeadFontFamily,
			subHeadFontWeight,
			subHeadFontSubset,
			subHeadLineHeightType,
			subHeadLineHeight,
			subHeadLineHeightTablet,
			subHeadLineHeightMobile,
			subHeadLoadGoogleFonts,
			verticalSpace,
			horizontalSpace,
			separatorwidth,
			borderwidth,
			connectorBgsize,
			dateBottomspace,
			align,
			icon,
			iconColor,
			dateColor,
			dateFontsizeType,
			dateFontsize,
			dateFontsizeTablet,
			dateFontsizeMobile,
			dateFontFamily,
			dateFontWeight,
			dateFontSubset,
			dateLineHeightType,
			dateLineHeight,
			dateLineHeightTablet,
			dateLineHeightMobile,
			dateLoadGoogleFonts,
			iconSize,
			borderRadius,
			bgPadding,
			iconFocus,
			iconBgFocus,
			displayPostDate,
			stack,
			dateFormat,
			topMargin,
			rightMargin,
			bottomMargin,
			leftMargin,
			topMarginTablet,
			rightMarginTablet,
			bottomMarginTablet,
			leftMarginTablet,
			topMarginMobile,
			rightMarginMobile,
			bottomMarginMobile,
			leftMarginMobile,
			marginUnit,
			mobileMarginUnit,
			tabletMarginUnit,
			marginLink,
		},
	} = props;

	const getconnectorBgsize = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.connectorBgsize = value;
		} );
		setAttributes( { connectorBgsize: value } );
	};

	const getborderwidth = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.borderwidth = value;
		} );
		setAttributes( { borderwidth: value } );
	};

	const geticonSize = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.iconSize = value;
		} );
		setAttributes( { iconSize: value } );
	};

	const getseparatorwidth = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.separatorwidth = value;
		} );
		setAttributes( { separatorwidth: value } );
	};

	const getdateFormat = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.dateFormat = value;
		} );
		setAttributes( { dateFormat: value } );
	};

	const getTimelineicon = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.icon = value;
		} );
		setAttributes( { icon: value } );
	};

	const toggleDisplayPostDate = () => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.displayPostDate = displayPostDate;
		} );
		setAttributes( { displayPostDate: ! displayPostDate } );
	};

	const today = new Date();

	const blockControls = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'center', 'left', 'right' ] }
				/>
			</BlockControls>
		);
	};
	const generalSettings = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<h2>{ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }</h2>
				<SelectControl
					label={ __(
						'Orientation',
						'ultimate-addons-for-gutenberg'
					) }
					value={ timelinAlignment }
					onChange={ ( value ) =>
						setAttributes( { timelinAlignment: value } )
					}
					options={ [
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
						{
							value: 'center',
							label: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<SelectControl
					label={ __(
						'Arrow Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					value={ arrowlinAlignment }
					onChange={ ( value ) =>
						setAttributes( { arrowlinAlignment: value } )
					}
					options={ [
						{
							value: 'top',
							label: __( 'Top', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'bottom',
							label: __(
								'Bottom',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							label: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<SelectControl
					label={ __( 'Stack on', 'ultimate-addons-for-gutenberg' ) }
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
						'Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.',
						'ultimate-addons-for-gutenberg'
					) }
					onChange={ ( value ) => setAttributes( { stack: value } ) }
				/>
				<h2>{ __( 'Date' ) }</h2>
				<ToggleControl
					label={ __(
						'Display Date',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostDate }
					onChange={ toggleDisplayPostDate }
				/>
				{ displayPostDate && (
					<SelectControl
						label={ __(
							'Date Format',
							'ultimate-addons-for-gutenberg'
						) }
						value={ dateFormat }
						onChange={ getdateFormat }
						options={ [
							{
								value: 'M j, Y',
								label: dateI18n( 'M j, Y', today ),
							},
							{
								value: 'F j, Y',
								label: dateI18n( 'F j, Y', today ),
							},
							{
								value: 'm/d/Y',
								label: dateI18n( 'm/d/Y', today ),
							},
							{
								value: 'm-d-Y',
								label: dateI18n( 'm-d-Y', today ),
							},
							{
								value: 'm.d.Y',
								label: dateI18n( 'm.d.Y', today ),
							},
							{
								value: 'd M Y',
								label: dateI18n( 'd M Y', today ),
							},
							{
								value: 'd F Y',
								label: dateI18n( 'd F Y', today ),
							},
							{
								value: 'd-m-Y',
								label: dateI18n( 'd-m-Y', today ),
							},
							{
								value: 'd.m.Y',
								label: dateI18n( 'd.m.Y', today ),
							},
							{
								value: 'd/m/Y',
								label: dateI18n( 'd/m/Y', today ),
							},
							{
								value: 'Y-m-d',
								label: dateI18n( 'Y-m-d', today ),
							},
							{
								value: 'Y.m.d',
								label: dateI18n( 'Y.m.d', today ),
							},
							{
								value: 'Y/m/d',
								label: dateI18n( 'Y/m/d', today ),
							},
							{ value: 'M, Y', label: dateI18n( 'M, Y', today ) },
							{ value: 'M Y', label: dateI18n( 'M Y', today ) },
							{ value: 'F, Y', label: dateI18n( 'F, Y', today ) },
							{ value: 'F Y', label: dateI18n( 'F Y', today ) },
							{
								value: 'custom',
								label: __(
									'Normal Text',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
				{ displayPostDate && timelinAlignment !== 'center' && (
					<Range
						label={__(
							"Date Bottom Spacing",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={dateBottomspace}
						onChange={(value) =>
							setAttributes({ dateBottomspace: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				) }
			</PanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Range
					label={__(
						"Heading Bottom Spacing",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={headSpace}
					onChange={(value) =>
						setAttributes({ headSpace: value })
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
				<SpacingControl
					{...props}
					label={__("Margin", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: topMargin,
						label: "topMargin",
					}}
					valueRight={{
						value: rightMargin,
						label: "rightMargin",
					}}
					valueBottom={{
						value: bottomMargin,
						label: "bottomMargin",
					}}
					valueLeft={{
						value: leftMargin,
						label: "leftMargin",
					}}
					valueTopTablet={{
						value: topMarginTablet,
						label: "topMarginTablet",
					}}
					valueRightTablet={{
						value: rightMarginTablet,
						label: "rightMarginTablet",
					}}
					valueBottomTablet={{
						value: bottomMarginTablet,
						label: "bottomMarginTablet",
					}}
					valueLeftTablet={{
						value: leftMarginTablet,
						label: "leftMarginTablet",
					}}
					valueTopMobile={{
						value: topMarginMobile,
						label: "topMarginMobile",
					}}
					valueRightMobile={{
						value: rightMarginMobile,
						label: "rightMarginMobile",
					}}
					valueBottomMobile={{
						value: bottomMarginMobile,
						label: "bottomMarginMobile",
					}}
					valueLeftMobile={{
						value: leftMarginMobile,
						label: "leftMarginMobile",
					}}
					unit={{
						value: marginUnit,
						label: "marginUnit",
					}}
					mUnit={{
						value: mobileMarginUnit,
						label: "mobileMarginUnit",
					}}
					tUnit={{
						value: tabletMarginUnit,
						label: "tabletMarginUnit",
					}}
					attributes={props}
					setAttributes={setAttributes}
					link={{
						value: marginLink,
						label: "marginLink",
					}}
				/>
			</PanelBody>
		);
	};
	const connectorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{/* <FontIconPicker
					icons={ wp.UAGBSvgIcons }
					value={ icon }
					onChange={ getTimelineicon }
					isMulti={ false }
					renderFunc={ renderSVG }
					noSelectedPlaceholder={ __(
						'Select Icon',
						'ultimate-addons-for-gutenberg'
					) }
				/> */}
				<UAGIconPicker
					label={__("Icon", "ultimate-addons-for-gutenberg")}
					value={icon}
					onChange={getTimelineicon}
				/>
				<Range
					label={__(
						"Icon Size",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={iconSize}
					onChange={geticonSize}
					min={0}
					max={30}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Icon Background Size",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={connectorBgsize}
					onChange={getconnectorBgsize}
					min={25}
					max={90}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Border Width",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={borderwidth}
					onChange={getborderwidth}
					min={1}
					max={10}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Connector Width",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={separatorwidth}
					onChange={getseparatorwidth}
					min={1}
					max={10}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};
	const timelineItemSettings = () => {
		return (
			<PanelBody
				title={ __( 'Timeline Item', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					value={ headingTag }
					onChange={ ( value ) =>
						setAttributes( { headingTag: value } )
					}
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
						{
							value: 'p',
							label: __( 'P', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'span',
							label: __(
								'SPAN',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<Range
					label={__(
						"Rounded Corners",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={borderRadius}
					onChange={(value) =>
						setAttributes({ borderRadius: value })
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Padding",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={bgPadding}
					onChange={(value) =>
						setAttributes({ bgPadding: value })
					}
					min={1}
					max={50}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};
	const headingColorSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Title',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ true }
			>
			<AdvancedPopColorControl
				label={__("Color", "ultimate-addons-for-gutenberg")}
				colorValue={headingColor ? headingColor : ""}
				onColorChange={(value) =>
					setAttributes({ headingColor: value })
				}
			/>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ props.attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: headLoadGoogleFonts,
					label: 'headLoadGoogleFonts',
				} }
				fontFamily={ {
					value: headFontFamily,
					label: 'headFontFamily',
				} }
				fontWeight={ {
					value: headFontWeight,
					label: 'headFontWeight',
				} }
				fontSubset={ {
					value: headFontSubset,
					label: 'headFontSubset',
				} }
				fontSizeType={ {
					value: headFontSizeType,
					label: 'headFontSizeType',
				} }
				fontSize={ { value: headFontSize, label: 'headFontSize' } }
				fontSizeMobile={ {
					value: headFontSizeMobile,
					label: 'headFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: headFontSizeTablet,
					label: 'headFontSizeTablet',
				} }
				lineHeightType={ {
					value: headLineHeightType,
					label: 'headLineHeightType',
				} }
				lineHeight={ {
					value: headLineHeight,
					label: 'headLineHeight',
				} }
				lineHeightMobile={ {
					value: headLineHeightMobile,
					label: 'headLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: headLineHeightTablet,
					label: 'headLineHeightTablet',
				} }
			/>
			</PanelBody>
			)
	}
	const contentColorSettings = () => {
			return (
				<PanelBody
					title={ __(
						'Content',
						'ultimate-addons-for-gutenberg'
					) }
					initialOpen={ false }
				>
				<AdvancedPopColorControl
					label={__("Color", "ultimate-addons-for-gutenberg")}
					colorValue={subHeadingColor ? subHeadingColor : ""}
					onColorChange={(value) =>
						setAttributes({ subHeadingColor: value })
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ props.attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: subHeadLoadGoogleFonts,
						label: 'subHeadLoadGoogleFonts',
					} }
					fontFamily={ {
						value: subHeadFontFamily,
						label: 'subHeadFontFamily',
					} }
					fontWeight={ {
						value: subHeadFontWeight,
						label: 'subHeadFontWeight',
					} }
					fontSubset={ {
						value: subHeadFontSubset,
						label: 'subHeadFontSubset',
					} }
					fontSizeType={ {
						value: subHeadFontSizeType,
						label: 'subHeadFontSizeType',
					} }
					fontSize={ {
						value: subHeadFontSize,
						label: 'subHeadFontSize',
					} }
					fontSizeMobile={ {
						value: subHeadFontSizeMobile,
						label: 'subHeadFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: subHeadFontSizeTablet,
						label: 'subHeadFontSizeTablet',
					} }
					lineHeightType={ {
						value: subHeadLineHeightType,
						label: 'subHeadLineHeightType',
					} }
					lineHeight={ {
						value: subHeadLineHeight,
						label: 'subHeadLineHeight',
					} }
					lineHeightMobile={ {
						value: subHeadLineHeightMobile,
						label: 'subHeadLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: subHeadLineHeightTablet,
						label: 'subHeadLineHeightTablet',
					} }
				/>
				</PanelBody>
			)
	}
	const dateColorSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Date',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
			<AdvancedPopColorControl
				label={__("Color", "ultimate-addons-for-gutenberg")}
				colorValue={dateColor ? dateColor : ""}
				onColorChange={(value) =>
					setAttributes({ dateColor: value })
				}
			/>
			{ displayPostDate && (
					<>
						<TypographyControl
							label={ __(
								'Typography',
								'ultimate-addons-for-gutenberg'
							) }
							attributes={ props.attributes }
							setAttributes={ setAttributes }
							loadGoogleFonts={ {
								value: dateLoadGoogleFonts,
								label: 'dateLoadGoogleFonts',
							} }
							fontFamily={ {
								value: dateFontFamily,
								label: 'dateFontFamily',
							} }
							fontWeight={ {
								value: dateFontWeight,
								label: 'dateFontWeight',
							} }
							fontSubset={ {
								value: dateFontSubset,
								label: 'dateFontSubset',
							} }
							fontSizeType={ {
								value: dateFontsizeType,
								label: 'dateFontsizeType',
							} }
							fontSize={ {
								value: dateFontsize,
								label: 'dateFontsize',
							} }
							fontSizeMobile={ {
								value: dateFontsizeMobile,
								label: 'dateFontsizeMobile',
							} }
							fontSizeTablet={ {
								value: dateFontsizeTablet,
								label: 'dateFontsizeTablet',
							} }
							lineHeightType={ {
								value: dateLineHeightType,
								label: 'dateLineHeightType',
							} }
							lineHeight={ {
								value: dateLineHeight,
								label: 'dateLineHeight',
							} }
							lineHeightMobile={ {
								value: dateLineHeightMobile,
								label: 'dateLineHeightMobile',
							} }
							lineHeightTablet={ {
								value: dateLineHeightTablet,
								label: 'dateLineHeightTablet',
							} }
						/>
					</>
				) }
			</PanelBody>
		);
	};
	const backgroundColorSetting = () => {
		return(
			<PanelBody
			title={ __(
				'Background',
				'ultimate-addons-for-gutenberg'
			) }
			initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__("Color", "ultimate-addons-for-gutenberg")}
					colorValue={backgroundColor ? backgroundColor : ""}
					onColorChange={(value) =>
						setAttributes({ backgroundColor: value })
					}
				/>
			</PanelBody>
		)
	}
	const connectorColorSettings = () => {
		const iconColorSettings = (
			<PanelBody>
			<AdvancedPopColorControl
				label={__("Line Color", "ultimate-addons-for-gutenberg")}
				colorValue={separatorColor ? separatorColor : ""}
				onColorChange={(value) =>
					setAttributes({ separatorColor: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Icon Color", "ultimate-addons-for-gutenberg")}
				colorValue={iconColor ? iconColor : ""}
				onColorChange={(value) =>
					setAttributes({ iconColor: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Background Color", "ultimate-addons-for-gutenberg")}
				colorValue={separatorBg ? separatorBg : ""}
				onColorChange={(value) =>
					setAttributes({ separatorBg: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Border Color", "ultimate-addons-for-gutenberg")}
				colorValue={separatorBorder ? separatorBorder : ""}
				onColorChange={(value) =>
					setAttributes({ separatorBorder: value })
				}
			/>
			</PanelBody>
		);

		const iconFocusSettings = (
			<PanelBody>
			<AdvancedPopColorControl
				label={__("Line Color", "ultimate-addons-for-gutenberg")}
				colorValue={separatorFillColor ? separatorFillColor : ""}
				onColorChange={(value) =>
					setAttributes({ separatorFillColor: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Icon Color", "ultimate-addons-for-gutenberg")}
				colorValue={iconFocus ? iconFocus : ""}
				onColorChange={(value) =>
					setAttributes({ iconFocus: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Background Color", "ultimate-addons-for-gutenberg")}
				colorValue={iconBgFocus ? iconBgFocus : ""}
				onColorChange={(value) =>
					setAttributes({ iconBgFocus: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Border Color", "ultimate-addons-for-gutenberg")}
				colorValue={borderFocus ? borderFocus : ""}
				onColorChange={(value) =>
					setAttributes({ borderFocus: value })
				}
			/>
			</PanelBody>
		);
		
		return (
			<PanelBody
				title={ __(
					'Connector',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
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
							name: "focus",
							title: __(
								"Focus",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					normal={iconColorSettings}
					focus={iconFocusSettings}
				/>
			</PanelBody>
		);
	};

	let loadHeadGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadDateGoogleFonts;

	if ( headLoadGoogleFonts == true ) {
		const headconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadGoogleFonts = (
			<WebfontLoader config={ headconfig }></WebfontLoader>
		);
	}

	if ( subHeadLoadGoogleFonts == true ) {
		const subHeadconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadGoogleFonts = (
			<WebfontLoader config={ subHeadconfig }></WebfontLoader>
		);
	}

	if ( dateLoadGoogleFonts == true ) {
		const dateconfig = {
			google: {
				families: [
					dateFontFamily +
						( dateFontWeight ? ':' + dateFontWeight : '' ),
				],
			},
		};

		loadDateGoogleFonts = (
			<WebfontLoader config={ dateconfig }></WebfontLoader>
		);
	}
	return (
		<>
			{ blockControls() }
			<InspectorControls>
			<InspectorTabs>
				<InspectorTab key={"general"}>
					{ generalSettings() }
					{ timelineItemSettings() }
					{ connectorSettings() }
				</InspectorTab>
				<InspectorTab key={"style"}>
				{ headingColorSettings() }
				{ contentColorSettings() }
				{ dateColorSettings() }
				{ backgroundColorSetting() }
				{ connectorColorSettings() }
				{ spacingSettings() }
				</InspectorTab>
				<InspectorTab key={"advance"}>
				</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadHeadGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadDateGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
