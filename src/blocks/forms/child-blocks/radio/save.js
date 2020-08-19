/**
* BLOCK: Forms - Radio - Save Block
*/

import classnames from "classnames"

const { __ } = wp.i18n
const { RichText } = wp.blockEditor
const {	Fragment } = wp.element

export default function save( props ) {
	
	const { attributes } = props
	
	const {
		block_id,
		radioRequired,
		options,
		radioName
	} = attributes
	
	return (
		<div className={ classnames(
			"uagb-forms-radio-wrap",
			`uagb-block-${ block_id }`,
			) }>
			<RichText.Content
			tagName="div"
			value={ radioName }
			className='uagb-forms-radio-label'			
			/>
			
			{options.map((o, index) => {
				var optiontitle = o.optiontitle;
				var optionvalue = optiontitle.replace(/\s+/g, '-').toLowerCase();
				return (
					<Fragment>
					<input type="radio" id={optionvalue} name={`radio-${block_id}`} value={optionvalue}/>
					<label for={`radio-${block_id}`}>{optiontitle}</label><br/>						
					</Fragment>
					);
				})}
				
				
				</div>
				)
			}