const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.header('auth-token')
    console.log(token)
    if(!token) return res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        req.error = {status: 400, message: 'Fail'}
        next()
        // res.status(400).send('Invalid Token')
    }
}