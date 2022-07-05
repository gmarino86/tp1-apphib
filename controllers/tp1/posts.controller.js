import * as PostsModel from "../services/posts.service.js";
import * as CategoryModel from "../services/categorias.service.js";

export function viewAll(req, res) {
  PostsModel.find()
  .then(function (posts) {
    CategoryModel.find()
    .then(function (categoria){
      res.render("posts", { posts, categoria })
    })
  });
}

export function getByIdChat(req, res) {
  let idChat = parseInt(req.params.idChat);

  PostsModel.findPostByIdChat(idChat)
  .then(function (data) {
    PostsModel.getByIdChat(idChat)
    .then(function (comments) {
      res.render("comments", { comments, data, idChat });
    });
  });
}

export function createComment(req, res){
  let idChat = parseInt(req.params.idChat);
  let mensaje = req.body.mensaje

  PostsModel.createComment(idChat, mensaje)
  .then(function(comment){
    res.redirect('http://localhost:2022/post/'+idChat)
  })
}

export default {
  viewAll,
  getByIdChat,
  createComment
}