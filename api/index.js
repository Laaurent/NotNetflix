const express = require('express')
const bodyParser = require('body-parser')
const Joi = require('Joi')
const validator = require('express-joi-validation').createValidator({})

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/user.routes')(app, Joi, validator)
require('./routes/commentaire.routes')(app, Joi, validator)
require('./routes/role.routes')(app,Joi,validator)


app.post('/',async (req,res) => {
    console.log(req.body)
    console.log('HELLO WORLD')
})


app.listen(port)