/**
 * BLOCK: Forms - hidden - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		hidden_field_value,
		hidden_field_name
	} = attributes

	var hidden_field_label = hidden_field_name.replace(/\s+/g, '-').toLowerCase();
		
	return (
		<div className={ classnames(
			"uagb-forms-hidden-wrap",
			`uagb-block-${ block_id }`,
		) }>			
			<input type="hidden" className={`uagb-forms-hidden-input uagb-form-hidden-${hidden_field_label}`} value={hidden_field_value} />
		</div>
	)
}