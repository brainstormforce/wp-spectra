/**
 * BLOCK: Content Timeline.
 */
import UAGBIcon from "../../../../dist/blocks/uagb-controls/UAGBIcon.json"
import contentTimelineChildStyle from "./inline-styles"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

const { dateI18n } = wp.date

const { Component, Fragment } = wp.element

const { __ } = wp.i18n

// Import registerBlockType() from wp.blocks
const {
	createBlock
} = wp.blocks

const {
	BlockControls,
	InspectorControls,
	RichText,
	BlockAlignmentToolbar,
	PanelColorSettings,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
} = wp.components

let svg_icons = Object.keys( UAGBIcon )

class UAGBcontentTimelineChild extends Component {

		constructor() {
			super( ...arguments )

			// this.splitBlock = this.splitBlock.bind( this )

			// this.getTimelineicon = this.getTimelineicon.bind(this)

			this.toggleDisplayPostDate    = this.toggleDisplayPostDate.bind( this )
		}

		splitBlock( before, after, ...blocks ) {
			const {
				attributes,
				insertBlocksAfter,
				setAttributes,
				onReplace,
			} = this.props

			if ( after ) {
				// Append "After" content as a new paragraph block to the end of
				// any other blocks being inserted after the current paragraph.
				blocks.push( createBlock( "core/paragraph", { content: after } ) )
			}

			if ( blocks.length && insertBlocksAfter ) {
				insertBlocksAfter( blocks )
			}

			const { content } = attributes

			//console.log(attributes)
			if ( ! before ) {
				// If before content is omitted, treat as intent to delete block.
				onReplace( [] )
			} else if ( content !== before ) {
				// Only update content if it has in-fact changed. In case that user
				// has created a new paragraph at end of an existing one, the value
				// of before will be strictly equal to the current content.
				setAttributes( { content: before } )
			}
		}
		/**
	     * Function Name: toggleDisplayPostDate.
	     */
		toggleDisplayPostDate() {
			const { displayPostDate } = this.props.attributes
			const { setAttributes } = this.props

			setAttributes( { displayPostDate: ! displayPostDate } )
		}

		/**
	     * [getTimelineicon description]
	     * @param  {[type]} value [description]
	     * @return {[type]}       [description]
	     */
		// getTimelineicon(value) {
		// 	this.props.setAttributes( { icon: value } )
		// }

		saveDate( value, index ) {
			const { attributes, setAttributes } = this.props
			const { t_date } = attributes

			const newItems = t_date.map( ( item, thisIndex ) => {
				if ( index === thisIndex ) {
					item = { ...item, ...value }
				}

				return item
			} )

			setAttributes( {
				t_date: newItems,
			} )
		}

		componentDidMount() {
			//Store client id.
			this.props.setAttributes( { block_id: this.props.clientId } )
			this.props.setAttributes( { classMigrate: true } )
			// Pushing Style tag for this block css.
			const $style = document.createElement( "style" )
			$style.setAttribute( "id", "uagb-content-timeline-child-style-" + this.props.clientId )
			document.head.appendChild( $style )
		}

		componentDidUpdate(prevProps, prevState){
			// var id = this.props.clientId
			// window.addEventListener("load", this.timelineContent_back(id))
			// window.addEventListener("resize", this.timelineContent_back(id))
			// var time = this
			// $(".edit-post-layout__content").scroll( function(event) {
			// 	time.timelineContent_back(id)
			// })
		}	

