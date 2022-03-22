import classnames from 'classnames';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import React, { useLayoutEffect } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

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

	props = props.parentProps;

	const deviceType = useDeviceType();

	// Setup the attributes
	const {
		className,
		attributes,
		setAttributes,
		insertBlocksAfter,
		mergeBlocks,
		onReplace,
		attributes: {
			isPreview,
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
		},
	} = props;

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
	if (
		'undefined' !== typeof attributes.mainimage &&
		null !== attributes.mainimage &&
		'' !== attributes.mainimage
	) {
		urlChk = attributes.mainimage.url;
		title = attributes.mainimage.title;
	}

	if ( '' !== urlChk ) {
		const size = attributes.mainimage.sizes;
		const imageSize = attributes.imgSize;

		if (
			'undefined' !== typeof size &&
			'undefined' !== typeof size[ imageSize ]
		) {
			url = size[ imageSize ].url;
		} else {
			url = urlChk;
		}
	}

	let imageIconHtml = '';

	if ( mainimage && mainimage.url ) {
		imageIconHtml = (
			<img
				className="uagb-howto__source-image"
				src={ url }
				title={ title }
				alt=""
			/>
		);
	}

	const minsValue = timeInMins ? timeInMins : time;

	const getStepAsChild = [
		[
			'uagb/how-to-step',
			{
				name: 'Step 1',
				description:  __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'ultimate-addons-for-gutenberg' ),
			},
		],
		[
			'uagb/how-to-step',
			{
				name: 'Step 2',
				description:  __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'ultimate-addons-for-gutenberg' ),
			},
		],
		[
			'uagb/how-to-step',
			{
				name: 'Step 3',
				description:  __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'ultimate-addons-for-gutenberg' ),
			},
		],
	];

	//Time Labels
	const yearLabel =
		timeInYears > 1
			? __( 'Years', 'ultimate-addons-for-gutenberg' )
			: __( 'Year', 'ultimate-addons-for-gutenberg' );
	const monthLabel =
		timeInMonths > 1
			? __( ' Months ', 'ultimate-addons-for-gutenberg' )
			: __( ' Month ', 'ultimate-addons-for-gutenberg' );
	const dayLabel =
		timeInDays > 1
			? __( ' Days ', 'ultimate-addons-for-gutenberg' )
			: __( ' Day ', 'ultimate-addons-for-gutenberg' );
	const hourLabel =
		timeInHours > 1
			? __( 'Hours ', 'ultimate-addons-for-gutenberg' )
			: __( ' Hour ', 'ultimate-addons-for-gutenberg' );
	const minsLabel =
		minsValue > 1
			? __( ' Minutes ', 'ultimate-addons-for-gutenberg' )
			: __( ' Minute ', 'ultimate-addons-for-gutenberg' );

			const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNDQuMjEsMTg5LjkxNWMwLDQuOTktNC4wNDUsOS4wMzQtOS4wMzUsOS4wMzRINjAuODI3Yy00Ljk4OSwwLTkuMDMzLTQuMDQ0LTkuMDMzLTkuMDM0VjEzNC42OQ0KCQljMC00Ljk4OSw0LjA0NC05LjAzMyw5LjAzMy05LjAzM2g3NC4zNDljNC45ODksMCw5LjAzNCw0LjA0NCw5LjAzNCw5LjAzM0wxNDQuMjEsMTg5LjkxNUwxNDQuMjEsMTg5LjkxNXoiLz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTg3LjQwOSwyMjIuOTYxYzAsMS44MS0xLjQ2NywzLjI3Ni0zLjI3NCwzLjI3Nkg1NS4wNjdjLTEuODA3LDAtMy4yNzQtMS40NjctMy4yNzQtMy4yNzZ2LTAuNDA3DQoJCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMTI5LjA2N2MxLjgwOCwwLDMuMjc0LDEuNDY1LDMuMjc0LDMuMjczVjIyMi45NjF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjQ4LjgxOCwyMjIuOTYxYzAsMS44MS0xLjQ2NywzLjI3Ni0zLjI3MywzLjI3NmgtMjkuODI0Yy0xLjgwOCwwLTMuMjc0LTEuNDY3LTMuMjc0LTMuMjc2di0wLjQwNw0KCQkJCWMwLTEuODA5LDEuNDY3LTMuMjczLDMuMjc0LTMuMjczaDI5LjgyNGMxLjgwNywwLDMuMjczLDEuNDY1LDMuMjczLDMuMjczVjIyMi45NjF6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTg3LjQwOSwyNDAuMTE5YzAsMS44MTItMS40NjcsMy4yNzYtMy4yNzQsMy4yNzZINTUuMDY3Yy0xLjgwNywwLTMuMjc0LTEuNDY1LTMuMjc0LTMuMjc2di0wLjQwNw0KCQkJCWMwLTEuODA5LDEuNDY3LTMuMjczLDMuMjc0LTMuMjczaDEyOS4wNjdjMS44MDgsMCwzLjI3NCwxLjQ2NSwzLjI3NCwzLjI3M1YyNDAuMTE5eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI0OC44MTgsMjQwLjExOWMwLDEuODEyLTEuNDY3LDMuMjc2LTMuMjczLDMuMjc2aC0yOS44MjRjLTEuODA4LDAtMy4yNzQtMS40NjUtMy4yNzQtMy4yNzZ2LTAuNDA3DQoJCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMjkuODI0YzEuODA3LDAsMy4yNzMsMS40NjUsMy4yNzMsMy4yNzNWMjQwLjExOXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xODcuNDA5LDI1Ny4yNzdjMCwxLjgxLTEuNDY3LDMuMjc2LTMuMjc0LDMuMjc2SDU1LjA2N2MtMS44MDcsMC0zLjI3NC0xLjQ2Ny0zLjI3NC0zLjI3NnYtMC40MDkNCgkJCQljMC0xLjgwOSwxLjQ2Ny0zLjI3MywzLjI3NC0zLjI3M2gxMjkuMDY3YzEuODA4LDAsMy4yNzQsMS40NjUsMy4yNzQsMy4yNzNWMjU3LjI3N3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yNDguODE4LDI1Ny4yNzdjMCwxLjgxLTEuNDY3LDMuMjc2LTMuMjczLDMuMjc2aC0yOS44MjRjLTEuODA4LDAtMy4yNzQtMS40NjctMy4yNzQtMy4yNzZ2LTAuNDA5DQoJCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMjkuODI0YzEuODA3LDAsMy4yNzMsMS40NjUsMy4yNzMsMy4yNzNWMjU3LjI3N3oiLz4NCgkJPC9nPg0KCTwvZz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTkzLjE1OSw0OC4yOTVjMCw0LjM4NC0zLjU1NSw3LjkzOS03Ljk0Myw3LjkzOUg1OS43MzVjLTQuMzg3LDAtNy45NDEtMy41NTUtNy45NDEtNy45MzlsMCwwDQoJCWMwLTQuMzg4LDMuNTU1LTcuOTQzLDcuOTQxLTcuOTQzaDEyNS40ODFDMTg5LjYwNCw0MC4zNTIsMTkzLjE1OSw0My45MDcsMTkzLjE1OSw0OC4yOTVMMTkzLjE1OSw0OC4yOTV6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTguMjA2LDgxLjgxM2MwLDIuNTc4LTIuMDg4LDQuNjctNC42NjcsNC42N0g1Ni40NjJjLTIuNTc4LDAtNC42NjktMi4wOTItNC42NjktNC42N1Y4MS4yMw0KCQkJYzAtMi41NzgsMi4wOTEtNC42NjYsNC42NjktNC42NjZoMjM3LjA3N2MyLjU3OSwwLDQuNjY3LDIuMDg4LDQuNjY3LDQuNjY2VjgxLjgxM3oiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI1MS40ODksMTAwLjY1N2MwLDIuNTc3LTIuMDksNC42NjktNC42NjcsNC42NjlINTYuNDYxYy0yLjU3OCwwLTQuNjY4LTIuMDkyLTQuNjY4LTQuNjY5di0wLjU4Mw0KCQkJYzAtMi41NzksMi4wOS00LjY2Nyw0LjY2OC00LjY2N2gxOTAuMzYxYzIuNTc3LDAsNC42NjcsMi4wODgsNC42NjcsNC42NjdWMTAwLjY1N3oiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTguMjA2LDI4Ni4xMzZjMCwyLjU3Ni0yLjA4OCw0LjY2OS00LjY2Nyw0LjY2OUg1Ni40NjJjLTIuNTc4LDAtNC42NjktMi4wOTMtNC42NjktNC42Njl2LTAuNTg0DQoJCQljMC0yLjU3NywyLjA5MS00LjY2NSw0LjY2OS00LjY2NWgyMzcuMDc3YzIuNTc5LDAsNC42NjcsMi4wODgsNC42NjcsNC42NjVWMjg2LjEzNnoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI1MS40ODksMzA0Ljk3OWMwLDIuNTc3LTIuMDksNC42Ny00LjY2Nyw0LjY3SDU2LjQ2MWMtMi41NzgsMC00LjY2OC0yLjA5My00LjY2OC00LjY3di0wLjU4Mw0KCQkJYzAtMi41NzksMi4wOS00LjY2OCw0LjY2OC00LjY2OGgxOTAuMzYxYzIuNTc3LDAsNC42NjcsMi4wODksNC42NjcsNC42NjhWMzA0Ljk3OXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				'uagb-how-to-main-wrap'
			) }
		>
			<RichText
				tagName={ headingTag }
				placeholder={ __(
					'How to configure HowTo Schema in UAG?',
					'ultimate-addons-for-gutenberg'
				) }
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
				onChange={ ( value ) =>
					setAttributes( { headingDesc: value } )
				}
				onMerge={ mergeBlocks }
				onSplit={ splitBlock }
				onRemove={ () => onReplace( [] ) }
			/>
				{ imageIconHtml }
			<span className="uagb-howto__time-wrap">
				{ showTotaltime && (
					<RichText
						tagName="h4"
						placeholder={ __(
							'Total Time Needed ( Minutes ):',
							'ultimate-addons-for-gutenberg'
						) }
						value={ timeNeeded }
						className="uagb-howto-timeNeeded-text"
						onChange={ ( value ) =>
							setAttributes( { timeNeeded: value } )
						}
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showTotaltime && (
					<>
						{ timeInYears && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ ' ' }
									{ timeInYears }
								</p>
								<p className="uagb-howto-timeINmin-text">
									{ ' ' }
									{ yearLabel }
								</p>
							</>
						) }
						{ timeInMonths && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ timeInMonths }
								</p>
								<p className="uagb-howto-timeINmin-text">
									{ monthLabel }
								</p>
							</>
						) }
						{ timeInDays && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ timeInDays }
								</p>
								<p className="uagb-howto-timeINmin-text">
									{ dayLabel }
								</p>
							</>
						) }
						{ timeInHours && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ timeInHours }
								</p>
								<p className="uagb-howto-timeINmin-text">
									{ hourLabel }
								</p>
							</>
						) }
						{ minsValue && (
							<>
								<p className="uagb-howto-timeNeeded-value">
									{ minsValue }
								</p>
								<p className="uagb-howto-timeINmin-text">
									{ minsLabel }
								</p>
							</>
						) }
					</>
				) }
			</span>
			<span className="uagb-howto__cost-wrap">
				{ showEstcost && (
					<RichText
						tagName="h4"
						placeholder={ __(
							'Total Cost:',
							'ultimate-addons-for-gutenberg'
						) }
						value={ estCost }
						className="uagb-howto-estcost-text"
						onChange={ ( value ) =>
							setAttributes( { estCost: value } )
						}
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showEstcost && (
					<RichText
						tagName="p"
						placeholder={ __(
							'30',
							'ultimate-addons-for-gutenberg'
						) }
						value={ cost }
						className="uagb-howto-estcost-value"
						onChange={ ( value ) =>
							setAttributes( { cost: value } )
						}
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showEstcost && (
					<RichText
						tagName="p"
						placeholder={ __(
							'USD',
							'ultimate-addons-for-gutenberg'
						) }
						value={ currencyType }
						className="uagb-howto-estcost-type"
						onChange={ ( value ) =>
							setAttributes( { currencyType: value } )
						}
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
			</span>
				{ showTools && (
					<RichText
						tagName="h4"
						placeholder={ __(
							'requirements tools:',
							'ultimate-addons-for-gutenberg'
						) }
						value={ toolsTitle }
						className="uagb-howto-req-tools-text"
						onChange={ ( value ) =>
							setAttributes( { toolsTitle: value } )
						}
						onMerge={ mergeBlocks }
						onSplit={ splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				) }
				{ showTools && (
						<>{ tools.map( ( tool, index ) => {
							return (
										<RichText
											tagName="div"
											placeholder={ __(
												'Requirements Tools:',
												'ultimate-addons-for-gutenberg'
											) }
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
											allowedFormats={ [
												'core/bold',
												'core/italic',
												'core/strikethrough',
											] }
											key={ index }
										/>
							);
						} ) }</>
				) }
				{ showMaterials && (
					<RichText
						tagName="h4"
						placeholder={ __(
							'requirements materials:',
							'ultimate-addons-for-gutenberg'
						) }
						value={ materialTitle }
						className="uagb-howto-req-materials-text"
						onChange={ ( value ) =>
							setAttributes( { materialTitle: value } )
						}
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
											placeholder={ __(
												'Requirements Materials:',
												'ultimate-addons-for-gutenberg'
											) }
											value={
												material.add_required_materials
											}
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
											allowedFormats={ [
												'core/bold',
												'core/italic',
												'core/strikethrough',
											] }
											key={ index }
										/>
							);
						} ) }
					</>
				) }
				<RichText
					tagName="h4"
					placeholder={ __(
						'requirements Steps:',
						'ultimate-addons-for-gutenberg'
					) }
					value={ stepsTitle }
					className="uagb-howto-req-steps-text"
					onChange={ ( value ) =>
						setAttributes( { stepsTitle: value } )
					}
					onMerge={ mergeBlocks }
					onSplit={ splitBlock }
					onRemove={ () => onReplace( [] ) }
				/>
				<InnerBlocks
					template={ getStepAsChild }
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
		</div>
	);
};

export default React.memo( Render );
