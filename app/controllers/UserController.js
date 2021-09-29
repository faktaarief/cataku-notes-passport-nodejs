const { validationResult } = require('express-validator')
const UserService = require('../services/UserService')

exports.findAll = async (req, res) => {
  try {
    const users = await UserService.findAll()
    return res.json({ datas: users })
  } catch (error) {
    return res.json({ error })
  }
}

exports.create = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const user = await UserService.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  
  return res.json({ data: user })
  
}