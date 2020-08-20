( function( $ ) {

	UAGBForms = {

        init: function( attr, id ) {

            $scope = $( id );

            $form = $scope.find( '.uagb-forms-main-form' );

            $submitButton = $form.find( '.uagb-forms-main-submit-button' );
            
            $phoneinput = $form.find( '.uagb-forms-phone-input' );
            $phoneinput.on( 'keypress', function( e ) {
                var charCode = (e.which) ? e.which : e.keyCode
                if(charCode == 45){
                    return true
                }
                if (charCode > 31 && (charCode < 48 || charCode > 57 )){
                    return false;
                }
                return true;
            } );

            $form.on( 'submit', function( e ) {

                UAGBForms._formSubmit( e, $( this ), attr )
            } );
        },
        _formSubmit: function ( e, $form, attr ) {
            // e.preventDefault();
            if ( 'message' === attr.confirmationType ) {
                $form.find('.uagb-forms-success-message').removeClass( 'uagb-forms-success-message-hide' ).addClass( 'uagb-forms-success-message-show' );
            }
        },       
    }
} )( jQuery );