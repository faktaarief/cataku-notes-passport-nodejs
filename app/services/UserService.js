const { users } = require('../models')

exports.create = async (body) => {
  try {
    return await users.create(body)
  } catch (error) {
    return Promise.reject(error.errors)
  }
}

exports.findAll = async () => {
  const data = await users.findAll()
  if (!data) return Promise.reject('Datas not found')
  return Promise.resolve(data)
}

exports.findByPk = async (id) => {
  const data = await users.findByPk(id)
  if (!data) return Promise.reject('Data not found')
  return Promise.resolve(data)
}

exports.findWhere = async (field, record) => {
  const data = await users.findOne({
    where: {
      [field]: record
    }
  })
  if (!data) return Promise.reject('Data not found')
  return Promise.resolve(data)
}

exports.update = async (body, id) => {
  const data = await users.update(body, { where: { id } })
  if (!data[0]) return Promise.reject('Fail to update data, please check your field name or value!')
  return Promise.resolve('Successfully updated data!')
}

exports.destroy = async (id) => {
  const data = await users.destroy({ where: { id } })
  if (!data[0]) return Promise.reject('Fail to update data, id not found or please check your input id!')
  return Promise.resolve('Successfully updated data!')
}
