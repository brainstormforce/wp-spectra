import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export const PostButton = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.

	const { attributes, post, setAttributes } = props;

	const target = attributes.newTab ? '_blank' : '_self';

	const inheritAstraSecondary = attributes.inheritFromThemeBtn && 'secondary' === attributes.buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};
    
	const postBtnClass = `'uagb-text-link' ${buttonTypeClass}`;


	if ( attributes.displayPostLink ) {
		return (
			<div className="uagb-post__text">
				<div className={ classnames( 'uagb-post__cta', 'wp-block-button' ) }>
					<RichText
						value={ attributes.ctaText ? attributes.ctaText : __( 'Read More', 'ultimate-addons-for-gutenberg' ) }
						onChange={ ( value ) => setAttributes( { ctaText: value } ) }
						className={ classnames( postBtnClass ) }
						href={ post.link }
						target={ target }
						style={ borderStyle }
						rel="noopener noreferrer"
					/>
				</div>
			</div>
		);
	}
	return null;
};
