import { useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { useDeviceType } from '@Controls/getPreviewType';
import { MediaPlaceholder } from '@wordpress/block-editor';

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

	const { className, attributes, setAttributes } = props;

	const { loop, speed, reverse, lottieURl, playOn, align, jsonLottie } = attributes;

	const reversedir = reverse && loop ? -1 : 1;

	//Check if given url is valid or not for json extension.
	const validJsonPath =  lottieURl && lottieURl.endsWith( '.json' )? 'valid' : 'invalid';

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

	const onSelectLottieJSON = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { jsonLottie: null } );
			return;
		}

		setAttributes( { jsonLottie: media, lottieURl: media.url, lottieSource: 'library' } );
	};

	const onSelectLottieURL = ( mediaURL ) => {
		setAttributes( { lottieURl: mediaURL, lottieSource: 'url' } );
	};

	if ( validJsonPath === 'invalid' ) {
		const lottie_url = (
			<span className="uagb-lottie-instructions">
				{ __(
					'Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations',
					'ultimate-addons-for-gutenberg'
				) }
				<a className="uagb-lottie-instructions__lottie-url" href="https://lottiefiles.com/" target="__blank">
					{ __( 'here on this', 'ultimate-addons-for-gutenberg' ) }
				</a>
				{ __( 'website.', 'ultimate-addons-for-gutenberg' ) }
			</span>
		);
		return (
			<div className="uagb-lottie_upload_wrap">
				<MediaPlaceholder
					labels={ {
						title: __( 'Lottie', 'ultimate-addons-for-gutenberg' ),
						instructions: lottie_url,
					} }
					allowedTypes={ [ 'application/json' ] }
					accept={ [ 'application/json' ] }
					value={ jsonLottie }
					onSelectURL={ ( value ) => onSelectLottieURL( value ) }
					onSelect={ onSelectLottieJSON }
				/>
			</div>
		);
	}

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
