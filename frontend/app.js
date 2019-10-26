// Instantiate a map and platform object:
var platform = new H.service.Platform({
    'apikey': '0T21Z1EDurH99rkxREGzfyFTnvJQdLpl4igVBjFCPpI'
});
// Retrieve the target element for the map:
var targetElement = document.getElementById('mapContainerr');

// Get default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
    document.getElementById('mapContainerr'),
    defaultLayers.vector.normal.map, {
        zoom: 10,
        center: { lat: 52.51, lng: 13.4 }
    });

// Create the parameters for the landmark search request:
var landmarkSearchParameters = {
    searchText: 'ORD'
};

// Define a callback function to process the search response:
function onSuccess(result) {
    var location = result.Response.View[0].Result[0].Place.Locations[0];

    // Create an info bubble at the retrieved location with the
    // location's name as contents:
    ui.addBubble(new H.ui.InfoBubble({
        lat: location.DisplayPosition.Latitude,
        lng: location.DisplayPosition.Longitude
    }, { content: location.Name }));
};


// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the search parameters,
// the callback and an error callback function (called if a
// communication error occurs):
geocoder.search(landmarkSearchParameters, onSuccess, function(e) {
    alert(e);
});