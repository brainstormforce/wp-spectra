 import {
    ButtonGroup, Button, Tooltip, Dashicon, RangeControl, __experimentalNumberControl as NumberControl,
 } from '@wordpress/components'
 import { useState, useEffect, Fragment } from '@wordpress/element'
 import { __ } from '@wordpress/i18n'
 import './range.scss';
 import map from 'lodash/map';
 import classnames from 'classnames';

 const isNumberControlSupported = !! NumberControl
 
 let cachedValue = 'initial';
 let resetStateDisabled = true;

 const Range = props => {
    const {
        allowReset,
        withInputField,
        isShiftStepEnabled,
        ...propsToPass
    } = props

    useEffect(() => {
        cachedValue = props.value;
        resetStateDisabled = true;
    }, []);

    const [ value, setValue ] = useState( props.value );
    

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
        setValue( cachedValue);
        props.onChange( cachedValue );
        resetStateDisabled = true;
	};

    const onChangeUnits = ( value ) => {
        setValue( cachedValue);
        props.onChange( cachedValue );
        props.setAttributes( { paddingUnit: value } );
    }

    const classes = classnames(
        'components-base-control',
        'uagb-range-control'
    );
    
    if ( 'initial' === cachedValue ) {
        cachedValue = props.value;
    }
    
    if ( JSON.stringify( props.value ) !== JSON.stringify( cachedValue ) ) {

        resetStateDisabled = false;
    }
    
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
                disabled={ resetStateDisabled } 
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
            value={ propsToPass.value }
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