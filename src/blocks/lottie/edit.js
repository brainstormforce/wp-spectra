/**
 * BLOCK: Lottie Edit
 */

import classnames from "classnames"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"



const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload,
    ColorPalette,
    MediaUploadCheck
} = wp.blockEditor

const {
    PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	TextControl,
	BaseControl,
    ToggleControl,
    FormFileUpload
} = wp.components

const { Component, Fragment } = wp.element


class UAGBLottie extends Component {

    constructor() {
		super( ...arguments )
        this.onSelectLottieJSON    = this.onSelectLottieJSON.bind( this )
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
    
    
    componentDidMount() {
        
        // Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		this.props.setAttributes( { classMigrate: true } )
        
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

    render() {
        const { className, setAttributes, attributes } = this.props
        
        const {
            height,
            width,
            backgroundColor,
            loop,
            count,
            speed,
            reverse,
            playOnHover,
            jsonLottie,
            lottieURl
        } = attributes

        
        const controlsSettings = (
            <PanelBody
                title={ __( "Controls" ) }
                initialOpen={ false }>
                <ToggleControl
                    label={ __( "Loop" ) }
                    checked={ loop }
                    onChange={ ( value ) => setAttributes( { loop: ! loop } ) }
                    />
                <RangeControl
                    label={ __( "Count" ) }
                    value={ count }
                    onChange={ ( value ) => setAttributes( { count: value } ) }
                    min={ 0 }
                    max={ 50 }
                    allowReset
                    />
                <RangeControl
                    label={ __( "Speed" ) }
                    value={ speed }
                    onChange={ ( value ) => setAttributes( { speed: value } ) }
                    min={ 0 }
                    max={ 50 }
                    allowReset
                    />
                 <ToggleControl
                    label={ __( "Reverse" ) }
                    checked={ reverse }
                    onChange={ ( value ) => setAttributes( { reverse: ! reverse } ) }
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
                    max={ 500 }
                    allowReset
                    />
                <RangeControl
                    label={ __( "Height" ) }
                    value={ height }
                    onChange={ ( value ) => setAttributes( { height: value } ) }
                    min={ 0 }
                    max={ 500 }
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
        if( lottieURl ){
             validJsonPath = lottieURl.endsWith('.json') ? 'valid' :'invalid'
        }       

        if ( validJsonPath === 'invalid' ) {
            return (
                <Fragment>
				<div className="uagb-lottie_upload_wrap">
                    <p>UAGB Lottie</p>
                <MediaUploadCheck>
                    <MediaUpload
                        title={ __( "Upload" ) }
                        onSelect={ this.onSelectLottieJSON }
                        allowedTypes={ [ "application/json" ] }
                        value={ jsonLottie }
                        render={ ( { open } ) => (
                            <Button isDefault onClick={ open }>
                                { ! jsonLottie ? __( "Upload JSON" ) : __( "Replace JSON" ) }
                            </Button>
                        ) }
                    />
                </MediaUploadCheck>                
                <p className="components-base-control__label">{__( "OR" )}</p>
                <TextControl
                    className="uagb-lottie-url-input"
                    value={ lottieURl }
                    onChange={ ( value ) => setAttributes( { lottieURl: value } ) }
                    placeholder={__( "Enter URL" )}
                />
                </div>
				</Fragment>
			)
        }
        
        return (
            <Fragment>
               <InspectorControls>
                   { controlsSettings }
                   { styleSettings }
               </InspectorControls>
               asd
            </Fragment>
        );
    }
}

export default UAGBLottie
