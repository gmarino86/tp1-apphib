import express from 'express' // imporando el objeto express por defecto

import catControllerApi from '../controllers/categoria.controller.api.js'
import postControllerApi from '../controllers/posts.controller.api.js'
import chatsControllerApi from '../controllers/chats.controller.api.js'
import categoriaControllerApi from '../controllers/categoria.controller.api.js'
import userControllerApi from '../controllers/user.controller.api.js'

const route = express.Router()

//- Traer todas las categorías (identificador y el nombre de la categoría)
route.get('/categorias', catControllerApi.getAll)
//  http://localhost:2022/api/categorias

//- Traer todos los temas creados hasta el momento
route.get('/posts', postControllerApi.getAll)
//  http://localhost:2022/api/posts

//- Me debe permitir filtrar por nombre de la categoría
route.get('/posts/categoria/:categoryName', postControllerApi.getPostCatName)
//  http://localhost:2022/api/posts/categoria/Basura
//  http://localhost:2022/api/posts/categoria/Plastico
//  http://localhost:2022/api/posts/categoria/Reciclaje

//route.get('/chat', chatsControllerApi.getAll)
// http://localhost:2022/api/chat/

//- Traer los comentarios de un tema especifico
route.get('/chat/:idChat', chatsControllerApi.getChatById)
// http://localhost:2022/api/chat/1

//- Modificar el texto de un comentario realizado en un tema
route.patch('/chat/:id/editar',chatsControllerApi.editChat)
// http://localhost:2022/api/chat/62852351c397302d0068e6e6/editar

//- Permitir crear un comentario en un tema particular
route.post('/chat/post/:idChat/nuevo', chatsControllerApi.newChatToPost)
//  http://localhost:2022/api/chat/post/4/nuevo

//- Eliminar un tema
route.delete('/post/:idPost/delete', postControllerApi.deletePost)
//  http://localhost:2022/api/post/62858a3c3afead3e1e77cf6a/delete

//- Crear una categoría
route.post('/categoria/nuevo', categoriaControllerApi.insert)
//  http://localhost:2022/api/categoria/nuevo

//- Modificar una categoría
route.patch('/categoria/:idCat/modificar', categoriaControllerApi.modificar)
//  http://localhost:2022/api/categoria/4/modificar

//- Traer todos los usuarios en el sistema (identificador y el nombre del usuario)
route.get('/users', userControllerApi.getAll)
//  http://localhost:2022/api/users

export default route
