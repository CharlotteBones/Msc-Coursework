const locations = [
  { ID: 'mXfkjrFw', lat: 51.5090562, lng: -0.1304571 },    //  Vehicle ID: mXfkjrFw	 lat: 51.5090562	lng: -0.1304571	Location: ??? (A surprise)
  { ID: 'nZXB8ZHz', lat: 51.5080898, lng: -0.07620836346036469 },    //  Vehicle ID: nZXB8ZHz	lat: 51.5080898	 lng: -0.07620836346036469	Location: Tower of London
  { ID: 'Tkwu74WC', lat: 51.5425649, lng: -0.00693080308689057 },    //  Vehicle ID: Tkwu74WC	lat: 51.5425649	 lng: -0.00693080308689057	Location: Westfield Stratford City
  { ID: '5KWpnAJN', lat: 51.519821199999996, lng: -0.09397523701275332 },    //  Vehicle ID: 5KWpnAJN	lat: 51.519821199999996	 lng: -0.09397523701275332	Location: The Barbican Centre
  { ID: 'uf5ZrXYw', lat: 51.5133798, lng: -0.0889552 },    //  Vehicle ID: uf5ZrXYw	lat: 51.5133798	 lng: -0.0889552	Location: The Bank of England
  { ID: 'VMerzMH8', lat: 51.5253378, lng: -0.033435 },    //  Vehicle ID: VMerzMH8	lat: 51.5253378	 lng: -0.033435	Location: Mile End Station
  { ID: '8efT67Xd', lat: 51.54458615, lng: -0.0161905117168855 }    //  Vehicle ID: 8efT67Xd	lat: 51.54458615	 lng: -0.0161905117168855	Location: Queen Elizabeth Olympic Park
];

// Creating the googleapi script tag and inserting it into the HTML

let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=<API_KEY>&callback=initMap';
script.async = true;
document.head.appendChild(script);

// Function to build the map centered on Whitechapel Station with style array
window.initMap = function() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5195786, lng: -0.0606907 }, zoom: 13,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#555555"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f3f3f3"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 50
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#46bcec"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
          "color": "#00b7bd"
          }
        ]
      }
    ]
  });

  /* Make markers, label them with 
  Car's ID and store them in an array */
  const markers = [];

  locations.forEach( (location) => {
    markers.push(new google.maps.Marker({
      position: location,
      map,
      title: location.ID,
      icon: '../images/car.png'
    })
    )
  });


  /* Ticker function uses the Array index of 
  markers to find the right marker to update */

  setInterval( () => {
    fetch("http://localhost:8080/api/tick", {
      method: 'PUT',
      header: ('Content-Type', 'application/json'),
    }).then((response) => {
      response.text().then((data) => {
        let cars = (JSON.parse(data));
        cars.forEach( (item) => {
          markers.forEach( (marker) => {
            if (marker.title === item.id) {
              marker.setPosition( new google.maps.LatLng(item.currentPosition.x, item.currentPosition.y));
            }
          });
        });
      });
    });
  }, 1000);
};
