import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import UAGIconPicker from '@Components/icon-picker';
import renderSVG from '@Controls/renderIcon';
import WebfontLoader from '@Components/typography/fontloader';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveSlider from '@Components/responsive-slider';
import Border from '@Components/border';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';

import {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	Icon,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		align,
		disableBullets,
		makeCollapsible,
		initialCollapse,
		icon,
		iconColor,
		bulletColor,
		iconSize,
		smoothScroll,
		smoothScrollOffset,
		smoothScrollDelay,
		scrollToTop,
		scrollToTopColor,
		scrollToTopBgColor,
		customWidth,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthTypeMobile,
		widthTypeTablet,
		widthTypeDesktop,
		tColumnsDesktop,
		tColumnsTablet,
		tColumnsMobile,
		backgroundColor,
		linkColor,
		linkHoverColor,
		headingColor,
		paddingTypeMobile,
		paddingTypeTablet,
		paddingTypeDesktop,
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
		marginLink,
		paddingLink,
		headingBottom,
		contentPaddingDesktop,
		contentPaddingTablet,
		contentPaddingMobile,
		contentPaddingTypeMobile,
		contentPaddingTypeTablet,
		contentPaddingTypeDesktop,
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
		marginTypeMobile,
		marginTypeTablet,
		marginTypeDesktop,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontSubset,
		fontSize,
		fontSizeType,
		fontSizeTablet,
		fontSizeMobile,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontSubset,
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
		mappingHeaders,
		headingAlignment,
	} = attributes;

	let loadGFonts;
	let headingloadGFonts;

	if ( loadGoogleFonts === true ) {
		const config = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadGFonts = <WebfontLoader config={ config }></WebfontLoader>;
	}

	if ( headingLoadGoogleFonts === true ) {
		const headingconfig = {
			google: {
				families: [
					headingFontFamily +
						( headingFontWeight ? ':' + headingFontWeight : '' ),
				],
			},
		};

		headingloadGFonts = (
			<WebfontLoader config={ headingconfig }></WebfontLoader>
		);
	}

	const getGeneralPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<h2>
					{ __(
						'Choose heading tags to generate table',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				{ mappingHeaders.map( ( a, i ) => (
					<PanelRow key={ i }>
						<label htmlFor={ `ub_toggle_h${ i + 1 }` }>{ `H${
							i + 1
						}` }</label>
						<ToggleControl
							id={ `ub_toggle_h${ i + 1 }` }
							checked={ a }
							onChange={ () =>
								setAttributes( {
									mappingHeaders: [
										...mappingHeaders.slice( 0, i ),
										! mappingHeaders[ i ],
										...mappingHeaders.slice( i + 1 ),
									],
								} )
							}
						/>
					</PanelRow>
				) ) }
			</PanelBody>
		);
	};

	const getScrollPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Scroll', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Smooth Scroll',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ smoothScroll }
					help={ __(
						'This will be in action only in Front End.',
						'ultimate-addons-for-gutenberg'
					) }
					onChange={ () =>
						setAttributes( { smoothScroll: ! smoothScroll } )
					}
				/>
				{ smoothScroll && (
					<>
						<Range
							label={ __(
								'Smooth Scroll Offset (px)',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ smoothScrollOffset }
							onChange={ ( value ) =>
								setAttributes( { smoothScrollOffset: value } )
							}
							min={ 0 }
							max={ 1000 }
							displayUnit={ false }
						/>
						<Range
							label={ __(
								'Smooth Scroll Offset (px)',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ smoothScrollDelay }
							onChange={ ( value ) =>
								setAttributes( { smoothScrollDelay: value } )
							}
							min={ 100 }
							max={ 5000 }
							displayUnit={ false }
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Show Scroll To Top',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ scrollToTop }
					help={ __(
						'This will add a scroll to top arrow at the bottom of page.',
						'ultimate-addons-for-gutenberg'
					) }
					onChange={ () =>
						setAttributes( { scrollToTop: ! scrollToTop } )
					}
				/>
			</PanelBody>
		);
	};

	const getTitle = () => {
		return (
			<PanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
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
					attributes={ attributes }
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
					fontSubset={ {
						value: headingFontSubset,
						label: 'headingFontSubset',
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
				<Range
					label={ __(
						'Bottom Space',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ headingBottom }
					onChange={ ( value ) =>
						setAttributes( { headingBottom: value } )
					}
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};

	const getContent = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Title Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: headingAlignment,
						label: 'headingAlignment',
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
				<ResponsiveSlider
					label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: tColumnsDesktop,
							label: 'tColumnsDesktop',
						},
						tablet: {
							value: tColumnsTablet,
							label: 'tColumnsTablet',
						},
						mobile: {
							value: tColumnsMobile,
							label: 'tColumnsMobile',
						},
					} }
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Gap Between Lists',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: contentPaddingDesktop,
							label: 'contentPaddingDesktop',
							unit: {
								value: contentPaddingTypeDesktop,
								label: 'contentPaddingTypeDesktop',
							},
						},
						tablet: {
							value: contentPaddingTablet,
							label: 'contentPaddingTablet',
							unit: {
								value: contentPaddingTypeTablet,
								label: 'contentPaddingTypeTablet',
							},
						},
						mobile: {
							value: contentPaddingMobile,
							label: 'contentPaddingMobile',
							unit: {
								value: contentPaddingTypeMobile,
								label: 'contentPaddingTypeMobile',
							},
						},
					} }
					min={ 0 }
					max={ 100 }
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
				<ToggleControl
					label={ __(
						'Custom Width',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ customWidth }
					onChange={ () =>
						setAttributes( { customWidth: ! customWidth } )
					}
					help={ __(
						"Table's width will be auto if this is kept off.",
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ customWidth && (
					<ResponsiveSlider
						label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: widthDesktop,
								label: 'widthDesktop',
								unit: {
									value: widthTypeDesktop,
									label: 'widthTypeDesktop',
								},
								min: 0,
								max: maxDesk,
							},
							tablet: {
								value: widthTablet,
								label: 'widthTablet',
								unit: {
									value: widthTypeTablet,
									label: 'widthTypeTablet',
								},
								min: 0,
								max: maxTab,
							},
							mobile: {
								value: widthMobile,
								label: 'widthMobile',
								unit: {
									value: widthTypeMobile,
									label: 'widthTypeMobile',
								},
								min: 0,
								max: maxMob,
							},
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
								name: __(
									'%',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: '%',
							},
						] }
						setAttributes={ setAttributes }
					/>
				) }
				<ToggleControl
					label={ __(
						'Disable Bullet Points',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ disableBullets }
					onChange={ () =>
						setAttributes( {
							disableBullets: ! disableBullets,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Make Content Collapsible',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ makeCollapsible }
					onChange={ () =>
						setAttributes( {
							makeCollapsible: ! makeCollapsible,
						} )
					}
				/>
				{ makeCollapsible && (
					<>
						<ToggleControl
							label={ __(
								'Keep Collapsed Initially',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ initialCollapse }
							onChange={ () =>
								setAttributes( {
									initialCollapse: ! initialCollapse,
								} )
							}
						/>
						<UAGIconPicker
							label={ __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ icon }
							onChange={ ( value ) =>
								setAttributes( { icon: value } )
							}
						/>
						<Range
							label={ __(
								'Icon Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ iconSize }
							onChange={ ( value ) =>
								setAttributes( { iconSize: value } )
							}
							min={ 0 }
							max={ 300 }
							displayUnit={ false }
						/>
					</>
				) }
			</PanelBody>
		);
	};

	const getBulletStyle = () => {
		return (
			<PanelBody
				title={ __( 'Bullet Points', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ bulletColor ? bulletColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { bulletColor: value } )
					}
				/>
			</PanelBody>
		);
	};

	const getIconStyle = () => {
		return (
			<PanelBody
				title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconColor ? iconColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconColor: value } )
					}
				/>
			</PanelBody>
		);
	};

	const getContentStyle = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
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
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ linkColor ? linkColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( { linkColor: value } )
							}
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ linkHoverColor ? linkHoverColor : '' }
							onColorChange={ ( value ) =>
								setAttributes( { linkHoverColor: value } )
							}
						/>
					}
					disableBottomSeparator={ false }
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
					fontSubset={ {
						value: fontSubset,
						label: 'fontSubset',
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
			</PanelBody>
		);
	};

	const getScrollToTop = () => {
		return (
			<PanelBody
				title={ __( 'Scroll To Top', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<>
					<AdvancedPopColorControl
						label={ __(
							'Icon Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ scrollToTopColor ? scrollToTopColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { scrollToTopColor: value } )
						}
					/>
					<AdvancedPopColorControl
						label={ __(
							'Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							scrollToTopBgColor ? scrollToTopBgColor : ''
						}
						onColorChange={ ( value ) =>
							setAttributes( { scrollToTopBgColor: value } )
						}
					/>
				</>
			</PanelBody>
		);
	};

	const maxDesk = '%' === widthTypeDesktop ? 100 : 1000;
	const maxTab = '%' === widthTypeTablet ? 100 : 1000;
	const maxMob = '%' === widthTypeMobile ? 100 : 1000;

	const getBackground = () => {
		return (
			<PanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ backgroundColor ? backgroundColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { backgroundColor: value } )
					}
				/>
			</PanelBody>
		);
	};

	const getBorder = () => {
		return (
			<PanelBody
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
			</PanelBody>
		);
	};

	const getSpacing = () => {
		return (
			<PanelBody
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
						value: paddingTypeDesktop,
						label: 'paddingTypeDesktop',
					} }
					mUnit={ {
						value: paddingTypeMobile,
						label: 'paddingTypeMobile',
					} }
					tUnit={ {
						value: paddingTypeTablet,
						label: 'paddingTypeTablet',
					} }
					deviceType={ deviceType }
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
						value: marginTypeDesktop,
						label: 'marginTypeDesktop',
					} }
					mUnit={ {
						value: marginTypeMobile,
						label: 'marginTypeMobile',
					} }
					tUnit={ {
						value: marginTypeTablet,
						label: 'marginTypeTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ getGeneralPanelBody() }
						{ getScrollPanelBody() }
						{ getContent() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ getTitle() }
						{ getContentStyle() }
						{ ! disableBullets && getBulletStyle() }
						{ makeCollapsible && getIconStyle() }
						{ scrollToTop && getScrollToTop() }
						{ getBackground() }
						{ getBorder() }
						{ getSpacing() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadGFonts }
			{ headingloadGFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
