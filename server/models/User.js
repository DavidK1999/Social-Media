const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    postCount: {type: Number, default: 0},
    upvotedCount: {type: Number, default: 0},
    upvoteCount: {type: Number, default: 0},
    followersCount: {type: Number, default: 0},
    followingCount: {type: Number, default: 0},
    followers: [String],
    following: [String],
    isFollowing: {type: Boolean, default: false}
})

module.exports = mongoose.model('User', userSchema)