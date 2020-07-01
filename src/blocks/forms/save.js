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
				<div className="uagb-forms-main-submit-button-wrap">
					<button className="uagb-forms-main-submit-button">
						<RichText.Content
							tagName='div'
							value={ submitButtonText }
							className='uagb-forms-main-submit-button-text'
						/>
					</button>
				</div>
				{ renderConfirmationMessage() }
			</form>
		</div>
	)
}