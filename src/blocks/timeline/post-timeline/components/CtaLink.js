import { RichText } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';

const CtaLink = ( props ) => {
	const { post, attributes, setAttributes } = props;
	let target = '_self';
	if ( attributes.linkTarget ) {
		target = '_blank';
	}

	const inheritAstraSecondary = attributes.inheritFromTheme && 'secondary' === attributes.buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};
    
	const ctaBtnClass = `uagb-timeline__link ${buttonTypeClass}`;

	const CustomTag = inheritAstraSecondary ? 'div' : 'a';

	if ( attributes.displayPostLink ) {
		if ( setAttributes !== 'not_set' ) {
			return (
				<div className="uagb-timeline__link_parent wp-block-button">
					<RichText
						value={ attributes.readMoreText.replace( /(<([^>]+)>)/gi, '' ) }
						onChange={ ( value ) => {
							setAttributes( { readMoreText: value } );
						} }
						tagName={ CustomTag }
						className={ ctaBtnClass }
						href={ post.link }
						target={ target }
						rel="noopener noreferrer"
						style={ borderStyle }
					/>
				</div>
			);
		}

		return (
			<div className="uagb-timeline__link_parent wp-block-button">
				<a
					className="uagb-timeline__link wp-block-button__link"
					href={ post.link }
					target={ target }
					rel="noopener noreferrer"
				>
					<RichText.Content value={ attributes.readMoreText.replace( /(<([^>]+)>)/gi, '' ) } />
				</a>
			</div>
		);
	}
	return null;
};

export default memo( CtaLink );
