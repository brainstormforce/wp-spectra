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
		required
	} = attributes
		
	return (
		<div className={ classnames(
			"uagb-forms-email-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ name }
				className="uagb-forms-email-label"			
			/>			
			<input type="email" className="uagb-forms-email-input" required={ required }/>
		</div>
	)
}