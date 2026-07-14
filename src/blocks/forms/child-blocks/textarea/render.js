import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { memo } from '@wordpress/element';
import { RichText, useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {
	
	const { attributes, setAttributes, name } = props;

	const blockName = name.replace( 'uagb/', '' );

	const { block_id, textareaRequired, textareaName, rows, placeholder } = attributes;

	const isRequired = textareaRequired ? 'required' : '';

	const blockProps = useBlockProps( {
		className: classnames(
			'uagb-forms-textarea-wrap',
			'uagb-forms-field-set',
			`uagb-block-${ block_id }`
		),
	} );

	return (
		<>
			<div
				{ ...blockProps }
			>
				<RichText
					tagName="div"
					placeholder={ __( 'Textarea Name', 'ultimate-addons-for-gutenberg' ) }
					value={ textareaName }
					onChange={ ( value ) => setAttributes( { textareaName: value } ) }
					className={ `uagb-forms-textarea-label ${ isRequired } uagb-forms-input-label` }
					multiline={ false }
					id={ block_id }
				/>
				<textarea
					required={ textareaRequired }
					className="uagb-forms-textarea-input uagb-forms-input"
					rows={ getFallbackNumber( rows, 'rows', blockName ) }
					placeholder={ placeholder }
					name={ block_id }
				></textarea>
			</div>
		</>
	);
};
export default memo( Render );
