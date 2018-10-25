/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function PositionClasses( attributes ) {    

    var iconimgStyle_class = '';
    iconimgStyle_class += " uagb-testimonial-imgicon-style-"+attributes.iconimgStyle+ " ";   
    iconimgStyle_class += "uagb-testimonial-image-position-"+attributes.imagePosition+ " ";
    return [
         iconimgStyle_class        
    ]
}

export default PositionClasses
