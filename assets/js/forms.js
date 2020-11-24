( function( $ ) {
    
    UAGBForms = {
        
        init: function( attr, id ) {
            
            $scope = $( id );
            
            $form = $scope.find( '.uagb-forms-main-form' );
            
            $submitButtonWrap = $form.find( '.uagb-forms-main-submit-button-wrap' );
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
                $submitButtonWrap.append('<span class="components-spinner"></span>');
                UAGBForms._formSubmit( e, $( this ), attr )
            } );
        },
        
        _formSubmit: function ( e, $form, attr ) {
            e.preventDefault();
            var originalSerialized = $($form).serialize();
           
            var splitedString = (decodeURIComponent(originalSerialized).split("&"));
            
            var newString = "";
            for ( var index = 0; index < splitedString.length; ++index) {
                let strangeName = splitedString[index].substr(0, splitedString[index].indexOf('='));
                //for checkbox related
                if(strangeName.endsWith("[]")){
                    strangeName = strangeName.substring(0, strangeName.length - 2)                    
                    if(newString == ""){
                        newString = $("#"+strangeName).html()+"[]" + splitedString[index].substr(splitedString[index].indexOf('='));
                    }else{
                        newString += "&" + $("#"+strangeName).html()+"[]" + splitedString[index].substr(splitedString[index].indexOf('='));
                    }
                }else{
                    if(newString == ""){
                        newString = $("#"+strangeName).html() + splitedString[index].substr(splitedString[index].indexOf('='));
                    }else{
                        newString += "&" + $("#"+strangeName).html() + splitedString[index].substr(splitedString[index].indexOf('='));
                    }
                } 
            }
            
            
            $.ajax({
                type: 'POST',
                url: uagb_forms_data.ajax_url,    
                dataType: 'json',           
                data: {
                    action: 'uagb_process_forms',                    
                    nonce : uagb_forms_data.uagb_forms_ajax_nonce,
                    form_data:newString,
                },
                
                success: function( data ) {
                  console.log(data);
                    if( true === data.success ) {
                        
                        if ( 'message' === attr.confirmationType ) {
                            $form[0].style.display = 'none'; 
                            $scope.find('.uagb-forms-success-message').removeClass( 'uagb-forms-success-message-hide' ).addClass( 'uagb-forms-success-message-show' );
                        }
                        
                        if ( 'url' === attr.confirmationType ) {
                            window.location.replace(attr.confirmationUrl);
                        }
                        
                    }
                    
                }
            });
            
        },       
    }
} )( jQuery );