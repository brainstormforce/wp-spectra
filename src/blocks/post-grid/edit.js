/**
 * External dependencies
 */

import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';
import { stringify } from 'querystringify';

// Import Post Components
import FeaturedImage from "./post-components/FeaturedImage";
import Title from "./post-components/Title";
import Meta from "./post-components/Meta";
import Excerpt from "./post-components/Excerpt";
import Button from "./post-components/Button";

const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { decodeEntities } = wp.htmlEntities;
const MAX_POSTS_COLUMNS = 4;
const {
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	PanelColor,
	SelectControl,
	Spinner,
	ToggleControl,
	Toolbar,
	withAPIData,
} = wp.components;

const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	ColorPalette,
	RichText
} = wp.editor;


class UAGBPostGrid extends Component {
	constructor() {
		super( ...arguments );

		this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind( this );
		this.toggleDisplayPostComment = this.toggleDisplayPostComment.bind( this );
		this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind( this );
		this.toggleDisplayPostAuthor = this.toggleDisplayPostAuthor.bind( this );
		this.toggleDisplayPostImage = this.toggleDisplayPostImage.bind( this );
		this.toggleDisplayPostLink = this.toggleDisplayPostLink.bind( this );
	}

	toggleDisplayPostComment() {
		const { displayPostComment } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostComment: ! displayPostComment } );
	}

	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostDate: ! displayPostDate } );
	}

	toggleDisplayPostExcerpt() {
		const { displayPostExcerpt } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostExcerpt: ! displayPostExcerpt } );
	}

	toggleDisplayPostAuthor() {
		const { displayPostAuthor } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostAuthor: ! displayPostAuthor } );
	}

	toggleDisplayPostImage() {
		const { displayPostImage } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostImage: ! displayPostImage } );
	}

	toggleDisplayPostLink() {
		const { displayPostLink } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostLink: ! displayPostLink } );
	}

	render() {
		const latestPosts = this.props.latestPosts.data;
		const {
			attributes,
			categoriesList,
			setAttributes
		} = this.props;
		const {
			displayPostDate,
			displayPostComment,
			displayPostExcerpt,
			displayPostAuthor,
			displayPostImage,
			displayPostLink,
			align,
			postLayout,
			columns,
			order,
			orderBy,
			categories,
			postsToShow,
			width,
			imageCrop,
			rowGap,
			columnGap,
			bgColor,
			contentPadding,
			titleColor,
			titleTag,
			titleFontSize,
			metaColor,
			excerptColor,
			ctaColor,
			ctaBgColor
		} = attributes;

		// Thumbnail options
		const imageCropOptions = [
			{ value: 'landscape', label: __( 'Landscape' ) },
			{ value: 'square', label: __( 'Square' ) },
		];

		const isLandscape = imageCrop === 'landscape';

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Query' ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						categoriesList={ get( categoriesList, [ 'data' ], {} ) }
						selectedCategoryId={ categories }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
					/>
					{ postLayout === 'grid' &&
						<RangeControl
							label={ __( 'Columns' ) }
							value={ columns }
							onChange={ ( value ) => setAttributes( { columns: value } ) }
							min={ 2 }
							max={ ! hasPosts ? MAX_POSTS_COLUMNS : Math.min( MAX_POSTS_COLUMNS, latestPosts.length ) }
						/>
					}

				</PanelBody>
				<PanelBody title={ __( 'Image' ) }>
					<ToggleControl
						label={ __( 'Show Featured Image' ) }
						checked={ displayPostImage }
						onChange={ this.toggleDisplayPostImage }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Title' ) }>
					<PanelColor
                        title={ __( 'Color' ) }
                        colorValue={ titleColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ titleColor }
                            onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <SelectControl
                        label={ __( 'Title Tag' ) }
                        value={ titleTag }
                        onChange={ ( value ) => setAttributes( { titleTag: value } ) }
                        options={ [
                            { value: 'h1', label: __( 'H1' ) },
                            { value: 'h2', label: __( 'H2' ) },
                            { value: 'h3', label: __( 'H3' ) },
                            { value: 'h4', label: __( 'H4' ) },
                            { value: 'h5', label: __( 'H5' ) },
                            { value: 'h6', label: __( 'H6' ) },
                        ] }
                    />
					<RangeControl
                        label={ __( 'Heading Font Size' ) }
                        value={ titleFontSize }
                        onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
				</PanelBody>
				<PanelBody title={ __( 'Meta' ) }>
					<ToggleControl
						label={ __( 'Show Author' ) }
						checked={ displayPostAuthor }
						onChange={ this.toggleDisplayPostAuthor }
					/>
					<ToggleControl
						label={ __( 'Show Date' ) }
						checked={ displayPostDate }
						onChange={ this.toggleDisplayPostDate }
					/>
					<ToggleControl
						label={ __( 'Show Comment' ) }
						checked={ displayPostComment }
						onChange={ this.toggleDisplayPostComment }
					/>
					<PanelColor
                        title={ __( 'Meta Color' ) }
                        colorValue={ metaColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ metaColor }
                            onChange={ ( colorValue ) => setAttributes( { metaColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
				</PanelBody>
				<PanelBody title={ __( 'Excerpt' ) }>
					<ToggleControl
						label={ __( 'Show Excerpt' ) }
						checked={ displayPostExcerpt }
						onChange={ this.toggleDisplayPostExcerpt }
					/>
					{ displayPostExcerpt == true &&
						<PanelColor
	                        title={ __( 'Excerpt Color' ) }
	                        colorValue={ excerptColor }
	                        initialOpen={ false }
	                    >
	                        <ColorPalette
	                            value={ excerptColor }
	                            onChange={ ( colorValue ) => setAttributes( { excerptColor: colorValue } ) }
	                            allowReset
	                        />
	                    </PanelColor>
	                }
				</PanelBody>
				<PanelBody title={ __( 'CTA' ) }>
					<ToggleControl
						label={ __( 'Show Read More Link' ) }
						checked={ displayPostLink }
						onChange={ this.toggleDisplayPostLink }
					/>
					{ displayPostLink == true &&
						<PanelColor
	                        title={ __( 'CTA Color' ) }
	                        colorValue={ ctaColor }
	                        initialOpen={ false }
	                    >
	                        <ColorPalette
	                            value={ ctaColor }
	                            onChange={ ( colorValue ) => setAttributes( { ctaColor: colorValue } ) }
	                            allowReset
	                        />
	                    </PanelColor>
	                }
	                { displayPostLink == true &&
	                    <PanelColor
	                        title={ __( 'CTA Background Color' ) }
	                        colorValue={ ctaBgColor }
	                        initialOpen={ false }
	                    >
	                        <ColorPalette
	                            value={ ctaBgColor }
	                            onChange={ ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ) }
	                            allowReset
	                        />
	                    </PanelColor>
	                }
				</PanelBody>
				<PanelBody title={ __( 'Style' ) }>
					<RangeControl
						label={ __( 'Row Gap' ) }
                        value={ rowGap }
                        onChange={ ( value ) => setAttributes( { rowGap: value } ) }
                        min={ 0 }
                        max={ 50 }
                        allowReset
					/>
					<RangeControl
						label={ __( 'Column Gap' ) }
                        value={ columnGap }
                        onChange={ ( value ) => setAttributes( { columnGap: value } ) }
                        min={ 0 }
                        max={ 50 }
                        allowReset
					/>
					<RangeControl
						label={ __( 'Content Padding' ) }
                        value={ contentPadding }
                        onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
                        min={ 0 }
                        max={ 50 }
                        allowReset
					/>
					<PanelColor
                        title={ __( 'Background Color' ) }
                        colorValue={ bgColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ bgColor }
                            onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
				</PanelBody>
			</InspectorControls>
		);

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
		if ( ! hasPosts ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="admin-post"
						label={ __( 'UAGB - Post Grid' ) }
					>
						{ ! Array.isArray( latestPosts ) ?
							<Spinner /> :
							__( 'No posts found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts;

		const layoutControls = [
			{
				icon: 'grid-view',
				title: __( 'Grid View' ),
				onClick: () => setAttributes( { postLayout: 'grid' } ),
				isActive: postLayout === 'grid',
			},
			{
				icon: 'list-view',
				title: __( 'List View' ),
				onClick: () => setAttributes( { postLayout: 'list' } ),
				isActive: postLayout === 'list',
			},
		];

		return (
			<Fragment>
				{ inspectorControls }
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } );
						} }
						controls={ [ 'center', 'wide' ] }
					/>
					<Toolbar controls={ layoutControls } />
				</BlockControls>
				<div
					className={ classnames(
						this.props.className,
						'uagb-post-grid',
					) }
				>
					<div
						className={ classnames( {
							'is-grid': postLayout === 'grid',
							'is-list': postLayout === 'list',
							[ `uagb-post__columns-${ columns }` ]: postLayout === 'grid',
							'uagb-post__items' : 'uagb-post__items'
						} ) }
						style={{
							marginRight: -rowGap/2,
							marginLeft: -rowGap/2,
						}}
					>
						{ displayPosts.map( ( post, i ) =>
							<article
								key={ i }
								className={ classnames(
									post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
								) }
								style={{
									paddingRight: rowGap/2,
									paddingLeft: rowGap/2,
									marginBottom: columnGap
								}}
							>
								<div
									className={ 'uagb-post__inner-wrap' }
									style={{ background: bgColor }}
								>
									<FeaturedImage post={post} attributes={attributes} />

									<div
										className={ 'uagb-post__text' }
										style={{
											padding: contentPadding
										}}
									>
										<Title post={post} attributes={attributes} />
										<Meta post={post} attributes={attributes} />
										<Excerpt post={post} attributes={attributes} />
										<Button post={post} attributes={attributes} />
									</div>
								</div>
							</article>
						) }
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withAPIData( ( props ) => {
	const { postsToShow, order, orderBy, categories } = props.attributes;
	const latestPostsQuery = stringify( pickBy( {
		categories,
		order,
		orderby: orderBy,
		per_page: postsToShow,
		_fields: [ 'date_gmt', 'link', 'title', 'featured_media', 'featured_image_src', 'featured_image_src_square', 'excerpt', 'author_info' ],
		_embed: 'embed',
	}, ( value ) => ! isUndefined( value ) ) );
	const categoriesListQuery = stringify( {
		per_page: 100,
		_fields: [ 'id', 'name', 'parent' ],
	} );
	return {
		latestPosts: `/wp/v2/posts?${ latestPostsQuery }`,
		categoriesList: `/wp/v2/categories?${ categoriesListQuery }`,
	};
} )( UAGBPostGrid );
