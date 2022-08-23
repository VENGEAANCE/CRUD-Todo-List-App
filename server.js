//MODULES
const express = require("express")
const app = express()
const PORT = 8000
const mongoose = require("mongoose")
const TodoTask = require('./models/todotask')
const cors = require('cors')
const connectDB = require("./config/database")
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')
require("dotenv").config({ path: './config/.env' })

connectDB()

//set middleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`))