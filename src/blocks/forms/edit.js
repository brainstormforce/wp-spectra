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
	"uagb/forms-upload",
	"uagb/forms-toggle",
	"uagb/forms-date",
	"uagb/forms-accept",
]

class UAGBFormsEdit extends Component {

	constructor() {
		super( ...arguments )
		this.blockVariationPickerOnSelect = this.blockVariationPickerOnSelect.bind( this )

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
			confirmationType,
			confirmationMessage,
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
			//Border
			submitborderStyle,
			submitborderWidth,
			submitborderRadius,
			submitborderColor,
			submitborderHoverColor,
			vPaddingSubmit,
			hPaddingSubmit,
			//Typography
			//submit button
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
			//label
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
			//Input
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
			//Color
			labelColor,
			inputColor,
			bgColor,
			//Input Border
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
			reCaptchaSecretKeyV3,
			reCaptchaSiteKeyV2,
			reCaptchaSiteKeyV3
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
						label= { __( "Form Label" ) }
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
		

		const submitButtonSettings = () => {
			return (
				<PanelBody
					title={ __( "Submit Button" ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
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
					title={ __( "Google reCaptcha" ) }
					initialOpen={ false }					
				>
					<ToggleControl
						label={ __( "Enable reCaptcha " ) }
						checked={ reCaptchaEnable }
						onChange={ ( value ) => setAttributes( { reCaptchaEnable: ! reCaptchaEnable } ) }
					/>
					{ reCaptchaEnable && (
						<Fragment>									
						<TabPanel className="my-tab-panel"
						 	onSelect={ (value) => setAttributes( { reCaptchaType: value } ) }
							activeClass="is-active"
							tabs={ [
								{
									name: 'v2',
									title: 'V2',
									className: 'uagb-forms-recaptcha-button',
								},
								{
									name: 'v3',
									title: 'V3',
									className: 'uagb-forms-recaptcha-button',
								},
							] }>
							{
								( tab ) => {
									let tabout

									if ( "v3" === tab.name ) {
										tabout = (
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
											</Fragment>
										)
									} else if ( "v2" === tab.name ) {
										tabout = (
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
										)
									} 

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<ExternalLink href="https://www.google.com/recaptcha/admin/create">{__("Get Keys")}</ExternalLink>
						<ExternalLink href="https://developers.google.com/recaptcha/intro">{__(" | Documentation")}</ExternalLink>
					</Fragment>
					)}
					
				</PanelBody>
			)
		}

		const renderButtonHtml = () => {
			if ( reCaptchaEnable && 'v3' === reCaptchaType && reCaptchaSiteKeyV3) {			
				return (
					<button onClick={ this.onSubmitClick } className="uagb-forms-main-submit-button g-recaptcha" data-sitekey={reCaptchaSiteKeyV3}>
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
				)
			}
	
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
				) }
				>
					<form className="uagb-forms-main-form" name={ `uagb-form-${ block_id }` }>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
						<div className="uagb-forms-form-hidden-data">
							{reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 &&(					
								<input type="hidden" id="g-recaptcha-response" className="uagb-forms-recaptcha"/>
							)}
							<input type="hidden" name="uagb_forms_form_label" value={ formLabel }/>
							<input type="hidden" name="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
						</div>

						{reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && (
							<Fragment>
								<div class="g-recaptcha uagb-forms-field-set" data-sitekey={reCaptchaSiteKeyV2}></div>
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

export default compose( withNotices, applyWithSelect )( UAGBFormsEdit )
