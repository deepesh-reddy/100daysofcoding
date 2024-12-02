require("dotenv").config()
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hey");
})

app.get("/login",(req,res)=>{
    res.send('<h1>Login at chai aur code</h1>')
})

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);    
})