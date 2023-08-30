const express=require("express");
const {verifyToken}=require("../../middleware/verifyToken");
const router=express.Router();

const {getProducts}=require('../../controller/auth-controller/auth');

router.get("/products",verifyToken,getProducts);


module.exports=router;