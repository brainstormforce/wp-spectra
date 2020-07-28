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
		nameRequired,
		options
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-select-wrap",
			`uagb-block-${ block_id }`,
		) }>
			<RichText.Content/>
				<select className="uagb-forms-select-box">
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((o, index) => {
						var optionvalue = o.replace(/\s+/g, '-').toLowerCase();
						return <option value={optionvalue}>{o}</option>;
					})}
				</select>
		</div>
	)
}