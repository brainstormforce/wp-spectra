/**
 * BLOCK: Lottie Edit
 */

import classnames from "classnames"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import styling from "./styling"

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
    TabPanel,
    Dashicon,
    SelectControl
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
        this.props.setAttributes( { classMigrate: true } );

        // Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-lottie-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
    }

    componentDidUpdate(prevProps, prevState) {
		var element = document.getElementById( "uagb-lottie-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
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
            heightTablet,
            heightMob,
            width,
            widthTablet,
            widthMob,
            backgroundColor,
            loop,            
            speed,
            reverse,
            jsonLottie,
            lottieURl,
            playOn,
            backgroundHColor
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
                <SelectControl
					label={ __( "Play On" ) }
					value={ playOn }
					onChange={ ( value ) => setAttributes( { playOn: value } ) }
					options={ [
						{ value: "none", label: __( "None" ) },
						{ value: "hover", label: __( "On Hover" ) },
						{ value: "click", label: __( "On Click" ) },
						{ value: "scroll", label: __( "Scroll" ) },
                    ] }
				/>                
            </PanelBody>
        )
        
        const styleSettings = (
            <PanelBody
            title={ __( "Style" ) }
            initialOpen={ false }>
                <TabPanel className="uagb-size-type-field-tabs uagb-without-size-type" activeClass="active-tab"
						tabs={ [
							{
								name: "desktop",
								title: <Dashicon icon="desktop" />,
								className: "uagb-desktop-tab uagb-responsive-tabs",
							},
							{
								name: "tablet",
								title: <Dashicon icon="tablet" />,
								className: "uagb-tablet-tab uagb-responsive-tabs",
							},
							{
								name: "mobile",
								title: <Dashicon icon="smartphone" />,
								className: "uagb-mobile-tab uagb-responsive-tabs",
							},
						] }>
						{
							( tab ) => {
								let tabout

								if ( "mobile" === tab.name ) {
									tabout = (
										<RangeControl
                                            label={ __( "Width" ) }
                                            value={ widthMob }
                                            onChange={ ( value ) => setAttributes( { widthMob: value } ) }
                                            min={ 0 }
                                            max={ 1000 }
                                            allowReset
                                        />
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<RangeControl
                                            label={ __( "Width" ) }
                                            value={ widthTablet }
                                            onChange={ ( value ) => setAttributes( { widthTablet: value } ) }
                                            min={ 0 }
                                            max={ 1000 }
                                            allowReset
                                        />
									)
								} else {
									tabout = (
										<RangeControl
                                            label={ __( "Width" ) }
                                            value={ width }
                                            onChange={ ( value ) => setAttributes( { width: value } ) }
                                            min={ 0 }
                                            max={ 1000 }
                                            allowReset
                                        />
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
                    <TabPanel className="uagb-size-type-field-tabs uagb-without-size-type" activeClass="active-tab"
						tabs={ [
							{
								name: "desktop",
								title: <Dashicon icon="desktop" />,
								className: "uagb-desktop-tab uagb-responsive-tabs",
							},
							{
								name: "tablet",
								title: <Dashicon icon="tablet" />,
								className: "uagb-tablet-tab uagb-responsive-tabs",
							},
							{
								name: "mobile",
								title: <Dashicon icon="smartphone" />,
								className: "uagb-mobile-tab uagb-responsive-tabs",
							},
						] }>
						{
							( tab ) => {
								let tabout

								if ( "mobile" === tab.name ) {
									tabout = (
										<RangeControl
                                            label={ __( "Height" ) }
                                            value={ heightMob }
                                            onChange={ ( value ) => setAttributes( { heightMob: value } ) }
                                            min={ 0 }
                                            max={ 1000 }
                                            allowReset
                                        />
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<RangeControl
                                            label={ __( "Height" ) }
                                            value={ heightTablet }
                                            onChange={ ( value ) => setAttributes( { heightTablet: value } ) }
                                            min={ 0 }
                                            max={ 1000 }
                                            allowReset
                                        />
									)
								} else {
									tabout = (
										<RangeControl
                                            label={ __( "Height" ) }
                                            value={ height }
                                            onChange={ ( value ) => setAttributes( { height: value } ) }
                                            min={ 0 }
                                            max={ 1000 }
                                            allowReset
                                        />
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
                <p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundColor }} ></span></span></p>
                <ColorPalette
                    value={ backgroundColor }
                    onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
                    allowReset
                    />
                <p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundHColor }} ></span></span></p>
                <ColorPalette
                    value={ backgroundHColor }
                    onChange={ ( value ) => setAttributes( { backgroundHColor: value } ) }
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

        const playIs = ( 'none' !== playOn ) ? true : false;

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
                onMouseEnter={ 'hover' === playOn ? handleLottieMouseEnter : ()=> null }
                onMouseLeave={ 'hover' === playOn ? handleLottieMouseLeave : ()=> null } 
                onClick = { 'click' === playOn ? handleLottieMouseEnter : ()=> null }
                >
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
                        isStopped={playIs}                        
                        speed={speed}
                        isClickToPauseDisabled = {true}
                        direction={reversedir}                       
                    />
                </div>
            </Fragment>
        );
    }
}

export default UAGBLottie
