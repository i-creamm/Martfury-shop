const express = require('express')
const path = require('path')
const app = express()
const rootRouter = require('./routers')
const {sequelize} = require('./models/index')
const cors = require('cors')

app.use(cors())

//convert to Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.use('/api', rootRouter)

//static file
const publicPathDirectory = path.join(__dirname, './public')
app.use('/public',express.static(publicPathDirectory))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  const statusCode = err.status || 500
  
  return res.status(statusCode).json({
    status : 'Error',
    code: statusCode,
    message: err.message || 'Internal Server Error'
  })
});

//running localhost
app.listen(8080, async () => {
    console.log(`App running on http://localhost:8080`)
    try {
        await sequelize.authenticate();
        console.log("Connection successfully")
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
})