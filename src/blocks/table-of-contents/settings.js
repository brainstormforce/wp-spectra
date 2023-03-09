import { __ } from '@wordpress/i18n';
import TypographyControl from '@Components/typography';
import UAGIconPicker from '@Components/icon-picker';
import WebfontLoader from '@Components/typography/fontloader';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveSlider from '@Components/responsive-slider';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveBorder from '@Components/responsive-border';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import UAGTabsControl from '@Components/tabs';
import renderSVG from '@Controls/renderIcon';
import {
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import MultiButtonsControl from '@Components/multi-buttons-control';
import {
	PanelRow,
	ToggleControl,
	Icon
} from '@wordpress/components';
import UAGSelectControl from '@Components/select-control';
import { memo } from '@wordpress/element';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		align,
		headingAlignment,
		overallAlign,
		disableBullets,
		makeCollapsible,
		initialCollapse,
		icon,
		iconColor,
		bulletColor,
		iconSize,
		smoothScroll,
		smoothScrollOffset,
		smoothScrollOffsetType,
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
		headingBottomTablet,
		headingBottomMobile,
		headingBottomType,
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
		loadGoogleFonts,
		fontFamily,
		fontWeight,
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
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
		mappingHeaders,
		fontStyle,
		fontTransform,
		fontDecoration,
		headingFontStyle,
		headingTransform,
		headingDecoration,
		headingLetterSpacing,
		headingLetterSpacingTablet,
		headingLetterSpacingMobile,
		headingLetterSpacingType,
		letterSpacing,
		letterSpacingTablet,
		letterSpacingMobile,
		letterSpacingType,
		markerView,
		// Separator
		separatorStyle,
		separatorColor,
		separatorHColor,
		separatorHeight,
		separatorHeightType,
		separatorSpace,
		separatorSpaceTablet,
		separatorSpaceMobile,
		separatorSpaceType
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
			<UAGAdvancedPanelBody
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
			</UAGAdvancedPanelBody>
		);
	};

	const getScrollPanelBody = () => {
		return (
			<UAGAdvancedPanelBody
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
								'Smooth Scroll Offset',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ smoothScrollOffset }
							data={ {
								value: smoothScrollOffset,
								label: 'smoothScrollOffset',
							} }
							min={ 0 }
							max={ 1000 }
							unit={ {
								value: smoothScrollOffsetType,
								label: 'smoothScrollOffsetType',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
							] }
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
			</UAGAdvancedPanelBody>
		);
	};

	const getGeneral = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ backgroundColor ? backgroundColor : '' }
					data={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					setAttributes={ setAttributes }
				/>
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
				<ResponsiveBorder
					setAttributes={ setAttributes }
					borderStyleLabel={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					borderWidthLabel={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
					borderRadiusLabel={ __( 'Radius', 'ultimate-addons-for-gutenberg' ) }
					borderColorLabel={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					borderHoverColorLabel={ __(
						'Hover Color',
						'ultimate-addons-for-gutenberg'
					) }
					prefix={ 'overall' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getTitle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
					letterSpacing={ {
						value: headingLetterSpacing,
						label: 'headingLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: headingLetterSpacingTablet,
						label: 'headingLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: headingLetterSpacingMobile,
						label: 'headingLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: headingLetterSpacingType,
						label: 'headingLetterSpacingType',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: headingBottom,
							label: 'headingBottom',
						},
						tablet: {
							value: headingBottomTablet,
							label: 'headingBottomTablet',
						},
						mobile: {
							value: headingBottomMobile,
							label: 'headingBottomMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: headingBottomType,
						label: 'headingBottomType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
				{ makeCollapsible &&
				<AdvancedPopColorControl
					label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ iconColor ? iconColor : '' }
					data={ {
						value: iconColor,
						label: 'iconColor',
					} }
					setAttributes={ setAttributes }
				/> }
			</UAGAdvancedPanelBody>
		);
	};

	const getContent = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Overall Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: overallAlign,
						label: 'overallAlign',
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
				{ ! makeCollapsible  && (
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
				)}
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'List Alignment',
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
					limitMin={ { 'px': 0, '%': 0 } }
					limitMax={ { 'px': 1500, '%': 100 } }
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
						'Disable Marker',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ disableBullets }
					onChange={ () =>
						setAttributes( {
							disableBullets: ! disableBullets,
						} )
					}
				/>
				{
					!disableBullets && (
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Marker View',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: markerView,
								label: 'markerView',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'disc',
									label: __(
										'Bullets',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'decimal',
									label: __(
										'Numbers',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
					)
				}
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
							data={ {
								value: iconSize,
								label: 'iconSize',
							} }
							min={ 0 }
							max={ 300 }
							displayUnit={ false }
						/>
					</>
				) }
				<UAGSelectControl
					label={ __(
						'Separator Style',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: separatorStyle,
						label: 'separatorStyle',
					} }
					setAttributes={ setAttributes }
					help={ ( 'double' === separatorStyle ) ? __(
						'Please set the separator thickness to 3px or more to perceive the Double border.',
						'ultimate-addons-for-gutenberg'
					) : false }
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const separatorSettings = () => {

		const tabsToUse = [
			{
				name: 'normal',
				title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
			},
			{
				name: 'hover',
				title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
			},
		];

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Range
					label={ __(
						'Thickness',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorHeight }
					data={ {
						value: separatorHeight,
						label: 'separatorHeight',
					} }
					min={ 0 }
					max={ 20 }
					unit={ {
						value: separatorHeightType,
						label: 'separatorHeightType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
				/>
				<UAGTabsControl
					tabs={ tabsToUse }
					normal={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								separatorColor ? separatorColor : ''
							}
							data={ {
								value: separatorColor,
								label: 'separatorColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ separatorHColor ? separatorHColor : '' }
							data={ {
								value: separatorHColor,
								label: 'separatorHColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					active={ '' }
					disableBottomSeparator={ false }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: separatorSpace,
							label: 'separatorSpace',
						},
						tablet: {
							value: separatorSpaceTablet,
							label: 'separatorSpaceTablet',
						},
						mobile: {
							value: separatorSpaceMobile,
							label: 'separatorSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: separatorSpaceType,
						label: 'separatorSpaceType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getBulletStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'List', 'ultimate-addons-for-gutenberg' ) }
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
							data={ {
								value: linkColor,
								label: 'linkColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ linkHoverColor ? linkHoverColor : '' }
							data={ {
								value: linkHoverColor,
								label: 'linkHoverColor',
							} }
							setAttributes={ setAttributes }
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
					letterSpacing={ {
						value: letterSpacing,
						label: 'letterSpacing',
					} }
					letterSpacingTablet={ {
						value: letterSpacingTablet,
						label: 'letterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: letterSpacingMobile,
						label: 'letterSpacingMobile',
					} }
					letterSpacingType={ {
						value: letterSpacingType,
						label: 'letterSpacingType',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Inner Content Spacing', 'ultimate-addons-for-gutenberg' ) }
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
				{ ! disableBullets &&
				<AdvancedPopColorControl
					label={ __( 'Marker Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ bulletColor ? bulletColor : '' }
					data={ {
						value: bulletColor,
						label: 'bulletColor',
					} }
					setAttributes={ setAttributes }
				/>
				}

			</UAGAdvancedPanelBody>
		);
	};




	const getScrollToTop = () => {
		return (
			<UAGAdvancedPanelBody
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
						data={ {
							value: scrollToTopColor,
							label: 'scrollToTopColor',
						} }
						setAttributes={ setAttributes }
					/>
					<AdvancedPopColorControl
						label={ __(
							'Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							scrollToTopBgColor ? scrollToTopBgColor : ''
						}
						data={ {
							value: scrollToTopBgColor,
							label: 'scrollToTopBgColor',
						} }
						setAttributes={ setAttributes }
					/>
				</>
			</UAGAdvancedPanelBody>
		);
	};

	const maxDesk = '%' === widthTypeDesktop ? 100 : 1000;
	const maxTab = '%' === widthTypeTablet ? 100 : 1000;
	const maxMob = '%' === widthTypeMobile ? 100 : 1000;

	return (
			<>
			{ ! customWidth && (
				<BlockControls>
					<AlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } );
						} }
						controls={ [ 'left', 'center', 'right' ] }
					/>
				</BlockControls>
			)}
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ getGeneralPanelBody() }
						{ getContent() }
						{ getScrollPanelBody() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ getGeneral() }
						{ getTitle() }
						{ getBulletStyle() }
						{ scrollToTop && getScrollToTop() }
						{ 'none' !== separatorStyle &&
							separatorSettings()
						}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadGFonts }
			{ headingloadGFonts }
			</>
	);
};

export default memo( Settings );
