import { applyFilters } from '@wordpress/hooks';

export function InfoBoxWrapper( ChildComponent ) {
	return ( props ) => {
		const { attributes, context } = props;
		if ( ! attributes?.dynamicContent?.bgImage?.enable ) {
            return <ChildComponent { ...props } />;
		}
        
		const imageSources = applyFilters( 'spectra_filter_dc_image', attributes, context );
		props = { ...props, ...{ attributes: { ...attributes, iconImage: {
            url: imageSources.url
        } } } };
		return <ChildComponent { ...props } />;
	};
}
