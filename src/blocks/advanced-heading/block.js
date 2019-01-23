/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import "./style.scss"

/* eslint-disable */
// Import __() from wp.i18n
const { __ } = wp.i18n
/* eslint-enable  */

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

export default class UAGBAdvancedHeading extends Component {

	constructor() {
		super( ...arguments )

		this.splitBlock = this.splitBlock.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-adv-heading-style-" + this.props.clientId )
		document.head.appendChild( $style )
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

	render() {

		// Setup the attributes
		const {
			isSelected,
			className,
			setAttributes,
			insertBlocksAfter,
			mergeBlocks,
			onReplace,
			attributes: {
				headingTitle,
				headingDesc,
				headingAlign,
				headingColor,
				subHeadingColor,
				separatorColor,
				headingTag,
				headFontSize,
				subHeadFontSize,
				separatorWidth,
				seperatorStyle,
				separatorHeight,
				headSpace,
				separatorSpace
			},
		} = this.props

		var element = document.getElementById( "uagb-adv-heading-style-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}


		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "Advanced Heading" ) }>
						<h2>{ __( "Heading" ) }</h2>
						<SelectControl
							label={ __( "Heading Tag" ) }
							value={ headingTag }
							onChange={ ( value ) => setAttributes( { headingTag: value } ) }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
						/>
						<RangeControl
							label={ __( "Heading Font Size" ) }
							value={ headFontSize }
							onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={30}
						/>
						<p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						<ColorPalette
							value={ headingColor }
							onChange={ ( value ) => setAttributes( { headingColor: value } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Sub-Heading" ) }</h2>
						<RangeControl
							label={ __( "Sub-Heading Font Size" ) }
							value={ subHeadFontSize }
							onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
							min={ 10 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={10}
						/>
						<p className="uagb-setting-label">{ __( "Sub Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
						<ColorPalette
							value={ subHeadingColor }
							onChange={ ( value ) => setAttributes( { subHeadingColor: value } ) }
							allowReset
						/>
					</PanelBody>
					<PanelBody
						title={ __( "Separator" ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( "Style" ) }
							value={ seperatorStyle }
							onChange={ ( value ) => setAttributes( { seperatorStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "dotted", label: __( "Dotted" ) },
							] }
						/>
						{ seperatorStyle !== "none" && <Fragment>
							<RangeControl
								label={ __( "Thickness (px)" ) }
								value={ separatorHeight }
								onChange={ ( value ) => setAttributes( { separatorHeight: value } ) }
								min={ 0 }
								max={ 20 }
								beforeIcon=""
								allowReset
								initialPosition={3}
							/>
							<RangeControl
								label={ __( "Width (%)" ) }
								value={ separatorWidth }
								onChange={ ( value ) => setAttributes( { separatorWidth: value } ) }
								min={ 0 }
								max={ 100 }
								beforeIcon=""
								allowReset
								initialPosition={20}
							/>
							{ seperatorStyle !== "none" && <Fragment>
								<p className="uagb-setting-label">{ __( "Seperator Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: separatorColor }} ></span></span></p>
								<ColorPalette
									value={ separatorColor }
									onChange={ ( colorValue ) => setAttributes( { separatorColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
							}
						</Fragment>
						}
					</PanelBody>
					<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }
					>
						<RangeControl
							label={ __( "Heading Bottom Spacing" ) }
							value={ headSpace }
							onChange={ ( value ) => setAttributes( { headSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
							initialPosition={0}
						/>
						{ seperatorStyle !== "none" && <RangeControl
							label={ __( "Separator Bottom Spacing" ) }
							value={ separatorSpace }
							onChange={ ( value ) => setAttributes( { separatorSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
							initialPosition={0}
						/>
						}
					</PanelBody>
				</InspectorControls>
				<div className={ className } id={ `uagb-adv-heading-${this.props.clientId}` }>
					<RichText
						tagName={ headingTag }
						placeholder={ __( "Write a Heading" ) }
						value={ headingTitle }
						className='uagb-heading-text'
						multiline={ false }
						onChange={ ( value ) => {
							setAttributes( { headingTitle: value } ) }
						}
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
					{ seperatorStyle !== "none" && <div className="uagb-separator-wrap" ><div className="uagb-separator"></div></div> }
					<RichText
						tagName="p"
						placeholder={ __( "Write a Description" ) }
						value={ headingDesc }
						className='uagb-desc-text'
						onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				</div>
			</Fragment>
		)
	}
}

/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/advanced-heading", {

	title: uagb_blocks_info.blocks["uagb/advanced-heading"]["title"],
	description: uagb_blocks_info.blocks["uagb/advanced-heading"]["description"],
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( "advanced heading" ),
		__( "uag" ),
		__( "heading" ),
	],
	category: uagb_blocks_info.category,
	attributes: {
		block_id: {
			type: "string"
		},
		headingTitle: {
			source: "html",
			selector: "h1,h2,h3,h4,h5,h6",
		},
		headingDesc: {
			source: "html",
			selector: "p",
			default: "",
		},
		headingAlign: {
			type: "string",
			default: "center",
		},
		headingColor: {
			type: "string",
		},
		subHeadingColor: {
			type: "string",
		},
		separatorColor: {
			type: "string",
		},
		headingTag: {
			type: "string",
			default: "h2"
		},
		seperatorStyle: {
			type: "string",
			default: "solid",
		},
		separatorHeight: {
			type: "number"
		},
		separatorWidth: {
			type: "number"
		},
		headFontSize: {
			type: "number",
		},
		subHeadFontSize: {
			type: "number",
		},
		headSpace: {
			type: "number",
			default: 15
		},
		separatorSpace: {
			type: "number",
			default: 15
		},
	},
	transforms: {
		from: [
			{
				type: "block",
				blocks: [ "core/paragraph" ],
				transform: ( { content } ) => {
					console.log(content)
					return createBlock( "uagb/advanced-heading", {
						headingDesc: content,
					} )
				},
			},
			{
				type: "block",
				blocks: [ "core/heading" ],
				transform: ( { content } ) => {
					console.log(content)
					return createBlock( "uagb/advanced-heading", {
						headingTitle: content,
						headingTag: "h3",
					} )
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: [ "core/paragraph" ],
				transform: ( { content } ) => {
					console.log(content)
					return createBlock( "core/paragraph", {
						content,
					} )
				},
			},
			{
				type: "block",
				blocks: [ "core/heading" ],
				transform: ( { content } ) => {
					console.log(content)
					return createBlock( "core/heading", {
						content: content,
					} )
				},
			},
		],
	},
	edit: UAGBAdvancedHeading,
	save: function( props ) {

		const {
			block_id,
			headingTitle,
			headingDesc,
			headingTag,
			seperatorStyle
		} = props.attributes

		var seprator_output =  ""
		if( seperatorStyle !== "none" ){
			seprator_output = <div className="uagb-separator-wrap" ><div className="uagb-separator"></div></div>
		}
		return (
			<div className={ props.className } id={ `uagb-adv-heading-${block_id}` }>
				<RichText.Content
					tagName={ headingTag }
					value={ headingTitle }
					className='uagb-heading-text'
				/>
				{seprator_output}
				<RichText.Content
					tagName="p"
					value={ headingDesc }
					className='uagb-desc-text'
				/>
			</div>
		)
	}
} )
