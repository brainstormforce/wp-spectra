/**
 * Advanced Color Control.
 *
 */
import cIcons from './uagb-color-icons';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';
import { __ } from '@wordpress/i18n';
import {
	Button,
	Popover,
	ColorIndicator,
	Tooltip,
	Dashicon,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import UAGReset from '../reset';

const AdvancedPopColorControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		alpha,
		colorValue,
		opacityValue,
		backgroundVideoOpacity,
		onOpacityChange,
		data,
		setAttributes,
		onColorChange,
		label,
		colors,
		help
	} = props;

	const [ value, setValue ] = useState( {
		alpha: false === alpha ? false : true,
		colors: [],
		classSat: 'first',
		currentColor: colorValue,
		inherit: false,
		currentOpacity:
			opacityValue !== undefined ? opacityValue : 1,
		isPalette:
			colorValue && colorValue.startsWith( 'palette' )
				? true
				: false,
		refresh: false,
	} );
	const [ visible, setVisible ] = useState( { isVisible: false } );

	useEffect( () => {
		onChangeComplete( colorValue, '' )
	}, [ colorValue ] );

	const onChangeComplete = ( color, palette ) => {
		let opacity = backgroundVideoOpacity?.value;
		let newColor;
		if ( palette ) {
			newColor = color;
		} else if (	color?.rgb && color?.rgb?.a && 1 !== color?.rgb?.a ) {

			if ( onOpacityChange ) {
				opacity = color?.rgb?.a;
			}

			newColor =
				'rgba(' +
				color?.rgb?.r +
				',' +
				color?.rgb?.g +
				',' +
				color?.rgb?.b +
				',' +
				color?.rgb?.a +
				')';

		} else if ( color?.hex ) {
			newColor = color?.hex;
		} else {
			newColor = color;
		}

		setValue( {
			currentColor: newColor,
			currentOpacity: opacity,
			isPalette: palette ? true : false,
		} );

		if ( true === palette ) {
			setValue( {
				refresh: ! value?.refresh,
			} );
		}

		if ( data && setAttributes ) {
			setAttributes( { [ data?.label ]: newColor } )
		}
		if ( onColorChange ) {
			onColorChange( newColor );
		}

		if ( onOpacityChange ) {
			onOpacityChange( opacity );
		}

	};

	const toggleVisible = () => {
		setVisible( { isVisible: true } );
	};

	const toggleClose = () => {
		if ( visible.isVisible === true ) {
			setVisible( { isVisible: false } );
		}
	};

	const resetValues = ( resetValue ) => {
		setValue( {
			...value,
			currentColor: resetValue[data?.label],
		} );
	};

	const colorVal = value.currentColor ? value.currentColor : colorValue;

	const pickIconColorBasedOnBgColorAdvanced = ( color ) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( color );
		const parsedColor = result
		? {
				r: parseInt( result[ 1 ], 16 ),
				g: parseInt( result[ 2 ], 16 ),
				b: parseInt( result[ 3 ], 16 ),
		  }
		: null;
		if ( parsedColor ) {
			const brightness = Math.round( ( ( parsedColor.r * 299 ) +
						( parsedColor.g * 587 ) +
						( parsedColor.b * 114 ) ) / 1000 );
			const textColour = ( brightness > 125 ) ? 'black' : 'white';
			return textColour;
		}
		return 'white';
	}
	const globalIconColor = pickIconColorBasedOnBgColorAdvanced( maybeGetColorForVariable( colorVal ) );

	const globalIndicator = ( colorVal && colorVal.includes( 'var' ) ) ? `uag-global-indicator uag-global-icon-${globalIconColor}` : '';

	return (
		<div className="uagb-color-popover-container components-base-control new-uagb-advanced-colors">
			<div className="uagb-advanced-color-settings-container">
				{ label && (
					<span className="uagb-beside-color-label uag-control-label">
						{ label }
					</span>
				) }
				<UAGReset
					onReset={resetValues}
					attributeNames = {[
						data?.label
					]}
					setAttributes={ setAttributes }
				/>
				<div className="uagb-beside-color-click">
					{ visible.isVisible && (
						<Popover
							position="top left"
							className="uagb-popover-color new-uagb-advanced-colors-pop"
							onClose={ toggleClose }
						>
							{ value.refresh && (
								<>
									<ColorPicker
										color={ maybeGetColorForVariable( colorVal ) }
										onChangeComplete={ ( color ) =>
											onChangeComplete( color, '' )
										}
									/>
								</>
							) }
							{ ! value.refresh &&  (
								<>
									<ColorPicker
										color={ maybeGetColorForVariable( colorVal ) }
										onChangeComplete={ ( color ) =>
											onChangeComplete( color, '' )
										}
									/>

								</>
							) }
							{ colors && (
								<ColorPalette
									color={ colorVal }
									colors={ colors }
									onChange={ ( color ) =>
										onChangeComplete( color, true )
									}
									clearable={ false }
									disableCustomColors={ true }
								/>
							) }
							<button type="button" onClick = { () => { onChangeComplete( '', true ) } } className="uagb-clear-btn-inside-picker components-button components-circular-option-picker__clear is-secondary is-small">{ __( 'Clear' ) }</button>
						</Popover>
					) }
					{ visible.isVisible && (
						<Tooltip text={ __( 'Select Color' ) }>
							<Button
								className={ `uagb-color-icon-indicate uagb-has-alpha` }
								onClick={ toggleClose }
							>
								<ColorIndicator
									className={`uagb-advanced-color-indicate ${globalIndicator}`}
									colorValue={ colorVal }
								/>
								{ '' === colorVal && value.inherit && (
									<span className="color-indicator-icon">
										{ cIcons.inherit }
									</span>
								) }
								{ colorValue &&
									colorValue.startsWith(
										'palette'
									) && (
										<span className="color-indicator-icon">
											{ <Dashicon icon="admin-site" /> }
										</span>
									) }
							</Button>
						</Tooltip>
					) }
					{ ! visible.isVisible && (
						<Tooltip text={ __( 'Select Color' ) }>
							<Button
								className={ `uagb-color-icon-indicate uagb-has-alpha` }
								onClick={ toggleVisible }
							>
								<ColorIndicator
									className={`uagb-advanced-color-indicate ${globalIndicator}`}
									colorValue={ colorVal }
								/>
								{ '' === colorVal && value.inherit && (
									<span className="color-indicator-icon">
										{ cIcons.inherit }
									</span>
								) }
								{ colorValue &&
									colorValue.startsWith(
										'palette'
									) && (
										<span className="color-indicator-icon">
											{ <Dashicon icon="admin-site" /> }
										</span>
									) }
							</Button>
						</Tooltip>
					) }
				</div>
			</div>
			{ help && (
				<p className="uag-control-help-notice">{ help }</p>
			) }
		</div>
	);
};

export default withSelect( ( select ) => {
	const settings = select( 'core/block-editor' ).getSettings();
	const colors = settings.colors;
	return { colors };
} )( AdvancedPopColorControl );
