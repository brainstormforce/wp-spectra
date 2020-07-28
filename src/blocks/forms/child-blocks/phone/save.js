/**
 * BLOCK: Forms - Phone - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		phoneRequired,
		phoneName
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-phone-wrap",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="label"
				value={ phoneName }
				className='uagb-forms-phone-label'			
			/>
			<input type="text" required={ phoneRequired }  className="uagb-forms-phone-input" />
		</div>
	)
}