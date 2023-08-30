const express=require("express");
const app=express();
const routes=require("./routes/main");
const moongose=require("mongoose");
const cors=require("cors");

const baseUrl=require("./properties/properties").DB_URL;
moongose.connect(baseUrl);

moongose.connection.on('connected', () => {
  console.log("Mongoose connection  Established");
})

app.use(cors());
const port=6001;
app.use(express.json())
app.use("/api",routes);


app.use((req,res,next)=>{
    res.status(404).send({msg:"Route Not Found"});
    next();
})

app.listen(port, ()=>{
  console.log(`Server is running at ${port}`);
});