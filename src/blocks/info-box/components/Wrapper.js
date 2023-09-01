import { applyFilters } from '@wordpress/hooks';

export function InfoBoxWrapper( ChildComponent ) {
	return ( props ) => {
		const { attributes, context } = props;

		const hasDynamicImg = attributes?.dynamicContent?.bgImage?.enable;
		const hasDescriptionDC = '' !== attributes.headingDesc && -1 !== attributes.headingDesc.indexOf( '<span data-spectra-dc-field="' );
		const hasPrefixTitleDC = '' !== attributes.prefixTitle && -1 !== attributes.prefixTitle.indexOf( '<span data-spectra-dc-field="' );
		const hasTitleDC = '' !== attributes.infoBoxTitle && -1 !== attributes.infoBoxTitle.indexOf( '<span data-spectra-dc-field="' )

		// Adding dynamic content in props.
		props = { ...props, hasDynamicImg, hasDescriptionDC, hasPrefixTitleDC, hasTitleDC };

		if ( ! hasDynamicImg ) {
            return <ChildComponent { ...props } />;
		}
        
		const imageSources = applyFilters( 'spectra_filter_dc_image', attributes, context );
		props = { ...props, ...{ attributes: { ...attributes, iconImage: {
            url: imageSources.url
        } } } };
		return <ChildComponent { ...props } />;
	};
}
