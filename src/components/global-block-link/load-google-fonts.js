import WebfontLoader from '@Components/typography/fontloader';
import { STORE_NAME as storeName } from '@Store/constants';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const SpectraLoadGlobalGoogleFonts = ( props ) => {

    const {
        globalBlockStylesFontFamilies
    } = props;

    if ( ! globalBlockStylesFontFamilies?.length ) {
        return null;
    }
    
    const renderFonts = globalBlockStylesFontFamilies.map( ( family ) => {
        const hconfig = {
            google: {
                families: [
                    family,
                ],
            },
        };
    
        return (
            <WebfontLoader key={family} config={ hconfig }></WebfontLoader>
        );
    } );



	return (
        <div className='spectra-gbs-fonts'>
        {renderFonts}
        </div>
    );
};

export default compose(
	withSelect( ( spectraGbsSelect ) => {

		const globalBlockStylesFontFamilies = spectraGbsSelect( storeName ).getGlobalBlockStylesFontFamilies();
        
		return {
            globalBlockStylesFontFamilies
		};	
	} )
)( SpectraLoadGlobalGoogleFonts );
