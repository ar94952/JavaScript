/********************************
 *Anthony Rivera                *
 *anthonyriv2@my.smccd.edu      *
 *CIS 114 OL                    *
 *map.js                        *
 *Final, iTunes                 *
 *12/8/2017                     *
 ********************************/

/* Example file was modified:
   -marker animation
   -custom google map theme
   -custom info window content
   -at least 5 markers
   -marker drops on load
   -works on Chrome, Firefox, and MS Edge, no testing done on Safari.
   -Sample from URL:  https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple */

function initMap() {
  var andersen = {lat: 13.581111, lng: 144.924444};
  var kadena = {lat: 26.355556, lng: 127.7675};
  var phsea = {lat: 20, lng: 130};
  var clark = {lat: 15.185833, lng: 120.559722};
  var yokota = {lat: 35.748611, lng: 139.348611};
  var kunsan = {lat: 35.903611, lng: 126.615833};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: phsea, //Philippine Sea map center
    //added JSON styles from Google Maps
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]

  });
  
  //1st content: Guam 
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Andersen Air Base</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Andersen Air Force Base (AFB) </b>is a <b>US Air Force </b>base ' +
      'located approximately 4 miles northeast of Yigo near Agafo. '+
      'Gumas in the US Territory of <b>Guam</b>.  Along with '+
      '<b>Naval Base Guam</b>, Andersen AFB was placed under '+
      'the command of Joint Region Marianas on October 1, 2009.'+
      'The two bases are about 30 miles apart at opposite ends '+
      'of the island.  Administration offices for Join Region '+
      'Marianas are about half-way in between, at <b>Nimitz Hill</b>. '+
      '</p>'+
      '<p>Attribution: Andersen AB, <a href="https://en.wikipedia.org/wiki/Andersen_Air_Force_Base">'+
      'https://en.wikipedia.org/wiki/Andersen_Air_Force_Base</a> '+
      '(last visited December 8, 2017).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  //2nd content: Okinawa
  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Kadena Air Base</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Kadena Air Base </b>(嘉手納飛行場 <i>Kadena Hikōjō)</i> ' +
      'is a US Air Force base the towns of Kadena, Chatan, '+
      'and the city of <b>Okinawa</b>, Japan.  Over 20,000 '+
      'American servicemembers, family, and Japanese '+
      'employees live or work aboard Kadena Air Base.  '+
      'It is the largest and most active US Air Force base in '+
      'the Far East.  Kadena is home of the 18th Wing, 353d Special '+
      'Operations Group, and a variety of associated units. '+
      '</p>'+
      '<p>Attribution: Kadena AB, <a href="https://en.wikipedia.org/wiki/Kadena_Air_Base">'+
      'https://en.wikipedia.org/wiki/Kadena_Air_Base</a> '+
      '(last visited December 8, 2017).</p>'+
      '</div>'+
      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  
  //3rd content: Central Luzon
  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Clark Air Base</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Clark Air Base </b>is a Philippine Air Force base ' +
      'on Luzon Island in the <b>Philippines</b>, located '+
      '3 miles west of Angeles, about 40 miles northwest '+
      'of <b>Manila</b>.  Previously a US military facility, '+
      'operated by the U.S. Air Force under the aegis of '+
      'Pacific Air Forces.  The base was a stronghold of '+
      'the combined Filipino and American forces during '+
      '<b>World War II </b>and a backbone of logistical '+
      'support during the <b>Vietnam War</b>. '+
      '</p>'+
      '<p>Attribution: Clark AB, <a href="https://en.wikipedia.org/wiki/Clark_Air_Base">'+
      'https://en.wikipedia.org/wiki/Clark_Air_Base</a> '+
      '(last visited December 8, 2017).</p>'+
      '</div>'+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
  
  //4th content: Tokyo
  var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Yokota Air Base</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Yokota Air Base </b>(横田飛行場 <i>Yokota Hikōjō)</i>, ' +
      'is a US Air Force base in the city of <b>Fussa</b>, '+
      'one of 26 cities in the Tama Area, or Western Tokyo. '+
      'The base houses 14,000 personnel. Among its facilities '+
      'are the broadcast center for the <b>American Forces</b> '+
      '<b>Network </b>Tokyo radio service and a detachment of '+
      '<b>Pacific Air Forces </b>Band of the Pacific and the '+
      'headquarters of <b>United States Forces Japan</b>. '+
      '</p>'+
      '<p>Attribution: Yokota AB, <a href="https://en.wikipedia.org/wiki/Yokota_Air_Base">'+
      'https://en.wikipedia.org/wiki/Yokota_Air_Base</a> '+
      '(last visited December 8, 2017).</p>'+
      '</div>'+
      '</div>';

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });
  
  //5th conent: Gunsan, Korea
  var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Kunsan Air Base</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Kunsan Air Base</b> is a US Air Force Base located ' +
      'at <b>Gunsan Airport</b>, which is on the west coast '+
      'of the South Korean peninsula bordered by the <b>Yellow</b> '+
      '<b>Sea</b>.  It is at the town of Gunsan about 150 miles '+
      'south of <b>Seoul</b>.  It was first build in 1938 '+
      'by the Japanese forces occupying Korea.  The US first '+
      'used the base in 1945, but on a very small scale. '+
      '</p>'+
      '<p>Attribution: Kunsan AB, <a href="https://en.wikipedia.org/wiki/Kunsan_Air_Base">'+
      'https://en.wikipedia.org/wiki/Kunsan_Air_Base</a> '+
      '(last visited December 8, 2017).</p>'+
      '</div>'+
      '</div>';

  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });
  //markers
  var marker = new google.maps.Marker({
    position: andersen,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Andersen Air Base'
  });
  var marker2 = new google.maps.Marker({
    position: kadena,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Kadena Air Base'
  });
  var marker3 = new google.maps.Marker({
    position: clark,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Clark Air Base'
  });
  var marker4 = new google.maps.Marker({
    position: yokota,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Yokota Air Base'
  });
  var marker5 = new google.maps.Marker({
    position: kunsan,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Kunsan Air Base'
  });
  //info window opens with clicked
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });
  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });
  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });
  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });
}
