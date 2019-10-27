var map;

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), {
            center: new google.maps.LatLng(19.320793, -99.143667),
            zoom: 11.5
        });

    var iconBase =
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var delegacion = [{
            name: "TLP - sin movimiento"
        },
        {
            name: "COY - sin movimiento"
        },
        {
            name: "AOB - sin movimiento"
        },
        {
            name: "CUH - MOV - persona 1 y 2"
        }

    ];

    var features = [

        {
            // tlalpan
            position: new google.maps.LatLng(19.2492593, -99.1273761),
            type: 'parking'
        },
        {
            // Coyoacan
            position: new google.maps.LatLng(19.3297952, -99.1629129),
            type: 'parking'
        },
        {
            // Alvaro obregon
            position: new google.maps.LatLng(19.358721, -99.188757),
            type: 'parking'
        },
        {
            // cuah
            position: new google.maps.LatLng(19.4181947, -99.1596791),
            type: 'parking'
        }

    ];

    // Create markers.

    for (var i = 0; i < features.length; i++) {
        console.log(i);
        console.log(features[i].position);
        console.log("Map: " + map);

        // display_marker(features[i].position, i, map, labels[i % labels.length]);
        display_marker(features[i].position, i, map, delegacion[i % labels.length].name);

    }
}

display_marker = function(pos, i, mapita, name) {
    setTimeout(
        function() {

            var marker = new google.maps.Marker({
                position: pos,
                label: name,
                map: mapita,
            });

        }, i * 3000);

}