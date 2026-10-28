import { Router } from "express";
import * as TaskController from "../controllers/task.controller.js";

const taskRouter = Router();

/**
 *  POST /api/task/create
 */
taskRouter.post("/create", TaskController.CreateTask);

/**
 * GET /api/task/
 */
taskRouter.get("/", TaskController.GetTasks);

/**
 * PUT /api/task/edit/:id
 */
taskRouter.put("/edit/:id", TaskController.UpdateTask);

/**
 * DELETE /api/task/delete/:id
 */
taskRouter.delete("/delete/:id", TaskController.DeleteTask);

export default taskRouter;
