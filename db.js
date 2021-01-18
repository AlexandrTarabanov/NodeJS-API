const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('NodeJS', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});
module.exports = sequelize

const User = require('./models/user')
const Item = require('./models/item')

User.hasMany(Item, {foreignKey: 'UserId'})
Item.belongsTo(User)