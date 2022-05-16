import express from 'express' // imporando el objeto express por defecto
import postsController from '../controllers/posts.controller.js'
import postControllerApi from '../controllers/posts.controller.api.js'

const route = express.Router()

// Principal
route.get('/', postsController.viewAll)
route.get('/post/:idChat', postsController.getByIdChat)

// http://localhost:2022/api/posts
route.get('/api/posts', postControllerApi.getAll)
// http://localhost:2022/api/posts/{idChat}
route.get('/api/posts/:idChat', postControllerApi.getByIdChat)

export default route
