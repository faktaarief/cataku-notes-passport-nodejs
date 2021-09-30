const cors = require('cors')
const db = require('./app/models')
const express = require('express')
const routes = require('./app/routes')
const passport = require('passport')
const session = require('express-session')

const { PORT, SESSION_SECRET } = require('./app/config/dotenv') || 3000

const app = express()

require('./app/config/passport-local')(passport)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: SESSION_SECRET,
  name: 'login-session',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.use('/users', routes.UserRoute)
app.post('/auth/local/login',
  passport.authenticate('local', { successRedirect: '/users', failureRedirect: '/' }),
)
// app.use('/auth', routes.AuthRoute)

app.use((req, res) => res.status(404).json({ message: 'Not Found'}))

db.sequelize.sync({ force: false })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err))
