/**
 * BLOCK: Lottie Edit
 */

import classnames from "classnames"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"


import Lottie from 'react-lottie';

const { __ } = wp.i18n

const {
	InspectorControls,
	MediaUpload,
    ColorPalette,
    MediaUploadCheck,
    MediaPlaceholder
} = wp.blockEditor

const {
    PanelBody,
	RangeControl,
	Button,
	TextControl,
    ToggleControl,
} = wp.components

const { Component, Fragment } = wp.element


class UAGBLottie extends Component {

    constructor() {
        super( ...arguments )
        this.lottieplayer = React.createRef();
        this.state = {  direction: 1,  loopState: true,};
        this.onSelectLottieJSON    = this.onSelectLottieJSON.bind( this )
        this.reverseDirection    = this.reverseDirection.bind( this )
        this.loopLottie    = this.loopLottie.bind( this )        
	}
    
    componentDidMount() {
        
        // Assigning block_id in the attribute.
        this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
        this.props.setAttributes( { classMigrate: true } )
      
        
    }
    
    
    onSelectLottieJSON( media ) {

        const { setAttributes } = this.props
        
		if ( ! media || ! media.url ) {
			setAttributes( { jsonLottie: null } )
			return
		}
		
        setAttributes( { jsonLottie: media } )
		setAttributes( { lottieURl: media.url } )      
		
    }
    
    

    loopLottie() {
        const { setAttributes } = this.props
        const { loop } = this.props.attributes  
        const { loopState } = this.state

        setAttributes( { loop: ! loop } )
		this.setState({ loopState :! loopState});
		
    }

    reverseDirection() {
        const { setAttributes } = this.props
        const { reverse } = this.props.attributes  
        const { direction } = this.state

        setAttributes( { reverse: ! reverse } )
		this.setState({ direction : direction * -1 });
		
    }

    
      
    render() {
        const { className, setAttributes, attributes } = this.props
        
        const {
            height,
            width,
            backgroundColor,
            loop,            
            speed,
            reverse,
            playOnHover,
            jsonLottie,
            lottieURl,
            
        } = attributes

       
        const controlsSettings = (
            <PanelBody
                title={ __( "Controls" ) }
                initialOpen={ false }>
                <ToggleControl
                    label={ __( "Loop" ) }
                    checked={ loop }
                    onChange={ this.loopLottie }
                    help={ __( 'Enable to loop animation.' ) }
                    />
                
                <RangeControl
                    label={ __( "Speed" ) }
                    value={ speed }
                    onChange={ ( value ) => setAttributes( { speed: value } ) }
                    min={ 1 }
                    max={ 50 }
                    help={ __( 'Animation speed.' ) }
                    allowReset
                    />
                 <ToggleControl
                    label={ __( "Reverse" ) }
                    checked={ reverse }
                    onChange={this.reverseDirection}
                    help={ __( 'Direction of animation.' ) }
                    />
                <ToggleControl
                    label={ __( "Play on Hover" ) }
                    checked={ playOnHover }
                    onChange={ ( value ) => setAttributes( { playOnHover: ! playOnHover } ) }
                    />                
            </PanelBody>
        )
        
        const styleSettings = (
            <PanelBody
            title={ __( "Style" ) }
            initialOpen={ false }>
                <RangeControl
                    label={ __( "Width" ) }
                    value={ width }
                    onChange={ ( value ) => setAttributes( { width: value } ) }
                    min={ 0 }
                    max={ 1000 }
                    allowReset
                    />
                <RangeControl
                    label={ __( "Height" ) }
                    value={ height }
                    onChange={ ( value ) => setAttributes( { height: value } ) }
                    min={ 0 }
                    max={ 1000 }
                    allowReset
                    />
                <p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundColor }} ></span></span></p>
                <ColorPalette
                    value={ backgroundColor }
                    onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
                    allowReset
                    />
            </PanelBody>
        )

        //Check if given url is valid or not for json extension.
        var validJsonPath = 'invalid';
        if( lottieURl && lottieURl.endsWith('.json') ){
             validJsonPath = 'valid' 
        }       

        if ( validJsonPath === 'invalid' ) {
            return (               
				<div className="uagb-lottie_upload_wrap">                    
                    <MediaPlaceholder
                        labels={ {
                            title: __( 'Lottie' ),
                            instructions: __( 'Allows you to add fancy animation i.e lottie to your website' )
                        } }                        
                        allowedTypes={ [ 'application/json' ] }
                        accept={ [ 'application/json' ] }
                        value={jsonLottie }
                        onSelectURL={ ( value ) => setAttributes( { lottieURl: value } )  }
                        onSelect={ this.onSelectLottieJSON }
                    />
                </div>				
			)
        }
       
       
        const handleLottieMouseEnter = () => {  
            this.lottieplayer.current.anim.play();
        };

        const handleLottieMouseLeave = () => {
            this.lottieplayer.current.anim.stop();
        };

        const reversedir = (reverse) ? -1 : 1
        
        return (
            <Fragment>
                
                <InspectorControls>
                    { controlsSettings }
                    { styleSettings }
                </InspectorControls>
                
                <div
                className={ classnames(
                    className,
                    `uagb-block-${this.props.clientId.substr( 0, 8 )}`,
                    "uagb-lottie__outer-wrap",
                ) }
                onMouseEnter={ playOnHover ? handleLottieMouseEnter : ()=> null }
                onMouseLeave={ playOnHover ? handleLottieMouseLeave : ()=> null } >
                    <Lottie 
                        ref={this.lottieplayer}
                        options={{                            
                            loop: loop,
                            path: lottieURl,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid',
                                className:"uagb-lottie-inner-wrap"
                            }
                        }}
                        isStopped={playOnHover}                        
                        height={height}
                        width={width}
                        speed={speed}
                        isClickToPauseDisabled = {true}
                        direction={reversedir}
                        style={{backgroundColor:backgroundColor}}                       
                    />
                </div>
            </Fragment>
        );
    }
}

export default UAGBLottie
