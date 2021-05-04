/**
 * BLOCK: How-To Schema
 */

import SchemaNotices from "./schema-notices"
import styling from "./styling"
import "./style.scss"
import { __ } from '@wordpress/i18n';
import howToSchemaSettings from "./settings";
import renderHowToSchema from "./render";
import React, { useEffect } from 'react';

const { compose } = wp.compose
const { withSelect } = wp.data;

let prevState;

const howToComponent = props => {

	useEffect( () => { // Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } )

		props.setAttributes({ schema: JSON.stringify(props.schemaJsonData) });

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-how-to-schema-style-" + props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

		prevState = props.schemaJsonData;

	}, [] );

	useEffect( () => { // Replacement for componentDidUpdate.

		if (
		JSON.stringify( props.schemaJsonData ) !==
		JSON.stringify( prevState )
		) {
			props.setAttributes({
				schema: JSON.stringify(props.schemaJsonData)
			});

			prevState = props.schemaJsonData;
		}
		var element = document.getElementById( "uagb-how-to-schema-style-" + props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( props )
		}
	}, [ props ] );

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
		},
	} = props
	
	let minsValue = (timeInMins) ? timeInMins : time;
	
	return (
		<>
			<SchemaNotices
				headingTitle = { headingTitle }
				headingDesc = { headingDesc }
				mainimage = { mainimage }
				showTotaltime = { showTotaltime }
				timeNeeded = { timeNeeded }					
				minsValue = {minsValue}
				timeInHours = {timeInHours}
				timeInDays = {timeInDays}
				timeInMonths = {timeInMonths}
				timeInYears = {timeInYears}
				showEstcost = { showEstcost }
				estCost = { estCost }
				cost = { cost }
				currencyType = { currencyType }
				tools = { tools }
				materials = { materials }
				clientId = { props.clientId }
			/>
			{ howToSchemaSettings( props ) }
			{ renderHowToSchema( props ) }				
		</>
	)
}

export default compose(
	withSelect( ( select, ownProps ) => {

		const { __experimentalGetPreviewDeviceType = null } = select( 'core/edit-post' );
		let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

		let url_chk = ''
		let title = ''

		if( "undefined" !== ownProps.attributes.mainimage  && null !== ownProps.attributes.mainimage && "" !== ownProps.attributes.mainimage ){
			url_chk = ownProps.attributes.mainimage.url
			title = ownProps.attributes.mainimage.title
		}

		var tools_data = {}
		var materials_data = {}
		var steps_data = {}
		var json_data = {
			"@context": "https://schema.org",
			"@type": "HowTo",
			"name": ownProps.attributes.headingTitle,
			"description": ownProps.attributes.headingDesc,
			"image": {
					"@type": "ImageObject",
					"url": url_chk,
					"height": "406",
					"width": "305"
				},
			"totalTime": "",
			"estimatedCost": [],
			"tool": [],
			"supply": [],
			"step": []
		}
		
		var y  = ( ownProps.attributes.timeInYears ) ? ( ownProps.attributes.timeInYears ) : 0;
		var m  = ( ownProps.attributes.timeInMonths ) ? ( ownProps.attributes.timeInMonths  ) : 0;
		var d  = ( ownProps.attributes.timeInDays ) ? (  ownProps.attributes.timeInDays ) : 0;
		var h  = ( ownProps.attributes.timeInHours ) ? ( ownProps.attributes.timeInHours ) : 0;

		var minutes = (ownProps.attributes.timeInMins) ? ownProps.attributes.timeInMins : ownProps.attributes.time;

		if ( ownProps.attributes.showTotaltime ) {
			json_data.totalTime = "P"+y+"Y"+m+"M"+d+"DT"+h+"H"+minutes+"M";
		}

		if ( ownProps.attributes.showEstcost ) {
			json_data.estimatedCost = {
				"@type": "MonetaryAmount",
				"currency":ownProps.attributes.currencyType,
				"value":ownProps.attributes.cost,
			};
		}

		if ( ownProps.attributes.showTools ) {
			ownProps.attributes.tools.forEach((tools, key) => {
				tools_data = {	
						"@type": "HowToTool",
						"name": tools.add_required_tools
				}
				json_data["tool"][key] = tools_data;
			});
		}
		
		if ( ownProps.attributes.showMaterials ) {
			ownProps.attributes.materials.forEach((materials, key) => {
				materials_data = {	
						"@type": "HowToSupply",
						"name": materials.add_required_materials
				}
				json_data["supply"][key] = materials_data;
			});
		}

		let getChildBlocks = select('core/block-editor').getBlocks( ownProps.clientId );

		getChildBlocks.forEach((steps, key) => {
			steps_data = {	
					"@type": "HowToStep",
					"url": steps.attributes.ctaLink,
					"name": steps.attributes.infoBoxTitle,
					"text": steps.attributes.headingDesc,
					"image": steps.attributes.iconImage.url
			}
			json_data["step"][key] = steps_data;
		});	
			
		return {
			schemaJsonData: json_data,
			deviceType: deviceType,
		};
	} )
) ( howToComponent )