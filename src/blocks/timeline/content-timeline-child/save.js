/**
 * BLOCK: Content timeline child - Save Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';

import { dateI18n } from '@wordpress/date';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		headingTag,
		displayPostDate,
		icon,
		t_date,
		dateFormat,
		time_heading,
		time_desc,
	} = props.attributes;

	const displayInnerDate = true;
	let postDate = t_date;
	if ( 'custom' !== dateFormat ) {
		postDate = dateI18n( dateFormat, t_date );
		if ( postDate === 'Invalid date' ) {
			postDate = t_date;
		}
	}

	let contentClass = '';
	let dayalignClass = '';

	if (
		props.attributes.dayalign_class !== 'undefined' &&
		props.attributes.content_class !== 'undefined'
	) {
		contentClass = props.attributes.content_class;
		dayalignClass = props.attributes.dayalign_class;
	}
	return (
		<article
			className={ classnames( 
				'uagb-timeline__field',
				`uagb-timeline-child-${ block_id }`,
				contentClass
			)}
		>
				<div className={ classnames( 'uagb-timeline__marker out-view-uagb-timeline__icon' ) } >
						{ renderSVG( icon ) }
				</div>

				<div className={ classnames( dayalignClass, 'uagb-timeline__events-inner-new' ) }>
								{ displayPostDate !== true && t_date && (
									<div
										className={
											'uagb-timeline__date-hide uagb-timeline__inner-date-new'
										}
									>
										{ postDate }
									</div>
								) }
									<RichText.Content
										tagName={ headingTag }
										value={ time_heading }
										className="uagb-timeline__heading"
									/>

								<RichText.Content
									tagName="p"
									value={ time_desc }
									className="uagb-timeline-desc-content"
								/>

								<div className="uagb-timeline__arrow"></div>
				</div>
				{ displayInnerDate && (
					<div className="uagb-timeline__date-new">
						{ displayPostDate !== true && t_date && (	
							<>
							{ ( 'custom' !== dateFormat &&
								dateI18n( dateFormat, postDate ) ) ||
								postDate }
							</>
						) }
					</div>
				) }
		</article>
	);
}
