const credentialValidation=( email,password)=>{
      if(!email && !password){
        throw Error("All fields required");
      }
      if(!email){
        throw Error("Email field is required");
      }
      if(!password){
        throw Error("Password field is required");
      }
}


module.exports={credentialValidation};