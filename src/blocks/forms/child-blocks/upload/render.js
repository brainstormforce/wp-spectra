import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { block_id, uploadRequired, name } = attributes;

	const isRequired = uploadRequired ? __( 'required', 'ultimate-addons-for-gutenberg' ) : '';

	return (
		<>
			<div
				className={ classnames( 'uagb-forms-upload-wrap', 'uagb-forms-field-set', `uagb-block-${ block_id }` ) }
			>
				<RichText
					tagName="div"
					placeholder={ __( 'Name', 'ultimate-addons-for-gutenberg' ) }
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
					className={ `uagb-forms-upload-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<input
					type="file"
					name={ block_id }
					className="uagb-forms-upload-input"
					disabled
					required={ uploadRequired }
				/>
			</div>
		</>
	);
};
export default memo( Render );
