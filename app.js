import express from 'express'
import PersonasRouter from './routes/personsRoute.js'

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({
  extended: false
}))
app.use(PersonasRouter)

app.listen(1880, function () {
  console.log('Hola Mundo!')
})
