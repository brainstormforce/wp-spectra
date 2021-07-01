 import {
  Button, Dashicon, RangeControl, __experimentalNumberControl as NumberControl,
 } from '@wordpress/components'
 import { useState } from '@wordpress/element'
 import { __ } from '@wordpress/i18n'
 import './range.scss';
 
 const isNumberControlSupported = !! NumberControl
 
 const Range = props => {
    const {
        allowReset,
        withInputField,
        isShiftStepEnabled,
        ...propsToPass
    } = props
 
    const [ value, setValue ] = useState( props.value === '' || isNaN( props.value ) ? '' : props.value )
 
    const handleOnChange = value => {
        setValue( value )
        if ( ! isNaN( value ) ) {
            const parsedValue = parseFloat( value )
            if ( ! isNaN( parsedValue ) ) {
                props.onChange( parsedValue )
                return
            }
        }
        props.onChange( props.resetFallbackValue )
    }
 
    const handleOnReset = () => {
        setValue( props.resetFallbackValue )
        props.onChange( props.resetFallbackValue )
    }

    const initialPosition = props.initialPosition || props.placeholder || '';

    let disabled = ( allowReset && props.value != props.initialPosition ) ? false : true ;
 
    return <div
        className='uagb-range-control'>
        <RangeControl
            { ...propsToPass }
            initialPosition={ props.initialPosition }
            onChange={ handleOnChange }
            withInputField={ false }
            allowReset={ false }
            max={ props.max }
            min={ props.min }
        />
        <Button
            className="uagb-spacing-reset"
            disabled={ disabled }
            isSecondary
            isSmall
            onClick={ handleOnReset }
        >
            <Dashicon icon="image-rotate" />
        </Button>
        { withInputField && isNumberControlSupported && (
            <NumberControl
                disabled={ props.disabled }
                isShiftStepEnabled={ isShiftStepEnabled }
                max={ props.max }
                min={ props.min }
                onChange={ handleOnChange }
                value={ value }
                placeholder={ props.placeholder !== null ? props.placeholder : initialPosition }
            />
        ) }
     </div>
 }
 
 Range.defaultProps = {
     label: __( 'Margin', 'ultimate-addons-for-gutenberg' ),
     className: '',
     allowReset: true,
     withInputField: true,
     isShiftStepEnabled: true,
     max: Infinity,
     min: -Infinity,
     resetFallbackValue: '',
     placeholder: null,
     initialPosition: 0,
     onChange: () => {},
 }
 
 export default Range