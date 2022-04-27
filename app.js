const express=require('express')
const app=express()
const port=3500;

app.get("/hello",(req,res,next)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`App is running on ${port}...`)
})