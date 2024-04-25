import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';
import MultiButtonsControl from '@Components/multi-buttons-control';
import ResponsiveSlider from '@Components/responsive-slider';

const GridItemSetting = ( propsObj ) => {
    const props = propsObj.parentProps;
    const { attributes, setAttributes } = props;
    const {
        isGridCssInParent,
        gridSettingType,
        gridAlignItems,
        gridAlignItemsTablet,
        gridAlignItemsMobile,
        gridJustifyItems,
        gridJustifyItemsTablet,
        gridJustifyItemsMobile,
    } = attributes;

    if ( ! isGridCssInParent ) {
        return null;
    }

    const commonAttributes = ( type ) => {
        const attrTypeDesktop = type;
        const attrTypeTablet = `${type}Tablet`;
        const attrTypeMobile = `${type}Mobile`;

        return {
            min: 1,
            max: 10,
            displayUnit: false,
            setAttributes,
            data: {
                desktop: {
                    value: attributes[type],
                    label: attrTypeDesktop,
                },
                tablet: {
                    value: attributes[attrTypeTablet],
                    label: attrTypeTablet,
                },
                mobile: {
                    value: attributes[attrTypeMobile],
                    label: attrTypeMobile,
                },
            },
            value: attributes[type],
        };
    };

    const alignItemCommon = ( value = 'column' ) => {
        return [
            {
                value: 'start',
                tooltip: __( 'Start', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={renderCustomIcon( `flex-${value}-start` )} />,
            },
            {
                value: 'center',
                tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={renderCustomIcon( `flex-${value}-center` )} />,
            },
            {
                value: 'end',
                tooltip: __( 'End', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={renderCustomIcon( `flex-${value}-end` )} />,
            },
            {
                value: 'stretch',
                tooltip: __( 'Stretch', 'ultimate-addons-for-gutenberg' ),
                icon: <Icon icon={renderCustomIcon( `flex-${value}-strech` )} />,
            },
        ]
    }

    return <UAGAdvancedPanelBody
        title={__( 'Grid Item Settings', 'ultimate-addons-for-gutenberg' )}
        initialOpen={false}
    >
        <MultiButtonsControl
            data={{
                value: gridSettingType || '',
                label: 'gridSettingType',
            }}
            options={[
                {
                    value: '',
                    label: __( 'Simple', 'ultimate-addons-for-gutenberg' ),
                },
                {
                    value: 'advance',
                    label: __( 'Advance', 'ultimate-addons-for-gutenberg' ),
                },
            ]}
            onChange={( value ) => {
                setAttributes( { gridSettingType: value } );
            }}
        />
        {gridSettingType !== 'advance' ? (
            <>
                <ResponsiveSlider
                    label={__( 'Column Width', 'ultimate-addons-for-gutenberg' )}
                    {...commonAttributes( 'gridColumnSpan' )}
                />

                <ResponsiveSlider
                    label={__( 'Row Height', 'ultimate-addons-for-gutenberg' )}
                    {...commonAttributes( 'gridRowSpan' )}
                />
            </>
        ) : <>
            <ResponsiveSlider
                label={__( 'Column Start', 'ultimate-addons-for-gutenberg' )}
                {...commonAttributes( 'gridColumnStart' )}
            />
            <ResponsiveSlider
                label={__( 'Column End', 'ultimate-addons-for-gutenberg' )}
                {...commonAttributes( 'gridColumnEnd' )}
            />
            <ResponsiveSlider
                label={__( 'Row Start', 'ultimate-addons-for-gutenberg' )}
                {...commonAttributes( 'gridRowStart' )}
            />
            <ResponsiveSlider
                label={__( 'Row End', 'ultimate-addons-for-gutenberg' )}
                {...commonAttributes( 'gridRowEnd' )}
            />
        </>}

        <MultiButtonsControl
            setAttributes={ setAttributes }
            label={ __( 'Align Items', 'ultimate-addons-for-gutenberg' ) }
            data={ {
                desktop: {
                    value: gridAlignItems,
                    label: 'gridAlignItems',
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
            help={ __( 'Define the vertical alignment for grid items content.', 'ultimate-addons-for-gutenberg' ) }
        />

        <MultiButtonsControl
            setAttributes={setAttributes}
            label={__( 'Justify Items', 'ultimate-addons-for-gutenberg' )}
            data={ {
                desktop: {
                    value: gridJustifyItems,
                    label: 'gridJustifyItems',
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
            showIcons={true}
            responsive={ true }
            help={__( 'Define the horizontal alignment for grid items content.', 'ultimate-addons-for-gutenberg' )}
        />

    </UAGAdvancedPanelBody>
}

export default GridItemSetting;