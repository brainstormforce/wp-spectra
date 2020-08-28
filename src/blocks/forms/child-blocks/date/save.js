/**
 * BLOCK: Forms - Date - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		dateRequired,
		name
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-date-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
				<RichText.Content
				tagName="div"
				value={ name }
				className="uagb-forms-date-label"			
				/>					
				<input type="date" className="uagb-forms-date-input" name={name} required={ dateRequired }/>
		</div>
	)
}