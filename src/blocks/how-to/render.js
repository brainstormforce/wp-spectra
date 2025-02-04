import classnames from 'classnames';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { useLayoutEffect, memo, useEffect } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

var ALLOWED_BLOCKS = [ 'uagb/how-to-step' ]; // eslint-disable-line no-var

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) {
	ALLOWED_BLOCKS = [ 'uagb/info-box', 'uagb/how-to-step' ];
}

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// Setup the attributes
	const {
		className,
		attributes,
		setAttributes,
		insertBlocksAfter,
		mergeBlocks,
		onReplace,
		attributes: {
			currencyType,
			showEstcost,
			showTotaltime,
			showMaterials,
			showTools,
			toolsTitle,
			materialTitle,
			stepsTitle,
			tools,
			materials,
			timeNeeded,
			estCost,
			mainimage,
			headingTitle,
			headingDesc,
			headingTag,
			time,
			cost,
			timeInMins,
			timeInHours,
			timeInDays,
			timeInMonths,
			timeInYears,
			imgTagHeight,
			imgTagWidth,
			block_id,
		},
		deviceType,
		name,
	} = props;

	const blockName = name.replace( 'uagb/', '' );

	const splitBlock = ( before, after, ...blocks ) => {
		if ( after ) {
			// Append "After" content as a new paragraph block to the end of
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( 'core/paragraph', { content: after } ) );
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks );
		}

		const { content } = attributes;
		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] );
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } );
		}
	};

	const saveMaterials = ( value, index ) => {
		const newItems = materials.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value };
			}

			return item;
		} );

		setAttributes( {
			materials: newItems,
		} );
	};

	const saveTools = ( value, index ) => {
		const newItems = tools.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value };
			}

			return item;
		} );

		setAttributes( {
			tools: newItems,
		} );
	};

	let urlChk = '';
	let title = '';
	let url = '';
	if ( 'undefined' !== typeof attributes.mainimage && null !== attributes.mainimage && '' !== attributes.mainimage ) {
		urlChk = attributes.mainimage.url;
		title = attributes.mainimage.title;
	}

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

	useEffect( () => {
		getImageHeightWidth( url, setAttributes );
	}, [ url ] );

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

	const minsValue = getFallbackNumber( timeInMins, 'timeInMins', blockName )
		? getFallbackNumber( timeInMins, 'timeInMins', blockName )
		: time;

	const getStepAsChild = [
		[
			'uagb/how-to-step',
			{
				name: 'Step 1',
				description: __(
					'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
					'ultimate-addons-for-gutenberg'
				),
			},
		],
		[
			'uagb/how-to-step',
			{
				name: 'Step 2',
				description: __(
					'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
					'ultimate-addons-for-gutenberg'
				),
			},
		],
		[
			'uagb/how-to-step',
			{
				name: 'Step 3',
				description: __(
					'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
					'ultimate-addons-for-gutenberg'
				),
			},
		],
	];

	//Time Labels
	const yearLabel =
		getFallbackNumber( timeInYears, 'timeInYears', blockName ) > 1
			? __( 'Years', 'ultimate-addons-for-gutenberg' )
			: __( 'Year', 'ultimate-addons-for-gutenberg' );
	const monthLabel =
		getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) > 1
			? __( ' Months ', 'ultimate-addons-for-gutenberg' )
			: __( ' Month ', 'ultimate-addons-for-gutenberg' );
	const dayLabel =
		getFallbackNumber( timeInDays, 'timeInDays', blockName ) > 1
			? __( ' Days ', 'ultimate-addons-for-gutenberg' )
			: __( ' Day ', 'ultimate-addons-for-gutenberg' );
	const hourLabel =
		getFallbackNumber( timeInHours, 'timeInHours', blockName ) > 1
			? __( 'Hours ', 'ultimate-addons-for-gutenberg' )
			: __( ' Hour ', 'ultimate-addons-for-gutenberg' );
	const minsLabel =
		minsValue > 1
			? __( ' Minutes ', 'ultimate-addons-for-gutenberg' )
			: __( ' Minute ', 'ultimate-addons-for-gutenberg' );

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				'uagb-how-to-main-wrap'
			) }
		>
			<RichText
				tagName={ headingTag }
				placeholder={ __( 'How to configure HowTo Schema in UAG?', 'ultimate-addons-for-gutenberg' ) }
				value={ headingTitle }
				className="uagb-howto-heading-text"
				multiline={ false }
				onChange={ ( value ) => {
					setAttributes( { headingTitle: value } );
				} }
				onMerge={ mergeBlocks }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { content: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										content: after,
									} ),
								] );
						  }
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
			<RichText
				tagName="p"
				placeholder={ __(
					'So to get started, you will just need to drag-n-drop the How-to block in the Gutenberg editor. The How-to block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.',
					'ultimate-addons-for-gutenberg'
				) }
				value={ headingDesc }
				className="uagb-howto-desc-text"
				onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
				onMerge={ mergeBlocks }
				onSplit={ splitBlock }
				onRemove={ () => onReplace( [] ) }
			/>
			{ imageIconHtml }
			<span className="uagb-howto__time-wrap">
				{ showTotaltime && (
					<RichText
						tagName="h4"
						placeholder={ __( 'Total Time Needed ( Minutes ):', 'ultimate-addons-for-gutenberg' ) }
						value={ timeNeeded }
						className="uagb-howto-timeNeeded-text"
						onChange={ ( value ) => setAttributes( { timeNeeded: value } ) }
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showTotaltime && (
					<>
						{ getFallbackNumber( timeInYears, 'timeInYears', blockName ) && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ ' ' }
									{ getFallbackNumber( timeInYears, 'timeInYears', blockName ) }
								</p>
								<p className="uagb-howto-timeINmin-text"> { yearLabel }</p>
							</>
						) }
						{ getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ getFallbackNumber( timeInMonths, 'timeInMonths', blockName ) }
								</p>
								<p className="uagb-howto-timeINmin-text">{ monthLabel }</p>
							</>
						) }
						{ getFallbackNumber( timeInDays, 'timeInDays', blockName ) && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ getFallbackNumber( timeInDays, 'timeInDays', blockName ) }
								</p>
								<p className="uagb-howto-timeINmin-text">{ dayLabel }</p>
							</>
						) }
						{ getFallbackNumber( timeInHours, 'timeInHours', blockName ) && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ getFallbackNumber( timeInHours, 'timeInHours', blockName ) }
								</p>
								<p className="uagb-howto-timeINmin-text">{ hourLabel }</p>
							</>
						) }
						{ minsValue && (
							<>
								<p className="uagb-howto-timeNeeded-value">{ minsValue }</p>
								<p className="uagb-howto-timeINmin-text">{ minsLabel }</p>
							</>
						) }
					</>
				) }
			</span>
			<span className="uagb-howto__cost-wrap">
				{ showEstcost && (
					<RichText
						tagName="h4"
						placeholder={ __( 'Total Cost:', 'ultimate-addons-for-gutenberg' ) }
						value={ estCost }
						className="uagb-howto-estcost-text"
						onChange={ ( value ) => setAttributes( { estCost: value } ) }
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showEstcost && (
					<RichText
						tagName="p"
						placeholder={ __( '30', 'ultimate-addons-for-gutenberg' ) }
						value={ cost }
						className="uagb-howto-estcost-value"
						onChange={ ( value ) => setAttributes( { cost: value } ) }
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showEstcost && (
					<RichText
						tagName="p"
						placeholder={ __( 'USD', 'ultimate-addons-for-gutenberg' ) }
						value={ currencyType }
						className="uagb-howto-estcost-type"
						onChange={ ( value ) => setAttributes( { currencyType: value } ) }
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
			</span>
			{ showTools && (
				<RichText
					tagName="h4"
					placeholder={ __( 'requirements tools:', 'ultimate-addons-for-gutenberg' ) }
					value={ toolsTitle }
					className="uagb-howto-req-tools-text"
					onChange={ ( value ) => setAttributes( { toolsTitle: value } ) }
					onMerge={ mergeBlocks }
					onSplit={ splitBlock }
					onRemove={ () => onReplace( [] ) }
				/>
			) }
			{ showTools && (
				<>
					{ tools.map( ( tool, index ) => {
						return (
							<RichText
								tagName="div"
								placeholder={ __( 'Requirements Tools:', 'ultimate-addons-for-gutenberg' ) }
								value={ tool.add_required_tools }
								onChange={ ( value ) => {
									saveTools(
										{
											add_required_tools: value,
										},
										index
									);
								} }
								className={ `uagb-tools__label ${ index }` }
								multiline={ false }
								allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough' ] }
								key={ index }
							/>
						);
					} ) }
				</>
			) }
			{ showMaterials && (
				<RichText
					tagName="h4"
					placeholder={ __( 'requirements materials:', 'ultimate-addons-for-gutenberg' ) }
					value={ materialTitle }
					className="uagb-howto-req-materials-text"
					onChange={ ( value ) => setAttributes( { materialTitle: value } ) }
					onMerge={ mergeBlocks }
					onSplit={ splitBlock }
					onRemove={ () => onReplace( [] ) }
				/>
			) }
			{ showMaterials && (
				<>
					{ materials.map( ( material, index ) => {
						return (
							<RichText
								tagName="div"
								placeholder={ __( 'Requirements Materials:', 'ultimate-addons-for-gutenberg' ) }
								value={ material.add_required_materials }
								onChange={ ( value ) => {
									saveMaterials(
										{
											add_required_materials: value,
										},
										index
									);
								} }
								className={ `uagb-materials__label ${ index }` }
								multiline={ false }
								allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough' ] }
								key={ index }
							/>
						);
					} ) }
				</>
			) }
			<RichText
				tagName="h4"
				placeholder={ __( 'requirements Steps:', 'ultimate-addons-for-gutenberg' ) }
				value={ stepsTitle }
				className="uagb-howto-req-steps-text"
				onChange={ ( value ) => setAttributes( { stepsTitle: value } ) }
				onMerge={ mergeBlocks }
				onSplit={ splitBlock }
				onRemove={ () => onReplace( [] ) }
			/>
			<InnerBlocks template={ getStepAsChild } allowedBlocks={ ALLOWED_BLOCKS } />
		</div>
	);
};

export default memo( Render );
