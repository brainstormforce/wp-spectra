/**
 * BLOCK: Forms - Edit
 */

import classnames from "classnames"
import { Fragment } from "react"
import styling from "./styling"
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
	IconButton,
	TextareaControl,
	CheckboxControl
} = wp.components

const { __ } = wp.i18n

const ALLOWED_BLOCKS = [ "uagb/forms-name", "uagb/forms-email", "uagb/forms-hidden", "uagb/forms-phone", "uagb/forms-textarea", "uagb/forms-url", "uagb/forms-select" ]

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
		$style.setAttribute( "id", "uagb-style-forms-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {

		var element = document.getElementById( "uagb-style-forms-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
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
			confirmationType,
			confirmationMessage,
			confirmationUrl,
			sendAfterSubmitEmail,
			afterSubmitFromEmail,
			afterSubmitToEmail,
			afterSubmitCcEmail,
			afterSubmitBccEmail,
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
						<Button
							key={ "left" }
							icon="editor-alignleft"
							label="Left"
							onClick={ () => setAttributes( { buttonAlign: "left" } ) }
							aria-pressed = { "left" === buttonAlign }
							isPrimary = { "left" === buttonAlign }
						/>
						<Button
							key={ "center" }
							icon="editor-aligncenter"
							label="Right"
							onClick={ () => setAttributes( { buttonAlign: "center" } ) }
							aria-pressed = { "center" === buttonAlign }
							isPrimary = { "center" === buttonAlign }
						/>
						<Button
							key={ "right" }
							icon="editor-alignright"
							label="Right"
							onClick={ () => setAttributes( { buttonAlign: "right" } ) }
							aria-pressed = { "right" === buttonAlign }
							isPrimary = { "right" === buttonAlign }
						/>
					</Fragment>
					<h2> { __( "Confirmation Type" ) }</h2>
					<ButtonGroup className="uagb-forms-button-group" aria-label={ __( "Confirmation Type" ) }>
						<Button 
							key={ "message" } 
							isSmall 
							isPrimary={ confirmationType === "message" } 
							aria-pressed={ confirmationType === "message" } 
							onClick={ () => setAttributes( { confirmationType: "message" } ) }
						>
							{ __( "Message" ) }
						</Button>

						<Button 
							key={ "url" } 
							isSmall 
							isPrimary={ confirmationType === "url" } 
							aria-pressed={ confirmationType === "url" } 
							onClick={ () => setAttributes( { confirmationType: "url" } ) }
						>
							{ __( "URL" ) }
						</Button>
					</ButtonGroup>
					{ 'message' === confirmationType && 
						<TextareaControl
							label="Message"
							help={ __( "Enter a message you want to display after form Submission" ) }
							value={ confirmationMessage }
							onChange={ ( value ) => setAttributes( { confirmationMessage: value } ) }
						/>
					}
					{ 'url' === confirmationType && 
						<TextControl
							label= { __( "Success Redirect URL" ) }
							help={ __( "Enter a URL you want to redirect your page to after form Submission" ) }
							value= { confirmationUrl }
							onChange={ value => setAttributes( { confirmationUrl: value } ) }
						/>
					}

				</PanelBody>
			);
		}
		const afterSubmitActions = () => {
			return (
				<PanelBody
					title={ __( "After Submit Actions" ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					<CheckboxControl
						label="Email"
						checked={ sendAfterSubmitEmail }
						onChange={ ( value ) => setAttributes( { sendAfterSubmitEmail: value } ) }
					/>
				</PanelBody>
			)
		}
		const emailSettings = () => {
			if ( true === sendAfterSubmitEmail ) {

				return (
					<PanelBody
					title={ __( "Email Settings" ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
					>
						<TextControl
							label= { __( "From" ) }
							placeholder = { __( "Email" ) }
							value= { afterSubmitFromEmail }
							onChange={ value => setAttributes( { afterSubmitFromEmail: value } ) }
						/>	
						<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
							tabs={ [
								{
									name: "to",
									title: "To",
									className: "uagb-desktop-tab uagb-responsive-tabs",
								},
								{
									name: "cc",
									title: "CC",
									className: "uagb-tablet-tab uagb-responsive-tabs",
								},
								{
									name: "bcc",
									title: "BCC",
									className: "uagb-mobile-tab uagb-responsive-tabs",
								},
							] }>
							{
								( tab ) => {
									let tabout

									if ( "to" === tab.name ) {
										tabout = (
											<TextControl
												label= { __( "To" ) }
												placeholder = { __( "Email" ) }
												value= { afterSubmitToEmail }
												onChange={ value => setAttributes( { afterSubmitToEmail: value } ) }
											/>
										)
									} else if ( "cc" === tab.name ) {
										tabout = (
											<TextControl
												label= { __( "CC" ) }
												placeholder = { __( "Email" ) }
												value= { afterSubmitCcEmail }
												onChange={ value => setAttributes( { afterSubmitCcEmail: value } ) }
											/>
										)
									} else {
										tabout = (
											<TextControl
												label= { __( "BCC" ) }
												placeholder = { __( "Email" ) }
												value= { afterSubmitBccEmail }
												onChange={ value => setAttributes( { afterSubmitBccEmail: value } ) }
											/>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
					</PanelBody>
				)

			}

			return '';
		}

		return (
			<Fragment>
				<InspectorControls>
					{ generalSettings() }
					{ afterSubmitActions() }
					{ emailSettings() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms__outer-wrap",
					`uagb-block-${ block_id }`,
				) }
				>
					<form className="uagb-forms-main-form" name={ `uagb-form-${ block_id }` }>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
						<div className="uagb-forms-form-hidden-data">
							<input type="hidden" name="uagb_forms_form_label" value={ formLabel }/>
							<input type="hidden" name="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
						</div>
						<div className="uagb-forms-main-submit-button-wrap">
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
						</div>
					</form>
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsEdit
