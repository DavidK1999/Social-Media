const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')
const Card = require('../models/Card')


router.post('/post', verify, async (req, res) => {
    req.body.user_username = req.user.username
    const newCard = await Card.create(req.body)
    console.log(newCard)
})


module.exports = router