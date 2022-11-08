import TodoModel from "../models/todoModel.js"


/**
 * @description view all list of tasks
 */
export const getAllTasks = async (req,res) =>{
    try {
        const getAllTasks = await TodoModel.find({});
        res.status(200).json(
            {
                success:'true',
                message:"All tasks fetched successfully",
                data:getAllTasks
                
            }
        )
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}



/**
 * @description create a new task
 */
export const createNewTask = async (req, res) =>{
    const {title, description}= req.body
    try {
        const createNewTask = new TodoModel({title,description})
        const newTask = await createNewTask.save();
        if(newTask){
            res.status(200).json({
                success:true,
                message: "Task Added successfully",
                data: newTask
            })
        }
        else{
            res.status(400).json({
                success:true,
                message: "Something went worng",
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}



/**
 * @description update a task by given id
 */
export const updateTask = async (req,res) =>{
    const {id} = req.params;
    const {title,description} = req.body;
    try {
        const taskToBeUpdated = await TodoModel.findByIdAndUpdate({_id:id},{
            title,
            description
        },{new:true});
        if(taskToBeUpdated){
            res.status(200).json(
                {
                    success:'true',
                    message:"Task updated successfully",
                    data:taskToBeUpdated
                    
                }
    
            )
        }
        else{
            res.status(404).json({
                success:false,
                message: "Task not found!"
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}



/**
 * @description delete a task by given id
 */
export const deleteTask = async (req,res) =>{
    const {id} = req.params;
    try {
        const taskToBeDeleted = await TodoModel.findByIdAndDelete({_id:id});
        if(taskToBeDeleted){
            res.status(200).json(
                {
                    success:'true',
                    message:"Task deleted successfully",
                    data : taskToBeDeleted
                    
                }
            )
        }
        else{
            res.status(404).json({
                success:false,
                message: "Task not found!"
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}