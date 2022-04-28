require('./db/connectDb')
const express=require('express')
const app=express()
const port=3500;
const tasks=require('./routes/tasks')
const connectDB= require('./db/connectDb')

//middleware
app.use(express.json())

//routes
app.get("/hello",(req,res,next)=>{
    res.send("Hello World")
})

app.use('/api/v1/tasks', tasks)

//app.get('/api/vi/tasks')      -get all the tasks
//app.post('/api/vi/tasks')     -create a new task
//app.get('/api/vi/tasks/:id')  -get a single task
//app.patch('/api/vi/tasks')    -update a task
//app.delete('/api/vi/tasks')   -delete a task

 const start=async ()=>{
     try {
         await connectDB()
         app.listen(port,()=>{
    console.log(`App is running on ${port}...`)
})
     } catch (error) {
         console.log(error);         
     }
 }

start ()
