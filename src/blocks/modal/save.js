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
		inheritFromTheme,
		buttonType,
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

	const inheritAstraSecondary = inheritFromTheme && 'secondary' === buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	const buttonClasses = `uagb-modal-button-link ${ buttonTypeClass } uagb-modal-trigger`;

	const CustomTag = inheritAstraSecondary ? 'div' : 'a';

	const buttonHTML = (
		<div className={ classnames( 'uagb-spectra-button-wrapper', 'wp-block-button' ) }>
			<CustomTag // eslint-disable-line jsx-a11y/anchor-is-valid
				className={ buttonClasses }
				href={ '#' }
				onClick={ 'return false;' }
				target="_self"
				rel="noopener noreferrer"
				style={ borderStyle }
			>
				<span className="uagb-modal-content-wrapper">
					{ showBtnIcon && buttonIconPosition === 'before' && buttonIconOutput }
					<RichText.Content tagName="span" value={ buttonText } className="uagb-inline-editing" />
					{ showBtnIcon && buttonIconPosition === 'after' && buttonIconOutput }
				</span>
			</CustomTag>
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
				<div className="uagb-modal-popup-wrap">
					<div className="uagb-modal-popup-content">
						<InnerBlocks.Content />
					</div>
					{ ( 'popup-top-left' === closeIconPosition || 'popup-top-right' === closeIconPosition ) && (
						<button
							className="uagb-modal-popup-close"
							aria-label={ __( 'Close Modal', 'ultimate-addons-for-gutenberg' ) }
						>
							{ '' !== closeIcon && renderSVG( closeIcon ) }
						</button>
					) }
				</div>
				{ isPro && ( 'window-top-left' === closeIconPosition || 'window-top-right' === closeIconPosition ) && (
					<button
						className={ classnames( 'uagb-modal-popup-close', closeIconPosition ) }
						aria-label={ __( 'Close Modal', 'ultimate-addons-for-gutenberg' ) }
					>
						{ '' !== closeIcon && renderSVG( closeIcon ) }
					</button>
				) }
			</div>
		</div>
	);
}
