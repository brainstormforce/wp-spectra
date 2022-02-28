import React, { Suspense, useLayoutEffect } from 'react';
import classnames from 'classnames';
import lazyLoader from '@Controls/lazy-loader';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { lottieplayer } = props;

	props = props.parentProps;

	const { className, attributes } = props;

	const { isPreview, loop, speed, reverse, lottieURl, playOn, align } = attributes;

	const reversedir = reverse && loop ? -1 : 1;

	const handleLottieMouseEnter = () => {
		lottieplayer.current.setPlayerDirection( reversedir );
		lottieplayer.current.play();
	};

	const handleLottieMouseLeave = () => {
		lottieplayer.current.setPlayerDirection( reversedir );
		lottieplayer.current.stop();
	};

	const toStopPlayAnimation = () => {
		lottieplayer.current.stop();
	}
	const previewImageData = '';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
			className={ classnames(
				className,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'uagb-lottie__outer-wrap',
				`uagb-lottie__${ align }`
			) }
			onMouseEnter={
				'hover' === playOn
					? handleLottieMouseEnter
					: toStopPlayAnimation
			}
			onMouseLeave={
				'hover' === playOn
					? handleLottieMouseLeave
					: toStopPlayAnimation
			}
			onClick={
				'click' === playOn
					? handleLottieMouseEnter
					: toStopPlayAnimation
			}
		>
			<Suspense fallback={ lazyLoader() }>
				<Player
				    autoplay={ true }
					ref={ lottieplayer }
					src={ lottieURl }
        			loop={loop}
					speed={ speed }
				>
				</Player>
			</Suspense>
		</div>
	);
};

export default React.memo( Render );
