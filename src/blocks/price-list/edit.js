/**
 * BLOCK: Price List - Edit Class
 */


import classnames from "classnames"
import Title from "./components/Title"
import Price from "./components/Price"
import Description from "./components/Description"
import PositionClasses from "./classes"
import RestMenuStyle from "./inline-styles"
import RestMenuImage from "./components/RestMenuImage"
import times from "lodash/times"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import memoize from "memize"


// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	InnerBlocks
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

const { select, withSelect } = wp.data;

const { Component, Fragment } = wp.element

const MAX_COLUMNS = 3

const ALLOWED_BLOCKS = [ "uagb/restaurant-menu-child" ]
// const ALLOWED_BLOCKS = [ "core/buttons" ]


class UAGBRestaurantMenu extends Component {

	constructor() {

		super( ...arguments )
		
		this.onRemoveImage 		= this.onRemoveImage.bind( this )
		this.onSelectImage 		= this.onSelectImage.bind( this )
		this.setcolumns			= this.setcolumns.bind( this )
	}

	setcolumns (value) {
		const { setAttributes } = this.props
		const getChildBlocks = select('core/block-editor').getBlocks( this.props.clientId );

		getChildBlocks.forEach((pricelistChild, key) => {
			pricelistChild.attributes.columns = value
		});
		setAttributes( { columns: value } )
	}
	

	

	

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props

		setAttributes( { backgroundImage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { backgroundImage: null } )
			return
		}

		if ( ! media.type || "image" !== media.type ) {
			setAttributes( { backgroundImage: null } )
			return
		}

