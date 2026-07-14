import classnames from 'classnames';
import { useMemo, useLayoutEffect, memo } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
const ALLOWED_BLOCKS = [ 'uagb/restaurant-menu-child' ];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { className, attributes, deviceType } = props;

	// Setup the attributes.
	const { menu_item_count, columns, tcolumns, mcolumns, block_id } = attributes;

	const getPriceListTemplate = useMemo( () => {
		const childList = [];

		for ( let i = 0; i < menu_item_count; i++ ) {
			childList.push( [ 'uagb/restaurant-menu-child', { id: i + 1 } ] );
		}

		return childList;
	}, [ menu_item_count ] );

	const blockProps = useBlockProps( {
		className: classnames(
			className,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			`uagb-block-${ block_id }`,
			`uagb-rm__desk-column-${ columns }`,
			`uagb-rm__tablet-column-${ tcolumns }`,
			`uagb-rm__mobile-column-${ mcolumns }`
		),
	} );

	return (
		<div { ...blockProps }>
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
