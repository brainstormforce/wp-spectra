/**
 * BLOCK: Lottie - Save Block
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"


import Lottie from 'react-lottie';

const { Fragment } = wp.element



export default function save( props ) {
	
	const {
		block_id,
		height,
		width,
		backgroundColor,
		loop,
		count,
		speed,
		reverse,
		playOnHover,
		jsonLottie,
		lottieURl
		
	} = props.attributes
	

	const defaultOptions = {
		loop: loop,
		autoplay: true,             
		animationData: lottieURl,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	  };

	//   const handleLottieMouseEnter = () => {         
	// 	console.log(this);   
	// 	this.lottieplayer.current.anim.play();
	// };

	// const handleLottieMouseLeave = () => {
	// 	this.lottieplayer.current.anim.stop();
	// };

	const reversedir = (reverse) ? -1 : 1
        return (
           
			<div
			className={ classnames(
				classnames,
				"uagb-lottie__outer-wrap",
				`uagb-block-${block_id}`
			) }
			onMouseEnter={ playOnHover ? handleLottieMouseEnter : ()=> null }
			onMouseLeave={ playOnHover ? handleLottieMouseLeave : ()=> null } >
				<Lottie 
				
					options={{                            
						loop: loop,
						path: lottieURl,
						rendererSettings: {
							preserveAspectRatio: 'xMidYMid',
							className:"uagb-lottie-inner-wrap"
						}
					}}
					isStopped={playOnHover}                        
					height={height}
					width={width}
					speed={speed}
					isClickToPauseDisabled = {true}
					direction={`${reversedir}`}
					style={{backgroundColor:backgroundColor}}                       
				/>
			</div>
           
        );
}
