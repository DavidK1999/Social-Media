const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    body: {type: String, required: true},
    tags: [String],
    user_object: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    user_username: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    upvotes: {type: [String]}
})

module.exports = mongoose.model('Card', cardSchema);