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
	BlockControls,
	Inserter
} from '@wordpress/block-editor';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import Border from '@Components/border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { Icon, Toolbar } from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';

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
		backgroundImage,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
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
		innerContentCustomWidthType
	} = attributes;

	let currentDirection = 'row';

	if ( attributes[ 'direction' + deviceType ].split( '-' )[0] ) {

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
				tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
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
				tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
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

		const widthOptions = [
			{
				value: 25,
				tooltip: __( '25%', 'ultimate-addons-for-gutenberg' ),
				label: __( '25%', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 33,
				tooltip: __( '33%', 'ultimate-addons-for-gutenberg' ),
				label: __( '33%', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 50,
				label: __( '50%', 'ultimate-addons-for-gutenberg' ),
				tooltip: __( '50%', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 66,
				label: __( '66%', 'ultimate-addons-for-gutenberg' ),
				tooltip: __( '66%', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 75,
				label: __( '75%', 'ultimate-addons-for-gutenberg' ),
				tooltip: __( '75%', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 100,
				label: __( '100%', 'ultimate-addons-for-gutenberg' ),
				tooltip: __( '100%', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const contentWidthOptions = [
			{
				value: 'default',
				tooltip: __( 'Default', 'ultimate-addons-for-gutenberg' ),
				label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignwide',
				tooltip: __( 'Align Wide', 'ultimate-addons-for-gutenberg' ),
				label: __( 'Align Wide', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignfull',
				tooltip: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const innerContentWidthOptions = [
			{
				value: 'alignwide',
				tooltip: __( 'Align Wide', 'ultimate-addons-for-gutenberg' ),
				label: __( 'Align Wide', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignfull',
				tooltip: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
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
								label={ __( 'Outer Container Width', 'ultimate-addons-for-gutenberg' ) }
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
										label={ __( 'Inner Content Width', 'ultimate-addons-for-gutenberg' ) }
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
											label={ __( 'Inner Content Custom Width', 'ultimate-addons-for-gutenberg' ) }
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
											max={ 1200 }
											unit={ {
												value: innerContentCustomWidthType,
												label: 'innerContentCustomWidthType',
											} }
											units={ [
												{
													name: __(
														'PX',
														'ultimate-addons-for-gutenberg'
													),
													unitValue: 'px',
												},
											] }
											setAttributes={ setAttributes }
										/>
									}
								</>
							}
						</>
					}
					{ ( ( isBlockRootParent && 'default' === contentWidth ) || ( ! isBlockRootParent ) ) &&
						<>
							{ '%' === widthType &&
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
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
									options={ widthOptions }
									showIcons={ false }
									responsive={true}
									onChange={onWidthChange}
								/>
							}
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
								limitMax={ { 'px': 1600, '%': 100 } }
								unit={ {
									value: widthType,
									label: 'widthType',
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
								onChange={onWidthChange}
							/>
						</>
					}
					{ isBlockRootParent && 'default' === contentWidth &&
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Inner Content Width', 'ultimate-addons-for-gutenberg' ) }
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
									label={ __( 'Inner Content Custom Width', 'ultimate-addons-for-gutenberg' ) }
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
									max={ 1200 }
									unit={ {
										value: innerContentCustomWidthType,
										label: 'innerContentCustomWidthType',
									} }
									units={ [
										{
											name: __(
												'PX',
												'ultimate-addons-for-gutenberg'
											),
											unitValue: 'px',
										},
									] }
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
					{ 'wrap' === attributes[ 'wrap' + deviceType ] &&
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
				initialOpen={ false }
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
					backgroundSize={ {
						value: backgroundSize,
						label: 'backgroundSize',
					} }
					backgroundRepeat={ {
						value: backgroundRepeat,
						label: 'backgroundRepeat',
					} }
					backgroundAttachment={ {
						value: backgroundAttachment,
						label: 'backgroundAttachment',
					} }
					backgroundPosition={ {
						value: backgroundPosition,
						label: 'backgroundPosition',
					} }
					backgroundImage={ {
						value: backgroundImage,
						label: 'backgroundImage',
					} }
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					backgroundVideoType={ {
						value: false,
					} }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const borderSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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

	return (
		<Suspense fallback={ lazyLoader() }>
			<BlockControls>
				<Toolbar className="uag-container-block-inserter">
					<Inserter
						clientId = { props.clientId }
						rootClientId = { props.clientId }
						__experimentalIsQuick = {true}
						position="bottom right"
					/>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ backgroundSettings() }
						{ borderSettings() }
						{ boxShadowSettings() }
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
