const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const bodyParser = require('body-parser');
const userRouter = require('./routes/users')
const itemRouter = require('./routes/items')
const passport = require('passport')


//Server Configs
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

//Routes
app.get('/', ((req, res) => res.send('Welcome')))
app.use('/users', userRouter)
app.use('/items', itemRouter)

//Auth Route
app.use('/auth', require('./routes/auth'))

//passport
app.use(passport.initialize())
require('./passport/passport')(passport)
app.use(passport.session())

//DataBase connection controller
sequelize.authenticate().then(function (errors) {
    console.log(errors)
});

//Server connection controller
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})