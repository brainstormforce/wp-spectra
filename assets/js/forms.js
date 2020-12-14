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

            var toggleinput = $form.find( '.uagb-forms-toggle-input' );

            toggleinput.on('change', function(e) {
                if(this.checked) {                    
                    $(this).val($(this).attr("data-trueState"));
                }else {
                    $(this).val($(this).attr("data-falseState"));
                }
            });
            
            //validation for checkbox if required.
            var requiredCheckboxes = $('.uagb-forms-checkbox-wrap :checkbox[required]');
            requiredCheckboxes.on('change', function(e) {
                var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
                var isChecked = checkboxGroup.is(':checked');
                checkboxGroup.each(function() {
                    this.setCustomValidity(''); //remove all custom validity messages
                  });
                checkboxGroup.prop('required', !isChecked);
            });
            requiredCheckboxes.trigger('change');
            
            //append recaptcha js when enabled.
            if(attr['reCaptchaEnable'] == true){
                $('head').append(' <script src="https://www.google.com/recaptcha/api.js"></script>');
            }
            
            $form.on( 'submit', function( e ) {                ;
                UAGBForms._formSubmit( e, $( this ), attr )
            } );
        },
        
        _formSubmit: function ( e, $form, attr ) {
            e.preventDefault();
            
            if(attr['reCaptchaEnable'] == true && attr['reCaptchaType'] == "v2" && attr['reCaptchaSiteKeyV2'] ){
                
                var captcha_response = $form[0].getElementsByClassName("uagb-forms-recaptcha")[0].value;
               
                if (!captcha_response) {                  
                    $('.uagb-form-reacaptcha-error-'+attr['block_id']).html('<p style="color:red !important" class="error-captcha"> Please fill up the above captcha.</p>');
                    return false;
                } else {
                    $('.uagb-form-reacaptcha-error-'+attr['block_id']).html('');
                    var uagab_captcha_keys = { 'secret':attr['reCaptchaSecretKeyV2'],'sitekey':attr['reCaptchaSiteKeyV2'] }                   
                }
                
            }
            
            var originalSerialized = $($form).serializeArray();
            var postData = {};
            for (var i = 0; i < originalSerialized.length; i++) {
                let inputname = originalSerialized[i].name;
                if (originalSerialized[i]['name'].endsWith('[]')) { //For checkbox element
                    var name = originalSerialized[i]['name'];
                    name = name.substring(0, name.length - 2);
                    if (!(name in postData)) {
                        postData[name] = [];
                    }
                    postData[name].push(originalSerialized[i]['value']);
                } else if(originalSerialized[i]['value'].startsWith('+')){ //For phone element. 
                    
                    var name = originalSerialized[i]['name'];
                    name = name.substring(0, name.length - 2);
                    if (!(name in postData)) {
                        postData[name] = [];
                    }
                    postData[$("#"+name).html()].push(originalSerialized[i]['value']);
                } else {
                    postData[$("#"+inputname).html()] = originalSerialized[i]['value'];
                }
            }
            
            var after_submit_data = { "to": attr['afterSubmitToEmail'], "cc": attr['afterSubmitCcEmail'], "bcc": attr['afterSubmitBccEmail'], "subject": attr['afterSubmitEmailSubject']};
            
           
            
            //add spiner to form button to show processing.
            $( '<span class="components-spinner"></span>' ).appendTo( $form.find(".uagb-forms-main-submit-button-wrap") );
            
            $.ajax({
                type: 'POST',
                url: uagb_forms_data.ajax_url,
                data: {
                    action: 'uagb_process_forms',                    
                    nonce : uagb_forms_data.uagb_forms_ajax_nonce,
                    form_data:postData,
                    sendAfterSubmitEmail : attr['sendAfterSubmitEmail'],
                    after_submit_data:after_submit_data,
                    uagab_captcha_keys : uagab_captcha_keys,
                    captcha_response : captcha_response,                    
                },
                
                success: function( response ) {

                    if( 200 === response.data ) {
                        
                        if ( 'message' === attr.confirmationType ) {                             
                            $('[name="uagb-form-'+attr['block_id']+'"]').hide();
                            $('.uagb-forms-success-message-'+attr['block_id']).removeClass('uagb-forms-submit-message-hide').addClass('uagb-forms-success-message')
                        }
                        
                        if ( 'url' === attr.confirmationType ) {
                            window.location.replace(attr.confirmationUrl);
                        }
                        
                    }else if( 400 === response.data ){
                        if ( 'message' === attr.confirmationType ) {                             
                            $('[name="uagb-form-'+attr['block_id']+'"]').hide();
                            $('.uagb-forms-failed-message-'+attr['block_id']).removeClass('uagb-forms-submit-message-hide').addClass('uagb-forms-failed-message')
                        }
                    }
                    
                }
            });
            
        },       
    }
} )( jQuery );