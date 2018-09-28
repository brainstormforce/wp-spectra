/**
 * External dependencies
 */

import get from "lodash/get"
import isUndefined from "lodash/isUndefined"
import pickBy from "lodash/pickBy"

// Import Post Components
import Blog from "./blog"

const { Component, Fragment } = wp.element
const { __ } = wp.i18n
const { decodeEntities } = wp.htmlEntities
const MAX_POSTS_COLUMNS = 4
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
} = wp.components

const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	ColorPalette,
	RichText
} = wp.editor

const { withSelect } = wp.data

class UAGBPostGrid extends Component {

	constructor() {
		super( ...arguments )

		this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind( this )
		this.toggleDisplayPostComment = this.toggleDisplayPostComment.bind( this )
		this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind( this )
		this.toggleDisplayPostAuthor = this.toggleDisplayPostAuthor.bind( this )
		this.toggleDisplayPostImage = this.toggleDisplayPostImage.bind( this )
		this.toggleDisplayPostLink = this.toggleDisplayPostLink.bind( this )
		this.toggleEqualHeight= this.toggleEqualHeight.bind(this)

	}

	componentDidMount() {

		this.props.setAttributes( { block_id: this.props.clientId } )

		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	toggleDisplayPostComment() {
		const { displayPostComment } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostComment: ! displayPostComment } )
	}

	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostDate: ! displayPostDate } )
	}

	toggleDisplayPostExcerpt() {
		const { displayPostExcerpt } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostExcerpt: ! displayPostExcerpt } )
	}

	toggleDisplayPostAuthor() {
		const { displayPostAuthor } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostAuthor: ! displayPostAuthor } )
	}

	toggleDisplayPostImage() {
		const { displayPostImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostImage: ! displayPostImage } )
	}

	toggleDisplayPostLink() {
		const { displayPostLink } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostLink: ! displayPostLink } )
	}

	toggleEqualHeight() {
		const { equalHeight } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { equalHeight: ! equalHeight } )
	}

	render() {

		// Caching all Props.
		const {
			attributes,
			categoriesList,
			setAttributes,
			latestPosts
		} = this.props

		// Caching all attributes.
		const {
			block_id,
			displayPostDate,
			displayPostComment,
			displayPostExcerpt,
			displayPostAuthor,
			displayPostImage,
			imgSize,
			imgPosition,
			displayPostLink,
			align,
			columns,
			order,
			orderBy,
			categories,
			postsToShow,
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
			ctaBgColor,
			titleBottomSpace,
			metaBottomSpace,
			excerptBottomSpace,
			equalHeight
		} = attributes

		// All Controls.
		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( "General" ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						categoriesList={ categoriesList }
						selectedCategoryId={ categories }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { categories: "" !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
					/>
					<RangeControl
						label={ __( "Columns" ) }
						value={ columns }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
						min={ 1 }
						max={ ! hasPosts ? MAX_POSTS_COLUMNS : Math.min( MAX_POSTS_COLUMNS, latestPosts.length ) }
					/>
					<ToggleControl
						label={ __( "Equal Height" ) }
						checked={ equalHeight }
						onChange={ this.toggleEqualHeight }
					/>
				</PanelBody>
				<PanelBody title={ __( "Image" ) }>
					<ToggleControl
						label={ __( "Show Featured Image" ) }
						checked={ displayPostImage }
						onChange={ this.toggleDisplayPostImage }
					/>
					{ displayPostImage == true &&
						<SelectControl
							label={ __( "Image Sizes" ) }
							value={ imgSize }
							onChange={ ( value ) => setAttributes( { imgSize: value } ) }
							options={ [
								{ value: "thumbnail", label: __( "Thumbnail" ) },
								{ value: "medium", label: __( "Medium" ) },
								{ value: "medium_large", label: __( "Medium Large" ) },
								{ value: "large", label: __( "Large" ) },
							] }
						/>
                	}
                	{ displayPostImage == true &&
						<SelectControl
							label={ __( "Image Position" ) }
							value={ imgPosition }
							onChange={ ( value ) => setAttributes( { imgPosition: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "background", label: __( "Background" ) },
							] }
						/>
					}
				</PanelBody>
				<PanelBody title={ __( "Content" ) }>
					<SelectControl
						label={ __( "Title Tag" ) }
						value={ titleTag }
						onChange={ ( value ) => setAttributes( { titleTag: value } ) }
						options={ [
							{ value: "h1", label: __( "H1" ) },
							{ value: "h2", label: __( "H2" ) },
							{ value: "h3", label: __( "H3" ) },
							{ value: "h4", label: __( "H4" ) },
							{ value: "h5", label: __( "H5" ) },
							{ value: "h6", label: __( "H6" ) },
						] }
					/>
					<ToggleControl
						label={ __( "Show Author" ) }
						checked={ displayPostAuthor }
						onChange={ this.toggleDisplayPostAuthor }
					/>
					<ToggleControl
						label={ __( "Show Date" ) }
						checked={ displayPostDate }
						onChange={ this.toggleDisplayPostDate }
					/>
					<ToggleControl
						label={ __( "Show Comment" ) }
						checked={ displayPostComment }
						onChange={ this.toggleDisplayPostComment }
					/>
					<ToggleControl
						label={ __( "Show Excerpt" ) }
						checked={ displayPostExcerpt }
						onChange={ this.toggleDisplayPostExcerpt }
					/>
					<ToggleControl
						label={ __( "Show Read More Link" ) }
						checked={ displayPostLink }
						onChange={ this.toggleDisplayPostLink }
					/>
				</PanelBody>
				<PanelBody title={ __( "Colors" ) }>
					{ imgPosition == "top" &&
						<PanelColor
							title={ __( "Blog Background Color" ) }
							colorValue={ bgColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ bgColor }
								onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
								allowReset
							/>
						</PanelColor>
					}
					<PanelColor
						title={ __( "Title Color" ) }
						colorValue={ titleColor }
						initialOpen={ false }
					>
						<ColorPalette
							value={ titleColor }
							onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
							allowReset
						/>
					</PanelColor>
					<PanelColor
						title={ __( "Meta Color" ) }
						colorValue={ metaColor }
						initialOpen={ false }
					>
						<ColorPalette
							value={ metaColor }
							onChange={ ( colorValue ) => setAttributes( { metaColor: colorValue } ) }
							allowReset
						/>
					</PanelColor>
					{ displayPostExcerpt == true &&
						<PanelColor
							title={ __( "Excerpt Color" ) }
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
					{ displayPostLink == true &&
						<PanelColor
							title={ __( "CTA Color" ) }
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
							title={ __( "CTA Background Color" ) }
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
				<PanelBody title={ __( "Spacing" ) }>
					<RangeControl
						label={ __( "Row Gap" ) }
						value={ rowGap }
						onChange={ ( value ) => setAttributes( { rowGap: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Column Gap" ) }
						value={ columnGap }
						onChange={ ( value ) => setAttributes( { columnGap: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Content Padding" ) }
						value={ contentPadding }
						onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Title Bottom Spacing" ) }
						value={ titleBottomSpace }
						onChange={ ( value ) => setAttributes( { titleBottomSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Meta Bottom Spacing" ) }
						value={ metaBottomSpace }
						onChange={ ( value ) => setAttributes( { metaBottomSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Excerpt Bottom Spacing" ) }
						value={ excerptBottomSpace }
						onChange={ ( value ) => setAttributes( { excerptBottomSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
				</PanelBody>
			</InspectorControls>
		)

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length

		if ( ! hasPosts ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="admin-post"
						label={ __( "UAGB - Post Grid" ) }
					>
						{ ! Array.isArray( latestPosts ) ?
							<Spinner /> :
							__( "No posts found." )
						}
					</Placeholder>
				</Fragment>
			)
		}

		return (
			<Fragment>
				{ inspectorControls }
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "center", "wide" ] }
					/>
				</BlockControls>
				<Blog attributes={attributes} className={this.props.className} latestPosts={latestPosts} block_id={this.props.clientId} />
			</Fragment>
		)
	}
}

export default withSelect( ( select, props ) => {
	const { categories, postsToShow, order, orderBy } = props.attributes
	const { getEntityRecords } = select( "core" )
	const latestPostsQuery = pickBy( {
		categories: categories,
		order: order,
		orderby: orderBy,
		per_page: postsToShow,		
	}, ( value ) => ! isUndefined( value ) );
	const categoriesListQuery = {
		per_page: 100,
	}
	return {
		latestPosts: getEntityRecords( "postType", "post", latestPostsQuery ),
		categoriesList: getEntityRecords( "taxonomy", "category", categoriesListQuery ),
	}
} )( UAGBPostGrid )
