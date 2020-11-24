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
            var originalSerialized = $($form).serializeArray();
          
            var postData = {};
            for (var i = 0; i < originalSerialized.length; i++) {
                let inputname = originalSerialized[i].name;
                if (originalSerialized[i]['name'].endsWith('[]')) {
                    var name = originalSerialized[i]['name'];
                    name = name.substring(0, name.length - 2);
                    if (!(name in postData)) {
                        postData[name] = [];
                    }
                    postData[name].push(originalSerialized[i]['value']);
                } else {
                    postData[$("#"+inputname).html()] = originalSerialized[i]['value'];
                }
            }
            console.log(postData);

            var after_submit_data = { "to": attr['afterSubmitToEmail'], "cc": attr['afterSubmitCcEmail'], "bcc": attr['afterSubmitBccEmail'], "subject": attr['afterSubmitEmailSubject']};
            
            $.ajax({
                type: 'POST',
                url: uagb_forms_data.ajax_url,    
                dataType: 'json',           
                data: {
                    action: 'uagb_process_forms',                    
                    nonce : uagb_forms_data.uagb_forms_ajax_nonce,
                    form_data:postData,
                    after_submit_data:after_submit_data
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