const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})
const Controller = require('./controller')
const UserBl = require('../bl/user_bl')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

class UserController extends Controller {
    constructor() {
        super(UserBl);
    }

    getCurrent = async (req, res) => {
        await this.Bl.GetById(req.user.id)

        try {
            res.status(200).json(req.user)
        } catch (err) {
        }
    }

    Register = async (req, res) => {
        console.log(req.body.email)
        const candidate = await this.Bl.isRegister({where: {email: req.body.email}})
        if (candidate) {
            res.status(409).json({
                message: 'User already in'
            })
        } else {
            const salt = bcrypt.genSaltSync(10)
            const password = req.body.password
            await this.Bl.registerUser({
                phone: req.body.phone,
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(password, salt),
            })
        }
        try {
            res.json('Added')
        } catch (err) {
            res.status(422).json({
                    field: "current_password",
                    message: "Wrong current password"
                },
            )
        }
    }
    Login = async (req, res) => {
        const candidate = await this.Bl.isRegister({where: {email: req.body.email}})
        if (candidate) {
            const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
            if (passwordResult) {

                const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate.id
                }, process.env.JWTKEY, {expiresIn: 60 * 60})

                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else {
                res.status(422).json({
                    field: "password",
                    message: "Wrong email or password"
                })

            }
        }
    }
}

module.exports = new UserController()