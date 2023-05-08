let express = require('express')
let routes = require('./routes/routes.js')
let path = require('path')

let app = express()

// app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))
let vueApp = express.static(path.join(__dirname, 'hello-vue', 'dist'))
app.use('/', vueApp)

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})

