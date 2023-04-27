import { applyFilters } from '@wordpress/hooks';

export function containerWrapper( ChildComponent ) {
	return ( props ) => {
		const { attributes, context } = props;
		if ( ! attributes?.dynamicContent?.bgImage?.enable ) {
            return <ChildComponent { ...props } />;
		}
        
		const imageSources = applyFilters( 'spectra_filter_dc_image', attributes, context );
		props = { ...props, ...{ attributes: { ...attributes, backgroundImageDesktop: {
            type: 'image',
            url: imageSources.url
        } } } };
		return <ChildComponent { ...props } />;
	};
}
