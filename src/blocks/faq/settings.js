/**
 * BLOCK: FAQ
 */
import { memo } from '@wordpress/element';
import renderSVG from '@Controls/renderIcon';
import TypographyControl from '@Components/typography';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import ResponsiveBorder from '@Components/responsive-border';
import { select } from '@wordpress/data';
import UAGIconPicker from '@Components/icon-picker';
import UAGTabsControl from '@Components/tabs';

import { InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, Icon } from '@wordpress/components';
import presets from './presets';
import UAGPresets from '@Components/presets';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	
	const { attributes, setAttributes, deviceType, clientId } = props;
	const {
		layout,
		inactiveOtherItems,
		expandFirstItem,
		enableSchemaSupport,
		rowsGap,
		rowsGapTablet,
		rowsGapMobile,
		rowsGapUnit,
		columnsGap,
		columnsGapTablet,
		columnsGapMobile,
		columnsGapUnit,
		align,
		enableSeparator,
		boxBgType,
		boxBgHoverType,
		boxBgColor,
		questionTextColor,
		questionTextBgColor,
		questionTextActiveColor,
		questionTextActiveBgColor,
		questionPaddingTypeDesktop,
		questionPaddingTypeMobile,
		questionPaddingTypeTablet,
		answerTextColor,
		answerPaddingTypeDesktop,
		answerPaddingTypeMobile,
		answerPaddingTypeTablet,
		iconColor,
		iconActiveColor,
		gapBtwIconQUestion,
		gapBtwIconQUestionTablet,
		gapBtwIconQUestionMobile,
		questionloadGoogleFonts,
		questionFontFamily,
		questionFontWeight,
		questionFontSizeType,
		questionFontSize,
		questionFontSizeMobile,
		questionFontSizeTablet,
		questionLineHeightType,
		questionLineHeight,
		questionLineHeightMobile,
		questionLineHeightTablet,
		answerloadGoogleFonts,
		answerFontFamily,
		answerFontWeight,
		answerFontSizeType,
		answerFontSize,
		answerFontSizeMobile,
		answerFontSizeTablet,
		answerLineHeightType,
		answerLineHeight,
		answerLineHeightMobile,
		answerLineHeightTablet,
		icon,
		iconActive,
		iconAlign,
		iconSizeType,
		iconSizeMobile,
		iconSizeTablet,
		iconSize,
		columns,
		tcolumns,
		mcolumns,
		enableToggle,
		equalHeight,
		questionLeftPaddingTablet,
		hquestionPaddingTablet,
		vquestionPaddingTablet,
		questionBottomPaddingTablet,
		questionLeftPaddingDesktop,
		hquestionPaddingDesktop,
		vquestionPaddingDesktop,
		questionBottomPaddingDesktop,
		questionLeftPaddingMobile,
		hquestionPaddingMobile,
		vquestionPaddingMobile,
		questionBottomPaddingMobile,
		headingTag,
		answerSpacingLink,
		questionSpacingLink,
		answerTopPadding,
		answerRightPadding,
		answerBottomPadding,
		answerLeftPadding,
		answerTopPaddingTablet,
		answerRightPaddingTablet,
		answerBottomPaddingTablet,
		answerLeftPaddingTablet,
		answerTopPaddingMobile,
		answerRightPaddingMobile,
		answerBottomPaddingMobile,
		answerLeftPaddingMobile,
		answerFontStyle,
		answerTransform,
		answerDecoration,
		questionFontStyle,
		questionTransform,
		questionDecoration,
		// letter spacing
		questionLetterSpacing,
		questionLetterSpacingTablet,
		questionLetterSpacingMobile,
		questionLetterSpacingType,
		answerLetterSpacing,
		answerLetterSpacingTablet,
		answerLetterSpacingMobile,
		answerLetterSpacingType,
		boxBgHoverColor,
		iconBgColor,
		iconBgSize,
		iconBgSizeTablet,
		iconBgSizeMobile,
		iconBgSizeType,
		// padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		blockPaddingLink,
		// margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		blockMarginLink,
	} = attributes;

	const onchangeIcon = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );
		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.icon = value;
		} );

		setAttributes( { icon: value } );
	};
	const onchangeActiveIcon = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.iconActive = value;
		} );

		setAttributes( { iconActive: value } );
	};
	const onchangeLayout = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.layout = value;
		} );

		setAttributes( { layout: value } );
	};
	const onchangeTag = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.headingTag = value;
		} );

		setAttributes( { headingTag: value } );
	};

	const faqGeneralSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: layout,
						label: 'layout',
					} }
					onChange={ onchangeLayout }
					options={ [
						{
							value: 'accordion',
							label: __( 'Accordion', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'grid',
							label: __( 'Grid', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ 'accordion' === layout && (
					<>
						<ToggleControl
							label={ __( 'Collapse other items', 'ultimate-addons-for-gutenberg' ) }
							checked={ inactiveOtherItems }
							onChange={ () =>
								setAttributes( {
									inactiveOtherItems: ! inactiveOtherItems,
								} )
							}
						/>
						{ true === inactiveOtherItems && (
							<ToggleControl
								label={ __( 'Expand First Item', 'ultimate-addons-for-gutenberg' ) }
								checked={ expandFirstItem }
								onChange={ () =>
									setAttributes( {
										expandFirstItem: ! expandFirstItem,
									} )
								}
							/>
						) }
						<ToggleControl
							label={ __( 'Enable Toggle', 'ultimate-addons-for-gutenberg' ) }
							checked={ enableToggle }
							onChange={ () =>
								setAttributes( {
									enableToggle: ! enableToggle,
								} )
							}
						/>
					</>
				) }
				<ToggleControl
					label={ __( 'Enable Schema Support', 'ultimate-addons-for-gutenberg' ) }
					checked={ enableSchemaSupport }
					onChange={ () =>
						setAttributes( {
							enableSchemaSupport: ! enableSchemaSupport,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Enable Separator', 'ultimate-addons-for-gutenberg' ) }
					checked={ enableSeparator }
					onChange={ () => setAttributes( { enableSeparator: ! enableSeparator } ) }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Question Tag', 'ultimate-addons-for-gutenberg' ) }
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
					onChange={ ( value ) => onchangeTag( value ) }
				/>
				{ 'grid' === layout && (
					<ResponsiveSlider
						label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: columns,
								label: 'columns',
								min: 1,
								max: 6,
							},
							tablet: {
								value: tcolumns,
								label: 'tcolumns',
								min: 1,
								max: 4,
							},
							mobile: {
								value: mcolumns,
								label: 'mcolumns',
								min: 1,
								max: 2,
							},
						} }
						min={ 1 }
						max={ 6 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				) }
				{ 'grid' === layout && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: align,
							label: 'align',
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
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const faqIconSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<UAGIconPicker
					label={ __( 'Inactive Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ ( value ) => onchangeIcon( value ) }
				/>
				<UAGIconPicker
					label={ __( 'Active Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ iconActive }
					onChange={ ( value ) => onchangeActiveIcon( value ) }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Icon Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: iconAlign,
						label: 'iconAlign',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'row',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'row-reverse',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const faqQuestionSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Question', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: questionloadGoogleFonts,
						label: 'questionloadGoogleFonts',
					} }
					fontFamily={ {
						value: questionFontFamily,
						label: 'questionFontFamily',
					} }
					fontWeight={ {
						value: questionFontWeight,
						label: 'questionFontWeight',
					} }
					fontStyle={ {
						value: questionFontStyle,
						label: 'questionFontStyle',
					} }
					transform={ {
						value: questionTransform,
						label: 'questionTransform',
					} }
					decoration={ {
						value: questionDecoration,
						label: 'questionDecoration',
					} }
					fontSizeType={ {
						value: questionFontSizeType,
						label: 'questionFontSizeType',
					} }
					fontSize={ {
						value: questionFontSize,
						label: 'questionFontSize',
					} }
					fontSizeMobile={ {
						value: questionFontSizeMobile,
						label: 'questionFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: questionFontSizeTablet,
						label: 'questionFontSizeTablet',
					} }
					lineHeightType={ {
						value: questionLineHeightType,
						label: 'questionLineHeightType',
					} }
					lineHeight={ {
						value: questionLineHeight,
						label: 'questionLineHeight',
					} }
					lineHeightMobile={ {
						value: questionLineHeightMobile,
						label: 'questionLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: questionLineHeightTablet,
						label: 'questionLineHeightTablet',
					} }
					letterSpacing={ {
						value: questionLetterSpacing,
						label: 'questionLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: questionLetterSpacingTablet,
						label: 'questionLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: questionLetterSpacingMobile,
						label: 'questionLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: questionLetterSpacingType,
						label: 'questionLetterSpacingType',
					} }
				/>
				{ 'accordion' === layout && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'active',
								title: __( 'Active/Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={
							<>
								<AdvancedPopColorControl
									label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ questionTextColor }
									data={ {
										value: questionTextColor,
										label: 'questionTextColor',
									} }
									setAttributes={ setAttributes }
								/>
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ questionTextBgColor }
									data={ {
										value: questionTextBgColor,
										label: 'questionTextBgColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						}
						active={
							<>
								<AdvancedPopColorControl
									label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ questionTextActiveColor }
									data={ {
										value: questionTextActiveColor,
										label: 'questionTextActiveColor',
									} }
									setAttributes={ setAttributes }
								/>
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ questionTextActiveBgColor }
									data={ {
										value: questionTextActiveBgColor,
										label: 'questionTextActiveBgColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						}
					/>
				) }
				{ 'grid' === layout && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ questionTextColor }
							data={ {
								value: questionTextColor,
								label: 'questionTextColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ questionTextBgColor }
							data={ {
								value: questionTextBgColor,
								label: 'questionTextBgColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				) }
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: vquestionPaddingDesktop,
						label: 'vquestionPaddingDesktop',
					} }
					valueRight={ {
						value: hquestionPaddingDesktop,
						label: 'hquestionPaddingDesktop',
					} }
					valueBottom={ {
						value: questionBottomPaddingDesktop,
						label: 'questionBottomPaddingDesktop',
					} }
					valueLeft={ {
						value: questionLeftPaddingDesktop,
						label: 'questionLeftPaddingDesktop',
					} }
					valueTopTablet={ {
						value: vquestionPaddingTablet,
						label: 'vquestionPaddingTablet',
					} }
					valueRightTablet={ {
						value: hquestionPaddingTablet,
						label: 'hquestionPaddingTablet',
					} }
					valueBottomTablet={ {
						value: questionBottomPaddingTablet,
						label: 'questionBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: questionLeftPaddingTablet,
						label: 'questionLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: vquestionPaddingMobile,
						label: 'vquestionPaddingMobile',
					} }
					valueRightMobile={ {
						value: hquestionPaddingMobile,
						label: 'hquestionPaddingMobile',
					} }
					valueBottomMobile={ {
						value: questionBottomPaddingMobile,
						label: 'questionBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: questionLeftPaddingMobile,
						label: 'questionLeftPaddingMobile',
					} }
					unit={ {
						value: questionPaddingTypeDesktop,
						label: 'questionPaddingTypeDesktop',
					} }
					mUnit={ {
						value: questionPaddingTypeMobile,
						label: 'questionPaddingTypeMobile',
					} }
					tUnit={ {
						value: questionPaddingTypeTablet,
						label: 'questionPaddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: questionSpacingLink,
						label: 'questionSpacingLink',
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
			</UAGAdvancedPanelBody>
		);
	};
	const faqAnswerSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Answer', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ answerTextColor }
					data={ {
						value: answerTextColor,
						label: 'answerTextColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: answerloadGoogleFonts,
						label: 'answerloadGoogleFonts',
					} }
					fontFamily={ {
						value: answerFontFamily,
						label: 'answerFontFamily',
					} }
					fontWeight={ {
						value: answerFontWeight,
						label: 'answerFontWeight',
					} }
					fontStyle={ {
						value: answerFontStyle,
						label: 'answerFontStyle',
					} }
					transform={ {
						value: answerTransform,
						label: 'answerTransform',
					} }
					decoration={ {
						value: answerDecoration,
						label: 'answerDecoration',
					} }
					fontSizeType={ {
						value: answerFontSizeType,
						label: 'answerFontSizeType',
					} }
					fontSize={ {
						value: answerFontSize,
						label: 'answerFontSize',
					} }
					fontSizeMobile={ {
						value: answerFontSizeMobile,
						label: 'answerFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: answerFontSizeTablet,
						label: 'answerFontSizeTablet',
					} }
					lineHeightType={ {
						value: answerLineHeightType,
						label: 'answerLineHeightType',
					} }
					lineHeight={ {
						value: answerLineHeight,
						label: 'answerLineHeight',
					} }
					lineHeightMobile={ {
						value: answerLineHeightMobile,
						label: 'answerLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: answerLineHeightTablet,
						label: 'answerLineHeightTablet',
					} }
					letterSpacing={ {
						value: answerLetterSpacing,
						label: 'answerLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: answerLetterSpacingTablet,
						label: 'answerLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: answerLetterSpacingMobile,
						label: 'answerLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: answerLetterSpacingType,
						label: 'answerLetterSpacingType',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: answerTopPadding,
						label: 'answerTopPadding',
					} }
					valueRight={ {
						value: answerRightPadding,
						label: 'answerRightPadding',
					} }
					valueBottom={ {
						value: answerBottomPadding,
						label: 'answerBottomPadding',
					} }
					valueLeft={ {
						value: answerLeftPadding,
						label: 'answerLeftPadding',
					} }
					valueTopTablet={ {
						value: answerTopPaddingTablet,
						label: 'answerTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: answerRightPaddingTablet,
						label: 'answerRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: answerBottomPaddingTablet,
						label: 'answerBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: answerLeftPaddingTablet,
						label: 'answerLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: answerTopPaddingMobile,
						label: 'answerTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: answerRightPaddingMobile,
						label: 'answerRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: answerBottomPaddingMobile,
						label: 'answerBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: answerLeftPaddingMobile,
						label: 'answerLeftPaddingMobile',
					} }
					unit={ {
						value: answerPaddingTypeDesktop,
						label: 'answerPaddingTypeDesktop',
					} }
					mUnit={ {
						value: answerPaddingTypeMobile,
						label: 'answerPaddingTypeMobile',
					} }
					tUnit={ {
						value: answerPaddingTypeTablet,
						label: 'answerPaddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: answerSpacingLink,
						label: 'answerSpacingLink',
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
			</UAGAdvancedPanelBody>
		);
	};
	const commonStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
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
					normal={
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: boxBgType,
									label: 'boxBgType',
								} }
								className="uagb-multi-button-alignment-control"
								options={ [
									{
										value: 'transparent',
										label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
									},
									{
										value: 'color',
										label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
									},
								] }
							/>
							{ boxBgType === 'color' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ boxBgColor }
									data={ {
										value: boxBgColor,
										label: 'boxBgColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
					hover={
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: boxBgHoverType,
									label: 'boxBgHoverType',
								} }
								className="uagb-multi-button-alignment-control"
								options={ [
									{
										value: 'transparent',
										label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
									},
									{
										value: 'color',
										label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
									},
								] }
							/>
							{ boxBgHoverType === 'color' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ boxBgHoverColor }
									data={ {
										value: boxBgHoverColor,
										label: 'boxBgHoverColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
				/>
				<ResponsiveSlider
					label={ __( 'Rows Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowsGap,
							label: 'rowsGap',
						},
						tablet: {
							value: rowsGapTablet,
							label: 'rowsGapTablet',
						},
						mobile: {
							value: rowsGapMobile,
							label: 'rowsGapMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: rowsGapUnit,
						label: 'rowsGapUnit',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
				{ 'grid' === layout && (
					<>
						<ResponsiveSlider
							label={ __( 'Columns Gap', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: columnsGap,
									label: 'columnsGap',
								},
								tablet: {
									value: columnsGapTablet,
									label: 'columnsGapTablet',
								},
								mobile: {
									value: columnsGapMobile,
									label: 'columnsGapMobile',
								},
							} }
							min={ 0 }
							max={ 50 }
							unit={ {
								value: columnsGapUnit,
								label: 'columnsGapUnit',
							} }
							units={ [
								{
									name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
									unitValue: 'px',
								},
							] }
							setAttributes={ setAttributes }
						/>
						<ToggleControl
							label={ __( 'Equal Height', 'ultimate-addons-for-gutenberg' ) }
							checked={ equalHeight }
							onChange={ () => setAttributes( { equalHeight: ! equalHeight } ) }
						/>
					</>
				) }
				<hr className="uagb-editor__separator" />
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'overall' }
					disabledBorderTitle={ false }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const iconStyle = () => {
		if ( 'accordion' !== layout ) {
			return '';
		}
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
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
					max={ 100 }
					unit={ {
						value: iconSizeType,
						label: 'iconSizeType',
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
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Background Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: iconBgSize,
							label: 'iconBgSize',
						},
						tablet: {
							value: iconBgSizeTablet,
							label: 'iconBgSizeTablet',
						},
						mobile: {
							value: iconBgSizeMobile,
							label: 'iconBgSizeMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					unit={ {
						value: iconBgSizeType,
						label: 'iconBgSizeType',
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
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Gap between Icon and Question', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: gapBtwIconQUestion,
							label: 'gapBtwIconQUestion',
						},
						tablet: {
							value: gapBtwIconQUestionTablet,
							label: 'gapBtwIconQUestionTablet',
						},
						mobile: {
							value: gapBtwIconQUestionMobile,
							label: 'gapBtwIconQUestionMobile',
						},
					} }
					min={ -100 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconColor }
					data={ {
						value: iconColor,
						label: 'iconColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Active Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconActiveColor }
					data={ {
						value: iconActiveColor,
						label: 'iconActiveColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconBgColor }
					data={ {
						value: iconBgColor,
						label: 'iconBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'icon' }
					disabledBorderTitle={ false }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const presetSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGPresets setAttributes={ setAttributes } presets={ presets } presetInputType="radioImage" />
			</UAGAdvancedPanelBody>
		);
	};

	const spacingStylePanel = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<SpacingControl
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: blockTopPadding,
						label: 'blockTopPadding',
					} }
					valueRight={ {
						value: blockRightPadding,
						label: 'blockRightPadding',
					} }
					valueBottom={ {
						value: blockBottomPadding,
						label: 'blockBottomPadding',
					} }
					valueLeft={ {
						value: blockLeftPadding,
						label: 'blockLeftPadding',
					} }
					valueTopTablet={ {
						value: blockTopPaddingTablet,
						label: 'blockTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: blockRightPaddingTablet,
						label: 'blockRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: blockBottomPaddingTablet,
						label: 'blockBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: blockLeftPaddingTablet,
						label: 'blockLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: blockTopPaddingMobile,
						label: 'blockTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: blockRightPaddingMobile,
						label: 'blockRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: blockBottomPaddingMobile,
						label: 'blockBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: blockLeftPaddingMobile,
						label: 'blockLeftPaddingMobile',
					} }
					unit={ {
						value: blockPaddingUnit,
						label: 'blockPaddingUnit',
					} }
					mUnit={ {
						value: blockPaddingUnitMobile,
						label: 'blockPaddingUnitMobile',
					} }
					tUnit={ {
						value: blockPaddingUnitTablet,
						label: 'blockPaddingUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: blockPaddingLink,
						label: 'blockPaddingLink',
					} }
				/>
				<SpacingControl
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: blockTopMargin,
						label: 'blockTopMargin',
					} }
					valueRight={ {
						value: blockRightMargin,
						label: 'blockRightMargin',
					} }
					valueBottom={ {
						value: blockBottomMargin,
						label: 'blockBottomMargin',
					} }
					valueLeft={ {
						value: blockLeftMargin,
						label: 'blockLeftMargin',
					} }
					valueTopTablet={ {
						value: blockTopMarginTablet,
						label: 'blockTopMarginTablet',
					} }
					valueRightTablet={ {
						value: blockRightMarginTablet,
						label: 'blockRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: blockBottomMarginTablet,
						label: 'blockBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: blockLeftMarginTablet,
						label: 'blockLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: blockTopMarginMobile,
						label: 'blockTopMarginMobile',
					} }
					valueRightMobile={ {
						value: blockRightMarginMobile,
						label: 'blockRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: blockBottomMarginMobile,
						label: 'blockBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: blockLeftMarginMobile,
						label: 'blockLeftMarginMobile',
					} }
					unit={ {
						value: blockMarginUnit,
						label: 'blockMarginUnit',
					} }
					mUnit={ {
						value: blockMarginUnitMobile,
						label: 'blockMarginUnitMobile',
					} }
					tUnit={ {
						value: blockMarginUnitTablet,
						label: 'blockMarginUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: blockMarginLink,
						label: 'blockMarginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ faqGeneralSettings() }
						{ 'accordion' === layout && faqIconSettings() }
						{ presetSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ commonStyle() }
						{ iconStyle() }
						{ faqQuestionSettings() }
						{ faqAnswerSettings() }
						{ spacingStylePanel() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
