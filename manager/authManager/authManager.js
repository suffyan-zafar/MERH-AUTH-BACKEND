const userModel=require("../../model/userModel");
const bcrypt=require("bcrypt");
const {createToken}=require("../../middleware/jwtToken");

const userLogn= async (email,password)=>{
  const user= await userModel.findOne({email});
  if(!user){
    throw Error("Email Not Correct!!");
  }

  const match= await bcrypt.compare(password,user.password);
  if(!match){
    throw Error("password not correct");
  }
  return user;
}

const signUps= async (email,password)=>{
  console.log(email,password,"in manager");
   const exist=await userModel.findOne({email});
   if(exist){
    console.log(exist);
      throw Error("Email Already in use!")
   }

   const salt=await bcrypt.genSalt(10);
   const hash=await bcrypt.hash(password,salt)

   const user= await userModel.create({email,password:hash});
   const token=createToken(user._id);
   return {email:user.email, token:token};

}


module.exports={userLogn,signUps};