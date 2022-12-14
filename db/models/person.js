module.exports = (sequelize, DataTypes) => {
   return sequelize.define('person', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bitrh: {
            type: DataTypes.INTEGER
        }
    })
}

