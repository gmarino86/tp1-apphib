import * as ChatsModel from '../services/chats.service.js';
import * as PostsModel from '../services/posts.service.js';

export function getAll(req, res) {
    ChatsModel.findAll()
    .then(function(chats) {
        res.status(200).json(chats)
    })
}

export function getChatById(req, res) {
  let idC = parseInt(req.params.idChat)
  PostsModel.getByIdChat(idC)
    .then(function (comments) {
      res.status(200).json(comments)
    })
    .catch(function (err) {
      res.status(400).json(err)
    })
}

export function editChat(req, res){
  let id = req.params.id

  ChatsModel.modifyChat(id)
  .then(function (){
    res.status(200).json({"estado":true, "message":"Comentario modificado"})
  })
  .catch(function (err) {
    res.status(400).json({"estado":false, "message":"El comentario no se pudo modificar"})
  })
}

export function newChatToPost(req,res){
  let chat = parseInt(req.params.idChat)
  
  ChatsModel.insertMessage(chat)
  .then(function (){
    res.status(200).json({"estado":true, "message":"Comentario insertado"})
  })
  .catch(function () {
    res.status(400).json({"estado":false, "message":"El comentario no se pudo insertar"})
  })
  
}

export default {
    getAll,
    getChatById,
    editChat,
    newChatToPost
}