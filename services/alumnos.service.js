import fs from 'fs'

async function findByID (id) {
  // Leer el archivo alumnos.json
  return find()
    .then(function (alumnos) {
      for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
          console.log('Lo encontre!', alumnos[i])
          return alumnos[i]
        }
      }
    })
}

async function find () {
  // Leer el archivo alumnos.json
  return fs.promises.readFile('./data/alumnos.json')
    .then(function (bytes) {
      return JSON.parse(bytes.toString())
    })
    .catch(function (data) {
      return []
    })
}

async function create (alumno) {
  let newAlumno = null
  return find()
    .then(function (alumnos) {
      newAlumno = { ...alumno, id: alumnos.length + 1 }
      alumnos.push(newAlumno)
      return fs.promises.writeFile('./data/alumnos.json', JSON.stringify(alumnos))
    })
    .then(function () {
      return newAlumno
    })
}

export {
  findByID,
  find,
  create
}
