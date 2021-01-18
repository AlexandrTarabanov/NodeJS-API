const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    created_at: {
        type: DataTypes.TIME
    },
    title: {
        type: DataTypes.STRING(30)
    },
    price: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING(50)
    },
    UserId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    timestamps: false
});

module.exports = Item