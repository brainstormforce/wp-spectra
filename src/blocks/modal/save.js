import React from 'react';
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save( props ) {
	const {
		block_id,
		modalTrigger,
		triggerText,
		icon,
		iconImage,
		imageSize,
		buttonText,
		buttonIcon,
		buttonIconPosition
	} = props.attributes;

	const textHTML = (
		<RichText.Content
			value={ triggerText }
			tagName="p"
			className="uagb-modal-text uagb-modal-trigger"
		/>
	);

	const iconHTML = (
		<div className='uagb-modal-trigger'>
			{ '' !== icon && (
				renderSVG( icon )
			) }
		</div>
	);

	const defaultedAlt = ( iconImage && iconImage?.alt ) ? iconImage?.alt : '';
	let imageIconHtml = '';

	if ( iconImage && iconImage.url ) {

		let url = iconImage.url;
		const size = iconImage.sizes;
		const imageSizes = imageSize;

		if (
			typeof size !== 'undefined' &&
			typeof size[ imageSizes ] !== 'undefined'
		) {
			url = size[ imageSizes ].url;
		}

		imageIconHtml = (
			<img
				src={ url }
				alt={ defaultedAlt }
				className='uagb-modal-trigger'
			/>
		);
	}

	let buttonIconOutput = '';
	if ( buttonIcon !== '' ) {
		buttonIconOutput = renderSVG( buttonIcon );
	}

	const buttonClasses = 'uagb-modal-button-link wp-block-button__link uagb-modal-trigger';

	const buttonHTML = (
		<div
			className={ classnames(
				'uagb-spectra-button-wrapper',
				'wp-block-button',
			) }
		>
			<a // eslint-disable-line jsx-a11y/anchor-is-valid
				className={ buttonClasses }
				target='_self'
				rel='noopener noreferrer'
			>
				<span className="uagb-modal-content-wrapper">
					{ buttonIconPosition === 'before' && buttonIconOutput }
					<RichText.Content
						tagName="span"
						value={ buttonText }
						className="uagb-inline-editing"
					/>
					{ buttonIconPosition === 'after' && buttonIconOutput }
				</span>
			</a>
		</div>
	)

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'wp-block-modal'
			) }
		>
			{
				'text' === modalTrigger &&
				textHTML
			}
			{
				'icon' === modalTrigger &&
				iconHTML
			}
			{
				'image' === modalTrigger &&
				imageIconHtml
			}
			{
				'button' === modalTrigger &&
				buttonHTML
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