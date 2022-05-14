import * as PostsModel from '../services/posts.service.js'

export function viewAll (req, res) {
  PostsModel.find()
    .then(function (posts) {
      console.log('%cposts.controller.js line:6 posts', 'color: #007acc;', posts);
      res.render('posts', { posts })
    })
}

export default {
  viewAll
}
