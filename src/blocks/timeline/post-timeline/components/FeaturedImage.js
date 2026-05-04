import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import { getLogicalTextAlign } from '@Utils/Helpers';

// Pick the alignment attribute that matches the current editor preview
// breakpoint, falling back up the chain the way the rest of the block's
// responsive attributes do (Mobile → Tablet → Desktop).
const pickAlignForDevice = ( attributes, deviceType ) => {
	if ( 'Mobile' === deviceType && attributes.alignMobile ) {
		return attributes.alignMobile;
	}
	if (
		( 'Mobile' === deviceType || 'Tablet' === deviceType ) &&
		attributes.alignTablet
	) {
		return attributes.alignTablet;
	}
	return attributes.align;
};

const FeaturedImage = ( props ) => {
	const { post, attributes, deviceType } = props;

	if (
		attributes.displayPostImage &&
		undefined !== post.uagb_featured_image_src &&
		attributes.imageSize &&
		post.uagb_featured_image_src[ attributes.imageSize ]
	) {
		const src = post.uagb_featured_image_src[ attributes.imageSize ];
		let target = '_self';
		if ( attributes.linkTarget ) {
			target = '_blank';
		}
		return (
			<a
				href={ post.link }
				target={ target }
				rel="noopener noreferrer"
				style={ {
					textAlign: getLogicalTextAlign( pickAlignForDevice( attributes, deviceType ) ),
				} }
				className="uagb-timeline__image"
			>
				<img src={ src[ 0 ] } alt={ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)', 'ultimate-addons-for-gutenberg' ) } />
			</a>
		);
	}
	return null;
};

export default memo( FeaturedImage );
