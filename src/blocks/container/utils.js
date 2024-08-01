import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';

export const ChildrenWidthDropdown = ( { attributes, setAttributes, deviceType, isColumn } ) => {
    const directions = isColumn ? [ 'column-reverse', 'column' ] : [ 'row-reverse', 'row' ];
    
    if ( -1 === directions.indexOf( attributes[ 'direction' + deviceType ] ) ) {
        return null;
    }

    const varDeviceType = 'childrenWidth' + deviceType;
    const options = isColumn
        ? [
            { value: 'auto', label: __( 'Auto', 'ultimate-addons-for-gutenberg' ) },
            { value: 'equal', label: __( 'Full', 'ultimate-addons-for-gutenberg' ) },
          ]
        : [
            { value: 'auto', label: __( 'Auto', 'ultimate-addons-for-gutenberg' ) },
            { value: 'equal', label: __( 'Equal', 'ultimate-addons-for-gutenberg' ) },
          ];

    return (
        <MultiButtonsControl
            setAttributes={ setAttributes }
            label={__( 'Children Width ', 'ultimate-addons-for-gutenberg' )}
            data={{
                value: attributes[varDeviceType] || 'equal',
                label: varDeviceType,
            }}
            options={ options }
            showIcons={ false }
            responsive={ false }
        />
    );
};
