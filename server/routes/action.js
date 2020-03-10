const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')


router.get('/', verify, (req,res) => {
    console.log('Hey')
});


module.exports = router