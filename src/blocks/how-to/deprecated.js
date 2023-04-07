/**
 * BLOCK: How To Schema - Deprecated Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import attributes from './attributes';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				timeNeeded,
				time,
				timeIn,
				estCost,
				cost,
				currencyType,
				mainimage,
				toolsTitle,
				stepsTitle,
				materialTitle,
				tools,
				materials,
				schema,
				showTotaltime,
				showEstcost,
				showTools,
				showMaterials,
			} = attributes;

			let urlChk = '';
			let title = '';
			if (
				'undefined' !== typeof attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				urlChk = attributes.mainimage.url;
				title = attributes.mainimage.title;
			}

			let url = '';
			if ( '' !== urlChk ) {
				const size = attributes.mainimage.sizes;
				const imageSize = attributes.imgSize;

				if ( 'undefined' !== typeof size && 'undefined' !== typeof size[ imageSize ] ) {
					url = size[ imageSize ].url;
				} else {
					url = urlChk;
				}
			}

			let imageIconHtml = '';

			if ( mainimage && mainimage.url ) {
				imageIconHtml = <img className="uagb-howto__source-image" src={ url } title={ title } />;
			}

			return (
				<div className={ classnames( className, `uagb-block-${ block_id }` ) }>
					<script type="application/ld+json">{ schema }</script>
					<div className="uagb-how-to-main-wrap">
						<div className="uagb-howto__wrap">
							<RichText.Content
								value={ headingTitle }
								tagName={ headingTag }
								className="uagb-howto-heading-text"
							/>
							<RichText.Content value={ headingDesc } tagName="p" className="uagb-howto-desc-text" />
							{ mainimage.url && <div className="uagb-howto__source-wrap">{ imageIconHtml }</div> }
							{ showTotaltime && (
								<span className="uagb-howto__time-wrap">
									<RichText.Content
										value={ timeNeeded }
										tagName="h4"
										className="uagb-howto-timeNeeded-text"
									/>
									<RichText.Content
										value={ time }
										tagName="p"
										className="uagb-howto-timeNeeded-value"
									/>
									<RichText.Content
										tagName="p"
										value={ timeIn }
										className="uagb-howto-timeINmin-text"
									/>
								</span>
							) }
							{ showEstcost && (
								<span className="uagb-howto__cost-wrap">
									<RichText.Content
										value={ estCost }
										tagName="h4"
										className="uagb-howto-estcost-text"
									/>
									<RichText.Content value={ cost } tagName="p" className="uagb-howto-estcost-value" />
									<RichText.Content
										tagName="p"
										value={ currencyType }
										className="uagb-howto-estcost-type"
									/>
								</span>
							) }
						</div>
						{ showTools && (
							<div className="uagb-how-to-tools__wrap">
								<RichText.Content
									value={ toolsTitle }
									tagName="h4"
									className="uagb-howto-req-tools-text"
								/>
							</div>
						) }
						{ showTools && (
							<div className="uagb-tools__wrap">
								{ tools.map( ( tools, index ) => {
									return (
										<div
											className={ classnames(
												`uagb-how-to-tools-${ index }`,
												'uagb-how-to-tools-child__wrapper'
											) }
											key={ index }
										>
											<div className="uagb-tools">
												<RichText.Content
													tagName="div"
													value={ tools.add_required_tools }
													className="uagb-tools__label"
												/>
											</div>
										</div>
									);
								} ) }
							</div>
						) }
						{ showMaterials && (
							<div className="uagb-how-to-materials__wrap">
								<RichText.Content
									value={ materialTitle }
									tagName="h4"
									className="uagb-howto-req-materials-text"
								/>
							</div>
						) }
						{ showMaterials && (
							<div className="uagb-how-to-materials">
								{ materials.map( ( materials, index ) => {
									return (
										<div
											className={ classnames(
												`uagb-how-to-materials-${ index }`,
												'uagb-how-to-materials-child__wrapper'
											) }
										>
											<div className="uagb-materials">
												<RichText.Content
													tagName="div"
													value={ materials.add_required_materials }
													className="uagb-materials__label"
												/>
											</div>
										</div>
									);
								} ) }
							</div>
						) }
						<div className="uagb-how-to-steps__wrap">
							<RichText.Content value={ stepsTitle } tagName="h4" className="uagb-howto-req-steps-text" />
							<div className="uagb-howto-steps__wrap">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				timeNeeded,
				time,
				timeIn,
				estCost,
				cost,
				currencyType,
				mainimage,
				toolsTitle,
				stepsTitle,
				materialTitle,
				tools,
				materials,
				schema,
				showTotaltime,
				showEstcost,
				showTools,
				showMaterials,
				timeInMins,
				timeInHours,
				timeInDays,
				timeInMonths,
				timeInYears,
			} = attributes;

			let urlChk = '';
			let title = '';
			if (
				'undefined' !== typeof attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				urlChk = attributes.mainimage.url;
				title = attributes.mainimage.title;
			}

			let url = '';
			if ( '' !== urlChk ) {
				const size = attributes.mainimage.sizes;
				const imageSize = attributes.imgSize;

				if ( 'undefined' !== typeof size && 'undefined' !== typeof size[ imageSize ] ) {
					url = size[ imageSize ].url;
				} else {
					url = urlChk;
				}
			}

			let imageIconHtml = '';

			if ( mainimage && mainimage.url ) {
				imageIconHtml = <img className="uagb-howto__source-image" src={ url } title={ title } />;
			}

			//Time Labels
			const yearlabel = timeInYears > 1 ? ' Years ' : ' Year ';
			const monthlabel = timeInMonths > 1 ? ' Months ' : ' Month ';
			const daylabel = timeInDays > 1 ? ' Days ' : ' Day ';
			const hourlabel = timeInHours > 1 ? 'Hours ' : ' Hour ';

			const minsValue = timeInMins ? timeInMins : time;
			const minslabel = minsValue > 1 ? ' Minutes ' : ' Minute ';

			return (
				<div className={ classnames( className, `uagb-block-${ block_id }` ) }>
					<script type="application/ld+json">{ schema }</script>
					<div className="uagb-how-to-main-wrap">
						<div className="uagb-howto__wrap">
							<RichText.Content
								value={ headingTitle }
								tagName={ headingTag }
								className="uagb-howto-heading-text"
							/>
							<RichText.Content value={ headingDesc } tagName="p" className="uagb-howto-desc-text" />
							{ mainimage.url && <div className="uagb-howto__source-wrap">{ imageIconHtml }</div> }
							{ showTotaltime && (
								<span className="uagb-howto__time-wrap">
									<RichText.Content
										value={ timeNeeded }
										tagName="h4"
										className="uagb-howto-timeNeeded-text"
									/>
									<>
										{ timeInYears && (
											<>
												<p className="uagb-howto-timeNeeded-value"> { timeInYears }</p>
												<p className="uagb-howto-timeINmin-text"> { yearlabel }</p>
											</>
										) }
										{ timeInMonths && (
											<>
												<p className="uagb-howto-timeNeeded-value">{ timeInMonths }</p>
												<p className="uagb-howto-timeINmin-text">{ monthlabel }</p>
											</>
										) }
										{ timeInDays && (
											<>
												<p className="uagb-howto-timeNeeded-value">{ timeInDays }</p>
												<p className="uagb-howto-timeINmin-text">{ daylabel }</p>
											</>
										) }
										{ timeInHours && (
											<>
												<p className="uagb-howto-timeNeeded-value">{ timeInHours }</p>
												<p className="uagb-howto-timeINmin-text">{ hourlabel }</p>
											</>
										) }
										{ minsValue && (
											<>
												<p className="uagb-howto-timeNeeded-value">{ minsValue }</p>
												<p className="uagb-howto-timeINmin-text">{ minslabel }</p>
											</>
										) }
									</>
								</span>
							) }
							{ showEstcost && (
								<span className="uagb-howto__cost-wrap">
									<RichText.Content
										value={ estCost }
										tagName="h4"
										className="uagb-howto-estcost-text"
									/>
									<RichText.Content value={ cost } tagName="p" className="uagb-howto-estcost-value" />
									<RichText.Content
										tagName="p"
										value={ currencyType }
										className="uagb-howto-estcost-type"
									/>
								</span>
							) }
						</div>
						{ showTools && (
							<div className="uagb-how-to-tools__wrap">
								<RichText.Content
									value={ toolsTitle }
									tagName="h4"
									className="uagb-howto-req-tools-text"
								/>
							</div>
						) }
						{ showTools && (
							<div className="uagb-tools__wrap">
								{ tools.map( ( tools, index ) => {
									return (
										<div
											className={ classnames(
												`uagb-how-to-tools-${ index }`,
												'uagb-how-to-tools-child__wrapper'
											) }
											key={ index }
										>
											<div className="uagb-tools">
												<RichText.Content
													tagName="div"
													value={ tools.add_required_tools }
													className="uagb-tools__label"
												/>
											</div>
										</div>
									);
								} ) }
							</div>
						) }
						{ showMaterials && (
							<div className="uagb-how-to-materials__wrap">
								<RichText.Content
									value={ materialTitle }
									tagName="h4"
									className="uagb-howto-req-materials-text"
								/>
							</div>
						) }
						{ showMaterials && (
							<div className="uagb-how-to-materials">
								{ materials.map( ( materials, index ) => {
									return (
										<div
											className={ classnames(
												`uagb-how-to-materials-${ index }`,
												'uagb-how-to-materials-child__wrapper'
											) }
										>
											<div className="uagb-materials">
												<RichText.Content
													tagName="div"
													value={ materials.add_required_materials }
													className="uagb-materials__label"
												/>
											</div>
										</div>
									);
								} ) }
							</div>
						) }
						<div className="uagb-how-to-steps__wrap">
							<RichText.Content value={ stepsTitle } tagName="h4" className="uagb-howto-req-steps-text" />
							<div className="uagb-howto-steps__wrap">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const blockName = 'how-to';

			const { attributes, className } = props;

			const {
				block_id,
				headingTitle,
				headingDesc,
				headingTag,
				timeNeeded,
				time,
				estCost,
				cost,
				currencyType,
				mainimage,
				toolsTitle,
				stepsTitle,
				materialTitle,
				tools,
				materials,
				schema,
				showTotaltime,
				showEstcost,
				showTools,
				showMaterials,
				timeInMins,
				timeInHours,
				timeInDays,
				timeInMonths,
				timeInYears,
			} = attributes;

			let urlChk = '';
			let title = '';
			if (
				'undefined' !== typeof attributes.mainimage &&
				null !== attributes.mainimage &&
				'' !== attributes.mainimage
			) {
				urlChk = attributes.mainimage.url;
				title = attributes.mainimage.title;
			}

			let url = '';
			if ( '' !== urlChk ) {
				const size = attributes.mainimage.sizes;
				const imageSize = attributes.imgSize;

				if ( 'undefined' !== typeof size && 'undefined' !== typeof size[ imageSize ] ) {
					url = size[ imageSize ].url;
				} else {
					url = urlChk;
				}
			}

			let imageIconHtml = '';

			if ( mainimage && mainimage.url ) {
				imageIconHtml = <img className="uagb-howto__source-image" src={ url } title={ title } alt="" />;
			}

			//Time Labels
			const yearlabel = getFallbackNumber( timeInYears, 'timeInYears', blockName ) > 1 ? ' Years ' : ' Year ';
			const monthlabel =
				getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) > 1 ? ' Months ' : ' Month ';
			const daylabel = getFallbackNumber( timeInDays, 'timeInDays', blockName ) > 1 ? ' Days ' : ' Day ';
			const hourlabel = getFallbackNumber( timeInHours, 'timeInHours', blockName ) > 1 ? 'Hours ' : ' Hour ';

			const minsValue = getFallbackNumber( timeInMins, 'timeInMins', blockName )
				? getFallbackNumber( timeInMins, 'timeInMins', blockName )
				: time;
			const minslabel = minsValue > 1 ? ' Minutes ' : ' Minute ';

			return (
				<div className={ classnames( className, `uagb-block-${ block_id }`, 'uagb-how-to-main-wrap' ) }>
					<script type="application/ld+json">{ schema }</script>
					<RichText.Content
						value={ headingTitle }
						tagName={ headingTag }
						className="uagb-howto-heading-text"
					/>
					<RichText.Content value={ headingDesc } tagName="p" className="uagb-howto-desc-text" />
					{ imageIconHtml }
					{ showTotaltime && (
						<span className="uagb-howto__time-wrap">
							<RichText.Content
								value={ timeNeeded }
								tagName="h4"
								className="uagb-howto-timeNeeded-text"
							/>
							<>
								{ getFallbackNumber( timeInYears, 'timeInYears', blockName ) && (
									<>
										<p className="uagb-howto-timeNeeded-value">
											{ ' ' }
											{ getFallbackNumber( timeInYears, 'timeInYears', blockName ) }
										</p>
										<p className="uagb-howto-timeINmin-text"> { yearlabel }</p>
									</>
								) }
								{ getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) && (
									<>
										<p className="uagb-howto-timeNeeded-value">
											{ getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) }
										</p>
										<p className="uagb-howto-timeINmin-text">{ monthlabel }</p>
									</>
								) }
								{ getFallbackNumber( timeInDays, 'timeInDays', blockName ) && (
									<>
										<p className="uagb-howto-timeNeeded-value">
											{ getFallbackNumber( timeInDays, 'timeInDays', blockName ) }
										</p>
										<p className="uagb-howto-timeINmin-text">{ daylabel }</p>
									</>
								) }
								{ getFallbackNumber( timeInHours, 'timeInHours', blockName ) && (
									<>
										<p className="uagb-howto-timeNeeded-value">
											{ getFallbackNumber( timeInHours, 'timeInHours', blockName ) }
										</p>
										<p className="uagb-howto-timeINmin-text">{ hourlabel }</p>
									</>
								) }
								{ minsValue && (
									<>
										<p className="uagb-howto-timeNeeded-value">{ minsValue }</p>
										<p className="uagb-howto-timeINmin-text">{ minslabel }</p>
									</>
								) }
							</>
						</span>
					) }
					{ showEstcost && (
						<span className="uagb-howto__cost-wrap">
							<RichText.Content value={ estCost } tagName="h4" className="uagb-howto-estcost-text" />
							<RichText.Content value={ cost } tagName="p" className="uagb-howto-estcost-value" />
							<RichText.Content tagName="p" value={ currencyType } className="uagb-howto-estcost-type" />
						</span>
					) }
					{ showTools && (
						<RichText.Content value={ toolsTitle } tagName="h4" className="uagb-howto-req-tools-text" />
					) }
					{ showTools && (
						<>
							{ tools.map( ( tool, index ) => {
								return (
									<RichText.Content
										tagName="div"
										value={ tool.add_required_tools }
										className={ `uagb-tools__label ${ index }` }
										key={ index }
									/>
								);
							} ) }
						</>
					) }
					{ showMaterials && (
						<RichText.Content
							value={ materialTitle }
							tagName="h4"
							className="uagb-howto-req-materials-text"
						/>
					) }
					{ showMaterials && (
						<>
							{ materials.map( ( material, index ) => {
								return (
									<RichText.Content
										tagName="div"
										value={ material.add_required_materials }
										className={ `uagb-materials__label ${ index }` }
										key={ index }
									/>
								);
							} ) }
						</>
					) }
					<RichText.Content value={ stepsTitle } tagName="h4" className="uagb-howto-req-steps-text" />
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];

export default deprecated;
