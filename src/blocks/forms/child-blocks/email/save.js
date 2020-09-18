/**
 * BLOCK: Forms - Email - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor


export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		name,
		required,
		placeholder
	} = attributes
	
	const isRequired = (required) ? "required" : "";

	return (
		<div className={ classnames(
			"uagb-forms-email-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ name }
				className={`uagb-forms-email-label ${isRequired}`}			
			/>			
			<input type="email" className="uagb-forms-email-input" placeholder={placeholder} required={ required }/>
		</div>
	)
}