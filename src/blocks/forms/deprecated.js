import classnames from "classnames"
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const attributes = {
	block_id : {
		type: "string"
	},
	submitButtonText : {
		type: "string",
		default: __( "Submit" , "ultimate-addons-for-gutenberg" )
	},
	formLabel : {
		type: "string",
		default: __( "UAG Form" , "ultimate-addons-for-gutenberg" )
	},
	buttonAlign : {
		type: "string",
		default:  'left'
	},
	confirmationType : {
		type: "string",
		default:  'message',
	},
	confirmationMessage : {
		type: "string",
		default: __( 'The form has been submitted successfully!' , 'ultimate-addons-for-gutenberg' )
	},
	failedMessage : {
		type: "string",
		default: __( 'There has been some error while submitting the form. Please verify all form fields again.' ,'ultimate-addons-for-gutenberg' )
	},
	confirmationUrl : {
		type: "string",
	},
	sendAfterSubmitEmail : {
		type: "boolean",
		default:true,
	},
	afterSubmitToEmail : {
		type: "string",
		default:'',
	},
	afterSubmitCcEmail : {
		type: "string",
		default:'',
	},
	afterSubmitBccEmail : {
		type: "string",
		default:'',
	},
	afterSubmitEmailSubject : {
		type: "string",
		default:__( "Form Submission" , "ultimate-addons-for-gutenberg" )
	},
	submitColor : {
		type: "string",
		default:"#ffffff"
	},
	submitColorHover : {
		type: "string",
		default:"#000000"
	},
	submitBgColor : {
		type: "string",
		default:"#000000"
	},
	submitBgColorHover : {
		type: "string",
		default:"#ffffff"
	},
	buttonSize : {
		type: "string",
		default: 'medium'
	},
	// Border
	submitborderStyle : {
		type: "string",
	},
	submitborderWidth : {
		type: "number",
	},
	submitborderRadius : {
		type: "number",
		default: 3
	},
	submitborderColor : {
		type: "string",
	},
	submitborderHoverColor : {
		type: "string"
	},
	hPaddingSubmit : {
		type: "number",
	},
	vPaddingSubmit : {
		type: "number",
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	paddingFieldUnit: {
		type: 'string',
		default: 'px'
	},
	paddingFieldUnitmobile: {
		type: 'string',
		default: 'px',
	},
	paddingFieldUnitTablet: {
		type: 'string',
		default: 'px',
	},
	// Submit text Typography

	submitTextloadGoogleFonts: {
		type: "boolean",
		default: false
	},
	submitTextFontFamily: {
		type: "string",
		default: "Default",
	},
	submitTextFontWeight: {
		type: "string",
	},
	submitTextFontSubset: {
		type: "string",
	},
	// submitText Font Size
	submitTextFontSize: {
		type: "number",
		default: 15
	},
	submitTextFontSizeType: {
		type: "string",
		default: "px"
	},
	submitTextFontSizeTablet: {
		type: "number",
		default: 15
	},
	submitTextFontSizeMobile: {
		type: "number",
		default: 15
	},
	// submitText Line Height
	submitTextLineHeightType: {
		type: "string",
		default: "em"
	},
	submitTextLineHeight: {
		type: "number",
	},
	submitTextLineHeightTablet: {
		type: "number",
	},
	submitTextLineHeightMobile: {
		type: "number",
	},

	// Label Font Family

	labelloadGoogleFonts: {
		type: "boolean",
		default: false
	},
	labelFontFamily: {
		type: "string",
		default: "Default",
	},
	labelFontWeight: {
		type: "string",
	},
	labelFontSubset: {
		type: "string",
	},
	// label Font Size
	labelFontSize: {
		type: "number",
		default: 15
	},
	labelFontSizeType: {
		type: "string",
		default: "px"
	},
	labelFontSizeTablet: {
		type: "number",
		default: 15
	},
	labelFontSizeMobile: {
		type: "number",
		default: 15
	},
	// label Line Height
	labelLineHeightType: {
		type: "string",
		default: "em"
	},
	labelLineHeight: {
		type: "number",
	},
	labelLineHeightTablet: {
		type: "number",
	},
	labelLineHeightMobile: {
		type: "number",
	},


	// Input Font Family

	inputloadGoogleFonts: {
		type: "boolean",
		default: false
	},
	inputFontFamily: {
		type: "string",
		default: "Default",
	},
	inputFontWeight: {
		type: "string",
	},
	inputFontSubset: {
		type: "string",
	},
	// input Font Size
	inputFontSize: {
		type: "number"
	},
	inputFontSizeType: {
		type: "string",
		default: "px"
	},
	inputFontSizeTablet: {
		type: "number",
		default: 15
	},
	inputFontSizeMobile: {
		type: "number",
		default: 15
	},
	// input Line Height
	inputLineHeightType: {
		type: "string",
		default: "em"
	},
	inputLineHeight: {
		type: "number",
	},
	toggleSize:{
		type: "number",
		default:15
	},
	toggleWidthSize:{
		type: "number",
		default:0
	},
	toggleActiveColor:{
		type: "string",
		default:"#000000"
	},
	toggleHeightSize:{
		type: "number",
		default:0
	},
	inputLineHeightTablet: {
		type: "number",
	},
	inputLineHeightMobile: {
		type: "number",
	},

	//Color.
	labelColor : {
		type: "string",
		default:"#000000"
	},
	inputColor : {
		type: "string",
		default:"#000000"
	},
	bgColor : {
		type: "string",
	},
	inputplaceholderColor : {
		type: "string",
		default:"#abb8c3"
	},
	inputactiveColor : {
		type: "string",
		default:"#000000"
	},


	// InputBorder
	inputborderStyle : {
		type: "string",
		default: "solid"
	},
	inputborderWidth : {
		type: "number",
		default: 1
	},
	inputborderRadius : {
		type: "number",
		default: 3
	},
	inputborderColor : {
		type: "string",
		default: "#BDBDBD"
	},
	inputborderHoverColor : {
		type: "string"
	},
	hPaddingField : {
		type: "number",
		default: 10
	},
	vPaddingField : {
		type: "number",
		default: 10
	},
	fieldGap : {
		type: "number",
		default: 20
	},

	formStyle : {
		type: "string",
		default: "boxed"
	},
	overallAlignment : {
		type: "string",
		default:'left'
	},

	//recaptha.
	reCaptchaEnable: {
		type: "boolean",
		default: false
	},
	reCaptchaType : {
		type: "string",
		default: "v2",
	},
	reCaptchaSiteKeyV2 : {
		type: "string",
		default: "",
	},
	reCaptchaSecretKeyV2 : {
		type: "string",
		default: "",
	},
	reCaptchaSiteKeyV3 : {
		type: "string",
		default: "",
	},
	reCaptchaSecretKeyV3 : {
		type: "string",
		default: "",
	},
	hidereCaptchaBatch: {
		type: "boolean",
		default: false
	},
	//message attributes
	successMessageTextColor : {
		type: "string",
		default:"#000000",
	},
	successMessageBGColor : {
		type: "string",
		default:"#00800030",
	},
	successMessageBorderColor : {
		type: "string",
		default:"green",
	},
	successMessageBorderStyle :{
		type: "string",
		default:"solid",
	},
	successMessageBorderWidth:{
		type: "string",
		default:"2",
	},
	failedMessageTextColor : {
		type: "string",
		default:"#000000",
	},
	failedMessageBorderColor : {
		type: "string",
		default:"red",
	},
	failedMessageBGColor : {
		type: "string",
		default:"#f5f5f5",
	},
	captchaMessage:{
		type:"string",
		default:__("Please fill up the above captcha." , 'ultimate-addons-for-gutenberg')
	},
	fieldGapType: {
		type: 'string',
		default: 'px',
	},
	toggleSizeType: {
		type: 'string',
		default: 'px',
	},
}

const deprecated = [
	{
		attributes,
		save( props ) {

            const { attributes } = props

            const {
                block_id,
                formLabel,
                submitButtonText,
                confirmationType,
                confirmationMessage,
                failedMessage,
                reCaptchaEnable,
                reCaptchaType,
                reCaptchaSiteKeyV2,
                reCaptchaSecretKeyV2,
                reCaptchaSiteKeyV3,
                reCaptchaSecretKeyV3,
                buttonSize
            } = attributes

            const renderButtonHtml = () => {

                        return (
                            <button className="uagb-forms-main-submit-button" >
                                        <RichText.Content
                                            tagName='div'
                                            value={ submitButtonText }
                                            className='uagb-forms-main-submit-button-text'
                                        />
                            </button>
                        );
                    }



            return (
                <div className={ classnames(
                    "uagb-forms__outer-wrap",
                    `uagb-block-${ block_id }`,
                    `uagb-forms__${buttonSize}-btn`
                ) }
                >
                    <form className="uagb-forms-main-form" method="post" name={ `uagb-form-${ block_id }` } >
                        <InnerBlocks.Content />
                        <div className="uagb-forms-form-hidden-data">
                            { reCaptchaEnable && (
                                <input type="hidden" id="g-recaptcha-response" className="uagb-forms-recaptcha"/>
                            ) }
                            <input type="hidden" className="uagb_forms_form_label" value={ formLabel }/>
                            <input type="hidden" className="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
                        </div>
                        { reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && (
                            <>
                                <div className="g-recaptcha uagb-forms-field-set" data-sitekey={reCaptchaSiteKeyV2}></div>
                                <div className={`uagb-form-reacaptcha-error-${ block_id }`}></div>
                            </>
                        ) }
                        <div className="uagb-forms-main-submit-button-wrap">
                            {renderButtonHtml()}
                        </div>
                    </form>
                        { 'message' === confirmationType && (
                            <>
                                <div className={ classnames(
                                    `uagb-forms-success-message-${ block_id }`,
                                    'uagb-forms-submit-message-hide',
                                ) }>
                                    <span>
                                        { confirmationMessage }
                                    </span>
                                </div>
                                <div className={ classnames(
                                    `uagb-forms-failed-message-${ block_id }`,
                                    'uagb-forms-submit-message-hide',
                                ) }>
                                    <span>
                                        { failedMessage }
                                    </span>
                                </div>
                            </>
                        )}

                </div>
            )
        }
    }
];

export default deprecated;
