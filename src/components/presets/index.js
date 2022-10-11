import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select, dispatch } from '@wordpress/data';
import classnames from 'classnames';
import UAGReset from '../reset';

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
        label,
		className
    } = props;

	const resetAttributes = [];

	if ( presets ) {
		presets.map( ( preset ) => {
			if ( preset?.attributes ) {
				for ( const attribute of preset?.attributes ) {
					if ( ! resetAttributes.includes( attribute?.label ) ) {
						resetAttributes.push( attribute?.label );
					}
				}
			}

			return preset;
		} );
	}

	const [ selectedPresetState, setPreset ] = useState( '' );

	const onReset = () => {
		setPreset( '' );
		resetChildBlockAttributes();
	};

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

						presets[1]?.defaultPresetAttributes?.map( ( presetItem ) => {
							setAttributes( { [presetItem.label]: presets[0]?.defaultAttributes[presetItem.label]?.default } )
							return presetItem;
						} );
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

	const resetChildBlockAttributes = () => {
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

		presets.map( ( preset ) => {
			if ( preset?.childAttributes ) {
				preset?.childAttributes.map( ( attr ) => {
					if ( presets[1]?.defaultChildAttributes && presets[1]?.defaultChildAttributes[attr.label] && undefined !== presets[1]?.defaultChildAttributes[attr.label].default ) {
						childBlocksAttributes[attr.label] = presets[1]?.defaultChildAttributes[attr.label].default;
					}
					return attr;
				} );
			}
			return preset;
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

                <label htmlFor={key} className="uag-presets-radio-input-label" dangerouslySetInnerHTML={{// eslint-disable-line
                        __html: preset.icon
                    }} onClick={() => updatePresets( key )}>
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
		<div className={ classnames(
			className,
			'uagb-presets-main-wrap',
			'components-base-control'
		) }>
			<div className='uagb-presets-label-reset-wrap'>
				<label htmlFor="uag-presets-label" className="uag-presets-label">{label}</label>
				<UAGReset
					attributeNames = {resetAttributes}
					setAttributes={ setAttributes }
					onReset={onReset}
				/>
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
