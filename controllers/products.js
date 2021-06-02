const productsModel = require('../models/products')

async function post(req, res) {
  const {
    name,
    brand,
    cost,
    avaliable,
  } = req.body
  
  const product = new productsModel({
    name,
    brand,
    cost,
    avaliable,
  })
  
  product.save()
  
  res.send({
    message: 'success'
  })
}

async function get(req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

  const products = await productsModel.find(obj)

  res.send(products)
}

async function put(req, res) {
  const { id } = req.params

  const product = await productsModel.findOne({ _id: id })

  await product.updateOne(req.body)

  res.send({
    message: 'success'
  })
}

async function remove(req, res) {
  const { id } = req.params

  const remove = await productsModel.deleteOne({ _id: id })

  const message = remove.ok ? 'success' : 'error'

  res.send({
    message: message
  })
}

module.exports = {
  post,
  get,
  put,
  remove,
}
