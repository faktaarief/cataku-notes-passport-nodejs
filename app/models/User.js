module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
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

  User.associate = models => {
    // Write of the table name
    User.hasMany(models.notes, {
      onDelete: 'cascade'
    })
  }

  return User
}
