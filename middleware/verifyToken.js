const jwt=require("jsonwebtoken");
const verifyToken= async (req,res,next)=>{
      try{
        console.log(req.headers.authorization);
        const token=req.headers.authorization.split(" ")[1];
        console.log(token);
        const decode= await jwt.verify(token,"helloefdfas");
        if(!decode){
          throw Error("UnAuthorized")
        }
        req.userData=decode;
        next()
      }
      catch(error){
            res.status(401).json({
              message:"UnAuthorized"
            })
      }
}

module.exports={verifyToken};