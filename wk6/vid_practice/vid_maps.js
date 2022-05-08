let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9  // 1 = whole world, 20 (max) = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)  // designates div to be used

// gets map tiles from OpenStreetMap, adds to map div
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// COLLEGE COORDINATES AND MARKERS
// marker variables/references not necessary for *this* program, but might be useful in future programs
let mctcCoordinates = [44.972, -93.284]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

let stPaulCoordinates = [44.948, -93.109]
let stPaulMarker = L.marker(stPaulCoordinates)
    .bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)

let normandaleCoordinates = [44.829, -93.331]
let normandaleMarker = L.marker(normandaleCoordinates)
    .bindPopup('Normandale Community College<br><a href="https://normandale.edu">Website</a>')
    .addTo(map)

let nhccCoordinates = [45.105,-93.376]
let nhccMarker = L.marker(nhccCoordinates)
    .bindPopup('North Hennepin Community College<br><a href="https://nhcc.edu">Website</a>')
    .addTo(map)

let centuryCoordinates = [45.043,-92.986]
let centuryMarker = L.marker(centuryCoordinates)
    .bindPopup('Century College<br><a href="https://www.century.edu/">Website</a>')
    .addTo(map)

// SHADED CIRCLE AROUND METRO AREA
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'green',
        radius: 30000,  // in meters
        fillOpacity: 0.2  // 0-1, 1 = opaque
    })
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)
