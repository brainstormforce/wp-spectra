/**
 * BLOCK: Tabs Child Block
 */

import { useEffect } from '@wordpress/element';

import Render from './render';
import { select } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBTabsChildEdit = ( props ) => {
	const { attributes, setAttributes, clientId } = props;

	useEffect( () => {
		const { getBlockRootClientId, getBlockAttributes } = select( 'core/block-editor' );

		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );

		// compare attributes to saved attributes and update if needed.
		if( rootBlockAttrs?.tabActiveFrontend && rootBlockAttrs.tabActiveFrontend !== attributes?.tabActive ) {
			setAttributes( { tabActive: rootBlockAttrs.tabActiveFrontend } );
		}

		// Apply parent style if newly inserted
		if ( rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false ) {
			Object.keys( rootBlockAttrs ).map(
				( attribute ) => ( attributes[ attribute ] = rootBlockAttrs[ attribute ] )
			);
		}
	}, [] );

	return <Render { ...props } />;
};

export default compose(
	addInitialAttr,
)( UAGBTabsChildEdit );