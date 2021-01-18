class Repository {

    constructor(model, include) {
        this.model = model;
        this.include = include
    }

    getAllItem = () => {
        return this.model.findAll({include: this.include})
    }

    getByIdItem = (id) => {
        return this.model.findByPk(id, {include: this.include})
    }

    postItem = (body) => {
        return this.model.create(body)
    }

    updateItem = (body, id) => {
        return this.model.update(
            body,
            {
                where: {
                    id: id
                }
            })
    }

    deleteItem = (id) => {
        return this.model.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = Repository
