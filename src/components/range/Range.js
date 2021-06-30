 import {
    ButtonGroup, Button, Tooltip, Dashicon, RangeControl, __experimentalNumberControl as NumberControl,
 } from '@wordpress/components'
 import { useState, useEffect } from '@wordpress/element'
 import { __ } from '@wordpress/i18n'
 import './range.scss';

 const isNumberControlSupported = !! NumberControl

 const Range = props => {

    const {
        withInputField,
        isShiftStepEnabled,
    } = props

    const [ value, setValue ] = useState( props.value );

    let defaultCache = {
        value : props.value,
        resetDisabled : true
    }

    const [ cachedValue, setCacheValue ] = useState( defaultCache );

    useEffect(() => {

        let cachedValueUpdate = { ...cachedValue }

        if ( undefined !== value ) {

            cachedValueUpdate['value'] = value
            setCacheValue( cachedValueUpdate );
        }
    }, []);

    useEffect(() => {

        let cachedValueUpdate = { ...cachedValue }

        if ( JSON.stringify( value ) !== JSON.stringify( cachedValueUpdate.value ) ) {
    
            cachedValueUpdate['resetDisabled'] = false;
            setCacheValue( cachedValueUpdate );
        }
    }, [ props.value ]);

    

    const unitSizes = [
        {
            name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
            unitValue: 'px',
        },
        {
            name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
            unitValue: 'em',
        }
    ];
 
    const handleOnChange = ( value ) => {
        setValue( value );
        const parsedValue = parseFloat( value );
        props.onChange( parsedValue );
        return;
    }

    const resetValues = () => {

        let cachedValueUpdate = { ...cachedValue }

        setValue( cachedValueUpdate.value);
        props.onChange( cachedValueUpdate.value );
        
        cachedValueUpdate['resetDisabled'] = true;
        setCacheValue( cachedValueUpdate );
	};

    const onChangeUnits = ( value ) => {
        props.setAttributes( { paddingUnit: value } );
    }
    
    const onUnitSizeClick = ( unitSizes ) => {
        const items = [];
        unitSizes.map( key => items.push(
            <Tooltip text={ sprintf(
                __( '%s units', 'ultimate-addons-for-gutenberg' ),
                key.name
            ) }>
                <Button
                    key={ key.unitValue }
                    className={ 'uagb-range-control__units--' + key.name }
                    isSmall
                    isPrimary={ props.unit === key.unitValue }
                    isSecondary={ props.unit !== key.unitValue }
                    aria-pressed={ props.unit === key.unitValue }
                    aria-label={ sprintf(
                        __( '%s units', 'ultimate-addons-for-gutenberg' ),
                        key.name
                    ) }
                    onClick={ () => onChangeUnits( key.unitValue ) }
                >
                    { key.unitValue }
                </Button>
            </Tooltip>
        ))

        return( items );
    }

    return (
      <div className='components-base-control'>
            <div className='uagb-range-control__header'>
                { props.label && <p className={ 'uagb-range-control__label' }>{ props.label }</p> }
                <div className='uagb-range-control__actions'>
                    <ButtonGroup className='uagb-range-control__units' aria-label={ __( 'Select Units', 'ultimate-addons-for-gutenberg' ) }>
                        { onUnitSizeClick( unitSizes ) }
                    </ButtonGroup>
                    <Button
                        className='uagb-spacing-reset'
                        disabled={ cachedValue.resetDisabled } 
                        isSecondary
                        isSmall
                        onClick={ e => {
                        e.preventDefault();
                        resetValues();
                    }}>
                        <Dashicon icon='image-rotate'/>
                    </Button>
                </div>
            </div>
            <div className='uagb-range-control__mobile-controls'>
                <RangeControl
                    value={ value }
                    onChange={ handleOnChange }
                    withInputField={ false }
                    allowReset={ false }
                    max={ props.max }
                    min={ props.min }
                />
                { withInputField && isNumberControlSupported && (
                    <NumberControl
                        disabled={ props.disabled }
                        isShiftStepEnabled={ isShiftStepEnabled }
                        max={ props.max }
                        min={ props.min }
                        onChange={ handleOnChange }
                        value={ value }
                    />
                ) }
            </div>
     </div>
    );
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
    unit:["px","em"],
    onChange: () => {},
 }
 
 export default Range