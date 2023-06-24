const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={/places/${place.id} }>
            {place.name}
          </a>
        </h2>
      </div>
    )
  })
  


module.exports.Place = require('./places')
