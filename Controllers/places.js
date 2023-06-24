const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index', { places })
  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
  }    
  
  module.exports = router

 
  
  


  
