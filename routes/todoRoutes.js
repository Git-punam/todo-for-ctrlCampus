import express from 'express'
import {getAllTasks, createNewTask, updateTask, deleteTask} from '../controllers/todoController.js'


const router = express.Router()

/**
 @description list of all routes
 */
router.get("/get-all-tasks", getAllTasks)
router.post("/create-new-task", createNewTask)
router.put("/update-task/:id", updateTask)
router.delete("/delete-task/:id", deleteTask)

export default router