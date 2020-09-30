/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

    const {
        block_id,       
        activeColor
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}
    
    selectors = {       
        " .uagb-switch input:checked + .uagb-slider" : {
            'background-color' : activeColor
        },
        " .uagb-switch input:focus + .uagb-slider" : {
            "box-shadow": "0 0 1px" + activeColor
          }
    }

    var styling_css = '';
    var id = `.uagb-block-${ block_id }`

    styling_css = generateCSS( selectors, id )
    
    styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

    return styling_css
}

export default styling
