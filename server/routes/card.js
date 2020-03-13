const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')
const Card = require('../models/Card')


router.get('/all',  verify , async (req, res) => {
    allCards = await Card.find()
    res.send(allCards)
})

router.post('/post', verify, async (req, res) => {
    req.body.user_username = req.user.username
    const newCard = await Card.create(req.body)
    res.send(newCard)
})


module.exports = router