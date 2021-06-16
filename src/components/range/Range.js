 import {
    ButtonGroup, Button, Tooltip, Dashicon, RangeControl, __experimentalNumberControl as NumberControl,
 } from '@wordpress/components'
 import { useState, useEffect, useRef } from '@wordpress/element'
 import { __ } from '@wordpress/i18n'
 import './range.scss';
 import map from 'lodash/map';
 import classnames from 'classnames';
 import { Fragment } from '@wordpress/element';


 
 const isNumberControlSupported = !! NumberControl
 
 const Range = props => {
    const {
        allowReset,
        withInputField,
        isShiftStepEnabled,
        ...propsToPass
    } = props

    const valuesRef = useRef(props.value);

    useEffect(() => {
        valuesRef.current = props.value;
    }, [props.value]);
 
    const [ value, setValue ] = useState( props.value === '' || isNaN( props.value ) ? '' : props.value )

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

    const updateValues = ( newVal ) => {
        setValue( props.resetFallbackValue )
        props.onChange( props.resetFallbackValue )
	};

    const onChangeUnits = ( value ) => {
        setValue( value )
        props.onChange( value )
        props.setAttributes( { paddingUnit: value } );
    }

    const initialPosition = props.initialPosition || props.placeholder || '';

    const classes = classnames(
        'components-base-control',
        'uagb-range-control', {
        }
    );
 
    return (
      <Fragment>
      <div className={ classes }>
      <Fragment>
        <div className='uagb-range-control__header'>
            { props.label && <p className={ 'uagb-range-control__label' }>{ props.label }</p> }
            <div className='uagb-range-control__actions'>
                <ButtonGroup className='uagb-range-control__units' aria-label={ __( 'Select Units', 'ultimate-addons-for-gutenberg' ) }>
                { map( unitSizes, ( { unitValue, name } ) => (
                    <Tooltip text={ sprintf(
                        __( '%s units', 'ultimate-addons-for-gutenberg' ),
                        name
                    ) }>
                        <Button
                            key={ unitValue }
                            className={ 'uagb-range-control__units--' + name }
                            isSmall
                            isPrimary={ props.unit === unitValue }
                            isSecondary={ props.unit !== unitValue }
                            aria-pressed={ props.unit === unitValue }
                            aria-label={ sprintf(
                                __( '%s units', 'ultimate-addons-for-gutenberg' ),
                                name
                            ) }
                            onClick={ () => onChangeUnits( unitValue ) }
                        >
                            { unitValue }
                        </Button>
                    </Tooltip>
                ) ) }
                </ButtonGroup>
            <Button
                className='uagb-spacing-reset'
                disabled={ JSON.stringify( props.value ) === JSON.stringify( valuesRef.current )} 
                isSecondary
                isSmall
                onClick={ e => {
                e.preventDefault();
                let value = JSON.parse(JSON.stringify( valuesRef.current ));
                updateValues(value);
            }}>
                <Dashicon icon='image-rotate'/>
            </Button>
            </div>
        </div>
        <div className='uagb-range-control__mobile-controls'>
        <RangeControl
            initialPosition={ props.initialPosition }
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
                placeholder={ props.placeholder !== null ? props.placeholder : initialPosition }
            />
        ) }
        </div>
        </Fragment>
     </div>
     </Fragment>
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