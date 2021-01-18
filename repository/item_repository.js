const Repository = require('./repository')
const Item = require('../models/item')
const User = require('../models/user')

class ItemRepository extends Repository {
    constructor() {
        super(Item, [User]);
    }

}

module.exports = new ItemRepository