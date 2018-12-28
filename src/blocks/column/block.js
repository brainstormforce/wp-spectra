/**
 * BLOCK: UAGB Column
 *
 * Registering a basic block with Gutenberg.
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

import "./style.scss"
import "./editor.scss"

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

const {
	InnerBlocks,
	ColorPalette,
	InspectorControls,
} = wp.editor

const {
	TabPanel,
	Dashicon,
	PanelBody,
	RangeControl,
	SelectControl
} = wp.components

const {
	Component,
	Fragment,
} = wp.element

export default class UAGBColumnEdit extends Component {

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-column-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes: { topPadding, bottomPadding, leftPadding, rightPadding, topMargin, bottomMargin, colWidth, contentPosition }, setAttributes, className, isSelected } = this.props

		const inspector_controls = (
			<Fragment>
				<PanelBody title={ __( "Spacing" ) }>
					<RangeControl
						label={ __( "Top Padding" ) }
						value={ topPadding }
						onChange={ ( value ) => {
							setAttributes( {
								topPadding: value,
							} )
						} }
						min={ 0 }
						max={ 500 }
					/>
					<RangeControl
						label={ __( "Right Padding" ) }
						value={ rightPadding }
						onChange={ ( value ) => {
							setAttributes( {
								rightPadding: value,
							} )
						} }
						min={ 0 }
						max={ 500 }
					/>
					<RangeControl
						label={ __( "Bottom Padding" ) }
						value={ bottomPadding }
						onChange={ ( value ) => {
							setAttributes( {
								bottomPadding: value,
							} )
						} }
						min={ 0 }
						max={ 500 }
					/>
					<RangeControl
						label={ __( "Left Padding" ) }
						value={ leftPadding }
						onChange={ ( value ) => {
							setAttributes( {
								leftPadding: value,
							} )
						} }
						min={ 0 }
						max={ 500 }
					/>
					<RangeControl
						label={ __( "Top Margin" ) }
						value={ topMargin }
						onChange={ ( value ) => {
							setAttributes( {
								topMargin: value,
							} )
						} }
						min={ -200 }
						max={ 200 }
					/>
					<RangeControl
						label={ __( "Bottom Margin" ) }
						value={ bottomMargin }
						onChange={ ( value ) => {
							setAttributes( {
								bottomMargin: value,
							} )
						} }
						min={ -200 }
						max={ 200 }
					/>
				</PanelBody>
				<PanelBody title={ __( "Layout" ) } initialOpen={ false }>
					<RangeControl
						label={ __( "Content Width (%)" ) }
						value={ colWidth }
						onChange={ ( value ) => {
							setAttributes( {
								colWidth: value,
							} )
						} }
						min={ 0 }
						max={ 100 }
					/>
					<SelectControl
						label={ __( "Content Position" ) }
						value={ contentPosition }
						onChange={ ( value ) => setAttributes( { contentPosition: value } ) }
						options={ [
							{ value: "default", label: __( "Default" ) },
							{ value: "top", label: __( "Top" ) },
							{ value: "middle", label: __( "Middle" ) },
							{ value: "bottom", label: __( "Bottom" ) }
						] }
					/>
				</PanelBody>
			</Fragment>
		)

		let active = ( isSelected ) ? "active" : "not-active"

		return (
			<Fragment>
				<InspectorControls>
					{ inspector_controls }
				</InspectorControls>
				<div
					className={ classnames(
						className,
						"uagb-column__wrap",
						"uagb-column__background-",
						`uagb-column__edit-${ active }`,
						`uagb-column__content-position-${ contentPosition }`,
					) }
					id={ `uagb-section-${this.props.clientId}` }
				>
					<div className="uagb-column__overlay"></div>
					<div className="uagb-column__inner-wrap">
						<InnerBlocks templateLock={ false } />
					</div>
				</div>
			</Fragment>
		)
	}
}

/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/column", {
	title: __( "Column" ),
	icon: UAGB_Block_Icons.section,
	category: uagb_blocks_info.category,
	parent: [ "uagb/section" ],
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},
	attributes: {
		block_id: {
			type: "string",
		},
		topPadding: {
			type: "number",
			default: "",
		},
		bottomPadding: {
			type: "number",
			default: "",
		},
		leftPadding: {
			type: "number",
			default: "",
		},
		rightPadding: {
			type: "number",
			default: "",
		},
		topMargin: {
			type: "number",
			default: "",
		},
		bottomMargin: {
			type: "number",
			default: "",
		},
		colWidth: {
			type: "number",
			default: "",
		},
		contentPosition: {
			type: "string",
			default: "default"
		}
	},

	edit: UAGBColumnEdit,

	save( { attributes, className } ) {
		const { block_id, contentPosition } = attributes
		return (
			<div
				className={ classnames(
					className,
					"uagb-column__wrap",
					"uagb-column__background-",
					`uagb-column__content-position-${ contentPosition }`,
				) }
				id={ `uagb-column-${block_id}` }
			>
				<div className="uagb-column__overlay"></div>
				<div className="uagb-column__inner-wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		)
	},
} )
