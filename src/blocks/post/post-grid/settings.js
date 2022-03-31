/**
 * BLOCK: Post Grid - Settings.
 */

import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import Border from '@Components/border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import UAGTabsControl from '@Components/tabs';
const MAX_POSTS_COLUMNS = 8;

import {
	SelectControl,
	ToggleControl,
	ToolbarGroup,
	TextControl,
	RadioControl,
	Icon,
} from '@wordpress/components';

import {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	// Caching all Props
	const {
		attributes,
		setAttributes,
		latestPosts,
		categoriesList,
		deviceType,
		taxonomyList,
	} = props.parentProps;

	// Caching all attributes.
	const {
		displayPostTitle,
		displayPostDate,
		displayPostComment,
		displayPostExcerpt,
		displayPostAuthor,
		displayPostImage,
		displayPostTaxonomy,
		imgSize,
		imgPosition,
		displayPostLink,
		newTab,
		ctaText,
		borderWidth,
		borderStyle,
		borderColor,
		borderHColor,
		borderRadius,
		align,
		columns,
		tcolumns,
		mcolumns,
		order,
		orderBy,
		categories,
		postsToShow,
		rowGap,
		columnGap,
		bgColor,
		contentPaddingUnit,
		titleColor,
		titleTag,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleFontStyle,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		metaFontFamily,
		metaFontWeight,
		metaFontStyle,
		metaLineHeightType,
		metaLineHeight,
		metaLineHeightTablet,
		metaLineHeightMobile,
		metaLoadGoogleFonts,
		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		excerptFontFamily,
		excerptFontWeight,
		excerptFontStyle,
		excerptLineHeightType,
		excerptLineHeight,
		excerptLineHeightTablet,
		excerptLineHeightMobile,
		excerptLoadGoogleFonts,
		ctaFontSize,
		ctaFontSizeType,
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
		metaColor,
		excerptColor,
		ctaColor,
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		imageBottomSpace,
		titleBottomSpace,
		metaBottomSpace,
		excerptBottomSpace,
		excerptBottomSpaceUnit,
		ctaBottomSpace,
		equalHeight,
		excerptLength,
		overlayOpacity,
		bgOverlayColor,
		linkBox,
		postType,
		taxonomyType,
		postPagination,
		pageLimit,
		paginationColor,
		paginationBgColor,
		paginationActiveColor,
		paginationBgActiveColor,
		paginationLayout,
		paginationBorderSize,
		paginationBorderRadius,
		paginationBorderColor,
		paginationBorderActiveColor,
		paginationSpacing,
		paginationSpacingUnit,
		paginationAlignment,
		paginationPrevText,
		paginationNextText,
		postDisplaytext,
		displayPostContentRadio,
		excludeCurrentPost,
		rowGapUnit,
		columnGapUnit,
		imageBottomSpaceUnit,
		titleBottomSpaceUnit,
		metaBottomSpaceUnit,
		ctaBottomSpaceUnit,
		titleTransform,
		metaTransform,
		excerptTransform,
		ctaTransform,
		titleDecoration,
		metaDecoration,
		excerptDecoration,
		ctaDecoration,
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
		spacingLink,
		spacingLinkPadding,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTopTablet,
		paddingRightTablet,
		paddingBottomTablet,
		paddingLeftTablet,
		paddingTopMobile,
		paddingRightMobile,
		paddingBottomMobile,
		paddingLeftMobile,
		mobilePaddingUnit,
		tabletPaddingUnit,
		postsOffset,
		taxStyle,
		taxDivider,
		displayPostTaxonomyAboveTitle,
		hideTaxonomyIcon,
		highlightedTextColor,
		highlightedTextBgColor
	} = attributes;

	const onSelectPostType = ( value ) => {
		setAttributes( { postType: value } );
		setAttributes( { categories: '' } );
		setAttributes( { taxonomyType: 'category' } );
	};
	const onSelectTaxonomyType = ( value ) => {
		setAttributes( { taxonomyType: value } );
		setAttributes( { categories: '' } );
	};
	const onSelectPagination = ( value ) => {
		setAttributes( { postPagination: value } );
		setAttributes( { paginationMarkup: 'empty' } );
	};
	const onChangePostsPerPage = ( value ) => {
		setAttributes( { postsToShow: value } );
		setAttributes( { paginationMarkup: 'empty' } );
	};
	const onChangePostsOffset = ( value ) => {
		setAttributes( { postsOffset: value } );
		setAttributes( { paginationMarkup: 'empty' } );
	};
	const onChangePageLimit = ( value ) => {
		setAttributes( { pageLimit: value } );
		setAttributes( { paginationMarkup: 'empty' } );
	};
	const onChangePrevText = ( value ) => {
		setAttributes( { paginationPrevText: value } );
		setAttributes( { paginationMarkup: 'empty' } );
	};
	const onChangeNextText = ( value ) => {
		setAttributes( { paginationNextText: value } );
		setAttributes( { paginationMarkup: 'empty' } );
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

	const blockControlsSettings = () => {
		const { isEditing } = props.state;

		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
				<ToolbarGroup
					controls={ [
						{
							icon: 'edit',
							title: __( 'Edit' ),
							onClick: () => props.togglePreview(),
							isActive: isEditing,
						},
					] }
				/>
			</BlockControls>
		);
	};

	let loadTitleGoogleFonts;
	let loadMetaGoogleFonts;
	let loadExcerptGoogleFonts;
	let loadCtaGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
		);
	}

	if ( metaLoadGoogleFonts === true ) {
		const metaconfig = {
			google: {
				families: [
					metaFontFamily +
						( metaFontWeight ? ':' + metaFontWeight : '' ),
				],
			},
		};

		loadMetaGoogleFonts = (
			<WebfontLoader config={ metaconfig }></WebfontLoader>
		);
	}

	if ( excerptLoadGoogleFonts === true ) {
		const excerptconfig = {
			google: {
				families: [
					excerptFontFamily +
						( excerptFontWeight ? ':' + excerptFontWeight : '' ),
				],
			},
		};

		loadExcerptGoogleFonts = (
			<WebfontLoader config={ excerptconfig }></WebfontLoader>
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
	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
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
				<Range
					label={ __(
						'Posts Per Page',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ postsToShow }
					onChange={ onChangePostsPerPage }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Offset Starting Post',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ postsOffset }
					onChange={ onChangePostsOffset }
					min={ 0 }
					max={ 500 }
					displayUnit={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Order By', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: orderBy,
						label: 'orderBy',
					} }
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
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Order', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: order,
						label: 'order',
					} }
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
				/>
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
					min={ 0 }
					max={
						! hasPosts
							? MAX_POSTS_COLUMNS
							: Math.min( MAX_POSTS_COLUMNS, latestPosts.length )
					}
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<ToggleControl
					label={ __(
						'Equal Height',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ equalHeight }
					onChange={ () =>
						setAttributes( { equalHeight: ! equalHeight } )
					}
				/>
				<ToggleControl
					label={ __(
						'Post Pagination',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ postPagination }
					onChange={ onSelectPagination }
				/>
				{ postPagination === true && (
					<Range
						label={ __(
							'Page Limit',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ pageLimit }
						onChange={ onChangePageLimit }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>
				) }
				<h2>
					{ __(
						'If Posts Not Found',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<TextControl
					autoComplete="off"
					label={ __(
						'Display Message',
						'ultimate-addons-for-gutenberg'
					) }
					value={ postDisplaytext }
					onChange={ ( value ) =>
						setAttributes( { postDisplaytext: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const paginationSettings = () => {
		if ( true !== postPagination ) {
			return;
		}

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Pagination', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Pagination Layout',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: paginationLayout,
						label: 'paginationLayout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'border',
							label: 'Border',
						},
						{
							value: 'filled',
							label: 'Filled',
						},
					] }
					showIcons={ false }
				/>
				<TextControl
					label={ __(
						'Previous Text',
						'ultimate-addons-for-gutenberg'
					) }
					value={ paginationPrevText }
					onChange={ onChangePrevText }
				/>
				<TextControl
					label={ __( 'Next Text', 'ultimate-addons-for-gutenberg' ) }
					value={ paginationNextText }
					onChange={ onChangeNextText }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const imageSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Featured Image',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostImage }
					onChange={ () =>
						setAttributes( {
							displayPostImage: ! displayPostImage,
						} )
					}
				/>
				{ displayPostImage === true && (
					<SelectControl
						label={ __( 'Sizes', 'ultimate-addons-for-gutenberg' ) }
						value={ imgSize }
						onChange={ ( value ) =>
							setAttributes( { imgSize: value } )
						}
						options={ uagb_blocks_info.image_sizes }
					/>
				) }
				{ displayPostImage === true && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: imgPosition,
							label: 'imgPosition',
						} }
						options={ [
							{
								value: 'top',
								label: __(
									'Top',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'background',
								label: __(
									'Background',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
				{ displayPostImage === true && imgPosition === 'background' && (
					<ToggleControl
						label={ __(
							'Link Complete Box',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ linkBox }
						onChange={ () =>
							setAttributes( { linkBox: ! linkBox } )
						}
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
				<ToggleControl
					label={ __(
						'Show Title',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTitle }
					onChange={ () =>
						setAttributes( {
							displayPostTitle: ! displayPostTitle,
						} )
					}
				/>
				{ displayPostTitle && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'HTML Tag',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: titleTag,
							label: 'titleTag',
						} }
						options={ [
							{
								value: 'h1',
								label: __(
									'H1',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'h2',
								label: __(
									'H2',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'h3',
								label: __(
									'H3',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'h4',
								label: __(
									'H4',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'h5',
								label: __(
									'H5',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'h6',
								label: __(
									'H6',
									'ultimate-addons-for-gutenberg'
								),
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
								label: __(
									'P',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
				<ToggleControl
					label={ __(
						'Show Author',
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
					label={ __( 'Show Date', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostDate }
					onChange={ () =>
						setAttributes( { displayPostDate: ! displayPostDate } )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Comment',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostComment }
					onChange={ () =>
						setAttributes( {
							displayPostComment: ! displayPostComment,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Taxonomy',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTaxonomy }
					onChange={ () =>
						setAttributes( {
							displayPostTaxonomy: ! displayPostTaxonomy,
						} )
					}
				/>
				{ displayPostTaxonomy && (
				<>
				<ToggleControl
					label={ __(
						'Show Taxonomy Above Title',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTaxonomyAboveTitle }
					onChange={ () =>
						setAttributes( {
							displayPostTaxonomyAboveTitle: ! displayPostTaxonomyAboveTitle,
						} )
					}
				/>
				{ displayPostTaxonomyAboveTitle && (
				<>
				<ToggleControl
					label={ __(
						'Show Taxonomy Icon',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ hideTaxonomyIcon }
					onChange={ () =>
						setAttributes( {
							hideTaxonomyIcon: ! hideTaxonomyIcon,
						} )
					}
				/>
				<SelectControl
					label={ __( 'Taxonomy Style', 'ultimate-addons-for-gutenberg' ) }
					value={ taxStyle }
					onChange={ ( value ) =>
						setAttributes( { taxStyle: value } )
					}
					options={ [
						{
							value: 'default',
							label: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'highlighted',
							label: __(
								'Highlighted',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'default' === taxStyle && (
					<TextControl
						label={ __( 'Taxonomy Divider', 'ultimate-addons-for-gutenberg' ) }
						value={ taxDivider }
						onChange={ ( value ) =>
							setAttributes( {
								taxDivider: value,
							} )
						}
					/>
				) }
				</>
				) }
				</>
				) }
				<ToggleControl
					label={ __(
						'Show Excerpt',
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
					<RadioControl
						label={ __( 'Show:', 'ultimate-addons-for-gutenberg' ) }
						selected={ displayPostContentRadio }
						options={ [
							{
								label: __(
									'Excerpt',
									'ultimate-addons-for-gutenberg'
								),
								value: 'excerpt',
							},
							{
								label: __(
									'Full post',
									'ultimate-addons-for-gutenberg'
								),
								value: 'full_post',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( {
								displayPostContentRadio: value,
							} )
						}
					/>
				) }
				{ displayPostExcerpt &&
					displayPostContentRadio === 'excerpt' && (
						<Range
							label={ __(
								'Max number of words in excerpt',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ excerptLength }
							onChange={ ( value ) =>
								setAttributes( { excerptLength: value } )
							}
							min={ 1 }
							max={ 100 }
							displayUnit={ false }
						/>
					) }
			</UAGAdvancedPanelBody>
		);
	};
	const readMoreLinkSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Read More Link',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Read More Link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostLink }
					onChange={ () =>
						setAttributes( { displayPostLink: ! displayPostLink } )
					}
				/>
				{ displayPostLink && (
					<>
						<ToggleControl
							label={ __(
								'Open links in New Tab',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ newTab }
							onChange={ () =>
								setAttributes( { newTab: ! newTab } )
							}
						/>
						<TextControl
							label={ __(
								'Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaText }
							onChange={ ( value ) =>
								setAttributes( { ctaText: value } )
							}
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Blog Settings', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ bgColor }
					onColorChange={ ( value ) =>
						setAttributes( { bgColor: value } )
					}
				/>
				<Range
					label={ __( 'Column Gap', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ rowGap }
					onChange={ ( value ) => setAttributes( { rowGap: value } ) }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: rowGapUnit,
						label: 'rowGapUnit',
					} }
				/>
				<Range
					label={ __(
						'Row Gap',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ columnGap }
					onChange={ ( value ) =>
						setAttributes( { columnGap: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: columnGapUnit,
						label: 'columnGapUnit',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Content Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: paddingTop,
						label: 'paddingTop',
					} }
					valueRight={ {
						value: paddingRight,
						label: 'paddingRight',
					} }
					valueBottom={ {
						value: paddingBottom,
						label: 'paddingBottom',
					} }
					valueLeft={ {
						value: paddingLeft,
						label: 'paddingLeft',
					} }
					valueTopTablet={ {
						value: paddingTopTablet,
						label: 'paddingTopTablet',
					} }
					valueRightTablet={ {
						value: paddingRightTablet,
						label: 'paddingRightTablet',
					} }
					valueBottomTablet={ {
						value: paddingBottomTablet,
						label: 'paddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: paddingLeftTablet,
						label: 'paddingLeftTablet',
					} }
					valueTopMobile={ {
						value: paddingTopMobile,
						label: 'paddingTopMobile',
					} }
					valueRightMobile={ {
						value: paddingRightMobile,
						label: 'paddingRightMobile',
					} }
					valueBottomMobile={ {
						value: paddingBottomMobile,
						label: 'paddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: paddingLeftMobile,
						label: 'paddingLeftMobile',
					} }
					unit={ {
						value: contentPaddingUnit,
						label: 'contentPaddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLinkPadding,
						label: 'spacingLinkPadding',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const imageStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
			{imgPosition === 'background' &&
				<>
					<AdvancedPopColorControl
						label={ __(
							'Background Overlay Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ bgOverlayColor }
						onColorChange={ ( value ) =>
							setAttributes( { bgOverlayColor: value } )
						}
					/>
					<Range
						label={ __(
							'Overlay Opacity',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ overlayOpacity }
						onChange={ ( value ) =>
							setAttributes( { overlayOpacity: value } )
						}
						min={ 0 }
						max={ 100 }
					/>
				</>
			}
			{imgPosition === 'top' &&
				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ imageBottomSpace }
					onChange={ ( value ) =>
						setAttributes( { imageBottomSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: imageBottomSpaceUnit,
						label: 'imageBottomSpaceUnit',
					} }
				/>
			}
			</UAGAdvancedPanelBody>
		);
	};

	const titleStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ titleColor }
					onColorChange={ ( value ) =>
						setAttributes( { titleColor: value } )
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
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
				/>
				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ titleBottomSpace }
					onChange={ ( value ) =>
						setAttributes( { titleBottomSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: titleBottomSpaceUnit,
						label: 'titleBottomSpaceUnit',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const metaStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Meta', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ metaColor }
					onColorChange={ ( value ) =>
						setAttributes( { metaColor: value } )
					}
				/>
				{ 'highlighted' === taxStyle && (
					<>
					<AdvancedPopColorControl
						label={ __( 'Taxonomy Text Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ highlightedTextColor }
						onColorChange={ ( value ) =>
							setAttributes( { highlightedTextColor: value } )
						}
					/>
					<AdvancedPopColorControl
						label={ __( 'Highlighted Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ highlightedTextBgColor }
						onColorChange={ ( value ) =>
							setAttributes( { highlightedTextBgColor: value } )
						}
					/>
					</>
				)}

				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: metaLoadGoogleFonts,
						label: 'metaLoadGoogleFonts',
					} }
					fontFamily={ {
						value: metaFontFamily,
						label: 'metaFontFamily',
					} }
					fontWeight={ {
						value: metaFontWeight,
						label: 'metaFontWeight',
					} }
					fontStyle={ {
						value: metaFontStyle,
						label: 'metaFontStyle',
					} }
					fontSizeType={ {
						value: metaFontSizeType,
						label: 'metaFontSizeType',
					} }
					fontSize={ {
						value: metaFontSize,
						label: 'metaFontSize',
					} }
					fontSizeMobile={ {
						value: metaFontSizeMobile,
						label: 'metaFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: metaFontSizeTablet,
						label: 'metaFontSizeTablet',
					} }
					lineHeightType={ {
						value: metaLineHeightType,
						label: 'metaLineHeightType',
					} }
					lineHeight={ {
						value: metaLineHeight,
						label: 'metaLineHeight',
					} }
					lineHeightMobile={ {
						value: metaLineHeightMobile,
						label: 'metaLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: metaLineHeightTablet,
						label: 'metaLineHeightTablet',
					} }
					transform={ {
						value: metaTransform,
						label: 'metaTransform',
					} }
					decoration={ {
						value: metaDecoration,
						label: 'metaDecoration',
					} }
				/>

				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ metaBottomSpace }
					onChange={ ( value ) =>
						setAttributes( { metaBottomSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: metaBottomSpaceUnit,
						label: 'metaBottomSpaceUnit',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const excerptStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Excerpt', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ excerptColor }
					onColorChange={ ( value ) =>
						setAttributes( { excerptColor: value } )
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
						value: excerptLoadGoogleFonts,
						label: 'excerptLoadGoogleFonts',
					} }
					fontFamily={ {
						value: excerptFontFamily,
						label: 'excerptFontFamily',
					} }
					fontWeight={ {
						value: excerptFontWeight,
						label: 'excerptFontWeight',
					} }
					fontStyle={ {
						value: excerptFontStyle,
						label: 'excerptFontStyle',
					} }
					fontSizeType={ {
						value: excerptFontSizeType,
						label: 'excerptFontSizeType',
					} }
					fontSize={ {
						value: excerptFontSize,
						label: 'excerptFontSize',
					} }
					fontSizeMobile={ {
						value: excerptFontSizeMobile,
						label: 'excerptFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: excerptFontSizeTablet,
						label: 'excerptFontSizeTablet',
					} }
					lineHeightType={ {
						value: excerptLineHeightType,
						label: 'excerptLineHeightType',
					} }
					lineHeight={ {
						value: excerptLineHeight,
						label: 'excerptLineHeight',
					} }
					lineHeightMobile={ {
						value: excerptLineHeightMobile,
						label: 'excerptLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: excerptLineHeightTablet,
						label: 'excerptLineHeightTablet',
					} }
					transform={ {
						value: excerptTransform,
						label: 'excerptTransform',
					} }
					decoration={ {
						value: excerptDecoration,
						label: 'excerptDecoration',
					} }
				/>
				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ excerptBottomSpace }
					onChange={ ( value ) =>
						setAttributes( { excerptBottomSpace: value } )
					}
					min={ 0 }
					max={ 50 }
					unit={ {
						value: excerptBottomSpaceUnit,
						label: 'excerptBottomSpaceUnit',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const readMoreLinkStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Read More Link',
					'ultimate-addons-for-gutenberg'
				) }
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
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaColor }
								onColorChange={ ( value ) =>
									setAttributes( { ctaColor: value } )
								}
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaBgColor }
								onColorChange={ ( value ) =>
									setAttributes( { ctaBgColor: value } )
								}
							/>
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaHColor }
								onColorChange={ ( value ) =>
									setAttributes( { ctaHColor: value } )
								}
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaBgHColor }
								onColorChange={ ( value ) =>
									setAttributes( { ctaBgHColor: value } )
								}
							/>
						</>
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
				<Border
					disableBottomSeparator={ false }
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __(
							'Style',
							'ultimate-addons-for-gutenberg'
						),
					} }
					borderWidth={ {
						value: borderWidth,
						label: 'borderWidth',
						title: __(
							'Width',
							'ultimate-addons-for-gutenberg'
						),
					} }
					borderRadius={ {
						value: borderRadius,
						label: 'borderRadius',
						title: __(
							'Radius',
							'ultimate-addons-for-gutenberg'
						),
					} }
					borderColor={ {
						value: borderColor,
						label: 'borderColor',
						title: __(
							'Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					borderHoverColor={ {
						value: borderHColor,
						label: 'borderHColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
				/>
				<Range
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ ctaBottomSpace }
					onChange={ ( value ) =>
						setAttributes( { ctaBottomSpace: value } )
					}
					min={ 0 }
					max={ 300 }
					unit={ {
						value: ctaBottomSpaceUnit,
						label: 'ctaBottomSpaceUnit',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Button Padding',
						'ultimate-addons-for-gutenberg'
					) }
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
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const paginationStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Pagination', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Pagination Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: paginationAlignment,
						label: 'paginationAlignment',
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
							name: 'active',
							title: __(
								'Active',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Text Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ paginationColor }
								onColorChange={ ( value ) =>
									setAttributes( { paginationColor: value } )
								}
							/>
							{ paginationLayout === 'filled' && (
								<AdvancedPopColorControl
									label={ __(
										'Background Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={ paginationBgColor }
									onColorChange={ ( value ) =>
										setAttributes( {
											paginationBgColor: value,
										} )
									}
								/>
							) }
							{ paginationLayout === 'border' && (
								<AdvancedPopColorControl
									label={ __(
										'Border Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={ paginationBorderColor }
									onColorChange={ ( value ) =>
										setAttributes( {
											paginationBorderColor: value,
										} )
									}
								/>
							) }
						</>
					}
					active={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Text Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ paginationActiveColor }
								onColorChange={ ( value ) =>
									setAttributes( {
										paginationActiveColor: value,
									} )
								}
							/>
							{ paginationLayout === 'filled' && (
								<AdvancedPopColorControl
									label={ __(
										'Background Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={ paginationBgActiveColor }
									onColorChange={ ( value ) =>
										setAttributes( {
											paginationBgActiveColor: value,
										} )
									}
								/>
							) }
							{ paginationLayout === 'border' && (
								<AdvancedPopColorControl
									label={ __(
										'Border Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={ paginationBorderActiveColor }
									onColorChange={ ( value ) =>
										setAttributes( {
											paginationBorderActiveColor: value,
										} )
									}
								/>
							) }
						</>
					}
					disableBottomSeparator={ false }
				/>
				{ paginationLayout === 'border' && (
					<>
						<Range
							setAttributes={ setAttributes }
							label={ __(
								'Border Size',
								'ultimate-addons-for-gutenberg'
							) }
							value={ paginationBorderSize }
							onChange={ ( value ) =>
								setAttributes( {
									paginationBorderSize: value,
								} )
							}
							min={ 0 }
							max={ 10 }
							displayUnit={ false }
						/>
						<Range
							setAttributes={ setAttributes }
							label={ __(
								'Border Radius',
								'ultimate-addons-for-gutenberg'
							) }
							value={ paginationBorderRadius }
							onChange={ ( value ) =>
								setAttributes( {
									paginationBorderRadius: value,
								} )
							}
							displayUnit={ false }
							min={ 0 }
							max={ 100 }
						/>
					</>
				) }
				<Range
					label={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ paginationSpacing }
					onChange={ ( value ) =>
						setAttributes( { paginationSpacing: value } )
					}
					help={ __(
						'This spacing is between the Post Grid and the Pagination',
						'ultimate-addons-for-gutenberg'
					) }
					min={ 0 }
					max={ 300 }
					unit={ {
						value: paginationSpacingUnit,
						label: 'paginationSpacingUnit',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const inspectorControlsSettings = () => {
		return (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
						{ paginationSettings() }
						{ imageSettings() }
						{ contentSettings() }
						{ readMoreLinkSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ displayPostTitle && titleStyle() }
						{ ( displayPostAuthor ||
							displayPostDate ||
							displayPostComment ||
							displayPostTaxonomy ) &&
							metaStyle() }
						{ displayPostExcerpt && excerptStyle() }
						{ displayPostLink &&
							readMoreLinkStyleSettings() }
						{ postPagination && paginationStyle() }
						{ displayPostImage === true &&
							imageStyle() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props.parentProps }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	};
	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

	if ( ! hasPosts ) {
		return <>{ inspectorControlsSettings() }</>;
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControlsSettings() }
			{ inspectorControlsSettings() }
			{ loadTitleGoogleFonts }
			{ loadMetaGoogleFonts }
			{ loadExcerptGoogleFonts }
			{ loadCtaGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
