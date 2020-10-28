/**
 * BLOCK: Lottie - Save Block
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"



const { Fragment } = wp.element



export default function save( props ) {
	
	const {
		block_id,	
	} = props.attributes
	

	
        return (
           
			<div
			className={ classnames(
				classnames,
				"uagb-lottie__outer-wrap",
				`uagb-block-${block_id}`
			) }	 >
				
			</div>
           
        );
}
