/**
 * BLOCK: Post Grid - Settings.
 */
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import ResponsiveBorder from '@Components/responsive-border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import renderSVG from '@Controls/renderIcon';
import UAGTabsControl from '@Components/tabs';
import { buttonsPresets, boxShadowPresets, boxShadowHoverPresets } from './presets';
import UAGPresets from '@Components/presets';
import BoxShadowControl from '@Components/box-shadow';
import { decodeEntities } from '@wordpress/html-entities';
import UAGNumberControl from '@Components/number-control';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

const MAX_POSTS_COLUMNS = 8;

import { ToggleControl, ToolbarGroup, Icon, ExternalLink } from '@wordpress/components';

import { InspectorControls, BlockControls } from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	const { categoriesList, latestPosts, taxonomyList } = props;
	// Caching all Props
	const { attributes, setAttributes, deviceType } = props.parentProps;

	// Caching all attributes.
	const {
		block_id,
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
		align,
		columns,
		tcolumns,
		mcolumns,
		order,
		orderBy,
		categories,
		postsToShow,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
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
		ctaBgType,
		ctaBgHType,
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		imageBottomSpace,
		imageBottomSpaceTablet,
		imageBottomSpaceMobile,
		titleBottomSpace,
		titleBottomSpaceTablet,
		titleBottomSpaceMobile,
		metaBottomSpace,
		metaBottomSpaceTablet,
		metaBottomSpaceMobile,
		excerptBottomSpace,
		excerptBottomSpaceTablet,
		excerptBottomSpaceMobile,
		excerptBottomSpaceUnit,
		ctaBottomSpace,
		ctaBottomSpaceTablet,
		ctaBottomSpaceMobile,
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
		highlightedTextBgColor,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		metaLetterSpacing,
		metaLetterSpacingTablet,
		metaLetterSpacingMobile,
		metaLetterSpacingType,
		excerptLetterSpacing,
		excerptLetterSpacingTablet,
		excerptLetterSpacingMobile,
		excerptLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,

		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
		enableOffset,
		equalHeightInlineButtons,
		imageRatio,
		imgEqualHeight,
	} = attributes;

	const setImgEqualheight = ( value ) => {
		setAttributes( { imgEqualHeight: value } );
		if ( value ) {
			setAttributes( { imageRatio: '2-3' } );
		} else {
			setAttributes( { imageRatio: 'inherit' } );
		}
	};

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
	const onSelectOffset = ( value ) => {
		setAttributes( { enableOffset: value } );
		setAttributes( { postPagination: ! value } ); // disable pagination when enableOffset is true.
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

	const taxonomyListOptions = [
		{
			value: '',
			label: __( 'All', 'ultimate-addons-for-gutenberg' ),
		},
	];

	const categoryListOptions = [ { value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) } ];

	const bgTypeOptions = [
		{
			value: 'transparent',
			label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'color',
			label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
		},
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

	const blockControlsSettings = () => {
		const { isEditing } = props.state;

		return (
			<BlockControls>
				<ToolbarGroup
					controls={ [
						{
							icon: 'edit',
							title: __( 'Edit', 'ultimate-addons-for-gutenberg' ),
							onClick: () => props.togglePreview(),
							isActive: isEditing,
						},
					] }
				/>
			</BlockControls>
		);
	};

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'General', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
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
				<UAGSelectControl
					label={ __( 'Post Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: postType,
					} }
					onChange={ onSelectPostType }
					options={ uagb_blocks_info.post_types }
				/>
				{ '' !== taxonomyList && (
					<UAGSelectControl
						label={ __( 'Taxonomy', 'ultimate-addons-for-gutenberg' ) }
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
					label={ __( 'Exclude Current Post', 'ultimate-addons-for-gutenberg' ) }
					checked={ excludeCurrentPost }
					onChange={ () =>
						setAttributes( {
							excludeCurrentPost: ! excludeCurrentPost,
						} )
					}
				/>
				<UAGNumberControl
					label={ __( 'Posts Per Page', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ postsToShow }
					data={ {
						value: postsToShow,
						label: 'postsToShow',
					} }
					onChange={ onChangePostsPerPage }
					min={ 1 }
					max={ 50 }
					displayUnit={ false }
					showControlHeader={ false }
				/>
				<ToggleControl
					label={ __( 'Offset Starting Post', 'ultimate-addons-for-gutenberg' ) }
					checked={ enableOffset }
					onChange={ onSelectOffset }
					help={
						<>
							{ ! enableOffset && (
								<>
									{ __(
										'Note: Enabling this will disable the Pagination. Setting the offset parameter overrides/ignores the paged parameter and breaks pagination. ',
										'ultimate-addons-for-gutenberg'
									) }
									<ExternalLink
										href={
											'https://developer.wordpress.org/reference/classes/wp_query/#pagination-parameters:~:text=Warning%3A%20Setting%20the%20offset%20parameter%20overrides/ignores%20the%20paged%20parameter%20and%20breaks%20pagination.%20The%20%27offset%27%20parameter%20is%20ignored%20when%20%27posts_per_page%27%3D%3E%2D1%20(show%20all%20posts)%20is%20used.'
										}
									>
										{ __( 'Read more', 'ultimate-addons-for-gutenberg' ) }
									</ExternalLink>
								</>
							) }
						</>
					}
				/>
				{ enableOffset && (
					<UAGNumberControl
						label={ __( 'Offset By', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ postsOffset }
						data={ {
							value: postsOffset,
							label: 'postsOffset',
						} }
						onChange={ onChangePostsOffset }
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
						help={
							<>
								{ enableOffset &&
									__(
										'Note: The offset will skip the number of posts set, and will use the next post as the starting post.',
										'ultimate-addons-for-gutenberg'
									) }
							</>
						}
					/>
				) }
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
							label: __( 'Date', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'title',
							label: __( 'Title', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'rand',
							label: __( 'Random', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'menu_order',
							label: __( 'Menu Order', 'ultimate-addons-for-gutenberg' ),
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
							label: __( 'Descending', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'asc',
							label: __( 'Ascending', 'ultimate-addons-for-gutenberg' ),
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
					max={ MAX_POSTS_COLUMNS }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<ToggleControl
					label={ __( 'Equal Height', 'ultimate-addons-for-gutenberg' ) }
					checked={ equalHeight }
					onChange={ () => setAttributes( { equalHeight: ! equalHeight } ) }
				/>
				{ ! enableOffset && (
					<ToggleControl
						label={ __( 'Post Pagination', 'ultimate-addons-for-gutenberg' ) }
						checked={ postPagination }
						onChange={ onSelectPagination }
					/>
				) }
				{ postPagination === true && (
					<Range
						label={ __( 'Page Limit', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ pageLimit }
						data={ {
							value: pageLimit,
							label: 'pageLimit',
						} }
						onChange={ onChangePageLimit }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>
				) }
				<h2>{ __( 'If Posts Not Found', 'ultimate-addons-for-gutenberg' ) }</h2>
				<UAGTextControl
					autoComplete="off"
					label={ __( 'Display Message', 'ultimate-addons-for-gutenberg' ) }
					value={ postDisplaytext }
					data={ {
						value: postDisplaytext,
						label: 'postDisplaytext',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) => setAttributes( { postDisplaytext: value } ) }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const paginationSettings = () => {
		if ( true !== postPagination ) {
			return;
		}

		return (
			<UAGAdvancedPanelBody title={ __( 'Pagination', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Pagination Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: paginationAlignment,
						label: 'paginationAlignment',
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
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Pagination Layout', 'ultimate-addons-for-gutenberg' ) }
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
				<UAGTextControl
					label={ __( 'Previous Text', 'ultimate-addons-for-gutenberg' ) }
					value={ paginationPrevText }
					data={ {
						value: paginationPrevText,
						label: 'paginationPrevText',
					} }
					setAttributes={ setAttributes }
					onChange={ onChangePrevText }
				/>
				<UAGTextControl
					label={ __( 'Next Text', 'ultimate-addons-for-gutenberg' ) }
					value={ paginationNextText }
					data={ {
						value: paginationNextText,
						label: 'paginationNextText',
					} }
					setAttributes={ setAttributes }
					onChange={ onChangeNextText }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const imageSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Show Featured Image', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostImage }
					onChange={ () =>
						setAttributes( {
							displayPostImage: ! displayPostImage,
						} )
					}
				/>
				{ displayPostImage === true && imgPosition !== 'background' && (
					<>
						<ToggleControl
							label={ __( 'Equal Height', 'ultimate-addons-for-gutenberg' ) }
							checked={ imgEqualHeight }
							onChange={ setImgEqualheight }
						/>
						{ ! imgEqualHeight && (
							<UAGSelectControl
								label={ __( 'Image Ratio', 'ultimate-addons-for-gutenberg' ) }
								options={ [
									{
										label: __( 'Inherit', 'ultimate-addons-for-gutenberg' ),
										value: 'inherit',
									},
									{
										label: __( '1:1', 'ultimate-addons-for-gutenberg' ),
										value: '1-1',
									},
									{
										label: __( '3:2', 'ultimate-addons-for-gutenberg' ),
										value: '2-3',
									},
									{
										label: __( '16:9', 'ultimate-addons-for-gutenberg' ),
										value: '9-16',
									},
									{
										label: __( '2:1', 'ultimate-addons-for-gutenberg' ),
										value: '1-2',
									},
								] }
								data={ {
									value: imageRatio,
									label: 'imageRatio',
								} }
								setAttributes={ setAttributes }
							/>
						) }
					</>
				) }
				{ displayPostImage === true && (
					<UAGSelectControl
						label={ __( 'Sizes', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: imgSize,
							label: 'imgSize',
						} }
						setAttributes={ setAttributes }
						options={ uagb_blocks_info.image_sizes }
					/>
				) }
				{ displayPostImage === true && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Position', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: imgPosition,
							label: 'imgPosition',
						} }
						options={ [
							{
								value: 'top',
								label: __( 'Top', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'background',
								label: __( 'Background', 'ultimate-addons-for-gutenberg' ),
							},
						] }
					/>
				) }
				{ displayPostImage === true && imgPosition === 'background' && (
					<ToggleControl
						label={ __( 'Link Complete Box', 'ultimate-addons-for-gutenberg' ) }
						checked={ linkBox }
						onChange={ () => setAttributes( { linkBox: ! linkBox } ) }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const contentSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Show Title', 'ultimate-addons-for-gutenberg' ) }
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
						label={ __( 'HTML Tag', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: titleTag,
							label: 'titleTag',
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
					/>
				) }
				<ToggleControl
					label={ __( 'Show Author', 'ultimate-addons-for-gutenberg' ) }
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
					onChange={ () => setAttributes( { displayPostDate: ! displayPostDate } ) }
				/>
				<ToggleControl
					label={ __( 'Show Comment', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostComment }
					onChange={ () =>
						setAttributes( {
							displayPostComment: ! displayPostComment,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Show Taxonomy', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostTaxonomy }
					onChange={ () =>
						setAttributes( {
							displayPostTaxonomy: ! displayPostTaxonomy,
						} )
					}
				/>
				{ displayPostTaxonomy && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Taxonomy Position', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: displayPostTaxonomyAboveTitle,
								label: 'displayPostTaxonomyAboveTitle',
							} }
							options={ [
								{
									value: 'withMeta',
									label: __( 'With Meta', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'aboveTitle',
									label: __( 'Above Title', 'ultimate-addons-for-gutenberg' ),
								},
							] }
						/>
						{ 'aboveTitle' === displayPostTaxonomyAboveTitle && (
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Taxonomy Style', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: taxStyle,
										label: 'taxStyle',
									} }
									options={ [
										{
											value: 'default',
											label: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'highlighted',
											label: __( 'Highlighted', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
								{ 'default' === taxStyle && (
									<UAGTextControl
										label={ __( 'Taxonomy Divider', 'ultimate-addons-for-gutenberg' ) }
										value={ taxDivider }
										data={ {
											value: taxDivider,
											label: 'taxDivider',
										} }
										setAttributes={ setAttributes }
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
					label={ __( 'Show Meta Icon', 'ultimate-addons-for-gutenberg' ) }
					checked={ hideTaxonomyIcon }
					onChange={ () =>
						setAttributes( {
							hideTaxonomyIcon: ! hideTaxonomyIcon,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Show Excerpt', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostExcerpt }
					onChange={ () =>
						setAttributes( {
							displayPostExcerpt: ! displayPostExcerpt,
						} )
					}
				/>
				{ displayPostExcerpt && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Show:', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: displayPostContentRadio,
							label: 'displayPostContentRadio',
						} }
						options={ [
							{
								value: 'excerpt',
								label: __( 'Excerpt', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'full_post',
								label: __( 'Full post', 'ultimate-addons-for-gutenberg' ),
							},
						] }
					/>
				) }
				{ displayPostExcerpt && displayPostContentRadio === 'excerpt' && (
					<Range
						label={ __( 'Max number of words in excerpt', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ excerptLength }
						data={ {
							value: excerptLength,
							label: 'excerptLength',
						} }
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
				title={ __( 'Read More Link', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Show Read More Link', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostLink }
					onChange={ () => setAttributes( { displayPostLink: ! displayPostLink } ) }
				/>
				{ displayPostLink && (
					<>
						<ToggleControl
							label={ __( 'Buttons on Equal Height', 'ultimate-addons-for-gutenberg' ) }
							checked={ equalHeightInlineButtons }
							onChange={ () => setAttributes( { equalHeightInlineButtons: ! equalHeightInlineButtons } ) }
						/>
						<ToggleControl
							label={ __( 'Open Links in New Tab', 'ultimate-addons-for-gutenberg' ) }
							checked={ newTab }
							onChange={ () => setAttributes( { newTab: ! newTab } ) }
						/>
						<UAGTextControl
							label={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
							value={ ctaText }
							data={ {
								value: ctaText,
								label: 'ctaText',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { ctaText: value } ) }
						/>
						<UAGPresets
							setAttributes={ setAttributes }
							presets={ buttonsPresets }
							presetInputType="radioImage"
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ bgColor }
					data={ {
						value: bgColor,
						label: 'bgColor',
					} }
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
						value: columnGapUnit,
						label: 'columnGapUnit',
					} }
					setAttributes={ setAttributes }
				/>
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
						value: rowGapUnit,
						label: 'rowGapUnit',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Content Padding', 'ultimate-addons-for-gutenberg' ) }
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
			<UAGAdvancedPanelBody title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				{ imgPosition === 'background' && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Background Overlay Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ bgOverlayColor }
							data={ {
								value: bgOverlayColor,
								label: 'bgOverlayColor',
							} }
							setAttributes={ setAttributes }
						/>
						<Range
							label={ __( 'Overlay Opacity', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ overlayOpacity }
							data={ {
								value: overlayOpacity,
								label: 'overlayOpacity',
							} }
							min={ 0 }
							max={ 100 }
							displayUnit={ false }
						/>
					</>
				) }
				{ imgPosition === 'top' && (
					<ResponsiveSlider
						label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: imageBottomSpace,
								label: 'imageBottomSpace',
							},
							tablet: {
								value: imageBottomSpaceTablet,
								label: 'imageBottomSpaceTablet',
							},
							mobile: {
								value: imageBottomSpaceMobile,
								label: 'imageBottomSpaceMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						unit={ {
							value: imageBottomSpaceUnit,
							label: 'imageBottomSpaceUnit',
						} }
						setAttributes={ setAttributes }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const titleStyle = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
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
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: titleBottomSpace,
							label: 'titleBottomSpace',
						},
						tablet: {
							value: titleBottomSpaceTablet,
							label: 'titleBottomSpaceTablet',
						},
						mobile: {
							value: titleBottomSpaceMobile,
							label: 'titleBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: titleBottomSpaceUnit,
						label: 'titleBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const metaStyle = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Meta', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Meta Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ metaColor }
					data={ {
						value: metaColor,
						label: 'metaColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ 'aboveTitle' === displayPostTaxonomyAboveTitle && 'highlighted' === taxStyle && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Taxonomy Text Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ highlightedTextColor }
							data={ {
								value: highlightedTextColor,
								label: 'highlightedTextColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __( 'Highlighted Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ highlightedTextBgColor }
							data={ {
								value: highlightedTextBgColor,
								label: 'highlightedTextBgColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				) }

				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					letterSpacing={ {
						value: metaLetterSpacing,
						label: 'metaLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: metaLetterSpacingTablet,
						label: 'metaLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: metaLetterSpacingMobile,
						label: 'metaLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: metaLetterSpacingType,
						label: 'metaLetterSpacingType',
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
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: metaBottomSpace,
							label: 'metaBottomSpace',
						},
						tablet: {
							value: metaBottomSpaceTablet,
							label: 'metaBottomSpaceTablet',
						},
						mobile: {
							value: metaBottomSpaceMobile,
							label: 'metaBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: metaBottomSpaceUnit,
						label: 'metaBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const excerptStyle = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Excerpt', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ excerptColor }
					data={ {
						value: excerptColor,
						label: 'excerptColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					letterSpacing={ {
						value: excerptLetterSpacing,
						label: 'excerptLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: excerptLetterSpacingTablet,
						label: 'excerptLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: excerptLetterSpacingMobile,
						label: 'excerptLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: excerptLetterSpacingType,
						label: 'excerptLetterSpacingType',
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
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: excerptBottomSpace,
							label: 'excerptBottomSpace',
						},
						tablet: {
							value: excerptBottomSpaceTablet,
							label: 'excerptBottomSpaceTablet',
						},
						mobile: {
							value: excerptBottomSpaceMobile,
							label: 'excerptBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: excerptBottomSpaceUnit,
						label: 'excerptBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const readMoreLinkStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Read More Link', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
								colorValue={ ctaColor }
								data={ {
									value: ctaColor,
									label: 'ctaColor',
								} }
								setAttributes={ setAttributes }
							/>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: ctaBgType,
									label: 'ctaBgType',
								} }
								className="uagb-multi-button-alignment-control"
								options={ bgTypeOptions }
							/>
							{ ctaBgType === 'color' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ ctaBgColor }
									data={ {
										value: ctaBgColor,
										label: 'ctaBgColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ ctaHColor }
								data={ {
									value: ctaHColor,
									label: 'ctaHColor',
								} }
								setAttributes={ setAttributes }
							/>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: ctaBgHType,
									label: 'ctaBgHType',
								} }
								className="uagb-multi-button-alignment-control"
								options={ bgTypeOptions }
							/>
							{ ctaBgHType === 'color' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ ctaBgHColor }
									data={ {
										value: ctaBgHColor,
										label: 'ctaBgHColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'btn' }
					attributes={ attributes }
					deviceType={ deviceType }
					disabledBorderTitle={ false }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: ctaBottomSpace,
							label: 'ctaBottomSpace',
						},
						tablet: {
							value: ctaBottomSpaceTablet,
							label: 'ctaBottomSpaceTablet',
						},
						mobile: {
							value: ctaBottomSpaceMobile,
							label: 'ctaBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 300 }
					unit={ {
						value: ctaBottomSpaceUnit,
						label: 'ctaBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Button Padding', 'ultimate-addons-for-gutenberg' ) }
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
	const borderSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'overall' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const boxShadowSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
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
							<UAGPresets
								setAttributes={ setAttributes }
								presets={ boxShadowPresets }
								presetInputType="radioImage"
							/>
							<BoxShadowControl
								blockId={ block_id }
								setAttributes={ setAttributes }
								label={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
								boxShadowColor={ {
									value: boxShadowColor,
									label: 'boxShadowColor',
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowHOffset={ {
									value: boxShadowHOffset,
									label: 'boxShadowHOffset',
									title: __( 'Horizontal', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowVOffset={ {
									value: boxShadowVOffset,
									label: 'boxShadowVOffset',
									title: __( 'Vertical', 'ultimate-addons-for-gutenberg' ),
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
									title: __( 'Position', 'ultimate-addons-for-gutenberg' ),
								} }
							/>
						</>
					}
					hover={
						<>
							<UAGPresets
								setAttributes={ setAttributes }
								presets={ boxShadowHoverPresets }
								presetInputType="radioImage"
							/>
							<BoxShadowControl
								blockId={ block_id }
								setAttributes={ setAttributes }
								label={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
								boxShadowColor={ {
									value: boxShadowColorHover,
									label: 'boxShadowColorHover',
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowHOffset={ {
									value: boxShadowHOffsetHover,
									label: 'boxShadowHOffsetHover',
									title: __( 'Horizontal', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowVOffset={ {
									value: boxShadowVOffsetHover,
									label: 'boxShadowVOffsetHover',
									title: __( 'Vertical', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowBlur={ {
									value: boxShadowBlurHover,
									label: 'boxShadowBlurHover',
									title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowSpread={ {
									value: boxShadowSpreadHover,
									label: 'boxShadowSpreadHover',
									title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowPosition={ {
									value: boxShadowPositionHover,
									label: 'boxShadowPositionHover',
									title: __( 'Position', 'ultimate-addons-for-gutenberg' ),
								} }
							/>
						</>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const paginationStyle = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Pagination', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'active',
							title: __( 'Active', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					normal={
						<>
							<AdvancedPopColorControl
								label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ paginationColor }
								data={ {
									value: paginationColor,
									label: 'paginationColor',
								} }
								setAttributes={ setAttributes }
							/>
							{ paginationLayout === 'filled' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ paginationBgColor }
									data={ {
										value: paginationBgColor,
										label: 'paginationBgColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
							{ paginationLayout === 'border' && (
								<AdvancedPopColorControl
									label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ paginationBorderColor }
									data={ {
										value: paginationBorderColor,
										label: 'paginationBorderColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
					active={
						<>
							<AdvancedPopColorControl
								label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ paginationActiveColor }
								data={ {
									value: paginationActiveColor,
									label: 'paginationActiveColor',
								} }
								setAttributes={ setAttributes }
							/>
							{ paginationLayout === 'filled' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ paginationBgActiveColor }
									data={ {
										value: paginationBgActiveColor,
										label: 'paginationBgActiveColor',
									} }
									setAttributes={ setAttributes }
								/>
							) }
							{ paginationLayout === 'border' && (
								<AdvancedPopColorControl
									label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ paginationBorderActiveColor }
									data={ {
										value: paginationBorderActiveColor,
										label: 'paginationBorderActiveColor',
									} }
									setAttributes={ setAttributes }
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
							label={ __( 'Border Size', 'ultimate-addons-for-gutenberg' ) }
							value={ paginationBorderSize }
							data={ {
								value: paginationBorderSize,
								label: 'paginationBorderSize',
							} }
							min={ 0 }
							max={ 10 }
							displayUnit={ false }
						/>
						<Range
							setAttributes={ setAttributes }
							label={ __( 'Border Radius', 'ultimate-addons-for-gutenberg' ) }
							value={ paginationBorderRadius }
							data={ {
								value: paginationBorderRadius,
								label: 'paginationBorderRadius',
							} }
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
					data={ {
						value: paginationSpacing,
						label: 'paginationSpacing',
					} }
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
						{ spacingSettings() }
						{ displayPostTitle && titleStyle() }
						{ ( displayPostAuthor || displayPostDate || displayPostComment || displayPostTaxonomy ) &&
							metaStyle() }
						{ displayPostExcerpt && excerptStyle() }
						{ displayPostLink && readMoreLinkStyleSettings() }
						{ postPagination && paginationStyle() }
						{ displayPostImage === true && imageStyle() }
						{ borderSettings() }
						{ boxShadowSettings() }
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
		<>
			{ blockControlsSettings() }
			{ inspectorControlsSettings() }
		</>
	);
};

export default memo( Settings );
