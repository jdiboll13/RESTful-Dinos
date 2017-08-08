const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})
let allDinos = [
  {
    id: 1,
    name: 'Tyrannosaurus Rex',
    color: ['Green', 'Tan'],
    length: '42 feet',
    weight: '7 tons',
    habitat: 'Temperate Coniferous Forest'
  },
  {
    id: 2,
    name: 'Velociraptor',
    color: ['Green', 'Orange'],
    length: '6 feet',
    weight: '33 lbs',
    habitat: 'Desert'
  },
  {
    id: 3,
    name: 'Triceratops',
    color: ['Tan', 'Brown'],
    length: '26 feet',
    weight: '12 tons',
    habitat: 'Temperate Coniferous Forest'
  },
  {
    id: 4,
    name: 'Brachiosaurus',
    color: ['Gray', 'Tan'],
    length: '85 feet',
    weight: '50 tons',
    habitat: 'Temperate Deciduous Forest'
  },
  {
    id: 5,
    name: 'Stegosaurus',
    color: ['Green', 'Orange', 'Tan'],
    length: '30 ft',
    weight: '5 tons',
    habitat: 'Grassland'
  },
  {
    id: 6,
    name: 'Iguanodon',
    color: ['Brown', 'Tan'],
    length: '33 feet',
    weight: '3.5 tons',
    habitat: 'Temperate Deciduous Forest'
  }
]

app.listen(3000, () => {
  console.log("Let's Do This")
})
