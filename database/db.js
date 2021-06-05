const mongoose = require('mongoose')

function connect() {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useUnifiedTopology', true)

  const MONGODB_URI = 'mongodb+srv://jeanlimadev:MH3pcwn8prMlUOOe@crud-products-react.znobd.mongodb.net/crud-products-react?retryWrites=true&w=majority'
  
  mongoose.connect(MONGODB_URI)
  
  const db = mongoose.connection
  
  db.once('open', () => {
    console.log('Connected to database')
  })
  
  db.on('error', console.error.bind(console, 'connection error:'))
}

module.exports = {
  connect
}
