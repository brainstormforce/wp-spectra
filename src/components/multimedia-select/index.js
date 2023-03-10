import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import UAGB_Block_Icons from '@Controls/block-icons';
import UAGHelpText from '@Components/help-text';

const MultiMediaSelector = ( props ) => {

	const {
		slug = 'media',
		label = __( 'Media', 'ultimate-addons-for-gutenberg' ),
		disableLabel = false,
		mediaType,
		onSelectMedia,
		mediaGallery,
		mediaIDs,
		onRemoveMedia,
		allowedTypes,
		createGallery,
		help = false
	} = props;

	const placeholderIcon = UAGB_Block_Icons.gallery_placeholder;

	let selectorLabel, replacerLabel;

	switch ( mediaType ) {
		case 'images':
			selectorLabel = __( 'Select Images', 'ultimate-addons-for-gutenberg' );
			replacerLabel = __( 'Replace Images', 'ultimate-addons-for-gutenberg' );
			break;
		default:
			selectorLabel = __( 'Select Media', 'ultimate-addons-for-gutenberg' );
			replacerLabel = __( 'Replace Media', 'ultimate-addons-for-gutenberg' );
	}

	if ( createGallery ) {
		replacerLabel = __( 'Edit Gallery', 'ultimate-addons-for-gutenberg' );
	}

	const renderMediaUploader = ( open ) => {
		const uploadType = mediaGallery[ 0 ]?.url ? 'replace' : 'add';
		return (
			<button
				className={ `spectra-media-control__clickable spectra-media-control__clickable--${ uploadType }` }
				onClick={ open }
			>
				{ ( 'add' === uploadType ) ? (
					renderButton( uploadType )
				) : (
					<div className='uag-control-label'>{ replacerLabel }</div>
				) }
			</button>
		)
	};

	const renderButton = ( buttonType ) => (
		<div className={ `spectra-media-control__button spectra-media-control__button--${ buttonType }` }>
			{ UAGB_Block_Icons[ buttonType ] }
		</div>
	);

	return (
		<BaseControl
			className="spectra-media-control"
			id={ `uagb-option-selector-${ slug }` }
			label={ label }
			hideLabelFromVision={ disableLabel }
		>
			<div className="spectra-media-control__wrapper">
				{ mediaGallery[ 0 ]?.url && (
					<div className={ 'spectra-media-control__icon spectra-media-control__icon--stroke' }>
						{ placeholderIcon }
					</div>
				) }
				<MediaUpload
					title={ selectorLabel }
					onSelect={ onSelectMedia }
					allowedTypes={ allowedTypes ? allowedTypes : [ 'image', 'video', 'audio' ] }
					multiple={ true }
					value={ mediaIDs }
					gallery={ createGallery }
					render={ ( { open } ) => renderMediaUploader( open ) }
				/>
				{ ( onRemoveMedia && mediaGallery[ 0 ]?.url ) && (
					<button
						className='spectra-media-control__clickable spectra-media-control__clickable--close'
						onClick={ onRemoveMedia }
					>
						{ renderButton( 'close' ) }
					</button>
				) }
			</div>
			<UAGHelpText text={ help } />
		</BaseControl>
	);
};

export default MultiMediaSelector;
