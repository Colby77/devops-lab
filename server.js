const express = require('express')
const path = require('path')
const cors = require('cors')

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'ae86d937d0a54b42b10f3e5e2df74617',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

const app = express()
app.use(express.json())
app.use(cors())




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
    rollbar.info('HTML working')
})

// app.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '/styles.css'))
//     rollbar.info('CSS working')
// })

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '/main.js'))
//     rollbar.info('main.js connected')
// })

app.use(rollbar.errorHandler())



const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
