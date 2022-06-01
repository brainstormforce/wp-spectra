// Import classes
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React, { useLayoutEffect, useMemo } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [ 'uagb/icon-list-child' ];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { attributes } = props;

	const {
		isPreview,
		className,
		icon_count,
		block_id,
	} = attributes;

	const getIconTemplate = useMemo( () => {
		const childIconList = [];

		for ( let i = 0; i < icon_count; i++ ) {
			childIconList.push( [ 'uagb/icon-list-child', { id: i + 1 } ] );
		}

		return childIconList;
	}, [ icon_count ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/icon-list.png`;

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<div className="uagb-icon-list__wrap">
				<InnerBlocks
					template={ getIconTemplate }
					templateLock={ false }
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</div>
		</div>
	);
};
export default React.memo( Render );
