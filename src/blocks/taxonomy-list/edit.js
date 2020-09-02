/**
 * External dependencies
 */
import classnames from "classnames"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"


const { __ } = wp.i18n
const {
    PanelBody,
    SelectControl,
	RangeControl,
} = wp.components
const {
	InspectorControls,
	Fragment
} = wp.blockEditor
 
const { Component } = wp.element
const { withSelect } = wp.data

class UAGBTaxonomyList extends Component {

    constructor() {
		super( ...arguments )
        this.onSelectPostType = this.onSelectPostType.bind( this )
		this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind( this )
	}
    onSelectPostType( value ) {
		const { setAttributes } = this.props

		setAttributes( { postType: value } )
		setAttributes( { categories: "" } )
	}
	
	onSelectTaxonomyType( value ) {
		const { setAttributes } = this.props

		setAttributes( { taxonomyType: value } )
		setAttributes( { categories: "" } )
	}
    
    componentDidMount() {
        this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
    }

    render() {
        // Caching all Props.
		const {
			attributes,
			setAttributes,
			taxonomyList,
			categoriesList,
			latestPosts
		} = this.props
		console.log(uagb_blocks_info);
		console.log(latestPosts);

		// Caching all attributes.
		const {
            block_id,
            postType,
			postToShow,
			taxonomyType,
			categories,
			order,
			orderBy,
        } = attributes

		let taxonomyListOptions = [
			{ value: "", label: __( "Select Taxonomy" ) }
		]

		if ( "" != taxonomyList ) {
			Object.keys( taxonomyList ).map( ( item, thisIndex ) => {
				return taxonomyListOptions.push( { value : taxonomyList[item]["name"], label: taxonomyList[item]["label"] } )
			} )
		}

		

        // All Controls.
        const generalSettings = () => {
            return (
			<InspectorControls>
				<PanelBody title={ __( "General" ) }>
					<SelectControl
						label={ __( "Post Type" ) }
						value={ postType }
						onChange={ ( value ) => this.onSelectPostType( value ) }
						options={ uagb_blocks_info.post_types }
					/>				
					{ "" != taxonomyList &&
							<SelectControl
							label={ __( "Taxonomy" ) }
							value={ taxonomyType }
							onChange={ ( value ) => this.onSelectTaxonomyType( value ) }
							options={ taxonomyListOptions }
							/>
					}					
					<hr className="uagb-editor__separator" />
                </PanelBody>
            </InspectorControls>
            )
        } 
        return (
				<div>
					<InspectorControls>
						{ generalSettings() }
					</InspectorControls>
					<div className="uagb-taxonomy-wrap">
					{categoriesList.map((p,index)=>
						<label>{p.name}</label>
					)}
					</div>
				</div>
        )
    }
}

export default withSelect( ( select, props ) => {

	const { categories, postsToShow, order, orderBy, postType, taxonomyType, paginationMarkup, postPagination, excludeCurrentPost } = props.attributes
	const { setAttributes } = props
	const { getEntityRecords } = select( "core" )

	let allTaxonomy = uagb_blocks_info.all_taxonomy
	let currentTax = allTaxonomy[postType]
	let taxonomy = ""
	let categoriesList = []
	let rest_base = ""

	if ( true === postPagination && 'empty' === paginationMarkup ) {
		$.ajax({
			url: uagb_blocks_info.ajax_url,
			data: {
				action: "uagb_post_pagination",
				attributes : props.attributes,
				nonce: uagb_blocks_info.uagb_ajax_nonce
			},
			dataType: "json",
			type: "POST",
			success: function( data ) {
				setAttributes( { paginationMarkup: data.data } ) 
			}
		});
	}

	if ( "undefined" != typeof currentTax ) {

		if ( "undefined" != typeof currentTax["taxonomy"][taxonomyType] ) {
			rest_base = ( currentTax["taxonomy"][taxonomyType]["rest_base"] == false || currentTax["taxonomy"][taxonomyType]["rest_base"] == null ) ? currentTax["taxonomy"][taxonomyType]["name"] : currentTax["taxonomy"][taxonomyType]["rest_base"]
		}

		if ( "" != taxonomyType ) {
			if ( "undefined" != typeof currentTax["terms"] && "undefined" != typeof currentTax["terms"][taxonomyType] ) {
				categoriesList = currentTax["terms"][taxonomyType]
			}
		}
	}

	let latestPostsQuery = {
		order: order,
		orderby: orderBy,
		per_page: postsToShow,
	}

	if ( excludeCurrentPost ) {		
		latestPostsQuery['exclude'] = select("core/editor").getCurrentPostId()
	}
	
	// latestPostsQuery[rest_base] = categories
	
	return {
		latestPosts: getEntityRecords( 'postType' ,postType, latestPostsQuery ),
		categoriesList: categoriesList,
		taxonomyList: ( "undefined" != typeof currentTax ) ? currentTax["taxonomy"] : [] 
	}

} )( UAGBTaxonomyList )
