import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const Renderer = ( props ) => {
	const {
		setAttributes,
		attributes: { headingTag },
		context,
	} = props;

	let { headingTitle } = props.attributes;
	let allowedFormats = false;

	// Check if heading block is children block of loop builder.
	if ( -1 !== headingTitle.indexOf( '<span data-spectra-dc-field="' ) ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, headingTitle, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			headingTitle = renderedMarkup;
		}
	}

	return (
		<RichText
			tagName={ headingTag }
			placeholder={ __( 'Write a Heading', 'ultimate-addons-for-gutenberg' ) }
			value={ headingTitle }
			className="uagb-heading-text"
			multiline={ false }
			onChange={ ( value ) => {
				setAttributes( { headingTitle: value } );
			} }
			allowedFormats={ allowedFormats }
		/>
	);
};
export default Renderer;
