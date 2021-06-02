const mongoose = require('mongoose')

function connect() {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useUnifiedTopology', true)

  const MONGODB_URI = 'mongodb+srv://jeanlima3915:39151806@cluster0.vwhpu.mongodb.net/crud-products-react?retryWrites=true&w=majority'
  
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