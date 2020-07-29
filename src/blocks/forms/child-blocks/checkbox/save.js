/**
 * BLOCK: Forms - Checkbox - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const { RichText } = wp.blockEditor
const {
	Fragment
} = wp.element
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
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ checkboxName }
				className='uagb-forms-checkbox-label'			
			/>
				<div className="uagb-form-checkbox-wrapper">					
					{options.map((o, index) => {
						var optionvalue = o.replace(/\s+/g, '-').toLowerCase();
						return (
							<Fragment>
								<input required={checkboxRequired} type="checkbox" id={`${optionvalue}_${block_id}`} name={optionvalue} value={optionvalue}/>
								<label for={`${optionvalue}_${block_id}`}>{o}</label><br/>
							</Fragment>
						);
					})}
				</div>

				
		</div>
	)
}