import classnames from 'classnames';
import { useLayoutEffect, memo } from '@wordpress/element';
import InitialSelector from './components/InitialSelector';
import ImageGallery from './components/ImageGallery';
import Lightbox from './components/LightBox';
import styles from './editor.lazy.scss';
import { useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { lightboxPreview, setLightboxPreview, attributes, setAttributes, name, deviceType } = props;
	const { block_id, readyToRender } = attributes;

	const blockProps = useBlockProps( {
		className: classnames(
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			`uagb-block-${ block_id }`
		),
	} );

	return (
		<div
			{ ...blockProps }
		>
			{ readyToRender ? (
				<>
					<ImageGallery { ...{ attributes, setAttributes, name } } />
					{ lightboxPreview && <Lightbox { ...{ attributes, setAttributes, setLightboxPreview } } /> }
				</>
			) : (
				<InitialSelector { ...{ attributes, setAttributes } } />
			) }
		</div>
	);
};

export default memo( Render );
