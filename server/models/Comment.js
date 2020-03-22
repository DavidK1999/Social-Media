const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    user: String,
    body: String,
})

module.exports = mongoose.model('Comment', commentSchema);