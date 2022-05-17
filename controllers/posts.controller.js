import * as PostsModel from "../services/posts.service.js";

export function viewAll(req, res) {
  PostsModel.find()
  .then(function (posts) {
    console.log('%cposts.controller.js line:6 posts', 'color: #007acc;', posts);
    res.render("posts", { posts });
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
};
