module.exports = (sequelize, DataTypes) => {
  const NoteModel = sequelize.define('notes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
    }
  })

  NoteModel.associate = models => {
    // Write of the table name
    NoteModel.belongsTo(models.users, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return NoteModel
}
