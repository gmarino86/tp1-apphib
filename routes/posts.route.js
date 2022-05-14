import express from 'express' // imporando el objeto express por defecto
import postsController from '../controllers/posts.controller.js'

const route = express.Router()

// Las rutas no representan archivos
// Consumiendo un recurso

route.get('/', postsController.viewAll)


export default route
