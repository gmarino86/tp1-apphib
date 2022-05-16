import * as PostsModel from '../services/posts.service.js'

export function viewAll(req, res) { 
  PostsModel.find()
    .then(function (posts) {
      res.render('posts', { posts })
    })
}

export function getByIdChat(req, res) {
  let idChat = parseInt(req.params.idChat)
  
  PostsModel.findPostByIdChat(idChat)
  .then(function(data){
    let post = data

    PostsModel.getByIdChat(idChat)
    .then(function (comments) {
      console.log('%cposts.controller.js line:19 object', 'color: #007acc;', comments, post);
      res.render('comments', { comments, post })
    })
  })

  
}


export default {
  viewAll,
  getByIdChat
}
