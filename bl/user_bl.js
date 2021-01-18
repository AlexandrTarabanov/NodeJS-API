const BaseBl = require('./bl')
const UserRepository = require('../repository/user_repository')


class UserBl extends BaseBl {
    constructor() {
        super(UserRepository);
    }

    isRegister = (body) => {
        return this.repository.isRegister(body)
    }
    registerUser = (body) => {
        return this.repository.registerUser(body)
    }

    createLogin = (hash) => {
        return this.repository.createLogin(hash)
    }
    findPassword = (candidate) => {
        return this.repository.findPassword(candidate)
    }
}

module.exports = new UserBl()