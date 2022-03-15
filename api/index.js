const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Joi = require('Joi')
const validator = require('express-joi-validation').createValidator({})
require("dotenv").config();
const app = express()
const port = 4000
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
let corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost'],
    credentials: true,
};
app.use(cors(corsOptions));

require('./routes/auth.routes')(app,Joi,validator)
require('./routes/user.routes')(app, Joi, validator)
require('./routes/commentaire.routes')(app, Joi, validator)
require('./routes/role.routes')(app,Joi,validator)


app.post('/',async (req,res) => {
    console.log(req.body)
    console.log('HELLO WORLD')
})


app.listen(port)