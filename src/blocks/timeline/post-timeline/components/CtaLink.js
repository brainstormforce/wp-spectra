import { RichText } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';

const CtaLink = ( props ) => {
	const { post, attributes, setAttributes } = props;
	let target = '_self';
	if ( attributes.linkTarget ) {
		target = '_blank';
	}

	if ( attributes.displayPostLink ) {

		if ( setAttributes !== 'not_set' ) {
			return (
				<div className="uagb-timeline__link_parent wp-block-button"	>
					<RichText
						value={ attributes.readMoreText.replace( /(<([^>]+)>)/ig, '' ) }
						onChange={ ( value ) => {
							setAttributes( { readMoreText: value } );
						} }
						tagName='a'
						className="uagb-timeline__link wp-block-button__link"
						href={ post.link }
						target={ target }
						rel="noopener noreferrer"
					/>
				</div>
			);
		}

		return (
			<div className="uagb-timeline__link_parent wp-block-button"	>
				<a
					className="uagb-timeline__link wp-block-button__link"
					href={ post.link }
					target={ target }
					rel="noopener noreferrer"
				>
					<RichText.Content
						value={ attributes.readMoreText.replace( /(<([^>]+)>)/ig, '' ) }
					/>
				</a>
			</div>
		);

	}
	return null;
};

export default memo( CtaLink );
