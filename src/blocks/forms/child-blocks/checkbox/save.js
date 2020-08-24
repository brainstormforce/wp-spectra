/**
* BLOCK: Forms - Checkbox - Save Block
*/

import classnames from "classnames"

const { __ } = wp.i18n
const { RichText } = wp.blockEditor
const {	Fragment } = wp.element

export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		checkboxRequired,
		options,
		checkboxName
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-checkbox-wrap",
			"uagb-forms-field-set",
			`uagb-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ checkboxName }
			className='uagb-forms-checkbox-label'			
			/>
			
			{options.map((o, index) => {
				var optiontitle = o.optiontitle;
				var optionvalue = optiontitle.replace(/\s+/g, '-').toLowerCase();
				return (
					<Fragment>
					<input type="checkbox"  name={`checkbox-${ block_id }`} value={ optionvalue } required={ checkboxRequired }/>
					<label for={ optionvalue }>{ optiontitle }</label><br/>						
					</Fragment>
				);
			})}
								
		</div>
	)
}