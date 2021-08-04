import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import React from 'react';
import renderSVG from '@Controls/renderIcon';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import { select } from '@wordpress/data';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		icon,
		noticeDismiss,
		cookies,
		close_cookie_days,
		textColor,
		titleColor,
		noticeColor,
		contentBgColor,
		noticeDismissColor,
		noticeAlignment,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleFontSizeType,
		titleLineHeightType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		descFontFamily,
		descFontWeight,
		descFontSubset,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descLineHeight,
		descLineHeightType,
		descLineHeightTablet,
		descLineHeightMobile,
		titleLoadGoogleFonts,
		descLoadGoogleFonts,
		titleTopPadding,
		titleRightPadding,
		titleBottomPadding,
		titleLeftPadding,
		titleTopPaddingTablet,
		titleRightPaddingTablet,
		titleBottomPaddingTablet,
		titleLeftPaddingTablet,
		titleTopPaddingMobile,
		titleRightPaddingMobile,
		titleBottomPaddingMobile,
		titleLeftPaddingMobile,
		titlePaddingUnit,
		mobileTitlePaddingUnit,
		tabletTitlePaddingUnit,
		titlePaddingLink,
		headingTag,
		layout,
		highlightWidth,
		contentTopPadding,
		contentRightPadding,
		contentBottomPadding,
		contentLeftPadding,
		contentTopPaddingTablet,
		contentRightPaddingTablet,
		contentBottomPaddingTablet,
		contentLeftPaddingTablet,
		contentTopPaddingMobile,
		contentRightPaddingMobile,
		contentBottomPaddingMobile,
		contentLeftPaddingMobile,
		contentPaddingUnit,
		mobileContentPaddingUnit,
		tabletContentPaddingUnit,
		contentPaddingLink,
	} = attributes;
	let loadTitleGoogleFonts;
	let loadDescriptionGoogleFonts;

	if ( true === titleLoadGoogleFonts ) {
		const hconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	if ( true === descLoadGoogleFonts ) {
		const sconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescriptionGoogleFonts = (
			<WebfontLoader config={ sconfig }></WebfontLoader>
		);
	}

	const updateCookieId = ( value ) => {
		const { getCurrentPostId } = select( 'core/editor' );
		const post_id = getCurrentPostId().toString();
		const timestamp = new Date().getTime();

		setAttributes( { c_id: post_id + '-' + timestamp } );
		setAttributes( { cookies: value } );
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ noticeAlignment }
					onChange={ ( value ) =>
						setAttributes( { noticeAlignment: value } )
					}
				/>
			</BlockControls>
		);
	};

	// Notice dismiss options
	const noticeDismissOptions = [
		{
			value: '',
			label: __( 'Allow Always', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'uagb-dismissable',
			label: __( 'Allow to Dismiss', 'ultimate-addons-for-gutenberg' ),
		},
	];

	const inlineGeneralSettings = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					value={ layout }
					onChange={ ( value ) => setAttributes( { layout: value } ) }
					options={ [
						{
							value: 'modern',
							label: __(
								'Modern',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'simple',
							label: __(
								'Default',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'simple' === layout && (
					<Range
						label={ __(
								'Highlight width',
								'ultimate-addons-for-gutenberg'
							) }
						value={highlightWidth}
						onChange={(value) =>
							setAttributes({ highlightWidth: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				) }
				<h2>
					{ __( 'Primary Heading', 'ultimate-addons-for-gutenberg' ) }
				</h2>
				<SelectControl
					label={ __( 'Tag' ) }
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
							value: 'span',
							label: __(
								'span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'p', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<SelectControl
					label={ __(
						'Notice Display',
						'ultimate-addons-for-gutenberg'
					) }
					options={ noticeDismissOptions }
					value={ noticeDismiss }
					onChange={ ( value ) =>
						setAttributes( {
							noticeDismiss: value,
						} )
					}
				/>
				{ noticeDismiss && (
					<>
						<p className="components-base-control__label">
							{ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
						</p>
						<FontIconPicker
							icons={ wp.UAGBSvgIcons }
							renderFunc={ renderSVG }
							theme="default"
							value={ icon }
							onChange={ ( value ) =>
								setAttributes( { icon: value } )
							}
							isMulti={ false }
							noSelectedPlaceholder={ __(
								'Select Icon',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
				{ noticeDismiss && <hr className="uagb-editor__separator" /> }
				{ noticeDismiss && (
					<ToggleControl
						label={ __(
							'Enable Cookies',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ cookies }
						onChange={ updateCookieId }
					/>
				) }
				{ cookies && (
					<Range
						label={ __(
								'Show Closed Notice After (Days)',
								'ultimate-addons-for-gutenberg'
							) }
						value={close_cookie_days}
						onChange={(value) =>
							setAttributes({ close_cookie_days: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				) }
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Colors', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={__("Title Color", "ultimate-addons-for-gutenberg")}
					colorValue={titleColor ? titleColor : ""}
					onColorChange={(value) =>
						setAttributes({ titleColor: value })
					}
				/>
				<hr className="uagb-editor__separator" />
				<AdvancedPopColorControl
					label={__("Highlight Color", "ultimate-addons-for-gutenberg")}
					colorValue={noticeColor ? noticeColor : ""}
					onColorChange={(value) =>
						setAttributes({ noticeColor: value })
					}
				/>
				<hr className="uagb-editor__separator" />
				<AdvancedPopColorControl
					label={__("Content Color", "ultimate-addons-for-gutenberg")}
					colorValue={textColor ? textColor : ""}
					onColorChange={(value) =>
						setAttributes({ textColor: value })
					}
				/>
				<hr className="uagb-editor__separator" />
				<AdvancedPopColorControl
					label={__("Content Background Color", "ultimate-addons-for-gutenberg")}
					colorValue={contentBgColor ? contentBgColor : ""}
					onColorChange={(value) =>
						setAttributes({ contentBgColor: value })
					}
				/>
				{ noticeDismiss && <hr className="uagb-editor__separator" /> }
				{ noticeDismiss && (
					<AdvancedPopColorControl
						label={__("Content Background Color", "ultimate-addons-for-gutenberg")}
						colorValue={noticeDismissColor ? noticeDismissColor : ""}
						onColorChange={(value) =>
							setAttributes({ noticeDismissColor: value })
						}
					/>
				) }
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }</h2>
				<TypographyControl
					label={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
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
				<TypographyControl
					label={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
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
				<hr className="uagb-editor__separator" />
				<SpacingControl
					{...props}
					label={__("Title Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: titleTopPadding,
						label: "titleTopPadding",
					}}
					valueRight={{
						value: titleRightPadding,
						label: "titleRightPadding",
					}}
					valueBottom={{
						value: titleBottomPadding,
						label: "titleBottomPadding",
					}}
					valueLeft={{
						value: titleLeftPadding,
						label: "titleLeftPadding",
					}}
					valueTopTablet={{
						value: titleTopPaddingTablet,
						label: "titleTopPaddingTablet",
					}}
					valueRightTablet={{
						value: titleRightPaddingTablet,
						label: "titleRightPaddingTablet",
					}}
					valueBottomTablet={{
						value: titleBottomPaddingTablet,
						label: "titleBottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: titleLeftPaddingTablet,
						label: "titleLeftPaddingTablet",
					}}
					valueTopMobile={{
						value: titleTopPaddingMobile,
						label: "titleTopPaddingMobile",
					}}
					valueRightMobile={{
						value: titleRightPaddingMobile,
						label: "titleRightPaddingMobile",
					}}
					valueBottomMobile={{
						value: titleBottomPaddingMobile,
						label: "titleBottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: titleLeftPaddingMobile,
						label: "titleLeftPaddingMobile",
					}}
					unit={{
						value: titlePaddingUnit,
						label: "titlePaddingUnit",
					}}
					mUnit={{
						value: mobileTitlePaddingUnit,
						label: "mobiletitlePaddingUnit",
					}}
					tUnit={{
						value: tabletTitlePaddingUnit,
						label: "tablettitlePaddingUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: titlePaddingLink,
						label: "titlePaddingLink",
					}}
				/>
				<hr className="uagb-editor__separator" />
				<SpacingControl
					{...props}
					label={__("Content Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: contentTopPadding,
						label: "contentTopPadding",
					}}
					valueRight={{
						value: contentRightPadding,
						label: "contentRightPadding",
					}}
					valueBottom={{
						value: contentBottomPadding,
						label: "contentBottomPadding",
					}}
					valueLeft={{
						value: contentLeftPadding,
						label: "contentLeftPadding",
					}}
					valueTopTablet={{
						value: contentTopPaddingTablet,
						label: "contentTopPaddingTablet",
					}}
					valueRightTablet={{
						value: contentRightPaddingTablet,
						label: "contentRightPaddingTablet",
					}}
					valueBottomTablet={{
						value: contentBottomPaddingTablet,
						label: "contentBottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: contentLeftPaddingTablet,
						label: "contentLeftPaddingTablet",
					}}
					valueTopMobile={{
						value: contentTopPaddingMobile,
						label: "contentTopPaddingMobile",
					}}
					valueRightMobile={{
						value: contentRightPaddingMobile,
						label: "contentRightPaddingMobile",
					}}
					valueBottomMobile={{
						value: contentBottomPaddingMobile,
						label: "contentBottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: contentLeftPaddingMobile,
						label: "contentLeftPaddingMobile",
					}}
					unit={{
						value: contentPaddingUnit,
						label: "contentPaddingUnit",
					}}
					mUnit={{
						value: mobileContentPaddingUnit,
						label: "mobileContentPaddingUnit",
					}}
					tUnit={{
						value: tabletContentPaddingUnit,
						label: "tabletContentPaddingUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: contentPaddingLink,
						label: "contentPaddingLink",
					}}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			{ blockControls() }
			<InspectorControls>
			<InspectorTabs tabs={["general", "advance"]}>
				<InspectorTab key={"general"}>
				{ inlineGeneralSettings() }
				</InspectorTab>
				<InspectorTab key={"advance"}>
				</InspectorTab>
			</InspectorTabs>
			</InspectorControls>
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
