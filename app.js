import express from 'express'
import AlumnosRoute from './routes/alumnos.route.js'
const app = express()

app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 

/* RUTAS */
app.use('/', AlumnosRoute)
app.get('/ruta/prueba', function (req, res) {
  res.render('hola', { titulo: '<strong>Hola</strong>', mostrar: true })
})


/* SERVER EXPRESS */
app.listen(2022, function () {
  console.log('Hola! http://localhost:2022')
})
