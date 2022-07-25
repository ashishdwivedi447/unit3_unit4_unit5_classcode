const express = require("express");
const app = express();

app.get("/home",(req,res)=>{
    res.send("HemlloBody");
})

app.get("/books",(req,res)=>{
    res.send("{book1:namw,}{book1:name2}")
})

app.listen(5000 ,()=>{
    console.log("HelooHelo")
})
