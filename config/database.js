const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.DB_STRING
        )
        console.log(`MonogoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB 
