// Routes for authentication endpoints (Register, Login, refresh token, logout)
//Route --> user model
const express = require('express')
const router = express.Router()
const user = require('../models/auth')


router.post('/register',user.register)
router.post('/login',user.login)
router.post('/refreshtoken', user.refreshtoken)
router.delete('/logout', user.logout)


module.exports = router