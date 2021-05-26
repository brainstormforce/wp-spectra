import classnames from 'classnames';
import PositionClasses from './classes';
import React, { useMemo } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [ 'uagb/restaurant-menu-child' ];

const Render = ( props ) => {
	props = props.parentProps;
	const { className, attributes, deviceType } = props;

	// Setup the attributes.
	const { menu_item_count, rest_menu_item_arr } = attributes;

	const getPriceListTemplate = useMemo( () => {
		const childList = [];

		for ( let i = 0; i < menu_item_count ; i++ ) {
			childList.push( [ 'uagb/restaurant-menu-child', { id: i + 1 } ] );
		}

		return childList;
	}, [ columns ] );

	return (
		<div
			className={ classnames(
				className,
				'uagb-rest_menu__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				...PositionClasses( attributes )
			) }
		>
			<InnerBlocks
				template={ getPriceListTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'horizontal' }
			/>
		</div>
	);
};
export default React.memo( Render );
