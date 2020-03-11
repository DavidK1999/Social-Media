const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')
const User = require('../models/User')


router.get('/currentUser', verify, async (req,res) => {
    const currentUser = await User.findById(req.user)
    res.json(currentUser)
})


module.exports = router