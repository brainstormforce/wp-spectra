import { __ } from '@wordpress/i18n';
import { BaseControl, Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';

const UAGImage = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		onSelectImage,
		backgroundImage,
		onRemoveImage,
		showVideoInput,
		label,
	} = props;
	let labelText = __( 'Image', 'ultimate-addons-for-gutenberg' );
	let selectImageLabel = __(
		'Select Image',
		'ultimate-addons-for-gutenberg'
	);
	let replaceImageLabel = __(
		'Replace Image',
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
			'Replace Video',
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
	return (
		<BaseControl
			className="editor-bg-image-control"
			id={ `uagb-option-selector-${ label }` }
			label={ labelText }
		>
			<div className="uagb-bg-image">
				<MediaUpload
					title={ selectImageLabel }
					onSelect={ onSelectImage }
					allowedTypes={ allowedTypes }
					value={ backgroundImage }
					render={ ( { open } ) => (
						<Button isSecondary onClick={ open }>
							{ ! backgroundImage?.url
								? selectImageLabel
								: replaceImageLabel }
						</Button>
					) }
				/>
				{ backgroundImage?.url && (
					<Button
						className="uagb-rm-btn"
						onClick={ onRemoveImage }
						isLink
						isDestructive
					>
						{ removeImageLabel }
					</Button>
				) }
				{ props.help && (
					<p className="uag-control-help-notice">{ props.help }</p>
				) }
			</div>
		</BaseControl>
	);
};

export default UAGImage;
