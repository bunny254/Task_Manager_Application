const Task= require('../models/task');
const getAllTasks= async (req,res)=>{
    try {
        const tasks= await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    //res.send("Get all tasks")
}

const createTask= async (req,res)=>{
    try {
    const task= await Task.insertMany(req.body)
    res.status(201).json({task}) 
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}
const getTask= async (req,res)=>{
    try {
       const {id:taskID}= req.params
        const singleTask= await Task.findOne({_id: taskID})
        if (!singleTask){
            return res.status(404).json({msg: `No such task id: ${taskID}`})
        }
        res.status(200).json({singleTask})        
    } catch (error) {
        res.status(500).json({msg:error})        
    }
    //res.json({id:req.params.id})
}
const updateTask= (req,res)=>{
    res.send('Update task')
}
const deleteTask= (req,res)=>{
    res.send('Delete task')
}

module.exports={
    getAllTasks, createTask, getTask, updateTask, deleteTask
}