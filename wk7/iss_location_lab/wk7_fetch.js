let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let updateTime = document.querySelector('#last-update')
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

let update = 10000  // 10 seconds
let maxFailedAttempts = 3

let issMarker
let icon = L.icon({
    iconUrl: 'iss-icon.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})

let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts)  // call function once to start

function iss(attempts) {
    if (attempts <= 0) {
        alert('Failed to contact ISS server after 3 attempts.')
        return
    }
    fetch(url).then( res => res.json()
    ).then( issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long
        updateTime.innerHTML = Date()

        if (!issMarker) {
            issMarker = L.marker([lat,long], {icon: icon}).addTo(map)
        } else {
            issMarker.setLatLong([lat,long])
        }
    }).catch( err => {
        attempts = attempts - 1
        console.log('ERROR!', err)
    }).finally( () => {
        setTimeout(iss, update, attempts)
    })
}

