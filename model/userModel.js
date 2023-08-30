const moongose=require("mongoose");
const Schema=moongose.Schema;
const userSchema= new Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
})


userSchema.statics.si

module.exports=moongose.model("User",userSchema)
