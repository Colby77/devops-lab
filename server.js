const express = require('express')
const path = require('path')
const cors = require('cors')

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '0274784e39654ff7b99eb0f909d5798c',
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
})



// app.get('/api/students', fakeFunction())

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
