import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useLayoutEffect, useEffect, useState, useRef,memo } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { select, dispatch } from '@wordpress/data';
import classnames from 'classnames';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import UAGReset from '../reset';
import UAGHelpText from '@Components/help-text';

const UAGPresets = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );

    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { getSelectedBlock } = select( 'core/block-editor' );

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )


    const {
        setAttributes,
        presets,
        presetInputType,
        label,
		className,
		help = false
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

	const controlName = getIdFromString( label );
	const controlBeforeDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

    return (
		<div
			ref={panelRef}
			className="components-base-control"
		>
			{
				controlBeforeDomElement
			}
			<div className={ classnames(
				className,
				'uagb-presets-main-wrap'
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
				<UAGHelpText text={ help } />
			</div>
			{
				controlAfterDomElement
			}
		</div>
    );
}

UAGPresets.defaultProps = {
	presetInputType: 'dropdown',
    label: __( 'Select Preset', 'ultimate-addons-for-gutenberg' )
};

export default memo( UAGPresets );
