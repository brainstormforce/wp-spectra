/**
 * Box-Shadow reusable component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '../color-control/advanced-pop-color-control';
import { Button, Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import MultiButtonsControl from '../multi-buttons-control/index';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
const BoxShadowControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );

	const {
		setAttributes,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
	} = props;

	let advancedControls;
	const activeClass = showAdvancedControls ? 'active' : '';

	if ( showAdvancedControls ) {
		advancedControls = (
			<div className="uagb-box-shadow-advanced">
				<div className="uagb-shadow-color">
					<AdvancedPopColorControl
						label={ boxShadowColor.title }
						colorValue={ boxShadowColor.value }
						onColorChange={ ( value ) =>
							setAttributes( { [ boxShadowColor.label ]: value } )
						}
					/>
				</div>
				<div className="uagb-horizontal-wrap">
					<Range
						label={ boxShadowHOffset.title }
						value={ boxShadowHOffset.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:boxShadowHOffset.value, label:boxShadowHOffset.label}}
						onChange={false}
					/>
				</div>
				<div className="uagb-vertical-wrap">
					<Range
						label={ boxShadowVOffset.title }
						value={ boxShadowVOffset.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:boxShadowVOffset.value, label:boxShadowVOffset.label}}
						onChange={false}
					/>
				</div>
				<div className="uagb-blur-wrap">
					<Range
						label={ boxShadowBlur.title }
						value={ boxShadowBlur.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:boxShadowBlur.value, label:boxShadowBlur.label}}
						onChange={false}
					/>
				</div>
				<div className="uagb-spread-wrap">
					<Range
						label={ boxShadowSpread.title }
						value={ boxShadowSpread.value }
						min={ -100 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:boxShadowSpread.value, label:boxShadowSpread.label}}
						onChange={false}
					/>
				</div>
				<div className="uagb-shadow-type">
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ boxShadowPosition.title }
						data={ {
							value: boxShadowPosition.value,
							label: boxShadowPosition.label,
						} }
						options={ [
							{
								value: 'outset',
								label: __(
									'Outset',
									'ultimate-addons-for-gutenberg'
								),
								tooltip: __(
									'Outset',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'inset',
								label: __(
									'Inset',
									'ultimate-addons-for-gutenberg'
								),
								tooltip: __(
									'Inset (10px)',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						showIcons={ false }
					/>
				</div>
			</div>
		);
	}

	const boxShadowAdvancedControls = (
		<div className="uag-box-shadow-option-actions">
			<span className="uag-control-label">
				{ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
			</span>
			<Button
				className={ 'uag-box-shadow-button' }
				aria-pressed={ showAdvancedControls }
				onClick={ () =>
					toggleAdvancedControls( ! showAdvancedControls )
				}
			>
				<Dashicon icon="edit" />
			</Button>
		</div>
	);

	return (
		<div
			className={ `components-base-control uag-box-shadow-options ${ activeClass }` }
		>
			{ boxShadowAdvancedControls }
			{ showAdvancedControls && advancedControls }
		</div>
	);
};

export default BoxShadowControl;
