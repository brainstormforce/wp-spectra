import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, BlockAlignmentToolbar } from '@wordpress/block-editor';
import { Icon, SelectControl } from '@wordpress/components';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		align,
		gap,
		stack,
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontStyle,
		fontTransform,
		fontDecoration,

		alignTablet,
		alignMobile,
		fontSizeType,
		fontSize,
		fontSizeMobile,
		fontSizeTablet,
		lineHeightType,
		lineHeight,
		lineHeightMobile,
		lineHeightTablet,
	} = attributes;

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadBtnGoogleFonts = (
			<WebfontLoader config={ btnconfig }></WebfontLoader>
		);
	}

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Overall Alignment', 'ultimate-addons-for-gutenberg' ) }
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
						{
							value: 'full',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-justify' ) }
								/>
							),
							tooltip: __(
								'Full Width',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
					responsive={true}
				/>
				<SelectControl
					setAttributes={ setAttributes }
					label={ __( 'Stack Orientation', 'ultimate-addons-for-gutenberg' ) }
					value={  stack }
					onChange={ ( value ) =>
						setAttributes( { stack: value } )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'all',
							label: __(
								'All',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'desktop',
							label: __(
								'Desktop',
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
						'Note: Choose on what breakpoint the buttons will stack.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<Range
					label={ __(
						'Gap Between Buttons',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gap }
					onChange={ ( value ) => setAttributes( { gap: value } ) }
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const styleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
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
						value: loadGoogleFonts,
						label: 'loadGoogleFonts',
					} }
					fontFamily={ { value: fontFamily, label: 'fontFamily' } }
					fontWeight={ { value: fontWeight, label: 'fontWeight' } }
					fontStyle={ {
						value: fontStyle,
						label: 'fontStyle',
					} }
					transform={ {
						value: fontTransform,
						label: 'fontTransform',
					} }
					decoration={ {
						value: fontDecoration,
						label: 'fontDecoration',
					} }
					fontSizeType={ {
						value: fontSizeType,
						label: 'FontSizeType',
					} }
					fontSize={ {
						value: fontSize,
						label: 'FontSize',
					} }
					fontSizeMobile={ {
						value: fontSizeMobile,
						label: 'FontSizeMobile',
					} }
					fontSizeTablet={ {
						value: fontSizeTablet,
						label: 'FontSizeTablet',
					} }
					lineHeightType={ {
						value: lineHeightType,
						label: 'LineHeightType',
					} }
					lineHeight={ {
						value: lineHeight,
						label: 'LineHeight',
					} }
					lineHeightMobile={ {
						value: lineHeightMobile,
						label: 'LineHeightMobile',
					} }
					lineHeightTablet={ {
						value: lineHeightTablet,
						label: 'LineHeightTablet',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right', 'full' ] }
				/>
			</BlockControls>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ styleSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadBtnGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
