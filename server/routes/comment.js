const express = require('express')
const route = express.Router()
const verify = require('../verifyToken')
const Comment = require('../models/Comment')

router.post('/post', verify, async (req, res) => {
    try {
        let comment = await Comment.save()
        console.log(comment)
    } catch (error) {
        console.log(error)
    }
})