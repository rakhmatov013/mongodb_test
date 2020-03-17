const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    phones: {
        type: [Number],
        default: []
    },
    country: {
        type: String
    }
})
mongoose.model('persons', PersonSchema)