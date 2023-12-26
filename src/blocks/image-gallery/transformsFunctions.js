// custom lodash

export const get = ( object, path, defaultValue ) => {
  const keys = Array.isArray( path ) ? path : path.split( '.' );
  let result = object;

  for ( const key of keys ) {
    if ( result && typeof result === 'object' && key in result ) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }
  return result;
};

export const pick = ( object, keys ) => {
  return keys.reduce( ( acc, key ) => {
    if ( object && Object.prototype.hasOwnProperty.call( object, key ) ) {
      acc[key] = object[key];
    }
    return acc;
  }, {} );
};


export const pickRelevantMediaFiles = ( image, thumbnailSize, mediumSize, largeSize, fullSize, oldImages ) => {
    let oldThumbnailSize = '';
    let oldMediumSize = '';
    let oldLargeSize = '';
    const imageProps = pick( image, ['id', 'link'] );
    const sizes = {};
  
    if ( image.id && typeof oldImages === 'object' && oldImages !== null ) {
      for ( const k in oldImages ) {
        if ( parseInt( oldImages[k].id ) === image.id ) {
          if ( oldImages[k].customLink ) {
            imageProps.customLink = oldImages[k].customLink;
          }
          if ( oldImages[k].linkTarget ) {
            imageProps.linkTarget = oldImages[k].linkTarget;
          }
          oldThumbnailSize = oldImages[k].thumbnailUrl;
          oldMediumSize = oldImages[k].mediumUrl;
          oldLargeSize = oldImages[k].largeUrl;
        }
      }
    }
  
    // Fetch additional image 
    if ( ( image.id && !image.sizes && !image.media_details ) || ( 'medium_large' === thumbnailSize && !oldThumbnailSize ) ) {
      const theImage = wp.data.select( 'core' ).getMedia( image.id );
      if ( theImage ) {
        image = theImage;
      }
    }
  
    // Populate image properties
    imageProps.alt = get( image, ['alt_text'] ) || get( image, ['alt'] ) || '';
    imageProps.caption = image?.caption?.raw || '';
    imageProps.url = image.url || image.source_url;
    imageProps.mime = image.mime_type;
    imageProps.type = image.media_type;
    imageProps.link = image?.link || '';
    imageProps.subtype = image.mime_type.split( '/' )[1];
  
    sizes.thumbnail = {
      height: get( image, ['sizes', thumbnailSize, 'height'] ) || get( image, ['media_details', 'sizes', thumbnailSize, 'height'] ) || undefined,
      width: get( image, ['sizes', thumbnailSize, 'width'] ) || get( image, ['media_details', 'sizes', thumbnailSize, 'width'] ) || undefined,
      url: get( image, ['sizes', thumbnailSize, 'url'] ) || get( image, ['media_details', 'sizes', thumbnailSize, 'source_url'] ) || oldThumbnailSize || image.url || image.source_url,
      orientation: getOrientation(
        get( image, ['media_details', 'sizes', thumbnailSize, 'width'] ),
        get( image, ['media_details', 'sizes', thumbnailSize, 'height'] )
      ),
    };
  
    sizes.medium = {
      height: get( image, ['sizes', mediumSize, 'height'] ) || get( image, ['media_details', 'sizes', mediumSize, 'height'] ) || undefined,
      width: get( image, ['sizes', mediumSize, 'width'] ) || get( image, ['media_details', 'sizes', mediumSize, 'width'] ) || undefined,
      url: get( image, ['sizes', mediumSize, 'url'] ) || get( image, ['media_details', 'sizes', mediumSize, 'source_url'] ) || oldMediumSize || image.url || image.source_url,
      orientation: getOrientation(
        get( image, ['media_details', 'sizes', mediumSize, 'width'] ),
        get( image, ['media_details', 'sizes', mediumSize, 'height'] )
      ),
    };
  
    sizes.large = {
      height: get( image, ['sizes', largeSize, 'height'] ) || get( image, ['media_details', 'sizes', largeSize, 'height'] ) || undefined,
      width: get( image, ['sizes', largeSize, 'width'] ) || get( image, ['media_details', 'sizes', largeSize, 'width'] ) || undefined,
      url: get( image, ['sizes', largeSize, 'url'] ) || get( image, ['media_details', 'sizes', largeSize, 'source_url'] ) || oldLargeSize || image.url || image.source_url,
      orientation: getOrientation(
        get( image, ['media_details', 'sizes', largeSize, 'width'] ),
        get( image, ['media_details', 'sizes', largeSize, 'height'] )
      ),
    };
  
    sizes.full = {
      url: get( image, ['sizes', fullSize, 'url'] ) || get( image, ['media_details', 'sizes', fullSize, 'source_url'] ) || image.url || image.source_url,
      height: get( image, ['sizes', fullSize, 'height'] ) || get( image, ['media_details', 'sizes', fullSize, 'height'] ) || undefined,
      width: get( image, ['sizes', fullSize, 'width'] ) || get( image, ['media_details', 'sizes', fullSize, 'width'] ) || undefined,
      orientation: getOrientation(
        get( image, ['media_details', 'sizes', fullSize, 'width'] ),
        get( image, ['media_details', 'sizes', fullSize, 'height'] )
      ),
    };
  
    imageProps.sizes = sizes;
    
    return imageProps;
  };
  
  const getOrientation = ( width, height ) => {
    if ( width && height ) {
      return width > height ? 'landscape' : 'portrait';
    }
    return undefined;
  };
  