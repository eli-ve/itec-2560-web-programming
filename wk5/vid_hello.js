console.log('Hello World!')

// IMPORTANT: JS uses falsy values:
// undefined, null, empty lists/objects, 0, false
// Using == will return true for 0 == '' (etc.)
// BUT undefined == 0 returns false
// using === will always return false (no coercion allowed)

// Type coercion helpful when validating a form (since input
// is saved as strings), but generally use === otherwise

// Three ways to create variables
let color = 'blue'
// var size = 'medium'  // not recommended -- scope is too wide
const language = 'Javascript'  // can ('t??) change this value
// language = 'C#'  // this is an error

// No difference between int, float
let quantity = 5
let distance = 4.5

// Single or double quotes work, but don't mix
let text = 'Hello World'
let message = "Hi Programmers"

// Can mix string and number types without modifying
console.log('There are ' + quantity + ' programmers')

let todayTemp = 75
// Either use backslash to escape single quote, or use double quotes
console.log('Today\'s temperature is ' + todayTemp + 'F')
console.log("Today's temperature is " + todayTemp + "F")

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC + 'C')
// To limit decimal places (webstorm will show name of parameter)
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')

// Better to keep functions together generally
function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))
let message2 = shout('hello web programmers')
console.log(message2)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) {  // undefined values are considered to be false
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}

let todayTemp2 = 75
todayCelsius = f_to_c(todayTemp2)
todayCelsius2 = f_to_c(todayTemp2, 2)
console.log(todayCelsius)
console.log(todayCelsius2)

function isMinnesotaZip(code) {
    // 55001 - 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55403))
// JS uses type coercion - if data can be used in parameters, it's converted
console.log(isMinnesotaZip('55403'))

function isGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
    // alternately:
    // return gpa >= 0 && gpa <= 4
}

console.log(isGPA(3.5))
console.log(isGPA(6))
console.log(isGPA(-2))

function cityState(city, state) {
    // let cityStateFormatted = city + ', ' + state.toUpperCase()
    // template string - uses backticks, not apostrophes
    let cityStateFormatted = `${city}, ${state.toUpperCase()}`
    return cityStateFormatted
}

console.log(cityState('Minneapolis', 'mn'))

// JS array more like a Python list, not a Java array
let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

// Usual loop format
birds.forEach(function(bird) {
    // repeats once for each object in array
    // will be called for each object -- needs to be passed object
    console.log(bird.toUpperCase())
})

// with index number:
birds.forEach(function(bird, index) {
    console.log(index, bird.toLowerCase())
})

// Traditional (counting) for loop
for (let x = 0 ; x < birds.length ; x++) {
    let bird = birds[x]
    console.log(x, bird)
}

// while loops exist in JS, but very uncommon
let maxVal = 100
let number = 1
while (number < maxVal) {
    number *= 2
    console.log('number = ' + number)
}

let text2 = 'The classes are itec 1150, and itec 1250.'

// only replaces first instance
let replaced = text2.replace('itec', 'ITEC')
console.log(replaced)

// uses a regular expression (between /'s), g means global
let replacedAll = text2.replaceAll(/itec/g, 'ITEC')
console.log(replacedAll)

// using replace vs. replaceAll - more complicated actions
let text3 = 'The classes are 1150, 1250, and 2560'
let replaceRegex = text3.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)
