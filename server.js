const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

// habilita cors
const allowedOrigins = [
  'http://localhost',
  'https://crud-products-react.vercel.app',
  'https://crud-products-react-g2cp15let-jeanlima3915.vercel.app',
]

app.use(cors({
  origin: function(origin, callback) {
    let allowed = true

    // permite conexões sem origin. Exemplo: Mobile Apps
    if (!origin) allowed = true

    // verifica se o origin da request consta na lista de autorizados no array allowedOrigins
    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))

// habilita server para receber dados json
app.use(express.json())

// rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))