import Range from '@Components/range/Range';
import { __ } from '@wordpress/i18n';
import { BaseControl, Icon } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import renderCustomIcon from '@Controls/renderCustomIcon';
import ResponsiveToggle from '@Components/responsive-toggle';
import getAttributeFallback from '@Controls/getAttributeFallback';
import UAGB_Block_Icons from '@Controls/block-icons';
import UAGNumberControl from '@Components/number-control';

export const GridSettings = ( props ) => {
    const {
        attributes,
        attributes: {
            gridAlignItemsDesktop,
            gridAlignItemsTablet,
            gridAlignItemsMobile,
            gridJustifyItemsDesktop,
            gridJustifyItemsTablet,
            gridJustifyItemsMobile,
            gridAlignContentDesktop,
            gridAlignContentTablet,
            gridAlignContentMobile,
            gridJustifyContentDesktop,
            gridJustifyContentTablet,
            gridJustifyContentMobile,
            orderDesktop,
            orderTablet,
            orderMobile,
            customOrderDesktop,
            customOrderTablet,
            customOrderMobile,
            isBlockRootParent,
        },
        setAttributes,
        deviceType,
    } = props;
    const [ openGridSettings, setOpenGridSettings ] = useState( false );
    const [ openGridSettingsRow, setOpenGridSettingsRow ] = useState( false );

    const gridColumnWithDevice = attributes['gridColumn' + deviceType];
    const gridRowWithDevice = attributes['gridRow' + deviceType];

    useEffect( () => {
        // If click on outside of grid setting div then close all settings.
        document.addEventListener( 'click', ( event ) => {
            const checkClosestToPopup = event.target.closest( '#grid-properties-setting-wrap' );
            const checkOpenerColumnContent = event.target.closest( '.uagb-grid-Column-opener' );
            const checkOpenerRowContent = event.target.closest( '.uagb-grid-Row-opener' );

            if ( ! checkClosestToPopup ) {
                // Check for column.
                if ( ! checkOpenerColumnContent && ( openGridSettings || 0 === openGridSettings ) ) {
                    setOpenGridSettings( false );
                }

                // Check for row.
                if ( ! checkOpenerRowContent && ( openGridSettingsRow || 0 === openGridSettingsRow ) ) {
                    setOpenGridSettingsRow( false );
                }
            }
        } );

        // Add clean up function.
        return () => document.removeEventListener( 'click', ()=> {} );
    }, [ openGridSettings, openGridSettingsRow ] );

    const commonRangeAttr = ( value, unit ) => {
        const units = [
            {
                name: __( 'Fr', 'ultimate-addons-for-gutenberg' ),
                unitValue: 'fr',
            },
            {
                name: __( '%', 'ultimate-addons-for-gutenberg' ),
                unitValue: '%',
            },
            {
                name: __( 'Px', 'ultimate-addons-for-gutenberg' ),
                unitValue: 'px',
            },
        ];

        let max = 1600;
        if ( 'fr' === unit ) {
            max = 10;
        } else if ( '%' === unit ) {
            max = 100;
        }

        return {
            min : 0,
            displayUnit: true,
            units,
            value,
            max,
        }
    }

    const alignItemCommon = ( value = 'column' ) => {
        return [
            {
                value: 'start',
                tooltip: __( 'Start', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `flex-${value}-start` ) } />,
            },
            {
                value: 'center',
                tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `flex-${value}-center` ) } />,
            },
            {
                value: 'end',
                tooltip: __( 'End', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `flex-${value}-end` ) } />,
            },
            {
                value: 'stretch',
                tooltip: __( 'Stretch', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `flex-${value}-strech` ) } />,
            },
        ]
    }

    const orderCommon = () => {
        return [
            {
                value: '-99999',
                tooltip: __( 'Start', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `start-order` ) } />,
            },
            {
                value: '99999',
                tooltip: __( 'End', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `end-order` ) } />,
            },
            {
                value: 'custom',
                tooltip: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={ renderCustomIcon( `custom-order` ) } />,
            },
        ]
    }

    const alignContentOptions = [
        ...alignItemCommon( 'column' ),
        {
            value: 'space-between',
            tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
            icon: <Icon icon={ renderCustomIcon( `flex-column-space-between` ) } />,
        },
        {
            value: 'space-around',
            tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
            icon: <Icon icon={ renderCustomIcon( `flex-column-space-around` ) } />,
        },
    ];

    const justifyContentOptions = [
        ...alignItemCommon( 'row' ),
        {
            value: 'space-between',
            tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
            icon: <Icon icon={ renderCustomIcon( `flex-row-space-between` ) } />,
        },
        {
            value: 'space-around',
            tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
            icon: <Icon icon={ renderCustomIcon( `flex-row-space-around` ) } />,
        },
    ];

    // eslint-disable-next-line jsx-a11y/label-has-for
    const labelTag = ( text = '', labelAttributes ) => <label { ...labelAttributes }>{ text }</label>; 

    const addItem = ( rowOrColumn = 'Column' ) => {
        // Add column according to device type.
        const settingForRowAndColumn = 'grid' + rowOrColumn + deviceType;
        const gridObject = 'Column' === rowOrColumn ? gridColumnWithDevice : gridRowWithDevice;
        setAttributes( {
            [settingForRowAndColumn]: [ ...gridObject, 
                {
                    default: 'custom',
                    min: {
                        unit: 'px',
                        value: 10
                    },
                    max: {
                        unit: 'fr',
                        value: 1
                    },
                    custom: {
                        unit: 'fr',
                        value: 1
                    }
                } ]
        } )
    }

    const removeItem = ( index, rowOrColumn = 'Column' ) => {
        // Remove column according to device type.
        const settingForRowAndColumn = 'grid' + rowOrColumn + deviceType;
        const gridObject = 'Column' === rowOrColumn ? gridColumnWithDevice : gridRowWithDevice;
        setAttributes( {
            [settingForRowAndColumn]: [
                ...gridObject.slice( 0, index ),
                ...gridObject.slice( index + 1 )
            ]
        } );
    }

    const showGridSettings = ( item, index, rowOrColumn = 'Column' ) => {
        const settingForRowAndColumn = 'grid' + rowOrColumn + deviceType;
        // create dynamic variable for gridColumnWithDevice[index] according to rowOrColumn with index.
        const gridObject = 'Column' === rowOrColumn ? gridColumnWithDevice : gridRowWithDevice;

        const getDefaultValues = getAttributeFallback( false, settingForRowAndColumn, 'container' );

        const isValueChanged = ( defaultValue, defaultUnit, value, unit ) => ( defaultValue !== value || defaultUnit !== unit );

        const saveValues = ( type, value, key ) => {
            const setValue = {};
            setValue[ key ] = value;

            setAttributes( {
                [settingForRowAndColumn]: [
                    ...gridObject.slice( 0, index ),
                    {
                        ...gridObject[index],
                        [type]: {
                            ...gridObject[index][type],
                            ...setValue
                        }
                    },
                    ...gridObject.slice( index + 1 )
                ]
            } )
        }
        
        const resetValues = ( type ) => {
            setAttributes( {
                [settingForRowAndColumn]: [
                    ...gridObject.slice( 0, index ),
                    {
                        ...gridObject[index],
                        [ type ]: {
                            ...gridObject[index][type],
                            value: getDefaultValues[0][type].value,
                            unit: getDefaultValues[0][type].unit
                        }
                    },
                    ...gridObject.slice( index + 1 )
                ]
            } )
        }

        const commonAttributes = ( type ) => {
            return {
                onChange: ( value ) => saveValues( type, value, 'value' ),
                onChangeUnits: ( unit ) => saveValues( type, unit, 'unit' ),
                resetStateEnabled: isValueChanged( getDefaultValues[0][type].value, getDefaultValues[0][type].unit, gridObject[index][type].value, gridObject[index][type].unit ),
                isReset: () => resetValues( type ),
                ...commonRangeAttr( gridObject[index][type].value, gridObject[index][type].unit ),
                unit: {
                        value: gridObject[index][type].unit,
                        label: type,
                },
                data: {
                    value: gridObject[index][type].value,
                    label: type,
                },
            }
        }

        const minMaxOptions = <>
            <Range
                label={__( 'Min', 'ultimate-addons-for-gutenberg' )}
                { ...commonAttributes( 'min' ) }
            />
            <Range
                label={__( 'Max', 'ultimate-addons-for-gutenberg' )}
                { ...commonAttributes( 'max' ) }
            />
        </>;

        const rangeLabel = 'Column' === rowOrColumn ? __( 'Width', 'ultimate-addons-for-gutenberg' ) : __( 'Height', 'ultimate-addons-for-gutenberg' );

        const defaultOptions = <Range
            label={ rangeLabel }
            { ...commonAttributes( 'custom' ) }
        />;

        let showOptions = null;
        if ( item.default === 'minmax' ) {
            showOptions = minMaxOptions;
        } else if ( item.default === 'custom' ) {
            showOptions = defaultOptions;
        }

        let autoHelpText = null;

        if( 'auto' === gridObject[index].default ) {
            // Show message based on column or row.
            autoHelpText = 'Column' === rowOrColumn ? __( 'The column-width will be automatic.', 'ultimate-addons-for-gutenberg' ) : __( 'The row-height will be automatic.', 'ultimate-addons-for-gutenberg' );
        }

        return (
            <div className='uagb-grid-settings' id="grid-properties-setting-wrap">
                <MultiButtonsControl
                    label={__( 'Grid Property', 'ultimate-addons-for-gutenberg' )}
                    data={{
                        value: gridObject[index].default,
                        label: gridObject[index].default,
                    }}
                    options={[
                        {
                            value: 'auto',
                            label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
                        },
                        {
                            value: 'minmax',
                            label: __( 'Min/Max', 'ultimate-addons-for-gutenberg' ),
                        },
                        {
                            value: 'custom',
                            label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
                        },
                    ]}
                    onChange={( value ) => {
                        setAttributes( {
                            [settingForRowAndColumn]: [
                                ...gridObject.slice( 0, index ),
                                {
                                    ...gridObject[index],
                                    default: value
                                },
                                ...gridObject.slice( index + 1 )
                            ]
                        } )
                    }}
                    help={ autoHelpText }
                />
                { showOptions && ( <div className='uagb-grid-settings-content'>
                    {showOptions}
                </div>
                ) }
            </div>
        )
    }

    const removeButton = ( items, index, itemType = 'Column' ) => {
        // If length is more then 1 then only show remove button.
        if ( items.length > 1 ) {
            return (
                <div className='uagb-grid-repeater-delete'>
                    <button onClick={() => {
                        removeItem( index, itemType );
                    }}><Icon icon={renderSVG( 'trash-can' )} /></button>
                </div>
            )
        }
    }
    return (
        <>
            <BaseControl
                className="uagb-grid-repeater-container"
            >
                <div className='uagb-grid-repeater-head uagb-control__header uagb-size-type-field-tabs'>
				    <ResponsiveToggle label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) } responsive={true} />
                    <button onClick={() => addItem() }><Icon icon={'plus-alt2'} /></button>
                </div>
                <div className='uagb-grid-repeater-items'>
                    {
                        gridColumnWithDevice.map( ( item, index ) => {
                            return (
                                <>
                                    <div className='uagb-grid-repeater-item' key={index}>
                                        <div
                                            className='uagb-grid-repeater-content uagb-grid-Column-opener'
                                            onClick={() => {
                                                // If index different then only open.
                                                const openThisItem = openGridSettings === index ? false : index;
                                                setOpenGridSettings( openThisItem );
                                            }}
                                        >
                                            { labelTag( __( 'Column ', 'ultimate-addons-for-gutenberg' ) + ( index + 1 ) ) }
                                            <button>{ UAGB_Block_Icons.pencilIcon }</button>
                                        </div>
                                        { removeButton( gridColumnWithDevice, index ) }
                                    </div>
                                    {index === openGridSettings && showGridSettings( item, index )}
                                </>
                            )
                        } )
                    }
                </div>
            </BaseControl>
            <BaseControl
                className="uagb-grid-repeater-container"
            >
                <div className='uagb-grid-repeater-head uagb-control__header uagb-size-type-field-tabs'>
				    <ResponsiveToggle label={ __( 'Rows', 'ultimate-addons-for-gutenberg' ) } responsive={true} />
                    <button onClick={() => addItem( 'Row' ) }><Icon icon={'plus-alt2'} /></button>
                </div>
                <div className='uagb-grid-repeater-items'>
                    {
                        gridRowWithDevice.map( ( item, index ) => {
                            return (
                                <>
                                    <div className='uagb-grid-repeater-item' key={index}>
                                        <div
                                            className='uagb-grid-repeater-content uagb-grid-Row-opener'
                                            onClick={() => {
                                                // If index different then only open.
                                                const openThisItem = openGridSettingsRow === index ? false : index;
                                                setOpenGridSettingsRow( openThisItem );
                                            }}
                                        >
                                            { labelTag( __( 'Row ', 'ultimate-addons-for-gutenberg' ) + ( index + 1 ) ) }
                                            <button>{ UAGB_Block_Icons.pencilIcon }</button>
                                        </div>
                                        { removeButton( gridRowWithDevice, index, 'Row' ) }
                                    </div>
                                    {index === openGridSettingsRow && showGridSettings( item, index, 'Row' )}
                                </>
                            )
                        } )
                    }
                </div>
            </BaseControl>
            { ! isBlockRootParent && (
                <>
                    <MultiButtonsControl
				        setAttributes={ setAttributes }
                        label={ __( 'Order', 'ultimate-addons-for-gutenberg' ) }
                        data={ {
                            desktop: {
                                value: orderDesktop,
                                label: 'orderDesktop',
                            },
                            tablet: {
                                value: orderTablet,
                                label: 'orderTablet',
                            },
                            mobile: {
                                value: orderMobile,
                                label: 'orderMobile',
                            },
                        } }
                        options={ [ ...orderCommon() ] }
                        showIcons={ true }
                        responsive={ true }
                        help={ __( 'Define the order for grid items inside the container.', 'ultimate-addons-for-gutenberg' ) }
                    /> 
                    { 'custom' === orderDesktop && 'Desktop' === deviceType && (
                        <UAGNumberControl
                            label={ __( 'Custom Order', 'ultimate-addons-for-gutenberg' ) }
                            value={ customOrderDesktop }
                            data={ {
                                value: customOrderDesktop,
                                label: 'customOrderDesktop',
                            } }
                            displayUnit={ false }
                            setAttributes={ setAttributes }
                            min={ -Infinity }
                            step={ 1 }
                            max={ Infinity }
					        showControlHeader={ false }
                        />
                    ) }
                    { 'custom' === orderTablet && 'Tablet' === deviceType && (
                        <UAGNumberControl
                            label={ __( 'Custom Order', 'ultimate-addons-for-gutenberg' ) }
                            value={ customOrderTablet }
                            data={ {
                                value: customOrderTablet,
                                label: 'customOrderTablet',
                            } }
                            displayUnit={ false }
                            setAttributes={ setAttributes }
                            min={ -Infinity }
                            step={ 1 }
                            max={ Infinity }
                            showControlHeader={ false }
                        />
                    ) }
                    { 'custom' === orderMobile && 'Mobile' === deviceType && (
                        <UAGNumberControl
                            label={ __( 'Custom Order', 'ultimate-addons-for-gutenberg' ) }
                            value={ customOrderMobile }
                            data={ {
                                value: customOrderMobile,
                                label: 'customOrderMobile',
                            } }
                            displayUnit={ false }
                            setAttributes={ setAttributes }
                            min={ -Infinity }
                            step={ 1 }
                            max={ Infinity }
                            showControlHeader={ false }
                        />
                    ) }
                </>
            ) }
            <MultiButtonsControl
				setAttributes={ setAttributes }
                label={ __( 'Align Items', 'ultimate-addons-for-gutenberg' ) }
                data={ {
                    desktop: {
                        value: gridAlignItemsDesktop,
                        label: 'gridAlignItemsDesktop',
                    },
                    tablet: {
                        value: gridAlignItemsTablet,
                        label: 'gridAlignItemsTablet',
                    },
                    mobile: {
                        value: gridAlignItemsMobile,
                        label: 'gridAlignItemsMobile',
                    },
                } }
                options={ [ ...alignItemCommon( 'column' ) ] }
                showIcons={ true }
                responsive={ true }
                help={ __( 'Define the vertical alignment for grid items inside the container.', 'ultimate-addons-for-gutenberg' ) }
            />
            <MultiButtonsControl
                setAttributes={ setAttributes }
                label={ __( 'Justify Items', 'ultimate-addons-for-gutenberg' ) }
                data={ {
                    desktop: {
                        value: gridJustifyItemsDesktop,
                        label: 'gridJustifyItemsDesktop',
                    },
                    tablet: {
                        value: gridJustifyItemsTablet,
                        label: 'gridJustifyItemsTablet',
                    },
                    mobile: {
                        value: gridJustifyItemsMobile,
                        label: 'gridJustifyItemsMobile',
                    },
                } }
                options={ [ ...alignItemCommon( 'row' ) ] }
                showIcons={ true }
                responsive={ true }
                help={ __( 'Define the horizontal alignment for grid items within the container.', 'ultimate-addons-for-gutenberg' ) }
            />
            <MultiButtonsControl
                setAttributes={ setAttributes }
                label={ __( 'Align Content', 'ultimate-addons-for-gutenberg' ) }
                data={ {
                    desktop: {
                        value: gridAlignContentDesktop,
                        label: 'gridAlignContentDesktop',
                    },
                    tablet: {
                        value: gridAlignContentTablet,
                        label: 'gridAlignContentTablet',
                    },
                    mobile: {
                        value: gridAlignContentMobile,
                        label: 'gridAlignContentMobile',
                    },
                } }
                options={ alignContentOptions }
                showIcons={ true }
                responsive={ true }
                help={ __( 'Define the vertical alignment of the entire grid within its container.', 'ultimate-addons-for-gutenberg' ) }
            />
            <MultiButtonsControl
                setAttributes={ setAttributes }
                label={ __( 'Justify Content', 'ultimate-addons-for-gutenberg' ) }
                data={ {
                    desktop: {
                        value: gridJustifyContentDesktop,
                        label: 'gridJustifyContentDesktop',
                    },
                    tablet: {
                        value: gridJustifyContentTablet,
                        label: 'gridJustifyContentTablet',
                    },
                    mobile: {
                        value: gridJustifyContentMobile,
                        label: 'gridJustifyContentMobile',
                    },
                } }
                options={ justifyContentOptions }
                showIcons={ true }
                responsive={ true }
                help={ __( 'Define the horizontal alignment of the entire grid within its container.', 'ultimate-addons-for-gutenberg' ) }
            />
        </>
    )
}