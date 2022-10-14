import React from 'react';
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Save( props ) {
	const {
		block_id,
		modalTrigger,
		triggerText,
		icon,
		iconImage
	} = props.attributes;

	const textHTML = (
		<RichText.Content
			value={ triggerText }
			tagName="p"
			className="uagb-modal-text uagb-modal-trigger"
		/>
	);

	const iconHTML = (
		renderSVG( icon )
	);

	const defaultedAlt = ( iconImage && iconImage?.alt ) ? iconImage?.alt : '';
	let imageIconHtml = '';

	if ( iconImage && iconImage.url ) {
		imageIconHtml = (
			<img
				src={ image.url }
				alt={ defaultedAlt }
			/>
		);
	}

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'wp-block-modal'
			) }
		>
			{ 'text' === modalTrigger &&
				<>
					{ textHTML }
				</>
			}
			{ 'icon' === modalTrigger &&
				<>
					{ iconHTML }
				</>
			}
			{ 'image' === modalTrigger && 
				<>
					<span className="uagb-modal-image-wrap">
						{ imageIconHtml }
					</span>
				</>
			}
			
			<div class="uagb-modal-popup">
				<div class="uagb-modal-popup-wrap">
					<div class="uagb-modal-popup-content">
						<InnerBlocks.Content />
					</div>
					<div class="uagb-modal-popup-close">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}