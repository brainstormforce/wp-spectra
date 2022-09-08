import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import React from 'react';
import UAGB_Block_Icons from '@Controls/block-icons';

const UAGImage = ( props ) => {

	const {
		onSelectImage,
		backgroundImage,
		onRemoveImage,
		showVideoInput,
		label,
		disableRemove = false,
		allow = [ 'image' ],
	} = props;

	// This is used to render an icon in place of the background image when needed.
	let placeholderIcon;

	// This is used to determine the way the icon is colored.
	let iconColorType = 'stroke';

	// Need to refactor this code as per multi-image select for more diversity.
	let labelText = __( 'Image', 'ultimate-addons-for-gutenberg' );
	let selectImageLabel = __(
		'Select Image',
		'ultimate-addons-for-gutenberg'
	);
	let replaceImageLabel = __(
		'Change Image',
		'ultimate-addons-for-gutenberg'
	);
	let allowedTypes = [ 'image' ];

	if ( showVideoInput ) {
		labelText = __( 'Video', 'ultimate-addons-for-gutenberg' );
		selectImageLabel = __(
			'Select Video',
			'ultimate-addons-for-gutenberg'
		);
		replaceImageLabel = __(
			'Change Video',
			'ultimate-addons-for-gutenberg'
		);
		allowedTypes = [ 'video' ];
		placeholderIcon = UAGB_Block_Icons.video_placeholder;
		iconColorType = 'fill';
	}
	labelText = label ? label : labelText;
	labelText = false === label ? label : labelText;

	// Newer Dynamic Code here ( Currently used in Lottie Block )

	if ( label === 'Lottie Animation' ){
		// No Template Literals due to @wordpress/i18n-no-variables
		selectImageLabel = __(
			'Select Lottie Animation',
			'ultimate-addons-for-gutenberg'
		);
		replaceImageLabel = __(
			'Change Lottie Animation',
			'ultimate-addons-for-gutenberg'
		);
		allowedTypes = allow;
		placeholderIcon = UAGB_Block_Icons.lottie;
	}

	const renderMediaUploader = ( open ) => {
		const uploadType = backgroundImage?.url ? 'replace' : 'add';
		return(
			<button
				className={ `spectra-media-control__clickable spectra-media-control__clickable--${ uploadType }` }
				onClick={ open }
			>
				{ ( 'add' === uploadType ) ? (
					renderButton( uploadType )
				) : (
					<div className='uag-control-label'>{ replaceImageLabel }</div>
				) }
			</button>
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
			id={ `uagb-option-selector-${ label }` }
			label={ labelText }
		>
			<div
				className="spectra-media-control__wrapper"
				style={ {
					backgroundImage: ( ! placeholderIcon && backgroundImage?.url ) && (
						`url("${ generateBackground( backgroundImage?.url ) }")`
					),
				} }
			>
				{ ( placeholderIcon && backgroundImage?.url ) && (
					<div className={ `spectra-media-control__icon spectra-media-control__icon--${ iconColorType }` }>
						{ placeholderIcon }
					</div>
				) }
				<MediaUpload
					title={ selectImageLabel }
					onSelect={ onSelectImage }
					allowedTypes={ allowedTypes }
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
		</BaseControl>
	);
};

export default UAGImage;
