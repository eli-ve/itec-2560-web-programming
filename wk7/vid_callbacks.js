let animals = ['Giraffe', 'Elephant', 'Zebra']

animals.forEach( function (animal) {
    console.log(animal)
})

animals.forEach( (animal, index) => {
    console.log(animal, index)
})

animals.forEach( (animal, index) => console.log(animal, index))

animals.forEach( function (animal) {
    console.log(animal)
})

animals.forEach( (animal) => {
    console.log(animal)
})

animals.forEach( animal => console.log(animal))