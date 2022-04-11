/**
 * BLOCK: Forms - Save Block
 */

import classnames from 'classnames';

import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const {
		block_id,
		formLabel,
		submitButtonText,
		confirmationType,
		confirmationMessage,
		failedMessage,
		reCaptchaEnable,
		reCaptchaType,
		buttonSize,
	} = attributes;

	const renderButtonHtml = () => {
		return (
			<button className="uagb-forms-main-submit-button wp-block-button__link">
				<RichText.Content
					tagName="div"
					value={ submitButtonText }
					className="uagb-forms-main-submit-button-text"
				/>
			</button>
		);
	};

	return (
		<div
			className={ classnames(
				'uagb-forms__outer-wrap',
				`uagb-block-${ block_id }`,
				`uagb-forms__${ buttonSize }-btn`
			) }
		>
			<form
				className="uagb-forms-main-form"
				method="post"
				name={ `uagb-form-${ block_id }` }
			>
				<InnerBlocks.Content />
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
						className="uagb_forms_form_label"
						value={ formLabel }
					/>
					<input
						type="hidden"
						className="uagb_forms_form_id"
						value={ `uagb-form-${ block_id }` }
					/>
				</div>
				{ reCaptchaEnable &&
					'v2' === reCaptchaType && (
						<>
							<div
								className="g-recaptcha uagb-forms-field-set"
								data-sitekey= ''
							></div>
						</>
					) }
					<div
						className={ `uagb-form-reacaptcha-error-${ block_id }` }
					></div>
				<div className="uagb-forms-main-submit-button-wrap wp-block-button">
					{ renderButtonHtml() }
				</div>
			</form>
			{ 'message' === confirmationType && (
				<>
					<div
						className={ classnames(
							`uagb-forms-success-message-${ block_id }`,
							'uagb-forms-submit-message-hide'
						) }
					>
						<span>{ confirmationMessage }</span>
					</div>
					<div
						className={ classnames(
							`uagb-forms-failed-message-${ block_id }`,
							'uagb-forms-submit-message-hide'
						) }
					>
						<span>{ failedMessage }</span>
					</div>
				</>
			) }
		</div>
	);
}
