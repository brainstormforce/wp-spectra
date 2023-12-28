import { dispatch } from '@wordpress/data';
import { isCustomizerPage } from '@Utils/Helpers';

export const setCustomizerPreview = ( deviceType ) => {
    if ( ! isCustomizerPage() ) {
        return;
    }

    // deviceType should be string.
    if ( typeof deviceType !== 'string' ) {
        return;
    }

    const deviceTypeLower = deviceType.toLowerCase();

    // Check deviceType is valid.
    if ( ! [ 'desktop', 'tablet', 'mobile' ].includes( deviceTypeLower ) ) {
        return;
    }

    wp.customize.previewedDevice.set( deviceTypeLower );
}

export const setDeviceOnCustomizerAction = () => {
    if ( ! isCustomizerPage() ) {
        return;
    }

    window.wp.customize.bind( 'ready', () => {
        window.wp.customize.previewedDevice.bind( ( device ) => {
            if ( ! device ) {
                return;
            }

            // Check device type only mobile, tablet and desktop.
            if ( ! [ 'mobile', 'tablet', 'desktop' ].includes( device ) ) {
                return;
            }

            const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } = dispatch( 'core/edit-post' );
            const deviceTypeFirstLetterUpper = device.charAt( 0 ).toUpperCase() + device.slice( 1 );
            setPreviewDeviceType( deviceTypeFirstLetterUpper );
        } );
    } );
}