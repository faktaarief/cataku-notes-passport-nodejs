const cors = require('cors')
const db = require('./app/models')
const express = require('express')
const routes = require('./app/routes')
const { PORT } = require('./app/config/dotenv') || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.use('/users', routes.UserRoute)

app.use((req, res) => res.status(404).json({ message: 'Not Found'}))

db.sequelize.sync({ force: false })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err))
