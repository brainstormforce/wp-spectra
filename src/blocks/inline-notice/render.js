// Import block dependencies and components
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

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
	// Setup the attributes
	const {
		attributes: {
			isPreview,
			block_id,
			icon,
			noticeTitle,
			noticeContent,
			noticeDismiss,
			noticeAlignment,
			headingTag,
		},
		setAttributes,
		className,
	} = props;

	let imageIconHtml = '';

	if ( noticeDismiss ) {
		imageIconHtml = ( renderSVG( icon ) );
	}
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yODUuNTMzLDIwMS45MzFjMCwyLjYzMy0yLjEzNyw0Ljc2OS00Ljc3LDQuNzY5SDU1LjY1M2MtMi42MzQsMC00Ljc3LTIuMTM2LTQuNzctNC43Njl2LTAuNTk4DQoJYzAtMi42MzMsMi4xMzYtNC43NjksNC43Ny00Ljc2OWgyMjUuMTFjMi42MzMsMCw0Ljc3LDIuMTM2LDQuNzcsNC43NjlWMjAxLjkzMXoiLz4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfM18iIGQ9Ik0zMTcuMDg5LDIyMi4xNzFjMCw0LjM5Ny0zLjU2Myw3Ljk2Mi03Ljk2MSw3Ljk2Mkg0MC44NzFjLTQuMzk2LDAtNy45Ni0zLjU2NC03Ljk2LTcuOTYydi05NC4zNDMNCgkJCWMwLTQuMzk2LDMuNTYzLTcuOTYsNy45Ni03Ljk2aDI2OC4yNTdjNC4zOTcsMCw3Ljk2MSwzLjU2Myw3Ljk2MSw3Ljk2VjIyMi4xNzF6Ii8+DQoJPC9kZWZzPg0KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPg0KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQoJPC9jbGlwUGF0aD4NCgk8cmVjdCB4PSIyMy40MTciIHk9IjExNS41ODciIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiIGZpbGw9IiNGMUYxRjIiIHdpZHRoPSIyOTkuNzIiIGhlaWdodD0iNTguODcyIi8+DQo8L2c+DQo8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTgzLjUsMTQ3LjUzNGMwLDQuOTgtNC4wMzcsOS4wMi05LjAxOSw5LjAySDU5LjkwM2MtNC45ODEsMC05LjAyLTQuMDQtOS4wMi05LjAydjAuNTQ2DQoJYzAtNC45NzksNC4wMzktOS4wMiw5LjAyLTkuMDJoMTE0LjU3OWM0Ljk4MSwwLDkuMDE5LDQuMDQxLDkuMDE5LDkuMDJWMTQ3LjUzNHoiLz4NCjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0YxRjFGMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMzE3LjA4OSwyMjIuMTczYzAsNC4zOTQtMy41NjMsNy45NTktNy45NjEsNy45NTlINDAuODcxDQoJYy00LjM5NiwwLTcuOTU5LTMuNTY1LTcuOTU5LTcuOTU5di05NC4zNDVjMC00LjM5NiwzLjU2My03Ljk2LDcuOTU5LTcuOTZoMjY4LjI1N2M0LjM5NywwLDcuOTYxLDMuNTYzLDcuOTYxLDcuOTZWMjIyLjE3M3oiLz4NCjwvc3ZnPg0K';
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				`${ noticeDismiss }`,
				`uagb-inline_notice__align-${ noticeAlignment }`,
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
			) }
		>
			{ imageIconHtml }
			<RichText
				tagName={ headingTag }
				placeholder={ __(
					'Notice Title',
					'ultimate-addons-for-gutenberg'
				) }
				keepPlaceholderOnFocus
				value={ noticeTitle }
				className="uagb-notice-title"
				onChange={ ( value ) =>
					setAttributes( { noticeTitle: value } )
				}
			/>
			<RichText
				tagName="div"
				multiline="p"
				placeholder={ __(
					'Add Content…',
					'ultimate-addons-for-gutenberg'
				) }
				value={ noticeContent }
				className="uagb-notice-text"
				onChange={ ( value ) =>
					setAttributes( { noticeContent: value } )
				}
			/>
		</div>
	);
};
export default React.memo( Render );
