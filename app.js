require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const port = 5000

const mainRouter = require("./routes/main")
const notFound = require('./middlewares/not-found')
const errorMiddlware = require('./middlewares/error-handler')

app.use(express.json())
app.use('/api/v1',mainRouter)

app.use(notFound)
app.use(errorMiddlware)


const start = async () => {
    try {
        app.listen(port, ()=>{
            console.log(`The Server is listening on port ${port} >>>>>>.....`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()