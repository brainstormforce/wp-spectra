/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function PositionClasses( attributes ) {    

    var iconimgStyle_class = '';
    iconimgStyle_class += " uagb-rm__imgicon-style-"+attributes.iconimgStyle+ " ";   
    iconimgStyle_class += "uagb-rm__image-position-"+attributes.imagePosition+ " ";

    if( attributes.imagePosition == 'left' || attributes.imagePosition == 'right'){
    	iconimgStyle_class += "uagb-rm__image-aligned-"+attributes.imageAlignment+ " ";
        if( attributes.stack !== "none" ){
            iconimgStyle_class +="uagb-tm-stacked-"+attributes.stack+ " "
            if( attributes.imagePosition === "right" ){
                iconimgStyle_class += "uagb-tm-reverse-order-"+attributes.stack+ " "
            }
        }
    }

    iconimgStyle_class += "uagb-rm__bg-type-"+attributes.backgroundType+ " ";

    return [
        iconimgStyle_class        
    ]
}

export default PositionClasses
