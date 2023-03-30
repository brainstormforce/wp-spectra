import { useLayoutEffect, memo } from '@wordpress/element';
import classnames from 'classnames';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { lottieplayer } = props;

	const deviceType = useDeviceType();

	props = props.parentProps;

	const blockName = props.name.replace( 'uagb/', '' );

	const { className, attributes } = props;

	const { loop, speed, reverse, lottieURl, playOn, align } = attributes;

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
	};

	return (
		<div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
			className={ classnames(
				className,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'uagb-lottie__outer-wrap',
				`uagb-lottie__${ align }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
			) }
			onMouseEnter={ 'hover' === playOn ? handleLottieMouseEnter : toStopPlayAnimation }
			onMouseLeave={ 'hover' === playOn ? handleLottieMouseLeave : toStopPlayAnimation }
			onClick={ 'click' === playOn ? handleLottieMouseEnter : toStopPlayAnimation }
		>
			<Player
				autoplay={ true }
				ref={ lottieplayer }
				src={ lottieURl }
				loop={ loop }
				speed={ getFallbackNumber( speed, 'speed', blockName ) }
			></Player>
		</div>
	);
};

export default memo( Render );
