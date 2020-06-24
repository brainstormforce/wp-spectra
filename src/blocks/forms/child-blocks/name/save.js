/**
 * BLOCK: Forms - Name - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		nameRequired
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-name-wrap",
			`uagb-block-${ block_id }`,
		) }>
				<label className="uagb-forms-name-label"> { __( "Name" ) } </label>
				<input type="text" required={ nameRequired } className="uagb-forms-name-input"/>
		</div>
	)
}