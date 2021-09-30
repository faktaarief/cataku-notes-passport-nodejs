module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    google_id: {
      type: DataTypes.STRING,
    },

    facebook_id: {
      type: DataTypes.STRING,
    }
  })

  UserModel.associate = models => {
    // Write of the table name
    UserModel.hasMany(models.notes, {
      onDelete: 'cascade'
    })
  }

  return UserModel
}
