class BaseBl {

    constructor(repository) {
        this.repository = repository
    }

    Get = () => {
        return this.repository.getAllItem()
    }
    GetById = (id) => {
        return this.repository.getByIdItem(id)
    }
    Post = (body) => {
        return this.repository.postItem(body)
    }
    Update = (body, id) => {
        return this.repository.updateItem(body, id)
    }
    Delete = (id) => {
        return this.repository.deleteItem(id)
    }
}
module.exports = BaseBl