import { memo } from '@wordpress/element';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import SpacingControl from '@Components/spacing-control';
import UAGTabsControl from '@Components/tabs';
import UAGMediaPicker from '@Components/image';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import UAGSelectControl from '@Components/select-control';
import { ToggleControl, Icon } from '@wordpress/components';
import { BlockControls, InspectorControls } from '@wordpress/block-editor';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';

const Settings = ( props ) => {

	const { setAttributes, attributes, deviceType } = props;

	const {
		skinStyle,
		align,
		authorColor,
		descColor,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descFontStyle,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descLoadGoogleFonts,
		authorFontSize,
		authorFontSizeType,
		authorFontSizeTablet,
		authorFontSizeMobile,
		authorFontFamily,
		authorFontWeight,
		authorFontStyle,
		authorLineHeightType,
		authorLineHeight,
		authorLineHeightTablet,
		authorLineHeightMobile,
		authorLoadGoogleFonts,
		descSpace,
		descSpaceTablet,
		descSpaceMobile,
		authorSpace,
		authorSpaceTablet,
		authorSpaceMobile,
		borderColor,
		borderStyle,
		borderWidth,
		borderGap,
		borderGapTablet,
		borderGapMobile,
		verticalPadding,
		verticalPaddingTablet,
		verticalPaddingMobile,
		quoteColor,
		quoteBgColor,
		quoteSize,
		quoteSizeType,
		quoteSizeTablet,
		quoteSizeMobile,
		quotePadding,
		quotePaddingType,
		quotePaddingTablet,
		quotePaddingMobile,
		quoteBorderRadius,
		quoteStyle,
		enableTweet,
		tweetLinkColor,
		tweetBtnColor,
		tweetBtnHoverColor,
		tweetBtnBgColor,
		tweetBtnBgHoverColor,
		tweetBtnFontSize,
		tweetBtnFontSizeType,
		tweetBtnFontSizeTablet,
		tweetBtnFontSizeMobile,
		tweetBtnFontFamily,
		tweetBtnFontWeight,
		tweetBtnFontStyle,
		tweetBtnLineHeightType,
		tweetBtnLineHeight,
		tweetBtnLineHeightTablet,
		tweetBtnLineHeightMobile,
		tweetBtnLoadGoogleFonts,
		tweetIconSpacing,
		tweetIconSpacingUnit,
		iconView,
		iconSkin,
		iconLabel,
		iconShareVia,
		iconTargetUrl,
		customUrl,
		authorImage,
		authorImageWidth,
		authorImageWidthTablet,
		authorImageWidthMobile,
		authorImageWidthUnit,
		authorImageGap,
		authorImageGapTablet,
		authorImageGapMobile,
		authorImageGapUnit,
		authorImageSize,
		authorImgBorderRadius,
		authorImgBorderRadiusTablet,
		authorImgBorderRadiusMobile,
		authorImgPosition,
		quoteTopMargin,
		quoteBottomMargin,
		quoteLeftMargin,
		quoteRightMargin,
		quoteHoverColor,
		quoteBgHoverColor,
		borderHoverColor,
		authorImgBorderRadiusUnit,
		borderWidthUnit,
		quoteBorderRadiusUnit,
		quoteUnit,
		quotemobileUnit,
		quotetabletUnit,
		borderGapUnit,
		descSpaceUnit,
		authorSpaceUnit,
		verticalPaddingUnit,
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		btnspacingLink,
		spacingLink,
		descTransform,
		authorTransform,
		tweetBtnTransform,
		descDecoration,
		authorDecoration,
		tweetBtnDecoration,
		quoteTopMarginTablet,
		quoteBottomMarginTablet,
		quoteLeftMarginTablet,
		quoteRightMarginTablet,
		quoteTopMarginMobile,
		quoteBottomMarginMobile,
		quoteLeftMarginMobile,
		quoteRightMarginMobile,
		author,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		authorLetterSpacing,
		authorLetterSpacingTablet,
		authorLetterSpacingMobile,
		authorLetterSpacingType,
		tweetBtnLetterSpacing,
		tweetBtnLetterSpacingTablet,
		tweetBtnLetterSpacingMobile,
		tweetBtnLetterSpacingType,
	} = attributes;

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { authorImage: null } );
	};

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { authorImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( { authorImage: media } );
	};

	const imageSizeOptions = [
		{
			value: 'thumbnail',
			label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'medium',
			label: __( 'Medium', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'full',
			label: __( 'Large', 'ultimate-addons-for-gutenberg' ),
		},
	];

	// Image controls.
	const imageControls = (
		<>
			<UAGMediaPicker
				onSelectImage={ onSelectImage }
				backgroundImage={ authorImage }
				onRemoveImage={ onRemoveImage }
				label={ __( 'Author Image', 'ultimate-addons-for-gutenberg' ) }
				slug={ 'author-image' }
			/>
			{ authorImage && authorImage.url !== 'null' && authorImage.url !== '' && (
				<>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Author Image Position', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: authorImgPosition,
							label: 'authorImgPosition',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'left',
								label: 'Left',
							},
							{
								value: 'top',
								label: 'Top',
							},
							{
								value: 'right',
								label: 'Right',
							},
						] }
						showIcons={ false }
					/>
				</>
			) }
		</>
	);

	const quoteSettings = (
		<>
			<ResponsiveSlider
				label={ __( 'Quote Icon Size', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: quoteSize,
						label: 'quoteSize',
					},
					tablet: {
						value: quoteSizeTablet,
						label: 'quoteSizeTablet',
					},
					mobile: {
						value: quoteSizeMobile,
						label: 'quoteSizeMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				unit={ {
					value: quoteSizeType,
					label: 'quoteSizeType',
				} }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __( 'Background Size', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: quotePadding,
						label: 'quotePadding',
					},
					tablet: {
						value: quotePaddingTablet,
						label: 'quotePaddingTablet',
					},
					mobile: {
						value: quotePaddingMobile,
						label: 'quotePaddingMobile',
					},
				} }
				min={ 0 }
				max={ 200 }
				unit={ {
					value: quotePaddingType,
					label: 'quotePaddingType',
				} }
				setAttributes={ setAttributes }
			/>
			{ quoteBgColor && (
				<Range
					label={ __( 'Quote Icon Border Radius', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ quoteBorderRadius }
					data={ {
						value: quoteBorderRadius,
						label: 'quoteBorderRadius',
					} }
					min={ 0 }
					max={ 100 }
					unit={ {
						value: quoteBorderRadiusUnit,
						label: 'quoteBorderRadiusUnit',
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
				/>
			) }
		</>
	);

	const skinSettings = (
		<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: skinStyle,
					label: 'skinStyle',
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'border',
						label: __( 'Border', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'quotation',
						label: __( 'Quotation', 'ultimate-addons-for-gutenberg' ),
					},
				] }
				showIcons={ false }
			/>
			{ 'quotation' === skinStyle && (
				<>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Quotation Type', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: quoteStyle,
							label: 'quoteStyle',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'style_1',
								label: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'style_2',
								label: __( 'Inline', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ false }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: align,
							label: 'align',
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
					/>
				</>
			) }
			{ imageControls }
		</UAGAdvancedPanelBody>
	);

	const quoteStyling = (
		<UAGAdvancedPanelBody title={ __( 'Quote', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<AdvancedPopColorControl
				label={ __( 'Quote Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ descColor ? descColor : '' }
				data={ {
					value: descColor,
					label: 'descColor',
				} }
				setAttributes={ setAttributes }
			/>
			<TypographyControl
				label={ __( 'Quote Typography', 'ultimate-addons-for-gutenberg' ) }
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
				fontSize={ { value: descFontSize, label: 'descFontSize' } }
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

	const authorStyling = (
		<UAGAdvancedPanelBody title={ __( 'Author', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			{ author !== '' && (
				<>
					<AdvancedPopColorControl
						label={ __( 'Author Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ authorColor ? authorColor : '' }
						data={ {
							value: authorColor,
							label: 'authorColor',
						} }
						setAttributes={ setAttributes }
					/>
					<TypographyControl
						label={ __( 'Author Typography', 'ultimate-addons-for-gutenberg' ) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: authorLoadGoogleFonts,
							label: 'authorLoadGoogleFonts',
						} }
						fontFamily={ {
							value: authorFontFamily,
							label: 'authorFontFamily',
						} }
						fontWeight={ {
							value: authorFontWeight,
							label: 'authorFontWeight',
						} }
						fontStyle={ {
							value: authorFontStyle,
							label: 'authorFontStyle',
						} }
						fontSizeType={ {
							value: authorFontSizeType,
							label: 'authorFontSizeType',
						} }
						fontSize={ {
							value: authorFontSize,
							label: 'authorFontSize',
						} }
						fontSizeMobile={ {
							value: authorFontSizeMobile,
							label: 'authorFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: authorFontSizeTablet,
							label: 'authorFontSizeTablet',
						} }
						lineHeightType={ {
							value: authorLineHeightType,
							label: 'authorLineHeightType',
						} }
						lineHeight={ {
							value: authorLineHeight,
							label: 'authorLineHeight',
						} }
						lineHeightMobile={ {
							value: authorLineHeightMobile,
							label: 'authorLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: authorLineHeightTablet,
							label: 'authorLineHeightTablet',
						} }
						letterSpacing={ {
							value: authorLetterSpacing,
							label: 'authorLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: authorLetterSpacingTablet,
							label: 'authorLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: authorLetterSpacingMobile,
							label: 'authorLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: authorLetterSpacingType,
							label: 'authorLetterSpacingType',
						} }
						transform={ {
							value: authorTransform,
							label: 'authorTransform',
						} }
						decoration={ {
							value: authorDecoration,
							label: 'authorDecoration',
						} }
					/>
				</>
			) }
			{ authorImage && authorImage.url !== 'null' && authorImage.url !== '' && (
				<>
					<UAGSelectControl
						label={ __( 'Author Image Size', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: authorImageSize,
							label: 'authorImageSize',
						} }
						setAttributes={ setAttributes }
						options={ imageSizeOptions }
					/>
					<ResponsiveSlider
						label={ __( 'Author Image Width', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: authorImageWidth,
								label: 'authorImageWidth',
							},
							tablet: {
								value: authorImageWidthTablet,
								label: 'authorImageWidthTablet',
							},
							mobile: {
								value: authorImageWidthMobile,
								label: 'authorImageWidthMobile',
							},
						} }
						min={ 0 }
						max={ 500 }
						unit={ {
							value: authorImageWidthUnit,
							label: 'authorImageWidthUnit',
						} }
						setAttributes={ setAttributes }
					/>
					<ResponsiveSlider
						label={ __( 'Image Border Radius', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: authorImgBorderRadius,
								label: 'authorImgBorderRadius',
							},
							tablet: {
								value: authorImgBorderRadiusTablet,
								label: 'authorImgBorderRadiusTablet',
							},
							mobile: {
								value: authorImgBorderRadiusMobile,
								label: 'authorImgBorderRadiusMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						unit={ {
							value: authorImgBorderRadiusUnit,
							label: 'authorImgBorderRadiusUnit',
						} }
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
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	const twitterSettings = (
		<UAGAdvancedPanelBody title={ __( 'Twitter Icon', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Enable Icon', 'ultimate-addons-for-gutenberg' ) }
				checked={ enableTweet }
				onChange={ () => setAttributes( { enableTweet: ! enableTweet } ) }
			/>
			{ enableTweet && (
				<>
					<UAGTextControl
						label={ __( 'Twitter Username', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: iconShareVia,
							label: 'iconShareVia',
						} }
						setAttributes={ setAttributes }
						value={ iconShareVia }
						onChange={ ( value ) =>
							setAttributes( {
								iconShareVia: value,
							} )
						}
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Icon View', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: iconView,
							label: 'iconView',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'icon_text',
								label: __( 'Both', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'icon',
								label: __( 'Icon', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'text',
								label: __( 'Text', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ false }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Icon Style', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: iconSkin,
							label: 'iconSkin',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'classic',
								label: __( 'Classic', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'bubble',
								label: __( 'Bubble', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'link',
								label: __( 'Link', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ false }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Target URL', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: iconTargetUrl,
							label: 'iconTargetUrl',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'current',
								label: __( 'Current Page', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'custom',
								label: __( 'Custom URL', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ false }
					/>
					{ iconTargetUrl === 'custom' && (
						<UAGTextControl
							label={ __( 'URL', 'ultimate-addons-for-gutenberg' ) }
							value={ customUrl }
							data={ {
								value: customUrl,
								label: 'customUrl',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { customUrl: value } ) }
						/>
					) }
				</>
			) }
			{ enableTweet && iconView !== 'icon' && (
				<>
					<UAGTextControl
						label={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
						value={ iconLabel }
						data={ {
							value: iconLabel,
							label: 'iconLabel',
						} }
						setAttributes={ setAttributes }
						onChange={ ( value ) => setAttributes( { iconLabel: value } ) }
					/>
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	const spacingSettings = (
		<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			{ authorImage && authorImage.url && (
				<ResponsiveSlider
					label={ __( 'Author - Image Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: authorImageGap,
							label: 'authorImageGap',
						},
						tablet: {
							value: authorImageGapTablet,
							label: 'authorImageGapTablet',
						},
						mobile: {
							value: authorImageGapMobile,
							label: 'authorImageGapMobile',
						},
					} }
					min={ 0 }
					max={ 500 }
					unit={ {
						value: authorImageGapUnit,
						label: 'authorImageGapUnit',
					} }
					setAttributes={ setAttributes }
				/>
			) }
			{ skinStyle === 'quotation' && (
				<SpacingControl
					{ ...props }
					label={ __( 'Quote Icon Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: quoteTopMargin,
						label: 'quoteTopMargin',
					} }
					valueRight={ {
						value: quoteRightMargin,
						label: 'quoteRightMargin',
					} }
					valueBottom={ {
						value: quoteBottomMargin,
						label: 'quoteBottomMargin',
					} }
					valueLeft={ {
						value: quoteLeftMargin,
						label: 'quoteLeftMargin',
					} }
					valueTopTablet={ {
						value: quoteTopMarginTablet,
						label: 'quoteTopMarginTablet',
					} }
					valueRightTablet={ {
						value: quoteRightMarginTablet,
						label: 'quoteRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: quoteBottomMarginTablet,
						label: 'quoteBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: quoteLeftMarginTablet,
						label: 'quoteLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: quoteTopMarginMobile,
						label: 'quoteTopMarginMobile',
					} }
					valueRightMobile={ {
						value: quoteRightMarginMobile,
						label: 'quoteRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: quoteBottomMarginMobile,
						label: 'quoteBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: quoteLeftMarginMobile,
						label: 'quoteLeftMarginMobile',
					} }
					unit={ {
						value: quoteUnit,
						label: 'quoteUnit',
					} }
					mUnit={ {
						value: quotemobileUnit,
						label: 'quotemobileUnit',
					} }
					tUnit={ {
						value: quotetabletUnit,
						label: 'quotetabletUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			) }
			{ skinStyle === 'border' && (
				<ResponsiveSlider
					label={ __( 'Border - Quote Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: borderGap,
							label: 'borderGap',
						},
						tablet: {
							value: borderGapTablet,
							label: 'borderGapTablet',
						},
						mobile: {
							value: borderGapMobile,
							label: 'borderGapMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: borderGapUnit,
						label: 'borderGapUnit',
					} }
					setAttributes={ setAttributes }
				/>
			) }
			<ResponsiveSlider
				label={ __( 'Quote Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: descSpace,
						label: 'descSpace',
					},
					tablet: {
						value: descSpaceTablet,
						label: 'descSpaceTablet',
					},
					mobile: {
						value: descSpaceMobile,
						label: 'descSpaceMobile',
					},
				} }
				min={ 0 }
				max={ 200 }
				unit={ {
					value: descSpaceUnit,
					label: 'descSpaceUnit',
				} }
				setAttributes={ setAttributes }
			/>
			{ align === 'center' && skinStyle !== 'border' && (
				<ResponsiveSlider
					label={ __( 'Author Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: authorSpace,
							label: 'authorSpace',
						},
						tablet: {
							value: authorSpaceTablet,
							label: 'authorSpaceTablet',
						},
						mobile: {
							value: authorSpaceMobile,
							label: 'authorSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: authorSpaceUnit,
						label: 'authorSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
			) }

			{ skinStyle === 'border' && (
				<>
					<ResponsiveSlider
						label={ __( 'Vertical Spacing', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: verticalPadding,
								label: 'verticalPadding',
							},
							tablet: {
								value: verticalPaddingTablet,
								label: 'verticalPaddingTablet',
							},
							mobile: {
								value: verticalPaddingMobile,
								label: 'verticalPaddingMobile',
							},
						} }
						min={ 0 }
						max={ 500 }
						unit={ {
							value: verticalPaddingUnit,
							label: 'verticalPaddingUnit',
						} }
						setAttributes={ setAttributes }
					/>
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	const generalStyle = () => {
		const tabOutputNormal = (
			<>
				<AdvancedPopColorControl
					label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ quoteColor ? quoteColor : '' }
					data={ {
						value: quoteColor,
						label: 'quoteColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Icon Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ quoteBgColor ? quoteBgColor : '' }
					data={ {
						value: quoteBgColor,
						label: 'quoteBgColor',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);
		const tabOutputHover = (
			<>
				<AdvancedPopColorControl
					label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ quoteHoverColor ? quoteHoverColor : '' }
					data={ {
						value: quoteHoverColor,
						label: 'quoteHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Icon Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ quoteBgHoverColor ? quoteBgHoverColor : '' }
					data={ {
						value: quoteBgHoverColor,
						label: 'quoteBgHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);
		return (
			<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				{ skinStyle === 'border' && borderStyleSetting() }
				{ skinStyle === 'quotation' && quoteSettings }
				{ skinStyle === 'quotation' && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={ tabOutputNormal }
						hover={ tabOutputHover }
						disableBottomSeparator={ true }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const borderStyleSetting = () => {
		const tabOutputNormal = (
			<AdvancedPopColorControl
				label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ borderColor ? borderColor : '' }
				data={ {
					value: borderColor,
					label: 'borderColor',
				} }
				setAttributes={ setAttributes }
			/>
		);
		const tabOutputHover = (
			<AdvancedPopColorControl
				label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ borderHoverColor ? borderHoverColor : '' }
				data={ {
					value: borderHoverColor,
					label: 'borderHoverColor',
				} }
				setAttributes={ setAttributes }
			/>
		);
		return (
			<>
				<UAGSelectControl
					label={ __( 'Border Style', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: borderStyle,
						label: 'borderStyle',
					} }
					setAttributes={ setAttributes }
					options={ [
						{
							value: 'none',
							label: __( 'None', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'solid',
							label: __( 'Solid', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'dotted',
							label: __( 'Dotted', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'dashed',
							label: __( 'Dashed', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'double',
							label: __( 'Double', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'groove',
							label: __( 'Groove', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'inset',
							label: __( 'Inset', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'outset',
							label: __( 'Outset', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'ridge',
							label: __( 'Ridge', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ 'none' !== borderStyle && (
					<>
						<Range
							label={ __( 'Thickness', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ borderWidth }
							data={ {
								value: borderWidth,
								label: 'borderWidth',
							} }
							min={ 0 }
							max={ 50 }
							unit={ {
								value: borderWidthUnit,
								label: 'borderWidthUnit',
							} }
						/>
						<UAGTabsControl
							tabs={ [
								{
									name: 'normal',
									title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
								},
								{
									name: 'hover',
									title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
								},
							] }
							normal={ tabOutputNormal }
							hover={ tabOutputHover }
							disableBottomSeparator={ true }
						/>
					</>
				) }
			</>
		);
	};
	const iconStyleSetting = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Twitter Icon', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				{ iconSkin === 'link' && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={
							<AdvancedPopColorControl
								label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ tweetLinkColor ? tweetLinkColor : '' }
								data={ {
									value: tweetLinkColor,
									label: 'tweetLinkColor',
								} }
								setAttributes={ setAttributes }
							/>
						}
						hover={
							<AdvancedPopColorControl
								label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ tweetBtnHoverColor ? tweetBtnHoverColor : '' }
								data={ {
									value: tweetBtnHoverColor,
									label: 'tweetBtnHoverColor',
								} }
								setAttributes={ setAttributes }
							/>
						}
					/>
				) }
				{ iconSkin !== 'link' && (
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={
							<>
								<AdvancedPopColorControl
									label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ tweetBtnColor ? tweetBtnColor : '' }
									data={ {
										value: tweetBtnColor,
										label: 'tweetBtnColor',
									} }
									setAttributes={ setAttributes }
								/>
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ tweetBtnBgColor ? tweetBtnBgColor : '' }
									data={ {
										value: tweetBtnBgColor,
										label: 'tweetBtnBgColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						}
						hover={
							<>
								<AdvancedPopColorControl
									label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ tweetBtnHoverColor ? tweetBtnHoverColor : '' }
									data={ {
										value: tweetBtnHoverColor,
										label: 'tweetBtnHoverColor',
									} }
									setAttributes={ setAttributes }
								/>
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ tweetBtnBgHoverColor ? tweetBtnBgHoverColor : '' }
									data={ {
										value: tweetBtnBgHoverColor,
										label: 'tweetBtnBgHoverColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						}
					/>
				) }
				{ iconView === 'icon_text' && (
					<Range
						label={ __( 'Icon & Text Spacing', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ tweetIconSpacing }
						data={ {
							value: tweetIconSpacing,
							label: 'tweetIconSpacing',
						} }
						min={ 0 }
						max={ 20 }
						unit={ {
							value: tweetIconSpacingUnit,
							label: 'tweetIconSpacingUnit',
						} }
						initialPosition={ 5 }
					/>
				) }
				{ iconSkin !== 'link' && (
					<SpacingControl
						{ ...props }
						label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
						valueTop={ {
							value: paddingBtnTop,
							label: 'paddingBtnTop',
						} }
						valueRight={ {
							value: paddingBtnRight,
							label: 'paddingBtnRight',
						} }
						valueBottom={ {
							value: paddingBtnBottom,
							label: 'paddingBtnBottom',
						} }
						valueLeft={ {
							value: paddingBtnLeft,
							label: 'paddingBtnLeft',
						} }
						valueTopTablet={ {
							value: paddingBtnTopTablet,
							label: 'paddingBtnTopTablet',
						} }
						valueRightTablet={ {
							value: paddingBtnRightTablet,
							label: 'paddingBtnRightTablet',
						} }
						valueBottomTablet={ {
							value: paddingBtnBottomTablet,
							label: 'paddingBtnBottomTablet',
						} }
						valueLeftTablet={ {
							value: paddingBtnLeftTablet,
							label: 'paddingBtnLeftTablet',
						} }
						valueTopMobile={ {
							value: paddingBtnTopMobile,
							label: 'paddingBtnTopMobile',
						} }
						valueRightMobile={ {
							value: paddingBtnRightMobile,
							label: 'paddingBtnRightMobile',
						} }
						valueBottomMobile={ {
							value: paddingBtnBottomMobile,
							label: 'paddingBtnBottomMobile',
						} }
						valueLeftMobile={ {
							value: paddingBtnLeftMobile,
							label: 'paddingBtnLeftMobile',
						} }
						unit={ {
							value: paddingBtnUnit,
							label: 'paddingBtnUnit',
						} }
						mUnit={ {
							value: mobilePaddingBtnUnit,
							label: 'mobilePaddingBtnUnit',
						} }
						tUnit={ {
							value: tabletPaddingBtnUnit,
							label: 'tabletPaddingBtnUnit',
						} }
						deviceType={ deviceType }
						attributes={ attributes }
						setAttributes={ setAttributes }
						link={ {
							value: btnspacingLink,
							label: 'btnspacingLink',
						} }
					/>
				) }
				{ iconView !== 'icon' && (
					<TypographyControl
						label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: tweetBtnLoadGoogleFonts,
							label: 'tweetBtnLoadGoogleFonts',
						} }
						fontFamily={ {
							value: tweetBtnFontFamily,
							label: 'tweetBtnFontFamily',
						} }
						fontWeight={ {
							value: tweetBtnFontWeight,
							label: 'tweetBtnFontWeight',
						} }
						fontStyle={ {
							value: tweetBtnFontStyle,
							label: 'tweetBtnFontStyle',
						} }
						fontSizeType={ {
							value: tweetBtnFontSizeType,
							label: 'tweetBtnFontSizeType',
						} }
						fontSize={ {
							value: tweetBtnFontSize,
							label: 'tweetBtnFontSize',
						} }
						fontSizeMobile={ {
							value: tweetBtnFontSizeMobile,
							label: 'tweetBtnFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: tweetBtnFontSizeTablet,
							label: 'tweetBtnFontSizeTablet',
						} }
						lineHeightType={ {
							value: tweetBtnLineHeightType,
							label: 'tweetBtnLineHeightType',
						} }
						lineHeight={ {
							value: tweetBtnLineHeight,
							label: 'tweetBtnLineHeight',
						} }
						lineHeightMobile={ {
							value: tweetBtnLineHeightMobile,
							label: 'tweetBtnLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: tweetBtnLineHeightTablet,
							label: 'tweetBtnLineHeightTablet',
						} }
						letterSpacing={ {
							value: tweetBtnLetterSpacing,
							label: 'tweetBtnLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: tweetBtnLetterSpacingTablet,
							label: 'tweetBtnLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: tweetBtnLetterSpacingMobile,
							label: 'tweetBtnLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: tweetBtnLetterSpacingType,
							label: 'tweetBtnLetterSpacingType',
						} }
						transform={ {
							value: tweetBtnTransform,
							label: 'tweetBtnTransform',
						} }
						decoration={ {
							value: tweetBtnDecoration,
							label: 'tweetBtnDecoration',
						} }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<>
			<BlockControls key="controls"></BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ skinSettings }
						{ twitterSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ generalStyle() }
						{ enableTweet && iconStyleSetting() }
						{ quoteStyling }
						{ authorStyling }
						{ spacingSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
