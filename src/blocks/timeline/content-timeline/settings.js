/**
 * BLOCK: Content Timeline.
 */

import UAGIconPicker from '@Components/icon-picker';
import React from 'react';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import renderSVG from '@Controls/renderIcon';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';

import { dateI18n } from '@wordpress/date';
import {
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	AlignmentToolbar
} from '@wordpress/block-editor';

import {
	SelectControl,
	ToggleControl,
	Icon,
} from '@wordpress/components';

import { select } from '@wordpress/data';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	// Setup the attributes.
	const {
		setAttributes,
		attributes: {
			headSpace,
			headSpaceTablet,
			headSpaceMobile,
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
			headFontStyle,
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
			subHeadFontStyle,
			subHeadLineHeightType,
			subHeadLineHeight,
			subHeadLineHeightTablet,
			subHeadLineHeightMobile,
			subHeadLoadGoogleFonts,
			separatorwidth,
			borderwidth,
			connectorBgsize,
			dateBottomspace,
		dateBottomspaceTablet,
		dateBottomspaceMobile,
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
			dateFontStyle,
			dateLineHeightType,
			dateLineHeight,
			dateLineHeightTablet,
			dateLineHeightMobile,
			dateLoadGoogleFonts,
			iconSize,
			borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
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
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
			topPaddingTablet,
			rightPaddingTablet,
			bottomPaddingTablet,
			leftPaddingTablet,
			topPaddingMobile,
			rightPaddingMobile,
			bottomPaddingMobile,
			leftPaddingMobile,
			paddingUnit,
			mobilePaddingUnit,
			tabletPaddingUnit,
			paddingLink,
			headTransform,
			subHeadTransform,
			dateTransform,
			headDecoration,
			subHeadDecoration,
			dateDecoration,
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
					value={ timelinAlignment }
					onChange={ ( value ) => {
						setAttributes( { timelinAlignment: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
			</BlockControls>
		);
	};
	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Orientation',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: timelinAlignment,
						label: 'timelinAlignment',
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
									icon={ renderSVG( 'fa fa-align-center' ) }
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
									icon={ renderSVG( 'fa fa-align-right' ) }
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
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
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
									icon={ renderSVG( 'fa fa-align-center' ) }
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
									icon={ renderSVG( 'fa fa-align-right' ) }
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
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Arrow Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: arrowlinAlignment,
						label: 'arrowlinAlignment',
					} }
					className="uagb-multi-button-alignment-control"
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
					showIcons={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Stack On', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: stack,
						label: 'stack',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'none',
							label: 'None',
						},
						{
							value: 'tablet',
							label: 'Tablet',
						},
						{
							value: 'mobile',
							label: 'Mobile',
						},
					] }
					showIcons={ false }
					help={ __(
						'Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.',
						'ultimate-addons-for-gutenberg'
					) }
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
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPadding,
						label: 'topPadding',
					} }
					valueRight={ {
						value: rightPadding,
						label: 'rightPadding',
					} }
					valueBottom={ {
						value: bottomPadding,
						label: 'bottomPadding',
					} }
					valueLeft={ {
						value: leftPadding,
						label: 'leftPadding',
					} }
					valueTopTablet={ {
						value: topPaddingTablet,
						label: 'topPaddingTablet',
					} }
					valueRightTablet={ {
						value: rightPaddingTablet,
						label: 'rightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: bottomPaddingTablet,
						label: 'bottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: leftPaddingTablet,
						label: 'leftPaddingTablet',
					} }
					valueTopMobile={ {
						value: topPaddingMobile,
						label: 'topPaddingMobile',
					} }
					valueRightMobile={ {
						value: rightPaddingMobile,
						label: 'rightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: bottomPaddingMobile,
						label: 'bottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: leftPaddingMobile,
						label: 'leftPaddingMobile',
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
					attributes={ props }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMargin,
						label: 'topMargin',
					} }
					valueRight={ {
						value: rightMargin,
						label: 'rightMargin',
					} }
					valueBottom={ {
						value: bottomMargin,
						label: 'bottomMargin',
					} }
					valueLeft={ {
						value: leftMargin,
						label: 'leftMargin',
					} }
					valueTopTablet={ {
						value: topMarginTablet,
						label: 'topMarginTablet',
					} }
					valueRightTablet={ {
						value: rightMarginTablet,
						label: 'rightMarginTablet',
					} }
					valueBottomTablet={ {
						value: bottomMarginTablet,
						label: 'bottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: leftMarginTablet,
						label: 'leftMarginTablet',
					} }
					valueTopMobile={ {
						value: topMarginMobile,
						label: 'topMarginMobile',
					} }
					valueRightMobile={ {
						value: rightMarginMobile,
						label: 'rightMarginMobile',
					} }
					valueBottomMobile={ {
						value: bottomMarginMobile,
						label: 'bottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: leftMarginMobile,
						label: 'leftMarginMobile',
					} }
					unit={ {
						value: marginUnit,
						label: 'marginUnit',
					} }
					mUnit={ {
						value: mobileMarginUnit,
						label: 'mobileMarginUnit',
					} }
					tUnit={ {
						value: tabletMarginUnit,
						label: 'tabletMarginUnit',
					} }
					attributes={ props }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const connectorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ getTimelineicon }
				/>
				{ icon && (
					<Range
						label={ __(
							'Icon Size',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ iconSize }
						onChange={ geticonSize }
						min={ 0 }
						max={ 30 }
						displayUnit={ false }
					/>
				) }
				<Range
					label={ __(
						'Icon Background Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ connectorBgsize }
					onChange={ getconnectorBgsize }
					min={ 25 }
					max={ 90 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Border Width',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ borderwidth }
					onChange={ getborderwidth }
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Connector Width',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorwidth }
					onChange={ getseparatorwidth }
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const timelineItemSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Timeline Item', 'ultimate-addons-for-gutenberg' ) }
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
						{
							value: 'span',
							label: __(
								'Span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'P', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const timelineItemColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Timeline Item', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<h2>
					{ __(
						'Heading',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headingColor ? headingColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { headingColor: value } )
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
					fontStyle={ {
						value: headFontStyle,
						label: 'headFontStyle',
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
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: headSpace,
							label: 'headSpace',
						},
						tablet: {
							value: headSpaceTablet,
							label: 'headSpaceTablet',
						},
						mobile: {
							value: headSpaceMobile,
							label: 'headSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<hr className="uagb-editor__separator" />
				<h2>
					{ __(
						'Description',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { subHeadingColor: value } )
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
					fontStyle={ {
						value: subHeadFontStyle,
						label: 'subHeadFontStyle',
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
					transform={ {
						value: subHeadTransform,
						label: 'subHeadTransform',
					} }
					decoration={ {
						value: subHeadDecoration,
						label: 'subHeadDecoration',
					} }
				/>
				<hr className="uagb-editor__separator" />
				<h2>
					{ __(
						'Timeline',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<ResponsiveSlider
					label={ __(
						'Border radius',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: borderRadius,
							label: 'borderRadius',
						},
						tablet: {
							value: borderRadiusTablet,
							label: 'borderRadiusTablet',
						},
						mobile: {
							value: borderRadiusMobile,
							label: 'borderRadiusMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ backgroundColor ? backgroundColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { backgroundColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		)
		};
	const dateColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Date', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ dateColor ? dateColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { dateColor: value } )
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
					fontStyle={ {
						value: dateFontStyle,
						label: 'dateFontStyle',
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
					transform={ {
						value: dateTransform,
						label: 'dateTransform',
					} }
					decoration={ {
						value: dateDecoration,
						label: 'dateDecoration',
					} }
				/>
				{ timelinAlignment !== 'center' && (
					<ResponsiveSlider
						label={ __(
							'Bottom Spacing',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							desktop: {
								value: dateBottomspace,
								label: 'dateBottomspace',
							},
							tablet: {
								value: dateBottomspaceTablet,
								label: 'dateBottomspaceTablet',
							},
							mobile: {
								value: dateBottomspaceMobile,
								label: 'dateBottomspaceMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const connectorColorSettings = () => {
		const iconColorSettings = (
			<UAGAdvancedPanelBody>
				<AdvancedPopColorControl
					label={ __(
						'Line Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorColor ? separatorColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconColor ? iconColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorBg ? separatorBg : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorBg: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorBorder ? separatorBorder : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorBorder: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);

		const iconFocusSettings = (
			<UAGAdvancedPanelBody>
				<AdvancedPopColorControl
					label={ __(
						'Line Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorFillColor ? separatorFillColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorFillColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconFocus ? iconFocus : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconFocus: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconBgFocus ? iconBgFocus : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconBgFocus: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ borderFocus ? borderFocus : '' }
					onColorChange={ ( value ) =>
						setAttributes( { borderFocus: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'focus',
							title: __(
								'Focus',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={ iconColorSettings }
					focus={ iconFocusSettings }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	let loadHeadGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadDateGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
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

	if ( subHeadLoadGoogleFonts === true ) {
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

	if ( dateLoadGoogleFonts === true ) {
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
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
						{ timelineItemSettings() }
						{ connectorSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ spacingSettings() }
						{ timelineItemColorSettings() }
						{ displayPostDate && dateColorSettings() }
						{ connectorColorSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadHeadGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadDateGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
