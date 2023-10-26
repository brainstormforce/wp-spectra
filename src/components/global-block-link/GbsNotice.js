import { __ } from '@wordpress/i18n';

const GbsNotice = ( { globalBlockStyleId, globalBlockStyleName } ) => {
    if ( 'enabled' === uagb_blocks_info?.uag_enable_gbs_extension && globalBlockStyleId && globalBlockStyleName ) {
        return (
            <div className="spectra-gbs-notice">
                <span className="spectra-gbs-notice-text">
                    {__( 'Global block style added', 'ultimate-addons-for-gutenberg' )}
                </span>
            </div>
        )
    }
    return null;
};

export default GbsNotice;