const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  brand: String,
  cost: Number,
  avaliable: Boolean,
})

const Model = mongoose.model('products', schema)

module.exports = Model