import classnames from 'classnames';
import PositionClasses from './classes';
import React, { useLayoutEffect, useMemo } from 'react';
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
	const { isPreview, menu_item_count } = attributes;

	const getPriceListTemplate = useMemo( () => {
		const childList = [];

		for ( let i = 0; i < menu_item_count; i++ ) {
			childList.push( [ 'uagb/restaurant-menu-child', { id: i + 1 } ] );
		}

		return childList;
	}, [ menu_item_count ] );

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjMxLjEyMiwxMTUuNzE5YzAsMi43MzctMi4yMTksNC45NTUtNC45NTEsNC45NTVIMzAuOTM5Yy0yLjczMywwLTQuOTUyLTIuMjE4LTQuOTUyLTQuOTU1di0wLjYxNw0KCQkJYzAtMi43MzYsMi4yMTktNC45NTMsNC45NTItNC45NTNoMTk1LjIzMWMyLjczMiwwLDQuOTUxLDIuMjE3LDQuOTUxLDQuOTUzVjExNS43MTl6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMjQuMDEzLDExNS43MTljMCwyLjczNy0yLjIxOSw0Ljk1NS00Ljk1MSw0Ljk1NWgtNDUuMTEzYy0yLjczNCwwLTQuOTUzLTIuMjE4LTQuOTUzLTQuOTU1di0wLjYxNw0KCQkJYzAtMi43MzYsMi4yMTktNC45NTMsNC45NTMtNC45NTNoNDUuMTEzYzIuNzMyLDAsNC45NTEsMi4yMTcsNC45NTEsNC45NTNWMTE1LjcxOXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yMzEuMTIyLDE1NS40NDVjMCwyLjczNy0yLjIxOSw0Ljk1NS00Ljk1MSw0Ljk1NUgzMC45MzljLTIuNzMzLDAtNC45NTItMi4yMTgtNC45NTItNC45NTV2LTAuNjE3DQoJCQljMC0yLjczNiwyLjIxOS00Ljk1Myw0Ljk1Mi00Ljk1M2gxOTUuMjMxYzIuNzMyLDAsNC45NTEsMi4yMTcsNC45NTEsNC45NTNWMTU1LjQ0NXoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyNC4wMTMsMTU1LjQ0NWMwLDIuNzM3LTIuMjE5LDQuOTU1LTQuOTUxLDQuOTU1aC00NS4xMTNjLTIuNzM0LDAtNC45NTMtMi4yMTgtNC45NTMtNC45NTV2LTAuNjE3DQoJCQljMC0yLjczNiwyLjIxOS00Ljk1Myw0Ljk1My00Ljk1M2g0NS4xMTNjMi43MzIsMCw0Ljk1MSwyLjIxNyw0Ljk1MSw0Ljk1M1YxNTUuNDQ1eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTIzMS4xMjIsMTk1LjE3MmMwLDIuNzM2LTIuMjE5LDQuOTUzLTQuOTUxLDQuOTUzSDMwLjkzOWMtMi43MzMsMC00Ljk1Mi0yLjIxNy00Ljk1Mi00Ljk1M3YtMC42MTkNCgkJCWMwLTIuNzM2LDIuMjE5LTQuOTUxLDQuOTUyLTQuOTUxaDE5NS4yMzFjMi43MzIsMCw0Ljk1MSwyLjIxNSw0Ljk1MSw0Ljk1MVYxOTUuMTcyeiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzI0LjAxMywxOTUuMTcyYzAsMi43MzYtMi4yMTksNC45NTMtNC45NTEsNC45NTNoLTQ1LjExM2MtMi43MzQsMC00Ljk1My0yLjIxNy00Ljk1My00Ljk1M3YtMC42MTkNCgkJCWMwLTIuNzM2LDIuMjE5LTQuOTUxLDQuOTUzLTQuOTUxaDQ1LjExM2MyLjczMiwwLDQuOTUxLDIuMjE1LDQuOTUxLDQuOTUxVjE5NS4xNzJ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjMxLjEyMiwyMzQuODk2YzAsMi43MzgtMi4yMTksNC45NTUtNC45NTEsNC45NTVIMzAuOTM5Yy0yLjczMywwLTQuOTUyLTIuMjE3LTQuOTUyLTQuOTU1di0wLjYxNw0KCQkJYzAtMi43MzYsMi4yMTktNC45NTMsNC45NTItNC45NTNoMTk1LjIzMWMyLjczMiwwLDQuOTUxLDIuMjE3LDQuOTUxLDQuOTUzVjIzNC44OTZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0zMjQuMDEzLDIzNC44OTZjMCwyLjczOC0yLjIxOSw0Ljk1NS00Ljk1MSw0Ljk1NWgtNDUuMTEzYy0yLjczNCwwLTQuOTUzLTIuMjE3LTQuOTUzLTQuOTU1di0wLjYxNw0KCQkJYzAtMi43MzYsMi4yMTktNC45NTMsNC45NTMtNC45NTNoNDUuMTEzYzIuNzMyLDAsNC45NTEsMi4yMTcsNC45NTEsNC45NTNWMjM0Ljg5NnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				className,
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
