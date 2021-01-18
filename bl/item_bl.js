const BaseBl = require('./bl')
const ItemRepository = require('../repository/item_repository')

class ItemBl extends BaseBl {
    constructor() {
        super(ItemRepository);
    }
}

module.exports = new ItemBl()