import { useEffect, useLayoutEffect, memo } from '@wordpress/element';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

const excludeBlocks = [
'uagb/how-to-step',
'uagb/buttons-child',
'uagb/faq-child',
'uagb/content-timeline-child',
'uagb/icon-list-child',
'uagb/social-share-child',
'uagb/restaurant-menu-child',
'uagb/tabs-child',
'uagb/post-image',
'uagb/post-taxonomy',
'uagb/post-title',
'uagb/post-meta',
'uagb/post-excerpt',
'uagb/post-button',
'uagb/forms-name',
'uagb/forms-email',
'uagb/forms-hidden',
'uagb/forms-phone',
'uagb/forms-textarea',
'uagb/forms-url',
'uagb/forms-select',
'uagb/forms-radio',
'uagb/forms-checkbox',
'uagb/forms-toggle',
'uagb/forms-date',
'uagb/forms-accept',
'uagb/modal',
];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		attributes,
		setAttributes,
	} = props.parentProps;

	const ALLOWED_BLOCKS = wp.blocks.getBlockTypes().map( block => block.name ).filter( blockName => ! excludeBlocks.includes( blockName ) );


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
		defaultTemplate,
		openModalAs,
		modalPosition
	} = attributes;

	const isPro = uagb_blocks_info.spectra_pro_status;

	const deviceType = useDeviceType();

	const textHTML = (
		<RichText
			tagName="span"
			placeholder={ __(
				'Add Your Text Here',
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
				renderSVG( icon, setAttributes )
			) }
		</div>
	);

	const defaultedAlt = ( iconImage && iconImage?.alt ) ? iconImage?.alt : '';
	let imageIconHtml = '';
	let url = '';
	useEffect( () => {
		getImageHeightWidth( url, setAttributes )
	},[ imageSize ] )
	if ( iconImage && iconImage.url ) {

		url = iconImage.url;
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
				width={imgTagWidth}
				height={imgTagHeight}
				loading="lazy"
			/>
		);
	}

	let buttonIconOutput = '';
	if ( buttonIcon !== '' ) {
		buttonIconOutput = renderSVG( buttonIcon, setAttributes );
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
				href={ '#' }
				onClick={ 'return false;' }
				target='_self'
				rel='noopener noreferrer'
			>
				<span className="uagb-modal-content-wrapper">
					{ ( showBtnIcon && buttonIconPosition === 'before' ) && buttonIconOutput }
						<RichText
							tagName="span"
							placeholder={ __(
								'Click Here',
								'ultimate-addons-for-gutenberg'
							) }
							value={ buttonText }
							className="uagb-inline-editing"
							onChange={ ( value ) => setAttributes( { buttonText: value } ) }
							allowedFormats={ [] } // Removed the WP default link/bold/italic from the toolbar for button.
						/>
					{ ( showBtnIcon && buttonIconPosition === 'after' ) && buttonIconOutput }
				</span>
			</a>
		</div>
	)

	const getStepAsChild = [
		[
			'uagb/info-box',
			{
				icon: 'circle-check',
				iconBottomMargin: 15,
				infoBoxTitle: __( 'Engage Your Visitors!', 'ultimate-addons-for-gutenberg' ),
				headFontWeight: 500,
				headSpace: 10,
				headingDesc:  __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar dapibus.', 'ultimate-addons-for-gutenberg' ),
				subHeadSpace: 30,
				ctaType: 'button',
				btnBorderStyle: 'none',
				showCtaIcon: false,
				ctaText: __( 'Call To Action', 'ultimate-addons-for-gutenberg' ),
				paddingBtnTop: 14,
				paddingBtnRight: 28,
				paddingBtnBottom: 14,
				paddingBtnLeft: 28,
				btnBorderTopLeftRadius: 3,
				btnBorderTopRightRadius: 3,
				btnBorderBottomLeftRadius: 3,
				btnBorderBottomRightRadius: 3,
			},
		],
	];

	return (
		<>
			<div className={ classnames(
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				'uagb-modal-wrapper'
				) }
				data-escpress={ escPress ? 'enable' : 'disable' }
				data-overlayclick={ overlayClick ? 'enable' : 'disable' }
			>
				<div className='uagb-spectra-editor-wrap' >
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
				</div>
				<div
					className={ classnames( 
						`${ appearEffect }`,
						'uagb-modal-popup',
						`uagb-block-${ block_id }`,
						{
							[`uagb-modal-type-${openModalAs}`]: isPro,
							[`uagb-modal-position-${modalPosition}`]: isPro
						}
					) }
				>
					{ isPro && ( 'window-top-left' === closeIconPosition || 'window-top-right' === closeIconPosition ) && (
						<div className={classnames( 'uagb-modal-popup-close', closeIconPosition )}>
							{ '' !== closeIcon && ( renderSVG( closeIcon ) ) }
						</div>
					) }
					<div className="uagb-modal-popup-wrap">
						<div className="uagb-modal-popup-content">
							<InnerBlocks template={ defaultTemplate === undefined || defaultTemplate === false ? getStepAsChild : [ [ 'core/paragraph', { placeholder: 'Type / to choose a block' } ] ] } allowedBlocks={ ALLOWED_BLOCKS } renderAppender={ InnerBlocks.DefaultBlockAppender } />
						</div>
						{ ( 'popup-top-left' === closeIconPosition || 'popup-top-right' === closeIconPosition ) && (
							<div className="uagb-modal-popup-close">
								{ '' !== closeIcon && ( renderSVG( closeIcon, setAttributes ) ) }
							</div>
						) }
					</div>
				</div>
			</div>
		</>
	);
};
export default memo( Render );
