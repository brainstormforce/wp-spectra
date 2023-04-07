import classnames from 'classnames';
import { useMemo, useLayoutEffect, memo } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
const ALLOWED_BLOCKS = [ 'uagb/restaurant-menu-child' ];

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
	const { className, attributes } = props;

	// Setup the attributes.
	const { menu_item_count, columns, tcolumns, mcolumns } = attributes;

	const getPriceListTemplate = useMemo( () => {
		const childList = [];

		for ( let i = 0; i < menu_item_count; i++ ) {
			childList.push( [ 'uagb/restaurant-menu-child', { id: i + 1 } ] );
		}

		return childList;
	}, [ menu_item_count ] );

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`uagb-rm__desk-column-${ columns }`,
				`uagb-rm__tablet-column-${ tcolumns }`,
				`uagb-rm__mobile-column-${ mcolumns }`
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
export default memo( Render );
