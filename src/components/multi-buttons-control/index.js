/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveToggle from '../responsive-toggle';
/**
 * Import Css
 */
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

const MultiButtonsControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const {
		data,
		label,
		options,
		showIcons,
		setAttributes,
		responsive,
		onChange,
	} = props;

	const deviceType = useDeviceType();
	const iconsClass = showIcons ? 'uag-multibutton-icons' : '';
	if ( ! options ) {
		return __(
			'Please add a option props to MultiButtonsControl',
			'ultimate-addons-for-gutenberg'
		);
	}

	if ( responsive ) {
		const output = {};

		output.Desktop = (
			<ButtonGroup
				className={ `uagb-multi-button-button-group` }
				aria-label={ label }
			>
				{ options.map( ( option ) => (
					<Button
						key={ `option-${ option.value }` }
						className={ `uagb-multi-button` }
						isLarge
						isSecondary={ data.desktop.value !== option.value }
						isPrimary={ data.desktop.value === option.value }
						aria-pressed={ data.desktop.value === option.value }
						onClick={ () =>
							setAttributes( {
								[ data.desktop.label ]: option.value,
							} )
						}
						aria-label={ option.tooltip }
						label={ option.tooltip }
						showTooltip={ option.tooltip ? true : false }
					>
						{ showIcons ? option.icon : option.label }
					</Button>
				) ) }
			</ButtonGroup>
		);
		output.Tablet = (
			<ButtonGroup
				className={ `uagb-multi-button-button-group` }
				aria-label={ label }
			>
				{ options.map( ( option ) => (
					<Button
						key={ `option-${ option.value }` }
						className={ `uagb-multi-button` }
						isLarge
						isSecondary={ data.tablet.value !== option.value }
						isPrimary={ data.tablet.value === option.value }
						aria-pressed={ data.tablet.value === option.value }
						onClick={ () =>
							setAttributes( {
								[ data.tablet.label ]: option.value,
							} )
						}
						aria-label={ option.tooltip }
						label={ option.tooltip }
						showTooltip={ option.tooltip ? true : false }
					>
						{ showIcons ? option.icon : option.label }
					</Button>
				) ) }
			</ButtonGroup>
		);
		output.Mobile = (
			<ButtonGroup
				className={ `uagb-multi-button-button-group` }
				aria-label={ label }
			>
				{ options.map( ( option ) => (
					<Button
						key={ `option-${ option.value }` }
						className={ `uagb-multi-button` }
						isLarge
						isSecondary={ data.mobile.value !== option.value }
						isPrimary={ data.mobile.value === option.value }
						aria-pressed={ data.mobile.value === option.value }
						onClick={ () =>
							setAttributes( {
								[ data.mobile.label ]: option.value,
							} )
						}
						aria-label={ option.tooltip }
						label={ option.tooltip }
						showTooltip={ option.tooltip ? true : false }
					>
						{ showIcons ? option.icon : option.label }
					</Button>
				) ) }
			</ButtonGroup>
		);
		return (
			<div
				className={ `components-base-control uagb-multi-buttons-control ${ iconsClass }` }
			>
				<div className="uagb-control__header uagb-multibuttons-header uagb-size-type-field-tabs">
					<ResponsiveToggle
						label= { label }
						responsive= { responsive }
					/>
				</div>
				{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
				{ props.help && (
					<p className="uag-control-help-notice">{ props.help }</p>
				) }
			</div>
		);
	}

	const onClickHandler = ( value ) => {
		if ( onChange ) {
			onChange( value );
			return;
		}
		setAttributes( {
			[ data.label ]: value,
		} );
	};
	return (
		<div
			className={ `components-base-control uagb-multi-buttons-control ${ iconsClass }` }
		>
			<span className="uagb-multi-buttons-control__label uag-control-label">
				{ label }
			</span>
			<ButtonGroup
				className={ `uagb-multi-button-button-group` }
				aria-label={ label }
			>
				{ options.map( ( option ) => (
					<Button
						key={ `option-${ option.value }` }
						className={ `uagb-multi-button` }
						isLarge
						isSecondary={ data.value !== option.value }
						isPrimary={ data.value === option.value }
						aria-pressed={ data.value === option.value }
						onClick={ () => onClickHandler( option.value ) }
						aria-label={ option.tooltip }
						label={ option.tooltip }
						showTooltip={ option.tooltip ? true : false }
					>
						{ showIcons ? option.icon : option.label }
					</Button>
				) ) }
			</ButtonGroup>
			{ props.help && (
				<p className="uag-control-help-notice">{ props.help }</p>
			) }
		</div>
	);
};

export default MultiButtonsControl;
