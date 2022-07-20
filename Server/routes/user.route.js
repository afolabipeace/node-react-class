const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")
router.get("/",userController.getLandingPage)
router.post('/signup',userController.registerUser)
router.post("/login",userController.loginUser)
// router.post('/upload',userController.uploadFile)
module.exports=router 
