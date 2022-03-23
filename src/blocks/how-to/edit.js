/**
 * BLOCK: How-To Schema
 */

import SchemaNotices from './schema-notices';
import styling from './styling';
import './style.scss';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import lazyLoader from '@Controls/lazy-loader';
import React, { lazy, Suspense } from 'react';
import { useState, useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/how-to/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/how-to/render" */ './render' )
);

const HowToComponent = ( props ) => {
	const deviceType = useDeviceType();
	const [ prevState, setPrevState ] = useState( '' );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( {
			schema: JSON.stringify( props.schemaJsonData ),
		} );

		setPrevState( props.schemaJsonData );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if (
			JSON.stringify( props.schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			props.setAttributes( {
				schema: JSON.stringify( props.schemaJsonData ),
			} );

			setPrevState( props.schemaJsonData );
		}
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );


	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

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

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xNDQuMjEsMTg5LjkxNWMwLDQuOTktNC4wNDUsOS4wMzQtOS4wMzUsOS4wMzRINjAuODI3Yy00Ljk4OSwwLTkuMDMzLTQuMDQ0LTkuMDMzLTkuMDM0VjEzNC42OQ0KCQljMC00Ljk4OSw0LjA0NC05LjAzMyw5LjAzMy05LjAzM2g3NC4zNDljNC45ODksMCw5LjAzNCw0LjA0NCw5LjAzNCw5LjAzM0wxNDQuMjEsMTg5LjkxNUwxNDQuMjEsMTg5LjkxNXoiLz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTg3LjQwOSwyMjIuOTYxYzAsMS44MS0xLjQ2NywzLjI3Ni0zLjI3NCwzLjI3Nkg1NS4wNjdjLTEuODA3LDAtMy4yNzQtMS40NjctMy4yNzQtMy4yNzZ2LTAuNDA3DQoJCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMTI5LjA2N2MxLjgwOCwwLDMuMjc0LDEuNDY1LDMuMjc0LDMuMjczVjIyMi45NjF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjQ4LjgxOCwyMjIuOTYxYzAsMS44MS0xLjQ2NywzLjI3Ni0zLjI3MywzLjI3NmgtMjkuODI0Yy0xLjgwOCwwLTMuMjc0LTEuNDY3LTMuMjc0LTMuMjc2di0wLjQwNw0KCQkJCWMwLTEuODA5LDEuNDY3LTMuMjczLDMuMjc0LTMuMjczaDI5LjgyNGMxLjgwNywwLDMuMjczLDEuNDY1LDMuMjczLDMuMjczVjIyMi45NjF6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTg3LjQwOSwyNDAuMTE5YzAsMS44MTItMS40NjcsMy4yNzYtMy4yNzQsMy4yNzZINTUuMDY3Yy0xLjgwNywwLTMuMjc0LTEuNDY1LTMuMjc0LTMuMjc2di0wLjQwNw0KCQkJCWMwLTEuODA5LDEuNDY3LTMuMjczLDMuMjc0LTMuMjczaDEyOS4wNjdjMS44MDgsMCwzLjI3NCwxLjQ2NSwzLjI3NCwzLjI3M1YyNDAuMTE5eiIvPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI0OC44MTgsMjQwLjExOWMwLDEuODEyLTEuNDY3LDMuMjc2LTMuMjczLDMuMjc2aC0yOS44MjRjLTEuODA4LDAtMy4yNzQtMS40NjUtMy4yNzQtMy4yNzZ2LTAuNDA3DQoJCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMjkuODI0YzEuODA3LDAsMy4yNzMsMS40NjUsMy4yNzMsMy4yNzNWMjQwLjExOXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xODcuNDA5LDI1Ny4yNzdjMCwxLjgxLTEuNDY3LDMuMjc2LTMuMjc0LDMuMjc2SDU1LjA2N2MtMS44MDcsMC0zLjI3NC0xLjQ2Ny0zLjI3NC0zLjI3NnYtMC40MDkNCgkJCQljMC0xLjgwOSwxLjQ2Ny0zLjI3MywzLjI3NC0zLjI3M2gxMjkuMDY3YzEuODA4LDAsMy4yNzQsMS40NjUsMy4yNzQsMy4yNzNWMjU3LjI3N3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yNDguODE4LDI1Ny4yNzdjMCwxLjgxLTEuNDY3LDMuMjc2LTMuMjczLDMuMjc2aC0yOS44MjRjLTEuODA4LDAtMy4yNzQtMS40NjctMy4yNzQtMy4yNzZ2LTAuNDA5DQoJCQkJYzAtMS44MDksMS40NjctMy4yNzMsMy4yNzQtMy4yNzNoMjkuODI0YzEuODA3LDAsMy4yNzMsMS40NjUsMy4yNzMsMy4yNzNWMjU3LjI3N3oiLz4NCgkJPC9nPg0KCTwvZz4NCgk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMTkzLjE1OSw0OC4yOTVjMCw0LjM4NC0zLjU1NSw3LjkzOS03Ljk0Myw3LjkzOUg1OS43MzVjLTQuMzg3LDAtNy45NDEtMy41NTUtNy45NDEtNy45MzlsMCwwDQoJCWMwLTQuMzg4LDMuNTU1LTcuOTQzLDcuOTQxLTcuOTQzaDEyNS40ODFDMTg5LjYwNCw0MC4zNTIsMTkzLjE1OSw0My45MDcsMTkzLjE1OSw0OC4yOTVMMTkzLjE1OSw0OC4yOTV6Ii8+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTguMjA2LDgxLjgxM2MwLDIuNTc4LTIuMDg4LDQuNjctNC42NjcsNC42N0g1Ni40NjJjLTIuNTc4LDAtNC42NjktMi4wOTItNC42NjktNC42N1Y4MS4yMw0KCQkJYzAtMi41NzgsMi4wOTEtNC42NjYsNC42NjktNC42NjZoMjM3LjA3N2MyLjU3OSwwLDQuNjY3LDIuMDg4LDQuNjY3LDQuNjY2VjgxLjgxM3oiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI1MS40ODksMTAwLjY1N2MwLDIuNTc3LTIuMDksNC42NjktNC42NjcsNC42NjlINTYuNDYxYy0yLjU3OCwwLTQuNjY4LTIuMDkyLTQuNjY4LTQuNjY5di0wLjU4Mw0KCQkJYzAtMi41NzksMi4wOS00LjY2Nyw0LjY2OC00LjY2N2gxOTAuMzYxYzIuNTc3LDAsNC42NjcsMi4wODgsNC42NjcsNC42NjdWMTAwLjY1N3oiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0yOTguMjA2LDI4Ni4xMzZjMCwyLjU3Ni0yLjA4OCw0LjY2OS00LjY2Nyw0LjY2OUg1Ni40NjJjLTIuNTc4LDAtNC42NjktMi4wOTMtNC42NjktNC42Njl2LTAuNTg0DQoJCQljMC0yLjU3NywyLjA5MS00LjY2NSw0LjY2OS00LjY2NWgyMzcuMDc3YzIuNTc5LDAsNC42NjcsMi4wODgsNC42NjcsNC42NjVWMjg2LjEzNnoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTI1MS40ODksMzA0Ljk3OWMwLDIuNTc3LTIuMDksNC42Ny00LjY2Nyw0LjY3SDU2LjQ2MWMtMi41NzgsMC00LjY2OC0yLjA5My00LjY2OC00LjY3di0wLjU4Mw0KCQkJYzAtMi41NzksMi4wOS00LjY2OCw0LjY2OC00LjY2OGgxOTAuMzYxYzIuNTc3LDAsNC42NjcsMi4wODksNC42NjcsNC42NjhWMzA0Ljk3OXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';

	return (
		<Suspense fallback={ lazyLoader() }>
			{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
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
			}
		</Suspense>
	);
};

