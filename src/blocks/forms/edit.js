/**
 * BLOCK: Forms - Edit
 */

import classnames from "classnames"
import { Fragment } from "react"
import styling from "./styling"
import map from 'lodash/map';
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const {
	withSelect,
	useDispatch,
	withDispatch
} = wp.data

const {
	compose,
	createHigherOrderComponent,
} = wp.compose

const {
	Component,
} = wp.element

const {
	createBlock
} = wp.blocks

const {
	InnerBlocks,
	RichText,
	InspectorControls,
	ColorPalette,
	__experimentalBlockVariationPicker
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
	TextareaControl,
	CheckboxControl,
	ExternalLink,
	withNotices
} = wp.components

const { __ } = wp.i18n

const ALLOWED_BLOCKS = [
	"uagb/forms-name",
	"uagb/forms-email",
	"uagb/forms-hidden",
	"uagb/forms-phone",
	"uagb/forms-textarea",
	"uagb/forms-url",
	"uagb/forms-select",
	"uagb/forms-radio",
	"uagb/forms-checkbox",
	"uagb/forms-toggle",
	"uagb/forms-date",
	"uagb/forms-accept",
]

class UAGBFormsEdit extends Component {

	constructor() {
		super( ...arguments )
		this.blockVariationPickerOnSelect = this.blockVariationPickerOnSelect.bind( this )

	}

	

	onSubmitClick ( e ) {
		e.preventDefault();
	}

	blockVariationPickerOnSelect ( nextVariation = this.props.defaultVariation ) {
			
		if ( nextVariation.attributes ) {
			this.props.setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
			this.props.replaceInnerBlocks(
				this.props.clientId,
				this.createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
			);
		}
	}

	createBlocksFromInnerBlocksTemplate( innerBlocksTemplate ) {
		return map( innerBlocksTemplate, ( [ name, attributes, innerBlocks = [] ] ) => createBlock( name, attributes, this.createBlocksFromInnerBlocksTemplate( innerBlocks ) ) );
	}

