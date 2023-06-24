// GET /places
// app.get('/', (req, res) => {
//     let places = []
//     res.render('places/index', { places })
//   })
  router.get('/new', (req, res) => {
    res.render('places/new')
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

 
  
  
  