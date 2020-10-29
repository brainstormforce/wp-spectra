( function( $ ) {

	UAGBLottie = {

		_run: function( attr, id ) {
            
			var animation = bodymovin.loadAnimation({
                container: document.getElementsByClassName(id)[0],
                renderer: 'svg',
                loop: attr['loop'],
                autoplay: !attr['playOnHover'], 
                path: attr['lottieURl'],
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid',
                    className:"uagb-lottie-inner-wrap"
                }
            })

            animation.setSpeed(attr['speed'])

            const reversedir = (attr['reverse']) ? -1 : 1
            animation.setDirection(reversedir)
            
            if(attr['playOnHover']){
                document.getElementsByClassName(id)[0].addEventListener("mouseenter", function() {
                    animation.play()
                });
                document.getElementsByClassName(id)[0].addEventListener("mouseleave", function() {
                    animation.stop()
                });
            }
		}
	}

} )( jQuery );