/**
 * BLOCK: Price List - Edit Class
 */
import classnames from "classnames"

import PositionClasses from "./classes"
import RestMenuStyle from "./inline-styles"
import RestMenuImage from "./components/RestMenuImage"
import Title from "./components/Title"
import Price from "./components/Price"
import Description from "./components/Description"

import times from "lodash/times"


const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	MediaUpload
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	BaseControl,
	Button,
	TabPanel,
	Dashicon
} = wp.components

const { Component, Fragment } = wp.element

class UAGBRestaurantMenuChild extends Component {

    constructor() {

		super( ...arguments )
		this.onSelectRestImage  = this.onSelectRestImage.bind( this )
		this.onRemoveRestImage  = this.onRemoveRestImage.bind(this)
		this.getImageName       = this.getImageName.bind(this)
		// this.onRemoveImage 		= this.onRemoveImage.bind( this )
		// this.onSelectImage 		= this.onSelectImage.bind( this )
    }
    
    onSelectRestImage( media ) {
		const { image } = this.props.attributes
		const { setAttributes } = this.props

		let image_url = null
		if ( ! media || ! media.url ) {
			image_url = null
		}else{
			image_url = media
		}

		if ( ! media.type || "image" !== media.type ) {
			image_url = null
		}
        
	
		setAttributes( {
			image: image_url,
		} )

    }

    /*
	 * Event to set Image selectot label.
	 */
	getImageName( image ){

		let image_title = __( "Select Image" )
		if(image){
			if(image.url == null || image.url == "" ){
				image_title = __( "Select Image" )
			}else{
				image_title = __( "Replace Image" )
			}
		}
		return image_title
    }
    /*
	 * Event to set Image as null while removing.
	 */
	onRemoveRestImage() {
		const { image } = this.props.attributes
		const { setAttributes } = this.props
		setAttributes( {
			image: null,
		} )
	}

	render() {

		const { className, setAttributes, attributes } = this.props

		// Setup the attributes.
		const {
			menu_item_count,
			rest_menu_item_arr,
			headingAlign,
			imagePosition,
			imageSize,
			image,
			imageAlignment
			
		} = attributes	
		
		

		

        const inspect_control = (
            <InspectorControls>
                <PanelBody title={ __( "Image" ) }initialOpen={ false } >
                <BaseControl
						className="editor-bg-image-control"
						label={ __( "" ) }
					>                        
						<MediaUpload
							title={ __( "Select Image" ) }
							onSelect={ ( media ) => {
								this.onSelectRestImage( media )
							} }
							allowedTypes= { [ "image" ] }
							value={ image }
							render={ ( { open } ) => (
								<Button isDefault onClick={ open }>
									{  this.getImageName( image ) }
								</Button>
							) }
						/>
						{ ( image ) &&
							<Button className="uagb-rm-btn"  onClick={ 
								this.onRemoveRestImage
							 } isLink isDestructive>
								{ __( "Remove Image" ) }
							</Button>
						}
					</BaseControl>
				</PanelBody>
            </InspectorControls>
        )
        
		return (
			<Fragment>
				{  ( ( imagePosition =="top" ) ) && <BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
				}
                {inspect_control}
				<div className={ classnames(
					className,
					"uagb-rest_menu__outer-wrap",
					`uagb-block-${this.props.clientId.substr( 0, 8 )}`
				) }
				>

			<div className = { classnames(
							"uagb-rest_menu__wrap",
							...PositionClasses( attributes ),
						) } >
										<div className = "uagb-rm__content" >
											
											{ (imagePosition == "top" || imagePosition == "left" ) && <RestMenuImage  attributes={attributes}   /> }
											<div className ="uagb-rm__text-wrap">
												{
													<Fragment>
														<div className = "uagb-rm-details">
															<div className = "uagb-rm__title-wrap" >
																<Title attributes={attributes} setAttributes = { setAttributes } />
																<div className = "uagb-rest-menu-text-wrap">
																	<Description attributes={attributes} setAttributes = { setAttributes } props = { this.props }  />
																</div>
															</div>
															<div className = "uagb-rm__price-wrap" >
																<Price attributes={attributes} setAttributes = { setAttributes } props = { this.props } />
															</div>
															
														</div>
													</Fragment>
												}
											</div>
											
											{ ( imagePosition == "right" ) && <RestMenuImage  attributes={attributes}  /> }
										</div>
										<div className="uagb-rm__separator-parent"><div className="uagb-rm__separator"></div></div>
									</div>
							

					</div>
					
			</Fragment>
		)
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-restaurant-menu-style-child-" + this.props.clientId.substr( 0, 8 ) )
		
		if( null !== element && undefined !== element ) {
			element.innerHTML = RestMenuStyle( this.props )
		}
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		this.props.setAttributes( { classMigrate: true } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-restaurant-menu-style-child-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

		
	}
}

export default UAGBRestaurantMenuChild
