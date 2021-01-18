const Repository = require('./repository')
const User = require('../models/user')
const Item = require('../models/item')

class UserRepository extends Repository {
    constructor() {
        super(User, [Item]);
    }

    isRegister = (body) => {
        return this.model.findOne(body)
    }
    registerUser = (body) => {
        return this.model.create(body);
    }
    createLogin = (hash) => {
        return User.create({
            password: hash
        })
    }
    findPassword = (candidate) => {
        return User.findOne({
            where: {id: candidate.id}
        })
    }
}

module.exports = new UserRepository