const express = require('express')
const passport = require('passport')
const itemRouter = express.Router()
const ItemController = require('../controllers/item_controller')
const upload = require('../bl/upload_service/upload')


itemRouter.get("/", passport.authenticate('jwt', {session: false}), ItemController.Get)
itemRouter.get("/:id", passport.authenticate('jwt', {session: false}), ItemController.GetById)
itemRouter.post("/add", passport.authenticate('jwt', {session: false}), ItemController.PostItem)
itemRouter.put("/:id", passport.authenticate('jwt', {session: false}), ItemController.Update)
itemRouter.put("/upload/:id", passport.authenticate('jwt', {session: false}), upload.single('image'), ItemController.UploadImage)
itemRouter.delete("/:id", passport.authenticate('jwt', {session: false}), ItemController.Delete)


module.exports = itemRouter