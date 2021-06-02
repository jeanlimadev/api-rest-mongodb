const router = require('express').Router()

const productController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados


router.get('/products/list/:id?', productController.get)
router.post('/products', productController.post)
router.put('/products/:id', productController.put)
router.delete('/products/:id', productController.remove)


module.exports = router