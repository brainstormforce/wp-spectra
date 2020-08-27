/**
 * BLOCK: Forms - Toggle - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		toggleRequired,
		name,
		toggleStatus
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-toggle-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
				<RichText.Content
				tagName="div"
				value={ name }
				className="uagb-forms-toggle-label"			
				/>
				<label class="uagb-switch">
					<input 
						type="checkbox"
						className="uagb-forms-toggle-input"
						checked={toggleStatus}
						value={toggleStatus ? "yes" : "no"}
						required={toggleRequired}					
					/>
					<span class="uagb-slider"></span>
				</label>
		</div>
	)
}