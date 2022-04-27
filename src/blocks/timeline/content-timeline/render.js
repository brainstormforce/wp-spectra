import classnames from 'classnames';
import ContentTmClasses from '.././classes';
import React, { useMemo, useLayoutEffect } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [ 'uagb/content-timeline-child' ];

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
	// Setup the attributes.
	const {
		className,
		attributes: { isPreview, tm_content, timelineItem },
	} = props;

	const getContentTimelineTemplate = useMemo( () => {
		const childTimeline = [];

		for ( let i = 0; i < timelineItem; i++ ) {
			childTimeline.push( [
				'uagb/content-timeline-child',
				tm_content[ i ],
			] );
		}

		return childTimeline;
	}, [ timelineItem, tm_content ] );
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/content-timeline.png`;
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				'uagb-timeline__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId }`,
				'uagb-timeline__content-wrap',
				...ContentTmClasses( props.attributes )
			) }
		>
			<InnerBlocks
				template={ getContentTimelineTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
			/>
			<div className="uagb-timeline__line">
				<div className="uagb-timeline__line__inner"></div>
			</div>
		</div>
	);
};

export default React.memo( Render );
