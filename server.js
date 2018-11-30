const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const gameRoutes = require('./src/routes/game.routes')
// const ApiError = require('./src/models/apierror.model.js')
var app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

const port = process.env.PORT || 3000



//routing voor /api
app.use('/api', gameRoutes)

//niet bestaande routes
app.use('*', (req, res, next) => {
    // next(new ApiError);
})

//error handeling
app.use('*', (err, req, res, next) => {
    console.log(dir);
    res.status(err.code).json({error: err}).end();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// for testing purpose
module.exports = app
