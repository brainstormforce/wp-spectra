import React, {Suspense} from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import Range from '@Components/range/Range.js';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';


export default function Settings( props ) {
	const { attributes, deviceType, setAttributes } = props.parentProps;
	const {
		startNumber,
		endNumber,
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
		suffixLeftDistance,
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
			<SelectControl
				label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				value={ layout }
				options={ [
					{ label: __( 'Number Counter', 'ultimate-addons-for-gutenberg' ), value: 'number' },
					{ label: __( 'Circle Counter', 'ultimate-addons-for-gutenberg' ), value: 'circle' },
					{ label: __( 'Bars Counter', 'ultimate-addons-for-gutenberg' ), value: 'bars' },
				] }
				onChange={ ( value ) => setAttributes({layout: value}) }
			/>
			<TextControl
				label={ __( 'Starting Number', 'ultimate-addons-for-gutenberg' ) }
				value={ startNumber }
				onChange={ ( value ) => setAttributes({startNumber: value})}
			/>
			<TextControl
				label={ __( 'Ending Number', 'ultimate-addons-for-gutenberg' ) }
				value={ endNumber }
				onChange={ ( value ) => setAttributes({endNumber: value})}
			/>
			{
				layout !== 'number' && (
					<TextControl
						label={ __( 'Total Number', 'ultimate-addons-for-gutenberg' ) }
						value={ totalNumber }
						onChange={ ( value ) => setAttributes({totalNumber: value})}
					/>
				)
			}
			<TextControl
				label={ __( 'Number Prefix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberPrefix }
				onChange={ ( value ) => setAttributes({numberPrefix: value})}
			/>
			<TextControl
				label={ __( 'Number Suffix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberSuffix }
				onChange={ ( value ) => setAttributes({numberSuffix: value})}
			/>
			<Range
				label={ __(
					'Animation Duration',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ animationDuration }
				onChange={ ( value ) =>
					setAttributes( { animationDuration: value } )
				}
				min={ 0.1 }
				step={ 0.1 }
				max={ 25 }
				displayUnit={ false }
			/>
			<SelectControl
				label={ __( 'Thousand Separator', 'ultimate-addons-for-gutenberg' ) }
				value={ thousandSeparator }
				onChange={ ( value ) => {
					setAttributes({thousandSeparator: value})
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
			<Suspense fallback={ lazyLoader() }>
				<TypographyControl
					label={ __(
						'Title Typography',
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
			</Suspense>
		</UAGAdvancedPanelBody>
	)

	const numberStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Number', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<Suspense fallback={ lazyLoader() }>
				<TypographyControl
					label={ __(
						'Number Typography',
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
				<Range
					label={ __(
						'Prefix Right Distance',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ prefixRightDistance }
					onChange={ ( value ) =>
						setAttributes( { prefixRightDistance: value } )
					}
					min={ 0 }
					step={ 1 }
					max={ 100 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Suffix Left Distance',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ suffixLeftDistance }
					onChange={ ( value ) =>
						setAttributes( { suffixLeftDistance: value } )
					}
					min={ 0 }
					step={ 1 }
					max={ 100 }
					displayUnit={ false }
				/>
			</Suspense>
		</UAGAdvancedPanelBody>
	)

	const circleStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Circle', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Suspense fallback={ lazyLoader() }>
				<Range
					label={ __(
						'Circle Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ circleSize }
					onChange={ ( value ) =>
						setAttributes( { circleSize: value } )
					}
					min={ 10 }
					step={ 10 }
					max={ 500 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Stoke Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ circleStokeSize }
					onChange={ ( value ) =>
						setAttributes( { circleStokeSize: value } )
					}
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
			</Suspense>
		</UAGAdvancedPanelBody>
	)

	const barStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Bars', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Suspense fallback={ lazyLoader() }>
				<Range
					label={ __(
						'Bar Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ barSize }
					onChange={ ( value ) =>
						setAttributes( { barSize: value } )
					}
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
			</Suspense>
		</UAGAdvancedPanelBody>
	)

	return (
		<React.Fragment>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{headlineStylePanel}
						{numberStylePanel}
						{layout === 'circle' && circleStylePanel}
						{layout === 'bars' && barStylePanel}
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
