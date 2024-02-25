import { ResizableBox, Spinner, ToolbarButton } from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	MediaReplaceFlow,
	store as blockEditorStore,
	__experimentalImageEditor as ImageEditor,
} from '@wordpress/block-editor';
import { useMemo, useEffect, useState, useRef } from '@wordpress/element';
import { __, sprintf, isRTL } from '@wordpress/i18n';
import { getFilename } from '@wordpress/url';
import { crop } from '@wordpress/icons';
import { useDeviceType } from '@Controls/getPreviewType';
import useClientWidth from './use-client-width';
import { MIN_SIZE, ALLOWED_MEDIA_TYPES } from './constants';
import { isMediaDestroyed } from './utils';

export default function Image( {
	temporaryURL,
	attributes,
	attributes: {
		url = '',
		urlTablet = '',
		urlMobile = '',
		alt,
		title,
		align,
		id,
		width,
		widthTablet,
		widthMobile,
		height,
		heightTablet,
		heightMobile,
		disableLazyLoad,
	},
	setAttributes,
	isSelected,
	onCloseModal,
	onSelectImage,
	onSelectURL,
	onUploadError,
	containerRef,
	context,
	clientId,
	onImageLoadError,
} ) {
	const imageRef = useRef();
	const { allowResize = true } = context;
	const { toggleSelection } = useDispatch( blockEditorStore );
	const deviceType = useDeviceType();

	const { multiImageSelection } = useSelect(
		( select ) => {
			const { getMultiSelectedBlockClientIds, getBlockName } = select( blockEditorStore );
			const multiSelectedClientIds = getMultiSelectedBlockClientIds();
			return {
				multiImageSelection:
					multiSelectedClientIds.length &&
					multiSelectedClientIds.every( ( _clientId ) => getBlockName( _clientId ) === 'uagb/image' ),
			};
		},
		[ id, isSelected ]
	);

	const { imageEditing, maxWidth } = useSelect(
		( select ) => {
			const { getSettings } = select( blockEditorStore );
			// eslint-disable-next-line no-shadow
			const { imageEditing, maxWidth } = getSettings();
			return {
				imageEditing,
				maxWidth,
			};
		},
		[ clientId ]
	);

	const isLargeViewport = useViewportMatch( 'medium' );
	const isWideAligned = [ 'wide', 'full' ].includes( align );
	const [ { loadedNaturalWidth, loadedNaturalHeight }, setLoadedNaturalSize ] = useState( {} );
	const [ isEditingImage, setIsEditingImage ] = useState( false );
	const clientWidth = useClientWidth( containerRef, [ align ] );
	const isResizable = allowResize && ! ( isWideAligned && isLargeViewport );

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// width and height is otherwise lost when switching between alignments.
	const { naturalWidth, naturalHeight } = useMemo( () => {
		const getWidth = imageRef.current?.naturalWidth || loadedNaturalWidth || undefined;
		const getHeight = imageRef.current?.naturalHeight || loadedNaturalHeight || undefined;
		
		if( ! attributes.naturalWidth || ! attributes.naturalHeight ){
			setAttributes( { naturalWidth : getWidth, naturalHeight : getHeight } );
		}

		return {
			naturalWidth : getWidth,
			naturalHeight : getHeight,
		};
	}, [ loadedNaturalWidth, loadedNaturalHeight, imageRef.current?.complete ] );

	const filename = getFilename( url );
	let defaultedAlt;
	let defaultedTitle;

	if ( alt ) {
		defaultedAlt = alt;
	} else if ( filename ) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__( 'This image has an empty alt attribute; its file name is %s', 'ultimate-addons-for-gutenberg' ),
			filename
		);
	} else {
		defaultedAlt = __( 'This image has an empty alt attribute', 'ultimate-addons-for-gutenberg' );
	}

	if ( title ) {
		defaultedTitle = title;
	} else if ( filename ) {
		defaultedTitle = sprintf(
			/* translators: %s: file name */
			__( 'This image has an empty title attribute; its file name is %s', 'ultimate-addons-for-gutenberg' ),
			filename
		);
	} else {
		defaultedTitle = __( 'This image has an empty title attribute', 'ultimate-addons-for-gutenberg' );
	}

	// Check if table and mobile devices has different images then set srcset attribute add in image tag.
	const shouldSrcSet = id && url && ( urlTablet || urlMobile ) && ( url !== urlTablet || url !== urlMobile );

	let img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		<>
			<img
				srcSet={ shouldSrcSet ? `${ temporaryURL || url } ${ urlTablet ? ',' + urlTablet + ' 780w' : '' }${
					urlMobile ? ', ' + urlMobile + ' 360w' : ''
				}` : null }
				src={ temporaryURL || url }
				alt={ defaultedAlt }
				title= { defaultedTitle }
				onLoad={ ( event ) => {
					setLoadedNaturalSize( {
						loadedNaturalWidth: event.target?.naturalWidth,
						loadedNaturalHeight: event.target?.naturalHeight,
					} );
				} }
				ref={ imageRef }
				loading={ disableLazyLoad ? undefined : 'lazy' }
			/>
			{ temporaryURL && <Spinner /> }
		</>
	);

	let imageWidthWithinContainer;
	let imageHeightWithinContainer;

	if ( clientWidth && naturalWidth && naturalHeight ) {
		const exceedMaxWidth = naturalWidth > clientWidth;
		const ratio = naturalHeight / naturalWidth;
		imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
		imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
	}

	useEffect( () => {
		if ( ! isSelected ) {
			setIsEditingImage( false );
		}
		if ( isSelected && isMediaDestroyed( id ) ) {
			onImageLoadError();
		}
	}, [ isSelected ] );

	const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
	const allowCrop = ! multiImageSelection && canEditImage && ! isEditingImage;

	function onResizeStart() {
		toggleSelection( false );
	}

	function onResizeStop() {
		toggleSelection( true );
	}

	if ( canEditImage && isEditingImage ) {
		img = (
			<ImageEditor
				id={ id }
				url={ url }
				width={ width }
				height={ height }
				clientWidth={ clientWidth }
				naturalHeight={ naturalHeight }
				naturalWidth={ naturalWidth }
				onSaveImage={ ( imageAttributes ) =>
					setAttributes( imageAttributes )
				}
				onFinishEditing={ () => {
					setIsEditingImage( false );
				} }
			/>
		);
	} else if ( ! isResizable || ! imageWidthWithinContainer ) {
		if ( 'full' !== align ) {
			img = <div>{ img }</div>;
		}
	} else {
		const currentWidth = width || imageWidthWithinContainer;
		const currentHeight = height || imageHeightWithinContainer;

		const ratio = naturalWidth / naturalHeight;
		const minWidth = naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * ratio;
		const minHeight = naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / ratio;

		// With the current implementation of ResizableBox, an image needs an
		// explicit pixel value for the max-width. In absence of being able to
		// set the content-width, this max-width is currently dictated by the
		// vanilla editor style. The following variable adds a buffer to this
		// vanilla style, so 3rd party themes have some wiggleroom. This does,
		// in most cases, allow you to scale the image beyond the width of the
		// main column, though not infinitely.
		// @todo It would be good to revisit this once a content-width variable
		// becomes available.
		const maxWidthBuffer = maxWidth * 2.5;

		let showRightHandle = false;
		let showLeftHandle = false;

		/* eslint-disable no-lonely-if */
		if ( align === 'center' ) {
			// When the image is centered, show both handles.
			showRightHandle = true;
			showLeftHandle = true;
		} else if ( isRTL() ) {
			// In RTL mode the image is on the right by default.
			// Show the right handle and hide the left handle only when it is
			// aligned left. Otherwise always show the left handle.
			if ( align === 'left' ) {
				showRightHandle = true;
			} else {
				showLeftHandle = true;
			}
		} else {
			// Show the left handle and hide the right handle only when the
			// image is aligned right. Otherwise always show the right handle.
			if ( align === 'right' ) {
				showLeftHandle = true;
			} else {
				showRightHandle = true;
			}
		}
		/* eslint-enable no-lonely-if */

		let resWidth = '';
		let resHeight = '';
		if ( deviceType === 'Tablet' ) {
			resWidth = widthTablet ? widthTablet : width;
			resHeight = heightTablet ? heightTablet : height;
		} else if ( deviceType === 'Mobile' ) {
			if ( widthMobile ) {
				resWidth = widthMobile;
			} else {
				resWidth = widthTablet ? widthTablet : width;
			}
			if ( heightMobile ) {
				resHeight = heightMobile;
			} else {
				resHeight = heightTablet ? heightTablet : height;
			}
		} else {
			resWidth = width;
			resHeight = height;
		}

		img = (
			<ResizableBox
				size={ {
					width: resWidth ? resWidth : 'auto',
					height: resHeight ? resHeight : 'auto',
				} }
				showHandle={ isSelected }
				minWidth={ minWidth }
				maxWidth={ maxWidthBuffer }
				minHeight={ minHeight }
				maxHeight={ maxWidthBuffer / ratio }
				lockAspectRatio
				enable={ {
					top: false,
					right: showRightHandle,
					bottom: true,
					left: showLeftHandle,
				} }
				onResizeStart={ onResizeStart }
				onResizeStop={ ( event, direction, elt, delta ) => {
					onResizeStop();
					if ( deviceType === 'Tablet' ) {
						const tabletWidth = widthTablet ? widthTablet : 780;
						setAttributes( {
							widthTablet: Math.abs( parseInt( tabletWidth + delta.width, 10 ) ),
							heightTablet: Math.abs( parseInt( heightTablet + delta.height, 10 ) ),
						} );
					} else if ( deviceType === 'Mobile' ) {
						const mobileWidth = widthMobile ? widthMobile : 320;
						setAttributes( {
							widthMobile: Math.abs( parseInt( mobileWidth + delta.width, 10 ) ),
							heightMobile: Math.abs( parseInt( heightMobile + delta.height, 10 ) ),
						} );
					} else {
						setAttributes( {
							width: Math.abs( parseInt( currentWidth + delta.width, 10 ) ),
							height: Math.abs( parseInt( currentHeight + delta.height, 10 ) ),
						} );
					}
				} }
			>
				{ img }
			</ResizableBox>
		);
	}

	const controls = (
		<>
			<BlockControls group="block">
				{ allowCrop && (
					<ToolbarButton
						onClick={ () => setIsEditingImage( true ) }
						icon={ crop }
						label={ __( 'Crop', 'ultimate-addons-for-gutenberg' ) }
					/>
				) }
			</BlockControls>
			{ ! multiImageSelection && ! isEditingImage && (
				<BlockControls group="other">
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						accept="image/*"
						onSelect={ onSelectImage }
						onSelectURL={ onSelectURL }
						onError={ onUploadError }
						onCloseModal={ onCloseModal }
					/>
				</BlockControls>
			) }
		</>
	);

	return (
		<>
			{ /* Hide controls during upload to avoid component remount,
			which causes duplicated image upload. */ }
			{ ! temporaryURL && controls }
			{ img }
		</>
	);
}
