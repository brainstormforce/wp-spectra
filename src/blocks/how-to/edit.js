/**
 * BLOCK: How-To Schema
 */

import SchemaNotices from './schema-notices';
import styling from './styling';
import './style.scss';
import { useSelect } from '@wordpress/data';

import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';

import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const HowToComponent = ( props ) => {
	const deviceType = useDeviceType();
	const [ prevState, setPrevState ] = useState( '' );

	const {
		schemaJsonData
	} = useSelect(
		( select ) => {
			let urlChk = '';

			if (
				'undefined' !== props.attributes.mainimage &&
				null !== props.attributes.mainimage &&
				'' !== props.attributes.mainimage
			) {
				urlChk = props.attributes.mainimage.url;
			}
			let toolsData = {};
			let materialsData = {};
			let stepsData = {};
			const jsonData = {
				'@context': 'https://schema.org',
				'@type': 'HowTo',
				'name': props.attributes.headingTitle,
				'description': props.attributes.headingDesc,
				'image': {
					'@type': 'ImageObject',
					'url': urlChk,
					'height': '406',
					'width': '305',
				},
				'totalTime': '',
				'estimatedCost': [],
				'tool': [],
				'supply': [],
				'step': [],
			};

			const y = props.attributes.timeInYears
				? props.attributes.timeInYears
				: 0;
			const m = props.attributes.timeInMonths
				? props.attributes.timeInMonths
				: 0;
			const d = props.attributes.timeInDays
				? props.attributes.timeInDays
				: 0;
			const h = props.attributes.timeInHours
				? props.attributes.timeInHours
				: 0;

			const minutes = props.attributes.timeInMins
				? props.attributes.timeInMins
				: props.attributes.time;

			if ( props.attributes.showTotaltime ) {
				jsonData.totalTime =
					'P' + y + 'Y' + m + 'M' + d + 'DT' + h + 'H' + minutes + 'M';
			}

			if ( props.attributes.showEstcost ) {
				jsonData.estimatedCost = {
					'@type': 'MonetaryAmount',
					'currency': props.attributes.currencyType,
					'value': props.attributes.cost,
				};
			}

			if ( props.attributes.showTools ) {
				props.attributes.tools.forEach( ( tools, key ) => {
					toolsData = {
						'@type': 'HowToTool',
						'name': tools.add_required_tools,
					};
					jsonData.tool[ key ] = toolsData;
				} );
			}

			if ( props.attributes.showMaterials ) {
				props.attributes.materials.forEach( ( materials, key ) => {
					materialsData = {
						'@type': 'HowToSupply',
						'name': materials.add_required_materials,
					};
					jsonData.supply[ key ] = materialsData;
				} );
			}

			const getChildBlocks = select( 'core/block-editor' ).getBlocks(
				props.clientId
			);

			getChildBlocks.forEach( ( steps, key ) => {
				stepsData = {
						'@type': 'HowToStep',
						'url': steps.attributes?.ctaLink || steps.attributes?.url,
						'name': steps.attributes?.infoBoxTitle || steps.attributes?.name,
						'text': steps.attributes?.headingDesc || steps.attributes?.description,
						'image': steps.attributes?.iconImage?.url || steps.attributes?.image?.url
				}
				jsonData.step[key] = stepsData;
			} );

			return {
				schemaJsonData: jsonData,
			};
		},
	);

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( {
			schema: JSON.stringify( schemaJsonData ),
		} );


		setPrevState( schemaJsonData );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if (
			JSON.stringify( schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			props.setAttributes( {
				schema: JSON.stringify( schemaJsonData ),
			} );

			setPrevState( schemaJsonData );
		}
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );


	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// Setup the attributes
	const {
		attributes: {
			currencyType,
			showEstcost,
			showTotaltime,
			tools,
			materials,
			timeNeeded,
			estCost,
			mainimage,
			headingTitle,
			headingDesc,
			time,
			cost,
			timeInMins,
			timeInHours,
			timeInDays,
			timeInMonths,
			timeInYears,
			isPreview,
		},
	} = props;
	const minsValue = timeInMins ? timeInMins : time;

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/how-to.svg`;

	return (
		isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<SchemaNotices
					headingTitle={ headingTitle }
					headingDesc={ headingDesc }
					mainimage={ mainimage }
					showTotaltime={ showTotaltime }
					timeNeeded={ timeNeeded }
					minsValue={ minsValue }
					timeInHours={ timeInHours }
					timeInDays={ timeInDays }
					timeInMonths={ timeInMonths }
					timeInYears={ timeInYears }
					showEstcost={ showEstcost }
					estCost={ estCost }
					cost={ cost }
					currencyType={ currencyType }
					tools={ tools }
					materials={ materials }
					clientId={ props.clientId }
				/>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};

export default HowToComponent;
