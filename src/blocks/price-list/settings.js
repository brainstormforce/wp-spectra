import { useEffect, memo } from '@wordpress/element';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import renderSVG from '@Controls/renderIcon';
import presets from './presets';
import UAGPresets from '@Components/presets';

const maxColumns = 3;

import { InspectorControls } from '@wordpress/block-editor';

import { Icon, ToggleControl } from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {

	const { setAttributes, attributes, deviceType, clientId } = props;

	// Setup the attributes.
	const {
		menu_item_count,
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		columns,
		tcolumns,
		mcolumns,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		priceColor,
		descColor,
		titleColor,
		seperatorStyle,
		seperatorWidth,
		seperatorWidthTablet,
		seperatorWidthMobile,
		seperatorThickness,
		seperatorColor,
		priceLoadGoogleFonts,
		titleLoadGoogleFonts,
		descLoadGoogleFonts,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleFontFamily,
		titleFontWeight,
		titleFontStyle,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		priceFontSizeType,
		priceFontSize,
		priceFontSizeTablet,
		priceFontSizeMobile,
		priceFontFamily,
		priceFontWeight,
		priceFontStyle,
		priceLineHeightType,
		priceLineHeight,
		priceLineHeightTablet,
		priceLineHeightMobile,
		descFontSizeType,
		descFontSize,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descFontStyle,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		headingTag,
		imagePosition,
		imageAlignment,
		imageSize,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		stack,
		imageWidthType,
		seperatorWidthType,
		rowGapType,
		columnGapType,
		titleSpaceType,
		contentPaddingTop,
		contentPaddingRight,
		contentPaddingBottom,
		contentPaddingLeft,
		contentPaddingTopTablet,
		contentPaddingRightTablet,
		contentPaddingBottomTablet,
		contentPaddingLeftTablet,
		contentPaddingTopMobile,
		contentPaddingRightMobile,
		contentPaddingBottomMobile,
		contentPaddingLeftMobile,
		contentPaddingUnit,
		contentMobilePaddingUnit,
		contentTabletPaddingUnit,
		contentSpacingLink,
		imgPaddingTop,
		imgPaddingRight,
		imgPaddingBottom,
		imgPaddingLeft,
		imgPaddingTopTablet,
		imgPaddingRightTablet,
		imgPaddingBottomTablet,
		imgPaddingLeftTablet,
		imgPaddingTopMobile,
		imgPaddingRightMobile,
		imgPaddingBottomMobile,
		imgPaddingLeftMobile,
		imgPaddingUnit,
		imgMobilePaddingUnit,
		imgTabletPaddingUnit,
		imgSpacingLink,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		priceTransform,
		priceDecoration,
		headingAlign,
		imgAlign,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		priceLetterSpacing,
		priceLetterSpacingTablet,
		priceLetterSpacingMobile,
		priceLetterSpacingType,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		showImage,
	} = attributes;

	const setImgAlign = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imgAlign = value;
		} );
		setAttributes( { imgAlign: value } );
	};

	const setShowImage = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.showImage = value;
		} );
		setAttributes( { showImage: value } );
	};

	const setimageSize = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imageSize = value;
		} );
		setAttributes( { imageSize: value } );
	};

	const setheadingTag = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.headingTag = value;
		} );
		setAttributes( { headingTag: value } );
	};

	const setimagePosition = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imagePosition = value;
		} );
		setAttributes( { imagePosition: value } );
	};

	const setColumns = ( column, tcolumn, mcolumn ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );
		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.columns = column;
			pricelistChild.attributes.tcolumns = tcolumn;
			pricelistChild.attributes.mcolumns = mcolumn;
		} );
	};

	const setimageAlignment = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imageAlignment = value;
		} );
		setAttributes( { imageAlignment: value } );
	};

	const setStack = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.stack = value;
		} );
		setAttributes( { stack: value } );
	};

	const setWidth = () => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imageWidth = imageWidth;
		} );
	};

	useEffect( () => {
		setWidth();
	}, [ imageWidth ] );

	const setHeadingAlign = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks( clientId );

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.headingAlign = value;
		} );
		setAttributes( { headingAlign: value } );
	};

	// Margin Settings.
	const marginSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveSlider
					label={ __( 'Row Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowGap,
							label: 'rowGap',
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
					max={ 50 }
					unit={ {
						value: rowGapType,
						label: 'rowGapType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Column Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: columnGap,
							label: 'columnGap',
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
					max={ 50 }
					unit={ {
						value: columnGapType,
						label: 'columnGapType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Item Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: contentPaddingTop,
						label: 'contentPaddingTop',
					} }
					valueRight={ {
						value: contentPaddingRight,
						label: 'contentPaddingRight',
					} }
					valueBottom={ {
						value: contentPaddingBottom,
						label: 'contentPaddingBottom',
					} }
					valueLeft={ {
						value: contentPaddingLeft,
						label: 'contentPaddingLeft',
					} }
					valueTopTablet={ {
						value: contentPaddingTopTablet,
						label: 'contentPaddingTopTablet',
					} }
					valueRightTablet={ {
						value: contentPaddingRightTablet,
						label: 'contentPaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: contentPaddingBottomTablet,
						label: 'contentPaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: contentPaddingLeftTablet,
						label: 'contentPaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: contentPaddingTopMobile,
						label: 'contentPaddingTopMobile',
					} }
					valueRightMobile={ {
						value: contentPaddingRightMobile,
						label: 'contentPaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: contentPaddingBottomMobile,
						label: 'contentPaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: contentPaddingLeftMobile,
						label: 'contentPaddingLeftMobile',
					} }
					unit={ {
						value: contentPaddingUnit,
						label: 'contentPaddingUnit',
					} }
					mUnit={ {
						value: contentMobilePaddingUnit,
						label: 'contentMobilePaddingUnit',
					} }
					tUnit={ {
						value: contentTabletPaddingUnit,
						label: 'contentTabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: contentSpacingLink,
						label: 'contentSpacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	// Image sizes.
	const imageSizeOptions = [
		{ value: 'thumbnail', label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
	];

	//Image Setting
	const imageSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Show Image', 'ultimate-addons-for-gutenberg' ) }
					checked={ showImage }
					onChange={ setShowImage }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Position', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: imgAlign,
						label: 'imgAlign',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'top',
							label: 'Top',
						},
						{
							value: 'side',
							label: 'Side',
						},
					] }
					showIcons={ false }
					onChange={ setImgAlign }
				/>
				{ imgAlign === 'side' && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: imagePosition,
								label: 'imagePosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'left',
									icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
									tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'right',
									icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
									tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
								},
							] }
							showIcons={ true }
							onChange={ setimagePosition }
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Stack on', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: stack,
								label: 'stack',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'none',
									label: 'None',
								},
								{
									value: 'tablet',
									label: 'Tablet',
								},
								{
									value: 'mobile',
									label: 'Mobile',
								},
							] }
							help={ __( 'Note: Choose on what breakpoint the Images will stack.', 'ultimate-addons-for-gutenberg' ) }
							showIcons={ false }
							onChange={ setStack }
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Vertical Alignment', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: imageAlignment,
								label: 'imageAlignment',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'top',
									label: 'Top',
								},
								{
									value: 'middle',
									label: 'Middle',
								},
							] }
							showIcons={ false }
							onChange={ setimageAlignment }
						/>
					</>
				) }
				{ imgAlign === 'top' && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: headingAlign,
							label: 'headingAlign',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'left',
								icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
								tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'center',
								icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
								tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'right',
								icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
								tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ true }
						onChange={ setHeadingAlign }
					/>
				) }
				{ showImage && (
					<>
						<UAGSelectControl
							label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: imageSize,
							} }
							onChange={ setimageSize }
							options={ imageSizeOptions }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	//Image Setting
	const imageStyles = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveSlider
					label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: imageWidth,
							label: 'imageWidth',
						},
						tablet: {
							value: imageWidthTablet,
							label: 'imageWidthTablet',
						},
						mobile: {
							value: imageWidthMobile,
							label: 'imageWidthMobile',
						},
					} }
					min={ 0 }
					max={ 500 }
					unit={ {
						value: imageWidthType,
						label: 'imageWidthType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: imgPaddingTop,
						label: 'imgPaddingTop',
					} }
					valueRight={ {
						value: imgPaddingRight,
						label: 'imgPaddingRight',
					} }
					valueBottom={ {
						value: imgPaddingBottom,
						label: 'imgPaddingBottom',
					} }
					valueLeft={ {
						value: imgPaddingLeft,
						label: 'imgPaddingLeft',
					} }
					valueTopTablet={ {
						value: imgPaddingTopTablet,
						label: 'imgPaddingTopTablet',
					} }
					valueRightTablet={ {
						value: imgPaddingRightTablet,
						label: 'imgPaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: imgPaddingBottomTablet,
						label: 'imgPaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: imgPaddingLeftTablet,
						label: 'imgPaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: imgPaddingTopMobile,
						label: 'imgPaddingTopMobile',
					} }
					valueRightMobile={ {
						value: imgPaddingRightMobile,
						label: 'imgPaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: imgPaddingBottomMobile,
						label: 'imgPaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: imgPaddingLeftMobile,
						label: 'imgPaddingLeftMobile',
					} }
					unit={ {
						value: imgPaddingUnit,
						label: 'imgPaddingUnit',
					} }
					mUnit={ {
						value: imgMobilePaddingUnit,
						label: 'imgMobilePaddingUnit',
					} }
					tUnit={ {
						value: imgTabletPaddingUnit,
						label: 'imgTabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: imgSpacingLink,
						label: 'imgSpacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	//Color settings
	const contentSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ descColor ? descColor : '' }
					data={ {
						value: descColor,
						label: 'descColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: descLoadGoogleFonts,
						label: 'descLoadGoogleFonts',
					} }
					fontFamily={ {
						value: descFontFamily,
						label: 'descFontFamily',
					} }
					fontWeight={ {
						value: descFontWeight,
						label: 'descFontWeight',
					} }
					fontStyle={ {
						value: descFontStyle,
						label: 'descFontStyle',
					} }
					fontSizeType={ {
						value: descFontSizeType,
						label: 'descFontSizeType',
					} }
					fontSize={ {
						value: descFontSize,
						label: 'descFontSize',
					} }
					fontSizeMobile={ {
						value: descFontSizeMobile,
						label: 'descFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: descFontSizeTablet,
						label: 'descFontSizeTablet',
					} }
					lineHeightType={ {
						value: descLineHeightType,
						label: 'descLineHeightType',
					} }
					lineHeight={ {
						value: descLineHeight,
						label: 'descLineHeight',
					} }
					lineHeightMobile={ {
						value: descLineHeightMobile,
						label: 'descLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: descLineHeightTablet,
						label: 'descLineHeightTablet',
					} }
					letterSpacing={ {
						value: descLetterSpacing,
						label: 'descLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: descLetterSpacingTablet,
						label: 'descLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: descLetterSpacingMobile,
						label: 'descLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: descLetterSpacingType,
						label: 'descLetterSpacingType',
					} }
					transform={ {
						value: descTransform,
						label: 'descTransform',
					} }
					decoration={ {
						value: descDecoration,
						label: 'descDecoration',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	//seperator setting
	const separatorSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGSelectControl
					label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: seperatorStyle,
						label: 'seperatorStyle',
					} }
					setAttributes={ setAttributes }
					options={ [
						{ value: 'none', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'solid', label: __( 'Solid', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'dotted', label: __( 'Dotted', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'dashed', label: __( 'Dashed', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'double', label: __( 'Double', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'groove', label: __( 'Groove', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'inset', label: __( 'Inset', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'outset', label: __( 'Outset', 'ultimate-addons-for-gutenberg' ) },
						{ value: 'ridge', label: __( 'Ridge', 'ultimate-addons-for-gutenberg' ) },
					] }
				/>
				{ 'none' !== seperatorStyle && (
					<>
						<ResponsiveSlider
							label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: seperatorWidth,
									label: 'seperatorWidth',
								},
								tablet: {
									value: seperatorWidthTablet,
									label: 'seperatorWidthTablet',
								},
								mobile: {
									value: seperatorWidthMobile,
									label: 'seperatorWidthMobile',
								},
							} }
							min={ 0 }
							max={ 100 }
							unit={ {
								value: seperatorWidthType,
								label: 'seperatorWidthType',
							} }
							units={ [
								{
									name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
									unitValue: 'px',
								},
								{
									name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
									unitValue: 'em',
								},
								{
									name: __( '%', 'ultimate-addons-for-gutenberg' ),
									unitValue: '%',
								},
							] }
							setAttributes={ setAttributes }
						/>
						<Range
							label={ __( 'Thickness', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ seperatorThickness }
							data={ {
								value: seperatorThickness,
								label: 'seperatorThickness',
							} }
							min={ 0 }
							max={ 20 }
							displayUnit={ false }
						/>
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ seperatorColor ? seperatorColor : '' }
							data={ {
								value: seperatorColor,
								label: 'seperatorColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	// Typography settings.
	const priceSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Price', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ priceColor ? priceColor : '' }
					data={ {
						value: priceColor,
						label: 'priceColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: priceLoadGoogleFonts,
						label: 'priceLoadGoogleFonts',
					} }
					fontFamily={ {
						value: priceFontFamily,
						label: 'priceFontFamily',
					} }
					fontWeight={ {
						value: priceFontWeight,
						label: 'priceFontWeight',
					} }
					fontStyle={ {
						value: priceFontStyle,
						label: 'priceFontStyle',
					} }
					fontSizeType={ {
						value: priceFontSizeType,
						label: 'priceFontSizeType',
					} }
					fontSize={ {
						value: priceFontSize,
						label: 'priceFontSize',
					} }
					fontSizeMobile={ {
						value: priceFontSizeMobile,
						label: 'priceFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: priceFontSizeTablet,
						label: 'priceFontSizeTablet',
					} }
					lineHeightType={ {
						value: priceLineHeightType,
						label: 'priceLineHeightType',
					} }
					lineHeight={ {
						value: priceLineHeight,
						label: 'priceLineHeight',
					} }
					lineHeightMobile={ {
						value: priceLineHeightMobile,
						label: 'priceLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: priceLineHeightTablet,
						label: 'priceLineHeightTablet',
					} }
					letterSpacing={ {
						value: priceLetterSpacing,
						label: 'priceLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: priceLetterSpacingTablet,
						label: 'priceLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: priceLetterSpacingMobile,
						label: 'priceLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: priceLetterSpacingType,
						label: 'priceLetterSpacingType',
					} }
					transform={ {
						value: priceTransform,
						label: 'priceTransform',
					} }
					decoration={ {
						value: priceDecoration,
						label: 'priceDecoration',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const titleSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
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
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					} }
					fontFamily={ {
						value: titleFontFamily,
						label: 'titleFontFamily',
					} }
					fontWeight={ {
						value: titleFontWeight,
						label: 'titleFontWeight',
					} }
					fontStyle={ {
						value: titleFontStyle,
						label: 'titleFontStyle',
					} }
					fontSizeType={ {
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					} }
					fontSize={ {
						value: titleFontSize,
						label: 'titleFontSize',
					} }
					fontSizeMobile={ {
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					} }
					lineHeightType={ {
						value: titleLineHeightType,
						label: 'titleLineHeightType',
					} }
					lineHeight={ {
						value: titleLineHeight,
						label: 'titleLineHeight',
					} }
					lineHeightMobile={ {
						value: titleLineHeightMobile,
						label: 'titleLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: titleLineHeightTablet,
						label: 'titleLineHeightTablet',
					} }
					letterSpacing={ {
						value: titleLetterSpacing,
						label: 'titleLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: titleLetterSpacingTablet,
						label: 'titleLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: titleLetterSpacingMobile,
						label: 'titleLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: titleLetterSpacingType,
						label: 'titleLetterSpacingType',
					} }
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Margin', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: titleSpace,
							label: 'titleSpace',
						},
						tablet: {
							value: titleSpaceTablet,
							label: 'titleSpaceTablet',
						},
						mobile: {
							value: titleSpaceMobile,
							label: 'titleSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: titleSpaceType,
						label: 'titleSpaceType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGPresets setAttributes={ setAttributes } presets={ presets } presetInputType="radioImage" />
			</UAGAdvancedPanelBody>
		);
	};

	const generalSettings = () => {
		return (
			<>
				<UAGAdvancedPanelBody title={ __( 'General', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
					<ResponsiveSlider
						label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: columns,
								label: 'columns',
							},
							tablet: {
								value: tcolumns,
								label: 'tcolumns',
							},
							mobile: {
								value: mcolumns,
								label: 'mcolumns',
							},
						} }
						min={ 1 }
						max={ Math.min( maxColumns, menu_item_count ) }
						displayUnit={ false }
						setAttributes={ setAttributes }
						onChange={ setColumns( columns, tcolumns, mcolumns ) }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Heading Tag', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: headingTag,
							label: 'headingTag',
						} }
						options={ [
							{
								value: 'h1',
								label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h2',
								label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h3',
								label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h4',
								label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h5',
								label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h6',
								label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'span',
								label: __( 'Span', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'p',
								label: __( 'P', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						onChange={ setheadingTag }
					/>
				</UAGAdvancedPanelBody>
			</>
		);
	};

	const inspectControl = () => {
		return (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
						{ imageSettings() }
						{ presetSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ titleSettings() }
						{ separatorSettings() }
						{ showImage && imageStyles() }
						{ contentSettings() }
						{ priceSettings() }
						{ marginSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	};

	return <>{ inspectControl() }</>;
};

export default memo( Settings );
