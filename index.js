const express = require('express');
const session = require('express-session');
const {User,Product} = require('./utils/migrations')
User.sync({
    alter:true
})
Product.sync({
    alter:true
})


require('dotenv').config()
/*const redis = require('redis');
const connectRedis = require('connect-redis');*/
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'secret$%^134',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // if true only transmit cookie over https
        httpOnly: false, // if true prevent client side JS from reading the cookie 
        maxAge: 1000 * 60 * 10 // session max age in miliseconds
    }
}))
app.post('/register',(req,res)=>{
    try{
        const user = User.create(req.body)

        res.status(200).send(user.dataValues)
    }catch(e){
        res.status(500).send({error:"some error happened"})
    }
    
})
app.post('/login',async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({
        where:{
            email,
            password
        }
    })
    if(user){
        req.session.user = user.dataValues.id
        return res.status(200).send(user.dataValues)
    }
    else{
        return res.status(401).send({error:'not Authorized'})
    }
})
app.get('/profile',async (req,res)=>{
    if(req.session.user){
        const user = await User.findByPk(req.session.user)
        if(user){
            return res.status(200).send(user.dataValues)
        }
    }
        return res.status(401).send({error:'not Authorized'})
})

app.listen(3000)