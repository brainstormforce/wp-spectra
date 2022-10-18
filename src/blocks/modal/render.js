import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

const propTypes = {};

const defaultProps = {};

const Render = ( props ) => {
	const {
		attributes,
		setAttributes,
	} = props.parentProps;

	const {
		block_id,
		triggerText,
		icon,
		iconImage,
		modalTrigger,
		imageSize,
		buttonText,
		buttonIcon,
		buttonIconPosition
	} = attributes

	const textHTML = (
		<RichText
			tagName="p"
			placeholder={ __(
				'Click here',
				'ultimate-addons-for-gutenberg'
			) }
			value={ triggerText }
			className="uagb-modal-text uagb-modal-trigger"
			onChange={ ( value ) => setAttributes( { triggerText: value } ) }
		/>
	);

	const iconHTML = (
		<>
			{ '' !== icon && (
				renderSVG( icon )
			) }
		</>
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
			/>
		);
	}

	let buttonIconOutput = '';
	if ( buttonIcon !== '' ) {
		buttonIconOutput = renderSVG( buttonIcon );
	}
	
	const buttonClasses = 'uagb-modal-button-link wp-block-button__link';

	const buttonHTML = (
		<div
			className={ classnames(
				'uagb-spectra-button-wrapper',
				'wp-block-button'
			) }
		>
			<a // eslint-disable-line jsx-a11y/anchor-is-valid
				className={ buttonClasses }
				target='_self'
				rel='noopener noreferrer'
			>
				<span className="uagb-modal-content-wrapper">
					{ buttonIconPosition === 'before' && buttonIconOutput }
						<RichText
							tagName="span"
							placeholder={ __(
								'Click here',
								'ultimate-addons-for-gutenberg'
							) }
							value={ buttonText }
							className="uagb-inline-editing"
							onChange={ ( value ) => setAttributes( { buttonText: value } ) }
						/>
					{ buttonIconPosition === 'before' && buttonIconOutput }
				</span>
			</a>
		</div>
	)

	return (
		<React.Fragment>
			<div className={ classnames(
				`uagb-block-${ block_id }`,
				'wp-block-uagb-modal'
			) }>
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
							<InnerBlocks />
						</div>
						<div class="uagb-modal-popup-close">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
