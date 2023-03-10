import { useEffect, useState,useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import UAGB_Block_Icons from '@Controls/block-icons';
import apiFetch from '@wordpress/api-fetch';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import UAGConfirmPopup from '../popup-confirm';
import UAGHelpText from '@Components/help-text';

const UAGMediaPicker = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );

	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	const uagLocalStorage = getUAGEditorStateLocalStorage();
	const blockNameForHook = selectedBlock?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return

	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	const [ isOpen, setOpen ] = useState( false );

	const {
		onSelectImage,
		backgroundImage,
		onRemoveImage,
		slug = 'image',
		label = __( 'Image', 'ultimate-addons-for-gutenberg' ),
		disableLabel = false,
		disableRemove = false,
		allow = [ 'image' ],
		disableDynamicContent = false,
		help = false
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
		case 'svg':
			selectMediaLabel = __(
				'Upload SVG',
				'ultimate-addons-for-gutenberg'
			);
			replaceMediaLabel = __(
				'Change SVG',
				'ultimate-addons-for-gutenberg'
			);
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

	const onConfirm = ( open ) => {
		const formData = new window.FormData();
		formData.append( 'action', 'uagb_svg_confirmation' );
		formData.append( 'svg_nonce', uagb_blocks_info.uagb_svg_confirmation_nonce );
		formData.append( 'confirmation', 'yes' );

		apiFetch( {
			url: uagb_blocks_info.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			if( response.success ) {
				uagLocalStorage.setItem( 'uagSvgConfirmation', JSON.stringify( 'yes' ) );
				open();
			}
		} );
	}

	const OpenMediaUploader = ( open ) => {
		const svgConfirmation = getUAGEditorStateLocalStorage( 'uagSvgConfirmation' );
		if( slug !== 'svg' || svgConfirmation === 'yes' ){
			open();
			return;
		}

		setOpen( true )
	}

	const renderMediaUploader = ( open ) => {
		const uploadType = backgroundImage?.url ? 'replace' : 'add';
		return(
			<>
				{ 'add' === uploadType  && (
					<button
						className={ `spectra-media-control__clickable spectra-media-control__clickable--${ uploadType }` }
						onClick={() => ( OpenMediaUploader( open ) ) }
					>
						{
							renderButton( uploadType )
						}
					</button>
				)}
				<div className='spectra-media-control__footer'>
					<button
						className="uag-control-label"
						onClick={() => ( OpenMediaUploader( open ) ) }
					>
						{ replaceMediaLabel }
					</button>
					{
						registerImageExtender
					}
				</div>
				{ slug === 'svg' && (
					<UAGConfirmPopup
						isOpen = { isOpen }
						setOpen = { setOpen }
						onConfirm = { onConfirm }
						title = { __( 'Upload SVG?', 'ultimate-addons-for-gutenberg' ) }
						description = { __( 'Upload SVG can be potentially risky. Are you sure?', 'ultimate-addons-for-gutenberg' ) }
						confirmLabel = { __( 'Upload Anyway', 'ultimate-addons-for-gutenberg' )}
						cancelLabel = { __( 'Cancel', 'ultimate-addons-for-gutenberg' )}
						executable = { open }
					/>
				)}
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

	const controlName = getIdFromString( props?.label );
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

	return (
		<div
			ref={panelRef}
			className="components-base-control"
		>
			{
				controlBeforeDomElement
			}
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
									backgroundImage: ( ! placeholderIcon && backgroundImage?.url && ! backgroundImage?.svg ) && (
										`url("${ generateBackground( backgroundImage?.url ) }")`
									),
								} }
							>
								{ ( placeholderIcon && backgroundImage?.url ) && (
									<div className="spectra-media-control__icon spectra-media-control__icon--stroke">
										{ placeholderIcon }
									</div>
								) }
								{ ( backgroundImage?.svg ) && (
									<div className="spectra-media-control__icon spectra-media-control__icon--stroke" dangerouslySetInnerHTML={ { __html:backgroundImage.svg } }>
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
							<UAGHelpText text={ help } />
						</>
					) : (
						registerImageExtender
					)
				}
			</BaseControl>
			{
				registerImageLinkExtender
			}
			{
				controlAfterDomElement
			}
		</div>
	);
};

export default UAGMediaPicker;
