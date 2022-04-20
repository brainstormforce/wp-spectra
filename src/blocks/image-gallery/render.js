import classnames from 'classnames';
import React, { useLayoutEffect, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import InitialSelector from "./components/InitialSelector";
import ImageGallery from "./components/ImageGallery";
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	
	const {
		attributes,
		setAttributes,
		className,
	} = props;
	const { block_id, readyToRender, isPreview } = attributes;
	const deviceType = useDeviceType();
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/image-gallery.svg`;
	
	return (
		<>
			{ isPreview ? ( <img width='100%' src={ previewImageData } alt=''/> ) : (
				<div
					className={ classnames(
						className,
						`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
						`uagb-block-${ block_id }`
					) }
				>
					{
						readyToRender
						? (
							<ImageGallery
								attributes={ attributes }
								setAttributes={ setAttributes }
								block_id={ block_id }
							/>
						)
						: (
							<InitialSelector
								attributes={ attributes }
								setAttributes={ setAttributes }
							/>
						)
					}
				</div>
			) }
		</>
	);
};

export default React.memo( Render );
