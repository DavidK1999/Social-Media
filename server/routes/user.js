const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')
const User = require('../models/User')


router.get('/currentUser', verify, async (req,res) => {
    const currentUser = await User.findById(req.user)
    res.json(currentUser)
})

router.get('/profile/:username', verify, async (req, res) => {
    try {
        const profile = await User.findOne({"username": req.params.username})
        res.send(profile)
    } catch (error) {
        console.log(error)
        
    }
})

router.put("/like/:username", verify, async (req, res) => {
    try {
        const addLikeToUser = await User.findOneAndUpdate({"username": req.params.username},
        {$inc: {"upvoteCount": 1}}, {new: true})
        console.log(addLikeToUser)
        res.send(addLikeToUser)
    } catch (error) {
        console.log(error)
    }
})

router.put('/follow/:username', verify, async (req, res) => {
    try {
        // ! This route is when a user profile gets followed by the current user
        // TODO make this routes naming conventions more clear
        console.log("FOLLOW")
        const nowFollowingNewUser = await User.findOneAndUpdate({"username": req.user.username},
        {$addToSet: {"following": req.params.username}}, {new:true})
        res.send(nowFollowingNewUser)
    } catch (error) {
        console.log(error)
    }
})

router.put('/followed/:username', verify, async (req,res) => {
    try {
        const userWithNewFollower = await User.findOneAndUpdate({"username": req.params.username},
        {$addToSet: {"followers": req.user.username}}, {new: true})
        res.send(userWithNewFollower)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router