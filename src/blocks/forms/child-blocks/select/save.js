/**
 * BLOCK: Forms - Select - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const { RichText } = wp.blockEditor

export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		selectRequired,
		options,
		selectName
	} = attributes
	
	const isRequired = (selectRequired) ? "required" : "";
	
	return (
		<div className={ classnames(
			"uagb-forms-select-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ selectName }
				className={`uagb-forms-select-label ${isRequired}`}		
			/>
				<select className="uagb-forms-select-box"  required={ selectRequired }>
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((o, index) => {
						var optionvalue = o.optionvalue;
						var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
						return <option value={value}>{o.optiontitle}</option>;
					})}
					
				</select>
		</div>
	)
}
