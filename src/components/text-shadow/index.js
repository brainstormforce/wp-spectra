/**
 * Box-Shadow reusable component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '../color-control/advanced-pop-color-control';
import { Button, Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select } from '@wordpress/data'
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

const TextShadowControl = ( props ) => {
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
		textShadowColor,
		textShadowHOffset,
		textShadowVOffset,
		textShadowBlur
	} = props;

	let advancedControls;
	const activeClass = showAdvancedControls ? 'active' : '';

	if ( showAdvancedControls ) {
		advancedControls = (
			<div className="uagb-box-shadow-advanced">
				<div className="uagb-shadow-color">
					<AdvancedPopColorControl
						label={ textShadowColor.title }
						colorValue={ textShadowColor.value }
						onColorChange={ ( value ) =>
							setAttributes( { [ textShadowColor.label ]: value } )
						}
					/>
				</div>
				<div className="uagb-horizontal-wrap">
					<Range
						label={ textShadowHOffset.title }
						value={ textShadowHOffset.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:textShadowHOffset.value, label:textShadowHOffset.label}}
						onChange={false}
					/>
				</div>
				<div className="uagb-vertical-wrap">
					<Range
						label={ textShadowVOffset.title }
						value={ textShadowVOffset.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:textShadowVOffset.value, label:textShadowVOffset.label}}
						onChange={false}
					/>
				</div>
				<div className="uagb-blur-wrap">
					<Range
						label={ textShadowBlur.title }
						value={ textShadowBlur.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:textShadowBlur.value, label:textShadowBlur.label}}
						onChange={false}
					/>
				</div>
			</div>
		);
	}

	const textShadowAdvancedControls = (
		<div className="uag-text-shadow-option-actions">
			<span className="uag-control-label">
				{ __( 'Text Shadow', 'ultimate-addons-for-gutenberg' ) }
			</span>
			<Button
				className={ 'uag-text-shadow-button' }
				aria-pressed={ showAdvancedControls }
				onClick={ () => {
						toggleAdvancedControls( ! showAdvancedControls )
						if ( ! showAdvancedControls ) {
							const { getSelectedBlock } = select( 'core/block-editor' );
							const blockName = getSelectedBlock()?.name;
							const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );
							const data = {
								...uagSettingState,
								[blockName] : {
									...uagSettingState?.[blockName],
									selectedSetting : '.uag-text-shadow-options'
								}
							}

							const uagLocalStorage = getUAGEditorStateLocalStorage();
							if ( uagLocalStorage ) {
								uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
							}
						}
					}
				}
			>
				<Dashicon icon="edit" />
			</Button>
		</div>
	);

	return (
		<div
			className={ `components-base-control uag-text-shadow-options ${ activeClass }` }
		>
			{ textShadowAdvancedControls }
			{ showAdvancedControls && advancedControls }
		</div>
	);
};

export default TextShadowControl;
