/**
 * BLOCK: FAQ
 */

import renderSVG from '@Controls/renderIcon';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import Border from '@Components/border';
import { select } from '@wordpress/data';
import UAGIconPicker from '@Components/icon-picker';
import UAGTabsControl from '@Components/tabs';

import { InspectorControls } from '@wordpress/block-editor';

import {
	SelectControl,
	ToggleControl,
	Icon,
} from '@wordpress/components';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;
	const {
		layout,
		inactiveOtherItems,
		expandFirstItem,
		enableSchemaSupport,
		rowsGap,
		columnsGap,
		align,
		enableSeparator,
		boxBgColor,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		questionTextColor,
		questionTextActiveColor,
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
	} = attributes;

	const onchangeIcon = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);
		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.icon = value;
		} );

		setAttributes( { icon: value } );
	};
	const onchangeActiveIcon = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.iconActive = value;
		} );

		setAttributes( { iconActive: value } );
	};
	const onchangeLayout = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.layout = value;
		} );

		setAttributes( { layout: value } );
	};
	const onchangeTag = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

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
							label: __(
								'Accordion',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'grid',
							label: __(
								'Grid',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'accordion' === layout && (
					<>
						<ToggleControl
							label={ __(
								'Collapse other items',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ inactiveOtherItems }
							onChange={ () =>
								setAttributes( {
									inactiveOtherItems: ! inactiveOtherItems,
								} )
							}
						/>
						{ true === inactiveOtherItems && (
							<ToggleControl
								label={ __(
									'Expand First Item',
									'ultimate-addons-for-gutenberg'
								) }
								checked={ expandFirstItem }
								onChange={ () =>
									setAttributes( {
										expandFirstItem: ! expandFirstItem,
									} )
								}
							/>
						) }
						<ToggleControl
							label={ __(
								'Enable Toggle',
								'ultimate-addons-for-gutenberg'
							) }
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
					label={ __(
						'Enable Schema Support',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableSchemaSupport }
					onChange={ () =>
						setAttributes( {
							enableSchemaSupport: ! enableSchemaSupport,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Enable Separator',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableSeparator }
					onChange={ () =>
						setAttributes( { enableSeparator: ! enableSeparator } )
					}
				/>
				<SelectControl
					label={ __(
						'Question Tag',
						'ultimate-addons-for-gutenberg'
					) }
					value={ headingTag }
					onChange={ ( value ) => onchangeTag( value ) }
					options={ [
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
				{ 'grid' === layout && (
					<ResponsiveSlider
						label={ __(
							'Columns',
							'ultimate-addons-for-gutenberg'
						) }
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
						label={ __(
							'Alignment',
							'ultimate-addons-for-gutenberg'
						) }
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
					label={ __( 'Expand', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ ( value ) => onchangeIcon( value ) }
				/>
				<UAGIconPicker
					label={ __( 'Collapse', 'ultimate-addons-for-gutenberg' ) }
					value={ iconActive }
					onChange={ ( value ) => onchangeActiveIcon( value ) }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Icon Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: iconAlign,
						label: 'iconAlign',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'row',
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
							value: 'row-reverse',
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
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
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
				/>
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
							name: 'active',
							title: __(
								'Active/Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<AdvancedPopColorControl
							label={ __(
								'Text Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ questionTextColor }
							onColorChange={ ( value ) =>
								setAttributes( { questionTextColor: value } )
							}
						/>
					}
					active={
						<AdvancedPopColorControl
							label={ __(
								'Text Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ questionTextActiveColor }
							onColorChange={ ( value ) =>
								setAttributes( {
									questionTextActiveColor: value,
								} )
							}
						/>
					}
				/>
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
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
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
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ answerTextColor }
					onColorChange={ ( value ) =>
						setAttributes( { answerTextColor: value } )
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
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
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
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ boxBgColor }
					onColorChange={ ( value ) =>
						setAttributes( { boxBgColor: value } )
					}
				/>
				<Range
					label={ __(
						'Rows Gap (px)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ rowsGap }
					onChange={ ( value ) =>
						setAttributes( { rowsGap: value } )
					}
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
				{ 'grid' === layout && (
					<>
						<Range
							label={ __(
								'Columns Gap (px)',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ columnsGap }
							onChange={ ( value ) =>
								setAttributes( { columnsGap: value } )
							}
							min={ 0 }
							max={ 50 }
							displayUnit={ false }
						/>
						<ToggleControl
							label={ __(
								'Equal Height',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ equalHeight }
							onChange={ () =>
								setAttributes( { equalHeight: ! equalHeight } )
							}
						/>
					</>
				) }
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Border', 'ultimate-addons-for-gutenberg' ) }</h2>
				<Border
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
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
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Gap between Icon and Question',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gapBtwIconQUestion }
					onChange={ ( value ) =>
						setAttributes( { gapBtwIconQUestion: value } )
					}
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Expand Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconColor }
					onColorChange={ ( value ) =>
						setAttributes( { iconColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Collapse Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconActiveColor }
					onColorChange={ ( value ) =>
						setAttributes( { iconActiveColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};

	let loadQuestionGoogleFonts;
	let loadAnswerGoogleFonts;

	if ( questionloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [
					questionFontFamily +
						( questionFontWeight ? ':' + questionFontWeight : '' ),
				],
			},
		};

		loadQuestionGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	if ( answerloadGoogleFonts === true ) {
		const aconfig = {
			google: {
				families: [
					answerFontFamily +
						( answerFontWeight ? ':' + answerFontWeight : '' ),
				],
			},
		};

		loadAnswerGoogleFonts = (
			<WebfontLoader config={ aconfig }></WebfontLoader>
		);
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ faqGeneralSettings() }
						{ 'accordion' === layout && faqIconSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ commonStyle() }
						{ iconStyle() }
						{ faqQuestionSettings() }
						{ faqAnswerSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadQuestionGoogleFonts }
			{ loadAnswerGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
