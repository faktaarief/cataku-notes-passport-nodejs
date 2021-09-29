const { users } = require('../models')

exports.findAll = async () => {
  try {
    return await users.findAll()
  } catch (error) {
    return error.errors
  }
}

exports.create = async (field) => {
  try {
    return await users.create(field)
  } catch (error) {
    return error.errors
  }
}
