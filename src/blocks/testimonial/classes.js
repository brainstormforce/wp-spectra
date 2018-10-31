/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function PositionClasses( attributes ) {    

    var iconimgStyle_class = '';
    iconimgStyle_class += " uagb-tm__imgicon-style-"+attributes.iconimgStyle+ " ";   
    iconimgStyle_class += "uagb-tm__image-position-"+attributes.imagePosition+ " ";

    if( attributes.imagePosition == 'left' || attributes.imagePosition == 'right'){
    	iconimgStyle_class += "uagb-tm__image-aligned-"+attributes.imageAlignment+ " ";
    }

    iconimgStyle_class += "uagb-tm__bg-type-"+attributes.backgroundType+ " ";
    //iconimgStyle_class += "uagb-tm__border";

    return [
        iconimgStyle_class        
    ]
}

export default PositionClasses
