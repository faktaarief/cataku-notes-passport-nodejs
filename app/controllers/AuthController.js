const UserService = require('../services/UserService')

exports.login = async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    console.log('MASUKK CONTROLLER')
    
    // Check User
    await UserService.findWhere('email', email)

  } catch (error) {
    return res.status(400).json({ error })
  }
}
