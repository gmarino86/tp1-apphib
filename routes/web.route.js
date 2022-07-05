import express from 'express'
import alumnosController from '../controllers/alumnos.controller.js'

const route = express.Router()

route.get('/', alumnosController.findAll)
// route.get('/post/:idChat', postsController.getByIdChat)
// route.post('/post/:idChat/new', postsController.createComment)



export default route
