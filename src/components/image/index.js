import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import UAGB_Block_Icons from '@Controls/block-icons';

const UAGMediaPicker = ( props ) => {
	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	const {
		onSelectImage,
		backgroundImage,
		onRemoveImage,
		slug = 'image',
		label = __( 'Image', 'ultimate-addons-for-gutenberg' ),
		disableLabel = false,
		disableRemove = false,
		allow = [ 'image' ],
		disableDynamicContent = false
	} = props;

	// This is used to render an icon in place of the background image when needed.
	let placeholderIcon;

	// These are the localized texts that will show on the Select / Change Button and Popup.
	let selectMediaLabel, replaceMediaLabel;

	switch ( slug ) {
		case 'video':
			selectMediaLabel = __(
				'Select Video',
				'ultimate-addons-for-gutenberg'
			);
			replaceMediaLabel = __(
				'Change Video',
				'ultimate-addons-for-gutenberg'
			);
			placeholderIcon = UAGB_Block_Icons.video_placeholder;
			break;
		case 'lottie':
			selectMediaLabel = __(
				'Select Lottie Animation',
				'ultimate-addons-for-gutenberg'
			);
			replaceMediaLabel = __(
				'Change Lottie Animation',
				'ultimate-addons-for-gutenberg'
			);
			placeholderIcon = UAGB_Block_Icons.lottie;
			break;
		default:
			selectMediaLabel = __(
				'Select Image',
				'ultimate-addons-for-gutenberg'
			);
			replaceMediaLabel = __(
				'Change Image',
				'ultimate-addons-for-gutenberg'
			);
	}

	const registerImageExtender = disableDynamicContent ? null : wp.hooks.applyFilters( 'uagb.registerImageExtender', '', selectedBlock?.name, onSelectImage )
	const registerImageLinkExtender = disableDynamicContent ? null : wp.hooks.applyFilters( 'uagb.registerImageLinkExtender', '', selectedBlock?.name, 'bgImageLink', 'url' )

	const isShowImageUploader = () => {
		if( disableDynamicContent ){
			return true;
		}
		const dynamicContent = selectedBlock?.attributes?.dynamicContent
		if( dynamicContent && dynamicContent?.bgImage?.enable === true ) {
			return false
		}
		return true;
	}

	const renderMediaUploader = ( open ) => {
		const uploadType = backgroundImage?.url ? 'replace' : 'add';
		return(
			<>
				{ 'add' === uploadType  && (
					<button
						className={ `spectra-media-control__clickable spectra-media-control__clickable--${ uploadType }` }
						onClick={ open }
					>
						{
							renderButton( uploadType )
						}
					</button>
				)}
				<div className='spectra-media-control__footer'>
					<button
						className="uag-control-label"
						onClick={ open }
					>
						{ replaceMediaLabel }
					</button>
					{
						registerImageExtender
					}
				</div>
			</>
		)
	};

	const renderButton = ( buttonType ) => (
		<div className={ `spectra-media-control__button spectra-media-control__button--${ buttonType }` }>
			{ UAGB_Block_Icons[ buttonType ] }
		</div>
	);

	// This Can Be Deprecated.
	const generateBackground = ( media ) => {
		const regex = /(?:\.([^.]+))?$/;
		let mediaURL = media;
		switch ( regex.exec( String( mediaURL ) )[1] ){
			// For Lottie JSON Files.
			case 'json':
				mediaURL = '';
				break;
			// For Videos.
			case 'avi':
			case 'mpg':
			case 'mp4':
			case 'm4v':
			case 'mov':
			case 'ogv':
			case 'vtt':
			case 'wmv':
			case '3gp':
			case '3g2':
				mediaURL = '';
				break;
		}
		return mediaURL;
	}

	return (
		<BaseControl
			className="spectra-media-control"
			id={ `uagb-option-selector-${ slug }` }
			label={ label }
			hideLabelFromVision={ disableLabel }
		>
			{
				isShowImageUploader() ? (
					<>
						<div
							className="spectra-media-control__wrapper"
							style={ {
								backgroundImage: ( ! placeholderIcon && backgroundImage?.url ) && (
									`url("${ generateBackground( backgroundImage?.url ) }")`
								),
							} }
						>
							{ ( placeholderIcon && backgroundImage?.url ) && (
								<div className="spectra-media-control__icon spectra-media-control__icon--stroke">
									{ placeholderIcon }
								</div>
							) }
							<MediaUpload
								title={ selectMediaLabel }
								onSelect={ onSelectImage }
								allowedTypes={ allow }
								value={ backgroundImage }
								render={ ( { open } ) => renderMediaUploader( open ) }
							/>
							{ ( ! disableRemove && backgroundImage?.url ) && (
								<button
									className='spectra-media-control__clickable spectra-media-control__clickable--close'
									onClick={ onRemoveImage }
								>
									{ renderButton( 'close' ) }
								</button>
							) }
						</div>
						{ props.help && (
							<p className="uag-control-help-notice">{ props.help }</p>
						) }
					</>
				) : (
					registerImageExtender
				)
			}

			{
				registerImageLinkExtender
			}
		</BaseControl>
	);
};

export default UAGMediaPicker;
