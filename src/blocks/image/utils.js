import { isBlobURL } from '@wordpress/blob';

export const pickRelevantMediaFiles = ( image, size ) => {
	const { alt, id, link, caption,url} = image
	const imageProps = {alt, id, link, caption,url};
	if( image?.sizes && image?.sizes[size] ){
		return {
			...imageProps,
			width: image?.sizes[size]?.width,
			height: image?.sizes[size]?.height,
			url: image?.sizes[size]?.url,
		}
	} else if( image?.media_details && image?.media_details?.sizes[size] ){
		return {
			...imageProps,
			width: image?.media_details?.sizes[size]?.width,
			height: image?.media_details?.sizes[size]?.height,
			url: image?.media_details?.sizes[size]?.source_url,
		}
	}
	return {
		...imageProps,
		url: image?.url
	}
};

/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */
export const isTemporaryImage = ( id, url ) => ! id && isBlobURL( url );

/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */
export const isExternalImage = ( id, url ) => url && ! id && ! isBlobURL( url );

/**
 * Checks if WP generated default image size. Size generation is skipped
 * when the image is smaller than the said size.
 *
 * @param {Object} image
 * @param {string} defaultSize
 *
 * @return {boolean} Whether or not it has default image size.
 */
export const hasDefaultSize = ( image, defaultSize ) => {
	return image.hasOwnProperty( 'sizes' ) || image.hasOwnProperty( 'url' ) || image.hasOwnProperty( 'media_details' ) || image.hasOwnProperty( 'source_url' ) || image[defaultSize] !== undefined
}

/**
 * Checks if a media attachment object has been "destroyed",
 * that is, removed from the media library. The core Media Library
 * adds a `destroyed` property to a deleted attachment object in the media collection.
 *
 * @param {number} id The attachment id.
 *
 * @return {boolean} Whether the image has been destroyed.
 */
export const isMediaDestroyed = ( id ) => {
	const attachment = wp?.media?.attachment( id ) || {};
	return attachment.destroyed;
}
