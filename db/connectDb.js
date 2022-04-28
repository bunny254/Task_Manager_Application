const mongoose= require('mongoose')

const connectionString='mongodb+srv://bunny:Bunny22!@nodeexpressprojects.nrhsf.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB=(url)=>{
    return mongoose.connect(connectionString)
}

module.exports= connectDB;