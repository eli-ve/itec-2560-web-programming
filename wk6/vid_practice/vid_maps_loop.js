let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9  // 1 = whole world, 20 (max) = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)  // designates div to be used

// gets map tiles from OpenStreetMap, adds to map div
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
];

// Loops through each list-item (dictionary), assigns values to variables, adds to map
// campuses.forEach(function (collegeCampus) {
//     let name = collegeCampus['name']
//     let website = collegeCampus['website']
//     let coordinates = collegeCampus['coordinates']
//     L.marker(coordinates).bindPopup(`${name}<br><a href=${website}>Website</a>`).addTo(map)
// })

// VIDEO EXAMPLE VERSION: (college name is in bold)
campuses.forEach(function(collegeCampus) {
    let markerText = `<b>${collegeCampus.name}</b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// shaded circle around metro area
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,  // in meters
    fillOpacity: 0.2  // 0-1, 1 = opaque
})
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)
