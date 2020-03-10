require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT
const passport = require('passport');
const cors = require('cors');
require('./db/db.js')

const allowedOrigins = ['http://localhost:3000']

app.use(cors({
    origin: function(origin, callback) {
        if(!origin) return callback(null, true)
        
        if(allowedOrigins.indexOf(origin) === -1) {
            let msg = 'Not allowed by cors'
            return callback(new Error(msg), false)
        }

        return callback(null, true)
    }
}))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())

const actionRoutes = require('./routes/action')
const authRoutes = require('./routes/auth')

// * Middleware
app.use(express.json());

// * Route Middleware
app.use('/api/action', actionRoutes)
app.use('/api/auth', authRoutes)

app.listen(port, (req, res) => console.log('Listening on port', port))
