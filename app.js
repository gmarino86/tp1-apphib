import express from 'express'
import WebRoute from './routes/web.route.js'
// import ApiRoute from './routes/api.route.js'

const app = express()

app.set('view engine', 'ejs')
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) 


app.use('/', WebRoute)
// app.use('/api', ApiRoute)

/* SERVER EXPRESS */
app.listen(2022, function () {
  console.log('Server ON! http://localhost:2022')
})


