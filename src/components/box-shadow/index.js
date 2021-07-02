/**
 * Box-Shadow reusable component.
 *
 */
 import { __ } from '@wordpress/i18n';
 import Range from '../../components/range/Range.js';
 import AdvancedPopColorControl from '../../components/color-control/advanced-pop-color-control.js'
 import { Button, SelectControl, Dashicon } from '@wordpress/components';
 import { useState } from '@wordpress/element';

 const BoxShadowControl = props => {

    const [ value, setValue ] = useState( props );

    const onAdvancedControlClick = () => {

		let control = true
		let label = __( "Hide Advanced",'ultimate-addons-for-gutenberg' )

		if( value !== null && value.showAdvancedControls === true ) {
			control = false
			label = __( "Advanced",'ultimate-addons-for-gutenberg' )
		}

		setValue(
			{
				showAdvancedControls: control,
				showAdvancedControlsLabel: label
			}
		)
    }

    const { 
        setAttributes,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition
    } = props
    
    var advancedControls;
    var boxShadowAdvancedControls;

    if( value !== null && true === value.showAdvancedControls ) {
        advancedControls = (
            <div className="uagb-box-shadow-advanced">
                <AdvancedPopColorControl
                    label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
                    colorValue={ ( boxShadowColor.value ) }
                    colorDefault={ '' }
                    onColorChange={ value => setAttributes( { boxShadowColor: value } ) }
                    onColorClassChange={ value => setAttributes( { colorClass: value } ) }
                />
                <div clasName="uagb-horizontal-wrap">
                <Range 
                    label={ boxShadowHOffset.label }
                    value={ boxShadowHOffset.value }
                    onChange={ ( value ) => setAttributes( { boxShadowHOffset: value } ) }
                    min={ -100 }
                    max={ 100 }
                    displayUnit= { false }
                />
                </div>
                <div clasName="uagb-vertical-wrap">
                <Range 
                    label={ boxShadowVOffset.label }
                    value={ boxShadowVOffset.value }
                    onChange={ ( value ) => setAttributes( { boxShadowVOffset: value } ) }
                    min={ -100 }
                    max={ 100 } 
                    displayUnit= { false }
                />
                </div>
                <div clasName="uagb-blur-wrap">
                <Range 
                    label={ boxShadowBlur.label }
                    value={ boxShadowBlur.value }
                    onChange={ ( value ) => setAttributes( { boxShadowBlur: value } ) }
                    min={ 0 }
                    max={ 100 }
                    displayUnit= { false }
                />
                </div>
                <div clasName="uagb-spread-wrap">
                <Range 
                    label={ boxShadowSpread.label }
                    value={ boxShadowSpread.value }
                    onChange={ ( value ) => setAttributes( { boxShadowSpread: value } ) }
                    min={ 0 }
                    max={ 100 }
                    displayUnit= { false }
                />
                </div>
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
            </div>
        );
    }
    
    boxShadowAdvancedControls = (
        <Button
            className="uagb-size-btn uagb-typography-control-btn"
            isSmall
            aria-pressed={ ( value !== null ) }
            onClick={ onAdvancedControlClick }
        ><Dashicon icon="admin-tools" />
        </Button>
    );

    return(
        <div className='uag-typography-option-actions'>
            <span>{ props.label }</span>
            { boxShadowAdvancedControls }
            { advancedControls }
        </div>
    )
}

export default BoxShadowControl