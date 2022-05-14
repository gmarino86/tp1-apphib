import * as PostsModel from '../services/posts.service.js'

export function viewAll(req, res) {
  
  PostsModel.find()
    .then(function (posts) {
      res.render('posts', { posts })
    })
}

export default {
  viewAll
}