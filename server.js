const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '093c6fd6a12844cfa6011897d26a8fd1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.listen(4000, () => console.log(`server running on 4000`))
