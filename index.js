const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()
const pgPromise = require('pg-promise')()
const database = pgPromise({ database: 'DinoDB' })
const query = 'SELECT * FROM dinosaursdb'
const queryuser = 'SELECT * FROM dinosaursdb WHERE id = ${id}'

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  database.any(query).then(rows => {
    res.render('index', { rows })
  })
})

app.get('/api/dinosaurs/:id', (req, res) => {
  const id = parseInt(req.params.id)
  database.one(queryuser, { id: id }).then(dino => {
    res.render('dino', { dino })
  })
})
//Make a form to add a new dinosuar
app.get('/api/dinosaurs', (req, res) => {
  res.render('new')
})

app.post('/api/dinosaurs', (req, res) => {
  let newDino = {
    name: req.body.name,
    imageurl: req.body.imageurl,
    length: req.body.length,
    weight: req.body.weight,
    habitat: req.body.habitat
  }
  database
    .one(
      `INSERT INTO dinosaursdb (name, imageurl, length, weight, habitat) VALUES ($(name), $(imageurl), $(length), $(weight), $(habitat)) RETURN id`,
      newDino
    )
    .then(newDino => {
      res.redirect('/')
    })
})

// app.delete('/api/dinosaurs/:id', (req, res) => {
//   const dinoId = parseInt(req.params.id)
//   allDinos = allDinos.filter(dino => dino.id !== dinoId)
//   res.json(allDinos)
// })
//
// app.put('/api/dinosaurs/:id', (req, res) => {
//   const dinoId = parseInt(req.params.id)
//   const myDino = allDinos.find(dino => {
//     return dino.id === dinoId
//   })
//   myDino.name = 'Meredith'
//   res.json(myDino)
// })

app.listen(3000, () => {
  console.log("Let's Do This")
})
