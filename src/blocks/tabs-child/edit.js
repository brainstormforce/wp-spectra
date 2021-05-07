/**
 * BLOCK: Tabs Child Block
 */

import tabsChildRender from './render';

import React, { useEffect } from 'react';

const { select } = wp.data;

const UAGBTabsChildEdit = props => {

	useEffect( () => {
		const { attributes, setAttributes, clientId  } = props;
		const { getBlockRootClientId, getBlockAttributes } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } )
		setAttributes( { tabActive: rootBlockAttrs.tabActiveFrontend} )
		
		// Apply parent style if newly inserted
		if (rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false) {
			Object.keys(rootBlockAttrs).map((attribute) => {
				attributes[attribute] = rootBlockAttrs[attribute];
			});
		}
	}, [] );

	return tabsChildRender(props)
}
export default UAGBTabsChildEdit
