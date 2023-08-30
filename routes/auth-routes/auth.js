const express=require("express");

const router=express.Router();

const {login,SignUp}=require('../../controller/auth-controller/auth');

router.post("/login",login);

router.post("/signup",SignUp);


module.exports=router;