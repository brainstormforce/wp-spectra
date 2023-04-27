/**
 * BLOCK: Testimonial - Save Block
 */

import classnames from 'classnames';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import PositionClasses from './classes';
import TestimonialImage from './components/newImage';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function save( props ) {
	const {
		block_id,
		className,
		columns,
		tcolumns,
		mcolumns,
		test_block,
		imagePosition,
		equalHeight,
		test_item_count,
	} = props.attributes;
	const equalHeightClass = equalHeight ? 'uagb-post__carousel_equal-height' : '';
	const isGridLayout = test_item_count === columns ? 'uagb-post__carousel_notset' : '';
	const isGridLayoutTablet = test_item_count === tcolumns ? 'uagb-post__carousel_notset-tablet' : '';
	const isGridLayoutMobile = test_item_count === mcolumns ? 'uagb-post__carousel_notset-mobile' : '';
	return (
		<div
			className={ classnames(
				className,
				'uagb-slick-carousel uagb-tm__arrow-outside',
				`uagb-block-${ block_id }`,
				`${ equalHeightClass }`,
				isGridLayout,
				isGridLayoutTablet,
				isGridLayoutMobile
			) }
		>
			<div
				className={ classnames(
					'is-carousel',
					`uagb-tm__columns-${ getFallbackNumber( columns, 'columns', 'testimonial' ) }`,
					'uagb-tm__items'
				) }
			>
				{ test_block.map( ( test, index ) => (
					<div
						className={ classnames( 'uagb-testimonial__wrap', ...PositionClasses( props.attributes ) ) }
						key={ 'wrap-' + index }
					>
						<div className="uagb-tm__content" key={ 'tm_content-' + index }>
							<div className="uagb-tm__overlay"></div>
							{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
								<TestimonialImage attributes={ props.attributes } index_value={ index } />
							) }

							<div className="uagb-tm__text-wrap">
								{
									// Get description.
									<>
										<Description
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
											index_value={ index }
										/>
									</>
								}
								<div className="uagb-tm__meta-inner">
									{ imagePosition === 'bottom' && (
										<TestimonialImage attributes={ props.attributes } index_value={ index } />
									) }

									{
										//title_text
										<>
											<div className="uagb-testimonial-details" key={ 'tm_wraps-' + index }>
												<AuthorName
													attributes={ props.attributes }
													setAttributes="not_set"
													props={ props }
													index_value={ index }
												/>
												<Company
													attributes={ props.attributes }
													setAttributes="not_set"
													props={ props }
													index_value={ index }
												/>
											</div>
										</>
									}
								</div>
							</div>
							{ imagePosition === 'right' && (
								<TestimonialImage attributes={ props.attributes } index_value={ index } />
							) }
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
