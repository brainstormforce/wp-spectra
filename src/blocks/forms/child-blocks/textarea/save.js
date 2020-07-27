/**
* BLOCK: Forms - Textarea - Save Block
*/

import classnames from "classnames"

const { __ } = wp.i18n
const {
	RichText,
} = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		textareaRequired,
		textareaName
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-textarea-wrap",
			`uagb-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ textareaName }
			className='uagb-forms-textarea-label'
			
			/>
			<textarea required={ textareaRequired } className="uagb-forms-textarea-input" rows="4" ></textarea>
			</div>
			)
		}