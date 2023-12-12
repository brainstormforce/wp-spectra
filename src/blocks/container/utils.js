import { __ } from '@wordpress/i18n';
import MultiButtonsControl from '@Components/multi-buttons-control';

export const ChildrenWidthDropdown = ( { attributes, setAttributes, deviceType } ) => {

    if ( -1 === [ 'row-reverse', 'row' ].indexOf( attributes[ 'direction' + deviceType ] ) ) {
        return null;
    }

    const varDeviceType = 'childrenWidth' + deviceType;

    return (
        <MultiButtonsControl
            setAttributes={ setAttributes }
            label={__( 'Children Width ', 'ultimate-addons-for-gutenberg' )}
            data={{
                value: attributes[varDeviceType] || 'equal',
                label: varDeviceType,
            }}
            options={[
                {
                    value: 'auto',
                    label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
                },
                {
                    value: 'equal',
                    label: __( 'Equal', 'ultimate-addons-for-gutenberg' ),
                },
            ]}
            showIcons={ false }
            responsive={ false }
        />
    );
};
