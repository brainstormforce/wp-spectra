/**
 * BLOCK: Forms - Phone - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		phoneRequired
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-phone-wrap",
			`uagb-block-${ block_id }`,
		) }>
				<label className="uagb-forms-phone-label"> { __( "Phone" ) } </label>
				<input type="text" required={ phoneRequired } className="uagb-forms-phone-input"/>
		</div>
	)
}