		setAttributes( { backgroundImage: media } )
	}

	render() {

		const { className, setAttributes, attributes } = this.props

		// Setup the attributes.
		const {
			menu_item_count,
			rest_menu_item_arr,
			
			
			
			

			

			priceLoadGoogleFonts,
			titleLoadGoogleFonts,
			descLoadGoogleFonts,

			titleSpace,
			imgHrPadding,
			imgVrPadding,
			imageSize,
			imageWidth,
			columns,
			tcolumns,
			mcolumns,
			rowGap,
			columnGap,
			contentHrPadding,
			contentVrPadding,
			
			stack,
		} = attributes	

		
		
		

		
		

		let cnt = 0
		rest_menu_item_arr.map( ( item, thisIndex ) => {
			let image_arr = rest_menu_item_arr[thisIndex]
			if( image_arr && typeof image_arr !== "undefined"){
	            const image = image_arr["image"]
	            if( typeof image !== "undefined" && image !== null && image !=="" ){
	            	cnt++
	            }
	        }
		} )

		// Margin Settings.
		const marginSettings = (
			<PanelBody	title={ __( "Spacing" ) } initialOpen={ false }	>
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
					label={ __( "Title Bottom Margin" ) }
					value={ titleSpace }
					onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Item Padding (px)" ) }</h2>
				<RangeControl
					label={ UAGB_Block_Icons.vertical_spacing }
					className={ "uagb-margin-control" }
					value={ contentVrPadding }
					onChange={ ( value ) => setAttributes( { contentVrPadding: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<RangeControl
					label={ UAGB_Block_Icons.horizontal_spacing }
					className={ "uagb-margin-control" }
					value={ contentHrPadding }
					onChange={ ( value ) => setAttributes( { contentHrPadding: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				{  cnt > 0 && <Fragment>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Image Padding (px)" ) }</h2>
					<RangeControl
						label={ UAGB_Block_Icons.vertical_spacing }
						className={ "uagb-margin-control" }
						value={ imgVrPadding }
						onChange={ ( value ) => setAttributes( { imgVrPadding: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ UAGB_Block_Icons.horizontal_spacing }
						className={ "uagb-margin-control" }
						value={ imgHrPadding }
						onChange={ ( value ) => setAttributes( { imgHrPadding: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
				</Fragment>
				}

			</PanelBody>
		)

		const inspect_control = (
			<InspectorControls>
			 	<PanelBody	title={ __( "General" ) } initialOpen={ true }	>
			 		<RangeControl
						label={ __( "Number of Items" ) }
						value={ menu_item_count }
						onChange={ ( newCount ) => {
							let cloneTest_block = [ ...rest_menu_item_arr ]
							if ( cloneTest_block.length < newCount ) {
								const incAmount = Math.abs( newCount - cloneTest_block.length )

								{ times( incAmount, n => {

									cloneTest_block.push( {
										description: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit.") ,
										title:__(" Menu Item"+ ( cloneTest_block.length + 1 ) ),
										price: __("$19"),
										image: "",
									} )
								} ) }
								setAttributes( { rest_menu_item_arr: cloneTest_block } )
							}else{
								const incAmount = Math.abs( newCount - cloneTest_block.length )
								let data_new = cloneTest_block
				            for( var i= 0; i < incAmount; i++ ){
				                data_new.pop()
				            }
				            setAttributes({rest_menu_item_arr:data_new})

							}
							setAttributes( { menu_item_count: newCount } )
						} }
						min={ 0 }
						max={ 20 }
						allowReset
					/>
					<TabPanel className="uagb-size-type-field-tabs uagb-without-size-type" activeClass="active-tab"
						tabs={ [
							{
								name: "desktop",
								title: <Dashicon icon="desktop" />,
								className: "uagb-desktop-tab uagb-responsive-tabs",
							},
							{
								name: "tablet",
								title: <Dashicon icon="tablet" />,
								className: "uagb-tablet-tab uagb-responsive-tabs",
							},
							{
								name: "mobile",
								title: <Dashicon icon="smartphone" />,
								className: "uagb-mobile-tab uagb-responsive-tabs",
							},
						] }>
						{
							( tab ) => {
								let tabout

								if ( "mobile" === tab.name ) {
									tabout = (
										<RangeControl
											label={ __( "Columns" ) }
											value={ mcolumns }
											onChange={ ( value ) => setAttributes( { mcolumns: value } ) }
											min={ 1 }
											max={ Math.min( MAX_COLUMNS, menu_item_count ) }
										/>
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<RangeControl
											label={ __( "Columns" ) }
											value={ tcolumns }
											onChange={ ( value ) => setAttributes( { tcolumns: value } ) }
											min={ 1 }
											max={ Math.min( MAX_COLUMNS, menu_item_count ) }
										/>
									)
								} else {
									tabout = (
										<RangeControl
											label={ __( "Columns" ) }
											value={ columns }
											onChange={this.setcolumns }
											min={ 1 }
											max={ Math.min( MAX_COLUMNS, menu_item_count ) }
										/>
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
				</PanelBody>

				{ marginSettings }
			</InspectorControls>
		)

		const getPriceListTemplate = memoize( ( menu_item_count, rest_menu_item_arr ) => {
			return times( menu_item_count, n => [ "uagb/restaurant-menu-child", rest_menu_item_arr[n] ] )
		} )

		return (
			<Fragment>
				
				{inspect_control}
				<div className={ classnames(
					className,
					"uagb-rest_menu__outer-wrap",
					`uagb-block-${this.props.clientId.substr( 0, 8 )}`,
					...PositionClasses( attributes ),
				) }
				>

					<InnerBlocks
							template={ getPriceListTemplate( menu_item_count, rest_menu_item_arr ) }
							templateLock={ false }
							allowedBlocks={ ALLOWED_BLOCKS }
							// __experimentalMoverDirection={ 'desktop' == stack ?'vertical' : 'horizontal' }
							/>
				
							</div>
				
			</Fragment>
		)
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-restaurant-menu-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = RestMenuStyle( this.props )
		}
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		this.props.setAttributes( { classMigrate: true } )
		this.props.setAttributes( { childMigrate: true } )


		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-restaurant-menu-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}
}

export default UAGBRestaurantMenu
