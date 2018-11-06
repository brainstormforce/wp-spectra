// Import block dependencies and components.
import classnames from "classnames"
import Title from "./components/Title"
import Price from "./components/Price"
import Description from "./components/Description"
import PositionClasses from "./classes"
import RestMenuStyle from "./inline-styles"
import RestMenuImage from "./components/RestMenuImage"
import times from "lodash/times"

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
	ToggleControl,
	BaseControl,
	Button,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBrestMenu extends Component {

	constructor() {

		super( ...arguments );
		this.onSelectTestImage  = this.onSelectTestImage.bind( this )
		this.onRemoveTestImage  = this.onRemoveTestImage.bind(this)
		this.getImageName       = this.getImageName.bind(this)
		this.togglePauseOnHover = this.togglePauseOnHover.bind( this )
		this.toggleInfiniteLoop = this.toggleInfiniteLoop.bind( this )
		this.toggleAutoplay     = this.toggleAutoplay.bind( this )
		this.onRemoveImage 		= this.onRemoveImage.bind( this )
		this.onSelectImage 		= this.onSelectImage.bind( this )
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

		let image_title = "Select Image"
		if(image){
			if(image.url == null || image.url == "" ){
				image_title = "Select Image"
			}else{
				image_title = "Replace Image"
			}
		}
		return image_title;
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

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { backgroundImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { backgroundImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { backgroundImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { backgroundImage: null } )
			return
		}
		setAttributes( { backgroundImage: media } )
	}

	render() {

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace } = this.props;

		// Setup the attributes.
		const {
			menu_item_count,
			test_block,
			headingAlign,
			priceColor,
			descColor,
			titleColor,
			prefixTag,
			titleFontSize,
			priceFontSize,
			descFontSize,
			separatorWidth,
			separatorSpace,
			descSpace,
			iconimgStyle,
			imagePosition,
			imageAlignment,
			block_id,
			source_type,
			titleSpace,
			imgHrPadding,
			imgVrPadding,
			iconImage,
			imageSize,
			imageWidth,
			columns,
			tcolumns,
			mcolumns,			
			rowGap,
			columnGap,
			contentPadding,
			backgroundType,
			backgroundColor,
			backgroundImage,
			backgroundPosition,
			backgroundSize,
			backgroundRepeat,
			backgroundAttachment,
			backgroundImageColor,
			backgroundOpacity,
			borderStyle,
			borderWidth ,
			borderRadius,
			borderColor,
			stack
		} = attributes;

		// Add CSS.
		var element = document.getElementById( "uagb-testinomial-style-" + this.props.clientId )
		if( null != element && 'undefined' != typeof element ) {
			element.innerHTML = RestMenuStyle( this.props );
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
							label={ __( "Description Font Size" ) }
							value={ descFontSize }
							onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							initialPosition={16}
							beforeIcon="editor-textcolor"
							allowReset
						/>											
						<RangeControl
							label={ __( "Title Font Size" ) }
							value={ titleFontSize }
							onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							initialPosition={30}
							beforeIcon="editor-textcolor"
							allowReset
						/>	
						<RangeControl
							label={ __( "Price Font Size" ) }
							value={ priceFontSize }
							onChange={ ( value ) => setAttributes( { priceFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							initialPosition={16}
							beforeIcon="editor-textcolor"							
							llowReset
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
									value: titleColor,
									onChange: ( colorValue ) => setAttributes( { titleColor: colorValue } ),
									label: __( 'Name Color' ),
								},
								{
									value: priceColor,
									onChange: ( colorValue ) => setAttributes( { priceColor: colorValue } ),
									label: __( 'Price Color' ),
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
						label={ __( "Description Bottom Margin" ) }
						value={ descSpace }
						onChange={ ( value ) => setAttributes( { descSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Title Bottom Margin" ) }
						value={ titleSpace }
						onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>						
					<RangeControl
						label={ __( "Image Horizontal Padding" ) }
						value={ imgHrPadding }
						onChange={ ( value ) => setAttributes( { imgHrPadding: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Image Vertical Padding" ) }
						value={ imgVrPadding }
						onChange={ ( value ) => setAttributes( { imgVrPadding: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>						
					
				</PanelBody>
			</Fragment>
		);

		const background_settings = (
			<Fragment>
				<PanelBody title={ __( "Background" ) } initialOpen={ false }>
						<SelectControl
							label={ __( "Background Type" ) }
							value={ backgroundType }
							onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "color", label: __( "Color" ) },
								{ value: "image", label: __( "Image" ) },
							] }
						/>
						{ "color" == backgroundType &&
							<PanelColor
								title={ __( "Background Color" ) }
								colorValue={ backgroundColor } >
								<ColorPalette
									value={ backgroundColor }
									onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
									allowReset
								/>
							</PanelColor>
						}
						{ "image" == backgroundType &&
							<Fragment>
								<BaseControl
									className="editor-bg-image-control"
									label={ __( "Background Image" ) }>
									<MediaUpload
										title={ __( "Select Background Image" ) }
										onSelect={ this.onSelectImage }
										type="image"
										value={ backgroundImage }
										render={ ( { open } ) => (
											<Button isDefault onClick={ open }>
												{ ! backgroundImage ? __( "Select Background Image" ) : __( "Replace image" ) }
											</Button>
										) }
									/>
									{ backgroundImage &&
										<Button className="uagb-rm-btn" onClick={ this.onRemoveImage } isLink isDestructive>
											{ __( "Remove Image" ) }
										</Button>
									}
								</BaseControl>
								{ backgroundImage &&
									<Fragment>
										<SelectControl
											label={ __( "Image Position" ) }
											value={ backgroundPosition }
											onChange={ ( value ) => setAttributes( { backgroundPosition: value } ) }
											options={ [
												{ value: "top-left", label: __( "Top Left" ) },
												{ value: "top-center", label: __( "Top Center" ) },
												{ value: "top-right", label: __( "Top Right" ) },
												{ value: "center-left", label: __( "Center Left" ) },
												{ value: "center-center", label: __( "Center Center" ) },
												{ value: "center-right", label: __( "Center Right" ) },
												{ value: "bottom-left", label: __( "Bottom Left" ) },
												{ value: "bottom-center", label: __( "Bottom Center" ) },
												{ value: "bottom-right", label: __( "Bottom Right" ) },
											] }
										/>
										<SelectControl
											label={ __( "Attachment" ) }
											value={ backgroundAttachment }
											onChange={ ( value ) => setAttributes( { backgroundAttachment: value } ) }
											options={ [
												{ value: "fixed", label: __( "Fixed" ) },
												{ value: "scroll", label: __( "Scroll" ) }
											] }
										/>
										<SelectControl
											label={ __( "Repeat" ) }
											value={ backgroundRepeat }
											onChange={ ( value ) => setAttributes( { backgroundRepeat: value } ) }
											options={ [
												{ value: "no-repeat", label: __( "No Repeat" ) },
												{ value: "repeat", label: __( "Repeat" ) },
												{ value: "repeat-x", label: __( "Repeat-x" ) },
												{ value: "repeat-y", label: __( "Repeat-y" ) }
											] }
										/>
										<SelectControl
											label={ __( "Size" ) }
											value={ backgroundSize }
											onChange={ ( value ) => setAttributes( { backgroundSize: value } ) }
											options={ [
												{ value: "auto", label: __( "Auto" ) },
												{ value: "cover", label: __( "Cover" ) },
												{ value: "contain", label: __( "Contain" ) }
											] }
										/>
										<PanelColor
											title={ __( "Image Overlay Color" ) }
											colorValue={ backgroundImageColor }>
											<ColorPalette
												value={ backgroundImageColor }
												onChange={ ( colorValue ) => setAttributes( { backgroundImageColor: colorValue } ) }
												allowReset
											/>
										</PanelColor>
									</Fragment>
								}
							</Fragment>
						}						
						{ ( "image" == backgroundType && backgroundImage )  &&
							<RangeControl
								label={ __( "Opacity" ) }
								value={ backgroundOpacity }
								onChange={ ( value ) => setAttributes( { backgroundOpacity: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
								initialPosition={0}
							/>
						}						
					</PanelBody>
					<PanelBody title={ __( "Border" ) } initialOpen={ false }>
						<SelectControl
							label={ __( "Border Style" ) }
							value={ borderStyle }
							onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "dotted", label: __( "Dotted" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "groove", label: __( "Groove" ) },
								{ value: "inset", label: __( "Inset" ) },
								{ value: "outset", label: __( "Outset" ) },
								{ value: "ridge", label: __( "Ridge" ) },
							] }
						/>
						{ "none" != borderStyle &&
							<Fragment>
								<RangeControl
									label={ __( "Border Width" ) }
									value={ borderWidth }
									onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								<RangeControl
									label={ __( "Border Radius" ) }
									value={ borderRadius }
									onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
									min={ 0 }
									max={ 1000 }
									allowReset
								/>
								<PanelColor
									title={ __( "Border Color" ) }
									colorValue={ borderColor } >
									<ColorPalette
										value={ borderColor }
										onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
										allowReset
									/>
								</PanelColor>
							</Fragment>
						}
					</PanelBody>
			</Fragment>
			);

		// Image sizes.
		const imageSizeOptions = [
			{ value: 'thumbnail', label: __( 'Thumbnail' ) },
			{ value: 'medium', label: __( 'Medium' ) },
			{ value: 'full', label: __( 'Large' ) }
		];		
				
		let image_enable = false;
		// Set testinomial image panel
		const tmControls = ( index ) => {
			let image_val = null;
			if( test_block[index] && typeof test_block[index] !== 'undefined'){
				image_val = test_block[index]['image']
			}
			return (
				<PanelBody key={index}
					title={ __( "Image" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
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

		/*const carousal_settings = (
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
*/
		let cnt = 0;
		test_block.map( ( item, thisIndex ) => {
			let image_arr = test_block[thisIndex]			
			if( image_arr && typeof image_arr !== 'undefined'){
	            const image = image_arr['image']
	            if( typeof image !== "undefined" && image !== null && image !=='' ){
	            	cnt++;
	            }
	        }
		} )	    

		// Global Controls.
		const inspect_control = (
				<Fragment>
				 <InspectorControls>
				 	<PanelBody
					title={ __( 'General' ) }
					initialOpen={ false }
					>	
				 	<RangeControl
						label={ __( 'Number of Menu' ) }
						value={ menu_item_count }
						onChange={ ( newCount ) => {
							let cloneTest_block = [ ...test_block ]
							if ( cloneTest_block.length < newCount ) {
								const incAmount = Math.abs( newCount - cloneTest_block.length )

								{ times( incAmount, n => {

									cloneTest_block.push( {
										description: "Lorem Ipsum is simply dummy text" ,
										title: "Manu Item"+ ( cloneTest_block.length + 1 ),
										price: "$19",
										image: "",
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
							setAttributes( { menu_item_count: newCount } )
						} }
						min={ 0 }
						max={ 10 }
						allowReset
					/>
					<RangeControl
						label={ __( "Columns" ) }
						value={ columns }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
						min={ 1 }
						max={ menu_item_count }
					/>
					<RangeControl
						label={ __( "Columns (Tablet)" ) }
						value={ tcolumns }
						onChange={ ( value ) => setAttributes( { tcolumns: value } ) }
						min={ 1 }
						max={ menu_item_count }
					/>
					<RangeControl
						label={ __( "Columns (Mobile)" ) }
						value={ mcolumns }
						onChange={ ( value ) => setAttributes( { mcolumns: value } ) }
						min={ 1 }
						max={ menu_item_count }
					/>
					</PanelBody>
					{ /*carousal_settings*/ }
				 	
					<PanelBody
					title={ __( 'Image' ) }
					initialOpen={ false }
					>
					{ times( menu_item_count, n => tmControls( n ) ) }

					{  cnt > 0 && <Fragment>
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
						{ (imagePosition == 'left' || imagePosition == 'right') && 
							<Fragment>
								<SelectControl
								label={ __( 'Vertical ALignment' ) }
								value={ imageAlignment }
								onChange={ ( value ) => setAttributes( { imageAlignment: value } ) }
								options={ [
									{ value: 'top', label: __( 'Top' ) },
									{ value: 'middle', label: __( 'Middle' ) },
								] }
								/>	
								<SelectControl
									label={ __( "Stack on" ) }
									value={ stack }
									options={ [
										{ value: "none", label: __( "None" ) },
										{ value: "tablet", label: __( "Tablet" ) },
										{ value: "mobile", label: __( "Mobile" ) },
									] }
									help={ __( "Note: Choose on what breakpoint the Info Box will stack." ) }
									onChange={ ( value ) => setAttributes( { stack: value } ) }
								/>
							</Fragment>
						}
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
								allowReset
							/>
						</Fragment> 
					}
					
					
				</PanelBody>
					{ TypographySettings }

					{ marginSettings }
					{ background_settings }
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
					"uagb-rest_menu__outer-wrap uagb-slick-carousal uagb-rm__arrow-outside"
				) }
					id = { my_block_id }
				>

				
					{ test_block.map( ( test, index ) => 

						<div className = { classnames(
						"uagb-rest_menu__wrap",
						...PositionClasses( attributes ),
						) } key ={ "wrap-"+index } >							
							<div className = "uagb-rm__content" key ={ "tm_content-"+index }>
								<div className = "uagb-rm__overlay"></div>
								{ (imagePosition == 'top' || imagePosition == 'left' ) && <RestMenuImage  attributes={attributes}  index_value = {index} /> }	

								<div className ="uagb-rm__text-wrap">
									{  // Get description.
										<Fragment>
											<div className = "uagb-testinomial-text-wrap" key={"text-wrap-"+index}>
												<Description attributes={attributes} setAttributes = { setAttributes } props = { this.props }  index_value = {index}/>
											</div>
										</Fragment>
									}
									<div className ="uagb-rm__meta">
										<div className ="uagb-rm__meta-inner">
											
											{ (imagePosition == 'bottom' ) && <RestMenuImage  attributes={attributes} index_value = {index} /> }	
																
											{ //title_text
												<Fragment>
													<div className = "uagb-testimonial-details" key={"tm_wraps-"+index}>
														<Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } index_value = {index}/>
														<Price attributes={attributes} setAttributes = { setAttributes } props = { this.props }  index_value = {index}/>
													</div>
												</Fragment>
											}								
										</div>
									</div>
								</div>
								{ ( imagePosition == 'right' ) && <RestMenuImage  attributes={attributes}  index_value = {index} /> }	
							</div>						
						</div>												
					)}				
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

export default UAGBrestMenu
