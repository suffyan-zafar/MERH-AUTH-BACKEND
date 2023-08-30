const {userlogin,signUp}=require("../../service/auth-service/authService");
const {validCode}=require("../../utills/validCode");
const login= async (req,res)=>{
  try{

    const {email,password}=req.body;
    const response= await userlogin(email,password);
    res.status(200).json({ res:response});
  }
  catch(error){
    res.status(validCode(error.status) ? error.status : 500).json({msg:error.message});
  }
}


const SignUp= async (req,res)=>{
  try{
    console.log(req.body);
      const {email,password}=req.body;
      const response= await signUp(email,password);
      console.log(response,"res");
      res.status(200).json({ res:response});
    
    }catch(error){
      res.status(validCode(error.status) ? error.status : 500).json({msg:error.message});
  }
}

const getProducts=(req,res)=>{
      res.send("Get Products");
    
 
}

module.exports={login,SignUp,getProducts};