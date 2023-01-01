 /*************************
* Add OpenStreetMap map using Leaflet
         ************************/
		const mymap = L.map("mapid").setView([43.356, -80.316], 6);
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(mymap);
		 
		 /*************************
		 
		 
 * Add a GEOJson layer - Catchment Polygons
         *************************/
		// Define the symbology of the catchment polygons
		var myStyle = {
			"color": "#f50515",
			"fillOpacity": 0,
			"weight": 5,
			"opacity": 0.65
		};
		
		//Create a GeoJSON layer
		var geojsonLayer = new L.GeoJSON(geojsonLayer, {
			style: myStyle
		}).addTo(mymap);

		//Request the GeoJson data from GitHub using Ajax
		const Catchment_url = "https://hmcgrath.github.io/data/Small2.geojson";
		$.ajax({
		dataType: "json",
		url: Catchment_url,
		success: function(data) {
				geojsonLayer.addData(data);
		}
		}).error(function() {});