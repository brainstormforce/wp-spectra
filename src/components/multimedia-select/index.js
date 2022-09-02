import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import React, { useLayoutEffect } from 'react';
import UAGB_Block_Icons from '@Controls/block-icons';

const MultiMediaSelector = ( props ) => {

	const {
		componentLabel,
		mediaTypeLabel,
		onSelectMedia,
		mediaGallery,
		mediaIDs,
		onRemoveMedia,
		allowedTypes,
		createGallery,
	} = props;

	const placeholderIcon = UAGB_Block_Icons.image_gallery;
	
	const mainLabel = __(
		componentLabel ? componentLabel : 'Media',
		'ultimate-addons-for-gutenberg'
	);

	const selectorLabel = __(
		`Select ${ mediaTypeLabel ? mediaTypeLabel : 'Media' }`,
		'ultimate-addons-for-gutenberg'
	);

	const replacerLabel = __(
		createGallery ? 'Edit Gallery' : `Replace ${ mediaTypeLabel ? mediaTypeLabel : 'Media' }`,
		'ultimate-addons-for-gutenberg'
	);

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
			id={ `uagb-option-selector-${ componentLabel ? componentLabel : 'multimedia' }` }
			label={ mainLabel }
		>
			<div className="spectra-media-control__wrapper">
				{ mediaGallery[ 0 ]?.url && (
					<div className={ `spectra-media-control__icon spectra-media-control__icon--stroke` }>
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
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</BaseControl>
	);

	// return (
	// 	<BaseControl
	// 		className="editor-bg-image-control"
	// 		id={ `uagb-option-selector-${ componentLabel ? componentLabel : 'multimedia' }` }
	// 		label={ mainLabel }
	// 	>
	// 		<div className="uagb-bg-image">
	// 			<MediaUpload
	// 				title={ selectorLabel }
	// 				onSelect={ onSelectMedia }
	// 				allowedTypes={ allowedTypes ? allowedTypes : [ 'image', 'video', 'audio' ] }
	// 				multiple={ true }
	// 				value={ mediaIDs }
	// 				gallery={ createGallery }
	// 				render={ ( { open } ) => (
	// 					<Button isSecondary onClick={ open }>
	// 						{ ! mediaGallery[ 0 ]?.url
	// 							? selectorLabel
	// 							: replacerLabel }
	// 					</Button>
	// 				) }
	// 			/>
	// 			{ onRemoveMedia && (
	// 				<Button
	// 					className="uagb-rm-btn"
	// 					onClick={ onRemoveMedia }
	// 					isLink
	// 					isDestructive
	// 				>
	// 					{ removerLabel }
	// 				</Button>
	// 			) }
	// 			{ props.help && (
	// 				<p className="uag-control-help-notice">{ props.help }</p>
	// 			) }
	// 		</div>
	// 	</BaseControl>
	// );
};

export default MultiMediaSelector;
