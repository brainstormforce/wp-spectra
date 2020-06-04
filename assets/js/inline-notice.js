window.addEventListener(

    'load', function () {

	var InlineNoticeElements = document.getElementsByClassName( 'wp-block-uagb-inline-notice' );

	InlineNoticeElements[0].addEventListener("click", function() {

				InlineNoticeElements[0].style.display='none'

		 });

    }

);