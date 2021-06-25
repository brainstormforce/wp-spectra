/**
 * Box-Shadow reusable component.
 *
 */
 import { __ } from '@wordpress/i18n';
 import Range from '../../components/range/Range.js';
 import AdvancedPopColorControl from '../../components/color-control/advanced-pop-color-control'

const {
	ColorPalette
} = wp.blockEditor

const {
    Button,
	SelectControl,
    RangeControl,
    Dashicon
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class BoxShadowControl extends Component {

	constructor() {
        super( ...arguments )
        this.onAdvancedControlClick  = this.onAdvancedControlClick.bind( this )
        this.onAdvancedControlReset  = this.onAdvancedControlReset.bind( this )
    }
    onAdvancedControlClick() {

		let control = true
		let label = __( "Hide Advanced",'ultimate-addons-for-gutenberg' )

		if( this.state !== null && this.state.showAdvancedControls === true ) {
			control = false
			label = __( "Advanced",'ultimate-addons-for-gutenberg' )
		}

		this.setState(
			{
				showAdvancedControls: control,
				showAdvancedControlsLabel: label
			}
		)
    }
    onAdvancedControlReset() {

        const { setAttributes } = this.props
        
        setAttributes( { boxShadowColor: "" } )
        setAttributes( { boxShadowHOffset: "" } )
        setAttributes( { boxShadowVOffset: "" } )
        setAttributes( { boxShadowBlur: "" } )
        setAttributes( { boxShadowSpread: "" } )
        setAttributes( { boxShadowPosition: "" } )
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
        
        var advancedControls;
        var boxShadowAdvancedControls;
        var resetBoxShadowAdvancedControls;
        if( this.state !== null && true === this.state.showAdvancedControls ) {
            advancedControls = (
                <div className="uagb-box-shadow-advanced">
                    <Fragment>
                    <AdvancedPopColorControl
                        label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
                        colorValue={ ( boxShadowColor.value ) }
                        colorDefault={ '' }
                        onColorChange={ value => setAttributes( { boxShadowColor: value } ) }
                        onColorClassChange={ value => setAttributes( { colorClass: value } ) }
                    />
                    </Fragment>
                    <Fragment>
                    <Range 
                        label={ boxShadowHOffset.label }
                        value={ boxShadowHOffset.value }
                        onChange={ ( value ) => setAttributes( { boxShadowHOffset: value } ) }
                        min={ -100 }
                        max={ 100 } 
                    />
                    </Fragment>
                    <Fragment>
                    <Range 
                        label={ boxShadowVOffset.label }
                        value={ boxShadowVOffset.value }
                        onChange={ ( value ) => setAttributes( { boxShadowVOffset: value } ) }
                        min={ -100 }
                        max={ 100 } 
                    />
                    </Fragment>
                    <Fragment>
                    <Range 
                        label={ boxShadowBlur.label }
                        value={ boxShadowBlur.value }
                        onChange={ ( value ) => setAttributes( { boxShadowBlur: value } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    </Fragment>
                    <Fragment>
                    <Range 
                        label={ boxShadowSpread.label }
                        value={ boxShadowSpread.value }
                        onChange={ ( value ) => setAttributes( { boxShadowSpread: value } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    </Fragment>
                    <Fragment>
                    
                    <div className="uag-box-position-wrap">
						<label className="uag-box-position-label">{ boxShadowPosition.label }</label>
						<SelectControl
                            value={ boxShadowPosition.value }
                            onChange={ ( value ) => setAttributes( { boxShadowPosition: value } ) }
                            options={ [
                                { value: "inset", label: __( "Inset",'ultimate-addons-for-gutenberg' ) },
                                { value: "outset", label: __( "Outset",'ultimate-addons-for-gutenberg' ) },
                            ] }
                        />
					</div>
                    </Fragment>
                </div>
            );
        }
        resetBoxShadowAdvancedControls =  (
            <Button
                className="uagb-size-btn uagb-typography-reset-btn"
                isSmall
                aria-pressed={ ( this.state !== null ) }
                onClick={ this.onAdvancedControlReset }
            ><Dashicon icon="image-rotate" />
            </Button>
        );
        
        boxShadowAdvancedControls = (
            <Button
                className="uagb-size-btn uagb-typography-control-btn"
                isSmall
                aria-pressed={ ( this.state !== null ) }
                onClick={ this.onAdvancedControlClick }
            ><Dashicon icon="admin-tools" />
            </Button>
        );

        return(
            <div className='uag-typography-option-actions'>
                <span>{ this.props.label }</span>
                { boxShadowAdvancedControls }
                { resetBoxShadowAdvancedControls }
                { advancedControls }
            </div>
        )
    }
}

export default BoxShadowControl