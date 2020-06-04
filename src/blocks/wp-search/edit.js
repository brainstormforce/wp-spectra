/**
 * BLOCK: WP Search 
 */

import styling from "./styling"
import { Fragment } from "react"
import classnames from "classnames"
import BoxShadowControl from "../../components/box-shadow"
import TypographyControl from "../../components/typography"
import WebfontLoader from "../../components/typography/fontloader"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

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
    TextControl,
    TabPanel,
    ButtonGroup,
	Button,
	Dashicon,
} = wp.components

var inputFocus = false;

class UAGBWpSearchEdit extends Component {

	constructor() {
        super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-wp-search-" + this.props.clientId )
		document.head.appendChild( $style )
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
            inputPaddingTypeMobile,
            inputPaddingTypeTablet,
            inputPaddingTypeDesktop,
            vinputPaddingMobile,
            vinputPaddingTablet,
            vinputPaddingDesktop,
            hinputPaddingMobile,
            hinputPaddingTablet,
            hinputPaddingDesktop,
            buttonPaddingTypeMobile,
            buttonPaddingTypeTablet,
            buttonPaddingTypeDesktop,
            vbuttonPaddingMobile,
            vbuttonPaddingTablet,
            vbuttonPaddingDesktop,
            hbuttonPaddingMobile,
            hbuttonPaddingTablet,
            hbuttonPaddingDesktop,
        } = attributes
        
