/**
 * BLOCK: WP Search 
 */

import classnames from "classnames"
import { Fragment } from "react"
import TypographyControl from "../../components/typography"
import BoxShadowControl from "../../components/box-shadow"

const { __ } = wp.i18n
const {
	Component,
} = wp.element
const {
	InspectorControls,
	ColorPalette,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl
} = wp.components
class UAGBWpSearchEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
	}
	render() {
        const { attributes, setAttributes } = this.props
        const {
            block_id,
            layout,
            placeholder,
            inputSize,
            textColor,
            placeholderColor,
            inputBgColor,
            boxShadowColor,
            boxShadowHOffset,
            boxShadowVOffset,
            boxShadowBlur,
            boxShadowSpread,
            boxShadowPosition,
            borderStyle,
            borderWidth,
            borderRadius,
            borderColor,
            buttonBgColor,
            buttonBgHoverColor,
            buttonIconColor,
            buttonIconHoverColor,
            buttonWidth,
            buttonIconSize,
            iconColor,
            iconHoverColor,
            iconSize,
            inputloadGoogleFonts,
            inputFontFamily,
            inputFontWeight,
            inputFontSubset,
            inputFontSize,
            inputFontSizeType,
            inputFontSizeTablet,
            inputFontSizeMobile,
            inputLineHeight,
            inputLineHeightType,
            inputLineHeightTablet,
            inputLineHeightMobile,
        } = attributes
        
        let loadInputGoogleFonts;

		if( inputloadGoogleFonts == true ) {
			
			const qconfig = {
				google: {
					families: [ inputFontFamily + ( inputFontWeight ? ':' + inputFontWeight : '' ) ],
				},
			};

			loadInputGoogleFonts = (
				<WebfontLoader config={ qconfig }>
				</WebfontLoader>
			)
        }
        
        const generalSettings = () => {
            return (

                <PanelBody
                    title={ __( "General" ) }
                    initialOpen={ true }
                    className="uagb__url-panel-body"
				>
                    <SelectControl
						label={ __( "Layout" ) }
						value={ layout }
						options={ [
							{ value: "input", label: __( "Input Box" ) },
							{ value: "icon", label: __( "Icon" ) },
							{ value: "input-button", label: __( "Input Box with Button" ) },
						] }
						onChange={ (value) => setAttributes( { layout: value } ) }
					/>
                    { ( 'input-button' === layout || 'input' === layout ) &&
                        <Fragment>
                            <TextControl
                                label= { __( "Placeholder" ) }
                                value= { placeholder }
                                onChange={ value => setAttributes( { placeholder: value } ) }
                            />
                            <RangeControl
                                label={ __( "Input Size" ) }
                                value={ inputSize }
                                onChange={ ( value ) => setAttributes( { inputSize: value } ) }
                                min={ 0 }
                                max={ 500 }
						    />
                        </Fragment>
                    }
                </PanelBody>
            )
        }
        const stylingSettings = () => {

            return (

                <PanelBody
                    title={ __( "Styling" ) }
                    initialOpen={ true }
                    className="uagb__url-panel-body"
				>
                    { ( 'input-button' === layout || 'input' === layout ) &&
                        <Fragment>

                            <h2> { __( "Input Box" ) }</h2>
                            <TypographyControl
                                label={ __( "Typography" ) }
                                attributes = { attributes }
                                setAttributes = { setAttributes }
                                loadGoogleFonts = { { value: inputloadGoogleFonts, label: 'inputloadGoogleFonts'  } }
                                fontFamily = { { value: inputFontFamily, label: 'inputFontFamily'  } }
                                fontWeight = { { value: inputFontWeight, label: 'inputFontWeight'  } }
                                fontSubset = { { value: inputFontSubset, label: 'inputFontSubset'  } }
                                fontSizeType = { { value: inputFontSizeType, label: 'inputFontSizeType' } }
                                fontSize = { { value: inputFontSize, label: 'inputFontSize'  } }
                                fontSizeMobile = { { value: inputFontSizeMobile, label: 'inputFontSizeMobile'  } }
                                fontSizeTablet= { { value: inputFontSizeTablet, label: 'inputFontSizeTablet' } }
                                lineHeightType = { { value: inputLineHeightType, label: 'inputLineHeightType' } }
                                lineHeight = { { value: inputLineHeight, label: 'inputLineHeight'  } }
                                lineHeightMobile = { { value: inputLineHeightMobile, label: 'inputLineHeightMobile'  } }
                                lineHeightTablet= { { value: inputLineHeightTablet, label: 'inputLineHeightTablet'  } }
                            />  
                            <p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: textColor }} ></span></span></p>
                            <ColorPalette
                                value={ textColor }
                                onChange={ ( value ) => setAttributes( { textColor: value } ) }
                                allowReset
                            />
                            <p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: inputBgColor }} ></span></span></p>
                            <ColorPalette
                                value={ inputBgColor }
                                onChange={ ( value ) => setAttributes( { inputBgColor: value } ) }
                                allowReset
                            />
                            <p className="uagb-setting-label">{ __( "Placeholder Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: placeholderColor }} ></span></span></p>
                            <ColorPalette
                                value={ placeholderColor }
                                onChange={ ( value ) => setAttributes( { placeholderColor: value } ) }
                                allowReset
                            />
                            <BoxShadowControl
                                setAttributes = { setAttributes }
                                label = { __( "Box Shadow" ) }
                                boxShadowColor = { { value: boxShadowColor, label: __( "Color" ) } }
                                boxShadowHOffset = { { value: boxShadowHOffset, label: __( "Horizontal" ) } }
                                boxShadowVOffset = { { value: boxShadowVOffset, label: __( "Vertical" ) } }
                                boxShadowBlur = { { value: boxShadowBlur, label: __( "Blur" ) } }
                                boxShadowSpread = { { value: boxShadowSpread, label: __( "Spread" ) } }
                                boxShadowPosition = { { value: boxShadowPosition, label: __( "Position" ) } }
						    />
                            <hr className="uagb-editor__separator" />
                            <h2>{ __( "Border" ) }</h2>
                            <SelectControl
                                label={ __( "Style" ) }
                                value={ borderStyle }
                                options={ [
                                    { value: "none", label: __( "None" ) },
                                    { value: "solid", label: __( "Solid" ) },
                                    { value: "dotted", label: __( "Dotted" ) },
                                    { value: "dashed", label: __( "Dashed" ) },
                                    { value: "double", label: __( "Double" ) },
                                ] }
                                onChange={ value => {
                                    setAttributes( { borderStyle: value } )
                                } }
                            />
                            { "none" !== borderStyle &&
                                <RangeControl
                                    label={ __( "Thickness (px)" ) }
                                    value={ borderWidth }
                                    onChange={ value => {
                                        setAttributes( { borderWidth: value } )
                                    } }
                                    min={ 0 }
                                    max={ 20 }
                                />
                            }
                            { "none" !== borderStyle &&
                                <RangeControl
                                    label={ __( "Rounded Corners (px)" ) }
                                    value={ borderRadius }
                                    onChange={ value => {
                                        setAttributes( { borderRadius: value } )
                                    } }
                                    min={ 0 }
                                    max={ 50 }
                                />
                            }
                            <p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
                            <ColorPalette
                                value={ borderColor }
                                onChange={ ( value ) => setAttributes( { borderColor: value } ) }
                                allowReset
                            />
                        </Fragment> 
                    }
                    { 'input-button' === layout &&

                        <Fragment>
                            <hr className="uagb-editor__separator" />
                            <h2>{ __( "Button" ) }</h2>
                            <RangeControl
                                label={ __( "Width" ) }
                                value={ buttonWidth }
                                onChange={ value => {
                                    setAttributes( { buttonWidth: value } )
                                } }
                                min={ 0 }
                                max={ 500 }
                            />
                            <p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttonBgColor }} ></span></span></p>
                            <ColorPalette
                                value={ buttonBgColor }
                                onChange={ ( value ) => setAttributes( { buttonBgColor: value } ) }
                                allowReset
                            />
                            <p className="uagb-setting-label">{ __( "Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttonBgHoverColor }} ></span></span></p>
                            <ColorPalette
                                value={ buttonBgHoverColor }
                                onChange={ ( value ) => setAttributes( { buttonBgHoverColor: value } ) }
                                allowReset
                            />
                            <hr className="uagb-editor__separator" />
                            <h2>{ __( "Icon" ) }</h2>
                            <RangeControl
                                label={ __( "Size" ) }
                                value={ buttonIconSize }
                                onChange={ value => {
                                    setAttributes( { buttonIconSize: value } )
                                } }
                                min={ 0 }
                                max={ 500 }
                            />
                            <p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttonIconColor }} ></span></span></p>
                            <ColorPalette
                                value={ buttonIconColor }
                                onChange={ ( value ) => setAttributes( { buttonIconColor: value } ) }
                                allowReset
                            />
                            <p className="uagb-setting-label">{ __( "Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttonIconHoverColor }} ></span></span></p>
                            <ColorPalette
                                value={ buttonIconHoverColor }
                                onChange={ ( value ) => setAttributes( { buttonIconHoverColor: value } ) }
                                allowReset
                            />
                        </Fragment>

                    }
                    { 'icon' === layout &&
                        
                        <Fragment>
                            <h2>{ __( "Icon" ) }</h2>
                            <RangeControl
                                label={ __( "Size" ) }
                                value={ iconSize }
                                onChange={ value => {
                                    setAttributes( { iconSize: value } )
                                } }
                                min={ 0 }
                                max={ 500 }
                            />
                            <p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: iconColor }} ></span></span></p>
                            <ColorPalette
                                value={ iconColor }
                                onChange={ ( value ) => setAttributes( { iconColor: value } ) }
                                allowReset
                            />
                            <p className="uagb-setting-label">{ __( "Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: iconHoverColor }} ></span></span></p>
                            <ColorPalette
                                value={ iconHoverColor }
                                onChange={ ( value ) => setAttributes( { iconHoverColor: value } ) }
                                allowReset
                            />
                        </Fragment>

                    }
                </PanelBody>
            )

        }
        const renderSearchForm = () => {

            return (
                <form className="uagb-search-button-wrapper" role="search" action="https://wordpress.test" method="get">
                    <div className="uagb-search-form__container" role="tablist">
                        <input placeholder="Type &amp; Hit Enter..." className="uagb-search-form__input" type="search" name="s" title="Search" value=""/>
                        <button id="clear-with-button" type="reset">
                        <i className="fas fa-times" aria-hidden="true"></i>
                        </button>
                        <button className="uagb-search-submit" type="submit">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            )
        }
		return (
			<div className={ classnames(
                "uagb-wp-search__outer-wrap",
                `uagb-block-${ this.props.clientId }`,
            ) }
            >
            <InspectorControls>
                { generalSettings() }
                { stylingSettings() }
            </InspectorControls>
            { renderSearchForm() }
            { loadInputGoogleFonts }
            </div>
		)
	}
}

export default UAGBWpSearchEdit
