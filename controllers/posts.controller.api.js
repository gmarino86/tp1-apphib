import * as PostsModel from "../services/posts.service.js";
import * as CategoryModel from "../services/categorias.service.js";

function getAll(req, res) {
  PostsModel.find().then(function (posts) {
    res.status(200).json(posts);
  });
}

function getPostCatName(req, res) {
  let categoryName = req.params.categoryName

  CategoryModel.filterByName(categoryName)
    .then(function (categoria) {
      PostsModel.getPostWithCategory(categoria)
        .then(function (posts) {
          res.status(200).json(posts);
        })
        .catch(function (err){
          res.status(400).json("No hay categoria con ese nombre");
        })
    })
    .catch(function (err) {
      res.status(400).json(err);
    })
}

function deletePost(req,res){
  let post = req.params.idPost
  
  PostsModel.borrar(post)
  .then(function (data) {
    res.status(200).json(data);
  })
  .catch(function (err){
    res.status(400).json(err);
  })
}

export default {
  getAll,
  getPostCatName,
  deletePost
}
