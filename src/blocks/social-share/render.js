/**
 * BLOCK: Social Share - Editor Render.
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import { useLayoutEffect, memo } from '@wordpress/element';
import styles from './editor.lazy.scss';

const ALLOWED_BLOCKS = [ 'uagb/social-share-child' ];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { attributes, deviceType } = props;

	const { className, social_layout, block_id } = attributes;

	const getSocialShareTemplate = [
		[
			'uagb/social-share-child',
			{
				type: 'facebook',
				image_icon: 'icon',
				icon: 'fab fa-facebook',
				image: '',
				icon_color: '#3b5998',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
		[
			'uagb/social-share-child',
			{
				type: 'twitter',
				image_icon: 'icon',
				icon: 'fab fa-twitter-square',
				image: '',
				icon_color: '#55acee',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
		[
			'uagb/social-share-child',
			{
				type: 'pinterest',
				image_icon: 'icon',
				icon: 'fab fa-pinterest-square',
				image: '',
				icon_color: '#bd081c',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
		[
			'uagb/social-share-child',
			{
				type: 'linkedin',
				image_icon: 'icon',
				icon: 'fab fa-linkedin',
				image: '',
				icon_color: '#0077b5',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
	];

	return (
		<div
			className={ classnames(
				className,
				'uagb-social-share__outer-wrap',
				`uagb-social-share__layout-${ social_layout }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks
				template={ getSocialShareTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ social_layout }
			/>
		</div>
	);
};

export default memo( Render );
