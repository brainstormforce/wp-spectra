/* eslint-disable jsx-a11y/label-has-for */
import React, {useLayoutEffect} from 'react';
import Separator from '@Components/separator';
import { useSelect } from '@wordpress/data';
import {
    TextControl,
    TextareaControl,
} from '@wordpress/components';
import ResponsiveToggle from '../responsive-toggle';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
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

	const selectedBlock = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getSelectedBlock();
	}, [] );

	const registerTextExtender = props.enableDynamicContent && props.name ? wp.hooks.applyFilters( 'uagb.registerTextExtender', '', selectedBlock?.name, props.name, props.dynamicContentType ) : null;

	const isEnableDynamicContent = () => {
		if( !props.enableDynamicContent || ! props.name ){
			return false;
		}
		const dynamicContent = selectedBlock?.attributes?.dynamicContent
		if( dynamicContent && dynamicContent?.[props.name]?.enable === true ) {
			return true
		}
		return false;
	}


    const handleOnChange = ( newValue ) => {

		if( props.name ){
			props.setAttributes( { [props.name]: newValue } )
		}else if ( props?.setAttributes ) {
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
            <div className={`components-base-control uagb-text-control uagb-size-type-field-tabs${isEnableDynamicContent() ? ' uagb-text-control--open-dynamic-content' : ''}`}>
                { props?.variant !== 'inline' && props?.showHeaderControls &&
                    <HeaderControls />
                }
                <div
                    className={ classnames(
                        'uagb-text-control__controls',
                        'uagb-text-control__controls-' + props?.variant,
                    ) }>
                    {
						!isEnableDynamicContent() && (
							<>
								{ ( props?.variant !== 'textarea' ) &&
									<TextControl
										label = { ( props?.variant === 'inline' ) || ( props?.variant !== 'inline' && ! props?.showHeaderControls ) ? ( props?.label ) : false }
										value = { props?.value }
										onChange = { handleOnChange }
										autoComplete = { props?.autoComplete }
										readOnly={isEnableDynamicContent()}
									/>
								}
								{ ( props?.variant === 'textarea' ) &&
									<TextareaControl
										label = { ( ! props?.showHeaderControls ) ? ( props?.label ) : false }
										value = { props?.value }
										onChange = { handleOnChange }
										autoComplete = { props?.autoComplete }
										readOnly={isEnableDynamicContent()}
									/>
								}
							</>
						)
					}
					{
						isEnableDynamicContent() && props?.variant === 'inline' && (
							<div className="components-base-control">
								<div className="components-base-control__field">
									<label className="components-base-control__label">{props.label}</label>
								</div>
							</div>
						)
					}
					{
						registerTextExtender
					}
                </div>

                { props?.help && (
                    <p className="uag-control-help-notice">{ props?.help }</p>
                ) }
				{
					isEnableDynamicContent() && (
						<Separator />
					)
				}
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
	dynamicContentType: 'url', // url / text
	enableDynamicContent: false
};

export default UAGTextControl;
