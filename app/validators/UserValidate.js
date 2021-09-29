const { body } = require('express-validator')

const UserValidate = () => {
  return [
    body('email', 'Email must be valid!').isEmail()
  ]
}

module.exports = UserValidate
