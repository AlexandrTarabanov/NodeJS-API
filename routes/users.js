const express = require('express')
const passport = require('passport')
const userRouter = express.Router()
const UserController = require('../controllers/user_controller')

userRouter.get("/me", passport.authenticate('jwt', {session: false}), UserController.getCurrent)

module.exports = userRouter