// eslint-disable-next-line no-undef
UAGBLottie = {
	_run( attr, id ) {
		const animation = bodymovin.loadAnimation( {
			container: document.getElementsByClassName( id )[ 0 ],
			renderer: 'svg',
			loop: attr.loop,
			autoplay: 'none' === attr.playOn ? true : false,
			path: attr.lottieURl,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid',
				className: 'uagb-lottie-inner-wrap',
			},
		} );

		animation.setSpeed( attr.speed );

		const reversedir = attr.reverse && attr.loop ? -1 : 1;

		animation.setDirection( reversedir );
		const scope = document.getElementsByClassName( id );
		if ( scope.length === 0 ) {
			return;
		}
		if ( 'hover' === attr.playOn ) {
			scope[ 0 ].addEventListener( 'mouseenter', function () {
				animation.play();
			} );
			scope[ 0 ].addEventListener( 'mouseleave', function () {
				animation.stop();
			} );
		} else if ( 'click' === attr.playOn ) {
			scope[ 0 ].addEventListener( 'click', function () {
				animation.stop();
				animation.play();
			} );
		} else if ( 'scroll' === attr.playOn ) {
			window.addEventListener( 'scroll', function () {
				animation.stop();
				animation.play();
			} );
		}
	},
};
