import React from 'react';
import classnames from 'classnames';
import Lottie from 'react-lottie';

const Render = ( props ) => {
	const { lottieplayer } = props;

	props = props.parentProps;

	const { className, setAttributes, attributes } = props;

	const { loop, speed, reverse, lottieURl, playOn } = attributes;

	const handleLottieMouseEnter = () => {
		lottieplayer.current.anim.play();
	};

	const handleLottieMouseLeave = () => {
		lottieplayer.current.anim.stop();
	};

	const reversedir = reverse && loop ? -1 : 1;

	let play_animation = true;

	if (
		'none' === playOn ||
		'scroll' === playOn ||
		'undefined' === typeof playOn
	) {
		play_animation = false;
	}

	return (
		<>
			<div
				className={ classnames(
					className,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
					'uagb-lottie__outer-wrap'
				) }
				onMouseEnter={
					'hover' === playOn
						? handleLottieMouseEnter
						: () => ( play_animation = true )
				}
				onMouseLeave={
					'hover' === playOn
						? handleLottieMouseLeave
						: () => ( play_animation = true )
				}
				onClick={
					'click' === playOn
						? handleLottieMouseEnter
						: () => ( play_animation = true )
				}
			>
				<Lottie
					key={ lottieURl }
					ref={ lottieplayer }
					options={ {
						loop,
						path: lottieURl,
						rendererSettings: {
							preserveAspectRatio: 'xMidYMid',
							className: 'uagb-lottie-inner-wrap',
						},
					} }
					isStopped={ play_animation }
					speed={ speed }
					isClickToPauseDisabled={ true }
					direction={ reversedir }
				/>
			</div>
		</>
	);
};

export default React.memo( Render );
