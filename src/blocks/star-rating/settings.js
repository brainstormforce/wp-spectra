// Import all of our Text Options requirements.
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Icon, ToggleControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import ResponsiveSlider from '@Components/responsive-slider';
import SpacingControl from '@Components/spacing-control';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { useDeviceType } from '@Controls/getPreviewType';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	props = props.parentProps;
	// Setup the attributes
	const {
		attributes,
		setAttributes,
		attributes: {
			rating,
			range,
			layout,
			layoutTablet,
			layoutMobile,
			align,
			alignTablet,
			alignMobile,
			size,
			sizeTablet,
			sizeMobile,
			gap,
			gapMobile,
			gapTablet,
			unmarkedColor,
			color,
			title,
			loadGoogleFonts,
			fontFamily,
			fontWeight,
			fontSizeType,
			fontSize,
			fontSizeMobile,
			fontSizeTablet,
			lineHeightType,
			lineHeight,
			lineHeightMobile,
			lineHeightTablet,
			titleColor,
			titleGap,
			titleGapMobile,
			titleGapTablet,
			fontStyle,
			fontTransform,
			fontDecoration,
			displayTitle,
			//letter spacing
			letterSpacing,
			letterSpacingTablet,
			letterSpacingMobile,
			letterSpacingType,
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
			starPosition,
			starPositionTablet,
			starPositionMobile
		},
	} = props;

	let alignmentOptions = [
		{
			value: 'left',
			icon: <Icon icon={ renderSVG( 'fa fa-align-left' )
		} />,
			tooltip: __(
				'Left',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'center',
			icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
			tooltip: __(
				'Center',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'right',
			icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
			tooltip: __(
				'Right',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'full',
			icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
			tooltip: __(
				'Full',
				'ultimate-addons-for-gutenberg'
			),
		},
	];

	const deviceType = useDeviceType();

	if ( 'stack' === layout || ( 'stack' === layoutTablet && 'Tablet' === deviceType ) || ( 'stack' === layoutMobile && 'Mobile' === deviceType ) ) {
		alignmentOptions = [
			{
				value: 'left',
				icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
				tooltip: __(
					'Left',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'center',
				icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
				tooltip: __(
					'Center',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'right',
				icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
				tooltip: __(
					'Right',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
		if ( 'full' === align ) {
			setAttributes( {
				align: 'left',
			} );
		}
	}

	const generalSettings = (
		<UAGAdvancedPanelBody>
			<ToggleControl
				label={ __( 'Enable Title', 'ultimate-addons-for-gutenberg' ) }
				checked={ displayTitle }
				onChange={ () =>
					setAttributes( { displayTitle: ! displayTitle } )
				}
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Range', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: range,
					label: 'range',
				} }
				options={ [
					{
						value: '5',
						label: __( '1-5', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: '10',
						label: __( '1-10', 'ultimate-addons-for-gutenberg' ),
					},
				] }
			/>
			<Range
				label={ __( 'Rating', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ rating }
				data={ {
					value: rating,
					label: 'rating',
				} }
				min={ 0 }
				max={ range }
				step={ 0.1 }
				displayUnit={ false }
			/>
			{ ( displayTitle ) && (

				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: layout,
							label: 'layout',
						},
						tablet: {
							value: layoutTablet,
							label: 'layoutTablet',
						},
						mobile: {
							value: layoutMobile,
							label: 'layoutMobile',
						},
					} }
					options={ [
						{
							value: 'inline',
							label: __( 'Inline', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'stack',
							label: __( 'Stack', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					responsive={true}
				/>

			) }
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Star Position', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: starPosition,
						label: 'starPosition',
					},
					tablet: {
						value: starPositionTablet,
						label: 'starPositionTablet',
					},
					mobile: {
						value: starPositionMobile,
						label: 'starPositionMobile',
					},
				} }
				options={ [
					{
						value: 'before',
						label: __( 'Before', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'after',
						label: __( 'After', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				responsive={true}
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
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
				options={ alignmentOptions }
				showIcons={ true }
				responsive={true}
			/>
		</UAGAdvancedPanelBody>
	);
	const titleStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ titleColor }
				data={ {
					value: titleColor,
					label: 'titleColor',
				} }
				setAttributes={ setAttributes }
			/>
			<TypographyControl
				label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
				fontSizeType={ { value: fontSizeType, label: 'fontSizeType' } }
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
				lineHeight={ { value: lineHeight, label: 'lineHeight' } }
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
			<ResponsiveSlider
				label={ __(
					'Gap Between Title And Stars',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: titleGap,
						label: 'titleGap',
					},
					tablet: {
						value: titleGapTablet,
						label: 'titleGapTablet',
					},
					mobile: {
						value: titleGapMobile,
						label: 'titleGapMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	);
	const starStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Star', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ color }
				data={ {
					value: color,
					label: 'color',
				} }
				setAttributes={ setAttributes }
			/>
			<AdvancedPopColorControl
				label={ __(
					'Unmarked Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ unmarkedColor }
				data={ {
					value: unmarkedColor,
					label: 'unmarkedColor',
				} }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Size',
					'ultimate-addons-for-gutenberg'
				) }
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
				max={ 100 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Gap Between Stars',
					'ultimate-addons-for-gutenberg'
				) }
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
			/>
		</UAGAdvancedPanelBody>
	);

	const spacingStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
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
		</UAGAdvancedPanelBody>
	);

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ starStyling }
						{ ( displayTitle && '' !== title ) && titleStyling }
						{ spacingStylePanel }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default memo( Settings );
