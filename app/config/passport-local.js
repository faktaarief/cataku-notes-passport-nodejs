const bcrypt = require('bcryptjs')

const LocalStrategy = require('passport-local').Strategy
const UserService  = require('../services/UserService')

module.exports = (passport) => {
  passport.use(new LocalStrategy(async (email, password, done) => {
    console.log(email)
    // try {
    //   const user = await UserService.findWhere('email', email)
    //   const checkPassword = bcrypt.compareSync(password, user.password)
    //   return done(null, user)
    // } catch (error) {
    //   return done(null, false, error)
    // } 
  }))

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => done(null, id))
}