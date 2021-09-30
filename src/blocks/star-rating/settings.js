// Import all of our Text Options requirements.
import TypographyControl from '@Components/typography';
// Import Web font loader for google fonts.
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Icon } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import React from 'react';

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
			align,
			size,
			gap,
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
			fontStyle,
			fontTransform,
			fontDecoration,
		},
	} = props;

	let loadTitleGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	let alignmentOptions = [
		{
			value: 'left',
			icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
		},
		{
			value: 'center',
			icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
		},
		{
			value: 'right',
			icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
		},
		{
			value: 'full',
			icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
		},
	];
	if ( 'stack' === layout ) {
		alignmentOptions = [
			{
				value: 'left',
				icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
			},
			{
				value: 'center',
				icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
			},
			{
				value: 'right',
				icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
			},
		];
		if ( 'full' === align ) {
			setAttributes( {
				align: 'left',
			} );
		}
	}

	const generalSettings = (
		<PanelBody title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }>
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
				onChange={ ( value ) => setAttributes( { rating: value } ) }
				min={ 0 }
				max={ range }
				step={ 0.1 }
				displayUnit={ false }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: layout,
					label: 'layout',
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
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: align,
					label: 'align',
				} }
				options={ alignmentOptions }
				showIcons={ true }
			/>
		</PanelBody>
	);
	const titleStyling = (
		<PanelBody
			title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ titleColor }
				onColorChange={ ( value ) =>
					setAttributes( { titleColor: value } )
				}
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
			/>
			<Range
				label={ __( 'Gap', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ titleGap }
				onChange={ ( value ) => setAttributes( { titleGap: value } ) }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
			/>
		</PanelBody>
	);
	const starStyling = (
		<PanelBody
			title={ __( 'Star', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ color }
				onColorChange={ ( value ) => setAttributes( { color: value } ) }
			/>
			<AdvancedPopColorControl
				label={ __(
					'Unmarked Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ unmarkedColor }
				onColorChange={ ( value ) =>
					setAttributes( { unmarkedColor: value } )
				}
			/>
			<Range
				label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ size }
				onChange={ ( value ) => setAttributes( { size: value } ) }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
			/>
			<Range
				label={ __( 'Gap', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ gap }
				onChange={ ( value ) => setAttributes( { gap: value } ) }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
			/>
		</PanelBody>
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
						{ '' !== title && titleStyling }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadTitleGoogleFonts }
		</>
	);
};
export default React.memo( Settings );
