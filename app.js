import express from 'express'
import PostsRoute from './routes/posts.route.js'
const app = express()

app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 

/* RUTAS */
app.use('/', PostsRoute)


/* SERVER EXPRESS */
app.listen(2022, function () {
  console.log('Server ON! http://localhost:2022')
})
