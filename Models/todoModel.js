import mongoose from 'mongoose'



//model schema for todo application
const todoSchema = new mongoose.Schema({
    title: {type: String, required : true},
    description:{type: String, required:true},
},
{timestamps:true})

const TodoModel = mongoose.model('todo', todoSchema)
export default TodoModel
