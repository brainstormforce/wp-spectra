import { SelectControl, Button, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select, dispatch } from '@wordpress/data';

const UAGPresets = ( props ) => {

    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const {
        setAttributes,
        presets,
        presetInputType,
        label
    } = props;

	const [ selectedPresetState, setPreset ] = useState( '' );

    const updatePresets = ( selectedPreset ) => {

        setPreset( selectedPreset );
        if ( presets ) {
            presets.map( ( preset ) => {
				if ( preset.value ) {
					if ( 'default' !== selectedPreset && 'default' === preset.value && preset.attributes ) {
						preset.attributes.map( ( presetItem ) => {
							setAttributes( { [presetItem.label]: presetItem.value } )
							return presetItem;
						} );
					}
					if ( preset.value && preset.value === selectedPreset && preset.attributes ) {
						preset.attributes.map( ( presetItem ) => {
							setAttributes( { [presetItem.label]: presetItem.value } )
							return presetItem;
						} );

						if ( preset.childAttributes ) {
							updateChildBlockAttributes( preset );
						}
					}
				}
				return preset;
            } );
        }
    }

    const updateChildBlockAttributes = ( preset ) => {

        const { getSelectedBlock } = select( 'core/block-editor' );

        let childBlocks = [];

        if ( getSelectedBlock().innerBlocks ) {
            childBlocks = getSelectedBlock().innerBlocks;
        }

        const childBlocksClientIds = [];

        childBlocks.map( ( childBlock ) => {
            if ( childBlock.clientId ) {
                childBlocksClientIds.push( childBlock.clientId );
            }
            return childBlock;
        } );

        const childBlocksAttributes = {};

        preset.childAttributes.map( ( attr ) => {
            childBlocksAttributes[attr.label] = attr.value;
            return attr;
        } );

        childBlocksClientIds.map( ( clientId ) => {
            dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, childBlocksAttributes );
            return clientId;
        } );
    }

	const resetValues = () => {
		let defaultAttributes = null;
		let defaultChildAttributes = null;

		presets.map( ( preset ) => {

			if ( preset.defaultAttributes ) {
				defaultAttributes = preset.defaultAttributes;
			}

			if ( preset.defaultChildAttributes ) {
				defaultChildAttributes = preset.defaultChildAttributes;
			}

			if ( defaultAttributes && preset.value && selectedPresetState === preset.value ) {
				if ( preset.attributes ) {
					preset.attributes.map( ( presetItem ) => {
						if ( defaultAttributes[presetItem.label] && undefined !== defaultAttributes[presetItem.label].default ) {
							setAttributes( { [presetItem.label]: defaultAttributes[presetItem.label].default } )
						}
						return presetItem;
					} );
				}

				if ( preset.childAttributes && defaultChildAttributes ) {
					resetChildBlockAttributes( preset, defaultChildAttributes );
				}
			}

			return preset;
		} );

	};

	const resetChildBlockAttributes = ( preset, defaultChildAttributes ) => {
		const { getSelectedBlock } = select( 'core/block-editor' );

        let childBlocks = [];

        if ( getSelectedBlock().innerBlocks ) {
            childBlocks = getSelectedBlock().innerBlocks;
        }

        const childBlocksClientIds = [];

        childBlocks.map( ( childBlock ) => {
            if ( childBlock.clientId ) {
                childBlocksClientIds.push( childBlock.clientId );
            }
            return childBlock;
        } );

        const childBlocksAttributes = {};

        preset.childAttributes.map( ( attr ) => {
			if ( defaultChildAttributes[attr.label] && undefined !== defaultChildAttributes[attr.label].default ) {
            	childBlocksAttributes[attr.label] = defaultChildAttributes[attr.label].default;
			}
            return attr;
        } );

        childBlocksClientIds.map( ( clientId ) => {
            dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, childBlocksAttributes );
            return clientId;
        } );
	}
    const presetRadioImageOptions = presets.map( ( preset ) => {
		if ( ! preset.value ) {
			return '';
		}

        const key = preset.value;
		const checked = selectedPresetState === key ? true : false;
		return (
            <>
                <input key={key} className="uag-presets-radio-input" type="radio" value={key} checked={checked} onChange={() => updatePresets( key )} onClick={() => updatePresets( key )}/>

                <label htmlFor={key} className="uag-presets-radio-input-label">
                    <span dangerouslySetInnerHTML={{
                        __html: preset.icon
                    }}/>
                    <span className="uag-presets-radio-image-clickable" onClick={() => updatePresets( key )} title={preset.label}></span> { /* eslint-disable-line */ }
                </label>
            </>
        );
	} );

    const presetDropdown = (
        <SelectControl
            className='uagb-presets-dropdown'
            onChange={ updatePresets }
            options={ presets }
            label={ label }
        />
    );

    const presetRadioImage = (
        <>
            <div className='uagb-presets-radio-image-wrap'>
                {presetRadioImageOptions}
            </div>
        </>
    );

    return (
		<div className="uagb-presets-main-wrap">
			<div className='uagb-presets-label-reset-wrap'>
				<label htmlFor="uag-presets-label" className="uag-presets-label">{label}</label>
				<Button
					className="uagb-reset"
					disabled={ false }
					isSecondary
					isSmall
					onClick={ ( e ) => {
						e.preventDefault();
						resetValues();
					} }
				>
					<Dashicon icon="image-rotate" />
				</Button>
			</div>
            { 'dropdown' === presetInputType && presetDropdown }
            { 'radioImage' === presetInputType && presetRadioImage }
        </div>
    );
}

UAGPresets.defaultProps = {
	presetInputType: 'dropdown',
    label: __( 'Select Preset', 'ultimate-addons-for-gutenberg' )
};

export default React.memo( UAGPresets );
