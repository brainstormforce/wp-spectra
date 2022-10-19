import React from 'react';
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
		buttonIconPosition,
		appearEffect,
		closeIconPosition
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
					{ buttonIconPosition === 'after' && buttonIconOutput }
				</span>
			</a>
		</div>
	)

	return (
		<>
			<div className={ classnames(
				`uagb-block-${ block_id }`,
				'uagb-modal-wrapper'
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
				<div 
					className={ classnames(
						`${ appearEffect }`,
						'uagb-modal-popup'
					) }
				>
					<div className="uagb-modal-popup-wrap">
						<div className="uagb-modal-popup-content">
							<InnerBlocks />
						</div>
						{ ( 'popup-top-left' === closeIconPosition || 'popup-top-right' === closeIconPosition ) && (
							<div className="uagb-modal-popup-close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
								</svg>
							</div>
						) }	
					</div>
				</div>
			</div>
		</>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
