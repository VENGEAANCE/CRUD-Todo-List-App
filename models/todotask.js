const mongoose = require('mongoose')
const todoTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//export our schema as a model to build documents

module.exports = mongoose.model('todoTask', todoTaskSchema, 'tasks')
