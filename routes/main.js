const express=require("express");
const router=express.Router();
const auth=require('./auth-routes/auth')
const products=require('./auth-routes/products')

router.use("/auth", auth);

router.use("/product", products);



module.exports=router;