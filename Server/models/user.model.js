const mongoose = require("mongoose")
const userSchema= mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
})
const userModel = mongoose.model('user_tb',userSchema)
module.exports= userModel