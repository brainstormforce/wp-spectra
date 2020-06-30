/**
 * BLOCK: Forms - Edit
 */

import classnames from "classnames"
import { Fragment } from "react"

const {
	Component,
} = wp.element

const {
	InnerBlocks,
	RichText,
	InspectorControls,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	TextControl,
	BaseControl,
	ToggleControl,
	Toolbar,
	Tooltip,
	TabPanel,
	ButtonGroup,
	Dashicon,
	IconButton
} = wp.components

const { __ } = wp.i18n

const ALLOWED_BLOCKS = [ "uagb/forms-name", "uagb/forms-email" ]

class UAGBFormsEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-" + attributes.block_id )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	onSubmitClick ( e ) {
		e.preventDefault();
	}

	render() {

        const { attributes, setAttributes } = this.props

        const {
			block_id,
			submitButtonText,
			formLabel,
			buttonAlign,
        } = attributes

		const generalSettings = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<TextControl
						label= { __( "Form Label" ) }
						value= { formLabel }
						onChange={ value => setAttributes( { formLabel: value } ) }
					/>
					<Fragment>
						<h2> { __( "Button Alignment" ) }</h2>
						<IconButton
							key={ "left" }
							icon="editor-alignleft"
							label="Left"
							onClick={ () => setAttributes( { buttonAlign: "left" } ) }
							aria-pressed = { "left" === buttonAlign }
							isPrimary = { "left" === buttonAlign }
						/>
						<IconButton
							key={ "center" }
							icon="editor-aligncenter"
							label="Right"
							onClick={ () => setAttributes( { buttonAlign: "center" } ) }
							aria-pressed = { "center" === buttonAlign }
							isPrimary = { "center" === buttonAlign }
						/>
						<IconButton
							key={ "right" }
							icon="editor-alignright"
							label="Right"
							onClick={ () => setAttributes( { buttonAlign: "right" } ) }
							aria-pressed = { "right" === buttonAlign }
							isPrimary = { "right" === buttonAlign }
						/>
					</Fragment>

				</PanelBody>
			);
		}
		return (
			<Fragment>
				<InspectorControls>
					{ generalSettings() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms__outer-wrap",
					`uagb-block-${ block_id }`,
				) }
				>
					<form className="uagb-forms-main-form">
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
						<div className="uagb-forms-form-hidden-data">
							<input type="hidden" name="uagb_forms_form_label" value={ formLabel }/>
							<input type="hidden" name="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
						</div>
						<button onClick={ this.onSubmitClick } className="uagb-forms-main-submit-button">
							<RichText
								tagName="div"
								placeholder={ __( "Submit" ) }
								value={ submitButtonText }
								onChange={ ( value ) => setAttributes( { submitButtonText: value } ) }
								className='uagb-forms-main-submit-button-text'
								multiline={ false }
								allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
							/>
						</button>
					</form>
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsEdit
