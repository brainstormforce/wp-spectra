/**
 * BLOCK: Social Share - Editor Render.
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [ 'uagb/social-share-child' ];

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

	const { isPreview, className, social_layout } = attributes;

	const getSocialShareTemplate = [
		[
			'uagb/social-share-child',
			{
				type: 'facebook',
				image_icon: 'icon',
				icon: 'fab fa-facebook',
				image: '',
				icon_color: '#3a3a3a',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
		[
			'uagb/social-share-child',
			{
				type: 'twitter',
				image_icon: 'icon',
				icon: 'fab fa-twitter-square',
				image: '',
				icon_color: '#3a3a3a',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
		[
			'uagb/social-share-child',
			{
				type: 'pinterest',
				image_icon: 'icon',
				icon: 'fab fa-pinterest-square',
				image: '',
				icon_color: '#3a3a3a',
				icon_hover_color: '',
				icon_bg_color: '',
				icon_bg_hover_color: '',
			},
		],
	];

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTEwLjc2NiwyMDIuMzQyYzAsNC45NDMtNC4wMDcsOC45NDgtOC45NDcsOC45NDhINDcuMTMxYy00Ljk0LDAtOC45NDYtNC4wMDUtOC45NDYtOC45NDh2LTU0LjY4OA0KCQkJYzAtNC45MzgsNC4wMDYtOC45NDQsOC45NDYtOC45NDRoNTQuNjg4YzQuOTM5LDAsOC45NDYsNC4wMDYsOC45NDYsOC45NDRMMTEwLjc2NiwyMDIuMzQyTDExMC43NjYsMjAyLjM0MnoiLz4NCgkJPHBhdGggaWQ9IlhNTElEXzE0MjBfIiBmaWxsPSIjRkZGRkZGIiBkPSJNNjkuMDg1LDE5Ni4zODhoOC42MTJ2LTIxLjU2OWg2LjAxbDAuNjQxLTcuMjIxaC02LjY1MWMwLDAsMC0yLjY5OCwwLTQuMTE1DQoJCQljMC0xLjcwMiwwLjM0Mi0yLjM3NiwxLjk5LTIuMzc2YzEuMzI1LDAsNC42NjEsMCw0LjY2MSwwdi03LjQ5NWMwLDAtNC45MTQsMC01Ljk2NCwwYy02LjQwOSwwLTkuMjk5LDIuODIzLTkuMjk5LDguMjI3DQoJCQljMCw0LjcwNiwwLDUuNzU4LDAsNS43NThoLTQuNDgydjcuMzExaDQuNDgyVjE5Ni4zODh6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjExLjI5LDIwMi4zNDJjMCw0Ljk0My00LjAwNyw4Ljk0OC04Ljk0Niw4Ljk0OGgtNTQuNjg4Yy00Ljk0LDAtOC45NDYtNC4wMDUtOC45NDYtOC45NDh2LTU0LjY4OA0KCQkJYzAtNC45MzgsNC4wMDYtOC45NDQsOC45NDYtOC45NDRoNTQuNjg4YzQuOTM5LDAsOC45NDUsNC4wMDYsOC45NDUsOC45NDRMMjExLjI5LDIwMi4zNDJMMjExLjI5LDIwMi4zNDJ6Ii8+DQoJCTxwYXRoIGlkPSJYTUxJRF8xNDUwXyIgZmlsbD0iI0ZGRkZGRiIgZD0iTTE1Ny43MjIsMTg1Ljg1NmMzLjEzOCwyLjAxMiw2Ljg2NCwzLjE4NSwxMC44NjcsMy4xODUNCgkJCWMxMy4xNjQsMCwyMC42LTExLjExNiwyMC4xNTItMjEuMDg5YzEuMzg1LTAuOTk5LDIuNTg3LTIuMjQ3LDMuNTM3LTMuNjdjLTEuMjczLDAuNTYzLTIuNjM4LDAuOTQ2LTQuMDcsMS4xMTYNCgkJCWMxLjQ2Mi0wLjg3NiwyLjU4Ni0yLjI2NSwzLjExNS0zLjkyMWMtMS4zNjksMC44MTMtMi44ODgsMS40MDMtNC41MDEsMS43MjJjLTEuMjk1LTEuMzc5LTMuMTM3LTIuMjM5LTUuMTc4LTIuMjM5DQoJCQljLTQuNTczLDAtNy45MzcsNC4yNjktNi45MDQsOC43MDZjLTUuODkyLTAuMjk2LTExLjExNi0zLjExOS0xNC42MTItNy40MWMtMS44NTcsMy4xODktMC45NjMsNy4zNTcsMi4xOTUsOS40NjcNCgkJCWMtMS4xNjQtMC4wMzctMi4yNTctMC4zNTYtMy4yMTItMC44ODdjLTAuMDc3LDMuMjg1LDIuMjc2LDYuMzU1LDUuNjg2LDcuMDQyYy0wLjk5OCwwLjI3MS0yLjA5MSwwLjMzMi0zLjIsMC4xMTkNCgkJCWMwLjksMi44MTcsMy41Miw0Ljg2Niw2LjYyMiw0LjkyNUMxNjUuMjM3LDE4NS4yNTYsMTYxLjQ4MywxODYuMywxNTcuNzIyLDE4NS44NTZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzExLjgxNCwyMDIuMzQyYzAsNC45NDMtNC4wMDcsOC45NDgtOC45NDcsOC45NDhIMjQ4LjE4Yy00LjkzOSwwLTguOTQ1LTQuMDA1LTguOTQ1LTguOTQ4di01NC42ODgNCgkJCWMwLTQuOTM4LDQuMDA2LTguOTQ0LDguOTQ1LTguOTQ0aDU0LjY4OGM0Ljk0LDAsOC45NDYsNC4wMDYsOC45NDYsOC45NDRMMzExLjgxNCwyMDIuMzQyTDMxMS44MTQsMjAyLjM0MnoiLz4NCgkJPHBhdGggaWQ9IlhNTElEXzEzNDJfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMjY1LjU1NSwxNzcuODk1YzAuNDg2LDAuMTk5LDAuOTIzLDAuMDA5LDEuMDY0LTAuNTMNCgkJCWMwLjA5OC0wLjM3MywwLjMzLTEuMzE1LDAuNDMzLTEuNzA3YzAuMTQzLTAuNTM0LDAuMDg4LTAuNzE5LTAuMzA1LTEuMTg0Yy0wLjg1Ni0xLjAxLTEuNDAzLTIuMzE4LTEuNDAzLTQuMTY5DQoJCQljMC01LjM3MSw0LjAyLTEwLjE3OSwxMC40NjQtMTAuMTc5YzUuNzA4LDAsOC44NDQsMy40ODcsOC44NDQsOC4xNDZjMCw2LjEyNy0yLjcxMiwxMS4yOTktNi43MzgsMTEuMjk5DQoJCQljLTIuMjIzLDAtMy44ODctMS44MzgtMy4zNTYtNC4wOTNjMC42NDEtMi42OTEsMS44NzktNS41OTgsMS44NzktNy41NDJjMC0xLjc0LTAuOTM1LTMuMTktMi44NjctMy4xOWMtMi4yNzIsMC00LjEsMi4zNTEtNC4xLDUuNQ0KCQkJYzAsMi4wMDYsMC42ODEsMy4zNjQsMC42ODEsMy4zNjRzLTIuMzI3LDkuODU0LTIuNzM2LDExLjU4MWMtMC44MTIsMy40MzctMC4xMjIsNy42NS0wLjA2Myw4LjA3Ng0KCQkJYzAuMDM2LDAuMjUzLDAuMzU3LDAuMzEyLDAuNTA1LDAuMTIzYzAuMjEtMC4yNzYsMi45MTgtMy42MTgsMy44MzYtNi45NTZjMC4yNjItMC45NDUsMS40OTYtNS44NDIsMS40OTYtNS44NDINCgkJCWMwLjczNywxLjQwOCwyLjg5NiwyLjY0Nyw1LjE5LDIuNjQ3YzYuODM1LDAsMTEuNDctNi4yMjgsMTEuNDctMTQuNTY0YzAtNi4zMDQtNS4zNC0xMi4xNzYtMTMuNDU1LTEyLjE3Ng0KCQkJYy0xMC4wOTksMC0xNS4xOSw3LjI0LTE1LjE5LDEzLjI3OEMyNjEuMjAyLDE3My40MzEsMjYyLjU4NiwxNzYuNjg1LDI2NS41NTUsMTc3Ljg5NXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				className,
				'uagb-social-share__outer-wrap',
				`uagb-social-share__layout-${ social_layout }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<InnerBlocks
				template={ getSocialShareTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ social_layout }
			/>
		</div>
	);
};

export default React.memo( Render );
