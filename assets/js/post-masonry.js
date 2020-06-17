( function( $ ) {

    var windowHeight50 = jQuery( window ).outerHeight() / 1.25;
    var $scope = $( '.uagb-post-grid' );
    $( window ).scroll( function () {
        
        if( ( $( window ).scrollTop() + windowHeight50 ) >= ( $scope.find( '.uagb-post__items:last' ).offset().top ) ) {

            var $args = {
                'page_number' : $scope.find( '.uagb-post-pagination-wrap .current' ).next( 'a' ).html()
            };
            _callAjax( $scope, $args, true );
        }
    } );
} )( jQuery );