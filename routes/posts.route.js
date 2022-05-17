import express from 'express' // imporando el objeto express por defecto
import postsController from '../controllers/posts.controller.js'
import catControllerApi from '../controllers/categoria.controller.api.js'

const route = express.Router()

// WEB 
route.get('/', postsController.viewAll)
route.get('/post/:idChat', postsController.getByIdChat)
route.post('/post/:idChat/new', postsController.createComment)


// http://localhost:2022/api/posts
//route.get('/api/posts', postControllerApi.getAll)
// http://localhost:2022/api/posts/{idChat}
//route.get('/api/posts/:idChat', postControllerApi.getByIdChat)


//- Traer todas las categorías (identificador y el nombre de la categoría)
route.get('/api/categorias', catControllerApi.getAll)
//- Traer todos los temas creados hasta el momento
    //- Me debe permitir filtrar por nombre de la categoría
//- Traer todos los usuarios en el sistema (identificador y el nombre del usuario)
//- Traer los comentarios de un tema especifico
//- Modificar el texto de un comentario realizado en un tema
//- Permitir crear un comentario en un tema particular
//- Eliminar un tema
//- Crear una categoría
//- Modificar una categoría

export default route
