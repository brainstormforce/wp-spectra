const skins = {
	"silver" : "[{\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f5f5\"}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#616161\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#f5f5f5\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#bdbdbd\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#eeeeee\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e5e5e5\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dadada\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#616161\"}]},{\"featureType\":\"road.local\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e5e5e5\"}]},{\"featureType\":\"transit.station\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#eeeeee\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#c9c9c9\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]}]",

	"retro" : "[{\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ebe3cd\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#523735\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#f5f1e6\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#c9b2a6\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#dcd2be\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#ae9e90\"}]},{\"featureType\":\"landscape.natural\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dfd2ae\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dfd2ae\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#93817c\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#a5b076\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#447530\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f1e6\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#fdfcf8\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f8c967\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#e9bc62\"}]},{\"featureType\":\"road.highway.controlled_access\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e98d58\"}]},{\"featureType\":\"road.highway.controlled_access\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#db8555\"}]},{\"featureType\":\"road.local\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#806b63\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dfd2ae\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#8f7d77\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#ebe3cd\"}]},{\"featureType\":\"transit.station\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dfd2ae\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#b9d3c2\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#92998d\"}]}]",

	"dark" : "[{\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#212121\"}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#212121\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"administrative.country\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]},{\"featureType\":\"administrative.land_parcel\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.locality\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#bdbdbd\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#181818\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#616161\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#1b1b1b\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#2c2c2c\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#8a8a8a\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#373737\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#3c3c3c\"}]},{\"featureType\":\"road.highway.controlled_access\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#4e4e4e\"}]},{\"featureType\":\"road.local\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#616161\"}]},{\"featureType\":\"transit\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#3d3d3d\"}]}]",

	"night" : "[{\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#242f3e\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#746855\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#242f3e\"}]},{\"featureType\":\"administrative.locality\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#d59563\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#d59563\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#263c3f\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#6b9a76\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#38414e\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#212a37\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9ca5b3\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#746855\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#1f2835\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#f3d19c\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#2f3948\"}]},{\"featureType\":\"transit.station\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#d59563\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#17263c\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#515c6d\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#17263c\"}]}]",

	"aubergine" : "[{\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#1d2c4d\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#8ec3b9\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#1a3646\"}]},{\"featureType\":\"administrative.country\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#4b6878\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#64779e\"}]},{\"featureType\":\"administrative.province\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#4b6878\"}]},{\"featureType\":\"landscape.man_made\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#334e87\"}]},{\"featureType\":\"landscape.natural\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#023e58\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#283d6a\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#6f9ba5\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#1d2c4d\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#023e58\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#3C7680\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#304a7d\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#98a5be\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#1d2c4d\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#2c6675\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#255763\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#b0d5ce\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#023e58\"}]},{\"featureType\":\"transit\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#98a5be\"}]},{\"featureType\":\"transit\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#1d2c4d\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#283d6a\"}]},{\"featureType\":\"transit.station\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#3a4762\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#0e1626\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#4e6d70\"}]}]",

	"magnesium" : "[{\"featureType\":\"all\",\"stylers\":[{\"saturation\":0},{\"hue\":\"#e7ecf0\"}]},{\"featureType\":\"road\",\"stylers\":[{\"saturation\":-70}]},{\"featureType\":\"transit\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"stylers\":[{\"visibility\":\"simplified\"},{\"saturation\":-60}]}]",

	"classic_blue" : "[{\"featureType\":\"all\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"administrative.country\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"administrative.country\",\"elementType\":\"labels.text\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"administrative.province\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"administrative.province\",\"elementType\":\"labels.text\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"administrative.locality\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"administrative.neighborhood\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"hue\":\"#FFBB00\"},{\"saturation\":43.400000000000006},{\"lightness\":37.599999999999994},{\"gamma\":1}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"saturation\":\"-40\"},{\"lightness\":\"36\"}]},{\"featureType\":\"landscape.man_made\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape.natural\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"saturation\":\"-77\"},{\"lightness\":\"28\"}]},{\"featureType\":\"landscape.natural\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"elementType\":\"all\",\"stylers\":[{\"hue\":\"#00FF6A\"},{\"saturation\":-1.0989010989011234},{\"lightness\":11.200000000000017},{\"gamma\":1}]},{\"featureType\":\"poi\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.attraction\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"saturation\":\"-24\"},{\"lightness\":\"61\"}]},{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"hue\":\"#FFC200\"},{\"saturation\":-61.8},{\"lightness\":45.599999999999994},{\"gamma\":1}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway.controlled_access\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"all\",\"stylers\":[{\"hue\":\"#FF0300\"},{\"saturation\":-100},{\"lightness\":51.19999999999999},{\"gamma\":1}]},{\"featureType\":\"road.local\",\"elementType\":\"all\",\"stylers\":[{\"hue\":\"#ff0300\"},{\"saturation\":-100},{\"lightness\":52},{\"gamma\":1}]},{\"featureType\":\"road.local\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit.station\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"hue\":\"#0078FF\"},{\"saturation\":-13.200000000000003},{\"lightness\":2.4000000000000057},{\"gamma\":1}]},{\"featureType\":\"water\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]}]",

	"aqua" : "[{\"featureType\":\"administrative\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#444444\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#f2f2f2\"}]},{\"featureType\":\"poi\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"lightness\":45}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#46bcec\"},{\"visibility\":\"on\"}]}]",

	"earth" : "[{\"featureType\":\"landscape.man_made\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f7f1df\"}]},{\"featureType\":\"landscape.natural\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#d0e3b4\"}]},{\"featureType\":\"landscape.natural.terrain\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.business\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.medical\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#fbd3da\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#bde6ab\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffe15f\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#efd151\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"black\"}]},{\"featureType\":\"transit.station.airport\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#cfb2db\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#a2daf2\"}]}]"
}

