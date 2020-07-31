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
	
	return (
		<div className={ classnames(
			"uagb-forms-select-wrap",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content
				tagName="div"
				value={ selectName }
				className='uagb-forms-select-label'			
			/>
				<select className="uagb-forms-select-box"  required={ selectRequired }>
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((o, index) => {
						var optiontitle = o.optiontitle;
						var optionvalue = optiontitle.replace(/\s+/g, '-').toLowerCase();
						return <option value={optionvalue}>{o.optiontitle}</option>;
					})}
					
				</select>
		</div>
	)
}
