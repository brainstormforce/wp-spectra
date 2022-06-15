import { __ } from '@wordpress/i18n';
import { BaseControl, Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import React, { useLayoutEffect } from 'react';
import UAGB_Block_Icons from '@Controls/block-icons';
// import styles from './editor.lazy.scss';

const UAGImage = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	// useLayoutEffect( () => {
	// 	styles.use();
	// 	return () => {
	// 		styles.unuse();
	// 	};
	// }, [] );

	const {
		onSelectImage,
		backgroundImage,
		onRemoveImage,
		showVideoInput,
		label,
		disableRemove = false,
		allow = [ 'image' ],
	} = props;
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
	let removeImageLabel = __(
		'Remove Image',
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
		removeImageLabel = __(
			'Remove Video',
			'ultimate-addons-for-gutenberg'
		);
		allowedTypes = [ 'video' ];
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
		removeImageLabel = __(
			'Remove Lottie Animation',
			'ultimate-addons-for-gutenberg'
		);
		allowedTypes = allow;
	}
	

	// return (
	// 	<BaseControl
	// 		className="editor-bg-image-control"
	// 		id={ `uagb-option-selector-${ label }` }
	// 		label={ labelText }
	// 	>
	// 		<div className="uagb-bg-image">
	// 			<MediaUpload
	// 				title={ selectImageLabel }
	// 				onSelect={ onSelectImage }
	// 				allowedTypes={ allowedTypes }
	// 				value={ backgroundImage }
	// 				render={ ( { open } ) => (
	// 					<Button isSecondary onClick={ open }>
	// 						{ ! backgroundImage?.url
	// 							? selectImageLabel
	// 							: replaceImageLabel }
	// 					</Button>
	// 				) }
	// 			/>
	// 			{ ( ! disableRemove && backgroundImage?.url ) && (
	// 				<Button
	// 					className="uagb-rm-btn"
	// 					onClick={ onRemoveImage }
	// 					isLink
	// 					isDestructive
	// 				>
	// 					{ removeImageLabel }
	// 				</Button>
	// 			) }
	// 			{ props.help && (
	// 				<p className="uag-control-help-notice">{ props.help }</p>
	// 			) }
	// 		</div>
	// 	</BaseControl>
	// );
	
	const renderMediaUploader = ( open ) => {
		const uploadType = backgroundImage?.url ? 'replace' : 'add';
		return(
			<div
				className={ `spectra-media-control__clickable spectra-media-control__clickable--${ uploadType }` }
				onClick={ open }
			>
				{ ( 'add' === uploadType ) ? (
					renderButton( uploadType )
				) : (
					<div className='uag-control-label'>{ replaceImageLabel }</div>
				) }
			</div>
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
			id={ `uagb-option-selector-${ label }` }
			label={ labelText }
		>
			<div
				className="spectra-media-control__wrapper"
				style={ {
					backgroundImage: backgroundImage?.url ? `url("${ backgroundImage?.url }")` : 'none',
				} }
			>
				<MediaUpload
					title={ selectImageLabel }
					onSelect={ onSelectImage }
					allowedTypes={ allowedTypes }
					value={ backgroundImage }
					render={ ( { open } ) => renderMediaUploader( open ) }
				/>
	 			{ ( ! disableRemove && backgroundImage?.url ) && (
					<div
						className='spectra-media-control__clickable spectra-media-control__clickable--close'
						onClick={ onRemoveImage }
					>
	 					{ renderButton( 'close' ) }
	 				</div>
	 			) }
			</div>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</BaseControl>
	);
};

export default UAGImage;
