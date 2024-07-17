/**
 * BLOCK: Modal - Save File - v2.12.3
 */

import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

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
		buttonIconPosition,
		appearEffect,
		closeIconPosition,
		escPress,
		overlayClick,
		closeIcon,
		imgTagWidth,
		imgTagHeight,
		showBtnIcon,
		openModalAs,
		modalPosition,
	} = props.attributes;

	const textHTML = (
		<RichText.Content value={ triggerText } tagName="span" className="uagb-modal-text uagb-modal-trigger" />
	);

	const isPro = uagb_blocks_info.spectra_pro_status;

	const iconHTML = <div className="uagb-modal-trigger">{ '' !== icon && renderSVG( icon ) }</div>;

	const defaultedAlt = iconImage && iconImage?.alt ? iconImage?.alt : '';
	let imageIconHtml = '';

	if ( iconImage && iconImage.url ) {
		let url = iconImage.url;
		const size = iconImage.sizes;
		const imageSizes = imageSize;

		if ( typeof size !== 'undefined' && typeof size[ imageSizes ] !== 'undefined' ) {
			url = size[ imageSizes ].url;
		}

		imageIconHtml = (
			<img
				src={ url }
				alt={ defaultedAlt }
				className="uagb-modal-trigger"
				width={ imgTagWidth }
				height={ imgTagHeight }
				loading="lazy"
			/>
		);
	}

	let buttonIconOutput = '';
	if ( buttonIcon !== '' ) {
		buttonIconOutput = renderSVG( buttonIcon );
	}

	const buttonClasses = 'uagb-modal-button-link wp-block-button__link uagb-modal-trigger';

	const buttonHTML = (
		<div className={ classnames( 'uagb-spectra-button-wrapper', 'wp-block-button' ) }>
			<a // eslint-disable-line jsx-a11y/anchor-is-valid
				className={ buttonClasses }
				href={ '#' }
				onClick={ 'return false;' }
				target="_self"
				rel="noopener noreferrer"
			>
				<span className="uagb-modal-content-wrapper">
					{ showBtnIcon && buttonIconPosition === 'before' && buttonIconOutput }
					<RichText.Content tagName="span" value={ buttonText } className="uagb-inline-editing" />
					{ showBtnIcon && buttonIconPosition === 'after' && buttonIconOutput }
				</span>
			</a>
		</div>
	);

	return (
		<div
			className={ classnames( `uagb-block-${ block_id }`, 'uagb-modal-wrapper' ) }
			data-escpress={ escPress ? 'enable' : 'disable' }
			data-overlayclick={ overlayClick ? 'enable' : 'disable' }
		>
			{ 'text' === modalTrigger && textHTML }
			{ 'icon' === modalTrigger && iconHTML }
			{ 'image' === modalTrigger && imageIconHtml }
			{ 'button' === modalTrigger && buttonHTML }
			<div
				className={ classnames( `${ appearEffect }`, 'uagb-modal-popup', `uagb-block-${ block_id }`, {
					[ `uagb-modal-type-${ openModalAs }` ]: isPro,
					[ `uagb-modal-position-${ modalPosition }` ]: isPro && 'popup' === openModalAs,
				} ) }
			>
				{ isPro && ( 'window-top-left' === closeIconPosition || 'window-top-right' === closeIconPosition ) && (
					<div className={ classnames( 'uagb-modal-popup-close', closeIconPosition ) }>
						{ '' !== closeIcon && renderSVG( closeIcon ) }
					</div>
				) }
				<div className="uagb-modal-popup-wrap">
					<div className="uagb-modal-popup-content">
						<InnerBlocks.Content />
					</div>
					{ ( 'popup-top-left' === closeIconPosition || 'popup-top-right' === closeIconPosition ) && (
						<div className="uagb-modal-popup-close">{ '' !== closeIcon && renderSVG( closeIcon ) }</div>
					) }
				</div>
			</div>
		</div>
	);
}
