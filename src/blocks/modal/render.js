import { useEffect, useLayoutEffect, memo } from '@wordpress/element';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import getImageHeightWidth from '@Controls/getImageHeightWidth';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { excludeBlocks, defaultContent } from './modalConfig';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const { attributes, setAttributes, clientId, deviceType } = props;

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
		closeIconPosition,
		escPress,
		overlayClick,
		closeIcon,
		imgTagWidth,
		imgTagHeight,
		showBtnIcon,
		openModalAs,
		modalPosition,
		defaultTemplate,
		inheritFromTheme,
		buttonType,
	} = attributes;

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const isPro = uagb_blocks_info.spectra_pro_status;

	const inheritAstraSecondary = inheritFromTheme && 'secondary' === buttonType;
	const buttonTypeClass = inheritAstraSecondary ? 'ast-outline-button' : 'wp-block-button__link';
	//border-width is added to revert the border related styles by default.
	const borderStyle = inheritAstraSecondary ? { borderWidth: 'revert-layer' } : {};

	const CustomTag = inheritAstraSecondary ? 'div' : 'a';

	const ALLOWED_BLOCKS = wp.blocks
		.getBlockTypes()
		.map( ( block ) => block.name )
		.filter( ( blockName ) => ! excludeBlocks.includes( blockName ) );

	const TEMPLATE = [ [ 'core/paragraph', { placeholder: 'Type / to choose a block' } ] ];

	useEffect( () => {
		getImageHeightWidth( url, setAttributes );
	}, [ imageSize ] );

	useEffect( ()=>{
		if ( ! defaultTemplate ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( defaultContent ) );
			setAttributes( { defaultTemplate: true } );
		}
	},[] )

	const textHTML = (
		<RichText
			tagName="span"
			placeholder={ __( 'Add Your Text Here', 'ultimate-addons-for-gutenberg' ) }
			value={ triggerText }
			className="uagb-modal-text uagb-modal-trigger"
			onChange={ ( value ) => setAttributes( { triggerText: value } ) }
		/>
	);

	const iconHTML = <div className="uagb-modal-trigger">{ '' !== icon && renderSVG( icon, setAttributes ) }</div>;

	const defaultedAlt = iconImage?.alt ? iconImage.alt : '';
	let imageIconHtml = '';
	let url = '';

	if ( iconImage?.url ) {
		url = iconImage.url;
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
		buttonIconOutput = renderSVG( buttonIcon, setAttributes );
	}

	const buttonClasses = `uagb-modal-button-link ${buttonTypeClass} uagb-modal-trigger`;

	const buttonHTML = (
		<div className={ classnames( 'uagb-spectra-button-wrapper', 'wp-block-button' ) }>
			<CustomTag // eslint-disable-line jsx-a11y/anchor-is-valid
				className={ buttonClasses }
				target="_self"
				rel="noopener noreferrer"
				style={ borderStyle }
			>
				<span className="uagb-modal-content-wrapper">
					{ showBtnIcon && buttonIconPosition === 'before' && buttonIconOutput }
					<RichText
						tagName="span"
						placeholder={ __( 'Click Here', 'ultimate-addons-for-gutenberg' ) }
						value={ buttonText }
						className="uagb-inline-editing"
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
						allowedFormats={ [] } // Removed the WP default link/bold/italic from the toolbar for button.
					/>
					{ showBtnIcon && buttonIconPosition === 'after' && buttonIconOutput }
				</span>
			</CustomTag>
		</div>
	);

	return (
		<>
			<div
				className={ classnames(
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ block_id }`,
					'uagb-modal-wrapper'
				) }
				data-escpress={ escPress ? 'enable' : 'disable' }
				data-overlayclick={ overlayClick ? 'enable' : 'disable' }
			>
				<div className="uagb-spectra-editor-wrap">
					{ 'text' === modalTrigger && textHTML }
					{ 'icon' === modalTrigger && iconHTML }
					{ 'image' === modalTrigger && imageIconHtml }
					{ 'button' === modalTrigger && buttonHTML }
				</div>
				<div
					className={ classnames( `${ appearEffect }`, 'uagb-modal-popup', `uagb-block-${ block_id }`, {
						[ `uagb-modal-type-${ openModalAs }` ]: isPro,
						[ `uagb-modal-position-${ modalPosition }` ]: isPro && 'popup' === openModalAs,
					} ) }
				>
					<div className="uagb-modal-popup-wrap">
						<div className="uagb-modal-popup-content">
							<InnerBlocks
								template={ TEMPLATE }
								allowedBlocks={ ALLOWED_BLOCKS }
								renderAppender={ InnerBlocks.DefaultBlockAppender }
							/>
						</div>
						{ ( 'popup-top-left' === closeIconPosition || 'popup-top-right' === closeIconPosition ) && (
							<button
								className="uagb-modal-popup-close"
								aria-label={ __( 'Close Modal', 'ultimate-addons-for-gutenberg' ) }
							>
								{ '' !== closeIcon && renderSVG( closeIcon, setAttributes ) }
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
		</>
	);
};
export default memo( Render );
