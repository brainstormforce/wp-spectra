/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import Title from './components/Title';
import Price from './components/Price';
import Description from './components/Description';
import PositionClasses from '../price-list/classes';
import RestMenuImage from './components/RestMenuImageOld';

const attributes = {
	block_id: {
		type: 'string',
	},
	description: {
		type: 'string',
		default: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		),
	},
	title: {
		type: 'string',
		default: __( 'Menu Item' ),
	},
	price: {
		type: 'string',
		default: __( '$9' ),
	},
	image: {
		type: 'object',
		default: null
	},
	imagePosition: {
		type: 'string',
		default: 'top',
		isUAGStyle: true,
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
		isUAGStyle: true,
	},
	imageSize: {
		type: 'string',
		default: 'medium',
		isUAGStyle: true,
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	columns: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	tcolumns: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	mcolumns: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	headingAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
};

const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id, className, imagePosition } = props.attributes;
			return (
				<>
					<div
						className={ classnames(
							'uagb-rest_menu__wrap',
							'uagb-rest_menu_repeater',
							...PositionClasses( props.attributes )
						) }
					>
						<div
							className={ classnames(
								className,
								'uagb-rest_menu__outer-wrap',
								`uagb-block-${ block_id }`
							) }
						>
							<div
								className={ classnames(
									...PositionClasses( props.attributes )
								) }
							>
								<div className="uagb-rm__content">
									{ ( imagePosition == 'top' ||
										imagePosition == 'left' ) && (
										<RestMenuImage
											attributes={ props.attributes }
										/>
									) }
									<div className="uagb-rm__text-wrap">
										{
											<>
												<div className="uagb-rm-details">
													<div className="uagb-rm__title-wrap">
														<Title
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
														/>
														<div className="uagb-rest-menu-text-wrap">
															<Description
																attributes={
																	props.attributes
																}
																setAttributes="not_set"
																props={ props }
															/>
														</div>
													</div>
													<div className="uagb-rm__price-wrap">
														<Price
															attributes={
																props.attributes
															}
															setAttributes="not_set"
															props={ props }
														/>
													</div>
												</div>
											</>
										}
									</div>
									{ imagePosition == 'right' && (
										<RestMenuImage
											attributes={ props.attributes }
										/>
									) }
								</div>
								<div className="uagb-rm__separator-parent">
									<div className="uagb-rm__separator"></div>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { imagePosition, headingAlign } = props.attributes;

			return (
				<>
					<div
						className={ classnames(
							'uagb-rest_menu__wrap',
							...PositionClasses( props.attributes )
						) }
					>
						<div className="uagb-rm__content">
							{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
								<RestMenuImage attributes={ props.attributes } />
							) }
								{
									<>
									<div className="uagb-rm-details">
									{ imagePosition === 'right' && (
										<>
										<Price
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										<Title
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										<Description
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										</>
									) }
									{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
										<>
										{ ( headingAlign === 'right' ) && (
										<Price
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										)}
										<Title
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										<Description
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										{ ( headingAlign !== 'right' ) && (
										<Price
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
										)}
										</>
									)}
									</div>

									</>
								}
							{ imagePosition === 'right' && (
								<RestMenuImage attributes={ props.attributes } />
							) }
						</div>
							<div className="uagb-rm__separator"></div>
					</div>
				</>
			);
		},
	},
];
export default deprecated;