		render() {

			// Setup the attributes.
			const {
				// isSelected,
				// className,
				setAttributes,
				insertBlocksAfter,
				mergeBlocks,
				onReplace,
				attributes: {
					headSpace,
					headingTag,
					// separatorSpace,
					headingColor,
					subHeadingColor,
					backgroundColor,
					// timelineItem,
					timelinAlignment,
					align,
					icon,
					borderRadius,
					bgPadding,
					block_id,
					t_date,
					displayPostDate,
					// stack,
					dateFormat,
					time_heading,
					time_desc,
				},
			} = this.props

			// Add CSS.
			var element = document.getElementById( "uagb-content-timeline-child-style-" + this.props.clientId )

			if( null != element && "undefined" != typeof element ) {
				element.innerHTML = contentTimelineChildStyle( this.props )
			}
			
			const content_control = (
				<InspectorControls>
				<PanelBody title={ __( "Timeline Item" ) } initialOpen={ false } >
					<TextControl
						label= { __( "Date Settings" ) }
						value= { t_date }
						onChange={ ( value ) => setAttributes( { t_date: value } ) }
					/>
					<SelectControl
							label={ __( "Typography" ) }
							value={ headingTag }
							onChange={ ( value ) => setAttributes( { headingTag: value } ) }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
								{ value: "p", label: __( "P" ) },
								{ value: "span", label: __( "SPAN" ) },
							] }
						/>
						<RangeControl
							label={ __( "Rounded Corners" ) }
							value={ borderRadius }
							onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
							min={ 0 }
							initialPosition={10}
							max={ 50 }
							allowReset
						/>
						<RangeControl
							label={ __( "Padding" ) }
							value={ bgPadding }
							onChange={ ( value ) => setAttributes( { bgPadding: value } ) }
							min={ 1 }
							initialPosition={10}
							max={ 50 }
							allowReset
						/>
						<RangeControl
							label={ __( "Heading Bottom Spacing" ) }
							value={ headSpace }
							onChange={ ( value ) => setAttributes( { headSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( "Color Settings" ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: headingColor,
								onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
								label: __( "Heading Color" ),
							},
							{
								value: subHeadingColor,
								onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
								label: __( "Content Color" ),
							},
							{
								value: backgroundColor,
								onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
								label: __( "Background Color" ),
							},
						] }
					>
					</PanelColorSettings>
				</InspectorControls>
			)

			var display_inner_date  = false
			var icon_class = "uagb-timeline__icon-new uagb-timeline__out-view-icon "
			var post_date = t_date

			if ( 'custom' != dateFormat ) {

				post_date = dateI18n( dateFormat, t_date )
				if( post_date === "Invalid date" ){
					post_date = t_date
				}
			}

				if(timelinAlignment == "center"){
					display_inner_date = true
				} 

				return (
							<Fragment>
								{ content_control }
								<BlockControls>
									<BlockAlignmentToolbar
										value={ align }
										onChange={ ( value ) => {
											setAttributes( { align: value } )
										} }
										controls={ [ "center", "left","right" ] }
									/>
								</BlockControls>
								<div className = "uagb-timeline__days">
								<article className = "uagb-timeline__field uagb-timeline__field-wrap"   id={"uagb-timeline-child-"+this.props.clientId}>
									<div className = { this.props.attributes.content_class }>
									<div className = "uagb-timeline__marker uagb-timeline__out-view-icon">
										<span className = {icon_class}>{ renderSVG(icon) }</span>
									</div>
								<div className = { this.props.attributes.dayalign_class }>
								<div className="uagb-timeline__events-new">
									<div className="uagb-timeline__events-inner-new">
										<div className="uagb-timeline__date-hide uagb-timeline__date-inner" >
	                                        <div className={ "uagb-timeline__inner-date-new" }>
	                                        	{ post_date }
	                                        </div>
										</div>
										<div className="uagb-content">
											<div className="uagb-timeline__heading-text">
												<RichText
													tagName={ headingTag }
													value={ time_heading }
													placeholder={ __( "Write a Heading" ) }
													className='uagb-timeline__heading'
													onChange={ ( value ) => {
														setAttributes( { "tm_content": "p" } )
													} }
													onMerge={ mergeBlocks }
													unstableOnSplit={
														insertBlocksAfter ?
															( before, after, ...blocks ) => {
																setAttributes( { content: before } )
																insertBlocksAfter( [
																	...blocks,
																	createBlock( "core/paragraph", { content: after } ),
																] )
															} :
															undefined
													}
													onRemove={ () => onReplace( [] ) }
												/>
											</div>
											<RichText
												tagName= "p"
												value={ time_desc }
												placeholder={ __( "Write a Description" ) }
												className='uagb-timeline-desc-content'
												onMerge={ mergeBlocks }
												unstableOnSplit={ this.splitBlock }
												onRemove={ () => onReplace( [] ) }
											/>
											<div className="uagb-timeline__arrow"></div>
										</div>
									</div>
								</div>
								</div>	
									{ display_inner_date && <div className = "uagb-timeline__date-new">
										{ displayPostDate && t_date &&
                                            <div className={ "uagb-timeline__date-new" }>
                                            	{ post_date }
                                            </div>
										}
									</div>
									}
									</div>
								</article>	
								</div>					
							</Fragment>
							
					)
		}

}
export default UAGBcontentTimelineChild