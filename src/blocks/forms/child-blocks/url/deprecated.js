/**
 * BLOCK: Forms - URL - Deprecared
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

const attributes = {
	block_id: {
	  type: "string"
	},
	name: {
	  type: "string",
	  default: __( "URL" , 'ultimate-addons-for-gutenberg' ),
	},
	required : {
	  type: "boolean",
	  default: false
	},
	placeholder: {
	  type: "string",
	  default: __( "https://example.com" , 'ultimate-addons-for-gutenberg')
	},
}

const deprecated = [
	{
		attributes,
		save( props ) {
			const {
				block_id,
				required,
				name,
				placeholder
			} = props.attributes
		
			
			const isRequired = (required) ? __("required", 'ultimate-addons-for-gutenberg') : "";
			
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
					id={ block_id }			
					/>
					<input type="url" name={ block_id } required={ required } placeholder={placeholder}  className="uagb-forms-url-input uagb-forms-input"/>					
		
				</div>
			)
        }
    }
];

export default deprecated;