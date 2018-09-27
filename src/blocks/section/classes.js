/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */
function BackgroundOptionsClasses( props ) {
    return [
        { 'has-image-background has-custom-background': 'image' === props.attributes.bgType },
        { 'has-color-background has-custom-background': 'color' === props.attributes.bgType },
        { 'has-video-background has-custom-background': 'video' === props.attributes.bgType },
    ];
}

export default BackgroundOptionsClasses;
