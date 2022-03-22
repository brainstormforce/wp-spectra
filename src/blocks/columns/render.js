/**
 * BLOCK: Columns - Editor Render.
 */

import classnames from 'classnames';
import shapes from './shapes';
import React, { useMemo } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
const ALLOWED_BLOCKS = [ 'uagb/column' ];
import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {

	const { attributes, isSelected, className } = props.parentProps;
	const deviceType = useDeviceType();
	const {
		isPreview,
		stack,
		align,
		vAlign,
		tag,
		columnGap,
		backgroundType,
		backgroundVideo,
		columns,
		bottomType,
		topType,
		bottomFlip,
		topFlip,
		reverseTablet,
		reverseMobile,
		topContentAboveShape,
		bottomContentAboveShape,
	} = attributes;

	const getColumnsTemplate = useMemo( () => {
		const childColumns = [];

		for ( let i = 0; i < columns; i++ ) {
			childColumns.push( [ 'uagb/column', { id: i + 1 } ] );
		}

		return childColumns;
	}, [ columns ] );

	const topDividerHtml = topType !== 'none' && (
		<div
			className={ classnames(
				'uagb-columns__shape',
				'uagb-columns__shape-top',
				{ 'uagb-columns__shape-flip': topFlip === true },
				{
					'uagb-columns__shape-above-content':
						topContentAboveShape === true,
				}
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = bottomType !== 'none' && (
		<div
			className={ classnames(
				'uagb-columns__shape',
				'uagb-columns__shape-bottom',
				{ 'uagb-columns__shape-flip': bottomFlip === true },
				{
					'uagb-columns__shape-above-content':
						bottomContentAboveShape === true,
				}
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const reverseTabletClass = reverseTablet
		? 'uagb-columns__reverse-tablet'
		: '';

	const reverseMobileClass = reverseMobile
		? 'uagb-columns__reverse-mobile'
		: '';

	const CustomTag = `${ tag }`;

	const active = isSelected ? 'active' : 'not-active';

	const bgType = ( undefined !== backgroundType ) ? `uagb-columns__background-${ backgroundType }` : '';

	const verticalAlign = ( undefined !== vAlign ) ? `uagb-columns__valign-${ vAlign }` : '';

	const alignType = ( undefined !== align ) ? `align${ align }` : '';
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iNDM0LjVweCIgdmlld0JveD0iMCAwIDM1MCA0MzQuNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzUwIDQzNC41IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjQ2LjEyNSIgeT0iMjkuMzc5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMTI0LjUiIGhlaWdodD0iNTQuOTkyIi8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxNzkuMzc1IiB5PSIyOS4zNzkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIyNDIuNzA4IiB5PSIyOS4zNzkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNDUuODA3IiB5PSIxMDkuNTY3IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNDAuMjg5IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iODcuODUxIiB5PSIxMDkuNTY3IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iODIuNzczIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHJlY3QgeD0iMjYzLjkwMyIgeT0iMTA5LjU2NyIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjQwLjI4OSIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjE3OS4zNzUiIHk9IjEwOS41NjciIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI4Mi43NzMiIGhlaWdodD0iNTQuOTkyIi8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNDUuOTk5IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNDAuMzMyIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iODguMTQ2IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNDAuMzMxIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTMwLjI5MyIgeT0iMTg5Ljc1NCIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjQwLjMzMiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjI0Mi43MDgiIHk9IjE4OS43NTQiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIxNzkuMzc1IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMjkuMTUiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIyMTAuNzA4IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMzAuMTUxIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjQ1LjgwNyIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iNzcuNjk3IiB5PSIzNTAuMTI5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMjkuMTQ5IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTA5LjU4NSIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTQxLjQ3NCIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHJlY3QgeD0iMjgxLjA0OCIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjIzLjE0NiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjI1NS42MyIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjIzLjE0NiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjIzMC4yMTIiIHk9IjM1MC4xMjkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSIyMy4xNDUiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIyMDQuNzkzIiB5PSIzNTAuMTI5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMjMuMTQ2IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTc5LjM3NSIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjIzLjE0NiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIyMTAuODc1IiB5PSIyNjkuOTQxIiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTc5LjM3NSIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMjc0LjM3NSIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjgxNyIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjQ1LjgwNyIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjE0MS40NzQiIHk9IjI2OS45NDEiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSIyOS4xNSIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjEwOS4xNCIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjMwLjE1MSIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<CustomTag
			className={ classnames(
				className,
				'uagb-columns__wrap',
				`${ bgType }`,
				`uagb-columns__edit-${ active }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-columns__stack-${ stack }`,
				`${ verticalAlign }`,
				`uagb-columns__gap-${ columnGap }`,
				`${ alignType }`,
				reverseTabletClass,
				reverseMobileClass,
				`uagb-block-${ props.parentProps.clientId.substr( 0, 8 ) }`,
				`uagb-columns__columns-${ columns }`
			) }
		>
			<div className="uagb-columns__overlay"></div>
			{ topDividerHtml }
			{ 'video' === backgroundType && (
				<div className="uagb-columns__video-wrap">
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
			<InnerBlocks
				template={ getColumnsTemplate }
				templateLock="all"
				allowedBlocks={ ALLOWED_BLOCKS }
			/>
			{ bottomDividerHtml }
		</CustomTag>
	);
};

export default React.memo( Render );
