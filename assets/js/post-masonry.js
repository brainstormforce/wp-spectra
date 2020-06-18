( function( $ ) {
    var loadStatus = true;
    UAGBPostMasonry = {
       
        _init : function( $attr, $selector ) {

            
            var count = 2;
            var windowHeight50 = jQuery( window ).outerHeight() / 1.25;
            var $scope = $( $selector );
            var loader = $scope.find( '.uagb-post-inf-loader' );
            $( window ).scroll( function () {
                
                if( ( $( window ).scrollTop() + windowHeight50 ) >= ( $scope.find( '.uagb-post__items:last' ).offset().top ) ) {
    
                    var $args = {
                        'page_number' : count
                    };
                    total = $scope.data( 'total' );
                    if( true == loadStatus ) {
                        
                        if ( count <= total ) {
							loader.show();
                            UAGBPostMasonry._callAjax( $scope, $args, $attr, loader );
							count++;
							loadStatus = false;
						}

					}
                }
            } );    

        },
        _callAjax : function( $scope, $obj, $attr, loader ) {

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
                    $scope.find( '.uagb-post__items' ).isotope( 'insert',$( data.data ));
                    loadStatus = true; 
                    loader.hide();
                }
            });
        }

    }

} )( jQuery );