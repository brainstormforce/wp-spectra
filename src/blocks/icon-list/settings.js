import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import {
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import presets from './presets';
import UAGPresets from '@Components/presets';
import renderSVG from '@Controls/renderIcon';
import { ToggleControl, Icon } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes, clientId } = props;

	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		inner_gap,
		innerGapTablet,
		innerGapMobile,
		stack,
		icon_layout,
		iconPosition,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		hideLabel,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		bgSize,
		border,
		borderTablet,
		borderMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		loadGoogleFonts,
		fontStyle,
		fontTransform,
		fontDecoration,
	} = attributes;

	let googleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		googleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	const blockControls = () => {
		return (
			<BlockControls>
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
	const changeChildAttr = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			clientId
		);

		getChildBlocks.forEach( ( iconChild ) => {
			iconChild.attributes.hideLabel = value;
		} );
		setAttributes( { hideLabel: value } );
	};

	const generalSetting = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: icon_layout,
						label: 'icon_layout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'horizontal',
							label: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'vertical',
							label: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
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
				{ 'horizontal' === icon_layout && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Stack On',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: stack,
								label: 'stack',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
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
									value: 'tablet',
									label: __(
										'Tablet + Mobile',
										'ultimate-addons-for-gutenberg'
									),
									tooltip: __(
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
									tooltip: __(
										'Mobile',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ false }
							help={ __(
								'Note: Choose on what breakpoint the Icons will stack.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
				{ ! hideLabel && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Icon Alignment',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: iconPosition,
								label: 'iconPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'top',
									label: 'Top',
									tooltip: __(
										'Top',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'middle',
									label: 'Middle',
									tooltip: __(
										'Middle',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ false }
							help={ __(
								'Note: This manages the Icon Position with respect to the Label.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Hide Labels',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ hideLabel }
					onChange={ ( value ) => changeChildAttr( value ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const commonSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Gap between Items (px)', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: gap,
							label: 'gap',
						},
						tablet: {
							value: gapTablet,
							label: 'gapTablet',
						},
						mobile: {
							value: gapMobile,
							label: 'gapMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
					help={ __(
						'Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const labelSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Gap between Icon and Label (px)', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: inner_gap,
							label: 'inner_gap',
						},
						tablet: {
							value: innerGapTablet,
							label: 'innerGapTablet',
						},
						mobile: {
							value: innerGapMobile,
							label: 'innerGapMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
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
					fontFamily={ {
						value: fontFamily,
						label: 'fontFamily',
					} }
					fontWeight={ {
						value: fontWeight,
						label: 'fontWeight',
					} }
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
						label: 'fontSizeType',
					} }
					fontSize={ { value: fontSize, label: 'fontSize' } }
					fontSizeMobile={ {
						value: fontSizeMobile,
						label: 'fontSizeMobile',
					} }
					fontSizeTablet={ {
						value: fontSizeTablet,
						label: 'fontSizeTablet',
					} }
					lineHeightType={ {
						value: lineHeightType,
						label: 'lineHeightType',
					} }
					lineHeight={ {
						value: lineHeight,
						label: 'lineHeight',
					} }
					lineHeightMobile={ {
						value: lineHeightMobile,
						label: 'lineHeightMobile',
					} }
					lineHeightTablet={ {
						value: lineHeightTablet,
						label: 'lineHeightTablet',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const iconSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon/Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: size,
							label: 'size',
						},
						tablet: {
							value: sizeTablet,
							label: 'sizeTablet',
						},
						mobile: {
							value: sizeMobile,
							label: 'sizeMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: sizeType,
						label: 'sizeType',
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
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Background Size (px)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ bgSize }
					onChange={ ( value ) => setAttributes( { bgSize: value } ) }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
					help={ __(
						'Note: Background Size option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ResponsiveSlider
					label={ __( 'Border (px)', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: border,
							label: 'border',
						},
						tablet: {
							value: borderTablet,
							label: 'borderTablet',
						},
						mobile: {
							value: borderMobile,
							label: 'borderMobile',
						},
					} }
					min={ 0 }
					max={ 10 }
					displayUnit={ false }
					setAttributes={ setAttributes }
					help={ __(
						'Note: Border option is useful when one adds border color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ResponsiveSlider
					label={ __( 'Border Radius (px)', 'ultimate-addons-for-gutenberg' ) }
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
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
					help={ __(
						'Note: Border Radius option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { presets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};
	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ generalSetting() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ iconSetting() }
						{ ! hideLabel && labelSetting() }
						{ commonSetting() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ googleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
