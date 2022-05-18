import express from 'express'
import postsController from '../controllers/posts.controller.js'

const route = express.Router()

route.get('/', postsController.viewAll)
route.get('/post/:idChat', postsController.getByIdChat)
route.post('/post/:idChat/new', postsController.createComment)

export default route
