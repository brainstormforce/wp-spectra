( function( $ ) {

    UAGBPostMasonry = {
       
        _init : function( $attr, $selector ) {

            console.log($attr)
            var windowHeight50 = jQuery( window ).outerHeight() / 1.25;
            var $scope = $( $selector );
            $( window ).scroll( function () {
            
                if( ( $( window ).scrollTop() + windowHeight50 ) >= ( $scope.find( '.uagb-post__items:last' ).offset().top ) ) {
    
                    var $args = {
                        'page_number' : $scope.find( '.uagb-post-pagination-wrap .current' ).next( 'a' ).html()
                    };
                    UAGBPostMasonry._callAjax( $scope, $args, $attr );
                }
            } );    

        },
        _callAjax : function( $scope, $obj, $attr ) {

            $.ajax({
                url: uagb_data.ajax_url,
                data: {
                    action: 'uagb_get_posts',
                    page_number : $obj.page_number,
                    attr : $attr,
                    nonce : uagb_data.uagb_masonry_ajax_nonce,
                },
                dataType: 'json',
                type: 'POST',
                success: function( data ) {
                    $scope.find( '.uagb-post__items:last' ).append(data.data)
                }
            });
        }

    }

} )( jQuery );