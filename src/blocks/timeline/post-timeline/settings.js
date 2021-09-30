import UAGIconPicker from '@Components/icon-picker';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import React from 'react';
import { __ } from '@wordpress/i18n';
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
import { dateI18n } from '@wordpress/date';
import {
	PanelBody,
	QueryControls,
	SelectControl,
	ToggleControl,
	TextControl,
	Icon,
} from '@wordpress/components';
import {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, categoriesList, setAttributes, taxonomyList } = props;

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
		timelinAlignment,
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
		separatorwidth,
		borderwidth,
		connectorBgsize,
		authorSpace,
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
		displayPostDate,
		displayPostExcerpt,
		displayPostAuthor,
		displayPostImage,
		displayPostLink,
		align,
		order,
		orderBy,
		categories,
		postsToShow,
		imageSize,
		readMoreText,
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
		contentPadding,
		iconFocus,
		iconBgFocus,
		stack,
		linkTarget,
		postType,
		taxonomyType,
		dateFormat,
		excludeCurrentPost,
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
		marginUnit,
		mobileMarginUnit,
		tabletMarginUnit,
		marginLink,
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
		ctaDecoration
	} = attributes;

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

	if ( '' !== taxonomyList ) {
		Object.keys( taxonomyList ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: taxonomyList[ item ].label,
			} );
		} );
	}

	if ( '' !== categoriesList ) {
		Object.keys( categoriesList ).map( ( item ) => {
			return categoryListOptions.push( {
				value: categoriesList[ item ].id,
				label: categoriesList[ item ].name,
			} );
		} );
	}

	let loadHeadGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadDateGoogleFonts;
	let loadAuthorGoogleFonts;
	let loadCtaGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const headconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadGoogleFonts = (
			<WebfontLoader config={ headconfig }></WebfontLoader>
		);
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const subHeadconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadGoogleFonts = (
			<WebfontLoader config={ subHeadconfig }></WebfontLoader>
		);
	}

	if ( dateLoadGoogleFonts === true ) {
		const dateconfig = {
			google: {
				families: [
					dateFontFamily +
						( dateFontWeight ? ':' + dateFontWeight : '' ),
				],
			},
		};

		loadDateGoogleFonts = (
			<WebfontLoader config={ dateconfig }></WebfontLoader>
		);
	}

	if ( authorLoadGoogleFonts === true ) {
		const authorconfig = {
			google: {
				families: [
					authorFontFamily +
						( authorFontWeight ? ':' + authorFontWeight : '' ),
				],
			},
		};

		loadAuthorGoogleFonts = (
			<WebfontLoader config={ authorconfig }></WebfontLoader>
		);
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [
					ctaFontFamily +
						( ctaFontWeight ? ':' + ctaFontWeight : '' ),
				],
			},
		};

		loadCtaGoogleFonts = (
			<WebfontLoader config={ ctaconfig }></WebfontLoader>
		);
	}

	const today = new Date();

	const querySettings = () => {
		return (
			<PanelBody
				title={ __( 'Query', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Post Type', 'ultimate-addons-for-gutenberg' ) }
					value={ postType }
					onChange={ ( value ) => onSelectPostType( value ) }
					options={ uagb_blocks_info.post_types }
				/>
				{ '' !== taxonomyList && (
					<SelectControl
						label={ __(
							'Taxonomy',
							'ultimate-addons-for-gutenberg'
						) }
						value={ taxonomyType }
						onChange={ ( value ) => onSelectTaxonomyType( value ) }
						options={ taxonomyListOptions }
					/>
				) }
				{ '' != categoriesList && ( // eslint-disable-line eqeqeq
					<>
						<SelectControl
							label={ taxonomyList[ taxonomyType ].label }
							value={ categories }
							onChange={ ( value ) =>
								setAttributes( { categories: value } )
							}
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
			</PanelBody>
		);
	};
	const layoutSettings = () => {
		return (
			<PanelBody
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
						value: timelinAlignment,
						label: 'timelinAlignment',
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
							tooltip: __(
								'Top',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'bottom',
							label: __(
								'Bottom',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Bottom',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							label: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Stack On', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: stack,
						label: 'stack',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'none',
							label: 'None',
							tooltip: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'tablet',
							label: 'Tablet',
							tooltip: __(
								'Tablet',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'mobile',
							label: 'Mobile',
							tooltip: __(
								'Mobile',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
					help={ __(
						'Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</PanelBody>
		);
	};
	const ImageSetting = () => {
		return (
			<PanelBody
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
					<SelectControl
						label={ __(
							'Featured Image Style',
							'ultimate-addons-for-gutenberg'
						) }
						options={ uagb_blocks_info.image_sizes }
						value={ imageSize }
						onChange={ ( value ) =>
							props.setAttributes( { imageSize: value } )
						}
					/>
				) }
			</PanelBody>
		);
	};
	const contentSettings = () => {
		return (
			<PanelBody
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
					<SelectControl
						label={ __(
							'Date Format',
							'ultimate-addons-for-gutenberg'
						) }
						value={ dateFormat }
						onChange={ ( value ) =>
							setAttributes( { dateFormat: value } )
						}
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
						onChange={ ( value ) =>
							setAttributes( { exerptLength: value } )
						}
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
						<TextControl
							label={ __(
								'CTA Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ readMoreText }
							onChange={ ( value ) =>
								setAttributes( { readMoreText: value } )
							}
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Open links in New Tab',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ linkTarget }
					onChange={ () =>
						setAttributes( { linkTarget: ! linkTarget } )
					}
				/>
				<Range
					label={ __(
						'Rounded Corners',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ borderRadius }
					onChange={ ( value ) =>
						setAttributes( { borderRadius: value } )
					}
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};
	const connectorSettings = () => {
		return (
			<PanelBody
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
						onChange={ ( value ) =>
							setAttributes( { iconSize: value } )
						}
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
					onChange={ ( value ) =>
						setAttributes( { connectorBgsize: value } )
					}
					min={ 25 }
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
					onChange={ ( value ) =>
						setAttributes( { borderwidth: value } )
					}
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Connector Width',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorwidth }
					onChange={ ( value ) =>
						setAttributes( { separatorwidth: value } )
					}
					min={ 1 }
					max={ 10 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};
	const connectorColorsSettings = () => {
		const iconColorSettings = (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Line Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorColor ? separatorColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconColor ? iconColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorBg ? separatorBg : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorBg: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorBorder ? separatorBorder : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorBorder: value } )
					}
				/>
			</>
		);

		const iconFocusSettings = (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Line Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ separatorFillColor ? separatorFillColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { separatorFillColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconFocus ? iconFocus : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconFocus: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Icon Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ iconBgFocus ? iconBgFocus : '' }
					onColorChange={ ( value ) =>
						setAttributes( { iconBgFocus: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ borderFocus ? borderFocus : '' }
					onColorChange={ ( value ) =>
						setAttributes( { borderFocus: value } )
					}
				/>
			</>
		);

		return (
			<PanelBody
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
			</PanelBody>
		);
	};
	const headingStyleSettings = () => {
		return (
			<PanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
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
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
				/>
				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ headSpace }
					onChange={ ( value ) =>
						setAttributes( { headSpace: value } )
					}
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};
	const authorStyleSettings = () => {
		return (
			<PanelBody
				title={ __( 'Author', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ authorColor ? authorColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { authorColor: value } )
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
					transform={ {
						value: authorTransform,
						label: 'authorTransform',
					} }
					decoration={ {
						value: authorDecoration,
						label: 'authorDecoration',
					} }
				/>
				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ authorSpace }
					onChange={ ( value ) =>
						setAttributes( { authorSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};
	const contentStyleSettings = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { subHeadingColor: value } )
					}
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
						onChange={ ( value ) =>
							setAttributes( { contentSpace: value } )
						}
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
			</PanelBody>
		);
	};
	const dateStyleSettings = () => {
		return (
			<PanelBody
				title={ __( 'Date', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ dateColor ? dateColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { dateColor: value } )
					}
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
					<Range
						label={ __(
							'Bottom Spacing',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ dateBottomspace }
						onChange={ ( value ) =>
							setAttributes( { dateBottomspace: value } )
						}
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
			</PanelBody>
		);
	};
	const ctaStyleSettings = () => {
		return (
			<PanelBody
				title={ __( 'CTA', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ ctaColor ? ctaColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaBackground ? ctaBackground : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaBackground: value } )
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
					transform={ {
						value: ctaTransform,
						label: 'ctaTransform',
					} }
					decoration={ {
						value: ctaDecoration,
						label: 'ctaDecoration',
					} }
				/>
			</PanelBody>
		);
	};
	const backgroundColorSettings = () => {
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
	const spacingSettings = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Range
					label={ __(
						'Content Padding',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ contentPadding }
					onChange={ ( value ) =>
						setAttributes( { contentPadding: value } )
					}
					min={ 1 }
					max={ 50 }
					displayUnit={ false }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Block Padding',
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
				<SpacingControl
					{ ...props }
					label={ __(
						'Block Margin',
						'ultimate-addons-for-gutenberg'
					) }
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
						value: marginUnit,
						label: 'marginUnit',
					} }
					mUnit={ {
						value: mobileMarginUnit,
						label: 'mobileMarginUnit',
					} }
					tUnit={ {
						value: tabletMarginUnit,
						label: 'tabletMarginUnit',
					} }
					attributes={ props }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</PanelBody>
		);
	};
	const blockControls = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'center', 'left', 'right' ] }
				/>
			</BlockControls>
		);
	};
	return (
		<>
			{ blockControls() }
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
			{ loadHeadGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadDateGoogleFonts }
			{ loadAuthorGoogleFonts }
			{ loadCtaGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
