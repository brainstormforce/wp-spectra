import classnames from 'classnames';
import attributes from './attributes';
import renderSVG from '@Controls/deprecatedRenderIcon';
import renderSVG13 from '@Controls/renderIcon';
import { dateI18n, getSettings } from '@wordpress/date';

import { RichText } from '@wordpress/block-editor';
import { format } from '@wordpress/date';
import { __ } from '@wordpress/i18n';

// Since the default description has been changed, we add the old description here.
attributes.time_desc.default = __(
	'This is Timeline description, you can change me anytime click here ',
	'ultimate-addons-for-gutenberg'
);

const deprecated = [
	{
		attributes,
		save( props ) {
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

			const display_inner_date = true;
			const icon_class = 'uagb-timeline__icon-new out-view-uagb-timeline__icon ';
			let post_date = t_date;
			if ( 'custom' != dateFormat ) {
				post_date = dateI18n( dateFormat, t_date );
				if ( post_date === 'Invalid date' ) {
					post_date = t_date;
				}
			}

			let content_class = '';
			let dayalign_class = '';

			if ( props.attributes.dayalign_class != 'undefined' && props.attributes.content_class != 'undefined' ) {
				content_class = props.attributes.content_class;
				dayalign_class = props.attributes.dayalign_class;
			}
			return (
				<article
					className={ classnames(
						'uagb-timeline__field uagb-timeline__field-wrap',
						`uagb-timeline-child-${ block_id }`
					) }
				>
					<div className={ classnames( content_class ) }>
						<div className="uagb-timeline__marker out-view-uagb-timeline__icon">
							<span className={ icon_class }>{ renderSVG( icon ) }</span>
						</div>

						<div className={ classnames( dayalign_class ) }>
							<div className="uagb-events-new">
								<div className="uagb-timeline__events-inner-new">
									<div className="uagb-timeline__date-hide uagb-timeline__date-inner">
										<div className={ 'uagb-timeline__inner-date-new' }>{ post_date }</div>
									</div>

									<div className="uagb-timeline-content">
										<div className="uagb-timeline__heading-text">
											<RichText.Content
												tagName={ headingTag }
												value={ time_heading }
												className="uagb-timeline__heading"
											/>
										</div>

										<RichText.Content
											tagName="p"
											value={ time_desc }
											className="uagb-timeline-desc-content"
										/>

										<div className="uagb-timeline__arrow"></div>
									</div>
								</div>
							</div>
						</div>
						{ display_inner_date && (
							<div className="uagb-timeline__date-new">
								{ displayPostDate != true && t_date && (
									<div className={ 'uagb-timeline__date-new' }>{ post_date }</div>
								) }
							</div>
						) }
					</div>
				</article>
			);
		},
	},
	{
		attributes,
		save( props ) {
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
				postDate = format( dateFormat, t_date );
				if ( format( dateFormat, postDate ) === 'Invalid date' ) {
					postDate = t_date;
				}
			}

			let contentClass = '';
			let dayalignClass = '';

			if ( props.attributes.dayalign_class !== 'undefined' && props.attributes.content_class !== 'undefined' ) {
				contentClass = props.attributes.content_class;
				dayalignClass = props.attributes.dayalign_class;
			}
			return (
				<article
					className={ classnames(
						'uagb-timeline__field',
						`uagb-timeline-child-${ block_id }`,
						contentClass
					) }
				>
					<div className={ classnames( 'uagb-timeline__marker out-view-uagb-timeline__icon' ) }>
						{ renderSVG13( icon ) }
					</div>

					<div className={ classnames( dayalignClass, 'uagb-timeline__events-inner-new' ) }>
						<div className="uagb-timeline__events-inner--content">
							{ displayPostDate !== true && t_date && (
								<div className={ 'uagb-timeline__date-hide uagb-timeline__inner-date-new' }>
									{ ( 'custom' !== dateFormat && format( dateFormat, postDate ) ) || postDate }
								</div>
							) }
							<RichText.Content
								tagName={ headingTag }
								value={ time_heading }
								className="uagb-timeline__heading"
							/>

							<RichText.Content tagName="p" value={ time_desc } className="uagb-timeline-desc-content" />

							<div className="uagb-timeline__arrow"></div>
						</div>
					</div>
					{ displayInnerDate && (
						<div className="uagb-timeline__date-new">
							{ displayPostDate !== true && t_date && (
								<>{ ( 'custom' !== dateFormat && format( dateFormat, postDate ) ) || postDate }</>
							) }
						</div>
					) }
				</article>
			);
		},
	},
];

export default deprecated;
