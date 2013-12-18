/* JS Document - /js/script.js
 *
 * coded by REZETTE FLORENCE
 * started at 19/11/2013
 */

/* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */

(function( $ ){

	var gMap,
		gMarker,
		gGeocoder;

	var generateGoogleMap = function(){
		gMap = new google.maps.Map( document.getElementById( "gmap" ), {
			center: new google.maps.LatLng( 50.588835, 5.504441 ),  //Rue de la Jeunesse 56, 4100 Seraing, Belgique
			zoom: 15,
			zoomControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		} );

		gMarker = new google.maps.Marker( {
			position: new google.maps.LatLng( 50.588835, 5.504441 ),
			map:gMap
		} );

	};//generateGoogleMap

	/*var makeImageBigger = function(){
		$(".survol").mouseenter(function(){
			$(this).css({"position":"absolute","width":"400px","height":"300px"});
		});
	};//makeImageBigger*/

	$( function(){
		//call at page loading

		generateGoogleMap();
		

	} );
} ).call( this, jQuery );