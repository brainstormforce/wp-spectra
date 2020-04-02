/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n

const {
	ColorPalette
} = wp.blockEditor

const {
	SelectControl,
	RangeControl
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class BoxShadowControl extends Component {

	constructor() {
		super( ...arguments )
    }
    render() {
        const { 
            setAttributes,
            boxShadowColor,
            boxShadowHOffset,
            boxShadowVOffset,
            boxShadowBlur,
            boxShadowSpread,
            boxShadowPosition
        } = this.props

        return(
            <div className="uag-box-shadow-options">
                <Fragment>
                <p className="uagb-setting-label">{ boxShadowColor.label }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: boxShadowColor.value }} ></span></span></p>
                <ColorPalette
                    value={ boxShadowColor.value }
                    onChange={ ( colorValue ) => setAttributes( { boxShadowColor: colorValue } ) }
                    allowReset
                />
                </Fragment>
                <Fragment>
                <h2>{ boxShadowHOffset.label }</h2>
                <RangeControl
                    value={ boxShadowHOffset.value }
                    onChange={ ( value ) => setAttributes( { boxShadowHOffset: value } ) }
                    min={ 0 }
                    max={ 100 }
                    allowReset
                />
                </Fragment>
                <Fragment>
                <h2>{ boxShadowVOffset.label }</h2>
                <RangeControl
                    value={ boxShadowVOffset.value }
                    onChange={ ( value ) => setAttributes( { boxShadowVOffset: value } ) }
                    min={ 0 }
                    max={ 100 }
                    allowReset
                />
                </Fragment>
                <Fragment>
                <h2>{ boxShadowBlur.label }</h2>
                <RangeControl
                    value={ boxShadowBlur.value }
                    onChange={ ( value ) => setAttributes( { boxShadowBlur: value } ) }
                    min={ 0 }
                    max={ 100 }
                    allowReset
                />
                </Fragment>
                <Fragment>
                <h2>{ boxShadowSpread.label }</h2>
                <RangeControl
                    value={ boxShadowSpread.value }
                    onChange={ ( value ) => setAttributes( { boxShadowSpread: value } ) }
                    min={ 0 }
                    max={ 100 }
                    allowReset
                />
                </Fragment>
                <Fragment>
                <SelectControl
                    label={ boxShadowPosition.label }
                    value={ boxShadowPosition.value }
                    onChange={ ( value ) => setAttributes( { boxShadowPosition: value } ) }
                    options={ [
                        { value: "inset", label: __( "Inset" ) },
                        { value: "outset", label: __( "Outset" ) },
                    ] }
                />
                </Fragment>
            </div>
        )
    }
}

export default BoxShadowControl