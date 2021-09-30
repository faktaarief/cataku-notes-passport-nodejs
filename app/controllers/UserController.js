const UserService = require('../services/UserService')
const bcrypt = require('bcryptjs')

exports.create = async (req, res) => {
  try {
    return res.json({
      data: await UserService.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      })
    })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

exports.findAll = async (req, res) => {
  try {
    return res.json({ datas: await UserService.findAll() })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

exports.findByPk = async (req, res) => {
  try {
    return res.json({ data: await UserService.findByPk(req.params.id) })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

exports.update = async (req, res) => {
  try {
    return res.json({ data: await UserService.update(req.body, req.params.id) })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

exports.destroy = async (req, res) => {
  try {
    return res.json({ data: await UserService.destroy(req.params.id) })
  } catch (error) {
    return res.status(400).json({ error })
  }
}