	render() {

        const { attributes, setAttributes,variations,hasInnerBlocks, } = this.props

        const {
			block_id,
			submitButtonText,
			formLabel,
			buttonAlign,
			buttonSize,
			confirmationType,
			confirmationMessage,
			failedMessage,
			confirmationUrl,
			sendAfterSubmitEmail,			
			afterSubmitToEmail,
			afterSubmitCcEmail,
			afterSubmitBccEmail,
			afterSubmitEmailSubject,
			submitColor,
			submitColorHover,
			submitBgColor,
			submitBgColorHover,
			submitborderStyle,
			submitborderWidth,
			submitborderRadius,
			submitborderColor,
			submitborderHoverColor,
			vPaddingSubmit,
			hPaddingSubmit,
			submitTextloadGoogleFonts,
			submitTextFontFamily,
			submitTextFontWeight,
			submitTextFontSubset,
			submitTextFontSize,
			submitTextFontSizeType,
			submitTextFontSizeTablet,
			submitTextFontSizeMobile,
			submitTextLineHeightType,
			submitTextLineHeight,
			submitTextLineHeightTablet,
			submitTextLineHeightMobile,
			labelloadGoogleFonts,
			labelFontFamily,
			labelFontWeight,
			labelFontSubset,
			labelFontSize,
			labelFontSizeType,
			labelFontSizeTablet,
			labelFontSizeMobile,
			labelLineHeightType,
			labelLineHeight,
			labelLineHeightTablet,
			labelLineHeightMobile,
			inputloadGoogleFonts,
			inputFontFamily,
			inputFontWeight,
			inputFontSubset,
			inputFontSize,
			inputFontSizeType,
			inputFontSizeTablet,
			inputFontSizeMobile,
			inputLineHeightType,
			inputLineHeight,
			inputLineHeightTablet,
			inputLineHeightMobile,
			toggleSize,
			togglewidthSize,
			toggleheightSize,
			labelColor,
			inputColor,
			bgColor,
			inputplaceholderColor,
			inputactiveColor, 
			inputborderStyle,
			inputborderWidth,
			inputborderRadius,
			inputborderColor,
			inputborderHoverColor,
			vPaddingField,
			hPaddingField,
			fieldGap,
			formStyle,
			overallAlignment,
			reCaptchaEnable,
			reCaptchaType,			
			reCaptchaSecretKeyV2,
			reCaptchaSiteKeyV2,
			reCaptchaSecretKeyV3,
			reCaptchaSiteKeyV3,
			hidereCaptchaBatch,
			successMessageTextColor,
			successMessageBGColor,
			successMessageBorderColor,
			successMessageBorderStyle,
			successMessageBorderWidth,
			failedMessageTextColor,
			failedMessageBorderColor,
			failedMessageBorderStyle,
			failedMessageBorderWidth,
			failedMessageBGColor,
        } = attributes


		let loadsubmittextGoogleFonts;

		if( submitTextloadGoogleFonts == true ) {
			
			const qconfig = {
				google: {
					families: [ submitTextFontFamily + ( submitTextFontWeight ? ':' + submitTextFontWeight : '' ) ],
				},
			};

			loadsubmittextGoogleFonts = (
				<WebfontLoader config={ qconfig }>
				</WebfontLoader>
			)
		}
		
		let loadlabelGoogleFonts;

		if( labelloadGoogleFonts == true ) {
			
			const qconfig = {
				google: {
					families: [ labelFontFamily + ( labelFontWeight ? ':' + labelFontWeight : '' ) ],
				},
			};

			loadlabelGoogleFonts = (
				<WebfontLoader config={ qconfig }>
				</WebfontLoader>
			)
		}
		
		let loadinputGoogleFonts;

		if( inputloadGoogleFonts == true ) {
			
			const qconfig = {
				google: {
					families: [ inputFontFamily + ( inputFontWeight ? ':' + inputFontWeight : '' ) ],
				},
			};

			loadinputGoogleFonts = (
				<WebfontLoader config={ qconfig }>
				</WebfontLoader>
			)
        }
		

		const generalSettings = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<TextControl
						label= { __( "Hidden Field Label" ) }
						value= { formLabel }
						onChange={ value => setAttributes( { formLabel: value } ) }
					/>
					<SelectControl
						label={ __( "Style" ) }
						value={ formStyle }
						onChange={ ( value ) => setAttributes( { formStyle: value } ) }
						options={ [
							{ value: "boxed", label: __( "Boxed" ) },
							{ value: "underlined", label: __( "Underlined" ) },							
						] }
					/>
					<h2> { __( "Overall Alignment" ) }</h2>
					<Button
						key={ "left" }
						icon="editor-alignleft"
						label="Left"
						onClick={ () => setAttributes( { overallAlignment: "left" } ) }
						aria-pressed = { "left" === overallAlignment }
						isPrimary = { "left" === overallAlignment }
					/>
					<Button
						key={ "center" }
						icon="editor-aligncenter"
						label="Right"
						onClick={ () => setAttributes( { overallAlignment: "center" } ) }
						aria-pressed = { "center" === overallAlignment }
						isPrimary = { "center" === overallAlignment }
					/>
					<Button
						key={ "right" }
						icon="editor-alignright"
						label="Right"
						onClick={ () => setAttributes( { overallAlignment: "right" } ) }
						aria-pressed = { "right" === overallAlignment }
						isPrimary = { "right" === overallAlignment }
					/>
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
						<Fragment>
							<TextareaControl
								label="Success Message"
								help={ __( "Enter a message you want to display after successfull form Submission" ) }
								value={ confirmationMessage }
								onChange={ ( value ) => setAttributes( { confirmationMessage: value } ) }
							/>
							<PanelBody
								title={ __( "Success Message Design" ) }
								initialOpen={ false }
								className="uagb__url-panel-body"
							>
								<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ Color: successMessageTextColor }} ></span></span></p>
								<ColorPalette
									value={ successMessageTextColor }
									onChange={ ( colorValue ) => setAttributes( { successMessageTextColor: colorValue } ) }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: successMessageBGColor }} ></span></span></p>
								<ColorPalette
									value={ successMessageBGColor }
									onChange={ ( colorValue ) => setAttributes( { successMessageBGColor: colorValue } ) }
									allowReset
								/>
								<SelectControl
									label={ __( "Border Style" ) }
									value={ successMessageBorderStyle }
									onChange={ ( value ) => setAttributes( { successMessageBorderStyle: value } ) }
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
								<RangeControl
									label={ __( "Border Width" ) }
									value={ successMessageBorderWidth }
									onChange={ ( value ) => setAttributes( { successMessageBorderWidth: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: successMessageBorderColor }} ></span></span></p>
								<ColorPalette
									value={ successMessageBorderColor }
									onChange={ ( colorValue ) => setAttributes( { successMessageBorderColor: colorValue } ) }
									allowReset
								/>

							</PanelBody>
							<TextareaControl
								label="Failed Message"
								help={ __( "Enter a message you want to display after unsuccessfull form Submission" ) }
								value={ failedMessage }
								onChange={ ( value ) => setAttributes( { failedMessage: value } ) }
							/>
							<PanelBody
								title={ __( "Failed Message Design" ) }
								initialOpen={ false }
								className="uagb__url-panel-body"
							>
								<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: failedMessageTextColor }} ></span></span></p>
								<ColorPalette
									value={ failedMessageTextColor }
									onChange={ ( colorValue ) => setAttributes( { failedMessageTextColor: colorValue } ) }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: failedMessageBGColor }} ></span></span></p>
								<ColorPalette
									value={ failedMessageBGColor }
									onChange={ ( colorValue ) => setAttributes( { failedMessageBGColor: colorValue } ) }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: failedMessageBorderColor }} ></span></span></p>
								<ColorPalette
									value={ failedMessageBorderColor }
									onChange={ ( colorValue ) => setAttributes( { failedMessageBorderColor: colorValue } ) }
									allowReset
								/>
								<SelectControl
									label={ __( "Border Style" ) }
									value={ failedMessageBorderStyle }
									onChange={ ( value ) => setAttributes( { failedMessageBorderStyle: value } ) }
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
								<RangeControl
									label={ __( "Border Width" ) }
									value={ failedMessageBorderWidth }
									onChange={ ( value ) => setAttributes( { failedMessageBorderWidth: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
							</PanelBody>
						</Fragment>
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
		

		const submitButtonSettings = () => {
			return (
				<PanelBody
					title={ __( "Submit Button" ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					<Fragment>
						<SelectControl
							label={ __( "Button Size" ) }
							value={ buttonSize }
							onChange={ ( value ) => setAttributes( { buttonSize: value } ) }
							options={ [
								{ value: "small", label: __( "Small" ) },
								{ value: "medium", label: __( "Medium" ) },
								{ value: "large", label: __( "Large" ) },
								{ value: "extralarge", label: __( "Extra Large" ) },
								{ value: "full", label: __( "Full" ) },
							] }
						/>
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
						<h2>{ __( "Button Padding" ) }</h2>
						<RangeControl
							label={ UAGB_Block_Icons.vertical_spacing }
							className={ "uagb-padding-control submit-btn-control" }
							value={ vPaddingSubmit }
							onChange={ ( value ) => setAttributes( { vPaddingSubmit: value } ) }
							min={ 0 }
							max={ 100 }
						/>
						<RangeControl
							label={ UAGB_Block_Icons.horizontal_spacing }
							className={ "uagb-padding-control submit-btn-control" }
							value={ hPaddingSubmit }
							onChange={ ( value ) => setAttributes( { hPaddingSubmit: value } ) }
							min={ 0 }
							max={ 100 }
						/>
					</Fragment>
					<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
					activeClass="active-tab"
					tabs={ [
						{
							name: "normal",
							title: __( "Normal" ),
							className: "uagb-normal-tab",
						},
						{
							name: "hover",
							title: __( "Hover" ),
							className: "uagb-focus-tab",
						},
					] }>
					{
						( tabName ) => {
							let tabout_submitColor
							if( "normal" === tabName.name ) {
								tabout_submitColor = <Fragment>
									<p className="uagb-setting-label">{ __( "Submit Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: submitColor }} ></span></span></p>
									<ColorPalette
										value={ submitColor }
										onChange={ ( colorValue ) => setAttributes( { submitColor: colorValue } ) }
										allowReset
									/>
									<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: submitBgColor }} ></span></span></p>
									<ColorPalette
										value={ submitBgColor }
										onChange={ ( colorValue ) => setAttributes( { submitBgColor: colorValue } ) }
										allowReset
									/>
								</Fragment>
							}else {
								tabout_submitColor = <Fragment>
									<p className="uagb-setting-label">{ __( "Submit Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: submitColorHover }} ></span></span></p>
									<ColorPalette
										value={ submitColorHover }
										onChange={ ( colorValue ) => setAttributes( { submitColorHover: colorValue } ) }
										allowReset
									/>
									<p className="uagb-setting-label">{ __( "Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: submitBgColorHover }} ></span></span></p>
									<ColorPalette
										value={ submitBgColorHover }
										onChange={ ( colorValue ) => setAttributes( { submitBgColorHover: colorValue } ) }
										allowReset
									/>
								</Fragment>
							}
							return <div>{ tabout_submitColor }</div>
						}
					}
					</TabPanel>
					<SelectControl
							label={ __( "Border Style" ) }
							value={ submitborderStyle }
							onChange={ ( value ) => setAttributes( { submitborderStyle: value } ) }
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
						{ "none" != submitborderStyle && (
							<Fragment>
								<RangeControl
									label={ __( "Border Width" ) }
									value={ submitborderWidth }
									onChange={ ( value ) => setAttributes( { submitborderWidth: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								<RangeControl
									label={ __( "Border Radius" ) }
									value={ submitborderRadius }
									onChange={ ( value ) => setAttributes( { submitborderRadius: value } ) }
									min={ 0 }
									max={ 100 }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: submitborderColor }} ></span></span></p>
								<ColorPalette
									value={ submitborderColor }
									onChange={ ( colorValue ) => setAttributes( { submitborderColor: colorValue } ) }
									allowReset
								/>
								<p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: submitborderHoverColor }} ></span></span></p>
								<ColorPalette
									value={ submitborderHoverColor }
									onChange={ ( colorValue ) => setAttributes( { submitborderHoverColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
						) }
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: submitTextloadGoogleFonts, label: "submitTextloadGoogleFonts" } }
							fontFamily = { { value: submitTextFontFamily, label: "submitTextFontFamily" } }
							fontWeight = { { value: submitTextFontWeight, label: "submitTextFontWeight" } }
							fontSubset = { { value: submitTextFontSubset, label: "submitTextFontSubset" } }
							fontSizeType = { { value: submitTextFontSizeType, label: "submitTextFontSizeType" } }
							fontSize = { { value: submitTextFontSize, label: "submitTextFontSize" } }
							fontSizeMobile = { { value: submitTextFontSizeMobile, label: "submitTextFontSizeMobile" } }
							fontSizeTablet= { { value: submitTextFontSizeTablet, label: "submitTextFontSizeTablet" } }
							lineHeightType = { { value: submitTextLineHeightType, label: "submitTextLineHeightType" } }
							lineHeight = { { value: submitTextLineHeight, label: "submitTextLineHeight" } }
							lineHeightMobile = { { value: submitTextLineHeightMobile, label: "submitTextLineHeightMobile" } }
							lineHeightTablet= { { value: submitTextLineHeightTablet, label: "submitTextLineHeightTablet" } }
						/>
				</PanelBody>
			)
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
					{ true === sendAfterSubmitEmail && (
						<Fragment>								
							<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin uagb-email-controls-tabs" activeClass="active-tab"
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
	
									return <div className="uagb-form-emailto">{ tabout }</div>
								}
							}
							</TabPanel>
							<TextControl
							label= { __( "Subject" ) }
							placeholder = { __( "Subject" ) }
							value= { afterSubmitEmailSubject }
							onChange={ value => setAttributes( { afterSubmitEmailSubject: value } ) }
							/>	
						</Fragment>
					)}
				</PanelBody>
			)
		}
		
		const designSettings = () => {
			return (
				<PanelBody
					title={ __( "Design" ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>				
				<TypographyControl
					label={ __( "Label Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: labelloadGoogleFonts, label: "labelloadGoogleFonts" } }
					fontFamily = { { value: labelFontFamily, label: "labelFontFamily" } }
					fontWeight = { { value: labelFontWeight, label: "labelFontWeight" } }
					fontSubset = { { value: labelFontSubset, label: "labelFontSubset" } }
					fontSizeType = { { value: labelFontSizeType, label: "labelFontSizeType" } }
					fontSize = { { value: labelFontSize, label: "labelFontSize" } }
					fontSizeMobile = { { value: labelFontSizeMobile, label: "labelFontSizeMobile" } }
					fontSizeTablet= { { value: labelFontSizeTablet, label: "labelFontSizeTablet" } }
					lineHeightType = { { value: labelLineHeightType, label: "labelLineHeightType" } }
					lineHeight = { { value: labelLineHeight, label: "labelLineHeight" } }
					lineHeightMobile = { { value: labelLineHeightMobile, label: "labelLineHeightMobile" } }
					lineHeightTablet= { { value: labelLineHeightTablet, label: "labelLineHeightTablet" } }
				/>
				<TypographyControl
					label={ __( "Input Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: inputloadGoogleFonts, label: "inputloadGoogleFonts" } }
					fontFamily = { { value: inputFontFamily, label: "inputFontFamily" } }
					fontWeight = { { value: inputFontWeight, label: "inputFontWeight" } }
					fontSubset = { { value: inputFontSubset, label: "inputFontSubset" } }
					fontSizeType = { { value: inputFontSizeType, label: "inputFontSizeType" } }
					fontSize = { { value: inputFontSize, label: "inputFontSize" } }
					fontSizeMobile = { { value: inputFontSizeMobile, label: "inputFontSizeMobile" } }
					fontSizeTablet= { { value: inputFontSizeTablet, label: "inputFontSizeTablet" } }
					lineHeightType = { { value: inputLineHeightType, label: "inputLineHeightType" } }
					lineHeight = { { value: inputLineHeight, label: "inputLineHeight" } }
					lineHeightMobile = { { value: inputLineHeightMobile, label: "inputLineHeightMobile" } }
					lineHeightTablet= { { value: inputLineHeightTablet, label: "inputLineHeightTablet" } }
				/>
				<RangeControl
					label={ __( "Checkbox/Radio Size" ) }
					value={ toggleSize  }
					onChange={ ( value ) => setAttributes( { toggleSize : value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<RangeControl
					label={ __( "Toggle Width" ) }
					value={ togglewidthSize  }
					onChange={ ( value ) => setAttributes( { togglewidthSize : value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<RangeControl
					label={ __( "Toggle Height" ) }
					value={ toggleheightSize  }
					onChange={ ( value ) => setAttributes( { toggleheightSize : value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Label Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: labelColor }} ></span></span></p>
				<ColorPalette
					value={ labelColor }
					onChange={ ( colorValue ) => setAttributes( { labelColor: colorValue } ) }
					allowReset
				/>				
				<p className="uagb-setting-label">{ __( "Input Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: inputColor }} ></span></span></p>
				<ColorPalette
					value={ inputColor }
					onChange={ ( colorValue ) => setAttributes( { inputColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Field Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: bgColor }} ></span></span></p>
				<ColorPalette
					value={ bgColor }
					onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Field Placeholder Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: inputplaceholderColor }} ></span></span></p>
				<ColorPalette
					value={ inputplaceholderColor }
					onChange={ ( colorValue ) => setAttributes( { inputplaceholderColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Field Active Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: inputactiveColor }} ></span></span></p>
				<ColorPalette
					value={ inputactiveColor }
					onChange={ ( colorValue ) => setAttributes( { inputactiveColor: colorValue } ) }
					allowReset
				/>
						
					<SelectControl
						label={ __( "Border Style" ) }
						value={ inputborderStyle }
						onChange={ ( value ) => setAttributes( { inputborderStyle: value } ) }
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
					{ "none" != inputborderStyle && (
						<Fragment>
							<RangeControl
								label={ __( "Border Width" ) }
								value={ inputborderWidth }
								onChange={ ( value ) => setAttributes( { inputborderWidth: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							{"boxed" == formStyle && (
								<RangeControl
									label={ __( "Border Radius" ) }
									value={ inputborderRadius }
									onChange={ ( value ) => setAttributes( { inputborderRadius: value } ) }
									min={ 0 }
									max={ 100 }
									allowReset
								/>
							)}
							<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: inputborderColor }} ></span></span></p>
							<ColorPalette
								value={ inputborderColor }
								onChange={ ( colorValue ) => setAttributes( { inputborderColor: colorValue } ) }
								allowReset
							/>
							<p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: inputborderHoverColor }} ></span></span></p>
							<ColorPalette
								value={ inputborderHoverColor }
								onChange={ ( colorValue ) => setAttributes( { inputborderHoverColor: colorValue } ) }
								allowReset
							/>
						</Fragment>
					) }
									
					<RangeControl	
						label={ __( "Spacing between fields (px)" ) }					
						className={ "uagb-padding-control" }
						value={ fieldGap }
						onChange={ ( value ) => setAttributes( { fieldGap: value } ) }
						min={ 0 }
						max={ 100 }
					/>
					<h2>{ __( "Field Padding (px)" ) }</h2>
					<RangeControl
						label={ UAGB_Block_Icons.vertical_spacing }
						className={ "uagb-padding-control" }
						value={ vPaddingField }
						onChange={ ( value ) => setAttributes( { vPaddingField: value } ) }
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						label={ UAGB_Block_Icons.horizontal_spacing }
						className={ "uagb-padding-control" }
						value={ hPaddingField }
						onChange={ ( value ) => setAttributes( { hPaddingField: value } ) }
						min={ 0 }
						max={ 100 }
					/>
				</PanelBody>
				
			)
		}

		const googleReCaptcha = () => {
			return (
				<PanelBody
					title={ __( "Google reCAPTCHA" ) }
					initialOpen={ false }					
				>
					<p className='uagb-form-notice'>{ __( 'P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ' ) }</p>
              
					<ToggleControl
						label={ __( "Enable reCAPTCHA " ) }
						checked={ reCaptchaEnable }
						onChange={ ( value ) => setAttributes( { reCaptchaEnable: ! reCaptchaEnable } ) }
					/>
					{ reCaptchaEnable &&
						<SelectControl
							label={ __( "Select Version" ) }
							value={ reCaptchaType }
							onChange={ ( value ) => setAttributes( { reCaptchaType: value } ) }
							options={ [
								{ value: "v2", label: __( "V2" ) },
								{ value: "v3", label: __( "V3" ) },
							] }
						/>
					}
					{ reCaptchaEnable && "v2" === reCaptchaType && (
						<Fragment>
							<TextControl
								label="Site Key"
								value={ reCaptchaSiteKeyV2 }
								onChange={ ( value ) => setAttributes( { reCaptchaSiteKeyV2: value } ) }
								placeholder={"Enter v2 Keys"}

							/>
							<TextControl
								label="Secret Key"
								value={ reCaptchaSecretKeyV2 }
								onChange={ ( value ) => setAttributes( { reCaptchaSecretKeyV2: value } ) }
								placeholder={"Enter v2 Keys"}

							/>		
					</Fragment>
					)}
					{ reCaptchaEnable && "v3" === reCaptchaType && (
						<Fragment>
							<TextControl
								label="Site Key"
								value={ reCaptchaSiteKeyV3 }
								onChange={ ( value ) => setAttributes( { reCaptchaSiteKeyV3: value } ) }
								placeholder={"Enter v3 Keys"}

							/>
							<TextControl
								label="Secret Key"
								value={ reCaptchaSecretKeyV3 }
								onChange={ ( value ) => setAttributes( { reCaptchaSecretKeyV3: value } ) }
								placeholder={"Enter v3 Keys"}

							/>		
							<ToggleControl
								label={ __( "Hide reCAPTCHA Badge" ) }
								checked={ hidereCaptchaBatch }
								onChange={ ( value ) => setAttributes( { hidereCaptchaBatch: ! hidereCaptchaBatch } ) }
							/>
						</Fragment>
					)}
					<h2> { __( "Know More" ) }</h2>
					<ExternalLink href="https://www.google.com/recaptcha/admin/create">{__("Get Keys")}</ExternalLink>
					<ExternalLink href="https://developers.google.com/recaptcha/intro">{__(" | Documentation")}</ExternalLink>
				</PanelBody>
			)
		}

		const renderButtonHtml = () => {
					
				return (
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
				);
			}
		

		if ( ! hasInnerBlocks ) {
			return (
				<Fragment>
					<__experimentalBlockVariationPicker
						icon ={ UAGB_Block_Icons.columns }
						label={ uagb_blocks_info.blocks["uagb/forms"]["title"] }
						instructions={ __( 'Select a variation to start with.' ) }
						variations={ variations }
						allowSkip
						onSelect={ ( nextVariation ) => this.blockVariationPickerOnSelect( nextVariation ) }
						className="uagb-forms-variations"
					/>
				</Fragment>
			)
		}
		
		return (
			<Fragment>
				<InspectorControls>
					{ generalSettings() }
					{ submitButtonSettings() }
					{ afterSubmitActions() }
					{ designSettings() }
					{ googleReCaptcha() }
				</InspectorControls>
				  
				<div className={ classnames(
					"uagb-forms__outer-wrap",
					`uagb-block-${ block_id }`,
					`uagb-forms__${buttonSize}-btn`
				) }
				>
					<form className="uagb-forms-main-form" name={ `uagb-form-${ block_id }` }>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
						<div className="uagb-forms-form-hidden-data">
							{reCaptchaEnable && (					
								<input type="hidden" id="g-recaptcha-response" className="uagb-forms-recaptcha"/>
							)}
							<input type="hidden" name="uagb_forms_form_label" value={ formLabel }/>
							<input type="hidden" name="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
						</div>

						{reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && (
							<Fragment>
								<div className="g-recaptcha uagb-forms-field-set" data-sitekey={reCaptchaSiteKeyV2}></div>
								<div className={`uagb-form-reacaptcha-error-${ block_id }`}></div>
							</Fragment>
						)}

						<div className="uagb-forms-main-submit-button-wrap">
							{renderButtonHtml()}
						</div>
					</form>
				</div>
				{ loadsubmittextGoogleFonts }
				{ loadlabelGoogleFonts }
				{ loadinputGoogleFonts }
			</Fragment>
		)
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
		var id = this.props.clientId
		window.addEventListener("load", this.renderReadyClasses(id))
		
	}

	componentDidUpdate(prevProps, prevState) {

		var element = document.getElementById( "uagb-style-forms-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}

	}
	
	renderReadyClasses(id){
		var mainDiv = document.getElementById( "block-" + id )
		var formscope = mainDiv.getElementsByClassName('uagb-forms__outer-wrap')
		
		if( null !== formscope[0] && undefined !== formscope[0] ) {
			
			var editorwrap = formscope[0].children;
			var formInnerWrap = editorwrap[0].children;
			var editorBlockWrap = formInnerWrap[0].getElementsByClassName('block-editor-block-list__layout')
			var sibling = editorBlockWrap[0].children
			
			
			for (let index = 0; index < sibling.length; index++) {

                if( sibling[index].classList.contains("uag-col-2") && sibling[index+1].classList.contains("uag-col-2") ){
                    let div = document.createElement('div');
                    div.className = 'uag-col-2-wrap uag-col-wrap-' + index;                        
                    sibling[index+1].after(div)
                    let wrapper_div = formscope[0].getElementsByClassName('uag-col-wrap-' + index)
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
				}else if( (sibling[index].classList.contains("uag-col-3")) && (sibling[index+1].classList.contains("uag-col-3") && (sibling[index+2].classList.contains("uag-col-3"))) ){
                    let div = document.createElement('div');
                    div.className = 'uag-col-3-wrap uag-col-wrap-' + index;                        
                    sibling[index+2].after(div)
                    let wrapper_div = formscope[0].getElementsByClassName('uag-col-wrap-' + index)
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])

                }else if( (sibling[index].classList.contains("uag-col-4")) && (sibling[index+1].classList.contains("uag-col-4") && (sibling[index+2].classList.contains("uag-col-4")) && (sibling[index+3].classList.contains("uag-col-4"))) ){
                    let div = document.createElement('div');
                    div.className = 'uag-col-4-wrap uag-col-wrap-' + index;                        
                    sibling[index+3].after(div)
                    let wrapper_div = formscope[0].getElementsByClassName('uag-col-wrap-' + index)
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])

                }
			}
		}		
	}
}

const applyWithSelect = withSelect( ( select, props ) => {
	const { getBlocks, getBlocksByClientId } = select( 'core/block-editor' );
	const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );
	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		hasInnerBlocks: select( 'core/block-editor' ).getBlocks( props.clientId ).length > 0,

		blockType: getBlockType( props.name ),
		defaultVariation: typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name ),
		variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( props.name ),
		replaceInnerBlocks,
	};
} );


const addAdvancedClasses = createHigherOrderComponent((BlockListBlock) => {
  return props => {
    return <BlockListBlock { ...props } className={ props.attributes.className } />
  }
}, 'addAdvancedClasses')

wp.hooks.addFilter('editor.BlockListBlock', 'uagb/forms', addAdvancedClasses)

export default compose( withNotices, applyWithSelect,addAdvancedClasses )( UAGBFormsEdit )
