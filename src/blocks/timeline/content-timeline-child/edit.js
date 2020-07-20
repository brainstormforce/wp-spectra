/**
 * BLOCK: Content Timeline.
 */

import classnames from "classnames"
import map from "lodash/map"
import times from "lodash/times"
import UAGBIcon from "../../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../../components/typography/fontloader"

const { dateI18n, __experimentalGetSettings } = wp.date

const { Component, Fragment } = wp.element

const { __ } = wp.i18n

const { decodeEntities } = wp.htmlEntities

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	BlockAlignmentToolbar,
	PanelColorSettings,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	Placeholder,
	RangeControl,
	Spinner,
	TextControl,
	ToggleControl,
	Toolbar,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon,
} = wp.components

let svg_icons = Object.keys( UAGBIcon )

class UAGBcontentTimelineChild extends Component {

		constructor() {
			super( ...arguments )

			this.splitBlock = this.splitBlock.bind( this )

			this.getTimelineicon = this.getTimelineicon.bind(this)

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

			console.log(attributes)
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
		getTimelineicon(value) {
			this.props.setAttributes( { icon: value } )
		}

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

		render() {

			// Setup the attributes.
			const {
				isSelected,
				className,
				setAttributes,
				insertBlocksAfter,
				mergeBlocks,
				onReplace,
				attributes: {
					tm_content,
					headingAlign,
					separatorHeight,
					headSpace,
					separatorSpace,
					headingColor,
					subHeadingColor,
					backgroundColor,
					separatorColor,
					separatorFillColor,
					separatorBg,
					separatorBorder,
					borderFocus,
					headingTag,
					headFontSizeType,
					headFontSize,
					headFontSizeTablet,
					headFontSizeMobile,
					headFontFamily,
					headFontWeight,
					headFontSubset,
					headLineHeightType,
					headLineHeight,
					headLineHeightTablet,
					headLineHeightMobile,
					headLoadGoogleFonts,
					timelineItem,
					timelinAlignment,
					arrowlinAlignment,
					subHeadFontSizeType,
					subHeadFontSize,
					subHeadFontSizeTablet,
					subHeadFontSizeMobile,
					subHeadFontFamily,
					subHeadFontWeight,
					subHeadFontSubset,
					subHeadLineHeightType,
					subHeadLineHeight,
					subHeadLineHeightTablet,
					subHeadLineHeightMobile,
					subHeadLoadGoogleFonts,
					verticalSpace,
					horizontalSpace,
					separatorwidth,
					borderwidth,
					connectorBgsize,
					dateBottomspace,
					align,
					icon,
					iconColor,
					dateColor,
					dateFontsizeType,
					dateFontsize,
					dateFontsizeTablet,
					dateFontsizeMobile,
					dateFontFamily,
					dateFontWeight,
					dateFontSubset,
					dateLineHeightType,
					dateLineHeight,
					dateLineHeightTablet,
					dateLineHeightMobile,
					dateLoadGoogleFonts,
					iconSize,
					borderRadius,
					bgPadding,
					block_id,
					iconFocus,
					iconBgFocus,
					t_date,
					displayPostDate,
					stack,
					dateFormat
				},
			} = this.props

			// Parameters for FontIconPicker
			const icon_props = {
				icons: svg_icons,
				value: icon,
				onChange: this.getTimelineicon,
				isMulti: false,
				renderFunc: renderSVG,
				noSelectedPlaceholder: __( "Select Icon" )
			}

			const iconControls = (
						<PanelBody	title={ __( "Connector Color Settings" ) }	initialOpen={ true }>
							<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
								activeClass="active-tab"
								tabs={ [
									{
										name: "normal",
										title: __( "Normal" ),
										className: "uagb-normal-tab",
									},
									{
										name: "focus",
										title: __( "Focus" ),
										className: "uagb-focus-tab",
									},
								] }>
								{
									( tabName ) => {
										let tabout
										if( "focus" === tabName.name ) {
											tabout = iconFocusSettings
										}else {
											tabout = iconColorSettings
										}
										return <div>{ tabout }</div>
									}
								}
							</TabPanel>
						</PanelBody>
					)

					const iconColorSettings = (
						<PanelColorSettings title={ __( "Color Settings" ) } initialOpen={ true }
							colorSettings={ [
								{
									value: separatorColor,
									onChange: ( colorValue ) => setAttributes( { separatorColor: colorValue } ),
									label: __( "Line Color" ),
								},
								{
									value: iconColor,
									onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
									label: __( "Icon Color" ),
								},
								{
									value: separatorBg,
									onChange: ( colorValue ) => setAttributes( { separatorBg: colorValue } ),
									label: __( "Background Color" ),
								},
								{
									value: separatorBorder,
									onChange: ( colorValue ) => setAttributes( { separatorBorder: colorValue } ),
									label: __( "Border Color" ),
								},
							] }
						>
						</PanelColorSettings>
					)


			const content_control = (
				<InspectorControls>
				<PanelBody title={ __( "Timeline Item" ) } initialOpen={ false } >
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
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Heading" ) }</h2>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { this.props.attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: headLoadGoogleFonts, label: 'headLoadGoogleFonts' } }
							fontFamily = { { value: headFontFamily, label: 'headFontFamily' } }
							fontWeight = { { value: headFontWeight, label: 'headFontWeight' } }
							fontSubset = { { value: headFontSubset, label: 'headFontSubset' } }
							fontSizeType = { { value: headFontSizeType, label: 'headFontSizeType' } }
							fontSize = { { value: headFontSize, label: 'headFontSize' } }
							fontSizeMobile = { { value: headFontSizeMobile, label: 'headFontSizeMobile' } }
							fontSizeTablet= { { value: headFontSizeTablet, label: 'headFontSizeTablet' } }
							lineHeightType = { { value: headLineHeightType, label: 'headLineHeightType' } }
							lineHeight = { { value: headLineHeight, label: 'headLineHeight' } }
							lineHeightMobile = { { value: headLineHeightMobile, label: 'headLineHeightMobile' } }
							lineHeightTablet= { { value: headLineHeightTablet, label: 'headLineHeightTablet' } }
						/>

						<hr className="uagb-editor__separator" />
						<h2>{ __( "Content" ) }</h2>
						<TypographyControl
							label={ __( "Content Tag" ) }
							attributes = { this.props.attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: subHeadLoadGoogleFonts, label: 'subHeadLoadGoogleFonts' } }
							fontFamily = { { value: subHeadFontFamily, label: 'subHeadFontFamily' } }
							fontWeight = { { value: subHeadFontWeight, label: 'subHeadFontWeight' } }
							fontSubset = { { value: subHeadFontSubset, label: 'subHeadFontSubset' } }
							fontSizeType = { { value: subHeadFontSizeType, label: 'subHeadFontSizeType' } }
							fontSize = { { value: subHeadFontSize, label: 'subHeadFontSize' } }
							fontSizeMobile = { { value: subHeadFontSizeMobile, label: 'subHeadFontSizeMobile' } }
							fontSizeTablet= { { value: subHeadFontSizeTablet, label: 'subHeadFontSizeTablet' } }
							lineHeightType = { { value: subHeadLineHeightType, label: 'subHeadLineHeightType' } }
							lineHeight = { { value: subHeadLineHeight, label: 'subHeadLineHeight' } }
							lineHeightMobile = { { value: subHeadLineHeightMobile, label: 'subHeadLineHeightMobile' } }
							lineHeightTablet= { { value: subHeadLineHeightTablet, label: 'subHeadLineHeightTablet' } }
						/>
					</PanelBody>
					<PanelBody title={ __( "Connector" ) } initialOpen={ false } >
						<FontIconPicker {...icon_props} />
						<RangeControl
							label={ __( "Icon Size" ) }
							value={ iconSize }
							onChange={ ( value ) => setAttributes( { iconSize: value } ) }
							min={ 0 }
							max={ 30 }
							allowReset
						/>
						<RangeControl
							label={ __( "Icon Background Size" ) }
							value={ connectorBgsize }
							onChange={ ( value ) => setAttributes( { connectorBgsize: value } ) }
							min={ 25 }
							max={ 90 }
							allowReset
						/>
						<RangeControl
							label={ __( "Border Width" ) }
							value={ borderwidth }
							onChange={ ( value ) => setAttributes( { borderwidth: value } ) }
							min={ 1 }
							max={ 10 }
							allowReset
						/>
						<RangeControl
							label={ __( "Connector Width" ) }
							value={ separatorwidth }
							onChange={ ( value ) => setAttributes( { separatorwidth: value } ) }
							min={ 1 }
							max={ 10 }
							allowReset
						/>
						{ iconControls  }
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


			var content_align_class = AlignClass( this.props.attributes, 0 ) // Get classname for layout alignment
			var day_align_class     = DayAlignClass( this.props.attributes, 0 ) // Get classname for day alignment.
			let data_copy           = [ ...tm_content ]
			var display_inner_date  = false
			
			console.log("child edit.js")
			console.log(this.props.attributes)

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
									<div className = {day_align_class} >
										<div className="uagb-timeline__events-new">
											<div className="uagb-timeline__events-inner-new">
												<div className="uagb-timeline__date-hide uagb-timeline__date-inner">
													{ displayPostDate && t_date[index].title &&
                                                        <div className={ "uagb-timeline__inner-date-new" }>
                                                        	{ post_date }
                                                        </div>
													}
												</div>

												<div className="uagb-content">

													<div className="uagb-timeline__heading-text">
														<RichText
															tagName={ headingTag }
															value={ post.time_heading }
															placeholder={ __( "Write a Heading" ) }
															className='uagb-timeline__heading'
															onChange={ ( value ) => {
																var p = { "time_heading" : value,"time_desc":data_copy[index]["time_desc"] }
																data_copy[index] = p
																setAttributes( { "tm_content": data_copy } )
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
														value={ post.time_desc }
														placeholder={ __( "Write a Description" ) }
														className='uagb-timeline-desc-content'
														onChange={ ( value ) => {
															var p = { "time_heading" : data_copy[index]["time_heading"],"time_desc":value }
															data_copy[index] = p
															setAttributes( { "tm_content": data_copy } )
														} }
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
										{ displayPostDate && t_date[index].title &&
                                            <div className={ "uagb-timeline__date-new" }>
                                            	{ post_date }
                                            </div>
										}
									</div>
									}
								</div>
							</Fragment>
						)

		}

}
export default UAGBcontentTimelineChild