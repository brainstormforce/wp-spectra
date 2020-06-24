/**
 * BLOCK: Forms - Email - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id
	} = attributes
		
	return (
		<div className={ classnames(
			"uagb-forms-email-wrap",
			`uagb-block-${ block_id }`,
		) }>
			<label className="uagb-forms-email-label"> { __( "Email" ) } </label>
			<input type="email" className="uagb-forms-email-input"/>
		</div>
	)
}