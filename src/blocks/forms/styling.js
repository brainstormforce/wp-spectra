/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

    const {
        block_id,
        buttonAlign,
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}
    
    selectors = {
        " .uagb-forms-main-form .uagb-forms-main-submit-button-wrap" : {
            'text-align' : buttonAlign
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
