import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React, { useLayoutEffect, useMemo } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [ 'uagb/buttons-child' ];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes } = props;

	const deviceType = useDeviceType();

	const { className, btn_count, buttons, stack, isPreview } = attributes;

	const getButtonTemplate = useMemo( () => {
		const childButtons = [];

		for ( let i = 0; i < btn_count; i++ ) {
			childButtons.push( [ 'uagb/buttons-child', buttons[ i ] ] );
		}

		return childButtons;
	}, [ btn_count, buttons ] );

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTQuMDA4LDEyOC4wMjJjMCwxOS4wNTEtMTUuNDQzLDM0LjQ5NC0zNC40OTQsMzQuNDk0SDkwLjQ4NmMtMTkuMDUxLDAtMzQuNDk0LTE1LjQ0My0zNC40OTQtMzQuNDk0DQoJCXYtMS4zNzljMC0xOS4wNSwxNS40NDMtMzQuNDk0LDM0LjQ5NC0zNC40OTRoMTY5LjAyN2MxOS4wNTEsMCwzNC40OTQsMTUuNDQzLDM0LjQ5NCwzNC40OTRWMTI4LjAyMnoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0JCQkRDMCIgZD0iTTIzOC41LDExOS4xNjdjMCwxLjg0Mi0xLjQ5MiwzLjMzNC0zLjMzMiwzLjMzNEgxMTQuODM0Yy0xLjg0MiwwLTMuMzM0LTEuNDkyLTMuMzM0LTMuMzM0bDAsMA0KCQkJYzAtMS44NDIsMS40OTItMy4zMzQsMy4zMzQtMy4zMzRoMTIwLjMzNEMyMzcuMDA4LDExNS44MzMsMjM4LjUsMTE3LjMyNSwyMzguNSwxMTkuMTY3TDIzOC41LDExOS4xNjd6Ii8+DQoJCTxwYXRoIGZpbGw9IiNCQkJEQzAiIGQ9Ik0yNDUuMDA2LDEzNS41MDFjMCwxLjg0LTEuNDkyLDMuMzMyLTMuMzMyLDMuMzMySDEwOC4zMjljLTEuODQxLDAtMy4zMzMtMS40OTItMy4zMzMtMy4zMzJsMCwwDQoJCQljMC0xLjg0MiwxLjQ5Mi0zLjMzNCwzLjMzMy0zLjMzNGgxMzMuMzQ1QzI0My41MTQsMTMyLjE2NywyNDUuMDA2LDEzMy42NTksMjQ1LjAwNiwxMzUuNTAxTDI0NS4wMDYsMTM1LjUwMXoiLz4NCgk8L2c+DQoJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI5NC4wMDgsMjIzLjM1NWMwLDE5LjA1MS0xNS40NDMsMzQuNDk0LTM0LjQ5NCwzNC40OTRIOTAuNDg2Yy0xOS4wNTEsMC0zNC40OTQtMTUuNDQzLTM0LjQ5NC0zNC40OTQNCgkJdi0xLjM3OWMwLTE5LjA0OSwxNS40NDMtMzQuNDkzLDM0LjQ5NC0zNC40OTNoMTY5LjAyN2MxOS4wNTEsMCwzNC40OTQsMTUuNDQ0LDM0LjQ5NCwzNC40OTNWMjIzLjM1NXoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0JCQkRDMCIgZD0iTTIzOC41LDIxNC41YzAsMS44NDItMS40OTIsMy4zMzQtMy4zMzIsMy4zMzRIMTE0LjgzNGMtMS44NDIsMC0zLjMzNC0xLjQ5Mi0zLjMzNC0zLjMzNGwwLDANCgkJCWMwLTEuODQyLDEuNDkyLTMuMzM0LDMuMzM0LTMuMzM0aDEyMC4zMzRDMjM3LjAwOCwyMTEuMTY2LDIzOC41LDIxMi42NTgsMjM4LjUsMjE0LjVMMjM4LjUsMjE0LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiNCQkJEQzAiIGQ9Ik0yNDUuMDA2LDIzMC44MzRjMCwxLjg0LTEuNDkyLDMuMzMyLTMuMzMyLDMuMzMySDEwOC4zMjljLTEuODQxLDAtMy4zMzMtMS40OTItMy4zMzMtMy4zMzJsMCwwDQoJCQljMC0xLjg0MiwxLjQ5Mi0zLjMzNCwzLjMzMy0zLjMzNGgxMzMuMzQ1QzI0My41MTQsMjI3LjUsMjQ1LjAwNiwyMjguOTkyLDI0NS4wMDYsMjMwLjgzNEwyNDUuMDA2LDIzMC44MzR6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<div
				className={ classnames(
					'uagb-buttons__wrap',
					`uagb-buttons-stack-${ stack }`
				) }
			>
				<InnerBlocks
					template={ getButtonTemplate }
					templateLock={ false }
					allowedBlocks={ ALLOWED_BLOCKS }
					__experimentalMoverDirection={
						'desktop' === stack ? 'vertical' : 'horizontal'
					}
				/>
			</div>
		</div>
		</>
	);
};

export default React.memo( Render );
