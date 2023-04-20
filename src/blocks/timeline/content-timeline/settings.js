/**
 * BLOCK: Content Timeline.
 */
import { memo } from '@wordpress/element';
import UAGIconPicker from '@Components/icon-picker';
import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import renderSVG from '@Controls/renderIcon';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
import { __ } from '@wordpress/i18n';

import { dateI18n } from '@wordpress/date';
import { InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, Icon } from '@wordpress/components';

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
			timelinAlignmentTablet,
			timelinAlignmentMobile,
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
			connectorBgsizeTablet,
			connectorBgsizeMobile,
			dateBottomspace,
			dateBottomspaceTablet,
			dateBottomspaceMobile,
			align,
			alignTablet,
			alignMobile,
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
			iconSizeTablet,
			iconSizeMobile,
			borderRadius,
			borderRadiusTablet,
			borderRadiusMobile,
			iconFocus,
			iconBgFocus,
			displayPostDate,
			dateFormat,
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
			headLetterSpacing,
			headLetterSpacingTablet,
			headLetterSpacingMobile,
			headLetterSpacingType,
			subHeadLetterSpacing,
			subHeadLetterSpacingTablet,
			subHeadLetterSpacingMobile,
			subHeadLetterSpacingType,
			dateLetterSpacing,
			dateLetterSpacingTablet,
			dateLetterSpacingMobile,
			dateLetterSpacingType,
			dateDecoration,
			verticalSpace,
			verticalSpaceTablet,
			verticalSpaceMobile,
			verticalSpaceUnit,
			verticalSpaceUnitTablet,
			verticalSpaceUnitMobile,
			horizontalSpace,
			horizontalSpaceTablet,
			horizontalSpaceMobile,
			horizontalSpaceUnit,
			horizontalSpaceUnitTablet,
			horizontalSpaceUnitMobile,
		},
	} = props;

	const getborderwidth = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( props.clientId );

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.borderwidth = value;
		} );
		setAttributes( { borderwidth: value } );
	};

	const getseparatorwidth = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( props.clientId );

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.separatorwidth = value;
		} );
		setAttributes( { separatorwidth: value } );
	};

	const getdateFormat = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( props.clientId );

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.dateFormat = value;
		} );
		setAttributes( { dateFormat: value } );
	};

	const getTimelineicon = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( props.clientId );

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.icon = value;
		} );
		setAttributes( { icon: value } );
	};

	const toggleDisplayPostDate = () => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( props.clientId );

		getChildBlocks.forEach( ( UAGBcontentTimelineChild ) => {
			UAGBcontentTimelineChild.attributes.displayPostDate = displayPostDate;
		} );
		setAttributes( { displayPostDate: ! displayPostDate } );
	};

	const today = new Date();

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Orientation', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: timelinAlignment,
							label: 'timelinAlignment',
						},
						tablet: {
							value: timelinAlignmentTablet,
							label: 'timelinAlignmentTablet',
						},
						mobile: {
							value: timelinAlignmentMobile,
							label: 'timelinAlignmentMobile',
						},
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'right',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
					responsive={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: align,
							label: 'align',
						},
						tablet: {
							value: alignTablet,
							label: 'alignTablet',
						},
						mobile: {
							value: alignMobile,
							label: 'alignMobile',
						},
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'right',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
					responsive={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Arrow Alignment', 'ultimate-addons-for-gutenberg' ) }
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
							label: __( 'Bottom', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							label: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ false }
				/>
				<h2>{ __( 'Date', 'ultimate-addons-for-gutenberg' ) }</h2>
				<ToggleControl
					label={ __( 'Display Date', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostDate }
					onChange={ toggleDisplayPostDate }
				/>
				{ displayPostDate && (
					<UAGSelectControl
						label={ __( 'Date Format', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: dateFormat,
						} }
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
								label: __( 'Normal Text', 'ultimate-addons-for-gutenberg' ),
							},
						] }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
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
				<ResponsiveSlider
					label={ __( 'Timeline - Marker Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: horizontalSpace,
							label: 'horizontalSpace',
							unit: {
								value: horizontalSpaceUnit,
								label: 'horizontalSpaceUnit',
							},
						},
						tablet: {
							value: horizontalSpaceTablet,
							label: 'horizontalSpaceTablet',
							unit: {
								value: horizontalSpaceUnitTablet,
								label: 'horizontalSpaceUnitTablet',
							},
						},
						mobile: {
							value: horizontalSpaceMobile,
							label: 'horizontalSpaceMobile',
							unit: {
								value: horizontalSpaceUnitMobile,
								label: 'horizontalSpaceUnitMobile',
							},
						},
					} }
					min={ 0 }
					limitMax={ { 'px': 50, '%': 100, 'em': 50 } }
					units={ [
						{
							name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Timeline Item Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: verticalSpace,
							label: 'verticalSpace',
							unit: {
								value: verticalSpaceUnit,
								label: 'verticalSpaceUnit',
							},
						},
						tablet: {
							value: verticalSpaceTablet,
							label: 'verticalSpaceTablet',
							unit: {
								value: verticalSpaceUnitTablet,
								label: 'verticalSpaceUnitTablet',
							},
						},
						mobile: {
							value: verticalSpaceMobile,
							label: 'verticalSpaceMobile',
							unit: {
								value: verticalSpaceUnitMobile,
								label: 'verticalSpaceUnitMobile',
							},
						},
					} }
					min={ 0 }
					limitMax={ { 'px': 100, '%': 100, 'em': 100 } }
					units={ [
						{
							name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					// unit={ {
					// 	value: verticalSpaceUnit,
					// 	label: 'verticalSpaceUnit',
					// } }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const connectorSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ getTimelineicon }
				/>
				{ icon && (
					<ResponsiveSlider
						label={ __( 'Icon Size', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: iconSize,
								label: 'iconSize',
							},
							tablet: {
								value: iconSizeTablet,
								label: 'iconSizeTablet',
							},
							mobile: {
								value: iconSizeMobile,
								label: 'iconSizeMobile',
							},
						} }
						min={ 0 }
						max={ 30 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				) }
				<ResponsiveSlider
					label={ __( 'Icon Background Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: connectorBgsize,
							label: 'connectorBgsize',
						},
						tablet: {
							value: connectorBgsizeTablet,
							label: 'connectorBgsizeTablet',
						},
						mobile: {
							value: connectorBgsizeMobile,
							label: 'connectorBgsizeMobile',
						},
					} }
					min={ 0 }
					max={ 90 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __( 'Border Width', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ borderwidth }
					data={ {
						value: borderwidth,
						label: 'borderwidth',
					} }
					onChange={ getborderwidth }
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
				<Range
					label={ __( 'Connector Thickness', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ separatorwidth }
					data={ {
						value: separatorwidth,
						label: 'separatorwidth',
					} }
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
					label={ __( 'Heading Tag', 'ultimate-addons-for-gutenberg' ) }
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
							label: __( 'Span', 'ultimate-addons-for-gutenberg' ),
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
				<h2>{ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headingColor ? headingColor : '' }
					data={ {
						value: headingColor,
						label: 'headingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					letterSpacing={ {
						value: headLetterSpacing,
						label: 'headLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: headLetterSpacingTablet,
						label: 'headLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: headLetterSpacingMobile,
						label: 'headLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: headLetterSpacingType,
						label: 'headLetterSpacingType',
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
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
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
				<h2>{ __( 'Description', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					data={ {
						value: subHeadingColor,
						label: 'subHeadingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					letterSpacing={ {
						value: subHeadLetterSpacing,
						label: 'subHeadLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: subHeadLetterSpacingTablet,
						label: 'subHeadLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: subHeadLetterSpacingMobile,
						label: 'subHeadLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: subHeadLetterSpacingType,
						label: 'subHeadLetterSpacingType',
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
				<h2>{ __( 'Timeline', 'ultimate-addons-for-gutenberg' ) }</h2>
				<ResponsiveSlider
					label={ __( 'Border radius', 'ultimate-addons-for-gutenberg' ) }
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
					data={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const dateColorSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Date', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ dateColor ? dateColor : '' }
					data={ {
						value: dateColor,
						label: 'dateColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					letterSpacing={ {
						value: dateLetterSpacing,
						label: 'dateLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: dateLetterSpacingTablet,
						label: 'dateLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: dateLetterSpacingMobile,
						label: 'dateLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: dateLetterSpacingType,
						label: 'dateLetterSpacingType',
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
						label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
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
					label={ __( 'Connector Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ separatorColor ? separatorColor : '' }
					data={ {
						value: separatorColor,
						label: 'separatorColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconColor ? iconColor : '' }
					data={ {
						value: iconColor,
						label: 'iconColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ separatorBg ? separatorBg : '' }
					data={ {
						value: separatorBg,
						label: 'separatorBg',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ separatorBorder ? separatorBorder : '' }
					data={ {
						value: separatorBorder,
						label: 'separatorBorder',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);

		const iconFocusSettings = (
			<UAGAdvancedPanelBody>
				<AdvancedPopColorControl
					label={ __( 'Connector Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ separatorFillColor ? separatorFillColor : '' }
					data={ {
						value: separatorFillColor,
						label: 'separatorFillColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconFocus ? iconFocus : '' }
					data={ {
						value: iconFocus,
						label: 'iconFocus',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconBgFocus ? iconBgFocus : '' }
					data={ {
						value: iconBgFocus,
						label: 'iconBgFocus',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ borderFocus ? borderFocus : '' }
					data={ {
						value: borderFocus,
						label: 'borderFocus',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);

		return (
			<UAGAdvancedPanelBody title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'focus',
							title: __( 'Focus', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					normal={ iconColorSettings }
					focus={ iconFocusSettings }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
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
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
