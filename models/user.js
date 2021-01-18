const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30)
    },
    email: {
        type: DataTypes.STRING(50)
    },
    password: {
        type: DataTypes.STRING(30)
    },
    phone: {
        type: DataTypes.STRING(20)
    }
}, {
    sequelize,
    timestamps: false
});

module.exports = User