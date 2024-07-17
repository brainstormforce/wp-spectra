import { useLayoutEffect, memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { MediaPlaceholder, BlockIcon } from '@wordpress/block-editor';
import UAGB_Block_Icons from '@Controls/block-icons';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { className, attributes, setAttributes, deviceType, lottieplayer, name } = props;

	const blockName = name.replace( 'uagb/', '' );

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
		return (
			<div className="uagb-lottie_upload_wrap">
				<MediaPlaceholder
					icon={<BlockIcon icon={UAGB_Block_Icons.lottie} />}
					labels={{
						title: __( 'Lottie', 'ultimate-addons-for-gutenberg' ),
						instructions: __(
							'Allows you to add fancy animation i.e Lottie to your website.',
							'ultimate-addons-for-gutenberg'
						),
					}}
					accept={['application/json']}
					allowedTypes={['application/json']}
					value={jsonLottie}
					onSelect={onSelectLottieJSON}
					onSelectURL={( value ) => onSelectLottieURL( value )}
				/>
			</div>
		);
	}

	return (
		<div // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
			className={ classnames(
				className,
				`uagb-block-${ attributes.block_id }`,
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
