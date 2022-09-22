import React from 'react';
import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import { __ } from '@wordpress/i18n';
import {AlignmentToolbar, BlockControls, InspectorControls} from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';


export default function Settings( props ) {
	const { attributes, deviceType, setAttributes } = props.parentProps;
	const {
		startNumber,
		endNumber,
		align,
		totalNumber,
		numberPrefix,
		numberSuffix,
		animationDuration,
		thousandSeparator,
		layout,
		// heading
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		headingMarginLink,
		// Block Margin
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
		// Block Padding
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
		// Number
		numberLoadGoogleFonts,
		numberFontFamily,
		numberFontWeight,
		numberFontStyle,
		numberFontSize,
		numberColor,
		numberTransform,
		numberDecoration,
		numberFontSizeType,
		numberFontSizeMobile,
		numberFontSizeTablet,
		numberLineHeight,
		numberLineHeightType,
		numberLineHeightMobile,
		numberLineHeightTablet,
		numberTopMargin,
		numberRightMargin,
		numberLeftMargin,
		numberBottomMargin,
		numberTopMarginTablet,
		numberRightMarginTablet,
		numberLeftMarginTablet,
		numberBottomMarginTablet,
		numberTopMarginMobile,
		numberRightMarginMobile,
		numberLeftMarginMobile,
		numberBottomMarginMobile,
		numberMarginUnit,
		numberMarginUnitTablet,
		numberMarginUnitMobile,
		numberMarginLink,
		// prefix
		prefixRightDistance,
		prefixRightDistanceTablet,
		prefixRightDistanceMobile,
		// suffix
		suffixLeftDistance,
		suffixLeftDistanceTablet,
		suffixLeftDistanceMobile,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground
	} = attributes;


	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: layout,
					label: 'layout',
				} }
				options={ [
					{
						value: 'number',
						label: __(
							'Number',
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
						value: 'bars',
						label: __(
							'Bars',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
			<TextControl
				label={ __( 'Starting Number', 'ultimate-addons-for-gutenberg' ) }
				value={ startNumber }
				onChange={ ( value ) => setAttributes( {startNumber: value} )}
			/>
			<TextControl
				label={ __( 'Ending Number', 'ultimate-addons-for-gutenberg' ) }
				value={ endNumber }
				onChange={ ( value ) => setAttributes( {endNumber: value} )}
			/>
			{
				layout !== 'number' && (
					<TextControl
						label={ __( 'Total Number', 'ultimate-addons-for-gutenberg' ) }
						value={ totalNumber }
						onChange={ ( value ) => setAttributes( {totalNumber: value} )}
					/>
				)
			}
			<TextControl
				label={ __( 'Number Prefix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberPrefix }
				onChange={ ( value ) => setAttributes( {numberPrefix: value} )}
			/>
			<TextControl
				label={ __( 'Number Suffix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberSuffix }
				onChange={ ( value ) => setAttributes( {numberSuffix: value} )}
			/>
			<Range
				label={ __(
					'Animation Duration',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ animationDuration }
				data={ {
					value: animationDuration,
					label: 'animationDuration',
				} }
				min={ 0.1 }
				step={ 0.1 }
				max={ 25 }
				displayUnit={ false }
			/>
			<SelectControl
				label={ __( 'Thousand Separator', 'ultimate-addons-for-gutenberg' ) }
				value={ thousandSeparator }
				onChange={ ( value ) => {
					setAttributes( {thousandSeparator: value} )
				} }
				options={ [
					{ value: 'none', label: 'None' },
					{ value: ',', label: ',' },
					{ value: '.', label: '.' },
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const headlineStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Headline', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: headingLoadGoogleFonts,
					label: 'headingLoadGoogleFonts',
				} }
				fontFamily={ {
					value: headingFontFamily,
					label: 'headingFontFamily',
				} }
				fontWeight={ {
					value: headingFontWeight,
					label: 'headingFontWeight',
				} }
				fontStyle={ {
					value: headingFontStyle,
					label: 'headingFontStyle',
				} }
				transform={ {
					value: headingTransform,
					label: 'headingTransform',
				} }
				decoration={ {
					value: headingDecoration,
					label: 'headingDecoration',
				} }
				fontSizeType={ {
					value: headingFontSizeType,
					label: 'headingFontSizeType',
				} }
				fontSize={ {
					value: headingFontSize,
					label: 'headingFontSize',
				} }
				fontSizeMobile={ {
					value: headingFontSizeMobile,
					label: 'headingFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: headingFontSizeTablet,
					label: 'headingFontSizeTablet',
				} }
				lineHeightType={ {
					value: headingLineHeightType,
					label: 'headingLineHeightType',
				} }
				lineHeight={ {
					value: headingLineHeight,
					label: 'headingLineHeight',
				} }
				lineHeightMobile={ {
					value: headingLineHeightMobile,
					label: 'headingLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: headingLineHeightTablet,
					label: 'headingLineHeightTablet',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ headingColor ? headingColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { headingColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: headingTopMargin,
					label: 'headingTopMargin',
				} }
				valueRight={ {
					value: headingRightMargin,
					label: 'headingRightMargin',
				} }
				valueBottom={ {
					value: headingBottomMargin,
					label: 'headingBottomMargin',
				} }
				valueLeft={ {
					value: headingLeftMargin,
					label: 'headingLeftMargin',
				} }
				valueTopTablet={ {
					value: headingTopMarginTablet,
					label: 'headingTopMarginTablet',
				} }
				valueRightTablet={ {
					value: headingRightMarginTablet,
					label: 'headingRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: headingBottomMarginTablet,
					label: 'headingBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: headingLeftMarginTablet,
					label: 'headingLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: headingTopMarginMobile,
					label: 'headingTopMarginMobile',
				} }
				valueRightMobile={ {
					value: headingRightMarginMobile,
					label: 'headingRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: headingBottomMarginMobile,
					label: 'headingBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: headingLeftMarginMobile,
					label: 'headingLeftMarginMobile',
				} }
				unit={ {
					value: headingMarginUnit,
					label: 'headingMarginUnit',
				} }
				mUnit={ {
					value: headingMarginUnitMobile,
					label: 'headingMarginUnitMobile',
				} }
				tUnit={ {
					value: headingMarginUnitTablet,
					label: 'headingMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: headingMarginLink,
					label: 'headingMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const numberStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Number', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: numberLoadGoogleFonts,
					label: 'numberLoadGoogleFonts',
				} }
				fontFamily={ {
					value: numberFontFamily,
					label: 'numberFontFamily',
				} }
				fontWeight={ {
					value: numberFontWeight,
					label: 'numberFontWeight',
				} }
				fontStyle={ {
					value: numberFontStyle,
					label: 'numberFontStyle',
				} }
				transform={ {
					value: numberTransform,
					label: 'numberTransform',
				} }
				decoration={ {
					value: numberDecoration,
					label: 'numberDecoration',
				} }
				fontSizeType={ {
					value: numberFontSizeType,
					label: 'numberFontSizeType',
				} }
				fontSize={ {
					value: numberFontSize,
					label: 'numberFontSize',
				} }
				fontSizeMobile={ {
					value: numberFontSizeMobile,
					label: 'numberFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: numberFontSizeTablet,
					label: 'numberFontSizeTablet',
				} }
				lineHeightType={ {
					value: numberLineHeightType,
					label: 'numberLineHeightType',
				} }
				lineHeight={ {
					value: numberLineHeight,
					label: 'numberLineHeight',
				} }
				lineHeightMobile={ {
					value: numberLineHeightMobile,
					label: 'numberLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: numberLineHeightTablet,
					label: 'numberLineHeightTablet',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ numberColor ? numberColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { numberColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: numberTopMargin,
					label: 'numberTopMargin',
				} }
				valueRight={ {
					value: numberRightMargin,
					label: 'numberRightMargin',
				} }
				valueBottom={ {
					value: numberBottomMargin,
					label: 'numberBottomMargin',
				} }
				valueLeft={ {
					value: numberLeftMargin,
					label: 'numberLeftMargin',
				} }
				valueTopTablet={ {
					value: numberTopMarginTablet,
					label: 'numberTopMarginTablet',
				} }
				valueRightTablet={ {
					value: numberRightMarginTablet,
					label: 'numberRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: numberBottomMarginTablet,
					label: 'numberBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: numberLeftMarginTablet,
					label: 'numberLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: numberTopMarginMobile,
					label: 'numberTopMarginMobile',
				} }
				valueRightMobile={ {
					value: numberRightMarginMobile,
					label: 'numberRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: numberBottomMarginMobile,
					label: 'numberBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: numberLeftMarginMobile,
					label: 'numberLeftMarginMobile',
				} }
				unit={ {
					value: numberMarginUnit,
					label: 'numberMarginUnit',
				} }
				mUnit={ {
					value: numberMarginUnitMobile,
					label: 'numberMarginUnitMobile',
				} }
				tUnit={ {
					value: numberMarginUnitTablet,
					label: 'numberMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: numberMarginLink,
					label: 'numberMarginLink',
				} }
			/>
			<ResponsiveSlider
				label={ __(
					'Prefix Right Distance',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				data={ {
					desktop: {
						value: prefixRightDistance,
						label: 'prefixRightDistance',
					},
					tablet: {
						value: prefixRightDistanceTablet,
						label: 'prefixRightDistanceTablet',
					},
					mobile: {
						value: prefixRightDistanceMobile,
						label: 'prefixRightDistanceMobile',
					},
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<ResponsiveSlider
				label={ __(
					'Suffix Left Distance',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				data={ {
					desktop: {
						value: suffixLeftDistance,
						label: 'suffixLeftDistance',
					},
					tablet: {
						value: suffixLeftDistanceTablet,
						label: 'suffixLeftDistanceTablet',
					},
					mobile: {
						value: suffixLeftDistanceMobile,
						label: 'suffixLeftDistanceMobile',
					},
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
		</UAGAdvancedPanelBody>
	)

	const circleStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Circle', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Circle Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ circleSize }
				data={ {
					value: circleSize,
					label: 'circleSize',
				} }
				min={ 10 }
				step={ 10 }
				max={ 500 }
				displayUnit={ false }
			/>
			<Range
				label={ __(
					'Stroke Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ circleStokeSize }
				data={ {
					value: circleStokeSize,
					label: 'circleStokeSize',
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Foreground', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ circleForeground ? circleForeground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { circleForeground: value } )
				}
			/>
			<AdvancedPopColorControl
				label={ __( 'background', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ circleBackground ? circleBackground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { circleBackground: value } )
				}
			/>
		</UAGAdvancedPanelBody>
	)

	const barStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Bars', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Bar Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ barSize }
				data={ {
					value: barSize,
					label: 'barSize',
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Foreground', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ barForeground ? circleForeground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { barForeground: value } )
				}
			/>
			<AdvancedPopColorControl
				label={ __( 'background', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ barBackground ? barBackground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { barBackground: value } )
				}
			/>
		</UAGAdvancedPanelBody>
	)

	const spacingPanel = (
		<UAGAdvancedPanelBody
			title={__( 'Spacing', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
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
			<SpacingControl
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
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
		</UAGAdvancedPanelBody>
	);

	return (
		<React.Fragment>
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) =>
						setAttributes( { align: value } )
					}
				/>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{numberStylePanel}
						{headlineStylePanel}
						{layout === 'circle' && circleStylePanel}
						{layout === 'bars' && barStylePanel}
						{spacingPanel}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
