const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')
const Card = require('../models/Card')

const ownsIt = (user, collection) => {
    for(let card of collection) {
        if(user.username === card.user_username) {
            card.verified = true
        }
    }
}

router.get('/all', verify , async (req, res) => {
    let allCards = await Card.find()
    ownsIt(req.user, allCards)
    console.log(allCards)
    res.send(allCards)
})

router.get('/personal', verify , async (req, res) => {
    personalCards = await Card.find({user_username: req.user.username})
    ownsIt(req.user, personalCards)
    console.log('PERSONAL')
    res.send(personalCards)
})

router.post('/post', verify, async (req, res) => {
    req.body.user_username = req.user.username
    const newCard = await Card.create(req.body)
    res.json(newCard)
})

router.put('/upvote/:cardID', verify, async (req, res) => {
    let upvotedCard = await Card.findByIdAndUpdate(req.params.cardID, 
        {$addToSet: {"upvotes": req.user.username}}, {new: true}
    )
    req.user.username === card.user_username ? upvotedCard.verified = true : upvotedCard.verified = false
    res.send(upvotedCard)
})


module.exports = router