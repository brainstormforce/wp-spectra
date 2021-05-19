// Import classes
import classnames from 'classnames';
import times from 'lodash/times';
import memoize from 'memize';
import { InnerBlocks } from '@wordpress/block-editor';
import React from 'react';
const ALLOWED_BLOCKS = [ 'uagb/icon-list-child' ];

const Render = ( props ) => {
	props = props.parentProps;
	const { attributes, deviceType } = props;

	const {
		className,
		icon_count,
		icons,
		icon_layout,
		iconPosition,
		hideLabel,
		block_id,
	} = attributes;

	const labelClass = hideLabel ? 'uagb-icon-list__no-label' : '';

	const getIconTemplate = memoize( ( icon_block, icon ) => {
		return times( icon_block, ( n ) => [
			'uagb/icon-list-child',
			icon[ n ],
		] );
	} );

	return (
		<div
			className={ classnames(
				className,
				'uagb-icon-list__outer-wrap',
				`uagb-icon-list__layout-${ icon_layout }`,
				iconPosition == 'top' ? 'uagb-icon-list__icon-at-top' : '',
				labelClass,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<div className="uagb-icon-list__wrap">
				<InnerBlocks
					template={ getIconTemplate( icon_count, icons ) }
					templateLock={ false }
					allowedBlocks={ ALLOWED_BLOCKS }
					__experimentalMoverDirection={ icon_layout }
				/>
			</div>
		</div>
	);
};
export default React.memo( Render );
