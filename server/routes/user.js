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


module.exports = router