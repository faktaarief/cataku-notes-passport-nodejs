module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('notes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
    }
  })

  Note.associate = models => {
    // Write of the table name
    Note.belongsTo(models.users, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return Note
}
