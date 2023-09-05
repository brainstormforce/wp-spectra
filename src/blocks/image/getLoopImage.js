import { applyFilters } from '@wordpress/hooks';

export function getLoopImage( ChildComponent ) {
	return ( props ) => {
		const { attributes, context } = props;
		const hasDynamicContent = attributes?.dynamicContent?.bgImage?.enable;

		// Adding condition to check if the block has dynamic content.
		props = { ...props, hasDynamicContent };

		if ( ! hasDynamicContent ) {
			return <ChildComponent { ...props } />;
		}

		const filteredProps = applyFilters( 'spectra_filter_dc_image', attributes, context );
		props = { ...props, ...{ attributes: filteredProps } };

		return <ChildComponent { ...props } />;
	};
}
