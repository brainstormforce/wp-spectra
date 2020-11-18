/**
 * BLOCK: Forms - Save Block
 */

import classnames from "classnames"

const {
	InnerBlocks
} = wp.blockEditor

const {
	RichText
} = wp.blockEditor

export default function save( props ) {

	const { attributes } = props

	const {
		block_id,
		formLabel,
		submitButtonText,
		confirmationType,
		confirmationMessage,
		reCaptchaEnable,
		reCaptchaType,			
		reCaptchaSiteKeyV2,
		reCaptchaSiteKeyV3
	} = attributes

	const renderConfirmationMessage = () => {

		if ( 'message' === confirmationType ) {
			var show = 'hide'
			return (
				<div className={ classnames(
					"uagb-forms-success-message",
					`uagb-forms-success-message-${ show }`,
				) }>
					<span>
						{ confirmationMessage }
					</span>
				</div>
			)
		}

		return '';
	}

	const renderButtonHtml = () => {

		if ( reCaptchaEnable && 'v3' === reCaptchaType ) {			
			return (
				<button className="uagb-forms-main-submit-button g-recaptcha" data-sitekey={ reCaptchaSiteKeyV3 }>
						<RichText.Content
							tagName='div'
							value={ submitButtonText }
							className='uagb-forms-main-submit-button-text'
						/>
				</button>
			)
		}

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
		) }
		>
			<form className="uagb-forms-main-form" method="post" name={ `uagb-form-${ block_id }` } >
				<InnerBlocks.Content />
				<div className="uagb-forms-form-hidden-data">
					<input type="hidden" name="uagb_forms_form_label" value={ formLabel }/>
					<input type="hidden" name="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
				</div>
				{reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && (
					<div class="g-recaptcha uagb-forms-field-set" data-sitekey={reCaptchaSiteKeyV2}></div>
				)}
				<div className="uagb-forms-main-submit-button-wrap">
					{renderButtonHtml()}
				</div>
			</form>
				{ renderConfirmationMessage() }
		</div>
	)
}