import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
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
	const { attributes, isSelected, className } = props;

	const {
		isPreview,
		align,
		contentWidth,
		tag,
		backgroundType,
		backgroundVideo,
	} = attributes;

	const CustomTag = `${ tag }`;

	const active = isSelected ? 'active' : 'not-active';

	let blockControlsClass = '';
	if ( 'full_width' === contentWidth ) {
		if ( align === 'wide' || align === 'full' ) {
			blockControlsClass = 'align' + align;
		}
	}
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0zMTMuNzU1LDIwNC41MzhjMCw0LjI5My0zLjQ4LDcuNzc0LTcuNzczLDcuNzc0SDQ0LjAxOWMtNC4yOTMsMC03Ljc3My0zLjQ4MS03Ljc3My03Ljc3NHYtNTkuMDc3DQoJCWMwLTQuMjkzLDMuNDgtNy43NzMsNy43NzMtNy43NzNoMjYxLjk2M2M0LjI5MywwLDcuNzczLDMuNDgsNy43NzMsNy43NzNWMjA0LjUzOHoiLz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjk3LjgyNywxOTUuODA4YzAsMS4yODctMS4wNDQsMi4zMzItMi4zMzIsMi4zMzJoLTE1LjE1OGMtMS4yODYsMC0yLjMzMi0xLjA0NS0yLjMzMi0yLjMzMnYtMTUuMTU4DQoJCWMwLTEuMjg5LDEuMDQ2LTIuMzMyLDIuMzMyLTIuMzMyaDE1LjE1OGMxLjI4OCwwLDIuMzMyLDEuMDQzLDIuMzMyLDIuMzMyVjE5NS44MDh6Ii8+DQoJPGc+DQoJCQ0KCQkJPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQkJCREMwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjI4Ny45MTYiIHkxPSIxODQuMjEyIiB4Mj0iMjg3LjkxNiIgeTI9IjE5Mi4yNDQiLz4NCgkJDQoJCQk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNCQkJEQzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjkxLjkzMyIgeTE9IjE4OC4yMjkiIHgyPSIyODMuOTAxIiB5Mj0iMTg4LjIyOSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
	return (
		<>
		{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<CustomTag
				className={ classnames(
					className,
					'uagb-section__wrap',
					`uagb-section__background-${ backgroundType }`,
					`uagb-section__edit-${ active }`,
					blockControlsClass,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`
				) }
			>
				<div className="uagb-section__overlay"></div>
				{ 'video' === backgroundType && (
					<div className="uagb-section__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source
									src={ backgroundVideo.url }
									type="video/mp4"
								/>
							</video>
						) }
					</div>
				) }
				<div className="uagb-section__inner-wrap">
					<InnerBlocks templateLock={ false } />
				</div>
			</CustomTag>
}
		</>
	);
};

export default React.memo( Render );
