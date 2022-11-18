import {
    TextControl,
    TextareaControl,
} from '@wordpress/components';
import ResponsiveToggle from '../responsive-toggle';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import classnames from 'classnames';
import UAGReset from '../reset';

const UAGTextControl = ( props ) => {

    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const handleOnChange = ( newValue ) => {

		if ( props?.setAttributes ) {
			props?.setAttributes( {
				[ props?.data?.label ]: newValue,
			} )
		}
		if ( props?.onChange ) {
			props?.onChange( newValue );
		}
	};

    const resetValues = ( defaultValues ) => {

		if ( props?.onChange ) {
			props?.onChange( defaultValues[props?.data?.label] )
		}
	};

    const HeaderControls = () => {

        return(
            <div className="uagb-control__header">
                <ResponsiveToggle
					label= { props?.label }
				/>
				<div className="uagb-number-control__actions uagb-control__actions">
					<UAGReset
						onReset={resetValues}
						attributeNames = {[
							props?.data?.label
						]}
						setAttributes={ props?.setAttributes }
					/>
				</div>
			</div>
        );
    };

    return(
        <>
            <div className="components-base-control uagb-text-control uagb-size-type-field-tabs">
                { props?.variant !== 'inline' && props?.showHeaderControls &&
                    <HeaderControls />
                }
                <div
                    className={ classnames(
                        'uagb-text-control__controls',
                        'uagb-text-control__controls-' + props?.variant,
                    ) }>
                    { ( props?.variant !== 'textarea' ) &&
                        <TextControl
                            label = { ( props?.variant === 'inline' ) || ( props?.variant !== 'inline' && ! props?.showHeaderControls ) ? ( props?.label ) : false }
                            value = { props?.value }
                            onChange = { handleOnChange }
                            autoComplete = { props?.autoComplete }
                        />
                    }
                    { ( props?.variant === 'textarea' ) &&
                        <TextareaControl
                            label = { ( ! props?.showHeaderControls ) ? ( props?.label ) : false }
                            value = { props?.value }
                            onChange = { handleOnChange }
                            autoComplete = { props?.autoComplete }
                        />
                    }
                </div>
                { props?.help && (
                    <p className="uag-control-help-notice">{ props?.help }</p>
                ) }
            </div>
        </>
    );
};

UAGTextControl.defaultProps = {
	label: __( 'Spectra Text Control', 'ultimate-addons-for-gutenberg' ),
	className: '',
	allowReset: true,
	resetFallbackValue: '',
	placeholder: null,
    variant: 'full-width',
    autoComplete: 'off',
    showHeaderControls: true,
};

export default UAGTextControl;