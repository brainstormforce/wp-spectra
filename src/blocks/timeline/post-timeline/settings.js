import UAGIconPicker from '@Components/icon-picker';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import UAGTabsControl from '@Components/tabs';
import SpacingControl from '@Components/spacing-control';
import UAGSelectControl from '@Components/select-control';
import { dateI18n } from '@wordpress/date';
import {
	QueryControls,
	ToggleControl,
	Icon,
} from '@wordpress/components';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { useDeviceType } from '@Controls/getPreviewType';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	const { categoriesList, taxonomyList } = props;
	props = props.parentProps;

	const { attributes, setAttributes } = props;
	const deviceType = useDeviceType();

	const {
		headingColor,
		subHeadingColor,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		headingTag,
		headFontSizeType,
		headFontSize,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headFontStyle,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		headLoadGoogleFonts,
		timelinAlignmentTablet,
		timelinAlignmentMobile,
		arrowlinAlignment,
		subHeadFontSizeType,
		subHeadFontSize,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontStyle,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		subHeadLoadGoogleFonts,
		headSpace,
		headSpaceTablet,
		headSpaceMobile,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		authorSpace,
		authorSpaceTablet,
		authorSpaceMobile,
		contentSpace,
		authorColor,
		authorFontSizeType,
		authorFontSize,
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
		dateBottomspace,
		dateBottomspaceTablet,
		dateBottomspaceMobile,
		displayPostDate,
		displayPostExcerpt,
		displayPostAuthor,
		displayPostImage,
		displayPostLink,
		readMoreText,
		align,
		alignTablet,
		alignMobile,
		order,
		orderBy,
		categories,
		postsToShow,
		imageSize,
		ctaBackground,
		icon,
		iconColor,
		dateColor,
		ctaColor,
		dateFontsizeType,
		dateFontsize,
		dateFontsizeTablet,
		dateFontsizeMobile,
		dateFontFamily,
		dateFontWeight,
		dateFontStyle,
		dateLineHeightType,
		dateLineHeight,
		dateLineHeightTablet,
		dateLineHeightMobile,
		dateLoadGoogleFonts,
		ctaFontSizeType,
		ctaFontSize,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontStyle,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
		iconSize,
		exerptLength,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		iconFocus,
		iconBgFocus,
		linkTarget,
		postType,
		taxonomyType,
		dateFormat,
		excludeCurrentPost,
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
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		paddingLink,
		headTransform,
		authorTransform,
		subHeadTransform,
		dateTransform,
		ctaTransform,
		headDecoration,
		authorDecoration,
		subHeadDecoration,
		dateDecoration,
		ctaDecoration,

		ctaBottomSpacing,
		ctaBottomSpacingTablet,
		ctaBottomSpacingMobile,
		headTopSpacing,
		headTopSpacingTablet,
		headTopSpacingMobile,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
		dateLetterSpacing,
		dateLetterSpacingTablet,
		dateLetterSpacingMobile,
		dateLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,
		authorLetterSpacing,
		authorLetterSpacingTablet,
		authorLetterSpacingMobile,
		authorLetterSpacingType,
		verticalSpace,
		verticalSpaceTablet,
		verticalSpaceMobile,
		verticalSpaceUnit,
		verticalSpaceUnitTablet,
		verticalSpaceUnitMobile,
		horizontalSpace,
		horizontalSpaceTablet,
		horizontalSpaceMobile,
		horizontalSpaceUnit,
		horizontalSpaceUnitTablet,
		horizontalSpaceUnitMobile
	} = attributes;

	let device = deviceType;

	// For desktop, attribute name does not have `desktop` suffix to support backward compatibility.
	if( 'Desktop' === deviceType ) {
		device = '';
	}

	const timelinAlignment = 'undefined' !== typeof attributes['timelinAlignment' + device ] ? attributes['timelinAlignment' + device ] :  attributes.timelinAlignment;

	const onSelectPostType = ( value ) => {
		setAttributes( { postType: value } );
		setAttributes( { categories: '' } );
	};

	const onSelectTaxonomyType = ( value ) => {
		setAttributes( { taxonomyType: value } );
		setAttributes( { categories: '' } );
	};

	const getTimelineicon = ( value ) => {
		props.setAttributes( { icon: value } );
	};

	const taxonomyListOptions = [];

	const categoryListOptions = [
		{ value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) },
	];

	if ( taxonomyList ) {
		Object.keys( taxonomyList ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: decodeEntities( taxonomyList[ item ].label ),
			} );
		} );
	}

	if ( categoriesList ) {
		Object.keys( categoriesList ).map( ( item ) => {
			return categoryListOptions.push( {
				value: categoriesList[ item ].id,
				label: decodeEntities( categoriesList[ item ].name ),
			} );
		} );
	}

	const today = new Date();

	const querySettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Query', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<UAGSelectControl
					label={ __(
						'Post Type',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: postType,
					} }
					onChange={ onSelectPostType }
					options={ uagb_blocks_info.post_types }
				/>
				{ '' !== taxonomyList && (
					<UAGSelectControl
						label={ __(
							'Taxonomy',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: taxonomyType,
						} }
						onChange={ onSelectTaxonomyType }
						options={ taxonomyListOptions }
					/>
				) }
				{ '' != categoriesList && ( // eslint-disable-line eqeqeq
					<>
						<UAGSelectControl
							label={ taxonomyList[ taxonomyType ].label }
							data={ {
								value: categories,
								label: 'categories',
							} }
							setAttributes={ setAttributes }
							options={ categoryListOptions }
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Exclude Current Post',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ excludeCurrentPost }
					onChange={ () =>
						setAttributes( {
							excludeCurrentPost: ! excludeCurrentPost,
						} )
					}
				/>
				<QueryControls
					{ ...{ order, orderBy } }
					numberOfItems={ postsToShow }
					onNumberOfItemsChange={ ( value ) =>
						setAttributes( { postsToShow: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Order By', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: orderBy,
						label: 'orderBy',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'date',
							label: __(
								'Date',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'title',
							label: __(
								'Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'rand',
							label: __(
								'Random',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'menu_order',
							label: __(
								'Menu Order',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Order', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: order,
						label: 'order',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'desc',
							label: __(
								'Descending',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'asc',
							label: __(
								'Ascending',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const layoutSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Orientation',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: timelinAlignment,
							label: 'timelinAlignment',
						},
						tablet: {
							value: timelinAlignmentTablet,
							label: 'timelinAlignmentTablet',
						},
						mobile: {
							value: timelinAlignmentMobile,
							label: 'timelinAlignmentMobile',
						},
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
					responsive={true}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
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
					responsive={true}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Arrow Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: arrowlinAlignment,
						label: 'arrowlinAlignment',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'top',
							label: __( 'Top', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							label: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'bottom',
							label: __(
								'Bottom',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const ImageSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Display Featured Image',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostImage }
					onChange={ () =>
						setAttributes( {
							displayPostImage: ! displayPostImage,
						} )
					}
				/>
				{ displayPostImage && (
					<UAGSelectControl
						label={ __(
							'Image Size',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: imageSize,
							label: 'imageSize',
						} }
						setAttributes={ props.setAttributes }
						options={ uagb_blocks_info.image_sizes }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const contentSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
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
							label: __(
								'Span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'P', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<ToggleControl
					label={ __(
						'Display Post Author',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostAuthor }
					onChange={ () =>
						setAttributes( {
							displayPostAuthor: ! displayPostAuthor,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Display Post Date',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostDate }
					onChange={ () =>
						setAttributes( { displayPostDate: ! displayPostDate } )
					}
				/>
				{ displayPostDate && (
					<UAGSelectControl
						label={ __(
							'Date Format',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: dateFormat,
							label: 'dateFormat',
						} }
						setAttributes={ setAttributes }
						options={ [
							{
								value: 'M j, Y',
								label: dateI18n( 'M j, Y', today ),
							},
							{
								value: 'F j, Y',
								label: dateI18n( 'F j, Y', today ),
							},
							{
								value: 'm/d/Y',
								label: dateI18n( 'm/d/Y', today ),
							},
							{
								value: 'm-d-Y',
								label: dateI18n( 'm-d-Y', today ),
							},
							{
								value: 'm.d.Y',
								label: dateI18n( 'm.d.Y', today ),
							},
							{
								value: 'd M Y',
								label: dateI18n( 'd M Y', today ),
							},
							{
								value: 'd F Y',
								label: dateI18n( 'd F Y', today ),
							},
							{
								value: 'd-m-Y',
								label: dateI18n( 'd-m-Y', today ),
							},
							{
								value: 'd.m.Y',
								label: dateI18n( 'd.m.Y', today ),
							},
							{
								value: 'd/m/Y',
								label: dateI18n( 'd/m/Y', today ),
							},
							{
								value: 'Y-m-d',
								label: dateI18n( 'Y-m-d', today ),
							},
							{
								value: 'Y.m.d',
								label: dateI18n( 'Y.m.d', today ),
							},
							{
								value: 'Y/m/d',
								label: dateI18n( 'Y/m/d', today ),
							},
							{ value: 'M, Y', label: dateI18n( 'M, Y', today ) },
							{ value: 'M Y', label: dateI18n( 'M Y', today ) },
							{ value: 'F, Y', label: dateI18n( 'F, Y', today ) },
							{ value: 'F Y', label: dateI18n( 'F Y', today ) },
						] }
					/>
				) }
				<ToggleControl
					label={ __(
						'Display Post Excerpt',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostExcerpt }
					onChange={ () =>
						setAttributes( {
							displayPostExcerpt: ! displayPostExcerpt,
						} )
					}
				/>
				{ displayPostExcerpt && (
					<Range
						label={ __(
							'Excerpt Length',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ exerptLength }
						data={ {
							value: exerptLength,
							label: 'exerptLength',
						} }
						min={ 1 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }

				<ToggleControl
					label={ __(
						'Display Continue Reading Link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostLink }
					onChange={ () =>
						setAttributes( { displayPostLink: ! displayPostLink } )
					}
				/>
				{ displayPostLink && (
					<>
						<UAGTextControl
							label={ __(
								'CTA Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ readMoreText }
							data={{
								value: readMoreText,
								label: 'readMoreText',
							}}
							setAttributes={ setAttributes }
							onChange={ ( value ) =>
								setAttributes( { readMoreText: value } )
							}
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Open link in New Tab',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ linkTarget }
					onChange={ () =>
						setAttributes( { linkTarget: ! linkTarget } )
					}
				/>
				<ResponsiveSlider
					label={ __(
						'Border Radius',
						'ultimate-addons-for-gutenberg'
					) }
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
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const connectorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ getTimelineicon }
				/>
				{ icon && (
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
						max={ 30 }
						displayUnit={ false }
					/>
				) }
				<Range
					label={ __(
						'Icon Background Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ connectorBgsize }
					data={ {
						value: connectorBgsize,
						label: 'connectorBgsize',
					} }
					min={ 0 }
					max={ 90 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Border Width',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ borderwidth }
					data={ {
						value: borderwidth,
						label: 'borderwidth',
					} }
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Connector Thickness',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorwidth }
					data={ {
						value: separatorwidth,
						label: 'separatorwidth',
					} }
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const connectorColorsSettings = () => {
		const iconColorSettings = (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Connector Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorColor ? separatorColor : '' }
					data={ {
						value: separatorColor,
						label: 'separatorColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconColor ? iconColor : '' }
					data={ {
						value: iconColor,
						label: 'iconColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorBg ? separatorBg : '' }
					data={ {
						value: separatorBg,
						label: 'separatorBg',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorBorder ? separatorBorder : '' }
					data={ {
						value: separatorBorder,
						label: 'separatorBorder',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);

		const iconFocusSettings = (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Connector Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorFillColor ? separatorFillColor : '' }
					data={ {
						value: separatorFillColor,
						label: 'separatorFillColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconFocus ? iconFocus : '' }
					data={ {
						value: iconFocus,
						label: 'iconFocus',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconBgFocus ? iconBgFocus : '' }
					data={ {
						value: iconBgFocus,
						label: 'iconBgFocus',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ borderFocus ? borderFocus : '' }
					data={ {
						value: borderFocus,
						label: 'borderFocus',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Connector', 'ultimate-addons-for-gutenberg' ) }
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
							name: 'focus',
							title: __(
								'Focus',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={ iconColorSettings }
					focus={ iconFocusSettings }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const headingStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
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
					attributes={ props.attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headLoadGoogleFonts,
						label: 'headLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headFontFamily,
						label: 'headFontFamily',
					} }
					fontWeight={ {
						value: headFontWeight,
						label: 'headFontWeight',
					} }
					fontStyle={ {
						value: headFontStyle,
						label: 'headFontStyle',
					} }
					fontSizeType={ {
						value: headFontSizeType,
						label: 'headFontSizeType',
					} }
					fontSize={ { value: headFontSize, label: 'headFontSize' } }
					fontSizeMobile={ {
						value: headFontSizeMobile,
						label: 'headFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headFontSizeTablet,
						label: 'headFontSizeTablet',
					} }
					lineHeightType={ {
						value: headLineHeightType,
						label: 'headLineHeightType',
					} }
					lineHeight={ {
						value: headLineHeight,
						label: 'headLineHeight',
					} }
					lineHeightMobile={ {
						value: headLineHeightMobile,
						label: 'headLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headLineHeightTablet,
						label: 'headLineHeightTablet',
					} }
					letterSpacing={ {
						value: headLetterSpacing,
						label: 'headLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: headLetterSpacingTablet,
						label: 'headLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: headLetterSpacingMobile,
						label: 'headLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: headLetterSpacingType,
						label: 'headLetterSpacingType',
					} }
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __(
						'Top Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: headTopSpacing,
							label: 'headTopSpacing',
						},
						tablet: {
							value: headTopSpacingTablet,
							label: 'headTopSpacingTablet',
						},
						mobile: {
							value: headTopSpacingMobile,
							label: 'headTopSpacingMobile',
						},
					} }
					min={ 1 }
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: headSpace,
							label: 'headSpace',
						},
						tablet: {
							value: headSpaceTablet,
							label: 'headSpaceTablet',
						},
						mobile: {
							value: headSpaceMobile,
							label: 'headSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const authorStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Author', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ authorColor ? authorColor : '' }
					data={ {
						value: authorColor,
						label: 'authorColor',
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
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
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
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const contentStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					data={ {
						value: subHeadingColor,
						label: 'subHeadingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ props.attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: subHeadLoadGoogleFonts,
						label: 'subHeadLoadGoogleFonts',
					} }
					fontFamily={ {
						value: subHeadFontFamily,
						label: 'subHeadFontFamily',
					} }
					fontWeight={ {
						value: subHeadFontWeight,
						label: 'subHeadFontWeight',
					} }
					fontStyle={ {
						value: subHeadFontStyle,
						label: 'subHeadFontStyle',
					} }
					fontSizeType={ {
						value: subHeadFontSizeType,
						label: 'subHeadFontSizeType',
					} }
					fontSize={ {
						value: subHeadFontSize,
						label: 'subHeadFontSize',
					} }
					fontSizeMobile={ {
						value: subHeadFontSizeMobile,
						label: 'subHeadFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: subHeadFontSizeTablet,
						label: 'subHeadFontSizeTablet',
					} }
					lineHeightType={ {
						value: subHeadLineHeightType,
						label: 'subHeadLineHeightType',
					} }
					lineHeight={ {
						value: subHeadLineHeight,
						label: 'subHeadLineHeight',
					} }
					lineHeightMobile={ {
						value: subHeadLineHeightMobile,
						label: 'subHeadLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: subHeadLineHeightTablet,
						label: 'subHeadLineHeightTablet',
					} }
					letterSpacing={ {
						value: subHeadLetterSpacing,
						label: 'subHeadLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: subHeadLetterSpacingTablet,
						label: 'subHeadLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: subHeadLetterSpacingMobile,
						label: 'subHeadLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: subHeadLetterSpacingType,
						label: 'subHeadLetterSpacingType',
					} }
					transform={ {
						value: subHeadTransform,
						label: 'subHeadTransform',
					} }
					decoration={ {
						value: subHeadDecoration,
						label: 'subHeadDecoration',
					} }
				/>
				{ displayPostLink && (
					<Range
						label={ __(
							'Bottom Spacing',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ contentSpace }
						data={ {
							value: contentSpace,
							label: 'contentSpace',
						} }
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const dateStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Date', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ dateColor ? dateColor : '' }
					data={ {
						value: dateColor,
						label: 'dateColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ props.attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: dateLoadGoogleFonts,
						label: 'dateLoadGoogleFonts',
					} }
					fontFamily={ {
						value: dateFontFamily,
						label: 'dateFontFamily',
					} }
					fontWeight={ {
						value: dateFontWeight,
						label: 'dateFontWeight',
					} }
					fontStyle={ {
						value: dateFontStyle,
						label: 'dateFontStyle',
					} }
					fontSizeType={ {
						value: dateFontsizeType,
						label: 'dateFontsizeType',
					} }
					fontSize={ {
						value: dateFontsize,
						label: 'dateFontsize',
					} }
					fontSizeMobile={ {
						value: dateFontsizeMobile,
						label: 'dateFontsizeMobile',
					} }
					fontSizeTablet={ {
						value: dateFontsizeTablet,
						label: 'dateFontsizeTablet',
					} }
					lineHeightType={ {
						value: dateLineHeightType,
						label: 'dateLineHeightType',
					} }
					lineHeight={ {
						value: dateLineHeight,
						label: 'dateLineHeight',
					} }
					lineHeightMobile={ {
						value: dateLineHeightMobile,
						label: 'dateLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: dateLineHeightTablet,
						label: 'dateLineHeightTablet',
					} }
					letterSpacing={ {
						value: dateLetterSpacing,
						label: 'dateLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: dateLetterSpacingTablet,
						label: 'dateLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: dateLetterSpacingMobile,
						label: 'dateLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: dateLetterSpacingType,
						label: 'dateLetterSpacingType',
					} }
					transform={ {
						value: dateTransform,
						label: 'dateTransform',
					} }
					decoration={ {
						value: dateDecoration,
						label: 'dateDecoration',
					} }
				/>
				{ timelinAlignment !== 'center' && (
					<ResponsiveSlider
						label={ __(
							'Bottom Spacing',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							desktop: {
								value: dateBottomspace,
								label: 'dateBottomspace',
							},
							tablet: {
								value: dateBottomspaceTablet,
								label: 'dateBottomspaceTablet',
							},
							mobile: {
								value: dateBottomspaceMobile,
								label: 'dateBottomspaceMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const ctaStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'CTA', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ ctaColor ? ctaColor : '' }
					data={ {
						value: ctaColor,
						label: 'ctaColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaBackground ? ctaBackground : '' }
					data={ {
						value: ctaBackground,
						label: 'ctaBackground',
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
						value: ctaLoadGoogleFonts,
						label: 'ctaLoadGoogleFonts',
					} }
					fontFamily={ {
						value: ctaFontFamily,
						label: 'ctaFontFamily',
					} }
					fontWeight={ {
						value: ctaFontWeight,
						label: 'ctaFontWeight',
					} }
					fontStyle={ {
						value: ctaFontStyle,
						label: 'ctaFontStyle',
					} }
					fontSizeType={ {
						value: ctaFontSizeType,
						label: 'ctaFontSizeType',
					} }
					fontSize={ {
						value: ctaFontSize,
						label: 'ctaFontSize',
					} }
					fontSizeMobile={ {
						value: ctaFontSizeMobile,
						label: 'ctaFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: ctaFontSizeTablet,
						label: 'ctaFontSizeTablet',
					} }
					lineHeightType={ {
						value: ctaLineHeightType,
						label: 'ctaLineHeightType',
					} }
					lineHeight={ {
						value: ctaLineHeight,
						label: 'ctaLineHeight',
					} }
					lineHeightMobile={ {
						value: ctaLineHeightMobile,
						label: 'ctaLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: ctaLineHeightTablet,
						label: 'ctaLineHeightTablet',
					} }
					letterSpacing={ {
						value: ctaLetterSpacing,
						label: 'ctaLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: ctaLetterSpacingTablet,
						label: 'ctaLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: ctaLetterSpacingMobile,
						label: 'ctaLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: ctaLetterSpacingType,
						label: 'ctaLetterSpacingType',
					} }
					transform={ {
						value: ctaTransform,
						label: 'ctaTransform',
					} }
					decoration={ {
						value: ctaDecoration,
						label: 'ctaDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: ctaBottomSpacing,
							label: 'ctaBottomSpacing',
						},
						tablet: {
							value: ctaBottomSpacingTablet,
							label: 'ctaBottomSpacingTablet',
						},
						mobile: {
							value: ctaBottomSpacingMobile,
							label: 'ctaBottomSpacingMobile',
						},
					} }
					min={ 1 }
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const backgroundColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ backgroundColor ? backgroundColor : '' }
					data={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __(
						'Post Padding',
						'ultimate-addons-for-gutenberg'
					) }
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
						value: paddingUnit,
						label: 'paddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					attributes={ props }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<ResponsiveSlider
					label={ __(
						'Gap Between Posts',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: verticalSpace,
							label: 'verticalSpace',
							unit: {
								value: verticalSpaceUnit,
								label: 'verticalSpaceUnit',
							},
						},
						tablet: {
							value: verticalSpaceTablet,
							label: 'verticalSpaceTablet',
							unit: {
								value: verticalSpaceUnitTablet,
								label: 'verticalSpaceUnitTablet',
							},
						},
						mobile: {
							value: verticalSpaceMobile,
							label: 'verticalSpaceMobile',
							unit: {
								value: verticalSpaceUnitMobile,
								label: 'verticalSpaceUnitMobile',
							},
						},
					} }
					min={ 0 }
					limitMax={ { 'px': 100, '%': 100, 'em': 100 } }
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
							name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Post - Marker Gap',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: horizontalSpace,
							label: 'horizontalSpace',
							unit: {
								value: horizontalSpaceUnit,
								label: 'horizontalSpaceUnit',
							},
						},
						tablet: {
							value: horizontalSpaceTablet,
							label: 'horizontalSpaceTablet',
							unit: {
								value: horizontalSpaceUnitTablet,
								label: 'horizontalSpaceUnitTablet',
							},
						},
						mobile: {
							value: horizontalSpaceMobile,
							label: 'horizontalSpaceMobile',
							unit: {
								value: horizontalSpaceUnitMobile,
								label: 'horizontalSpaceUnitMobile',
							},
						},
					} }
					min={ 0 }
					limitMax={ { 'px': 50, '%': 100, 'em': 50 } }
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
							name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ querySettings() }
						{ layoutSettings() }
						{ ImageSetting() }
						{ contentSettings() }
						{ connectorSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ headingStyleSettings() }
						{ displayPostAuthor && authorStyleSettings() }
						{ displayPostExcerpt && contentStyleSettings() }
						{ displayPostDate && dateStyleSettings() }
						{ displayPostLink && ctaStyleSettings() }
						{ backgroundColorSettings() }
						{ connectorColorsSettings() }
						{ spacingSettings() }
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
