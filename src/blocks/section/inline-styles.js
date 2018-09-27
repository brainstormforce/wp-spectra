/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function BackgroundOptionsInlineStyles( props ) {
    return {
        backgroundColor: 'color' === props.attributes.bgType ? props.attributes.bgColor : null,
        backgroundImage: 'image' === props.attributes.bgType && props.attributes.bgImage ? `url(${ props.attributes.bgImage.url })` : null,
    };
}

export default BackgroundOptionsInlineStyles;
