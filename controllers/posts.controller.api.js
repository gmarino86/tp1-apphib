import * as PostsModel from '../services/posts.service.js'

function getAll (req, res) {
  PostsModel.find()
    .then(function (posts) {
      res.status(200).json(posts)
    })
}

function getByIdChat (req, res) {
  let idChat = parseInt(req.params.idChat)
  PostsModel.getByIdChat(idChat)
  .then(function(comments) {
    res.status(200).json(comments)
  })
  .catch(function(err){
    res.status(400).json(err)
  })
}

export default {
  getAll,
  getByIdChat
}
