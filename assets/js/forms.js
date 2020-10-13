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
            
            //validation for checkbox if required.
            var requiredCheckboxes = $('.uagb-forms-checkbox-wrap :checkbox[required]');
            requiredCheckboxes.on('change', function(e) {
              var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
              var isChecked = checkboxGroup.is(':checked');
              checkboxGroup.prop('required', !isChecked);
            });
            requiredCheckboxes.trigger('change');

            //append recaptcha js when enabled.
            if(attr['reCaptchaEnable'] == true){
                $('head').append(' <script src="https://www.google.com/recaptcha/api.js"></script>');
            }
            
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