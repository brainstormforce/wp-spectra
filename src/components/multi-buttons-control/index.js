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
import { blocksAttributes } from '@Controls/getBlocksDefaultAttributes';
import React, { useLayoutEffect, useState } from 'react';
import { select } from '@wordpress/data';

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

	const { getSelectedBlock } = select( 'core/block-editor' );
	const selectedBlock = getSelectedBlock().name.replace( 'uagb/', '' ); // eslint-disable-line @wordpress/no-unused-vars-before-return
	const [ buttonPrimaryStateDesktop, setbuttonPrimaryStateDesktop ] = useState( true );
	const [ buttonPrimaryStateTablet, setbuttonPrimaryStateTablet ] = useState( true );
	const [ buttonPrimaryStateMobile, setbuttonPrimaryStateMobile ] = useState( true );

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
						isSecondary={ data.desktop.value !== option.value || ! buttonPrimaryStateDesktop }
						isPrimary={ data.desktop.value === option.value && buttonPrimaryStateDesktop }
						aria-pressed={ data.desktop.value === option.value }
						onClick={ () => {
							setbuttonPrimaryStateDesktop( true );
							if ( option.value === data.desktop.value && buttonPrimaryStateDesktop ) {
								setbuttonPrimaryStateDesktop( false );
								setAttributes( {
									[ data.desktop.label ]: blocksAttributes[selectedBlock][data.desktop.label].default,
								} );
								return;
							}
							setAttributes( {
								[ data.desktop.label ]: option.value,
							} )
						}}
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
						isSecondary={ data.tablet.value !== option.value || ! buttonPrimaryStateTablet }
						isPrimary={ data.tablet.value === option.value && buttonPrimaryStateTablet }
						aria-pressed={ data.tablet.value === option.value }
						onClick={ () => {
							setbuttonPrimaryStateTablet( true );

							if ( option.value === data.tablet.value && buttonPrimaryStateTablet ) {
								setbuttonPrimaryStateTablet( false );
								setAttributes( {
									[ data.tablet.label ]: blocksAttributes[selectedBlock][data.tablet.label].default,
								} );
								return;
							}
							setAttributes( {
								[ data.tablet.label ]: option.value,
							} )
						}}
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
						isSecondary={ data.mobile.value !== option.value || ! buttonPrimaryStateMobile }
						isPrimary={ data.mobile.value === option.value && buttonPrimaryStateMobile }
						aria-pressed={ data.mobile.value === option.value }
						onClick={ () => {
							setbuttonPrimaryStateMobile( true );

							if ( option.value === data.mobile.value && buttonPrimaryStateMobile ) {
								setbuttonPrimaryStateMobile( false );
								setAttributes( {
									[ data.mobile.label ]: blocksAttributes[selectedBlock][data.mobile.label].default,
								} );
								return;
							}
							setAttributes( {
								[ data.mobile.label ]: option.value,
							} )
						}}
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
		setbuttonPrimaryStateDesktop( true );
		if ( onChange ) {
			onChange( value );
		}

		if ( value === data.value && buttonPrimaryStateDesktop ) {
			setbuttonPrimaryStateDesktop( false );
			setAttributes( {
				[ data.label ]: blocksAttributes[selectedBlock][data.label].default,
			} );

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
						isSecondary={ data.value !== option.value || ! buttonPrimaryStateDesktop }
						isPrimary={ data.value === option.value && buttonPrimaryStateDesktop }
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
