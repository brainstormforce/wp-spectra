import classnames from "classnames";
import React, {useCallback} from "react";
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [
	'uagb/forms-name',
	'uagb/forms-email',
	'uagb/forms-hidden',
	'uagb/forms-phone',
	'uagb/forms-textarea',
	'uagb/forms-url',
	'uagb/forms-select',
	'uagb/forms-radio',
	'uagb/forms-checkbox',
	'uagb/forms-toggle',
	'uagb/forms-date',
	'uagb/forms-accept',
];

const {
	InnerBlocks,
	RichText,
	InspectorControls,
	ColorPalette,
	__experimentalBlockVariationPicker,
} = wp.blockEditor;


const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, variations, hasInnerBlocks } = props;
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
		toggleWidthSize,
		toggleHeightSize,
		toggleActiveColor,
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
	} = attributes;

	const onSubmitClick = useCallback( () => {
		e.preventDefault();
	} );

	const renderButtonHtml = () => {
		return (
			<button
				onClick={ onSubmitClick }
				className="uagb-forms-main-submit-button"
			>
				<RichText
					tagName="div"
					placeholder={ __(
						'Submit',
						'ultimate-addons-for-gutenberg'
					) }
					value={ submitButtonText }
					onChange={ ( value ) =>
						setAttributes( {
							submitButtonText: value,
						} )
					}
					className="uagb-forms-main-submit-button-text"
					multiline={ false }
					allowedFormats={ [
						'core/bold',
						'core/italic',
						'core/strikethrough',
					] }
				/>
			</button>
		);
	};

	return (
		<>
			<div
				className={ classnames(
					'uagb-forms__outer-wrap',
					`uagb-block-${ block_id }`,
					`uagb-forms__${ buttonSize }-btn`
				) }
			>
				<form
					className="uagb-forms-main-form"
					name={ `uagb-form-${ block_id }` }
				>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					<div className="uagb-forms-form-hidden-data">
						{ reCaptchaEnable && (
							<input
								type="hidden"
								id="g-recaptcha-response"
								className="uagb-forms-recaptcha"
							/>
						) }
						<input
							type="hidden"
							name="uagb_forms_form_label"
							value={ formLabel }
						/>
						<input
							type="hidden"
							name="uagb_forms_form_id"
							value={ `uagb-form-${ block_id }` }
						/>
					</div>

					{ reCaptchaEnable &&
					'v2' === reCaptchaType &&
					reCaptchaSiteKeyV2 &&
					reCaptchaSecretKeyV2 && (
						<>
							<div
								className="g-recaptcha uagb-forms-field-set"
								data-sitekey={ reCaptchaSiteKeyV2 }
							></div>
							<div
								className={ `uagb-form-reacaptcha-error-${ block_id }` }
							></div>
						</>
					) }

					<div className="uagb-forms-main-submit-button-wrap">
						{ renderButtonHtml() }
					</div>
				</form>
			</div>
		</>

	)
}

export default React.memo( Render );
