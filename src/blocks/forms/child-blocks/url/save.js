/**
 * BLOCK: Forms - URL - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		required,
		name,
		placeholder
	} = attributes

	var url_field_name = name.replace(/\s+/g, '-').toLowerCase();

	const isRequired = (required) ? "required" : "";
	
	return (
		<div className={ classnames(
			"uagb-forms-url-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
				<RichText.Content
			tagName="div"
			value={ name }
			className={`uagb-forms-url-label ${isRequired} uagb-forms-input-label`}			
			/>
			<input type="url" name={url_field_name} required={ required } placeholder={placeholder}  className="uagb-forms-url-input uagb-forms-input"/>					

		</div>
	)
}