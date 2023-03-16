import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useLayoutEffect } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { RichText } from '@wordpress/block-editor';


export const PostButton = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, post, setAttributes } = props;

	const target = attributes.newTab ? '_blank' : '_self';

	if ( attributes.displayPostLink ) {

		return (
			<div className="uagb-post__text">
				<div
					className={ classnames(
						'uagb-post__cta',
						'wp-block-button'
					) }
				>
					<RichText
						value={ attributes.ctaText ? attributes.ctaText : __( 'Read More' ) }
						onChange={ value=> setAttributes( {ctaText: value} ) }
						className={ classnames(
							'uagb-text-link',
							'wp-block-button__link'
						) }
						href={ post.link }
						target={ target }
						rel="noopener noreferrer"
					/>
				</div>
			</div>
		);
	}
	return null;
};
