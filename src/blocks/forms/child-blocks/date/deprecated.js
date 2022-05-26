/**
 * BLOCK: Forms - Date - Deprecared
 */

import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const attributes = {
	block_id: {
	  type: "string"
	},
	dateRequired : {
	  type: "boolean",
	  default: false
	},
	name: {
	  type: "string",
	  default: __("Date" , 'ultimate-addons-for-gutenberg' )
	},
	additonalVal : {
	  type: "boolean",
	  default: false
	},
	minYear: {
	  type: "string",    
	  default: "",   
	},
	minMonth: {
	  type: "string",  
	  default: "",   
	},
	minDay: {
	  type: "string",   
	  default: "",   
	},
	maxYear: {
	  type: "string",
	  default: "",   
	},
	maxMonth: {
	  type: "string",
	  default: "",   
	},
	maxDay: {
	  type: "string",
	  default: "",  
	},
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				dateRequired,
				name,
				additonalVal,
				minYear,
				minMonth,
				minDay,
				maxYear,
				maxMonth,
				maxDay
			} = props.attributes
			
			var validation_min_value = "";
			var validation_max_value = "";
			
			if( minYear && minMonth && minDay ){
				validation_min_value = minYear+"-"+minMonth+"-"+minDay			
			}
		
			if( maxYear && maxMonth && maxDay ){	
				validation_max_value = maxYear+"-"+maxMonth+"-"+maxDay		
			}
		
			var date_html = "";
			if( additonalVal ){
				date_html = <input type="date" className="uagb-forms-date-input uagb-forms-input"  required={ dateRequired } min={validation_min_value} max={validation_max_value} name={ block_id }/>
				
			}else{
				date_html = <input type="date" className="uagb-forms-date-input uagb-forms-input"  required={ dateRequired } name={ block_id }/>
		
			}
			const isRequired = (dateRequired) ? __("required", 'ultimate-addons-for-gutenberg') : "";
		
			return (
				<div className={ classnames(
					"uagb-forms-date-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
				) }>
					<RichText.Content
					tagName="div"
					value={ name }
					className={`uagb-forms-date-label ${isRequired} uagb-forms-input-label`}	
					id={ block_id }
					/>
					{date_html}
				</div>
			)
        }
    }
];

export default deprecated;