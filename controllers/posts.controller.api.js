import * as PostsModel from '../services/posts.service.js'

function getAll (req, res) {
  PostsModel.find()
    .then(function (posts) {
      res.status(200).json(posts)
    })
}

export default {
  getAll
}
