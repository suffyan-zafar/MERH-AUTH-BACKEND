const jwt=require("jsonwebtoken");


const createToken=(id)=>{
  const token=jwt.sign({id},"helloefdfas",{expiresIn:"3d"});
  console.log(token);
  return token;
}


module.exports={createToken};