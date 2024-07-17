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
import RestMenuImagev2_0_14 from './components/RestMenuImagev2_0_14';

const attributes = {
	block_id: {
		type: 'string',
	},
	description: {
		type: 'string',
		default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ),
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
		default: null,
	},
	imagePosition: {
		type: 'string',
		default: 'top',
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
	},
	imageSize: {
		type: 'string',
		default: 'medium',
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	tcolumns: {
		type: 'number',
		default: 2,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	headingAlign: {
		type: 'string',
		default: 'left',
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
							<div className={ classnames( ...PositionClasses( props.attributes ) ) }>
								<div className="uagb-rm__content">
									{ ( imagePosition == 'top' || imagePosition == 'left' ) && (
										<RestMenuImage attributes={ props.attributes } />
									) }
									<div className="uagb-rm__text-wrap">
										{
											<>
												<div className="uagb-rm-details">
													<div className="uagb-rm__title-wrap">
														<Title
															attributes={ props.attributes }
															setAttributes="not_set"
															props={ props }
														/>
														<div className="uagb-rest-menu-text-wrap">
															<Description
																attributes={ props.attributes }
																setAttributes="not_set"
																props={ props }
															/>
														</div>
													</div>
													<div className="uagb-rm__price-wrap">
														<Price
															attributes={ props.attributes }
															setAttributes="not_set"
															props={ props }
														/>
													</div>
												</div>
											</>
										}
									</div>
									{ imagePosition == 'right' && <RestMenuImage attributes={ props.attributes } /> }
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
		// depricated for v 2.0.14
		attributes: {
			block_id: {
				type: 'string',
			},
			description: {
				type: 'string',
				default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ),
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
				default: { url: `${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg` },
			},
			imagePosition: {
				type: 'string',
				default: 'left',
				UAGCopyPaste: {
					styleType: 'image-position',
				},
			},
			imageAlignment: {
				type: 'string',
				default: 'top',
				UAGCopyPaste: {
					styleType: 'image-align',
				},
			},
			imageSize: {
				type: 'string',
				default: 'medium',
				UAGCopyPaste: {
					styleType: 'image-size',
				},
			},
			headingTag: {
				type: 'string',
				default: 'h4',
			},
			columns: {
				type: 'number',
				default: 2,
			},
			tcolumns: {
				type: 'number',
				default: 2,
			},
			mcolumns: {
				type: 'number',
				default: 1,
			},
			headingAlign: {
				type: 'string',
				default: 'left',
				UAGCopyPaste: {
					styleType: 'main-title-align',
				},
			},
			stack: {
				type: 'string',
				default: 'tablet',
			},
			imgAlign: {
				type: 'string',
				UAGCopyPaste: {
					styleType: 'image-align',
				},
				default: 'side',
			},
			showImage: {
				type: 'boolean',
				default: true,
			},
		},
		save( props ) {
			const { imagePosition, headingAlign, imgAlign, showImage } = props.attributes;

			return (
				<div className={ classnames( 'uagb-rest_menu__wrap' ) }>
					{ imgAlign === 'top' && (
						<>
							{ showImage && <RestMenuImagev2_0_14 attributes={ props.attributes } /> }
							<div className="uagb-rm__content">
								{ headingAlign === 'right' && (
									<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
								) }
								<div className="uagb-rm-details">
									<Title attributes={ props.attributes } setAttributes="not_set" props={ props } />
									<Description
										attributes={ props.attributes }
										setAttributes="not_set"
										props={ props }
									/>
									{ headingAlign === 'center' && (
										<Price
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
									) }
								</div>
								{ headingAlign === 'left' && (
									<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
								) }
							</div>
							<div className="uagb-rm__separator"></div>
						</>
					) }
					{ imgAlign === 'side' && (
						<>
							<div className="uagb-rm__content">
								{ imagePosition === 'left' && showImage && (
									<RestMenuImagev2_0_14 attributes={ props.attributes } />
								) }
								{ imagePosition === 'right' && (
									<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
								) }
								<div className="uagb-rm-details">
									<Title attributes={ props.attributes } setAttributes="not_set" props={ props } />
									<Description
										attributes={ props.attributes }
										setAttributes="not_set"
										props={ props }
									/>
								</div>
								{ imagePosition === 'left' && (
									<Price attributes={ props.attributes } setAttributes="not_set" props={ props } />
								) }
								{ imagePosition === 'right' && showImage && (
									<RestMenuImagev2_0_14 attributes={ props.attributes } />
								) }
							</div>
							<div className="uagb-rm__separator"></div>
						</>
					) }
				</div>
			);
		},
	},
];
export default deprecated;
