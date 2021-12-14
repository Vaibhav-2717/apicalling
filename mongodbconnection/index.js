var express=require('express')
var app= express()
var path = require('path')
//var student= require("./router/student")
const mongoose=require('mongoose') 
const EmployeeModel = require('./Employee')
app.use('/student',student)
app.use(express.json());
mongoose.connect("mongodb+srv://vaibhav:labham@cluster0.fhqhd.mongodb.net/test")


app.get('/',function(req,res){
    res.send("hello babes come to server")
})

// app.get('/',function(req,res){
//     res.sendFile('register.html',{root:path.join(__dirname,'./assets')});
// })

app.post('/',function(req,res){
    res.send("how are you.....")
})
app.post("/createuser",async(req,res)=>{
    const user =req.body
    const newuser=new EmployeeModel(user);
    await newuser.save();
    res.json("Data Saved")
})

app.get("/getusers",(req,res)=>{
    EmployeeModel.find({},(err,result)=>{
        if(err){
            res.send();
        }else{ 
           
        }
    })
})
app.listen(3005,function(error){
    if(error)
      console.log(error);
  console.log("welcome to the node js")
})