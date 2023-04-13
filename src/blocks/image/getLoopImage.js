import { applyFilters } from '@wordpress/hooks';

export function getLoopImage( ChildComponent ) {
	return ( props ) => {
		const { attributes, context } = props;

		if ( ! attributes?.dynamicContent?.bgImage?.enable ) {
			return <ChildComponent { ...props } />;
		}

		const filteredProps = applyFilters( 'spectra_filter_dc_image', attributes, context );
		props = { ...props, ...{ attributes: filteredProps } };

		return <ChildComponent { ...props } />;
	};
}
