const Controller = require('./controller')
const ItemBl = require('../bl/item_bl')
const Item = require('../models/item')

class ItemController extends Controller {
    constructor() {
        super(ItemBl);
    }

    PostItem = async (req, res) => {
        return this.Bl.Post({
            title: req.body.title,
            price: req.body.price,
            UserId: req.user.id
        })
            .then(value => res.json(value)).res.status(200)
            .catch(err => res.status(400).json('Error' + err));

    }
    UploadImage = async (req, res) => {

        console.log(req.file)
        Item.update(
            {
                image: req.file ? req.file.path : ''
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(() => res.json('Added!'))
            .catch(err => res.status(400).json('Error' + err));
    }

}

module.exports = new ItemController()