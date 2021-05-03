import classnames from 'classnames';
import times from 'lodash/times';
import memoize from 'memize';
import ContentTmClasses from '.././classes';

import { __ } from '@wordpress/i18n';

const { InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'uagb/content-timeline-child' ];

export default function renderContentTimeline( props ) {
	// Setup the attributes.
	const {
		className,
		deviceType,
		attributes: { tm_content, timelineItem },
	} = props;

	const getContentTimelineTemplate = memoize( ( icon_block, tm_content ) => {
		return times( icon_block, ( n ) => [
			'uagb/content-timeline-child',
			tm_content[ n ],
		] );
	} );

	return (
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
			<div className="uagb-timeline__main">
				<div className="uagb-timeline__days">
					<InnerBlocks
						template={ getContentTimelineTemplate(
							timelineItem,
							tm_content
						) }
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
				<div className="uagb-timeline__line">
					<div className="uagb-timeline__line__inner"></div>
				</div>
			</div>
		</div>
	);
}