        var element = document.getElementById( "uagb-style-wp-search-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
        }

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
                            max={ 1000 }
                        />
                    </Fragment>
                    
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
                        <TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
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
                                        <Fragment>
                                            <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
                                                <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ inputPaddingTypeMobile === "px" } aria-pressed={ inputPaddingTypeMobile === "px" } onClick={ () => setAttributes( { inputPaddingTypeMobile: "px" } ) }>{ "px" }</Button>
                                                <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ inputPaddingTypeMobile === "%" } aria-pressed={ inputPaddingTypeMobile === "%" } onClick={ () => setAttributes( { inputPaddingTypeMobile: "%" } ) }>{ "%" }</Button>
                                            </ButtonGroup>
                                            <h2>{ __( "Padding" ) }</h2>
                                            <RangeControl
                                                label={ UAGB_Block_Icons.vertical_spacing }
                                                className={ "uagb-margin-control" }
                                                value={ vinputPaddingMobile }
                                                onChange={ ( value ) => setAttributes( { vinputPaddingMobile: value } ) }
                                                min={ 0 }
                                                max={ 100 }
                                                allowReset
                                            />
                                            <RangeControl
                                                label={ UAGB_Block_Icons.horizontal_spacing }
                                                className={ "uagb-margin-control" }
                                                value={ hinputPaddingMobile }
                                                onChange={ ( value ) => setAttributes( { hinputPaddingMobile: value } ) }
                                                min={ 0 }
                                                max={ 100 }
                                                allowReset
                                            />
                                        </Fragment>
                                    )
                                } else if ( "tablet" === tab.name ) {
                                    tabout = (
                                        <Fragment>
                                            <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
                                                <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ inputPaddingTypeTablet === "px" } aria-pressed={ inputPaddingTypeTablet === "px" } onClick={ () => setAttributes( { inputPaddingTypeTablet: "px" } ) }>{ "px" }</Button>
                                                <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ inputPaddingTypeTablet === "%" } aria-pressed={ inputPaddingTypeTablet === "%" } onClick={ () => setAttributes( { inputPaddingTypeTablet: "%" } ) }>{ "%" }</Button>
                                            </ButtonGroup>
                                            <h2>{ __( "Padding" ) }</h2>
                                            <RangeControl
                                                label={ UAGB_Block_Icons.vertical_spacing }
                                                className={ "uagb-margin-control" }
                                                value={ vinputPaddingTablet }
                                                onChange={ ( value ) => setAttributes( { vinputPaddingTablet: value } ) }
                                                min={ 0 }
                                                max={ 100 }
                                                allowReset
                                            />
                                            <RangeControl
                                                label={ UAGB_Block_Icons.horizontal_spacing }
                                                className={ "uagb-margin-control" }
                                                value={ hinputPaddingTablet }
                                                onChange={ ( value ) => setAttributes( { hinputPaddingTablet: value } ) }
                                                min={ 0 }
                                                max={ 100 }
                                                allowReset
                                            />
                                        </Fragment>
                                    )
                                } else {
                                    tabout = (
                                        <Fragment>
                                            <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
                                                <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ inputPaddingTypeDesktop === "px" } aria-pressed={ inputPaddingTypeDesktop === "px" } onClick={ () => setAttributes( { inputPaddingTypeDesktop: "px" } ) }>{ "px" }</Button>
                                                <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ inputPaddingTypeDesktop === "%" } aria-pressed={ inputPaddingTypeDesktop === "%" } onClick={ () => setAttributes( { inputPaddingTypeDesktop: "%" } ) }>{ "%" }</Button>
                                            </ButtonGroup>
                                            <h2>{ __( "Padding" ) }</h2>
                                            <RangeControl
                                                label={ UAGB_Block_Icons.vertical_spacing }
                                                className={ "uagb-margin-control" }
                                                value={ vinputPaddingDesktop }
                                                onChange={ ( value ) => setAttributes( { vinputPaddingDesktop: value } ) }
                                                min={ 0 }
                                                max={ 100 }
                                                allowReset
                                            />
                                            <RangeControl
                                                label={ UAGB_Block_Icons.horizontal_spacing }
                                                className={ "uagb-margin-control" }
                                                value={ hinputPaddingDesktop }
                                                onChange={ ( value ) => setAttributes( { hinputPaddingDesktop: value } ) }
                                                min={ 0 }
                                                max={ 100 }
                                                allowReset
                                            />
                                        </Fragment>
                                    )
                                }

                                return <div>{ tabout }</div>
                            }
                        }
                        </TabPanel>
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
                            <TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
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
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ buttonPaddingTypeMobile === "px" } aria-pressed={ buttonPaddingTypeMobile === "px" } onClick={ () => setAttributes( { buttonPaddingTypeMobile: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ buttonPaddingTypeMobile === "%" } aria-pressed={ buttonPaddingTypeMobile === "%" } onClick={ () => setAttributes( { buttonPaddingTypeMobile: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vbuttonPaddingMobile }
													onChange={ ( value ) => setAttributes( { vbuttonPaddingMobile: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hbuttonPaddingMobile }
													onChange={ ( value ) => setAttributes( { hbuttonPaddingMobile: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ buttonPaddingTypeTablet === "px" } aria-pressed={ buttonPaddingTypeTablet === "px" } onClick={ () => setAttributes( { buttonPaddingTypeTablet: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ buttonPaddingTypeTablet === "%" } aria-pressed={ buttonPaddingTypeTablet === "%" } onClick={ () => setAttributes( { buttonPaddingTypeTablet: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vbuttonPaddingTablet }
													onChange={ ( value ) => setAttributes( { vbuttonPaddingTablet: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hbuttonPaddingTablet }
													onChange={ ( value ) => setAttributes( { hbuttonPaddingTablet: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
													<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ buttonPaddingTypeDesktop === "px" } aria-pressed={ buttonPaddingTypeDesktop === "px" } onClick={ () => setAttributes( { buttonPaddingTypeDesktop: "px" } ) }>{ "px" }</Button>
													<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ buttonPaddingTypeDesktop === "%" } aria-pressed={ buttonPaddingTypeDesktop === "%" } onClick={ () => setAttributes( { buttonPaddingTypeDesktop: "%" } ) }>{ "%" }</Button>
												</ButtonGroup>
												<h2>{ __( "Padding" ) }</h2>
												<RangeControl
													label={ UAGB_Block_Icons.vertical_spacing }
													className={ "uagb-margin-control" }
													value={ vbuttonPaddingDesktop }
													onChange={ ( value ) => setAttributes( { vbuttonPaddingDesktop: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={ UAGB_Block_Icons.horizontal_spacing }
													className={ "uagb-margin-control" }
													value={ hbuttonPaddingDesktop }
													onChange={ ( value ) => setAttributes( { hbuttonPaddingDesktop: value } ) }
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						    </TabPanel>
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
        const renderButton = () => {
            
            if ( 'input-button' === layout ) {
                
                return (
                        <button className="uagb-search-submit" type="submit">
                            <span className="uagb-wp-search-button-icon-wrap">
                                { renderSVG( 'fas fa-search' ) }
                            </span>
                        </button>
                )
            }

            return '';
        }
        const renderSearchForm = () => {
            
            if ( 'input-button' === layout || 'input' === layout ) {
                
                return (
                    <form className="uagb-search-wrapper" role="search" action="https://wordpress.test" method="get">
                        <div className="uagb-search-form__container" role="tablist">
                            <input placeholder={ placeholder } 
                            className="uagb-search-form__input" type="search" name="s" title="Search"/>
                            
                            { renderButton() }

                        </div>
                    </form>
                )
            }

            return '';
        }
        const renderIcon = () => {
            
            if ( 'icon' === layout ) {
             
                return (
                    <form className="uagb-search-wrapper" role="search" action="https://wordpress.test" method="get">
                        <div className="uagb-search-form__container uagb-icon-input-toggle" role="tablist">
                            <input placeholder={ placeholder } className="uagb-search-form__input"
                            type="search" name="s" title="Search"/>
                            <span className="uagb-wp-search-icon-wrap">
                                { renderSVG( 'fas fa-search' ) }
                            </span>
                        </div>
                    </form>
                )
            }
            
            return '';
        }
        
		return (
			<div className={ classnames(
                "uagb-wp-search__outer-wrap",
                `uagb-block-${ block_id }`,
                `uagb-layout-${ layout }`
            ) }
            >
            <InspectorControls>
                { generalSettings() }
                { stylingSettings() }
            </InspectorControls>
            { renderSearchForm() }
            { renderIcon() }
            { loadInputGoogleFonts }
            </div>
		)
	}
}

export default UAGBWpSearchEdit
