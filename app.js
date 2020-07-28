const express = require("express");
const sequelize=require('sequelize');
const bodyParser = require("body-parser");

const cors=require('cors')

const database = require("./util/database");
const User=require('./model/user');
const userRoute = require("./routes/login");

const app=express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',userRoute)


database.sync().then((result) => {
    return User.findByPk(1).then((user) => {
        if(!user){
            return User.create({
                name:'Aditya',
                age:19,
                email:'p.aditya.198@gmail.com',
                phone:'7985565341',
                password:'1234'
            })
        }
        return user
    }).catch((err) => {
        console.log(err)
    });
}).then(result=>{
    app.listen(3000)
}).catch((err) => {
    console.log(err)
});