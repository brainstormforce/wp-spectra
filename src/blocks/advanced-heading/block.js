/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import styling from "./styling"

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
	ColorPalette,
	InspectorControls,
	RichText,
} = wp.editor

const {
	PanelBody,
	PanelColor,
	SelectControl,
	RangeControl,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBAdvancedHeading extends Component {

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
				separatorHeight,
				headSpace,
				separatorSpace,
				subHeadSpace,
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
					<PanelBody
						title={ __( "Typography" ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( "Tag" ) }
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
							max={ 200 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Sub-Heading Font Size" ) }
							value={ subHeadFontSize }
							onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
							min={ 10 }
							max={ 200 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
					</PanelBody>
					<PanelBody
						title={ __( "Colors" ) }
						initialOpen={ false }
					>
						<PanelColor
							title={ __( "Heading Color" ) }
							colorValue={ headingColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ headingColor }
								onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
								allowReset
							/>
						</PanelColor>
						<PanelColor
							title={ __( "Sub-Heading Color" ) }
							colorValue={ subHeadingColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ subHeadingColor }
								onChange={ ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ) }
								allowReset
							/>
						</PanelColor>
						<PanelColor
							title={ __( "Separator Color" ) }
							colorValue={ separatorColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ separatorColor }
								onChange={ ( colorValue ) => setAttributes( { separatorColor: colorValue } ) }
								allowReset
							/>
						</PanelColor>
					</PanelBody>
					<PanelBody
						title={ __( "Additional Options" ) }
						initialOpen={ false }
					>
						<RangeControl
							label={ __( "Separator Height" ) }
							value={ separatorHeight }
							onChange={ ( value ) => setAttributes( { separatorHeight: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Separator Width" ) }
							value={ separatorWidth }
							onChange={ ( value ) => setAttributes( { separatorWidth: value } ) }
							min={ 0 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Heading Spacing" ) }
							value={ headSpace }
							onChange={ ( value ) => setAttributes( { headSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Separator Spacing" ) }
							value={ separatorSpace }
							onChange={ ( value ) => setAttributes( { separatorSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Sub-Heading Spacing" ) }
							value={ subHeadSpace }
							onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className } id={ `uagb-adv-heading-${this.props.clientId}` }>
					<RichText
						tagName={ headingTag }
						placeholder={ __( "Write a Heading" ) }
						value={ headingTitle }
						className='uagb-heading-text'
						multiline={ false }
						onChange={ ( value ) => setAttributes( { headingTitle: value } ) }
						onMerge={ mergeBlocks }
						onSplit={
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
					<div className="uagb-separator-wrap" ><div className="uagb-separator"></div></div>
					<RichText
						tagName="p"
						placeholder={ __( "Write a Description" ) }
						value={ headingDesc }
						className='uagb-desc-text'
						onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
						onMerge={ mergeBlocks }
						onSplit={ this.splitBlock }
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

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( "UAGB - Advanced Heading" ), // Block title.
	description: __( "Add Advanced Heading block." ), // Block description.
	icon: "editor-textcolor", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "advanced heading" ),
		__( "uagb" ),
	],
	category: "formatting",

	attributes: {
		block_id: {
			type: "string"
		},
		headingTitle: {
			type: "string",
		},
		headingDesc: {
			type: "string",
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
			default: "h1"
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
		},
		separatorSpace: {
			type: "number",
		},
		subHeadSpace: {
			type: "number",
		},
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: UAGBAdvancedHeading,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {

		const {
			block_id,
			headingTitle,
			headingDesc,
			headingTag,
		} = props.attributes

		const CustomTag = `${headingTag}`

		return (
			<div className={ props.className } id={ `uagb-adv-heading-${block_id}` }>
				<CustomTag className='uagb-heading-text'>{ headingTitle }</CustomTag>
				<div className="uagb-separator-wrap"><div className="uagb-separator"></div></div>
				<p className="uagb-desc-text">{ headingDesc }</p>
			</div>
		)
	}
} )
