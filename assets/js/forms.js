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
            
            
            //Ready Classes.            
            var formscope = document.getElementsByClassName('uagb-block-' + attr['block_id']);
            var formWrapper = formscope[0].children;
            var sibling = formWrapper[0].children;

            for (let index = 0; index < sibling.length; index++) {

                if( sibling[index].classList.contains("uag-col-2") && sibling[index+1].classList.contains("uag-col-2") ){
                    let div = document.createElement('div');
                    div.className = 'uag-col-2-wrap uag-col-wrap-' + index;                        
                    sibling[index+1].after(div)
                    let wrapper_div = formscope[0].getElementsByClassName('uag-col-wrap-' + index)
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                }

                if( (sibling[index].classList.contains("uag-col-3")) && (sibling[index+1].classList.contains("uag-col-3") && (sibling[index+2].classList.contains("uag-col-3"))) ){
                    let div = document.createElement('div');
                    div.className = 'uag-col-3-wrap uag-col-wrap-' + index;                        
                    sibling[index+2].after(div)
                    let wrapper_div = formscope[0].getElementsByClassName('uag-col-wrap-' + index)
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])

                }

                if( (sibling[index].classList.contains("uag-col-4")) && (sibling[index+1].classList.contains("uag-col-4") && (sibling[index+2].classList.contains("uag-col-4")) && (sibling[index+3].classList.contains("uag-col-4"))) ){
                    let div = document.createElement('div');
                    div.className = 'uag-col-4-wrap uag-col-wrap-' + index;                        
                    sibling[index+3].after(div)
                    let wrapper_div = formscope[0].getElementsByClassName('uag-col-wrap-' + index)
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])
                    wrapper_div[0].appendChild(sibling[index])

                }
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