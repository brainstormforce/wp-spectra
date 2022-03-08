import { __ } from '@wordpress/i18n';
import { BaseControl, Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';

const MultiMediaSelector = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

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
	const removerLabel = __(
		createGallery ? 'Remove Gallery' : `Remove ${ mediaTypeLabel ? `All ${ mediaTypeLabel }` : 'Media' }`,
		'ultimate-addons-for-gutenberg'
	);

	return (
		<BaseControl
			className="editor-bg-image-control"
			id={ `uagb-option-selector-${ componentLabel ? componentLabel : 'multimedia' }` }
			label={ mainLabel }
		>
			<div className="uagb-bg-image">
				<MediaUpload
					title={ selectorLabel }
					onSelect={ onSelectMedia }
					allowedTypes={ allowedTypes ? allowedTypes : [ 'image', 'video', 'audio' ] }
					multiple={ true }
					value={ mediaIDs }
					gallery={ createGallery }
					render={ ( { open } ) => (
						<Button isSecondary onClick={ open }>
							{ ! mediaGallery[ 0 ]?.url
								? selectorLabel
								: replacerLabel }
						</Button>
					) }
				/>
				{ onRemoveMedia && (
					<Button
						className="uagb-rm-btn"
						onClick={ onRemoveMedia }
						isLink
						isDestructive
					>
						{ removerLabel }
					</Button>
				) }
				{ props.help && (
					<p className="uag-control-help-notice">{ props.help }</p>
				) }
			</div>
		</BaseControl>
	);
};

export default MultiMediaSelector;
