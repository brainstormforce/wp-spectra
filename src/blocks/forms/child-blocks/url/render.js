import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

const Render = ( props ) => {

	const { attributes, setAttributes } = props;

	const { block_id, required, name, placeholder } = attributes;

	const isRequired = required ? 'required' : '';

	return (
		<>
			<div className={ classnames( 'uagb-forms-url-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }>
				<RichText
					tagName="div"
					placeholder={ __( 'URL Name', 'ultimate-addons-for-gutenberg' ) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-url-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<input
					type="url"
					name={ block_id }
					placeholder={ placeholder }
					required={ required }
					className="uagb-forms-url-input uagb-forms-input"
				/>
			</div>
		</>
	);
};
export default memo( Render );
