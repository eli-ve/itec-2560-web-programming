/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
*/

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

let iss_latitude = iss_location.iss_position.latitude
let iss_longitude = iss_location.iss_position.longitude

console.log(`Current ISS latitude: ${iss_latitude}`)
console.log(`Current ISS longitude: ${iss_longitude}\n`)

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
*/

let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

rates.CHF = 1.1787

let euros_to_convert = 100
let euros_to_aud = euros_to_convert * rates.AUD
console.log(`Euros to AUD: 100 = ${euros_to_aud.toFixed(2)}`)

let ratesList = Object.values(rates)

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
let maxRate = ratesList.reduce(function(a, b) {
    return Math.max(a, b)
}, -Infinity)

// Reference: https://stackoverflow.com/a/28191966
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}

let maxCurrency = getKeyByValue(rates, maxRate)
console.log(`The highest exchange rate is ${maxCurrency} at ${maxRate}\n`)

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
*/

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

cats_and_owners.forEach(function (entry, i) {
    let owner = cats_and_owners[i].name
    let cat = cats_and_owners[i].cat
    if (owner === 'Gary Oldman') {
        console.log(`Gary Oldman's cat is named ${cat}.\n`)
    }
})

cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
cats_and_owners.forEach(function (entry, i) {
    let owner = cats_and_owners[i].name
    let cat = cats_and_owners[i].cat
    console.log(`${owner}'s cat is named ${cat}.`)
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
*/

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// Prints the full name of the Literature Nobel laureate.

let prizes = nobel_prize_winners_2017.prizes
prizes.forEach(function (prize, i) {
    let category = prizes[i].category
    if (category === 'literature') {
        let laureates = prizes[i].laureates
        laureates.forEach(function (winner,i) {
            let firstName = laureates[i].firstname
            let lastName = laureates[i].surname
            let fullName = `${firstName} ${lastName}`
            console.log(`\n2017 Nobel laureate in Literature: ${fullName}\n`)
        })
    }
})

// Prints the ids of each of the Physics Nobel laureates

prizes.forEach(function (prize, i) {
    let category = prizes[i].category
    if (category === 'physics') {
        let laureates = prizes[i].laureates
        laureates.forEach(function (winner,i) {
            let id = laureates[i].id
            console.log(id)
        })
        console.log()
    }
})

// Prints the names of all prize categories

console.log(`2017 Nobel Prize categories:`)
prizes.forEach(function (prize, i) {
    let category = prizes[i].category
    console.log(category)
})

// Prints the total number of prize categories

let totalCategories = 0
prizes.forEach(function (prize, i) {
    totalCategories += 1
})

console.log(`\nThere are a total of ${totalCategories} Nobel prize categories.`)

// Counts the total number of laureates from 2017

let totalWinners = 0
prizes.forEach(function (prize, i) {
    let laureates = prizes[i].laureates
    laureates.forEach(function (winner,i) {
        totalWinners += 1
    })
})

console.log(`There were a total of ${totalWinners} Nobel laureates in 2017.`)
