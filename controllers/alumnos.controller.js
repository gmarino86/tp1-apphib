import * as AlumnosModel from "../services/alumnos.service.js"

export function findAll(req, res) {
    AlumnosModel.findAll()
    .then(alumnos => {
        res.render('alumnos', {alumnos})
    })
    .catch(() => res.send("No me pude conectar"))
}

export default {
    findAll,
};
