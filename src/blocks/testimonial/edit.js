// Import block dependencies and components.
import classnames from "classnames"

import AuthorName from "./components/AuthorName";
import Designation from "./components/Designation";
import Description from "./components/Description";
import PositionClasses from "./classes";
import TestimonialStyle from "./inline-styles";
import TestimonialImage from "./components/TestimonialImage";

import times from "lodash/times"
import Slider from "react-slick"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload
} = wp.editor

const {
	PanelBody,
	PanelColor,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	withNotices
} = wp.components

const {
	compose
} = wp.compose;

const {
	withSelect
} = wp.data

const {
	withViewportMatch
} = wp.viewport

// Extend component
const { Component, Fragment } = wp.element

class UAGBtestimonial extends Component {

	constructor() {

		super( ...arguments );
		this.onSelectTestImage  = this.onSelectTestImage.bind( this )
		this.onRemoveTestImage  = this.onRemoveTestImage.bind(this)
		this.getImageName       = this.getImageName.bind(this)
		this.togglePauseOnHover = this.togglePauseOnHover.bind( this )
		this.toggleInfiniteLoop = this.toggleInfiniteLoop.bind( this )
		this.toggleAutoplay     = this.toggleAutoplay.bind( this )

	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectTestImage( media, index ) {
		const { test_block } = this.props.attributes
		const { setAttributes } = this.props

		let imag_url = null
		if ( ! media || ! media.url ) {			
			imag_url = null
		}else{
			imag_url = media
		}

		const newItems = test_block.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item['image'] = imag_url				
			}
			return item			
		} )

		setAttributes( {
			test_block: newItems,
		} )		

	}	

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveTestImage( index ) {
		const { test_block } = this.props.attributes
		const { setAttributes } = this.props
		
		const newItems = test_block.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item['image'] = null				
			}
			return item			
		} )

		setAttributes( {
			test_block: newItems,
		} )
	}
	
	/*
	 * Event to set Image selectot label.
	 */
	getImageName( image ){
		const { test_block } = this.props.attributes

		let image_name = "Select Image"
		if(image){
			if(image.url == null || image.url == "" ){
				image_name = "Select Image"
			}else{
				image_name = "Replace Image"
			}
		}
		return image_name;
	}
		
	togglePauseOnHover() {
		const { pauseOnHover } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { pauseOnHover: ! pauseOnHover } )
	}

	toggleInfiniteLoop() {
		const { infiniteLoop } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { infiniteLoop: ! infiniteLoop } )
	}

	toggleAutoplay() {
		const { autoplay } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { autoplay: ! autoplay } )
	}

	splitBlock( before, after, ...blocks ) {
		const {
			attributes,
			insertBlocksAfter,
			setAttributes,
			onReplace,
		} = this.props;

		if ( after ) {
			// Append "After" content as a new paragraph block to the end of
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( 'core/paragraph', { content: after } ) );
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks );
		}

		const { content } = attributes;
		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] );
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } );
		}
	}
	render() {

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace } = this.props;

		// Setup the attributes.
		const {
			test_item_count,
			test_block,
			headingAlign,
			designationColor,
			descColor,
			authorColor,
			prefixTag,
			nameFontSize,
			designationFontSize,
			descFontSize,
			separatorWidth,
			separatorSpace,
			descSpace,
			iconimgStyle,
			imagePosition,
			block_id,
			source_type,
			nameSpace,
			imgLeftPadding,
			imgRightPadding,
			imgTopPadding,
			imgBottomPadding,
			iconImage,
			imageSize,
			imageWidth,
			columns,
			tcolumns,
			mcolumns,
			pauseOnHover,
			infiniteLoop,
			transitionSpeed,
			autoplay,
			autoplaySpeed,
			arrowSize,
			arrowColor,			
		} = attributes;

		// Add CSS.
		var element = document.getElementById( "uagb-testinomial-style-" + this.props.clientId )
		if( null != element && 'undefined' != typeof element ) {
			element.innerHTML = TestimonialStyle( this.props );
		}		

		const my_block_id = 'uagb-testimonial-'+this.props.clientId;
		
				
		// Typography settings.
		const TypographySettings = (
			<Fragment>
				<PanelBody
						title={ __( "Typography" ) }
						initialOpen={ false }
					>						
						<RangeControl
							label={ __( "Content Font Size" ) }
							value={ descFontSize }
							onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>											
						<RangeControl
							label={ __( "Name Font Size" ) }
							value={ nameFontSize }
							onChange={ ( value ) => setAttributes( { nameFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>	
						<RangeControl
							label={ __( "Designation Font Size" ) }
							value={ designationFontSize }
							onChange={ ( value ) => setAttributes( { designationFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						
					</PanelBody>

					<PanelColorSettings
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									value: descColor,
									onChange: ( colorValue ) => setAttributes( { descColor: colorValue } ),
									label: __( 'Content Color' ),
								},
								{
									value: authorColor,
									onChange: ( colorValue ) => setAttributes( { authorColor: colorValue } ),
									label: __( 'Name Color' ),
								},
								{
									value: designationColor,
									onChange: ( colorValue ) => setAttributes( { designationColor: colorValue } ),
									label: __( 'Designation Color' ),
								},								
							] }
						>
					</PanelColorSettings>
			</Fragment>
		);

		// Margin Settings.
		const marginSettings = (
			<Fragment>
				<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }
					>					
					<RangeControl
						label={ __( "Content Bottom Margin" ) }
						value={ descSpace }
						onChange={ ( value ) => setAttributes( { descSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Name Bottom Margin" ) }
						value={ nameSpace }
						onChange={ ( value ) => setAttributes( { nameSpace: value } ) }
						min={ 0 }
						max={ 50 }
						beforeIcon="editor-textcolor"
						allowReset
					/>								

					<PanelBody
						title={ __( "Image Padding" ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( "Left Padding" ) }
							value={ imgLeftPadding }
							onChange={ ( value ) => setAttributes( { imgLeftPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Right Padding" ) }
							value={ imgRightPadding }
							onChange={ ( value ) => setAttributes( { imgRightPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Top Padding" ) }
							value={ imgTopPadding }
							onChange={ ( value ) => setAttributes( { imgTopPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Padding" ) }
							value={ imgBottomPadding }
							onChange={ ( value ) => setAttributes( { imgBottomPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
					</PanelBody>
				</PanelBody>
			</Fragment>
		);

		// Image sizes.
		const imageSizeOptions = [
			{ value: 'thumbnail', label: __( 'Thumbnail' ) },
			{ value: 'medium', label: __( 'Medium' ) },
			{ value: 'full', label: __( 'Large' ) }
		];		
		
		function NextArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" tabIndex="0" role="button" style={{ "borderColor" : arrowColor }}><i className="dashicons-arrow-right-alt2 dashicons" style={{ "fontSize" : props.arrowSize, "color" : arrowColor }}></i></button>
			)
		}

		function PrevArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" tabIndex="0" role="button" style={{ "borderColor" : arrowColor }}><i className="dashicons-arrow-left-alt2 dashicons" style={{ "fontSize" : props.arrowSize, "color" : arrowColor }}></i></button>
			)
		}

		const settings = {
			slidesToShow : columns,
			slidesToScroll : 1,
			autoplaySpeed : 2000,
			autoplay : autoplay,
			infinite : infiniteLoop,
			pauseOnHover : pauseOnHover,
			speed : transitionSpeed,
			arrows : true,
			dots : true,
			rtl : false,
			nextArrow: <NextArrow arrowSize={arrowSize}/>,
			prevArrow: <PrevArrow arrowSize={arrowSize}/>,
			responsive : [
				{
					breakpoint : 1024,
					settings : {
						slidesToShow : tcolumns,
						slidesToScroll : 1,
					}
				},
				{
					breakpoint : 767,
					settings : {
						slidesToShow : mcolumns,
						slidesToScroll : 1,
					}
				}
			]
		}

		// Set testinomial image panel
		const tmControls = ( index ) => {
			let image_val = null;
			if( test_block[index] && typeof test_block[index] !== 'undefined'){
				image_val = test_block[index]['image']
			}
			return (
				<PanelBody key={index}
					title={ __( "Testimonial" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
					initialOpen={ true }
				>
				
					<BaseControl
						className="editor-bg-image-control"
						label={ __( "" ) }
					>
						<MediaUpload
							title={ __( "Select Image"+ ( index + 1 ) ) }
							onSelect={ ( media ) => { 
								this.onSelectTestImage( media, index )								
							} }
							type="image"
							value={ image_val }
							render={ ( { open } ) => (
								<Button isDefault onClick={ open }>
									{  this.getImageName( test_block[index]['image'] ) }
								</Button>
							) }
						/>						
						{ ( image_val && test_block[index]['image'].url !== null && test_block[index]['image'].url !=='' ) &&
							<Button className="uagb-rm-btn" key= { index} onClick={ (value) => {
								this.onRemoveTestImage(index)
							} } isLink isDestructive>
								{ __( "Remove Image" ) }
							</Button>
						}
					</BaseControl>
				</PanelBody>
			)
		}

		const carousal_settings = (
			<Fragment>
				<PanelBody title={ __( "Carousel" ) } initialOpen={ false }>
					<ToggleControl
						label={ __( "Pause On Hover" ) }
						checked={ pauseOnHover }
						onChange={ this.togglePauseOnHover }
					/>
					<ToggleControl
						label={ __( "Autoplay" ) }
						checked={ autoplay }
						onChange={ this.toggleAutoplay }
					/>
					{ autoplay == true &&
						<RangeControl
							label={ __( "Autoplay Speed (ms)" ) }
							value={ autoplaySpeed }
							onChange={ ( value ) => setAttributes( { autoplaySpeed: value } ) }
							min={ 100 }
							max={ 10000 }
						/>
					}
					<ToggleControl
						label={ __( "Infinite Loop" ) }
						checked={ infiniteLoop }
						onChange={ this.toggleInfiniteLoop }
					/>
					<RangeControl
						label={ __( "Transition Speed (ms)" ) }
						value={ transitionSpeed }
						onChange={ ( value ) => setAttributes( { transitionSpeed: value } ) }
						min={ 100 }
						max={ 5000 }
					/>
					<RangeControl
						label={ __( "Arrow Size" ) }
						value={ arrowSize }
						onChange={ ( value ) => setAttributes( { arrowSize: value } ) }
						min={ 10 }
						max={ 50 }
					/>
				</PanelBody>
			</Fragment>			
		)
		// Global Controls.
		const inspect_control = (
				<Fragment>
				 <InspectorControls>
				 	<PanelBody
					title={ __( 'General' ) }
					initialOpen={ false }
					>	
				 	<RangeControl
						label={ __( 'Number of Testimonials' ) }
						value={ test_item_count }
						onChange={ ( newCount ) => {
							let cloneTest_block = [ ...test_block ]
							if ( cloneTest_block.length < newCount ) {
								const incAmount = Math.abs( newCount - cloneTest_block.length )

								{ times( incAmount, n => {

									cloneTest_block.push( {
										description: "Take a look at these gorgeous testimonial slider examples, and see just how flexible this widget is. Testinomial test-" + ( cloneTest_block.length + 1 ),
										name: cloneTest_block[ 0 ].name,
										company: cloneTest_block[ 0 ].company,
										image: cloneTest_block[ 0 ].image,
										} )
								} ) }
								setAttributes( { test_block: cloneTest_block } )
							}else{
								const incAmount = Math.abs( newCount - cloneTest_block.length )
								let data_new = cloneTest_block;
					            for( var i= 0; i < incAmount; i++ ){             
					                data_new.pop();
					            }           
					            setAttributes({test_block:data_new});

							}
							setAttributes( { test_item_count: newCount } )
						} }
						min={ 0 }
						max={ 10 }
						beforeIcon="editor-textcolor"
						allowReset
					/>
					<RangeControl
						label={ __( "Columns" ) }
						value={ columns }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
						min={ 1 }
						max={ 5 }
					/>
					<RangeControl
						label={ __( "Columns (Tablet)" ) }
						value={ tcolumns }
						onChange={ ( value ) => setAttributes( { tcolumns: value } ) }
						min={ 1 }
						max={ 3 }
					/>
					<RangeControl
						label={ __( "Columns (Mobile)" ) }
						value={ mcolumns }
						onChange={ ( value ) => setAttributes( { mcolumns: value } ) }
						min={ 1 }
						max={ 3 }
					/>
					</PanelBody>
					{ carousal_settings }
				 	
					<PanelBody
					title={ __( 'Image' ) }
					initialOpen={ false }
					>
					{ times( test_item_count, n => tmControls( n ) ) }

					{  <Fragment>
						<SelectControl
							label={ __( 'Image Position' ) }
							value={ imagePosition }
							onChange={ ( value ) => setAttributes( { imagePosition: value } ) }
							options={ [
								{ value: 'top', label: __( 'Top' ) },
								{ value: 'bottom', label: __( 'Bottom' ) },
								{ value: 'left', label: __( 'Left' ) },
								{ value: 'right', label: __( 'Right' ) },
							] }
						/>	
						<SelectControl
							label={ __( 'Image Style' ) }
							value={ iconimgStyle }
							onChange={ ( value ) => setAttributes( { iconimgStyle: value } ) }
							options={ [
								{ value: 'normal', label: __( 'Normal' ) },
								{ value: 'circle', label: __( 'Circle' ) },
								{ value: 'square', label: __( 'Square' ) },
							] }
						/>
						<SelectControl
								label={ __( 'Image Size' ) }
								options={ imageSizeOptions }
								value={ imageSize }
								onChange={ ( value ) => setAttributes( { imageSize: value } ) }
							/>
						 <RangeControl
								label={ __( 'Width' ) }
								value={ imageWidth }
								onChange={ ( value ) => setAttributes( { imageWidth: value } ) }
								min={ 0 }
								max={ 500 }
								beforeIcon="editor-textcolor"
								allowReset
							/>
						</Fragment> 
					}
					
					
				</PanelBody>
					{ TypographySettings }

					{ marginSettings }

				</InspectorControls>
				</Fragment>
			);

		return (
			<Fragment>				
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>				
				{inspect_control}
				<div className={ classnames(
					className,
					"uagb-testomonial__outer-wrap"
				) }
					id = { my_block_id }
				>

				<Slider
					className={ classnames(
						"is-carousel",
						`uagb-tm__columns-${ columns }`,
						"uagb-tm__items"
					) }					
					{...settings}
				>

					{ test_block.map( ( test, index ) => 

						<div className = { classnames(
						"uagb-testomonial__wrap",
						...PositionClasses( attributes ),
						) } key ={ "wrap-"+index } >
							<div className = "uagb-tm__content" key ={ "tm_content-"+index }>
								{  // Get description.
									<Fragment>
										<div className = "uagb-testinomial-text-wrap" key={"text-wrap-"+index}>
											<Description attributes={attributes} setAttributes = { setAttributes } props = { this.props }  index_value = {index}/>
										</div>
									</Fragment>
								}
								<div className ="uagb-tm__meta">
									<div className ="uagb-tm__meta-inner">
										
										<TestimonialImage  attributes={attributes} testimonial={test} index_value = {index} />	
															
										{ //title_text
											<Fragment>
												<div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
													<AuthorName attributes={attributes} setAttributes = { setAttributes } props = { this.props } index_value = {index}/>
													<Designation attributes={attributes} setAttributes = { setAttributes } props = { this.props }  index_value = {index}/>
												</div>
											</Fragment>
										}								
									</div>
								</div>
							</div>						
						</div>												
					)}
				</Slider>
				</div>
			</Fragment>
		)
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-testinomial-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}
}

export default UAGBtestimonial
