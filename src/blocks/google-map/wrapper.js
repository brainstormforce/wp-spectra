import { applyFilters } from '@wordpress/hooks';

export function GoogleMapsWrapper( ChildComponent ) {
	return ( props ) => {
		const { attributes, context } = props;
		if ( ! attributes?.dynamicContent?.address?.enable ) {
            return <ChildComponent { ...props } />;
		}

		// eslint-disable-next-line no-unused-vars
		const [ postTypeData = '', postIDData] = ( attributes?.dynamicContent?.address?.source || '' ).split(
			'|'
		);
		// eslint-disable-next-line no-unused-vars
		const [ scscope = '', scmeta = '' ] = ( attributes?.dynamicContent?.address?.field || '' ).split(
			'|'
		);
		// Get the post type of the current post
		const currentPostType = wp.data.select( 'core/editor' ).getCurrentPostType();
		const postType = 'current_post' === scscope ? currentPostType : postTypeData;
        // Converting data to string so that we can match it with filter data format.
        const dynamicString = `<span data-spectra-dc-field="${attributes?.dynamicContent?.address?.field}" data-spectra-dc-advanced="${attributes?.dynamicContent?.address?.advanced}" data-spectra-dc-source="${postType}|${attributes?.dynamicContent?.address?.postId}" class="uag-pro-dynamic-content">${attributes?.address}</span>`;

		const dynamicAddress = applyFilters( 'uag_render_text_loop_data', dynamicString, context );
		props = { ...props, ...{ attributes: { ...attributes, address: dynamicAddress } } };
		return <ChildComponent { ...props } />;
	};
}
