const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    status: {type: DataTypes.STRING}
})

module.exports = {
    Task
}