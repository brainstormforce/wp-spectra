import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import Border from '@Components/border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { Icon, SelectControl, ToggleControl } from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control';
import Range from '@Components/range/Range';

const Settings = ( props ) => {

	props = props.parentProps;
	const { attributes, setAttributes, deviceType } = props;
	const {
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,

		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		backgroundImageColor,
		gradientValue,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingLink,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginLink,
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		columnGapDesktop,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		contentWidth,
		isBlockRootParent,
		innerContentWidth,
		innerContentCustomWidthDesktop,
		innerContentCustomWidthTablet,
		innerContentCustomWidthMobile,
		innerContentCustomWidthType,
		bottomType,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topType,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		bottomFlip,
		topFlip,
		topContentAboveShape,
		bottomContentAboveShape,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		overlayType,
		backgroundVideoColor,
		backgroundVideo,
		topInvert,
		bottomInvert,

		textColor,
		linkColor,
		linkHoverColor,
		
	} = attributes;

	let currentDirection = directionDesktop;

	if ( attributes[ 'direction' + deviceType ] && attributes[ 'direction' + deviceType ].split( '-' )[0] ) {

		currentDirection = attributes[ 'direction' + deviceType ].split( '-' )[0];
	}

	const currentOppAxisDirection = 'row' === currentDirection ? 'column' : 'row';

	const generalSettings = () => {

		const directionOptions = [
			{
				value: 'row',
				tooltip: __( 'Row', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-row' ) }
					/>
				),
			},
			{
				value: 'column',
				tooltip: __( 'Column', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-column' ) }
					/>
				),
			},
			{
				value: 'row-reverse',
				tooltip: __( 'Row Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-row-reverse' ) }
					/>
				),
			},
			{
				value: 'column-reverse',
				tooltip: __( 'Column Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-column-reverse' ) }
					/>
				),
			},
		];

		const alignItemsOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-end` ) }
					/>
				),
			},
			{
				value: 'stretch',
				tooltip: __( 'Stretch', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-strech` ) }
					/>
				),
			},
		];

		const justifyContentOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-end` ) }
					/>
				),
			},
			{
				value: 'space-between',
				tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-between` ) }
					/>
				),
			},
			{
				value: 'space-around',
				tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-around` ) }
					/>
				),
			},
			{
				value: 'space-evenly',
				tooltip: __( 'Space Evenly', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-evenly` ) }
					/>
				),
			},
		];

		const wrapOptions = [
			{
				value: 'wrap',
				tooltip: __( 'Wrap', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-wrap' ) }
					/>
				),
			},
			{
				value: 'nowrap',
				tooltip: __( 'No Wrap', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-no-wrap' ) }
					/>
				),
			},
			{
				value: 'wrap-reverse',
				tooltip: __( 'Wrap Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-wrap-reverse' ) }
					/>
				),
			},
		];

		const contentWidthOptions = [
			{
				value: 'alignfull',
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignwide',
				label: __( 'Boxed', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'default',
				label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const innerContentWidthOptions = [
			{
				value: 'alignwide',
				label: __( 'Boxed', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignfull',
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const onWidthChange = () => {
			setAttributes( { widthSetByUser: true } );
		};

		return (
			<>
				<UAGAdvancedPanelBody
					title={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					{ isBlockRootParent &&
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Container Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: contentWidth,
									label: 'contentWidth',
								} }
								options={ contentWidthOptions }
								showIcons={ false }
								responsive={false}
							/>
							{ 'alignfull' === contentWidth &&
								<>
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __( 'Content Width', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											value: innerContentWidth,
											label: 'innerContentWidth',
										} }
										options={ innerContentWidthOptions }
										showIcons={ false }
										responsive={false}
									/>
									{ 'alignwide' === innerContentWidth &&
										<ResponsiveSlider
											label={ __( 'Content Box Width', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: innerContentCustomWidthDesktop,
													label: 'innerContentCustomWidthDesktop',
												},
												tablet: {
													value: innerContentCustomWidthTablet,
													label: 'innerContentCustomWidthTablet',
												},
												mobile: {
													value: innerContentCustomWidthMobile,
													label: 'innerContentCustomWidthMobile',
												},
											} }
											min={ 0 }
											limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
											units={ [
												{
													name: __(
														'PX',
														'ultimate-addons-for-gutenberg'
													),
													unitValue: 'px',
												},
												{
													name: __( '%', 'ultimate-addons-for-gutenberg' ),
													unitValue: '%',
												},
												{
													name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vw',
												},
											] }
											unit={ {
												value: innerContentCustomWidthType,
												label: 'innerContentCustomWidthType',
											} }
											setAttributes={ setAttributes }
										/>
									}
								</>
							}
						</>
					}
					{ ( ( isBlockRootParent && 'default' === contentWidth ) || ( ! isBlockRootParent ) ) &&
						<>
							<ResponsiveSlider
								label={ __( 'Custom Width', 'ultimate	-addons-for-gutenberg' ) }
								data={ {
									desktop: {
										value: widthDesktop,
										label: 'widthDesktop',
									},
									tablet: {
										value: widthTablet,
										label: 'widthTablet',
									},
									mobile: {
										value: widthMobile,
										label: 'widthMobile',
									},
								} }
								min={ 0 }
								unit={ {
									value: widthType,
									label: 'widthType',
								} }
								limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
								units={ [
									{
										name: __(
											'PX',
											'ultimate-addons-for-gutenberg'
										),
										unitValue: 'px',
									},
									{
										name: __( '%', 'ultimate-addons-for-gutenberg' ),
										unitValue: '%',
									},
									{
										name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
										unitValue: 'vw',
									},
								] }
								setAttributes={ setAttributes }
								onChange={onWidthChange}
							/>
						</>
					}
					{ isBlockRootParent && 'default' === contentWidth &&
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Content Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: innerContentWidth,
									label: 'innerContentWidth',
								} }
								options={ innerContentWidthOptions }
								showIcons={ false }
								responsive={false}
							/>
							{ 'alignwide' === innerContentWidth &&
								<ResponsiveSlider
									label={ __( 'Content Box Width', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										desktop: {
											value: innerContentCustomWidthDesktop,
											label: 'innerContentCustomWidthDesktop',
										},
										tablet: {
											value: innerContentCustomWidthTablet,
											label: 'innerContentCustomWidthTablet',
										},
										mobile: {
											value: innerContentCustomWidthMobile,
											label: 'innerContentCustomWidthMobile',
										},
									} }
									min={ 0 }
									limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
									units={ [
										{
											name: __(
												'PX',
												'ultimate-addons-for-gutenberg'
											),
											unitValue: 'px',
										},
										{
											name: __( '%', 'ultimate-addons-for-gutenberg' ),
											unitValue: '%',
										},
										{
											name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
											unitValue: 'vw',
										},
									] }
									unit={ {
										value: innerContentCustomWidthType,
										label: 'innerContentCustomWidthType',
									} }
									setAttributes={ setAttributes }
								/>
							}
						</>
					}
					<ResponsiveSlider
						label={ __( 'Minimum Height', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: minHeightDesktop,
								label: 'minHeightDesktop',
							},
							tablet: {
								value: minHeightTablet,
								label: 'minHeightTablet',
							},
							mobile: {
								value: minHeightMobile,
								label: 'minHeightMobile',
							},
						} }
						min={ 0 }
						limitMax={ { px: 1000, vh: 100 } }
						unit={ {
							value: minHeightType,
							label: 'minHeightType',
						} }
						units={ [
							{
								name: __(
									'PX',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'px',
							},
							{
								name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'vh',
							},
						] }
						setAttributes={ setAttributes }
					/>
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody
					title={ __( 'Flex Properties', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Direction', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: directionDesktop,
								label: 'directionDesktop',
							},
							tablet: {
								value: directionTablet,
								label: 'directionTablet',
							},
							mobile: {
								value: directionMobile,
								label: 'directionMobile',
							},
						} }
						options={ directionOptions }
						showIcons={ true }
						responsive={true}
					/>

					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Align Items', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: alignItemsDesktop,
								label: 'alignItemsDesktop',
							},
							tablet: {
								value: alignItemsTablet,
								label: 'alignItemsTablet',
							},
							mobile: {
								value: alignItemsMobile,
								label: 'alignItemsMobile',
							},
						} }
						options={ alignItemsOptions }
						showIcons={ true }
						responsive={true}
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Justify Content', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: justifyContentDesktop,
								label: 'justifyContentDesktop',
							},
							tablet: {
								value: justifyContentTablet,
								label: 'justifyContentTablet',
							},
							mobile: {
								value: justifyContentMobile,
								label: 'justifyContentMobile',
							},
						} }
						options={ justifyContentOptions }
						showIcons={ true }
						responsive={true}
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Wrap', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: wrapDesktop,
								label: 'wrapDesktop',
							},
							tablet: {
								value: wrapTablet,
								label: 'wrapTablet',
							},
							mobile: {
								value: wrapMobile,
								label: 'wrapMobile',
							},
						} }
						options={ wrapOptions }
						showIcons={ true }
						responsive={true}
						help={ __( 'Define whether the items are forced in a single line (No Wrap) or can be flowed into multiple lines (Wrap)', 'ultimate-addons-for-gutenberg' ) }
					/>
					{ ( 'wrap' === attributes[ 'wrap' + deviceType ] || 'wrap-reverse' === attributes[ 'wrap' + deviceType ] ) &&
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Align Content', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: alignContentDesktop,
									label: 'alignContentDesktop',
								},
								tablet: {
									value: alignContentTablet,
									label: 'alignContentTablet',
								},
								mobile: {
									value: alignContentMobile,
									label: 'alignContentMobile',
								},
							} }
							options={ justifyContentOptions }
							showIcons={ true }
							responsive={true}
						/>
					}
				</UAGAdvancedPanelBody>
			</>
		);
	};

	const backgroundSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					backgroundSize={{
						desktop: {
							value: backgroundSizeDesktop,
							label: 'backgroundSizeDesktop',
						},
						tablet: {
							value: backgroundSizeTablet,
							label: 'backgroundSizeTablet',
						},
						mobile: {
							value: backgroundSizeMobile,
							label: 'backgroundSizeMobile',
						},
					}}
					backgroundCustomSize={{
						desktop: {
							value: backgroundCustomSizeDesktop,
							label: 'backgroundCustomSizeDesktop',
						},
						tablet: {
							value: backgroundCustomSizeTablet,
							label: 'backgroundCustomSizeTablet',
						},
						mobile: {
							value: backgroundCustomSizeMobile,
							label: 'backgroundCustomSizeMobile',
						},
					}}
					backgroundCustomSizeType={{
						value: backgroundCustomSizeType,
						label: 'backgroundCustomSizeType'
					}}
					backgroundRepeat={{
						desktop: {
							value: backgroundRepeatDesktop,
							label: 'backgroundRepeatDesktop',
						},
						tablet: {
							value: backgroundRepeatTablet,
							label: 'backgroundRepeatTablet',
						},
						mobile: {
							value: backgroundRepeatMobile,
							label: 'backgroundRepeatMobile',
						},
					}}
					backgroundAttachment={{
						desktop: {
							value: backgroundAttachmentDesktop,
							label: 'backgroundAttachmentDesktop',
						},
						tablet: {
							value: backgroundAttachmentTablet,
							label: 'backgroundAttachmentTablet',
						},
						mobile: {
							value: backgroundAttachmentMobile,
							label: 'backgroundAttachmentMobile',
						},
					}}
					backgroundPosition={{
						desktop: {
							value: backgroundPositionDesktop,
							label: 'backgroundPositionDesktop',
						},
						tablet: {
							value: backgroundPositionTablet,
							label: 'backgroundPositionTablet',
						},
						mobile: {
							value: backgroundPositionMobile,
							label: 'backgroundPositionMobile',
						},
					}}
					backgroundImage={{
						desktop: {
							value: backgroundImageDesktop,
							label: 'backgroundImageDesktop',
						},
						tablet: {
							value: backgroundImageTablet,
							label: 'backgroundImageTablet',
						},
						mobile: {
							value: backgroundImageMobile,
							label: 'backgroundImageMobile',
						},
					}}
					imageResponsive={true}
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					overlayType={{
						value: overlayType,
						label: 'overlayType'
					}}
					backgroundVideoType={ {
						value: true,
					} }
					backgroundVideo={ {
						value: backgroundVideo,
						label: 'backgroundVideo',
					} }
					backgroundVideoColor={ {
						value: backgroundVideoColor,
						label: 'backgroundVideoColor',
					} }
					onOpacityChange = { ( opacity ) => setAttributes( { backgroundVideoOpacity: opacity } ) }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const colorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ textColor }
					onColorChange={ ( value ) =>
						setAttributes( { textColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Link Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ linkColor }
					onColorChange={ ( value ) =>
						setAttributes( { linkColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Link Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ linkHoverColor }
					onColorChange={ ( value ) =>
						setAttributes( { linkHoverColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const borderSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					disabledBorderTitle= {true}
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
	}

	const boxShadowSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<BoxShadowControl
					setAttributes={ setAttributes }
					label={ __(
						'Box Shadow',
						'ultimate-addons-for-gutenberg'
					) }
					boxShadowColor={ {
						value: boxShadowColor,
						label: 'boxShadowColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowHOffset={ {
						value: boxShadowHOffset,
						label: 'boxShadowHOffset',
						title: __(
							'Horizontal',
							'ultimate-addons-for-gutenberg'
						),
					} }
					boxShadowVOffset={ {
						value: boxShadowVOffset,
						label: 'boxShadowVOffset',
						title: __(
							'Vertical',
							'ultimate-addons-for-gutenberg'
						),
					} }
					boxShadowBlur={ {
						value: boxShadowBlur,
						label: 'boxShadowBlur',
						title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowSpread={ {
						value: boxShadowSpread,
						label: 'boxShadowSpread',
						title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowPosition={ {
						value: boxShadowPosition,
						label: 'boxShadowPosition',
						title: __(
							'Position',
							'ultimate-addons-for-gutenberg'
						),
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const spacingSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Row Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowGapDesktop,
							label: 'rowGapDesktop',
						},
						tablet: {
							value: rowGapTablet,
							label: 'rowGapTablet',
						},
						mobile: {
							value: rowGapMobile,
							label: 'rowGapMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: rowGapType,
						label: 'rowGapType',
					} }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Column Gap', 'ultimate	-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: columnGapDesktop,
							label: 'columnGapDesktop',
						},
						tablet: {
							value: columnGapTablet,
							label: 'columnGapTablet',
						},
						mobile: {
							value: columnGapMobile,
							label: 'columnGapMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: columnGapType,
						label: 'columnGapType',
					} }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPaddingDesktop,
						label: 'topPaddingDesktop',
					} }
					valueRight={ {
						value: rightPaddingDesktop,
						label: 'rightPaddingDesktop',
					} }
					valueBottom={ {
						value: bottomPaddingDesktop,
						label: 'bottomPaddingDesktop',
					} }
					valueLeft={ {
						value: leftPaddingDesktop,
						label: 'leftPaddingDesktop',
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
						value: paddingType,
						label: 'paddingType',
					} }
					mUnit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					tUnit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					attributes={ attributes }
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
						value: topMarginDesktop,
						label: 'topMarginDesktop',
					} }
					valueRight={ {
						value: rightMarginDesktop,
						label: 'rightMarginDesktop',
					} }
					valueBottom={ {
						value: bottomMarginDesktop,
						label: 'bottomMarginDesktop',
					} }
					valueLeft={ {
						value: leftMarginDesktop,
						label: 'leftMarginDesktop',
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
						value: marginType,
						label: 'marginType',
					} }
					mUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					tUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const shapeDividersSettings = () => {
		const dividers = [
			{
				value: 'none',
				label: __( 'None', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'tilt',
				label: __( 'Tilt', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'mountains',
				label: __( 'Mountains', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'wave_brush',
				label: __( 'Wave Brush', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'waves',
				label: __( 'Waves', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'wave_pattern',
				label: __( 'Waves Pattern', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'triangle',
				label: __( 'Triangle', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'drops',
				label: __( 'Drops', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'clouds',
				label: __( 'Clouds', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'zigzag',
				label: __( 'ZigZag', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'pyramids',
				label: __( 'Pyramids', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'triangle_asymmetrical',
				label: __(
					'Triangle Asymmetrical',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'tilt_opacity',
				label: __( 'Tilt Opacity', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'fan_opacity',
				label: __( 'Fan Opacity', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve',
				label: __( 'Curve', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve_asymmetrical',
				label: __(
					'Curve Asymmetrical',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'curve_reverse',
				label: __( 'Curve Reverse', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve_asym_reverse',
				label: __(
					'Curve Asymmetrical Reverse',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'arrow',
				label: __( 'Arrow', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'arrow_split',
				label: __( 'Arrow Split', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'book',
				label: __( 'Book', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const topSettings = (
			<>
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ topType }
					onChange={ ( value ) =>
						setAttributes( { topType: value } )
					}
					options={ dividers }
				/>
				{ topType !== 'none' && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ topColor }
							onColorChange={ ( value ) =>
								setAttributes( { topColor: value } )
							}
						/>
						<Range
							label={ __(
								'Width',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ topWidth }
							onChange={ ( value ) =>
								setAttributes( { topWidth: value } )
							}
							min={ 100 }
							max={ 2000 }
							displayUnit={ false }
						/>
						<ResponsiveSlider
							label={ __(
								'Height',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: topHeight,
									label: 'topHeight',
								},
								tablet: {
									value: topHeightTablet,
									label: 'topHeightTablet',
								},
								mobile: {
									value: topHeightMobile,
									label: 'topHeightMobile',
								},
							} }
							min={ 0 }
							max={ 500 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ToggleControl
							label={ __(
								'Flip',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topFlip }
							onChange={ () =>
								setAttributes( { topFlip: ! topFlip } )
							}
						/>
						<ToggleControl
							label={ __(
								'Invert',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topInvert }
							onChange={ () =>
								setAttributes( {
									topInvert: ! topInvert,
								} )
							}
						/>
						<ToggleControl
							label={ __(
								'Bring To Front',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topContentAboveShape }
							onChange={ () =>
								setAttributes( {
									topContentAboveShape: ! topContentAboveShape,
								} )
							}
						/>
					</>
				) }
			</>
		);

		const bottomSettings = (
			<>
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ bottomType }
					onChange={ ( value ) =>
						setAttributes( { bottomType: value } )
					}
					options={ dividers }
				/>
				{ bottomType !== 'none' && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ bottomColor }
							onColorChange={ ( value ) =>
								setAttributes( { bottomColor: value } )
							}
						/>
						<Range
							label={ __(
								'Width',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ bottomWidth }
							onChange={ ( value ) =>
								setAttributes( { bottomWidth: value } )
							}
							min={ 100 }
							max={ 2000 }
							displayUnit={ false }
						/>
						<ResponsiveSlider
							label={ __(
								'Height',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: bottomHeight,
									label: 'bottomHeight',
								},
								tablet: {
									value: bottomHeightTablet,
									label: 'bottomHeightTablet',
								},
								mobile: {
									value: bottomHeightMobile,
									label: 'bottomHeightMobile',
								},
							} }
							min={ 0 }
							max={ 500 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ToggleControl
							label={ __(
								'Flip',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomFlip }
							onChange={ () =>
								setAttributes( { bottomFlip: ! bottomFlip } )
							}
						/>
						<ToggleControl
							label={ __(
								'Invert',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomInvert }
							onChange={ () =>
								setAttributes( {
									bottomInvert: ! bottomInvert,
								} )
							}
						/>
						<ToggleControl
							label={ __(
								'Bring To Front',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomContentAboveShape }
							onChange={ () =>
								setAttributes( {
									bottomContentAboveShape: ! bottomContentAboveShape,
								} )
							}
						/>
					</>
				) }
			</>
		);

		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Shape Dividers',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<UAGTabsControl
					tabs={ [
						{
							name: 'top',
							title: __( 'Top', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'bottom',
							title: __( 'Bottom', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					top={ topSettings }
					bottom={ bottomSettings }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ backgroundSettings() }
						{ colorSettings() }
						{ borderSettings() }
						{ boxShadowSettings() }
						{ shapeDividersSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};
export default React.memo( Settings );
