/**
* BLOCK: Forms - Textarea - Save Block
*/

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		textareaRequired,
		textareaName,
		rows,
		placeholder
	} = attributes
	
	const isRequired = (textareaRequired) ? "required" : "";
	
	return (
		<div className={ classnames(
			"uagb-forms-textarea-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ textareaName }
			className={`uagb-forms-textarea-label ${isRequired}`}
			
			/>
			<textarea required={ textareaRequired } className="uagb-forms-textarea-input" rows={rows} placeholder={placeholder} ></textarea>
			</div>
			)
		}