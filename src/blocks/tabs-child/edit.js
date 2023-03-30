/**
 * BLOCK: Tabs Child Block
 */

import { useEffect } from '@wordpress/element';

import Render from './render';
import { select } from '@wordpress/data';

const UAGBTabsChildEdit = ( props ) => {
	const { attributes, setAttributes, clientId } = props;

	useEffect( () => {
		const { getBlockRootClientId, getBlockAttributes } = select( 'core/block-editor' );

		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );

		setAttributes( { block_id: clientId?.substr( 0, 8 ) } );
		setAttributes( { tabActive: rootBlockAttrs?.tabActiveFrontend } );

		// Apply parent style if newly inserted
		if ( rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false ) {
			Object.keys( rootBlockAttrs ).map(
				( attribute ) => ( attributes[ attribute ] = rootBlockAttrs[ attribute ] )
			);
		}
	}, [] );

	return <Render parentProps={ props } />;
};
export default UAGBTabsChildEdit;
