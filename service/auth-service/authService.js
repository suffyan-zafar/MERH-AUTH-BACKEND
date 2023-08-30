const {userLogn,signUps} = require("../../manager/authManager/authManager");
const {credentialValidation}=require("../../utills/credentialValidation")
const {createToken}=require("../../middleware/jwtToken")


const userlogin= async (email,password)=>{
  credentialValidation(email,password);
  const user=await userLogn(email,password)
  const token=createToken(user._id);
  console.log(user,"user");
  return {email:user.email,token:token} ;
}

const signUp=(email,password)=>{
  credentialValidation(email,password);
  return signUps(email,password);
}


module.exports={userlogin,signUp};