/**
* WordPress dependencies
*/
const { __ } = wp.i18n

/**
* Internal dependencies
*/
const {
    __experimentalPanelColorGradientSettings,
} = wp.blockEditor




function GradientSettings({ attributes, setAttributes }  ) {
    console.log(attributes);
    const{gradientValue,gradientAngle,gradientColor1,gradientColor2,gradientLocation1,gradientLocation2,gradientPosition,gradientType} = attributes;

    
    const onGradientChange = ( value ) => {
        setAttributes({gradientValue:value});
        
    };

    //set the gradient value if new gradientvalue is not set
    if(gradientValue === ""){       
        setAttributes({gradientValue:"value"});
   
        if ( "linear" === gradientType ) {
            var value = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
            setAttributes({gradientValue:value});
            
        } else {
            var value = `radial-gradient( at ${ gradientPosition }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
            setAttributes({gradientValue:value});
            
        }
    }
    return (
        <__experimentalPanelColorGradientSettings
        title={ __( 'Color Settings' ) }
        initialOpen={ false }
        settings={ [
            {
                label: __( 'Overlay Color' ),
                gradientValue,
                onGradientChange,
            },
        ] }
        />
        );
    }
    
    export default GradientSettings;