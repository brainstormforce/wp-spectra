/**
 * BLOCK: Tabs Child Block
 */

import React, { useEffect } from 'react';

import Render from './render';
import { select } from '@wordpress/data';

const UAGBTabsChildEdit = ( props ) => {
	useEffect( () => {
		if ( ! props.attributes.isPreview ) {
			const { attributes, setAttributes, clientId } = props;
			const { getBlockRootClientId, getBlockAttributes } = ! wp.blockEditor
				? select( 'core/editor' )
				: select( 'core/block-editor' );
			const rootBlockId = getBlockRootClientId( clientId );
			const rootBlockAttrs = getBlockAttributes( rootBlockId );
			setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
			setAttributes( { tabActive: rootBlockAttrs.tabActiveFrontend } );

			// Apply parent style if newly inserted
			if ( rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false ) {
				Object.keys( rootBlockAttrs ).map( ( attribute ) =>
					attributes[ attribute ] = rootBlockAttrs[ attribute ]
				)
			}
		}
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/tabs-child.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<Render parentProps={ props } />
		)
	);
};
export default UAGBTabsChildEdit;
