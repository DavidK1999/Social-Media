const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../validation')


router.post('/register', async (req, res) => {
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(400).send('A user with that email already exists')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        savedUser.password = undefined
        const token = jwt.sign({_id: savedUser._id}, process.env.ACCESS_TOKEN_SECRET)
        res.header('auth-token', token).send(savedUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    const { error } = loginValidation(req.body) 
    if(error) return res.status(400).send(error.details[0].message)
    
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Incorrect email')


    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('Incorrect password')

    const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET)

    res.header('auth-token', token).send(user)

})

module.exports = router


