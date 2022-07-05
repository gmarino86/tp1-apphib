import * as UsersModel from '../services/usuarios.service.js'

export function getAll(req, res) {
    UsersModel.find()
    .then(function(users) {
        res.status(200).json(users)
    })
}
export default {
    getAll
}