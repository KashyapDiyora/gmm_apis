const express = require('express');
const {router} = require('./Routers/user_registration.router.js')
const path = require('path')

const app = express();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))
console.log(__dirname);

app.use(express.json());

app.use('/images',express.static('uploads'));

app.get('/',(req,res,next) => {
    return res.render('index');
})

app.use('/api',router);

module.exports = {app};