const userModel = require("../models/user.model")
const cloudinary = require("cloudinary")
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
const getLandingPage = (req,res)=>{
    res.send({messages:[
        {name:"kunle",schoole:"SQI"},
        {name:"OLA",schoole:"SQI"}
    ]})
}
const registerUser = (req,res)=>{
    const newUser=req.body
    const form  = new userModel(newUser)
    form.save((err)=>{
        if(err){
            console.log(err)
            console.log("error")
                res.send({message:"user signup failed, please try again later",status:false})
        }else{
            res.send({message:"registration successful",status:true})
        }
    })
}
const loginUser = (req,res)=>{
    const newUser=req.body
    const form  = new userModel(newUser)
    form.save((err)=>{
        if(err){
            console.log(err)
            console.log("error")
                res.send({message:"user login failed, please try again later",status:false})
        }else{
            res.send({message:"login successful",status:true})
        }
    })
}
const uploadFile=(req,res)=>{
    const file = req.body.myFile
    cloudinary.v2.uploader.upload(file,(err,result)=>{
        if(err){
            console.log(err)
            res.send({message:"error"})
        }else{
            console.log(result.secure_url)
            res.send({message:"upload successful",image:result.secure_url})
        }
    });
}
module.exports={getLandingPage,registerUser,uploadFile,loginUser}