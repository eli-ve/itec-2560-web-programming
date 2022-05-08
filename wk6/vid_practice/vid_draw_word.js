// helpful to add an alert (or BG color/image) to check if JS & HTML are connected
alert('Is this thing on?')

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let input = document.querySelector('#image-text')
input.disabled = true  // stops user typing input before image is loaded

let image = new Image()
image.src = 'wk6_draw_word.jpg'

// page sends out 'load' event when page is fully loaded
image.addEventListener('load', function () {
    context.drawImage(image, 0, 0)  // image placement -- top left of canvas/webpage
    input.disabled = false  // once loaded, user can type in input box
})

// triggered when user types inside of input box
input.addEventListener('input', function () {
    let text = this.value  // 'this' = what triggered the listener
    context.fillStyle = 'Indigo'
    context.font = '38px Courier'
    context.drawImage(image, 0, 0)  // pixels are replaced -- need to 'redraw' image
    context.fillText(text, 30, 100)  // starting point of text
})