function uagb_google_map_init( attributes, id ) {

	if ( ! document.body.classList.contains( "gutenberg-editor-page" ) ) {
		attributes = JSON.parse( attributes )
	}


	const {
		marker_count,
		markers,
		mapType,
		mapSkin,
		fullscreenControl,
		zoom,
		gestureHandling,
		streetViewControl,
		mapTypeControl,
		zoomControl,
		cluster
	} = attributes

	var map_style = ""
	var marker_cluster = []
	var latlng = new google.maps.LatLng( markers[0]["lat"], markers[0]["lon"] )
	var id = document.getElementById( "uagb-google-map-" + id )
	var infowindow = new google.maps.InfoWindow()

	var map_options = {
		zoom: zoom,
		mapTypeId: mapType,
		mapTypeControl: mapTypeControl,
		streetViewControl: streetViewControl,
		zoomControl: zoomControl,
		fullscreenControl: fullscreenControl,
		gestureHandling: gestureHandling,
		center: latlng
	}

	if ( "undefined" != typeof skins[mapSkin] ) {
		map_style = JSON.parse( skins[mapSkin] )
	}

	map_options["styles"] = map_style

	var map = new google.maps.Map( id, map_options )

	for ( var i = 0; i < marker_count; i++ ) {

		var current_latlng = new google.maps.LatLng( markers[i]["lat"], markers[i]["lon"] )

		var marker = new google.maps.Marker( {
			position: current_latlng,
			map: map,
			title: markers[i]["lat"]["title"]
		})

		marker_cluster[i] = marker

		// Adding close event for info window
		google.maps.event.addListener( map, "click", ( function ( infowindow ) {

			return function() {
				infowindow.close()
			}
		})( infowindow ))

		if ( "click" == markers[0]["infoTrigger"] ) {

			google.maps.event.addListener( marker, "click", ( function( marker, i ) {
				return function() {
					var infowindow = new google.maps.InfoWindow()
					var content_string = "<div class=\"uagb-infowindow-content\"><div class=\"uagb-infowindow-title\">" + markers[i]["title"] + "</div>"

					if ( "" != markers[i]["desc"].length ) {
						content_string += "<div class=\"uagb-infowindow-description\">" + markers[i]["desc"] + "</div>"
					}

					content_string += "</div>"

					infowindow.setContent( content_string )

					/*if ( '' != info_window_size ) {
						var width_val = parseInt( info_window_size );
						var InfoWindowOptions = { maxWidth : width_val };
						infowindow.setOptions( { options:InfoWindowOptions } );
					}*/

					infowindow.open( map, marker )
				}
			})( marker, i ))
		}

		if ( "load" == markers[0]["infoTrigger"] ) {

			var content_string = "<div class=\"uagb-infowindow-content\"><div class=\"uagb-infowindow-title\">" + markers[i]["title"] + "</div>"

			if ( "" != markers[i]["desc"].length ) {
				content_string += "<div class=\"uagb-infowindow-description\">" + markers[i]["desc"] + "</div>"
			}
			content_string += "</div>"

			/*if ( '' != info_window_size  ) {
				var width_val = parseInt( info_window_size );
				var infowindow = new google.maps.InfoWindow( {
					content: content_string,
					maxWidth: width_val
				} );
			} else {*/
			var infowindow = new google.maps.InfoWindow( {
				content: content_string,
			} )
			//}
		}
	}

	var cluster_listener = google.maps.event.addListener( map, "idle", function () {

		if( 0 < marker_cluster.length && cluster ) {

			var markerCluster = new MarkerClusterer(
				map,
				marker_cluster,
				{
					imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
				}
			)
		}
		google.maps.event.removeListener( cluster_listener )
	})

}
