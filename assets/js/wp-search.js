window.addEventListener(
    'load', function () {

        var searchBlocks = document.getElementsByClassName( 'uagb-wp-search__outer-wrap' );
		for ( var item = 0;  item < searchBlocks.length; item++ ) {
            var searchIcon = searchBlocks[item].querySelectorAll( '.uagb-wp-search-icon-wrap' );
            var input = searchBlocks[item].querySelectorAll( '.uagb-search-form__input' );
            searchIcon[0].addEventListener("click", function() {
                this.parentElement.getElementsByClassName( 'uagb-search-form__input' )[0].focus();
                }
            );
            input[0].addEventListener("focus", function() {
                    if ( ! this.parentElement.classList.contains( 'wp-search-active' ) ) {
                        this.parentElement.classList.add( 'wp-search-active' )
                    }
                }
            );
            input[0].addEventListener("blur", function() {
                    if ( this.parentElement.classList.contains( 'wp-search-active' ) ) {
                        this.parentElement.classList.remove( 'wp-search-active' )
                    }
                }
            );
         }
    }
);