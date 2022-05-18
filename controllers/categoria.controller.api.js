import * as CategoriasModel from '../services/categorias.service.js'

export function getAll(req, res) {
    CategoriasModel.find()
    .then(function(categorias) {
        res.status(200).json(categorias)
    })
}

export function insert(req, res) {
    CategoriasModel.insertOne()
    .then(function() {
        res.status(200).json({"estado":true, "message":"Categoria creada"})
    })
    .catch(function(){
        res.status(400).json({"estado":false, "message":"La categoria no pudo ser creada"})
    })
}

export function modificar(req,res){
    let catID = req.params.idCat
    CategoriasModel.modificarXId(catID)
    .then(function (){
        res.status(200).json({"estado":true, "message":"Categoría modificada"})
    })
    .catch(function (){
        res.status(400).json({"estado":false, "message":"La categoría no pudo ser modificada"})
    })
}

export default {
    getAll,
    insert,
    modificar
}