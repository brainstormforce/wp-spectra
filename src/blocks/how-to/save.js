/**
 * BLOCK: How-To Schema - Save Block
 */

import classnames from 'classnames';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function save( props ) {
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
		imgTagHeight,
		imgTagWidth,
	} = attributes;

	let urlChk = '';
	let title = '';
	if ( 'undefined' !== typeof attributes.mainimage && null !== attributes.mainimage && '' !== attributes.mainimage ) {
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

	const defaultedAlt = mainimage && mainimage?.alt ? mainimage?.alt : '';

	let imageIconHtml = '';

	if ( mainimage && mainimage.url ) {
		imageIconHtml = (
			<img
				className="uagb-howto__source-image"
				src={ url }
				title={ title }
				width={ imgTagWidth }
				height={ imgTagHeight }
				loading="lazy"
				alt={ defaultedAlt }
			/>
		);
	}

	//Time Labels
	const yearlabel = getFallbackNumber( timeInYears, 'timeInYears', blockName ) > 1 ? ' Years ' : ' Year ';
	const monthlabel = getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) > 1 ? ' Months ' : ' Month ';
	const daylabel = getFallbackNumber( timeInDays, 'timeInDays', blockName ) > 1 ? ' Days ' : ' Day ';
	const hourlabel = getFallbackNumber( timeInHours, 'timeInHours', blockName ) > 1 ? 'Hours ' : ' Hour ';

	const minsValue = getFallbackNumber( timeInMins, 'timeInMins', blockName )
		? getFallbackNumber( timeInMins, 'timeInMins', blockName )
		: time;
	const minslabel = minsValue > 1 ? ' Minutes ' : ' Minute ';

	return (
		<div className={ classnames( className, `uagb-block-${ block_id }`, 'uagb-how-to-main-wrap' ) }>
			<script type="application/ld+json">{ schema }</script>
			<RichText.Content value={ headingTitle } tagName={ headingTag } className="uagb-howto-heading-text" />
			<RichText.Content value={ headingDesc } tagName="p" className="uagb-howto-desc-text" />
			{ imageIconHtml }
			{ showTotaltime && (
				<span className="uagb-howto__time-wrap">
					<RichText.Content value={ timeNeeded } tagName="h4" className="uagb-howto-timeNeeded-text" />
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
				<RichText.Content value={ materialTitle } tagName="h4" className="uagb-howto-req-materials-text" />
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
}