export default compose(
	withSelect( ( select, ownProps ) => {
		let urlChk = '';

		if (
			'undefined' !== ownProps.attributes.mainimage &&
			null !== ownProps.attributes.mainimage &&
			'' !== ownProps.attributes.mainimage
		) {
			urlChk = ownProps.attributes.mainimage.url;
		}
		let toolsData = {};
		let materialsData = {};
		let stepsData = {};
		const jsonData = {
			'@context': 'https://schema.org',
			'@type': 'HowTo',
			'name': ownProps.attributes.headingTitle,
			'description': ownProps.attributes.headingDesc,
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

		const y = ownProps.attributes.timeInYears
			? ownProps.attributes.timeInYears
			: 0;
		const m = ownProps.attributes.timeInMonths
			? ownProps.attributes.timeInMonths
			: 0;
		const d = ownProps.attributes.timeInDays
			? ownProps.attributes.timeInDays
			: 0;
		const h = ownProps.attributes.timeInHours
			? ownProps.attributes.timeInHours
			: 0;

		const minutes = ownProps.attributes.timeInMins
			? ownProps.attributes.timeInMins
			: ownProps.attributes.time;

		if ( ownProps.attributes.showTotaltime ) {
			jsonData.totalTime =
				'P' + y + 'Y' + m + 'M' + d + 'DT' + h + 'H' + minutes + 'M';
		}

		if ( ownProps.attributes.showEstcost ) {
			jsonData.estimatedCost = {
				'@type': 'MonetaryAmount',
				'currency': ownProps.attributes.currencyType,
				'value': ownProps.attributes.cost,
			};
		}

		if ( ownProps.attributes.showTools ) {
			ownProps.attributes.tools.forEach( ( tools, key ) => {
				toolsData = {
					'@type': 'HowToTool',
					'name': tools.add_required_tools,
				};
				jsonData.tool[ key ] = toolsData;
			} );
		}

		if ( ownProps.attributes.showMaterials ) {
			ownProps.attributes.materials.forEach( ( materials, key ) => {
				materialsData = {
					'@type': 'HowToSupply',
					'name': materials.add_required_materials,
				};
				jsonData.supply[ key ] = materialsData;
			} );
		}

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			ownProps.clientId
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
	} )
)( HowToComponent );
