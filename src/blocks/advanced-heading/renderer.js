import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { createBlock } from '@wordpress/blocks';

const Renderer = ( props ) => {
	const {
		setAttributes,
		attributes,
		context,
		onReplace,
		mergeBlocks
	} = props;

	let { headingTitle, headingTag } = attributes;
	let allowedFormats = false;

	// Check if this has dynamic content.
	if ( -1 !== headingTitle.indexOf( '<span data-spectra-dc-field="' ) ) {
		const renderedMarkup = applyFilters( `uag_render_text_loop_data`, headingTitle, context );
		if ( renderedMarkup !== '' ) {
			allowedFormats = [ 'uagb/dynamic-content' ];
			headingTitle = renderedMarkup;
		}
	}
	
	const propsOnSplit = ( value ) => value ? createBlock( 'uagb/advanced-heading', { ...attributes, headingTitle: value} ) : createBlock( 'core/paragraph' );

	return (
		<RichText
			tagName={ headingTag }
			placeholder={ __( 'Write a Heading', 'ultimate-addons-for-gutenberg' ) }
			value={ headingTitle }
			className="uagb-heading-text"
			onChange={ ( value ) => {
				setAttributes( { headingTitle: value } );
			} }
			allowedFormats={ allowedFormats }
			onMerge={ mergeBlocks }
			onSplit={ propsOnSplit }
			onReplace={ onReplace }
			onRemove={ () => onReplace( [] ) }
		/>
	);
};
export default Renderer;
