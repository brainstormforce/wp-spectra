import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const RendererDesc = ( props ) => {
	const { setAttributes, context } = props;

	let { headingDesc } = props.attributes;

	// Check if heading block is children block of loop builder.
	if ( headingDesc && -1 !== headingDesc.indexOf( '<span data-spectra-dc-field="' ) ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, headingDesc, context );
		if ( renderedMarkup !== '' ) {
			headingDesc = renderedMarkup;
		}
	}

	return (
		<RichText
			tagName="p"
			placeholder={ __( 'Write a Description', 'ultimate-addons-for-gutenberg' ) }
			value={ headingDesc }
			className="uagb-desc-text"
			onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
		/>
	);
};
export default RendererDesc;
